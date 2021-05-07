@file:Suppress("SuspiciousCollectionReassignment")

package compos

import changePage
import kotlinx.browser.document
import kotlinx.browser.sessionStorage
import kotlinx.html.button
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLDivElement
import shareRoutine

fun startmenu(): HTMLDivElement {

    game.isRunning = false
    sessionStorage.clear()

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
                    changePage((pregame()))
                }
                +"Spielen!"
            }
            button {
                id = "optionBtn"
                classes += "startMenu-btn"
                classes += "btn"
                onClickFunction = { _ ->
                    changePage(options())
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
                    shareRoutine()
                }
                +"Teilen"
            }
        }
    }
}
