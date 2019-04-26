! function (o) {
    var n = {};

    function t(e) {
        if (n[e]) return n[e].exports;
        var c = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return o[e].call(c.exports, c, c.exports, t), c.l = !0, c.exports
    }
    t.m = o, t.c = n, t.d = function (o, n, e) {
        t.o(o, n) || Object.defineProperty(o, n, {
            enumerable: !0,
            get: e
        })
    }, t.r = function (o) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }, t.t = function (o, n) {
        if (1 & n && (o = t(o)), 8 & n) return o;
        if (4 & n && "object" == typeof o && o && o.__esModule) return o;
        var e = Object.create(null);
        if (t.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: o
            }), 2 & n && "string" != typeof o)
            for (var c in o) t.d(e, c, function (n) {
                return o[n]
            }.bind(null, c));
        return e
    }, t.n = function (o) {
        var n = o && o.__esModule ? function () {
            return o.default
        } : function () {
            return o
        };
        return t.d(n, "a", n), n
    }, t.o = function (o, n) {
        return Object.prototype.hasOwnProperty.call(o, n)
    }, t.p = "", t(t.s = 0)
}([function (o, n, t) {
    (function (o) {
        function n(o) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
                return typeof o
            } : function (o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            })(o)
        }
        o.vividLog = window.vividLog = {
            config: {
                autoGroup: !1,
                timeNotation: "h:m:s:ms",
                iUseLightTheme: !1,
                fontSize: "font-size: 12px;",
                timeStyle: "color: #F1F5F8; border-left: 1px solid black; border-radius: 5px; padding: 5px;",
                statusStyle: "color: #F1F5F8; border-right: 1px solid black; font-weight: bold;",
                messageStyle: "color: #F1F5F8; margin-top: 10px; margin-bottom: 5px;",
                newLine: navigator.userAgent.includes("Firefox"),
                status: {
                    error: {
                        lightColor: "#da3030",
                        darkColor: "#872323",
                        code: "ERROR"
                    },
                    success: {
                        lightColor: "#00b808",
                        darkColor: "#21872a",
                        code: "SUCCESS"
                    },
                    warning: {
                        lightColor: "#da993e",
                        darkColor: "#875a2a",
                        code: "WARNING"
                    },
                    info: {
                        lightColor: "#b0b52c",
                        darkColor: "#788738",
                        code: "INFO"
                    },
                    debug: {
                        lightColor: "#da43be",
                        darkColor: "#872773",
                        code: "DEBUG"
                    },
                    log: {
                        lightColor: "#65b0b9",
                        darkColor: "#4f7e87",
                        code: "LOG"
                    }
                }
            },
            takeOver: function () {
                window.onerror = function (o, n, t, e, i) {
                    event.preventDefault(), i && c.error(i.stack)
                }
            },
            group: function () {
                return this.autoGroup = !0, this
            },
            debug: function () {
                if (arguments.length > 1) {
                    this.autoGroup && (c.headLine("DEBUG GROUP CREATED"), console.groupCollapsed("Debug (group)"));
                    for (var o = 0; o < arguments.length; o++) c.debug(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
                    this.autoGroup && (console.groupEnd(), this.autoGroup = !1)
                } else c.debug(arguments.length <= 0 ? void 0 : arguments[0])
            },
            err: function () {
                if (arguments.length > 1) {
                    this.autoGroup && (c.headLine("ERROR GROUP CREATED"), console.groupCollapsed("Error (group)"));
                    for (var o = 0; o < arguments.length; o++) c.error(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
                    this.autoGroup && (console.groupEnd(), this.autoGroup = !1)
                } else c.error(arguments.length <= 0 ? void 0 : arguments[0])
            },
            warn: function () {
                if (arguments.length > 1) {
                    this.autoGroup && (c.headLine("WARNING GROUP CREATED"), console.groupCollapsed("Warning (group)"));
                    for (var o = 0; o < arguments.length; o++) c.warning(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
                    this.autoGroup && (console.groupEnd(), this.autoGroup = !1)
                } else c.warning(arguments.length <= 0 ? void 0 : arguments[0])
            },
            done: function () {
                if (arguments.length > 1) {
                    this.autoGroup && (c.headLine("SUCCESS GROUP CREATED"), console.groupCollapsed("Success (group)"));
                    for (var o = 0; o < arguments.length; o++) c.success(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
                    this.autoGroup && console.groupEnd()
                } else c.success(arguments.length <= 0 ? void 0 : arguments[0])
            },
            log: function () {
                if (arguments.length > 1) {
                    this.autoGroup && (c.headLine("LOGGING GROUP CREATED"), console.groupCollapsed("LOG (group)"));
                    for (var o = 0; o < arguments.length; o++) c.log(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
                    this.autoGroup && (console.groupEnd(), this.autoGroup = !1)
                } else c.log(arguments.length <= 0 ? void 0 : arguments[0])
            },
            info: function () {
                if (arguments.length > 1) {
                    this.autoGroup && (c.headLine("INFO GROUP CREATED"), console.groupCollapsed("Info (group)"));
                    for (var o = 0; o < arguments.length; o++) c.info(o < 0 || arguments.length <= o ? void 0 : arguments[o]);
                    this.autoGroup && (console.groupEnd(), this.autoGroup = !1)
                } else c.info(arguments.length <= 0 ? void 0 : arguments[0])
            },
            say: function () {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.title,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "My Custom Label",
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brown";
                c.say(o, n, t)
            }
        };
        var t = window.vividLog,
            e = function () {
                for (var o = new Date, n = (o.getHours() < 10 ? "0" : "") + o.getHours(), e = (o.getMinutes() < 10 ? "0" : "") + o.getMinutes(), c = (o.getSeconds() < 10 ? "0" : "") + o.getSeconds(), i = (o.getMilliseconds() < 10 ? "0" : "") + o.getMilliseconds(), r = t.config.timeNotation.split(":"), u = "", l = 0; l < r.length; l++) {
                    switch (r[l]) {
                        case "h":
                            u += n;
                            break;
                        case "m":
                            u += e;
                            break;
                        case "s":
                            u += c;
                            break;
                        case "ms":
                            u += i
                    }
                    l !== r.length - 1 && (u += ":")
                }
                return u
            }(),
            c = {
                debug: function (o) {
                    i(o, "debug")
                },
                error: function (o) {
                    i(o, "error")
                },
                success: function (o) {
                    i(o, "success")
                },
                warning: function (o) {
                    i(o, "warning")
                },
                info: function (o) {
                    i(o, "info")
                },
                log: function (o) {
                    i(o, "log")
                },
                headLine: function (o) {
                    var n = t.config.timeStyle + "background: blueviolet;";
                    t.config.iUseLightTheme, t.config.newLine, console.log("%c".concat(o, "%c").concat(e, "%cGroup"), t.config.statusStyle + n + t.config.fontSize, n + t.config.fontSize, n + "background: purple; ".concat(t.config.fontSize))
                },
                say: function (o, c) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "brown";
                    if (c && function (o) {
                            return "object" !== n(o) && "function" != typeof o && void 0 !== o && "" != o
                        }(c)) {
                        var l = " ",
                            a = t.config.timeStyle + "background: ".concat(i, ";");
                        t.config.iUseLightTheme && "color: black;", t.config.newLine || (l = "\n"), console.log("%c".concat(o, "%c").concat(e, "%c").concat(u(c), "%c").concat(l).concat(c), t.config.statusStyle + a + t.config.fontSize, a + t.config.fontSize, a + "background: ".concat(i, "; ").concat(t.config.fontSize), t.config.messageStyle + t.config.fontSize)
                    } else r()
                }
            };

        function i(o, c) {
            var i = n(o);
            "string" === i || "number" === i || "undefined" === i ? "" !== o ? function (o, n) {
                var c = "",
                    i = " ",
                    r = t.config.timeStyle + "background: ".concat(t.config.status[o].lightColor, ";");
                t.config.iUseLightTheme && (c = "color: black;");
                t.config.newLine || (i = "\n");
                console.log("%c".concat(t.config.status[o].code, "%c").concat(e, "%c").concat(u(n), "%c").concat(i).concat(n), t.config.statusStyle + r + t.config.fontSize, r + t.config.fontSize, r + "background: ".concat(t.config.status[o].darkColor, "; ").concat(t.config.fontSize), t.config.messageStyle + t.config.fontSize + c)
            }(c, o) : r() : function (o, n) {
                var c = t.config.timeStyle + "background: ".concat(t.config.status[o].lightColor, ";");
                console.log("%c".concat(t.config.status[o].code, "%c").concat(e, "%c").concat(u(n)), t.config.statusStyle + c + t.config.fontSize, t.config.statusStyle + c + t.config.fontSize, c + "background: ".concat(t.config.status[o].darkColor, "; ").concat(t.config.fontSize)), console.log(n), console.log("%c‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾", "color: ".concat(t.config.status[o].lightColor, "; padding: -5px 5px; font-weight: bolder;"))
            }(c, o)
        }

        function r() {
            t.say("Empty log", "Oops... \nThere is nothing to log here\n" + (new Error).stack, "#6F213F")
        }

        function u(o) {
            var t = "";
            switch (o && (t = o.length), n(o)) {
                case "string":
                    return "string[".concat(t, "]");
                case "boolean":
                    return "boolean";
                case "number":
                    return "integer[".concat(t = (o + "").length, "]");
                case "object":
                    return t = Object.keys(o).length, "object[".concat(t, "]");
                case "bigint":
                    return "big integer[".concat(t = (o + "").length, "]");
                case "function":
                    return "function";
                case "symbol":
                    return "symbol";
                case "undefined":
                    return "undefined";
                default:
                    return "unknown"
            }
        }
    }).call(this, t(1))
}, function (o, n) {
    var t;
    t = function () {
        return this
    }();
    try {
        t = t || new Function("return this")()
    } catch (o) {
        "object" == typeof window && (t = window)
    }
    o.exports = t
}]);
//# sourceMappingURL=main.js.map