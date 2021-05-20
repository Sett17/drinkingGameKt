import kotlinx.browser.localStorage
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import org.w3c.dom.get
import org.w3c.dom.set
import org.w3c.workers.ServiceWorkerRegistration

fun isMobile(): Boolean {
    return window.navigator.maxTouchPoints > 1
}

object session {
    operator fun set(id: String, content: dynamic) {
        val value = if (jsTypeOf(content) == "object") {
            JSON.stringify(content)
        } else {
            content
        }
        sessionStorage[id] = value
    }

    operator fun get(id: String): dynamic {
        val value = sessionStorage[id]
        return value?.let {
            try {
                JSON.parse(it)
            } catch (e: Exception) {
                it
            }
        }
    }
}

fun coerce(input: Double, min: Double, max: Double): Double {
    return when {
        input < min -> {
            min
        }
        input > max -> {
            max
        }
        else        -> {
            input
        }
    }
}

fun shareRoutine() {
    rumbler.rumble()
    try {
        js(
            "navigator.share({url: 'https://drinkingapp-4376b.web.app/', title: 'Trink! Trink!'}).then(function (d) {" +
                    "console.log(d)})"
        )
    } catch (e: Exception) {
        console.log(e)
    }
}

fun reloadFresh() {
    window.navigator.serviceWorker.getRegistration().then {
        it as ServiceWorkerRegistration
        if (currentPage != "#play") {
            sessionStorage.clear()
            localStorage.clear()

            it.unregister()
            window.location.reload()
        }
    }
}

fun <T> T?.whenNull(function: () -> T): T {
    return this ?: function()
}

fun String.replaceMultiple(regex: Regex, function: () -> String): String {
    var str = this
    repeat(regex.findAll(this).toList().size) {
        str = str.replaceFirst(regex, function.invoke())
    }
    return str
}

data class card(var title: String, var text: String, var sips: Int, var all: Boolean, var set: String)
