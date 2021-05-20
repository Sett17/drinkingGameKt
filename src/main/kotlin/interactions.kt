import compos.startmenu
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.Element
import kotlin.math.*

object interactions {
    object constants {
        val animTimeRet = 100
        val animTimeBounce = 80
        val animTimeOut = 150
        val animTimeDef = 150
        val animTimeIn: Int
            get() {
                return if (isMobile()) 250 else 100
            }
        val turnTime = 5
    }

    var oriX = 0.0
    var oriY = 0.0
    var dX = 0.0
    var dY = 0.0
    var offsetX = 0.0
    var offsetY = 40.0
    var angle = 0.0
    var isMoving = false
    var shouldRotate = true
    var rotateTimeout = 5
    var lastPoint = Pair(0.0, 0.0)
    fun Element.addInteractions() {
        this.addEventListener("touchstart", {
            it.target.asDynamic().style.transition = "all ${constants.turnTime}ms"
            dX = 0.0
            dY = 0.0
            if (!isMoving) {
                oriX = it.asDynamic().touches[0].clientX as Double
                oriY = it.asDynamic().touches[0].clientY as Double
            }
        })
        this.addEventListener("touchend", {
            val cardDyn = document.querySelector("#card").asDynamic()
            val playNameDyn = document.querySelector("#play-name").asDynamic()
            var zoneSize = Pair(document.body!!.clientWidth * 0.3, document.body!!.clientHeight * 0.33)
            if (dX < zoneSize.first && dX > -zoneSize.first && dY < zoneSize.second) {
                isMoving = true
                playNameDyn.style.opacity = "1.0"
                cardDyn.style.transition = "all ${constants.animTimeRet}ms"
                cardDyn.style.transform = getMatrix(
                    0.0,
                    -sin(dX) * 15,
                    -sin(dY) * 15 + offsetY
                )
                window.setTimeout({
                    cardDyn.style.transition = "all ${constants.animTimeBounce}ms"
                    cardDyn.style.transform = getMatrix(0.0, 0.0, offsetY)
                    window.setTimeout({
                        isMoving = false
                        cardDyn.style.transition = "all ${constants.turnTime}ms"
                    }, constants.animTimeBounce)
                }, constants.animTimeRet)
            } else {
                if (dY > zoneSize.second && dX < zoneSize.first && dX > -zoneSize.first) {
                    isMoving = true
                    cardDyn.style.transition = "all ${constants.animTimeOut}ms"
                    cardDyn.style.transform = getMatrix(angle, dX, dY + zoneSize.second * 1.5)
                } else {
                    isMoving = true
                    cardDyn.style.transition = "all ${constants.animTimeOut}ms"
                    cardDyn.style.transform = getMatrix(angle, dX + sign(dX) * zoneSize.first * 2.2, dY + offsetY)
                }
                if (game.isRunning == true) {
                    window.setTimeout({
                        availableCards.putCard()
                        rumbler.rumble(1.3)
                        isMoving = false
                    }, (constants.animTimeOut * 1.5).roundToInt())
                } else {
                    window.setTimeout({
                        changePage(startmenu())
                        rumbler.rumble()
                    }, constants.animTimeOut * 2)
                }
            }
        })
        this.addEventListener("touchmove", {
            if (!isMoving) {
                if (shouldRotate) {
                    shouldRotate = false
                    window.setTimeout({
                        shouldRotate = true
                    }, rotateTimeout)
                    lastPoint = Pair(it.asDynamic().touches[0].clientX, it.asDynamic().touches[0].clientY)
                    dX = (it.asDynamic().touches[0].clientX - oriX) as Double
                    dY = (it.asDynamic().touches[0].clientY - oriY) as Double
                    if (dX >= 0) {
                        angle = ((((coerce(dX, 0.0, 200.0) - 0) / (200)) * (20)) * PI) / 180
                        document.querySelector("#play-name").asDynamic().style.opacity = ((coerce(dX, 0.0, 100.0) - 0) / (100)) * (0.0 - 1.0) + 1.0
                    } else {
                        angle = (-(((coerce(-dX, 0.0, 200.0) - 0) / (200)) * (20)) * PI) / 180
                        document.querySelector("#play-name").asDynamic().style.opacity = ((coerce(-dX, 0.0, 100.0) - 0) / (100)) * (0.0 - 1.0) + 1.0
                    }
                    it.target.asDynamic().style.transform = getMatrix(angle, dX + offsetX, dY + offsetY)
                }
            }
        })
        window.onkeyup = {
            if ((it.code == "ArrowRight" || it.code == "ArrowLeft" || it.code == "ArrowDown") && !isMoving) {
                val params = when (it.code) {
                    "ArrowRight" -> Pair(1.0, 0.0)
                    "ArrowLeft"  -> Pair(-1.0, 0.0)
                    "ArrowDown"  -> Pair(0.0, 1.0)
                    else         -> Pair(0.0, 0.0)
                }
                val zoneSize = Pair(document.body!!.clientWidth * 0.3, document.body!!.clientHeight * 0.33)
                isMoving = true
                document.querySelector("#card").asDynamic().style.transition = "all ${constants.animTimeOut * 2}ms"
                document.querySelector("#play-name").asDynamic().style.transition = "all ${constants.animTimeOut * 2}ms"
                document.querySelector("#play-name").asDynamic().style.opacity = "0.0"
                document.querySelector("#card").asDynamic().style.transform = getMatrix(
                    0.4 * sin(params.first),
                    sign(params.first) * zoneSize.first * 3.5,
                    offsetY + params.second * zoneSize.second * 2.3
                )
                if (game.isRunning == true) {
                    window.setTimeout({
                        availableCards.putCard()
                        isMoving = false
                    }, (constants.animTimeOut * 2 * 1.2).roundToInt())
                } else {
                    window.setTimeout({
                        changePage(startmenu())
                    }, constants.animTimeOut * 4)
                }
            }
        }
    }

    private fun getMatrix(angle: Double, tx: Double, ty: Double): String {
        return "matrix(${cos(angle)}, ${sin(angle)}, ${sin(-angle)}, ${cos(angle)}, $tx, $ty)"
    }

}
