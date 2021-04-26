package compos

import kotlinx.browser.document
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.span
import kotlinx.html.unsafe
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node

fun play(): HTMLDivElement {
    return document.create.div {
        id = "root"
        div {
            id = "play-name"
            div {
                id = "play-spacer"
                span {
                    +"Trinkalternative"
                    unsafe {
                        raw("""
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="36"
                                height="36" viewBox="0 0 36 36" xml:space="preserve" style="background-color: transparent">
                                <path stroke="floralwhite" stroke-width="3px" stroke-linejoin="round" stroke-linecap="round" fill="black"
                                    d="m18 3 v20 m0 0 l-5 -5 h10 l-5 5 z" />
                            </svg>
                        """.trimIndent())
                    }
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
}