import compos.cardCompo
import compos.startmenu
import interactions.addInteractions
import kotlinx.browser.document
import kotlinx.browser.sessionStorage
import kotlinx.browser.window
import kotlinx.dom.addClass
import kotlinx.dom.removeClass
import org.w3c.dom.Element
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.math.*
import kotlin.random.Random

private val Boolean?.isNullOrFalse: Boolean
    get() {
        return this == null || this == false
    }

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
        js("navigator.share({url: 'https://drinkingapp-4376b.web.app/', title: 'Trink! Trink!'}).then(function (d) {console.log(d)})")
    } catch (e: Exception) {
        console.log(e)
    }
}

object interactions {
    var oriX = 0.0
    var oriY = 0.0
    var dX = 0.0
    var dY = 0.0
    var offsetX = 0.0
    var offsetY = 0.0
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
                        angle = ((((coerce(-dX, 0.0, 200.0) - 0) / (200)) * (20)) * PI) / 180
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
                document.querySelector("#card").asDynamic().style.opacity = getMatrix(
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

}

object rumbler {
    fun rumble(mul: Double = 1.0) {
        if (options.rumble.state == true) {
            window.navigator.vibrate(mul * 80)
        }
    }
}

object game {
    var isRunning: Boolean? = null
        get() {
            return this.let { session["isRunning"] } as? Boolean
        }
        set(value) {
            session["isRunning"] = value
            field = value
            if (value.isNullOrFalse) {
                rumbler.rumble(2.5)
                changePage(startmenu())
            }
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

external val cards: Array<card>

object availableCards {
    private var isLastCard = false
    const val cardLimit = 25
    var cardCounter = 0
        private set
    var deck: Array<card> = emptyArray()
        get() {
            isLastCard = field.size == 1
            if (field.isEmpty()) {
                field = (session["deck"] as? Array<card>).whenNull { cards.copyOf().also { it.shuffle() } } as Array<card>
            }
            return field
        }
        set(value) {
            session["deck"] = value
            field = value
        }

    fun nextCard(): card {
        cardCounter--
        return if (!isLastCard && cardCounter < cardLimit) {
            val res = deck.first()
            deck = deck.drop(1).toTypedArray()
            res
        } else {
            // TODO: 4/26/2021 jo halt das hier; 05/06/2021 kp mehr was das bedeuten soll ¯\_(ツ)_/¯l; spiel beenden glaub ich
            deck.first()
        }
    }

    fun putCard() {
        val cardElement = document.querySelector("#card")!!
        cardElement.outerHTML = cardCompo(nextCard()).toString()
        val cardDynamic = cardElement.asDynamic()
        cardDynamic.style.transition = "all 0ms"
        cardDynamic.style.transform = "matrix(0.01, 0, 0, 0.01, 0, ${interactions.offsetY})"
        cardDynamic.style.opacity = "0.01"
        cardDynamic.style.transition = "all ${interactions.constants.animTimeIn}ms"
        window.setTimeout({
            cardDynamic.style.transform = "matrix(1, 0, 0, 1, 0, ${interactions.offsetY})"
            cardDynamic.style.opacity = "1.0"
            window.setTimeout({
                cardElement.addInteractions()
            }, interactions.constants.animTimeIn)
        }, 20)
    }
}

object playerList {
    var players: Array<player> = emptyArray()
        get() {
            if (field.isEmpty()) {
                field = (session["players"] as? Array<player>).whenNull { emptyArray() } as Array<player>
            }
            return field
        }
        set(value) {
            session["players"] = value
            field = value
        }

    fun add(name: String) {
        players = players.toMutableList().also {
            it.add(object : player {
                override val name = name
            })
        }.toTypedArray()
    }

    fun randomPlayer(): player {
        return players[Random.nextInt(players.size)]
    }
}


fun <T> T?.whenNull(function: () -> T): T {
    return this ?: function()
}

interface card {
    val title: String
    val text: String
    val sips: Int
    val all: Boolean
    val set: String
}

interface player {
    val name: String
}
