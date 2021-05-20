import kotlinx.browser.document
import kotlinx.dom.addClass
import kotlinx.dom.removeClass

object game {
    var isRunning: Boolean? = null
        get() {
            return this.let { session["isRunning"] } as? Boolean
        }
        set(value) {
            session["isRunning"] = value
            field = value
//            if (value.isNullOrFalse) {
//                rumbler.rumble(2.5)
//                changePage(startmenu())
//            }
        }
    var askNextOpportunity: Boolean? = null
        get() {
            return this.whenNull { session["askNextOpportunity"] } as Boolean
        }
        set(value) {
            session["askNextOpportunity"] = true
            field = value
        }

    fun ask() {
        rumbler.rumble()
        document.getElementById("overlay")!!.removeClass("invisible")
        askNextOpportunity = false
    }

    fun removeAsk() {
        rumbler.rumble()
        document.getElementById("overlay")!!.addClass("invisible")
        askNextOpportunity = false
    }
}
