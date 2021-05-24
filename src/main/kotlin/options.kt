import kotlinx.browser.document

object options {
    fun updateAllViews() {
        difficulty.updateView()
        rumble.updateView()
        theme.updateView()
    }

    object theme {
        var isDark: Boolean? = null
            set(value) {
                session["isDark"] = value
                field = value
                updateView()
            }
            get() {
                field = field ?: run { session["isDark"] as? Boolean } ?: run { false }
                return field
            }

        fun updateView() {
            if (isDark == true) {
                document.querySelector("#options-themeWrapper .options-chkbx[data-id=\"0\"]")?.removeAttribute("active")
                document.querySelector("#options-themeWrapper .options-chkbx[data-id=\"1\"]")?.setAttribute("active", "")
            } else {
                document.querySelector("#options-themeWrapper .options-chkbx[data-id=\"0\"]")?.setAttribute("active", "")
                document.querySelector("#options-themeWrapper .options-chkbx[data-id=\"1\"]")?.removeAttribute("active")
            }
            document.documentElement!!.classList.remove("themeDark")
            document.documentElement!!.classList.remove("themeLight")
            document.documentElement!!.classList.add(if (isDark == true) "themeDark" else "themeLight")
        }
    }

    object difficulty {
        var level: Int? = null
            set(value) {
                session["difficulty.level"] = value
                field = value
                updateView()
            }
            get() {
                field = field ?: kotlin.run { session["difficulty.level"] as? Int } ?: 0
                return field
            }

        fun updateView() {
            when (level) {
                0 -> {
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"0\"]")?.setAttribute("active", "")
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"1\"]")?.removeAttribute("active")
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"2\"]")?.removeAttribute("active")
                }
                1 -> {
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"0\"]")?.removeAttribute("active")
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"1\"]")?.setAttribute("active", "")
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"2\"]")?.removeAttribute("active")
                }
                2 -> {
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"0\"]")?.removeAttribute("active")
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"1\"]")?.removeAttribute("active")
                    document.querySelector("#options-difficultyWrapper .options-chkbx[data-id=\"2\"]")?.setAttribute("active", "")
                }
            }
        }
    }

    object rumble {
        var state: Boolean? = null
            set(value) {
                session["rumble.state"] = value
                field = value
                updateView()
            }
            get() {
                field = field ?: run { session["rumble.state"] as? Boolean } ?: run { true }
                return field
            }

        fun updateView() {
            if (state == true) {
                document.querySelector("#options-rumbleWrapper .options-chkbx[data-id=\"0\"]")?.setAttribute("active", "")
                document.querySelector("#options-rumbleWrapper .options-chkbx[data-id=\"1\"]")?.removeAttribute("active")
            } else {
                document.querySelector("#options-rumbleWrapper .options-chkbx[data-id=\"0\"]")?.removeAttribute("active")
                document.querySelector("#options-rumbleWrapper .options-chkbx[data-id=\"1\"]")?.setAttribute("active", "")
            }
        }
    }
}
