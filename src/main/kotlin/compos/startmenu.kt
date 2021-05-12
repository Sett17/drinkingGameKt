@file:Suppress("SuspiciousCollectionReassignment")

package compos

import changePage
import isMobile
import kotlinx.browser.document
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import kotlinx.html.button
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import optionsDoAfter
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.get
import shareRoutine

fun startmenu(): HTMLDivElement {

    window.location.hash = "#startmenu"

    game.isRunning = false
//    sessionStorage.clear()

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
                    changePage((pregame())) { playerList.update() }
                }
                +"Spielen!"
            }
            button {
                id = "optionBtn"
                classes += "startMenu-btn"
                classes += "btn"
                onClickFunction = { _ ->
                    changePage(options()) { optionsDoAfter() }
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
