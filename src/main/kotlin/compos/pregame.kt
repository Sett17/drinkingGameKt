package compos

import kotlinx.browser.document
import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node

fun pregame(): HTMLDivElement {
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
                placeholder = "Name"
                onFocusFunction = { _ ->
                    // TODO: 4/26/2021 inpFocusIn
                }
                onFocusOutFunction = { _ ->
                    // TODO: 4/26/2021 inpFocusOut
                }
                onKeyPressFunction = { _ ->
                    // TODO: 4/26/2021 detectInpKeys(keys)
                }
            }
            button {
                id = "pregame-addPlayerBtn"
                classes += "btn"
                onClickFunction = { _ ->
                    // TODO: 4/26/2021 rumble; addPlayer
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
                    onClickFunction = { _ ->
                        // TODO: 4/26/2021 rumble; changePage'play'
                    }
                    +"Trinken!"
                }
            }
        }
    }
}