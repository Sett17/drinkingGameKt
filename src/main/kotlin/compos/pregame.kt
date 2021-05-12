@file:Suppress("SuspiciousCollectionReassignment")

package compos

import changePage
import isMobile
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.events.KeyboardEvent

fun pregame(): HTMLDivElement {

    window.location.hash = "#pregame"

    return document.create.div {
        id = "root"
        div {
            id = "pregame-title"
            +"Pregame"
        }
        div {
            id = "pregame-content"
            input {
                type = InputType.text
                name = "playername"
                id = "pregame-playernameInp"
                autoComplete = false
                placeholder = "Name"
                onFocusFunction = {
                    if (isMobile()) {
                        document.querySelector("#pregame-playerList")?.classList?.add("pregame-hidden")
                        document.querySelector("#pregame-playerBtn")?.classList?.add("pregame-hidden")
                        document.querySelector("#pregame-addPlayerBtn")?.classList?.remove("pregame-hidden")
                    }
                }
                onFocusOutFunction = {
                    inpFocusOut()
                }
                onKeyUpFunction = {
                    it as KeyboardEvent
                    if (it.key == "Enter") {
                        document.querySelector("#pregame-addPlayerBtn").asDynamic().click()
                    }
                }
            }
            button {
                id = "pregame-addPlayerBtn"
                classes += "btn"
                onClickFunction = {
                    rumbler.rumble()
                    document.querySelector("#pregame-playernameInp").asDynamic().value?.toString()?.trim()?.capitalize()?.let {
                        playerList.add(it)
                        inpFocusOut()
                        document.querySelector("#pregame-playernameInp").asDynamic().value = ""
                    }
                }
                +"+"
            }
            div {
                id = "pregame-playerList"
            }
            div {
                id = "pregame-buttonWrapper"
                button {
                    id = "pregame-playBtn"
                    classes += "btn"
                    onClickFunction = {
                        rumbler.rumble()
                        changePage(play()) { availableCards.putCard() }
                    }
                    +"Trinken!"
                }
            }
        }
    }
}

fun inpFocusOut() {
    if (isMobile() && document.querySelector("#pregame-playernameInp").asDynamic().value.trim().length <= 1) {
        document.querySelector("#pregame-playerList")?.classList?.remove("pregame-hidden")
        document.querySelector("#pregame-playerBtn")?.classList?.remove("pregame-hidden")
        document.querySelector("#pregame-addPlayerBtn")?.classList?.add("pregame-hidden")
        playerList.update()
    }
}
