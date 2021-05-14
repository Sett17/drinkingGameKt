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

external val CACHE: String

// TODO: 5/13/2021 make back button usable (changePage to likely page)

fun main() {
    window.onload = {
        document.body!!.append {
            div {
                id = "version"
                onClickFunction = {
                    reloadFresh()
                }
                +CACHE
            }
//              <div id="version" onclick="reloadFresh()">holaque</div>
        }
        when (window.location.hash) {
            "#startemenu" -> changePage(startmenu())
            "#pregame"    -> changePage(pregame()) { playerList.update() }
            "#play"       -> changePage(play()) { availableCards.putCard() }
            "#options"    -> changePage(options()) { optionsDoAfter() }
            else          -> changePage(startmenu())
        }
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

