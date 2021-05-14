import compos.options
import compos.play
import compos.pregame
import compos.startmenu
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.events.EventModifierInit
import org.w3c.dom.get
import org.w3c.fetch.Response
import org.w3c.workers.FetchEvent
import org.w3c.workers.InstallEvent
import org.w3c.workers.ServiceWorkerGlobalScope

external val self: ServiceWorkerGlobalScope

// TODO: 5/13/2021 sw doesnt work; make back button usable (changePage to likely page)

fun main() {
    window.onload = {
        document.querySelector("#version")!!.textContent = CACHE_NAME
//        serviceWorker()
        when (window.location.hash) {
            "#startemenu" -> changePage(startmenu())
            "#pregame"    -> changePage(pregame()) { playerList.update() }
            "#play"       -> changePage(play()) { availableCards.putCard() }
            "#options"    -> changePage(options()) { optionsDoAfter() }
            else          -> changePage(startmenu())
        }
    }

}

fun optionsDoAfter() {
    val wrapper = document.querySelectorAll(".options-wrapperInside")
    options.updateAllViews()
    if (isMobile()) {
        repeat(wrapper.length) {
            wrapper[it].asDynamic().style.flexDirection = "column"
        }
    } else {
        repeat(wrapper.length) {
            wrapper[it].asDynamic().style.flexDirection = "row"
        }
    }
}

fun changePage(compo: HTMLDivElement, doAfter: () -> Unit = {}) {
    document.getElementById("root")!!.replaceWith(compo)
    doAfter()
}

const val CACHE_NAME = "v1.0.0"
//val urlsToCache = arrayOf(
//    "/",
//    "/drinkingGameKt.js",
//    "/index.html",
//    "/manifest.webmanifest",
//    "/style.css",
//    "/assets/bottle.svg",
//    "/assets/cards.js",
//    "/assets/down_arrow.js",
//    "/assets/down_arrow.js",
//    "/assets/favicon.ico",
//    "/assets/icon.png",
//    "/assets/icon.webp",
//    "/assets/icon-ios.png",
//    "/assets/maskable_icon.png",
//    "/assets/SF-UI-Text-Regular.otf",
//)
//
//
//fun serviceWorker() {
//    console.log("jett mach sw")
//    try {
//        console.log("load addev")
//        window.addEventListener("load", {
//            window.navigator.serviceWorker.register("/drinkingGameKt.js")
//            console.log("sw registered")
//        })
//        window.navigator.serviceWorker.register("/drinkingGameKt.js")
//    } catch (t: Throwable) {
//        console.log(t)
//        self.addEventListener("install", { ev ->
//            console.log("Service Worker installed!")
//            ev as InstallEvent
//            ev.waitUntil(
//                self.caches.open(CACHE_NAME)
//                    .then { it.addAll(urlsToCache) }
//            )
//        })
//        self.addEventListener("fetch", { ev ->
//            ev as FetchEvent
//            self.caches.match(ev.request)
//                .then {
//                    it as Response?
//                    return@then it ?: self.fetch(ev.request)
//                }
//        })
//        self.addEventListener("activate", {
//            console.log("Service Worker is now active!")
//        })
//    }
//}
