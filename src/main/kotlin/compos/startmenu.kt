package compos

import kotlinx.browser.document
import kotlinx.html.button
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.Node

fun startmenu(): HTMLDivElement {
    return document.create.div {
        id = "root"
        div {
            id = "startMenu-title"
            +"Trink!Trink!"
        }
        div {
            classes += "startMenu-btns"
            button {
                id = "playBtn"
                classes += "startMenu-btn"
                classes += "btn"
                onClickFunction = { _ ->
//                TODO: 4/26/2021 changePage play
                }
                +"Spielen!"
            }
            button {
                id = "optionBtn"
                classes += "startMenu-btn"
                classes += "btn"
                onClickFunction = { _ ->
//                TODO: 4/26/2021 changePage options
                }
                +"Einstellungen"
            }
        }
        div {
            classes += "startMenu-btns"

//            eig noch KartenIdee btn, aber mal schaun

            button {
                id = "shareBtn"
                classes += "startMenu-btn"
                classes += "btn"
                onClickFunction = { _ ->
//               TODO: 4/26/2021 shareRoutine
                }
                +"Teilen"
            }
        }
    }
}
