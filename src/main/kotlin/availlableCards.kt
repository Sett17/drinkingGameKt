import compos.cardCompo
import interactions.addInteractions
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.CANVAS
import kotlinx.html.stream.createHTML
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.math.PI


external val cards: Array<card>
external val endCard: card

object availableCards {
    private var isLastCard = false
    const val cardLimit = 25
    var cardCounter = 0
        private set
    var deck: Array<card> = emptyArray()
        get() {
            isLastCard = field.size == 1
            if (field.isEmpty()) {
                field = (session["deck"] as? Array<card>).whenNull { cards.copyOf().also { it.shuffle() } }
            }
            return field
        }
        set(value) {
            session["deck"] = value
            field = value
        }

    fun nextCard(): card {
        cardCounter++
        console.log("$cardCounter/$cardLimit")
        return if (!isLastCard && cardCounter < cardLimit) {
            val res = deck.first()
            deck = deck.drop(1).toTypedArray()
            res
        } else {
            game.isRunning = false
            endCard
        }
    }

    fun putCard() {
        var x = 50.0
        var y = 50.0
        var height = 200.0
        var width = 120.0
        var cornerSize = 50.0

        val ctx = (document.querySelector("#canv") as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D

        ctx.strokeStyle = "#FFFFFF"
        ctx.lineWidth = 1.0
        ctx.beginPath()

        ctx.moveTo(x + cornerSize, y)
        ctx.lineTo(x + width - cornerSize, y)
        ctx.arcTo(x + width - cornerSize, y, x + width, y + cornerSize, cornerSize)
        ctx.lineTo(x + width, y + height - cornerSize * 2)

        ctx.stroke()
//        document.querySelector("#play-name").asDynamic().style.opacity = "1.0"
//        val nc = nextCard()
//        document.querySelector("#card-wrapper")!!.innerHTML = cardCompo(nc).outerHTML
//        val cardElement = document.querySelector("#card")!!
//        val cardDynamic = cardElement.asDynamic()
//        cardDynamic.style.transition = "all 0ms"
//        cardDynamic.style.transform = "matrix(0.01, 0, 0, 0.01, 0, ${interactions.offsetY})"
//        cardDynamic.style.opacity = "0.01"
//        cardDynamic.style.transition = "all ${interactions.constants.animTimeIn}ms"
//        window.setTimeout({
//            cardDynamic.style.transform = "matrix(1, 0, 0, 1, 0, ${interactions.offsetY})"
//            cardDynamic.style.opacity = "1.0"
//            window.setTimeout({
//                cardElement.addInteractions()
//            }, interactions.constants.animTimeIn)
//        }, 20)
    }
}
