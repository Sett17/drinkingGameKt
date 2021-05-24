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

// TODO: 5/16/2021 hiding elements on pregame on mobile bugs
// TODO somehow make dragging way smoother; no idea how tho

const val CACHE = "v1.2.0"

var currentPage = "#startmenu"

fun main() {
    window.onpopstate = {
        handlePageChange()
    }
    window.onload = {
        document.documentElement!!.classList.remove("themeLight")
        document.documentElement!!.classList.remove("themeDark")
        document.documentElement!!.classList.add(if (session["isDark"] == true) "themeDark" else "themeLight")
        document.body!!.append {
            div {
                id = "version"
                onClickFunction = {
                    reloadFresh()
                }
                +CACHE
            }
        }
        handlePageChange()
    }

}

fun handlePageChange() {
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

