@file:Suppress("SuspiciousCollectionReassignment")

package compos

import card
import kotlinx.browser.document
import kotlinx.html.*
import kotlinx.html.dom.create
import options
import org.w3c.dom.HTMLElement
import playerList
import replaceMultiple
import kotlin.math.ceil

fun cardCompo(data: card): HTMLElement {
    data.title = (js("data.title") as String)
    data.text = (js("data.text") as String)
    data.set = (js("data.set") as String)
    data.all = (js("data.all") as Boolean)
    data.sips = (js("data.sips") as Int)
    var cardPlayer = ""
    if (data.all) {
        document.querySelector("#play-name")!!.textContent = "Alle"
    } else {

        document.querySelector("#play-name")!!.textContent = playerList.randomPlayer().also { cardPlayer = it }
    }
    return document.create.div {
        id = "card"
        classes += "blur"
        div {
            id = "card-title"
            +data.title
        }
        div {
            id = "card-text"
            +data.text.replaceMultiple(
                Regex("\\[NAME\\d+]")
            ) {
                var zz = playerList.randomPlayer()
                while (zz === cardPlayer) {
                    zz = playerList.randomPlayer()
                }
                return@replaceMultiple zz
            }
        }
        div {
            id = "card-footer"
            div {
                id = "card-set"
                +data.set
            }
            div {
                id = "card-alt"
                unsafe {
                    raw(
                        """
                             <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="36"
                                 viewBox="0 0 15 36" xml:space="preserve" style="background-color: transparent">
                                <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%">
                                    <stop stop-color="#FF0000" offset="0%"/>
                                    <stop stop-color="#FF7F00" offset="20%"/>
                                    <stop stop-color="#00BC3F" offset="40%"/>
                                    <stop stop-color="#0068FF" offset="60%"/>
                                    <stop stop-color="#7A00E5" offset="80%"/>
                                    <stop stop-color="#D300C9" offset="100%"/>
                                </linearGradient>
                                <path fill="hsl(${120 - 60 * (options.difficulty.level ?: 0)}, 90%, 64%)" d="m2,31 v-11 h11 v11 a1,.5,0,0,1,-11,0"/>
                                <path stroke="floralwhite" fill="transparent" stroke-width="2px"
                                    d="M2,31 v-18 c0,-3,3,0,3,-10 h5 m3,10 c0,-3,-3,0,-3,-10 h-1 m4,10 v18 a1,.5,0,0,1,-11,0" />
                             </svg>
                        """.trimIndent()
                    )
                }
                span {
                    +if (data.sips >= 0) {
                        val mul = when (options.difficulty.level) {
                            0    -> .5
                            1    -> 1.0
                            2    -> 2.24
                            else -> 1.0
                        }
                        "${ceil(data.sips * mul)}"
                    } else {
                        "∞"
                    }
                }
            }
        }
    }
}

