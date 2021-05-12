@file:Suppress("SuspiciousCollectionReassignment")

package compos

import changePage
import isMobile
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.*
import kotlinx.html.js.div
import org.w3c.dom.HTMLDivElement

fun options(): HTMLDivElement {

    window.location.hash = "#options"

    return document.create.div {
        id = "root"
        div {
            id = "options-top"
            div {
                id = "options-backbtn"
                classes += "btn"
                onClickFunction = { _ ->
                    changePage(startmenu())
                }
                +"«"
            }
        }
        div {
            id = "options-switches"
            div {
                id = "options-difficultyWrapper"
                classes += "options-wrapper"
                div {
                    classes += "options-wrapperTitle"
                    +"Spielstimmung"
                }
                div {
                    classes += "options-wrapperInside"
                    div {
                        classes += "options-switch"
                        div {
                            classes += "options-chkbx"
                            attributes["data-id"] = "0"
                            onClickFunction = {
                                options.difficulty.level = when (this.attributes["data-id"]) {
                                    "0"  -> 0
                                    "1"  -> 1
                                    "2"  -> 2
                                    else -> 0
                                }
                            }
                        }
                        div {
                            classes += "options-switchTitle"
                            onClickFunction = {
                                options.difficulty.level = when (js("this.previousSibling.previousSibling.dataset.id")) {
                                    "0"  -> 0
                                    "1"  -> 1
                                    "2"  -> 2
                                    else -> 0
                                }
                            }
                            +"Chill"
                        }
                    }
                    div {
                        classes += "options-switch"
                        div {
                            classes += "options-chkbx"
                            attributes["data-id"] = "1"
                            onClickFunction = {
                                options.difficulty.level = when (this.attributes["data-id"]) {
                                    "0"  -> 0
                                    "1"  -> 1
                                    "2"  -> 2
                                    else -> 0
                                }
                            }
                        }
                        div {
                            classes += "options-switchTitle"
                            onClickFunction = {
                                options.difficulty.level = when (js("this.previousSibling.previousSibling.dataset.id")) {
                                    "0"  -> 0
                                    "1"  -> 1
                                    "2"  -> 2
                                    else -> 0
                                }
                            }
                            +"Geht ab"
                        }
                    }
                    div {
                        classes += "options-switch"
                        div {
                            classes += "options-chkbx"
                            attributes["data-id"] = "2"
                            onClickFunction = {
                                options.difficulty.level = when (this.attributes["data-id"]) {
                                    "0"  -> 0
                                    "1"  -> 1
                                    "2"  -> 2
                                    else -> 0
                                }
                            }
                        }
                        div {
                            classes += "options-switchTitle"
                            onClickFunction = {
                                options.difficulty.level = when (js("this.previousSibling.previousSibling.dataset.id")) {
                                    "0"  -> 0
                                    "1"  -> 1
                                    "2"  -> 2
                                    else -> 0
                                }
                            }
                            +"Absturz"
                        }
                    }

                }
            }
            div {
                id = "options-rumbleWrapper"
                classes += "options-wrapper"
                div {
                    classes += "options-wrapperTitle"
                    +"Vibrationen?"
                }
                div {
                    classes += "options-wrapperInside"
                    div {
                        classes += "options-switch"
                        div {
                            classes += "options-chkbx"
                            attributes["data-id"] = "0"
                            onClickFunction = {
                                options.rumble.state = when (this.attributes["data-id"]) {
                                    "0"  -> true
                                    "1"  -> false
                                    else -> true
                                }
                            }
                        }
                        div {
                            classes += "options-switchTitle"
                            onClickFunction = {
                                options.rumble.state = when (js("this.previousSibling.previousSibling.dataset.id")) {
                                    "0"  -> true
                                    "1"  -> false
                                    else -> true
                                }
                            }
                            +"Klar"
                        }
                    }
                    div {
                        classes += "options-switch"
                        div {
                            classes += "options-chkbx"
                            attributes["data-id"] = "1"
                            onClickFunction = {
                                options.rumble.state = when (this.attributes["data-id"]) {
                                    "0"  -> true
                                    "1"  -> false
                                    else -> true
                                }
                            }
                        }
                        div {
                            classes += "options-switchTitle"
                            onClickFunction = {
                                options.rumble.state = when (js("this.previousSibling.previousSibling.dataset.id")) {
                                    "0"  -> true
                                    "1"  -> false
                                    else -> true
                                }
                            }
                            +"Ne"
                        }
                    }
                }
            }
        }
    }
}
