import kotlinx.browser.window

object rumbler {
    fun rumble(mul: Double = 1.0) {
        if (options.rumble.state == true) {
            window.navigator.vibrate(mul * 80)
        }
    }
}
