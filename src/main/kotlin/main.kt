//import compos.startmenu
import compos.startmenu
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.dom.clear
import kotlinx.html.dom.append
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement

fun main() {
    window.onload = {
        when (Regex("/(?<=([?&])page=)\\w+/g").find(window.location.toString())) {

            else -> {
                changePage(startmenu())
            }
        }
    }
}

fun changePage(compo: HTMLDivElement) {
    console.log(compo)
    document.getElementById("root")!!.run {
        replaceWith(compo)
    }
}