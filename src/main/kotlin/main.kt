import compos.options
import compos.play
import compos.pregame
import compos.startmenu
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.dom.append
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.events.EventModifierInit
import org.w3c.dom.get
import org.w3c.fetch.Response
import org.w3c.workers.FetchEvent
import org.w3c.workers.InstallEvent
import org.w3c.workers.ServiceWorkerGlobalScope

external val self: ServiceWorkerGlobalScope

const val CACHE = "v1.1.0"

var currentPage = "#startmenu"

fun main() {
    window.onpopstate = {
        handlePageChange()
    }
    window.onload = {
        document.body!!.append {
            div {
                id = "version"
                onClickFunction = {
                    console.log("v btn")
                    reloadFresh()
                }
                +CACHE
            }
        }
        handlePageChange()
    }

}

fun handlePageChange() {
    console.log("page change!")
    if (window.location.hash == "#pregame" && currentPage == "#play") {
        window.location.hash = "#play"
        return
    }
    when (window.location.hash) {
        "#startemenu" -> changePage(startmenu())
        "#pregame"    -> changePage(pregame()) { playerList.update() }
        "#play"       -> changePage(play()) { availableCards.putCard() }
        "#options"    -> changePage(options()) { optionsDoAfter() }
        else          -> changePage(startmenu())
    }
}

fun optionsDoAfter() {
    val wrapper = document.querySelectorAll(".options-wrapperInside")
    options.updateAllViews()
    if (isMobile()) {
        repeat(wrapper.length) {
            wrapper[it].asDynamic().style.flexDirection = "column"
        }
    } else {
        repeat(wrapper.length) {
            wrapper[it].asDynamic().style.flexDirection = "row"
        }
    }
}

fun changePage(compo: HTMLDivElement, doAfter: () -> Unit = {}) {
    document.getElementById("root")!!.replaceWith(compo)
    doAfter()
}

