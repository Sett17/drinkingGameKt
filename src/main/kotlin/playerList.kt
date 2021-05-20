import kotlinx.browser.document
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import kotlinx.html.span
import kotlin.random.Random

object playerList {
    var players: Array<String> = emptyArray()
        get() {
            if (field.isEmpty()) {
                field = (session["players"] as? Array<String>).whenNull { emptyArray() }
            }
            return field
        }
        set(value) {
            session["players"] = value
            field = value
        }

    fun add(name: String) {
        players = players.toMutableList().also {
            it.add(name)
        }.toTypedArray()
        update()
    }

    fun remove(name: String) {
        players = players.toMutableList().also { it.remove(name) }.toTypedArray()
        update()
    }

    fun randomPlayer(): String {
        return players[Random.nextInt(players.size)]
    }

    fun update() {
//        document.querySelector("#pregame-playerList")!!.innerHTML = ""
        val newList = document.create.div { id = "pregame-playerList" }
        players.forEach {
            val each = it
            newList.append(document.create.span {
                onClickFunction = {
                    remove(each)
                }
                +each
            })
        }
        document.querySelector("#pregame-playerList")!!.replaceWith(newList)
    }
}
