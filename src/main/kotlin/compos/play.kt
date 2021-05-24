package compos

import currentPage
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onLoadFunction
import org.w3c.dom.HTMLDivElement

fun play(): HTMLDivElement {

    window.location.hash = "#play"
    currentPage = "#play"

    game.isRunning = true

    return document.create.div {
        id = "root"
        div {
            id = "play-name"
            +"spater"
        }
        div {
            id = "play-spacer"
            span {
                +"Trinkalternative"
            }
            unsafe {
                raw(
                    """
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36"
                                height="36" viewBox="0 0 36 36" xml:space="preserve" style="background-color: transparent">
                                <path stroke="floralwhite" stroke-width="3px" stroke-linejoin="round" stroke-linecap="round" fill="black"
                                    d="m18 3 v20 m0 0 l-5 -5 h10 l-5 5 z" />
                            </svg>
                        """.trimIndent()
                )
            }
        }
        div {
            id = "card-wrapper"
            div {
                id = "card"
            }
        }
    }
}
