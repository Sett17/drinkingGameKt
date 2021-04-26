package compos

import kotlinx.browser.document
import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.id
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.Node

fun options(): HTMLDivElement {
    return document.create.div {
        id = "root"
        div {
            id = "options-top"
            div {
                id = "options-backbtn"
                classes += "btn"
                onClickFunction = { _ ->
                    // TODO: 4/26/2021 rumble; changePage startmenu
                }
                +"&#717;"
            }
        }
        div {
            id = "option-switches"
            div {
                id = "options-difficutyWrapper"
                classes += "options-wrapper"
                div {
                    id = "options-wrapperTitle"
                    +"Spielstimmung"
                    div {
                        id = "options-wrapperInside"
                        div {
                            classes += "options-switch"
                            div {
                                id = "options-chkbx"
                                attributes["data-id"] = "0"
                                onClickFunction = { ev ->
                                    // TODO: 4/26/2021 options.difficulty.set this.dataId
                                }
                            }
                            div {
                                id = "options-switchTitle"
                                onClickFunction = { ev ->
                                    // TODO: 4/26/2021 gleiche wie oben, mit dataId von oben
                                }
                                +"Chill"
                            }
                        }
                        div {
                            classes += "options-switch"
                            div {
                                id = "options-chkbx"
                                attributes["data-id"] = "1"
                                onClickFunction = { ev ->
                                    // TODO: 4/26/2021 options.difficulty.set this.dataId
                                }
                            }
                            div {
                                id = "options-switchTitle"
                                onClickFunction = { ev ->
                                    // TODO: 4/26/2021 gleiche wie oben, mit dataId von oben
                                }
                                +"Geht ab"
                            }
                        }
                        div {
                            classes += "options-switch"
                            div {
                                id = "options-chkbx"
                                attributes["data-id"] = "2"
                                onClickFunction = { ev ->
                                    // TODO: 4/26/2021 options.difficulty.set this.dataId
                                }
                            }
                            div {
                                id = "options-switchTitle"
                                onClickFunction = { ev ->
                                    // TODO: 4/26/2021 gleiche wie oben, mit dataId von oben
                                }
                                +"Absturz"
                            }
                        }
                    }
                }
            }
            div {
                id = "optione-rumbleWrapper"
                classes += "options-wrapper"
                div {
                    classes += "options-wrapperTitle"
                    +"Vibrationen?"
                }
                div {
                    id = "options-wrapperInside"
                    div {
                        classes += "options-switch"
                        div {
                            id = "options-chkbx"
                            attributes["data-id"] = "0"
                            onClickFunction = { ev ->
                                // TODO: 4/26/2021 options.rumble.set this.dataId
                            }
                        }
                        div {
                            id = "options-switchTitle"
                            onClickFunction = { ev ->
                                // TODO: 4/26/2021 gleiche wie oben, mit dataId von oben
                            }
                            +"Klar"
                        }
                    }
                    div {
                        classes += "options-switch"
                        div {
                            id = "options-chkbx"
                            attributes["data-id"] = "1"
                            onClickFunction = { ev ->
                                // TODO: 4/26/2021 options.rumble.set this.dataId
                            }
                        }
                        div {
                            id = "options-switchTitle"
                            onClickFunction = { ev ->
                                // TODO: 4/26/2021 gleiche wie oben, mit dataId von oben
                            }
                            +"Ne"
                        }
                    }
                }
            }
        }
    }
}