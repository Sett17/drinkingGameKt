import compos.options
import compos.play
import compos.pregame
import compos.startmenu
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get

fun main() {
    window.onload = {
        when (window.location.hash) {
            "#startemenu" -> changePage(startmenu())
            "#pregame"    -> changePage(pregame()) { playerList.update() }
            "#play"       -> changePage(play()) { availableCards.putCard() }
            "#options"    -> changePage(options()) {
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
            else          -> changePage(startmenu())
        }
    }

}

fun changePage(compo: HTMLDivElement, doAfter: () -> Unit = {}) {
    document.getElementById("root")!!.replaceWith(compo)
    doAfter()
}
