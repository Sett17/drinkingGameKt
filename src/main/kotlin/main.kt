import compos.options
import compos.play
import compos.pregame
import compos.startmenu
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLDivElement

fun main() {
    window.onload = {
        when (Regex("(?<=([?&])page=)\\w+").find(window.location.toString())?.value) {
            "startemenu" -> changePage(startmenu())
            "pregame" -> changePage(pregame())
            "play" -> changePage(play())
            "options" -> changePage(options())
            else -> {
                changePage(startmenu())
            }
        }
    }

}

fun changePage(compo: HTMLDivElement) {
    document.getElementById("root")!!.replaceWith(compo)
}