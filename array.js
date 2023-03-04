! function () {
    "use strict";

    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))),
                n.push.apply(n, r)
        }
        return n
    }

    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(r), !0).forEach((function (e) {
                s(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } :
            function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            n(e)
    }

    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t),
            n && i(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
            e
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && u(e, t)
    }

    function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        },
            c(e)
    }

    function u(e, t) {
        return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
            return e.__proto__ = t,
                e
        },
            u(e, t)
    }

    function l(e, t) {
        if (null == e)
            return {};
        var n, r, i = function (e, t) {
            if (null == e)
                return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                    t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
                n = o[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function d(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e)
    }

    function p(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, r = c(e);
            if (t) {
                var i = c(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else
                n = r.apply(this, arguments);
            return d(this, n)
        }
    }

    function f(e, t) {
        return function (e) {
            if (Array.isArray(e))
                return e
        }(e) || function (e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n)
                return;
            var r, i, o = [],
                s = !0,
                a = !1;
            try {
                for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0)
                    ;
            } catch (e) {
                a = !0,
                    i = e
            } finally {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a)
                        throw i
                }
            }
            return o
        }(e, t) || _(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(e) {
        return function (e) {
            if (Array.isArray(e))
                return g(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || _(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function _(e, t) {
        if (e) {
            if ("string" == typeof e)
                return g(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
        }
    }

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }

    function v(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = _(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function () { };
                return {
                    s: i,
                    n: function () {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function (e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
            a = !1;
        return {
            s: function () {
                n = n.call(e)
            },
            n: function () {
                var e = n.next();
                return s = e.done,
                    e
            },
            e: function (e) {
                a = !0,
                    o = e
            },
            f: function () {
                try {
                    s || null == n.return || n.return()
                } finally {
                    if (a)
                        throw o
                }
            }
        }
    }
    var y = String.fromCharCode,
        m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        w = {};

    function k(e, t) {
        if (!w[e]) {
            w[e] = {};
            for (var n = 0; n < e.length; n++)
                w[e][e.charAt(n)] = n
        }
        return w[e][t]
    }
    var S = {
        compressToBase64: function (e) {
            if (null == e)
                return "";
            var t = S._compress(e, 6, (function (e) {
                return m.charAt(e)
            }));
            switch (t.length % 4) {
                default:
                case 0:
                    return t;
                case 1:
                    return t + "===";
                case 2:
                    return t + "==";
                case 3:
                    return t + "="
            }
        },
        decompressFromBase64: function (e) {
            return null == e ? "" : "" == e ? null : S._decompress(e.length, 32, (function (t) {
                return k(m, e.charAt(t))
            }))
        },
        compressToUTF16: function (e) {
            return null == e ? "" : S._compress(e, 15, (function (e) {
                return y(e + 32)
            })) + " "
        },
        decompressFromUTF16: function (e) {
            return null == e ? "" : "" == e ? null : S._decompress(e.length, 16384, (function (t) {
                return e.charCodeAt(t) - 32
            }))
        },
        compressToUint8Array: function (e) {
            for (var t = S.compress(e), n = new Uint8Array(2 * t.length), r = 0, i = t.length; r < i; r++) {
                var o = t.charCodeAt(r);
                n[2 * r] = o >>> 8,
                    n[2 * r + 1] = o % 256
            }
            return n
        },
        decompressFromUint8Array: function (e) {
            if (null == e)
                return S.decompress(e);
            for (var t = new Array(e.length / 2), n = 0, r = t.length; n < r; n++)
                t[n] = 256 * e[2 * n] + e[2 * n + 1];
            var i = [];
            return t.forEach((function (e) {
                i.push(y(e))
            })),
                S.decompress(i.join(""))
        },
        compressToEncodedURIComponent: function (e) {
            return null == e ? "" : S._compress(e, 6, (function (e) {
                return b.charAt(e)
            }))
        },
        decompressFromEncodedURIComponent: function (e) {
            return null == e ? "" : "" == e ? null : (e = e.replace(/ /g, "+"),
                S._decompress(e.length, 32, (function (t) {
                    return k(b, e.charAt(t))
                })))
        },
        compress: function (e) {
            return S._compress(e, 16, (function (e) {
                return y(e)
            }))
        },
        _compress: function (e, t, n) {
            if (null == e)
                return "";
            var r, i, o, s = "",
                a = "",
                c = "",
                u = 2,
                l = 3,
                d = 2,
                p = 0,
                f = 0,
                h = {},
                _ = {},
                g = [];
            for (o = 0; o < e.length; o += 1)
                if (s = e.charAt(o),
                    Object.prototype.hasOwnProperty.call(h, s) || (h[s] = l++,
                        _[s] = !0),
                    a = c + s,
                    Object.prototype.hasOwnProperty.call(h, a))
                    c = a;
                else {
                    if (Object.prototype.hasOwnProperty.call(_, c)) {
                        if (c.charCodeAt(0) < 256) {
                            for (r = 0; r < d; r++)
                                p <<= 1,
                                    f == t - 1 ? (f = 0,
                                        g.push(n(p)),
                                        p = 0) : f++;
                            for (i = c.charCodeAt(0),
                                r = 0; r < 8; r++)
                                p = p << 1 | 1 & i,
                                    f == t - 1 ? (f = 0,
                                        g.push(n(p)),
                                        p = 0) : f++,
                                    i >>= 1
                        } else {
                            for (i = 1,
                                r = 0; r < d; r++)
                                p = p << 1 | i,
                                    f == t - 1 ? (f = 0,
                                        g.push(n(p)),
                                        p = 0) : f++,
                                    i = 0;
                            for (i = c.charCodeAt(0),
                                r = 0; r < 16; r++)
                                p = p << 1 | 1 & i,
                                    f == t - 1 ? (f = 0,
                                        g.push(n(p)),
                                        p = 0) : f++,
                                    i >>= 1
                        }
                        0 == --u && (u = Math.pow(2, d),
                            d++),
                            delete _[c]
                    } else
                        for (i = h[c],
                            r = 0; r < d; r++)
                            p = p << 1 | 1 & i,
                                f == t - 1 ? (f = 0,
                                    g.push(n(p)),
                                    p = 0) : f++,
                                i >>= 1;
                    0 == --u && (u = Math.pow(2, d),
                        d++),
                        h[a] = l++,
                        c = String(s)
                }
            if ("" !== c) {
                if (Object.prototype.hasOwnProperty.call(_, c)) {
                    if (c.charCodeAt(0) < 256) {
                        for (r = 0; r < d; r++)
                            p <<= 1,
                                f == t - 1 ? (f = 0,
                                    g.push(n(p)),
                                    p = 0) : f++;
                        for (i = c.charCodeAt(0),
                            r = 0; r < 8; r++)
                            p = p << 1 | 1 & i,
                                f == t - 1 ? (f = 0,
                                    g.push(n(p)),
                                    p = 0) : f++,
                                i >>= 1
                    } else {
                        for (i = 1,
                            r = 0; r < d; r++)
                            p = p << 1 | i,
                                f == t - 1 ? (f = 0,
                                    g.push(n(p)),
                                    p = 0) : f++,
                                i = 0;
                        for (i = c.charCodeAt(0),
                            r = 0; r < 16; r++)
                            p = p << 1 | 1 & i,
                                f == t - 1 ? (f = 0,
                                    g.push(n(p)),
                                    p = 0) : f++,
                                i >>= 1
                    }
                    0 == --u && (u = Math.pow(2, d),
                        d++),
                        delete _[c]
                } else
                    for (i = h[c],
                        r = 0; r < d; r++)
                        p = p << 1 | 1 & i,
                            f == t - 1 ? (f = 0,
                                g.push(n(p)),
                                p = 0) : f++,
                            i >>= 1;
                0 == --u && (u = Math.pow(2, d),
                    d++)
            }
            for (i = 2,
                r = 0; r < d; r++)
                p = p << 1 | 1 & i,
                    f == t - 1 ? (f = 0,
                        g.push(n(p)),
                        p = 0) : f++,
                    i >>= 1;
            for (; ;) {
                if (p <<= 1,
                    f == t - 1) {
                    g.push(n(p));
                    break
                }
                f++
            }
            return g.join("")
        },
        decompress: function (e) {
            return null == e ? "" : "" == e ? null : S._decompress(e.length, 32768, (function (t) {
                return e.charCodeAt(t)
            }))
        },
        _decompress: function (e, t, n) {
            var r, i, o, s, a, c, u, l = [],
                d = [],
                p = {
                    val: n(0),
                    position: t,
                    index: 1
                },
                f = 4,
                h = 4,
                _ = 3,
                g = "";
            for (r = 0; r < 3; r += 1)
                l[r] = r;
            for (o = 0,
                a = Math.pow(2, 2),
                c = 1; c != a;)
                s = p.val & p.position,
                    p.position >>= 1,
                    0 == p.position && (p.position = t,
                        p.val = n(p.index++)),
                    o |= (s > 0 ? 1 : 0) * c,
                    c <<= 1;
            switch (o) {
                case 0:
                    for (o = 0,
                        a = Math.pow(2, 8),
                        c = 1; c != a;)
                        s = p.val & p.position,
                            p.position >>= 1,
                            0 == p.position && (p.position = t,
                                p.val = n(p.index++)),
                            o |= (s > 0 ? 1 : 0) * c,
                            c <<= 1;
                    u = y(o);
                    break;
                case 1:
                    for (o = 0,
                        a = Math.pow(2, 16),
                        c = 1; c != a;)
                        s = p.val & p.position,
                            p.position >>= 1,
                            0 == p.position && (p.position = t,
                                p.val = n(p.index++)),
                            o |= (s > 0 ? 1 : 0) * c,
                            c <<= 1;
                    u = y(o);
                    break;
                case 2:
                    return ""
            }
            for (l[3] = u,
                i = u,
                d.push(u); ;) {
                if (p.index > e)
                    return "";
                for (o = 0,
                    a = Math.pow(2, _),
                    c = 1; c != a;)
                    s = p.val & p.position,
                        p.position >>= 1,
                        0 == p.position && (p.position = t,
                            p.val = n(p.index++)),
                        o |= (s > 0 ? 1 : 0) * c,
                        c <<= 1;
                switch (u = o) {
                    case 0:
                        for (o = 0,
                            a = Math.pow(2, 8),
                            c = 1; c != a;)
                            s = p.val & p.position,
                                p.position >>= 1,
                                0 == p.position && (p.position = t,
                                    p.val = n(p.index++)),
                                o |= (s > 0 ? 1 : 0) * c,
                                c <<= 1;
                        l[h++] = y(o),
                            u = h - 1,
                            f--;
                        break;
                    case 1:
                        for (o = 0,
                            a = Math.pow(2, 16),
                            c = 1; c != a;)
                            s = p.val & p.position,
                                p.position >>= 1,
                                0 == p.position && (p.position = t,
                                    p.val = n(p.index++)),
                                o |= (s > 0 ? 1 : 0) * c,
                                c <<= 1;
                        l[h++] = y(o),
                            u = h - 1,
                            f--;
                        break;
                    case 2:
                        return d.join("")
                }
                if (0 == f && (f = Math.pow(2, _),
                    _++),
                    l[u])
                    g = l[u];
                else {
                    if (u !== h)
                        return null;
                    g = i + i.charAt(0)
                }
                d.push(g),
                    l[h++] = i + g.charAt(0),
                    i = g,
                    0 == --f && (f = Math.pow(2, _),
                        _++)
            }
        }
    },
        F = {
            DEBUG: !1,
            LIB_VERSION: "1.45.1"
        },
        I = Array.prototype,
        O = Object.prototype,
        P = O.toString,
        E = O.hasOwnProperty,
        x = "undefined" != typeof window ? window : {},
        A = x.navigator || {
            userAgent: ""
        },
        T = x.document || {},
        $ = A.userAgent,
        C = I.forEach,
        R = I.indexOf,
        M = Array.isArray,
        j = {},
        q = function () {
            if (F.DEBUG && !z(window.console) && window.console) {
                for (var e = ("__rrweb_original__" in window.console.log ? window.console.log.__rrweb_original__ : window.console.log), t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                try {
                    e.apply(window.console, n)
                } catch (t) {
                    H(n, (function (t) {
                        e(t)
                    }))
                }
            }
        },
        D = function () {
            if (F.DEBUG && !z(window.console) && window.console) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = ["PostHog error:"].concat(t),
                    i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
                try {
                    i.apply(window.console, r)
                } catch (e) {
                    H(r, (function (e) {
                        i(e)
                    }))
                }
            }
        },
        N = function () {
            if (!z(window.console) && window.console) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                var r = ["PostHog error:"].concat(t),
                    i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
                try {
                    i.apply(window.console, r)
                } catch (e) {
                    H(r, (function (e) {
                        i(e)
                    }))
                }
            }
        },
        B = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };

    function L(e, t, n) {
        if (null != e)
            if (C && Array.isArray(e) && e.forEach === C)
                e.forEach(t, n);
            else if ("length" in e && e.length === +e.length) {
                for (var r = 0, i = e.length; r < i; r++)
                    if (r in e && t.call(n, e[r], r) === j)
                        return
            } else
                for (var o in e)
                    if (E.call(e, o) && t.call(n, e[o], o) === j)
                        return
    }

    function H(e, t, n) {
        if (Array.isArray(e))
            if (C && e.forEach === C)
                e.forEach(t, n);
            else if ("length" in e && e.length === +e.length)
                for (var r = 0, i = e.length; r < i; r++)
                    if (r in e && t.call(n, e[r], r) === j)
                        return
    }
    var U = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return H(n, (function (t) {
            for (var n in t)
                void 0 !== t[n] && (e[n] = t[n])
        })),
            e
    },
        W = M || function (e) {
            return "[object Array]" === P.call(e)
        },
        V = function (e) {
            try {
                return /^\s*\bfunction\b/.test(e)
            } catch (e) {
                return !1
            }
        };

    function Q(e, t) {
        return -1 !== e.indexOf(t)
    }
    var G = function (e) {
        return e === Object(e) && !W(e)
    },
        z = function (e) {
            return void 0 === e
        },
        J = function (e) {
            return "[object String]" == P.call(e)
        },
        Z = function e(t) {
            return L(t, (function (n, r) {
                ! function (e) {
                    return "[object Date]" == P.call(e)
                }(n) ? G(n) && (t[r] = e(n)) : t[r] = X(n)
            })),
                t
        },
        X = function (e) {
            function t(e) {
                return e < 10 ? "0" + e : e
            }
            return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
        },
        Y = function (e) {
            return function () {
                try {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return e.apply(this, n)
                } catch (e) {
                    N("Implementation error. Please turn on debug and contact support@posthog.com."),
                        F.DEBUG && N(e)
                }
            }
        },
        K = function (e) {
            var t = {};
            return L(e, (function (e, n) {
                J(e) && e.length > 0 && (t[n] = e)
            })),
                t
        };
    var ee = ["$performance_raw"];

    function te(e, t) {
        return n = e,
            r = function (e, n) {
                return n && ee.indexOf(n) > -1 ? e : "string" == typeof e && null !== t ? e.slice(0, t) : e
            },
            i = new Set,
            function e(t, n) {
                return t !== Object(t) ? r ? r(t, n) : t : i.has(t) ? void 0 : (i.add(t),
                    W(t) ? (o = [],
                        H(t, (function (t) {
                            o.push(e(t))
                        }))) : (o = {},
                            L(t, (function (t, n) {
                                i.has(t) || (o[n] = e(t, n))
                            }))),
                    o);
                var o
            }(n);
        var n, r, i
    }

    function ne(e) {
        var t, n, r, i, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            c = 0,
            u = "",
            l = [];
        if (!e)
            return e;
        e = ie(e);
        do {
            t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63,
                n = o >> 12 & 63,
                r = o >> 6 & 63,
                i = 63 & o,
                l[c++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(i)
        } while (a < e.length);
        switch (u = l.join(""),
        e.length % 3) {
            case 1:
                u = u.slice(0, -2) + "==";
                break;
            case 2:
                u = u.slice(0, -1) + "="
        }
        return u
    }
    var re, ie = function (e) {
        var t, n, r, i, o = "";
        for (t = n = 0,
            r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
            i = 0; i < r; i++) {
            var s = e.charCodeAt(i),
                a = null;
            s < 128 ? n++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128),
                null !== a && (n > t && (o += e.substring(t, n)),
                    o += a,
                    t = n = i + 1)
        }
        return n > t && (o += e.substring(t, e.length)),
            o
    },
        oe = (re = function () {
            for (var e = (new Date).valueOf(), t = 0; e == (new Date).valueOf();)
                t++;
            return e.toString(16) + t.toString(16)
        },
            function () {
                var e = (window.screen.height * window.screen.width).toString(16);
                return re() + "-" + Math.random().toString(16).replace(".", "") + "-" + function () {
                    var e, t, n = $,
                        r = 0,
                        i = [];

                    function o(e, t) {
                        var n, r = 0;
                        for (n = 0; n < t.length; n++)
                            r |= i[n] << 8 * n;
                        return e ^ r
                    }
                    for (e = 0; e < n.length; e++)
                        t = n.charCodeAt(e),
                            i.unshift(255 & t),
                            i.length >= 4 && (r = o(r, i),
                                i = []);
                    return i.length > 0 && (r = o(r, i)),
                        r.toString(16)
                }() + "-" + e + "-" + re()
            }
        ),
        se = function (e) {
            return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog|applebot|semrushbot|duckduckbot|twitterbot|rogerbot|linkedinbot|mj12bot|sitebulb|bot.htm|bot.php)/i.test(e)
        },
        ae = function (e, t) {
            var n = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
                r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(e);
            if (null === r || r && "string" != typeof r[1] && r[1].length)
                return "";
            var i = r[1];
            try {
                i = decodeURIComponent(i)
            } catch (e) {
                D("Skipping decoding for malformed query param: " + i)
            }
            return i.replace(/\+/g, " ")
        },
        ce = function (e, t) {
            var n = e.match(new RegExp(t + "=([^&]*)"));
            return n ? n[1] : null
        },
        ue = function () {
            function e(t) {
                return t && (t.preventDefault = e.preventDefault,
                    t.stopPropagation = e.stopPropagation),
                    t
            }
            return e.preventDefault = function () {
                this.returnValue = !1
            },
                e.stopPropagation = function () {
                    this.cancelBubble = !0
                },
                function (t, n, r, i, o) {
                    if (t)
                        if (t.addEventListener && !i)
                            t.addEventListener(n, r, !!o);
                        else {
                            var s = "on" + n,
                                a = t[s];
                            t[s] = function (t, n, r) {
                                return function (i) {
                                    if (i = i || e(window.event)) {
                                        var o, s = !0;
                                        V(r) && (o = r(i));
                                        var a = n.call(t, i);
                                        return !1 !== o && !1 !== a || (s = !1),
                                            s
                                    }
                                }
                            }(t, r, a)
                        }
                    else
                        D("No valid element provided to register_event")
                }
        }(),
        le = {
            campaignParams: function () {
                var e = "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid".split(" "),
                    t = {};
                return L(e, (function (e) {
                    var n = ae(T.URL, e);
                    n.length && (t[e] = n)
                })),
                    t
            },
            searchEngine: function (e) {
                return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
            },
            searchInfo: function (e) {
                var t = le.searchEngine(e),
                    n = "yahoo" != t ? "q" : "p",
                    r = {};
                if (null !== t) {
                    r.$search_engine = t;
                    var i = ae(e, n);
                    i.length && (r.ph_keyword = i)
                }
                return r
            },
            browser: function (e, t, n) {
                return t = t || "",
                    n || Q(e, " OPR/") ? Q(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : Q(e, "IEMobile") || Q(e, "WPDesktop") ? "Internet Explorer Mobile" : Q(e, "SamsungBrowser/") ? "Samsung Internet" : Q(e, "Edge") || Q(e, "Edg/") ? "Microsoft Edge" : Q(e, "FBIOS") ? "Facebook Mobile" : Q(e, "Chrome") ? "Chrome" : Q(e, "CriOS") ? "Chrome iOS" : Q(e, "UCWEB") || Q(e, "UCBrowser") ? "UC Browser" : Q(e, "FxiOS") ? "Firefox iOS" : Q(t, "Apple") ? Q(e, "Mobile") ? "Mobile Safari" : "Safari" : Q(e, "Android") ? "Android Mobile" : Q(e, "Konqueror") ? "Konqueror" : Q(e, "Firefox") ? "Firefox" : Q(e, "MSIE") || Q(e, "Trident/") ? "Internet Explorer" : Q(e, "Gecko") ? "Mozilla" : ""
            },
            browserVersion: function (e, t, n) {
                var r = {
                    "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                    "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                    Chrome: /Chrome\/(\d+(\.\d+)?)/,
                    "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                    "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                    Safari: /Version\/(\d+(\.\d+)?)/,
                    "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                    Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                    Firefox: /Firefox\/(\d+(\.\d+)?)/,
                    "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                    Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                    BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                    "Android Mobile": /android\s(\d+(\.\d+)?)/,
                    "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                    "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                    Mozilla: /rv:(\d+(\.\d+)?)/
                }[le.browser(e, t, n)];
                if (void 0 === r)
                    return null;
                var i = e.match(r);
                return i ? parseFloat(i[i.length - 2]) : null
            },
            browserLanguage: function () {
                return A.language || A.userLanguage
            },
            os: function () {
                var e = $;
                return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
            },
            device: function (e) {
                return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) && !/Mobile/.test(e) ? "Android Tablet" : /Android/.test(e) ? "Android" : ""
            },
            deviceType: function (e) {
                var t = this.device(e);
                return "iPad" === t || "Android Tablet" === t ? "Tablet" : t ? "Mobile" : "Desktop"
            },
            referringDomain: function (e) {
                var t = e.split("/");
                return t.length >= 3 ? t[2] : ""
            },
            properties: function () {
                return U(K({
                    $os: le.os(),
                    $browser: le.browser($, A.vendor, window.opera),
                    $device: le.device($),
                    $device_type: le.deviceType($)
                }), {
                    $current_url: window.location.href,
                    $host: window.location.host,
                    $pathname: window.location.pathname,
                    $browser_version: le.browserVersion($, A.vendor, window.opera),
                    $browser_language: le.browserLanguage(),
                    $screen_height: window.screen.height,
                    $screen_width: window.screen.width,
                    $viewport_height: window.innerHeight,
                    $viewport_width: window.innerWidth,
                    $lib: "web",
                    $lib_version: F.LIB_VERSION,
                    $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time: (Date.now = Date.now || function () {
                        return +new Date
                    },
                        Date.now() / 1e3)
                })
            },
            people_properties: function () {
                return U(K({
                    $os: le.os(),
                    $browser: le.browser($, A.vendor, window.opera)
                }), {
                    $browser_version: le.browserVersion($, A.vendor, window.opera)
                })
            }
        };

    function de(e) {
        switch (n(e.className)) {
            case "string":
                return e.className;
            case "object":
                return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            default:
                return ""
        }
    }

    function pe(e) {
        var t = "";
        return me(e) && !be(e) && e.childNodes && e.childNodes.length && L(e.childNodes, (function (e) {
            _e(e) && e.textContent && (t += B(e.textContent).split(/(\s+)/).filter(we).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255))
        })),
            B(t)
    }

    function fe(e) {
        return !!e && 1 === e.nodeType
    }

    function he(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }

    function _e(e) {
        return !!e && 3 === e.nodeType
    }

    function ge(e) {
        return !!e && 11 === e.nodeType
    }
    var ve = ["a", "button", "form", "input", "select", "textarea", "label"];

    function ye(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
        if (!e || he(e, "html") || !fe(e))
            return !1;
        if (null != n && n.url_allowlist) {
            var r = window.location.href,
                i = n.url_allowlist;
            if (i && !i.some((function (e) {
                return r.match(e)
            })))
                return !1
        }
        if (null != n && n.dom_event_allowlist) {
            var o = n.dom_event_allowlist;
            if (o && !o.some((function (e) {
                return t.type === e
            })))
                return !1
        }
        if (null != n && n.element_allowlist) {
            var s = n.element_allowlist;
            if (s && !s.some((function (t) {
                return e.tagName.toLowerCase() === t
            })))
                return !1
        }
        if (null != n && n.css_selector_allowlist) {
            var a = n.css_selector_allowlist;
            if (a && !a.some((function (t) {
                return e.matches(t)
            })))
                return !1
        }
        for (var c = !1, u = [e], l = !0, d = e; d.parentNode && !he(d, "body");)
            if (ge(d.parentNode))
                u.push(d.parentNode.host),
                    d = d.parentNode.host;
            else {
                if (!(l = d.parentNode || !1))
                    break;
                if (ve.indexOf(l.tagName.toLowerCase()) > -1)
                    c = !0;
                else {
                    var p = window.getComputedStyle(l);
                    p && "pointer" === p.getPropertyValue("cursor") && (c = !0)
                }
                u.push(l),
                    d = l
            }
        var f = window.getComputedStyle(e);
        if (f && "pointer" === f.getPropertyValue("cursor") && "click" === t.type)
            return !0;
        var h = e.tagName.toLowerCase();
        switch (h) {
            case "html":
                return !1;
            case "form":
                return "submit" === t.type;
            case "input":
            case "select":
            case "textarea":
                return "change" === t.type || "click" === t.type;
            default:
                return c ? "click" === t.type : "click" === t.type && (ve.indexOf(h) > -1 || "true" === e.getAttribute("contenteditable"))
        }
    }

    function me(e) {
        for (var t = e; t.parentNode && !he(t, "body"); t = t.parentNode) {
            var n = de(t).split(" ");
            if (Q(n, "ph-sensitive") || Q(n, "ph-no-capture"))
                return !1
        }
        if (Q(de(e).split(" "), "ph-include"))
            return !0;
        var r = e.type || "";
        if ("string" == typeof r)
            switch (r.toLowerCase()) {
                case "hidden":
                case "password":
                    return !1
            }
        var i = e.name || e.id || "";
        if ("string" == typeof i) {
            if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")))
                return !1
        }
        return !0
    }

    function be(e) {
        return !!(he(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || he(e, "select") || he(e, "textarea") || "true" === e.getAttribute("contenteditable"))
    }

    function we(e) {
        if (null === e || z(e))
            return !1;
        if ("string" == typeof e) {
            e = B(e);
            if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, "")))
                return !1;
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e))
                return !1
        }
        return !0
    }

    function ke(e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript",
            n.src = e,
            n.onload = t;
        var r, i = document.querySelectorAll("body > script");
        i.length > 0 ? null === (r = i[0].parentNode) || void 0 === r || r.insertBefore(n, i[0]) : document.body.appendChild(n)
    }
    var Se = function () {
        function e(t) {
            r(this, e),
                this.clicks = [],
                this.enabled = t
        }
        return o(e, [{
            key: "isRageClick",
            value: function (e, t, n) {
                if (!this.enabled)
                    return !1;
                var r = this.clicks[this.clicks.length - 1];
                if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
                    if (this.clicks.push({
                        x: e,
                        y: t,
                        timestamp: n
                    }),
                        3 === this.clicks.length)
                        return !0
                } else
                    this.clicks = [{
                        x: e,
                        y: t,
                        timestamp: n
                    }];
                return !1
            }
        }]),
            e
    }(),
        Fe = {
            _initializedTokens: [],
            _previousElementSibling: function (e) {
                if (e.previousElementSibling)
                    return e.previousElementSibling;
                var t = e;
                do {
                    t = t.previousSibling
                } while (t && !fe(t));
                return t
            },
            _getPropertiesFromElement: function (e, t, n) {
                var r = e.tagName.toLowerCase(),
                    i = {
                        tag_name: r
                    };
                ve.indexOf(r) > -1 && !n && (i.$el_text = pe(e));
                var o = de(e);
                o.length > 0 && (i.classes = o.split(" ").filter((function (e) {
                    return "" !== e
                }))),
                    L(e.attributes, (function (n) {
                        var r;
                        be(e) && -1 === ["name", "id", "class"].indexOf(n.name) || !t && we(n.value) && ("string" != typeof (r = n.name) || "_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7)) && (i["attr__" + n.name] = n.value)
                    }));
                for (var s = 1, a = 1, c = e; c = this._previousElementSibling(c);)
                    s++,
                        c.tagName === e.tagName && a++;
                return i.nth_child = s,
                    i.nth_of_type = a,
                    i
            },
            _getDefaultProperties: function (e) {
                return {
                    $event_type: e,
                    $ce_version: 1
                }
            },
            _extractCustomPropertyValue: function (e) {
                var t = [];
                return L(document.querySelectorAll(e.css_selector), (function (e) {
                    var n;
                    ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? n = e.value : e.textContent && (n = e.textContent),
                        we(n) && t.push(n)
                })),
                    t.join(", ")
            },
            _getCustomProperties: function (e) {
                var t = this,
                    n = {};
                return L(this._customProperties, (function (r) {
                    L(r.event_selectors, (function (i) {
                        L(document.querySelectorAll(i), (function (i) {
                            Q(e, i) && me(i) && (n[r.name] = t._extractCustomPropertyValue(r))
                        }))
                    }))
                })),
                    n
            },
            _getEventTarget: function (e) {
                return void 0 === e.target ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
                var t
            },
            _captureEvent: function (e, t) {
                var n, r = this,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture",
                    o = this._getEventTarget(e);
                (_e(o) && (o = o.parentNode || null),
                    "$autocapture" === i && "click" === e.type && e instanceof MouseEvent) && (null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, t, "$rageclick"));
                if (o && ye(o, e, this.config)) {
                    for (var s = [o], a = o; a.parentNode && !he(a, "body");)
                        ge(a.parentNode) ? (s.push(a.parentNode.host),
                            a = a.parentNode.host) : (s.push(a.parentNode),
                                a = a.parentNode);
                    var c, u = [],
                        l = !1;
                    if (L(s, (function (e) {
                        var n = me(e);
                        "a" === e.tagName.toLowerCase() && (c = e.getAttribute("href"),
                            c = n && we(c) && c),
                            Q(de(e).split(" "), "ph-no-capture") && (l = !0),
                            u.push(r._getPropertiesFromElement(e, t.get_config("mask_all_element_attributes"), t.get_config("mask_all_text")))
                    })),
                        t.get_config("mask_all_text") || (u[0].$el_text = pe(o)),
                        c && (u[0].attr__href = c),
                        l)
                        return !1;
                    var d = U(this._getDefaultProperties(e.type), {
                        $elements: u
                    }, this._getCustomProperties(s));
                    return t.capture(i, d), !0
                }
            },
            _navigate: function (e) {
                window.location.href = e
            },
            _addDomEventHandlers: function (e) {
                var t = this,
                    n = function (n) {
                        n = n || window.event,
                            t._captureEvent(n, e)
                    };
                ue(document, "submit", n, !1, !0),
                    ue(document, "change", n, !1, !0),
                    ue(document, "click", n, !1, !0)
            },
            _customProperties: [],
            rageclicks: null,
            config: void 0,
            init: function (e) {
                var t;
                "boolean" != typeof e.__autocapture && (this.config = e.__autocapture),
                    null !== (t = this.config) && void 0 !== t && t.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map((function (e) {
                        return new RegExp(e)
                    }))),
                    this.rageclicks = new Se(e.get_config("rageclick"))
            },
            afterDecideResponse: function (e, t) {
                var n = t.get_config("token");
                this._initializedTokens.indexOf(n) > -1 ? q('autocapture already initialized for token "' + n + '"') : (this._initializedTokens.push(n),
                    e && e.config && e.config.enable_collect_everything && t.get_config("autocapture") ? (e.custom_properties && (this._customProperties = e.custom_properties),
                        this._addDomEventHandlers(t)) : t.__autocapture = !1)
            },
            enabledForProject: function (e, t, n) {
                if (!e)
                    return !0;
                t = z(t) ? 10 : t,
                    n = z(n) ? 10 : n;
                for (var r = 0, i = 0; i < e.length; i++)
                    r += e.charCodeAt(i);
                return r % t < n
            },
            isBrowserSupported: function () {
                return V(document.querySelectorAll)
            }
        };
    ! function (e) {
        for (var t in e)
            "function" == typeof e[t] && (e[t] = e[t].bind(e))
    }(Fe),
        function (e) {
            for (var t in e)
                "function" == typeof e[t] && (e[t] = Y(e[t]))
        }(Fe);
    var Ie = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
        Oe = {
            is_supported: function () {
                return !0
            },
            error: function (e) {
                D("cookieStore error: " + e)
            },
            get: function (e) {
                try {
                    for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                        for (var i = n[r];
                            " " == i.charAt(0);)
                            i = i.substring(1, i.length);
                        if (0 === i.indexOf(t))
                            return decodeURIComponent(i.substring(t.length, i.length))
                    }
                } catch (e) { }
                return null
            },
            parse: function (e) {
                var t;
                try {
                    t = JSON.parse(Oe.get(e)) || {}
                } catch (e) { }
                return t
            },
            set: function (e, t, n, r, i) {
                try {
                    var o = "",
                        s = "",
                        a = "";
                    if (r) {
                        var c = document.location.hostname.match(Ie),
                            u = c ? c[0] : "";
                        o = u ? "; domain=." + u : ""
                    }
                    if (n) {
                        var l = new Date;
                        l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3),
                            s = "; expires=" + l.toUTCString()
                    }
                    i && (a = "; secure");
                    var d = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; path=/" + o + a;
                    return document.cookie = d,
                        d
                } catch (e) {
                    return
                }
            },
            remove: function (e, t) {
                try {
                    Oe.set(e, "", -1, t)
                } catch (e) {
                    return
                }
            }
        },
        Pe = null,
        Ee = {
            is_supported: function () {
                if (null !== Pe)
                    return Pe;
                var e = !0;
                if (window)
                    try {
                        var t = "__mplssupport__";
                        Ee.set(t, "xyz"),
                            '"xyz"' !== Ee.get(t) && (e = !1),
                            Ee.remove(t)
                    } catch (t) {
                        e = !1
                    }
                else
                    e = !1;
                return e || D("localStorage unsupported; falling back to cookie store"),
                    Pe = e,
                    e
            },
            error: function (e) {
                D("localStorage error: " + e)
            },
            get: function (e) {
                try {
                    return window.localStorage.getItem(e)
                } catch (e) {
                    Ee.error(e)
                }
                return null
            },
            parse: function (e) {
                try {
                    return JSON.parse(Ee.get(e)) || {}
                } catch (e) { }
                return null
            },
            set: function (e, t) {
                try {
                    window.localStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Ee.error(e)
                }
            },
            remove: function (e) {
                try {
                    window.localStorage.removeItem(e)
                } catch (e) {
                    Ee.error(e)
                }
            }
        },
        xe = t(t({}, Ee), {}, {
            parse: function (e) {
                try {
                    var t = {};
                    try {
                        (t = Oe.parse(e) || {}).distinct_id && Oe.set(e, {
                            distinct_id: t.distinct_id
                        })
                    } catch (e) { }
                    var n = U(t, JSON.parse(Ee.get(e) || "{}"));
                    return Ee.set(e, n),
                        n
                } catch (e) { }
                return null
            },
            set: function (e, t, n, r, i) {
                try {
                    Ee.set(e, t),
                        t.distinct_id && Oe.set(e, {
                            distinct_id: t.distinct_id
                        }, n, r, i)
                } catch (e) {
                    Ee.error(e)
                }
            },
            remove: function (e, t) {
                try {
                    window.localStorage.removeItem(e),
                        Oe.remove(e, t)
                } catch (e) {
                    Ee.error(e)
                }
            }
        }),
        Ae = {},
        Te = {
            is_supported: function () {
                return !0
            },
            error: function (e) {
                D("memoryStorage error: " + e)
            },
            get: function (e) {
                return Ae[e] || null
            },
            parse: function (e) {
                return Ae[e] || null
            },
            set: function (e, t) {
                Ae[e] = t
            },
            remove: function (e) {
                delete Ae[e]
            }
        },
        $e = null,
        Ce = {
            is_supported: function () {
                if (null !== $e)
                    return $e;
                if ($e = !0,
                    window)
                    try {
                        var e = "__support__";
                        Ce.set(e, "xyz"),
                            '"xyz"' !== Ce.get(e) && ($e = !1),
                            Ce.remove(e)
                    } catch (e) {
                        $e = !1
                    }
                else
                    $e = !1;
                return $e
            },
            error: function (e) {
                F.DEBUG && D("sessionStorage error: ", e)
            },
            get: function (e) {
                try {
                    return window.sessionStorage.getItem(e)
                } catch (e) {
                    Ce.error(e)
                }
                return null
            },
            parse: function (e) {
                try {
                    return JSON.parse(Ce.get(e)) || null
                } catch (e) { }
                return null
            },
            set: function (e, t) {
                try {
                    window.sessionStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Ce.error(e)
                }
            },
            remove: function (e) {
                try {
                    window.sessionStorage.removeItem(e)
                } catch (e) {
                    Ce.error(e)
                }
            }
        };

    function Re(e, t) {
        He(!0, e, t)
    }

    function Me(e, t) {
        He(!1, e, t)
    }

    function je(e, t) {
        return "1" === Le(e, t)
    }

    function qe(e, t) {
        return !! function (e) {
            if (e && e.respectDnt) {
                var t = e && e.window || x,
                    n = t.navigator || {},
                    r = !1;
                return L([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], (function (e) {
                    Q([!0, 1, "1", "yes"], e) && (r = !0)
                })),
                    r
            }
            return !1
        }(t) || "0" === Le(e, t)
    }

    function De(e, t) {
        Ne(t = t || {}).remove(Be(e, t), !!t.crossSubdomainCookie)
    }

    function Ne(e) {
        return "localStorage" === (e = e || {}).persistenceType ? Ee : "localStorage+cookie" === e.persistenceType ? xe : Oe
    }

    function Be(e, t) {
        return ((t = t || {}).persistencePrefix || "__ph_opt_in_out_") + e
    }

    function Le(e, t) {
        return Ne(t).get(Be(e, t))
    }

    function He(e, t, n) {
        var r;
        J(t) && t.length ? (Ne(n = n || {}).set(Be(t, n), e ? 1 : 0, (r = n.cookieExpiration,
            "[object Number]" == P.call(r) ? n.cookieExpiration : null), n.crossSubdomainCookie, n.secureCookie),
            n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, {
                send_instantly: !0
            })) : console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
    }

    function Ue(e, t) {
        var n = !1;
        try {
            var r = e.get_config("token"),
                i = e.get_config("respect_dnt"),
                o = e.get_config("opt_out_capturing_persistence_type"),
                s = e.get_config("opt_out_capturing_cookie_prefix") || void 0,
                a = e.get_config("window");
            r && (n = qe(r, {
                respectDnt: i,
                persistenceType: o,
                persistencePrefix: s,
                window: a
            }))
        } catch (e) {
            t || console.error("Unexpected error when checking capturing opt-out status: " + e)
        }
        return n
    }

    function We(e, t, n) {
        return function () {
            for (var r = Ue(e, n), i = arguments.length, o = new Array(i), s = 0; s < i; s++)
                o[s] = arguments[s];
            if (!r)
                return t.apply(this, o);
            var a = o[o.length - 1];
            "function" == typeof a && a(0)
        }
    }
    var Ve = "$set",
        Qe = function () {
            function e(t) {
                var n = this;
                r(this, e),
                    this._posthog = t,
                    this.set = We(t, (function (e, t, r) {
                        var i = n.set_action(e, t);
                        return G(e) && (r = t),
                            n._get_config("save_referrer") && n._posthog.persistence.update_referrer_info(document.referrer),
                            i.$set = U({}, le.people_properties(), n._posthog.persistence.get_referrer_info(), i.$set),
                            n._send_request(i, r)
                    })),
                    this.set_once = We(t, (function (e, t, r) {
                        var i = n.set_once_action(e, t);
                        return G(e) && (r = t),
                            n._send_request(i, r)
                    }))
            }
            return o(e, [{
                key: "toString",
                value: function () {
                    return this._posthog.toString() + ".people"
                }
            }, {
                key: "_send_request",
                value: function (e, t) {
                    e.$token = this._get_config("token"),
                        e.$distinct_id = this._posthog.get_distinct_id();
                    var n = this._posthog.get_property("$device_id"),
                        r = this._posthog.get_property("$user_id"),
                        i = this._posthog.get_property("$had_persisted_distinct_id");
                    n && (e.$device_id = n),
                        r && (e.$user_id = r),
                        i && (e.$had_persisted_distinct_id = i);
                    var o = Z(e),
                        s = te(o, this._get_config("properties_string_max_length")),
                        a = ne(JSON.stringify(o));
                    return this._posthog._send_request(this._get_config("api_host") + "/engage/", {
                        data: a
                    }, {}, this._posthog._prepare_callback(t, s)),
                        s
                }
            }, {
                key: "_get_config",
                value: function (e) {
                    return this._posthog.get_config(e)
                }
            }, {
                key: "_is_reserved_property",
                value: function (e) {
                    return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
                }
            }, {
                key: "set_action",
                value: function (e, t) {
                    return this.apiActionParser(Ve, e, t)
                }
            }, {
                key: "set_once_action",
                value: function (e, t) {
                    return this.apiActionParser("$set_once", e, t)
                }
            }, {
                key: "apiActionParser",
                value: function (e, t, n) {
                    var r = this,
                        i = {},
                        o = {};
                    return G(t) ? L(t, (function (e, t) {
                        r._is_reserved_property(t) || (o[t] = e)
                    })) : o[t] = n,
                        i[e] = o,
                        i
                }
            }]),
                e
        }(),
        Ge = "$active_feature_flags",
        ze = "$enabled_feature_flags",
        Je = "$override_feature_flags",
        Ze = "$feature_flag_payloads",
        Xe = function () {
            function e(t) {
                r(this, e),
                    this.instance = t,
                    this._override_warning = !1,
                    this.flagCallReported = {},
                    this.featureFlagEventHandlers = [],
                    this.reloadFeatureFlagsQueued = !1,
                    this.reloadFeatureFlagsInAction = !1
            }
            return o(e, [{
                key: "getFlags",
                value: function () {
                    return Object.keys(this.getFlagVariants())
                }
            }, {
                key: "getFlagVariants",
                value: function () {
                    var e = this.instance.get_property(ze),
                        t = this.instance.get_property(Je);
                    if (!t)
                        return e || {};
                    for (var n = U({}, e), r = Object.keys(t), i = 0; i < r.length; i++)
                        !1 === t[r[i]] ? delete n[r[i]] : n[r[i]] = t[r[i]];
                    return this._override_warning || (console.warn("[PostHog] Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: n
                    }),
                        this._override_warning = !0),
                        n
                }
            }, {
                key: "getFlagPayloads",
                value: function () {
                    return this.instance.get_property(Ze) || {}
                }
            }, {
                key: "reloadFeatureFlags",
                value: function () {
                    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0,
                        this._startReloadTimer())
                }
            }, {
                key: "setAnonymousDistinctId",
                value: function (e) {
                    this.$anon_distinct_id = e
                }
            }, {
                key: "setReloadingPaused",
                value: function (e) {
                    this.reloadFeatureFlagsInAction = e
                }
            }, {
                key: "resetRequestQueue",
                value: function () {
                    this.reloadFeatureFlagsQueued = !1
                }
            }, {
                key: "_startReloadTimer",
                value: function () {
                    var e = this;
                    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout((function () {
                        !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1,
                            e._reloadFeatureFlagsRequest())
                    }), 5)
                }
            }, {
                key: "_reloadFeatureFlagsRequest",
                value: function () {
                    var e = this;
                    this.setReloadingPaused(!0);
                    var t = this.instance.get_config("token"),
                        n = ne(JSON.stringify({
                            token: t,
                            distinct_id: this.instance.get_distinct_id(),
                            groups: this.instance.getGroups(),
                            $anon_distinct_id: this.$anon_distinct_id
                        }));
                    this.instance._send_request(this.instance.get_config("api_host") + "/decide/?v=3", {
                        data: n
                    }, {
                        method: "POST"
                    }, this.instance._prepare_callback((function (t) {
                        e.$anon_distinct_id = void 0,
                            e.receivedFeatureFlags(t),
                            e.setReloadingPaused(!1),
                            e._startReloadTimer()
                    })))
                }
            }, {
                key: "getFeatureFlag",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.getFlags())
                        return console.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time."), !1;
                    var n = this.getFlagVariants()[e];
                    return !t.send_event && "send_event" in t || this.flagCallReported[e] || (this.flagCallReported[e] = !0,
                        this.instance.capture("$feature_flag_called", {
                            $feature_flag: e,
                            $feature_flag_response: n
                        })),
                        n
                }
            }, {
                key: "getFeatureFlagPayload",
                value: function (e) {
                    return this.getFlagPayloads()[e]
                }
            }, {
                key: "isFeatureEnabled",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.getFlags() ? !!this.getFeatureFlag(e, t) : (console.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time."), !1)
                }
            }, {
                key: "addFeatureFlagsHandler",
                value: function (e) {
                    this.featureFlagEventHandlers.push(e)
                }
            }, {
                key: "receivedFeatureFlags",
                value: function (e) {
                    this.instance.decideEndpointWasHit = !0;
                    var n = this.getFlagVariants(),
                        r = this.getFlagPayloads();
                    ! function (e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = e.featureFlags,
                            a = e.featureFlagPayloads;
                        if (o)
                            if (Array.isArray(o)) {
                                var c, u = {};
                                if (o)
                                    for (var l = 0; l < o.length; l++)
                                        u[o[l]] = !0;
                                n && n.register((s(c = {}, Ge, o),
                                    s(c, ze, u),
                                    c))
                            } else {
                                var d, p = o,
                                    f = a;
                                e.errorsWhileComputingFlags && (p = t(t({}, r), p),
                                    f = t(t({}, i), f)),
                                    n && n.register((s(d = {}, Ge, Object.keys(p || {})),
                                        s(d, ze, p || {}),
                                        s(d, Ze, f || {}),
                                        d))
                            }
                        else
                            n && (n.unregister(Ge),
                                n.unregister(ze),
                                n.unregister(Ze))
                    }(e, this.instance.persistence, n, r);
                    var i = this._prepareFeatureFlagsForCallbacks(),
                        o = i.flags,
                        a = i.flagVariants;
                    this.featureFlagEventHandlers.forEach((function (e) {
                        return e(o, a)
                    }))
                }
            }, {
                key: "override",
                value: function (e) {
                    if (this._override_warning = !1, !1 === e)
                        this.instance.persistence.unregister(Je);
                    else if (Array.isArray(e)) {
                        for (var t = {}, n = 0; n < e.length; n++)
                            t[e[n]] = !0;
                        this.instance.persistence.register(s({}, Je, t))
                    } else
                        this.instance.persistence.register(s({}, Je, e))
                }
            }, {
                key: "onFeatureFlags",
                value: function (e) {
                    if (this.addFeatureFlagsHandler(e),
                        this.instance.decideEndpointWasHit) {
                        var t = this._prepareFeatureFlagsForCallbacks();
                        e(t.flags, t.flagVariants)
                    }
                }
            }, {
                key: "_prepareFeatureFlagsForCallbacks",
                value: function () {
                    var e = this.getFlags(),
                        t = this.getFlagVariants();
                    return {
                        flags: e.filter((function (e) {
                            return t[e]
                        })),
                        flagVariants: Object.keys(t).filter((function (e) {
                            return t[e]
                        })).reduce((function (e, n) {
                            return e[n] = t[n],
                                e
                        }), {})
                    }
                }
            }]),
                e
        }(),
        Ye = "$people_distinct_id",
        Ke = "__alias",
        et = "__timers",
        tt = "$session_recording_enabled_server_side",
        nt = "$console_log_recording_enabled_server_side",
        rt = "$sesid",
        it = "$enabled_feature_flags",
        ot = "$user_state",
        st = ["__mps", "__mpso", "__mpus", "__mpa", "__mpap", "__mpr", "__mpu", Ye, Ke, "__cmpns", et, tt, rt, it, ot],
        at = function () {
            function e(t) {
                r(this, e);
                var n = "";
                t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
                    this.props = {},
                    this.campaign_params_saved = !1,
                    t.persistence_name ? this.name = "ph_" + t.persistence_name : this.name = "ph_" + n + "_posthog";
                var i = t.persistence.toLowerCase();
                "cookie" !== i && -1 === i.indexOf("localstorage") && "memory" !== i && (N("Unknown persistence type " + i + "; falling back to cookie"),
                    i = t.persistence = "cookie"),
                    "localstorage" === i && Ee.is_supported() ? this.storage = Ee : "localstorage+cookie" === i && xe.is_supported() ? this.storage = xe : this.storage = "memory" === i ? Te : Oe,
                    this.user_state = "anonymous",
                    this.load(),
                    this.update_config(t),
                    this.save()
            }
            return o(e, [{
                key: "properties",
                value: function () {
                    var e = {};
                    return L(this.props, (function (t, r) {
                        if (r === it && "object" === n(t))
                            for (var i = Object.keys(t), o = 0; o < i.length; o++)
                                e["$feature/".concat(i[o])] = t[i[o]];
                        else
                            a = r,
                                c = !1,
                                (null === (s = st) ? c : R && s.indexOf === R ? -1 != s.indexOf(a) : (L(s, (function (e) {
                                    if (c || (c = e === a))
                                        return j
                                })),
                                    c)) || (e[r] = t);
                        var s, a, c
                    })),
                        e
                }
            }, {
                key: "load",
                value: function () {
                    if (!this.disabled) {
                        var e = this.storage.parse(this.name);
                        e && (this.props = U({}, e))
                    }
                }
            }, {
                key: "save",
                value: function () {
                    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
                }
            }, {
                key: "remove",
                value: function () {
                    this.storage.remove(this.name, !1),
                        this.storage.remove(this.name, !0)
                }
            }, {
                key: "clear",
                value: function () {
                    this.remove(),
                        this.props = {}
                }
            }, {
                key: "register_once",
                value: function (e, t, n) {
                    var r = this;
                    if (G(e)) {
                        void 0 === t && (t = "None"),
                            this.expire_days = void 0 === n ? this.default_expiry : n;
                        var i = !1;
                        if (L(e, (function (e, n) {
                            r.props.hasOwnProperty(n) && r.props[n] !== t || (r.props[n] = e,
                                i = !0)
                        })),
                            i)
                            return this.save(), !0
                    }
                    return !1
                }
            }, {
                key: "register",
                value: function (e, t) {
                    var n = this;
                    if (G(e)) {
                        this.expire_days = void 0 === t ? this.default_expiry : t;
                        var r = !1;
                        if (L(e, (function (t, i) {
                            e.hasOwnProperty(i) && n.props[i] !== t && (n.props[i] = t,
                                r = !0)
                        })),
                            r)
                            return this.save(), !0
                    }
                    return !1
                }
            }, {
                key: "unregister",
                value: function (e) {
                    e in this.props && (delete this.props[e],
                        this.save())
                }
            }, {
                key: "update_campaign_params",
                value: function () {
                    this.campaign_params_saved || (this.register(le.campaignParams()),
                        this.campaign_params_saved = !0)
                }
            }, {
                key: "update_search_keyword",
                value: function (e) {
                    this.register(le.searchInfo(e))
                }
            }, {
                key: "update_referrer_info",
                value: function (e) {
                    this.register({
                        $referrer: e || this.props.$referrer || "$direct",
                        $referring_domain: le.referringDomain(e) || this.props.$referring_domain || "$direct"
                    })
                }
            }, {
                key: "get_referrer_info",
                value: function () {
                    return K({
                        $referrer: this.props.$referrer,
                        $referring_domain: this.props.$referring_domain
                    })
                }
            }, {
                key: "safe_merge",
                value: function (e) {
                    return L(this.props, (function (t, n) {
                        n in e || (e[n] = t)
                    })),
                        e
                }
            }, {
                key: "update_config",
                value: function (e) {
                    this.default_expiry = this.expire_days = e.cookie_expiration,
                        this.set_disabled(e.disable_persistence),
                        this.set_cross_subdomain(e.cross_subdomain_cookie),
                        this.set_secure(e.secure_cookie)
                }
            }, {
                key: "set_disabled",
                value: function (e) {
                    this.disabled = e,
                        this.disabled ? this.remove() : this.save()
                }
            }, {
                key: "set_cross_subdomain",
                value: function (e) {
                    e !== this.cross_subdomain && (this.cross_subdomain = e,
                        this.remove(),
                        this.save())
                }
            }, {
                key: "get_cross_subdomain",
                value: function () {
                    return !!this.cross_subdomain
                }
            }, {
                key: "set_secure",
                value: function (e) {
                    e !== this.secure && (this.secure = e,
                        this.remove(),
                        this.save())
                }
            }, {
                key: "set_event_timer",
                value: function (e, t) {
                    var n = this.props.__timers || {};
                    n[e] = t,
                        this.props.__timers = n,
                        this.save()
                }
            }, {
                key: "remove_event_timer",
                value: function (e) {
                    var t = (this.props.__timers || {})[e];
                    return z(t) || (delete this.props.__timers[e],
                        this.save()),
                        t
                }
            }, {
                key: "get_user_state",
                value: function () {
                    return this.props.$user_state || "anonymous"
                }
            }, {
                key: "set_user_state",
                value: function (e) {
                    this.props.$user_state = e,
                        this.save()
                }
            }]),
                e
        }(),
        ct = 2,
        ut = 4;
    var lt = function () {
        function e(t) {
            r(this, e),
                this.instance = t,
                this.captureStarted = !1,
                this.snapshots = [],
                this.emit = !1,
                this.endpoint = "/e/",
                this.stopRrweb = void 0,
                this.windowId = null,
                this.sessionId = null,
                this.receivedDecide = !1
        }
        return o(e, [{
            key: "startRecordingIfEnabled",
            value: function () {
                this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording()
            }
        }, {
            key: "started",
            value: function () {
                return this.captureStarted
            }
        }, {
            key: "stopRecording",
            value: function () {
                this.captureStarted && this.stopRrweb && (this.stopRrweb(),
                    this.stopRrweb = void 0,
                    this.captureStarted = !1)
            }
        }, {
            key: "isRecordingEnabled",
            value: function () {
                var e = !!this.instance.get_property(tt),
                    t = !this.instance.get_config("disable_session_recording");
                return e && t
            }
        }, {
            key: "isConsoleLogCaptureEnabled",
            value: function () {
                var e = !!this.instance.get_property(nt),
                    t = this.instance.get_config("enable_recording_console_log");
                return null != t ? t : e
            }
        }, {
            key: "afterDecideResponse",
            value: function (e) {
                var t, n, r, i;
                (this.receivedDecide = !0,
                    this.instance.persistence) && this.instance.persistence.register((s(r = {}, tt, !!e.sessionRecording),
                        s(r, nt, null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.consoleLogRecordingEnabled),
                        r));
                null !== (t = e.sessionRecording) && void 0 !== t && t.endpoint && (this.endpoint = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.endpoint);
                this.startRecordingIfEnabled()
            }
        }, {
            key: "startCaptureAndTrySendingQueuedSnapshots",
            value: function () {
                var e = this;
                this.receivedDecide && (this.emit = !0,
                    this.snapshots.forEach((function (t) {
                        return e._captureSnapshot(t)
                    }))),
                    this._startCapture()
            }
        }, {
            key: "_startCapture",
            value: function () {
                void 0 !== Object.assign && (this.captureStarted || this.instance.get_config("disable_session_recording") || (this.captureStarted = !0,
                    this.instance.__loaded_recorder || ke(this.instance.get_config("api_host") + "/static/recorder.js?v=" + F.LIB_VERSION, this._onScriptLoaded.bind(this)),
                    this._onScriptLoaded()))
            }
        }, {
            key: "_updateWindowAndSessionIds",
            value: function (e) {
                var t, n, r = 3 === e.type && 0 === (null === (t = e.data) || void 0 === t ? void 0 : t.source),
                    i = this.instance.sessionManager.checkAndGetSessionAndWindowId(r, e.timestamp),
                    o = i.windowId,
                    s = i.sessionId;
                this.windowId === o && this.sessionId === s || -1 !== [ct, ut].indexOf(e.type) || (null === (n = this.rrwebRecord) || void 0 === n || n.takeFullSnapshot());
                this.windowId = o,
                    this.sessionId = s
            }
        }, {
            key: "_onScriptLoaded",
            value: function () {
                var e, r = this,
                    i = {
                        blockClass: "ph-no-capture",
                        blockSelector: void 0,
                        ignoreClass: "ph-ignore-input",
                        maskAllInputs: !0,
                        maskInputOptions: {},
                        maskInputFn: void 0,
                        slimDOMOptions: {},
                        collectFonts: !1,
                        inlineStylesheet: !0
                    };
                this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord;
                for (var o = this.instance.get_config("session_recording"), s = 0, a = Object.entries(o || {}); s < a.length; s++) {
                    var c = f(a[s], 2),
                        u = c[0],
                        l = c[1];
                    u in i && (i[u] = l)
                }
                this.stopRrweb = null === (e = this.rrwebRecord) || void 0 === e ? void 0 : e.call(this, t({
                    emit: function (e) {
                        e = function (e) {
                            if (e && "object" === n(e) && 6 === e.type && "object" === n(e.data) && "rrweb/console@1" === e.data.plugin) {
                                e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10),
                                    e.data.payload.payload.push("...[truncated]"));
                                for (var t = [], r = 0; r < e.data.payload.payload.length; r++)
                                    e.data.payload.payload[r] && e.data.payload.payload[r].length > 2e3 ? t.push(e.data.payload.payload[r].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[r]);
                                return e.data.payload.payload = t,
                                    e
                            }
                            return e
                        }(function (e) {
                            if (e && "object" === n(e)) {
                                var t = JSON.stringify(e);
                                if (t.length > 5e6) {
                                    var r, i = v(t.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var o = r.value;
                                            t = "image/" === o[1].toLocaleLowerCase().slice(0, 6) ? t.replace(o[0], "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==") : t.replace(o[0], "")
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                }
                                return JSON.parse(t)
                            }
                            return e
                        }(e)),
                            r._updateWindowAndSessionIds(e);
                        var t = {
                            $snapshot_data: e,
                            $session_id: r.sessionId,
                            $window_id: r.windowId
                        };
                        r.instance._captureMetrics.incr("rrweb-record"),
                            r.instance._captureMetrics.incr("rrweb-record-".concat(e.type)),
                            r.emit ? r._captureSnapshot(t) : r.snapshots.push(t)
                    },
                    plugins: window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled() ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : []
                }, i)),
                    this.instance._addCaptureHook((function (e) {
                        var t;
                        "$pageview" === e && (null === (t = r.rrwebRecord) || void 0 === t || t.addCustomEvent("$pageview", {
                            href: window.location.href
                        }))
                    }))
            }
        }, {
            key: "_captureSnapshot",
            value: function (e) {
                this.instance.capture("$snapshot", e, {
                    transport: "XHR",
                    method: "POST",
                    endpoint: this.endpoint,
                    _noTruncate: !0,
                    _batchKey: "sessionRecording",
                    _metrics: {
                        rrweb_full_snapshot: e.$snapshot_data.type === ct
                    }
                })
            }
        }]),
            e
    }(),
        dt = {
            entryType: 0,
            timeOrigin: 1,
            name: 2,
            startTime: 3,
            redirectStart: 4,
            redirectEnd: 5,
            workerStart: 6,
            fetchStart: 7,
            domainLookupStart: 8,
            domainLookupEnd: 9,
            connectStart: 10,
            secureConnectionStart: 11,
            connectEnd: 12,
            requestStart: 13,
            responseStart: 14,
            responseEnd: 15,
            decodedBodySize: 16,
            encodedBodySize: 17,
            initiatorType: 18,
            nextHopProtocol: 19,
            renderBlockingStatus: 20,
            responseStatus: 21,
            transferSize: 22,
            element: 23,
            renderTime: 24,
            loadTime: 25,
            size: 26,
            id: 27,
            url: 28,
            domComplete: 29,
            domContentLoadedEvent: 30,
            domInteractive: 31,
            loadEventEnd: 32,
            loadEventStart: 33,
            redirectCount: 34,
            navigationType: 35,
            unloadEventEnd: 36,
            unloadEventStart: 37,
            duration: 39,
            timestamp: 40
        },
        pt = ["first-input", "navigation", "paint", "resource"],
        ft = ["/s/", "/e/"],
        ht = function () {
            function e(t) {
                r(this, e),
                    this.instance = t
            }
            return o(e, [{
                key: "startObservingIfEnabled",
                value: function () {
                    this.isEnabled() ? this.startObserving() : this.stopObserving()
                }
            }, {
                key: "startObserving",
                value: function () {
                    var e = this;
                    if (!this.observer)
                        try {
                            this.observer = new PerformanceObserver((function (t) {
                                t.getEntries().forEach((function (t) {
                                    e._capturePerformanceEvent(t)
                                }))
                            }));
                            var t = PerformanceObserver.supportedEntryTypes.filter((function (e) {
                                return pt.includes(e)
                            }));
                            t.forEach((function (t) {
                                var n;
                                null === (n = e.observer) || void 0 === n || n.observe({
                                    type: t,
                                    buffered: !0
                                })
                            }))
                        } catch (e) {
                            console.error("PostHog failed to start performance observer", e),
                                this.stopObserving()
                        }
                }
            }, {
                key: "stopObserving",
                value: function () {
                    this.observer && (this.observer.disconnect(),
                        this.observer = void 0)
                }
            }, {
                key: "isObserving",
                value: function () {
                    return !!this.observer
                }
            }, {
                key: "isEnabled",
                value: function () {
                    var e, t;
                    return null !== (e = null !== (t = this.instance.get_config("capture_performance")) && void 0 !== t ? t : this.remoteEnabled) && void 0 !== e && e
                }
            }, {
                key: "afterDecideResponse",
                value: function (e) {
                    this.remoteEnabled = e.capturePerformance || !1,
                        this.isEnabled() && this.startObserving()
                }
            }, {
                key: "_capturePerformanceEvent",
                value: function (e) {
                    if (e.name.startsWith(this.instance.get_config("api_host"))) {
                        var t = e.name.replace(this.instance.get_config("api_host"), "");
                        if (ft.find((function (e) {
                            return t.startsWith(e)
                        })))
                            return
                    }
                    var n = e.toJSON(),
                        r = {},
                        i = Math.floor(Date.now() - performance.now());
                    for (var o in r[dt.timeOrigin] = i,
                        r[dt.timestamp] = Math.floor(i + e.startTime),
                        dt)
                        void 0 !== n[o] && (r[dt[o]] = n[o]);
                    if (this.capturePerformanceEvent(r),
                        _t(e)) {
                        var a, c = v(e.serverTiming);
                        try {
                            for (c.s(); !(a = c.n()).done;) {
                                var u, l = a.value;
                                this.capturePerformanceEvent((s(u = {}, dt.timeOrigin, i),
                                    s(u, dt.timestamp, Math.floor(i + e.startTime)),
                                    s(u, dt.name, l.name),
                                    s(u, dt.duration, l.duration),
                                    s(u, dt.entryType, "serverTiming"),
                                    u))
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                    }
                }
            }, {
                key: "capturePerformanceEvent",
                value: function (e) {
                    this.instance.capture("$performance_event", e, {
                        transport: "XHR",
                        method: "POST",
                        endpoint: "/e/",
                        _noTruncate: !0,
                        _batchKey: "performanceEvent"
                    })
                }
            }]),
                e
        }(),
        _t = function (e) {
            return "navigation" === e.entryType || "resource" === e.entryType
        },
        gt = function () {
            function e(t) {
                r(this, e),
                    this.instance = t,
                    this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
            }
            return o(e, [{
                key: "call",
                value: function () {
                    var e = this,
                        t = ne(JSON.stringify({
                            token: this.instance.get_config("token"),
                            distinct_id: this.instance.get_distinct_id(),
                            groups: this.instance.getGroups()
                        }));
                    this.instance._send_request("".concat(this.instance.get_config("api_host"), "/decide/?v=3"), {
                        data: t,
                        verbose: !0
                    }, {
                        method: "POST"
                    }, (function (t) {
                        return e.parseDecideResponse(t)
                    }))
                }
            }, {
                key: "parseDecideResponse",
                value: function (e) {
                    var t, n, r = this;
                    if (0 !== (null == e ? void 0 : e.status)) {
                        if (this.instance.decideEndpointWasHit = !0, !document || !document.body)
                            return console.log("document not ready yet, trying again in 500 milliseconds..."),
                                void setTimeout((function () {
                                    r.parseDecideResponse(e)
                                }), 500);
                        if (this.instance.toolbar.afterDecideResponse(e),
                            null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e),
                            Fe.afterDecideResponse(e, this.instance),
                            null === (n = this.instance.webPerformance) || void 0 === n || n.afterDecideResponse(e),
                            this.instance.featureFlags.receivedFeatureFlags(e),
                            this.instance.compression = {},
                            e.supportedCompression && !this.instance.get_config("disable_compression")) {
                            var i, o = {},
                                s = v(e.supportedCompression);
                            try {
                                for (s.s(); !(i = s.n()).done;) {
                                    o[i.value] = !0
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            this.instance.compression = o
                        }
                        if (e.siteApps)
                            if (this.instance.get_config("opt_in_site_apps")) {
                                var a, c = this.instance.get_config("api_host"),
                                    u = v(e.siteApps);
                                try {
                                    var l = function () {
                                        var e = a.value,
                                            t = e.id,
                                            n = e.url,
                                            i = document.createElement("script");
                                        i.src = [c, "/" === c[c.length - 1] && "/" === n[0] ? n.substring(1) : n].join(""),
                                            i.onerror = function (e) {
                                                console.error("Error while initializing PostHog app with config id ".concat(t), e)
                                            },
                                            window["__$$ph_site_app_".concat(t)] = r.instance,
                                            document.body.appendChild(i)
                                    };
                                    for (u.s(); !(a = u.n()).done;)
                                        l()
                                } catch (e) {
                                    u.e(e)
                                } finally {
                                    u.f()
                                }
                            } else
                                e.siteApps.length > 0 && console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                    } else
                        console.error("Failed to fetch feature flags from PostHog.")
                }
            }]),
                e
        }(),
        vt = ["https://app.posthog.com", "https://eu.posthog.com"],
        yt = ["source"],
        mt = function () {
            function e(t) {
                r(this, e),
                    this.instance = t
            }
            return o(e, [{
                key: "afterDecideResponse",
                value: function (e) {
                    var n = e.toolbarParams || e.editorParams || (e.toolbarVersion ? {
                        toolbarVersion: e.toolbarVersion
                    } : {});
                    e.isAuthenticated && n.toolbarVersion && 0 === n.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t(t({}, n), {}, {
                        apiURL: this.instance.get_config("api_host")
                    }))
                }
            }, {
                key: "maybeLoadToolbar",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                    try {
                        if (!t) {
                            try {
                                window.localStorage.setItem("test", "test"),
                                    window.localStorage.removeItem("test")
                            } catch (e) {
                                return !1
                            }
                            t = window.localStorage
                        }
                        var r, i = ce(e.hash, "__posthog") || ce(e.hash, "state"),
                            o = i ? JSON.parse(decodeURIComponent(i)) : null,
                            s = o && "ph_authorize" === o.action;
                        return s ? ((r = o).source = "url",
                            r && Object.keys(r).length > 0 && (o.desiredHash ? e.hash = o.desiredHash : n ? n.replaceState("", document.title, e.pathname + e.search) : e.hash = "")) : ((r = JSON.parse(t.getItem("_postHogToolbarParams") || "{}")).source = "localstorage",
                                delete r.userIntent),
                            r.apiURL || (r.apiURL = this.instance.get_config("api_host")), !(!r.token || this.instance.get_config("token") !== r.token) && (this.loadToolbar(r), !0)
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "loadToolbar",
                value: function (e) {
                    var n = this;
                    if (window._postHogToolbarLoaded)
                        return !1;
                    window._postHogToolbarLoaded = !0;
                    var r = (null == e ? void 0 : e.apiURL) || this.instance.get_config("api_host"),
                        i = 3e4 * Math.floor(Date.now() / 3e4),
                        o = "".concat(r).concat(r.endsWith("/") ? "" : "/", "static/toolbar.js?_ts=").concat(i),
                        s = !vt.includes(this.instance.get_config("api_host")) && this.instance.get_config("advanced_disable_toolbar_metrics"),
                        a = t(t({
                            apiURL: r,
                            jsURL: r,
                            token: this.instance.get_config("token")
                        }, e), s ? {
                            instrument: !1
                        } : {});
                    a.source;
                    var c = l(a, yt);
                    return window.localStorage.setItem("_postHogToolbarParams", JSON.stringify(c)),
                        ke(o, (function () {
                            (window.ph_load_toolbar || window.ph_load_editor)(a, n.instance)
                        })),
                        ue(window, "turbolinks:load", (function () {
                            window._postHogToolbarLoaded = !1,
                                n.loadToolbar(a)
                        })), !0
                }
            }, {
                key: "_loadEditor",
                value: function (e) {
                    return this.loadToolbar(e)
                }
            }, {
                key: "maybeLoadEditor",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                    return this.maybeLoadToolbar(e, t, n)
                }
            }]),
                e
        }(),
        bt = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                r(this, e),
                    this.isPolling = !0,
                    this._event_queue = [],
                    this._empty_queue_count = 0,
                    this._poller = void 0,
                    this._pollInterval = t
            }
            return o(e, [{
                key: "setPollInterval",
                value: function (e) {
                    this._pollInterval = e,
                        this.isPolling && this.poll()
                }
            }, {
                key: "poll",
                value: function () { }
            }, {
                key: "unload",
                value: function () { }
            }, {
                key: "getTime",
                value: function () {
                    return (new Date).getTime()
                }
            }]),
                e
        }(),
        wt = function (e) {
            a(i, e);
            var n = p(i);

            function i(e, t) {
                var o, s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
                return r(this, i),
                    (o = n.call(this, s)).handlePollRequest = t,
                    o.captureMetrics = e,
                    o
            }
            return o(i, [{
                key: "enqueue",
                value: function (e, t, n) {
                    this.captureMetrics.incr("batch-enqueue"),
                        this._event_queue.push({
                            url: e,
                            data: t,
                            options: n
                        }),
                        this.isPolling || (this.isPolling = !0,
                            this.poll())
                }
            }, {
                key: "poll",
                value: function () {
                    var e = this;
                    clearTimeout(this._poller),
                        this._poller = setTimeout((function () {
                            if (e._event_queue.length > 0) {
                                var t = e.formatQueue(),
                                    n = function (n) {
                                        var r = t[n],
                                            i = r.url,
                                            o = r.data,
                                            s = r.options;
                                        L(o, (function (t, n) {
                                            o[n].offset = Math.abs(o[n].timestamp - e.getTime()),
                                                delete o[n].timestamp
                                        })),
                                            e.handlePollRequest(i, o, s),
                                            e.captureMetrics.incr("batch-requests"),
                                            e.captureMetrics.incr("batch-requests-".concat(i.slice(i.length - 2))),
                                            e.captureMetrics.incr("batch-handle", o.length),
                                            e.captureMetrics.incr("batch-handle-".concat(i.slice(i.length - 2)), o.length)
                                    };
                                for (var r in t)
                                    n(r);
                                e._event_queue.length = 0,
                                    e._empty_queue_count = 0
                            } else
                                e._empty_queue_count++;
                            e._empty_queue_count > 4 && (e.isPolling = !1,
                                e._empty_queue_count = 0),
                                e.isPolling && e.poll()
                        }), this._pollInterval)
                }
            }, {
                key: "updateUnloadMetrics",
                value: function () {
                    var e = this.formatQueue();
                    for (var t in e) {
                        var n = e[t],
                            r = n.url,
                            i = n.data;
                        this.captureMetrics.incr("batch-unload-requests"),
                            this.captureMetrics.incr("batch-unload-requests-".concat(r.slice(r.length - 2))),
                            this.captureMetrics.incr("batch-unload", i.length),
                            this.captureMetrics.incr("batch-unload-".concat(r.slice(r.length - 2)), i.length)
                    }
                }
            }, {
                key: "unload",
                value: function () {
                    var e = this;
                    clearTimeout(this._poller);
                    var n = this._event_queue.length > 0 ? this.formatQueue() : {};
                    this._event_queue.length = 0;
                    var r = Object.values(n);
                    [].concat(h(r.filter((function (e) {
                        return 0 === e.url.indexOf("/e")
                    }))), h(r.filter((function (e) {
                        return 0 !== e.url.indexOf("/e")
                    })))).map((function (n) {
                        var r = n.url,
                            i = n.data,
                            o = n.options;
                        e.handlePollRequest(r, i, t(t({}, o), {}, {
                            transport: "sendBeacon"
                        }))
                    }))
                }
            }, {
                key: "formatQueue",
                value: function () {
                    var e = {};
                    return L(this._event_queue, (function (t) {
                        var n = t.url,
                            r = t.data,
                            i = t.options,
                            o = (i ? i._batchKey : null) || n;
                        void 0 === e[o] && (e[o] = {
                            data: [],
                            url: n,
                            options: i
                        }),
                            i && e[o].options && e[o].options._metrics && !e[o].options._metrics.rrweb_full_snapshot && (e[o].options._metrics.rrweb_full_snapshot = i._metrics.rrweb_full_snapshot),
                            e[o].data.push(r)
                    })),
                        e
                }
            }]),
                i
        }(bt),
        kt = function () {
            function e(t) {
                r(this, e),
                    this.enabled = t,
                    this.metrics = {}
            }
            return o(e, [{
                key: "incr",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.enabled && (e = "phjs-".concat(e),
                        this.metrics[e] = (this.metrics[e] || 0) + t)
                }
            }, {
                key: "decr",
                value: function (e) {
                    this.enabled && (e = "phjs-".concat(e),
                        this.metrics[e] = (this.metrics[e] || 0) - 1)
                }
            }]),
                e
        }(),
        St = Uint8Array,
        Ft = Uint16Array,
        It = Uint32Array,
        Ot = new St([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        Pt = new St([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Et = new St([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        xt = function (e, t) {
            for (var n = new Ft(31), r = 0; r < 31; ++r)
                n[r] = t += 1 << e[r - 1];
            var i = new It(n[30]);
            for (r = 1; r < 30; ++r)
                for (var o = n[r]; o < n[r + 1]; ++o)
                    i[o] = o - n[r] << 5 | r;
            return [n, i]
        },
        At = xt(Ot, 2),
        Tt = At[0],
        $t = At[1];
    Tt[28] = 258,
        $t[258] = 28;
    for (var Ct = xt(Pt, 0)[1], Rt = new Ft(32768), Mt = 0; Mt < 32768; ++Mt) {
        var jt = (43690 & Mt) >>> 1 | (21845 & Mt) << 1;
        jt = (61680 & (jt = (52428 & jt) >>> 2 | (13107 & jt) << 2)) >>> 4 | (3855 & jt) << 4,
            Rt[Mt] = ((65280 & jt) >>> 8 | (255 & jt) << 8) >>> 1
    }
    var qt = function (e, t, n) {
        for (var r = e.length, i = 0, o = new Ft(t); i < r; ++i)
            ++o[e[i] - 1];
        var s, a = new Ft(t);
        for (i = 0; i < t; ++i)
            a[i] = a[i - 1] + o[i - 1] << 1;
        if (n) {
            s = new Ft(1 << t);
            var c = 15 - t;
            for (i = 0; i < r; ++i)
                if (e[i])
                    for (var u = i << 4 | e[i], l = t - e[i], d = a[e[i] - 1]++ << l, p = d | (1 << l) - 1; d <= p; ++d)
                        s[Rt[d] >>> c] = u
        } else
            for (s = new Ft(r),
                i = 0; i < r; ++i)
                s[i] = Rt[a[e[i] - 1]++] >>> 15 - e[i];
        return s
    },
        Dt = new St(288);
    for (Mt = 0; Mt < 144; ++Mt)
        Dt[Mt] = 8;
    for (Mt = 144; Mt < 256; ++Mt)
        Dt[Mt] = 9;
    for (Mt = 256; Mt < 280; ++Mt)
        Dt[Mt] = 7;
    for (Mt = 280; Mt < 288; ++Mt)
        Dt[Mt] = 8;
    var Nt = new St(32);
    for (Mt = 0; Mt < 32; ++Mt)
        Nt[Mt] = 5;
    var Bt, Lt = qt(Dt, 9, 0),
        Ht = qt(Nt, 5, 0),
        Ut = function (e) {
            return (e / 8 >> 0) + (7 & e && 1)
        },
        Wt = function (e, t, n) {
            (null == t || t < 0) && (t = 0),
                (null == n || n > e.length) && (n = e.length);
            var r = new (e instanceof Ft ? Ft : e instanceof It ? It : St)(n - t);
            return r.set(e.subarray(t, n)),
                r
        },
        Vt = function (e, t, n) {
            n <<= 7 & t;
            var r = t / 8 >> 0;
            e[r] |= n,
                e[r + 1] |= n >>> 8
        },
        Qt = function (e, t, n) {
            n <<= 7 & t;
            var r = t / 8 >> 0;
            e[r] |= n,
                e[r + 1] |= n >>> 8,
                e[r + 2] |= n >>> 16
        },
        Gt = function (e, t) {
            for (var n = [], r = 0; r < e.length; ++r)
                e[r] && n.push({
                    s: r,
                    f: e[r]
                });
            var i = n.length,
                o = n.slice();
            if (!i)
                return [new St(0), 0];
            if (1 == i) {
                var s = new St(n[0].s + 1);
                return s[n[0].s] = 1, [s, 1]
            }
            n.sort((function (e, t) {
                return e.f - t.f
            })),
                n.push({
                    s: -1,
                    f: 25001
                });
            var a = n[0],
                c = n[1],
                u = 0,
                l = 1,
                d = 2;
            for (n[0] = {
                s: -1,
                f: a.f + c.f,
                l: a,
                r: c
            }; l != i - 1;)
                a = n[n[u].f < n[d].f ? u++ : d++],
                    c = n[u != l && n[u].f < n[d].f ? u++ : d++],
                    n[l++] = {
                        s: -1,
                        f: a.f + c.f,
                        l: a,
                        r: c
                    };
            var p = o[0].s;
            for (r = 1; r < i; ++r)
                o[r].s > p && (p = o[r].s);
            var f = new Ft(p + 1),
                h = zt(n[l - 1], f, 0);
            if (h > t) {
                r = 0;
                var _ = 0,
                    g = h - t,
                    v = 1 << g;
                for (o.sort((function (e, t) {
                    return f[t.s] - f[e.s] || e.f - t.f
                })); r < i; ++r) {
                    var y = o[r].s;
                    if (!(f[y] > t))
                        break;
                    _ += v - (1 << h - f[y]),
                        f[y] = t
                }
                for (_ >>>= g; _ > 0;) {
                    var m = o[r].s;
                    f[m] < t ? _ -= 1 << t - f[m]++ - 1 : ++r
                }
                for (; r >= 0 && _; --r) {
                    var b = o[r].s;
                    f[b] == t && (--f[b],
                        ++_)
                }
                h = t
            }
            return [new St(f), h]
        },
        zt = function e(t, n, r) {
            return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : n[t.s] = r
        },
        Jt = function (e) {
            for (var t = e.length; t && !e[--t];)
                ;
            for (var n = new Ft(++t), r = 0, i = e[0], o = 1, s = function (e) {
                n[r++] = e
            }, a = 1; a <= t; ++a)
                if (e[a] == i && a != t)
                    ++o;
                else {
                    if (!i && o > 2) {
                        for (; o > 138; o -= 138)
                            s(32754);
                        o > 2 && (s(o > 10 ? o - 11 << 5 | 28690 : o - 3 << 5 | 12305),
                            o = 0)
                    } else if (o > 3) {
                        for (s(i),
                            --o; o > 6; o -= 6)
                            s(8304);
                        o > 2 && (s(o - 3 << 5 | 8208),
                            o = 0)
                    }
                    for (; o--;)
                        s(i);
                    o = 1,
                        i = e[a]
                }
            return [n.subarray(0, r), t]
        },
        Zt = function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r)
                n += e[r] * t[r];
            return n
        },
        Xt = function (e, t, n) {
            var r = n.length,
                i = Ut(t + 2);
            e[i] = 255 & r,
                e[i + 1] = r >>> 8,
                e[i + 2] = 255 ^ e[i],
                e[i + 3] = 255 ^ e[i + 1];
            for (var o = 0; o < r; ++o)
                e[i + o + 4] = n[o];
            return 8 * (i + 4 + r)
        },
        Yt = function (e, t, n, r, i, o, s, a, c, u, l) {
            Vt(t, l++, n),
                ++i[256];
            for (var d = Gt(i, 15), p = d[0], f = d[1], h = Gt(o, 15), _ = h[0], g = h[1], v = Jt(p), y = v[0], m = v[1], b = Jt(_), w = b[0], k = b[1], S = new Ft(19), F = 0; F < y.length; ++F)
                S[31 & y[F]]++;
            for (F = 0; F < w.length; ++F)
                S[31 & w[F]]++;
            for (var I = Gt(S, 7), O = I[0], P = I[1], E = 19; E > 4 && !O[Et[E - 1]]; --E)
                ;
            var x, A, T, $, C = u + 5 << 3,
                R = Zt(i, Dt) + Zt(o, Nt) + s,
                M = Zt(i, p) + Zt(o, _) + s + 14 + 3 * E + Zt(S, O) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
            if (C <= R && C <= M)
                return Xt(t, l, e.subarray(c, c + u));
            if (Vt(t, l, 1 + (M < R)),
                l += 2,
                M < R) {
                x = qt(p, f, 0),
                    A = p,
                    T = qt(_, g, 0),
                    $ = _;
                var j = qt(O, P, 0);
                Vt(t, l, m - 257),
                    Vt(t, l + 5, k - 1),
                    Vt(t, l + 10, E - 4),
                    l += 14;
                for (F = 0; F < E; ++F)
                    Vt(t, l + 3 * F, O[Et[F]]);
                l += 3 * E;
                for (var q = [y, w], D = 0; D < 2; ++D) {
                    var N = q[D];
                    for (F = 0; F < N.length; ++F) {
                        var B = 31 & N[F];
                        Vt(t, l, j[B]),
                            l += O[B],
                            B > 15 && (Vt(t, l, N[F] >>> 5 & 127),
                                l += N[F] >>> 12)
                    }
                }
            } else
                x = Lt,
                    A = Dt,
                    T = Ht,
                    $ = Nt;
            for (F = 0; F < a; ++F)
                if (r[F] > 255) {
                    B = r[F] >>> 18 & 31;
                    Qt(t, l, x[B + 257]),
                        l += A[B + 257],
                        B > 7 && (Vt(t, l, r[F] >>> 23 & 31),
                            l += Ot[B]);
                    var L = 31 & r[F];
                    Qt(t, l, T[L]),
                        l += $[L],
                        L > 3 && (Qt(t, l, r[F] >>> 5 & 8191),
                            l += Pt[L])
                } else
                    Qt(t, l, x[r[F]]),
                        l += A[r[F]];
            return Qt(t, l, x[256]),
                l + A[256]
        },
        Kt = new It([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        en = new St(0),
        tn = function () {
            for (var e = new It(256), t = 0; t < 256; ++t) {
                for (var n = t, r = 9; --r;)
                    n = (1 & n && 3988292384) ^ n >>> 1;
                e[t] = n
            }
            return e
        }(),
        nn = function (e, t, n, r, i) {
            return function (e, t, n, r, i, o) {
                var s = e.length,
                    a = new St(r + s + 5 * (1 + Math.floor(s / 7e3)) + i),
                    c = a.subarray(r, a.length - i),
                    u = 0;
                if (!t || s < 8)
                    for (var l = 0; l <= s; l += 65535) {
                        var d = l + 65535;
                        d < s ? u = Xt(c, u, e.subarray(l, d)) : (c[l] = o,
                            u = Xt(c, u, e.subarray(l, s)))
                    }
                else {
                    for (var p = Kt[t - 1], f = p >>> 13, h = 8191 & p, _ = (1 << n) - 1, g = new Ft(32768), v = new Ft(_ + 1), y = Math.ceil(n / 3), m = 2 * y, b = function (t) {
                        return (e[t] ^ e[t + 1] << y ^ e[t + 2] << m) & _
                    }, w = new It(25e3), k = new Ft(288), S = new Ft(32), F = 0, I = 0, O = (l = 0,
                        0), P = 0, E = 0; l < s; ++l) {
                        var x = b(l),
                            A = 32767 & l,
                            T = v[x];
                        if (g[A] = T,
                            v[x] = A,
                            P <= l) {
                            var $ = s - l;
                            if ((F > 7e3 || O > 24576) && $ > 423) {
                                u = Yt(e, c, 0, w, k, S, I, O, E, l - E, u),
                                    O = F = I = 0,
                                    E = l;
                                for (var C = 0; C < 286; ++C)
                                    k[C] = 0;
                                for (C = 0; C < 30; ++C)
                                    S[C] = 0
                            }
                            var R = 2,
                                M = 0,
                                j = h,
                                q = A - T & 32767;
                            if ($ > 2 && x == b(l - q))
                                for (var D = Math.min(f, $) - 1, N = Math.min(32767, l), B = Math.min(258, $); q <= N && --j && A != T;) {
                                    if (e[l + R] == e[l + R - q]) {
                                        for (var L = 0; L < B && e[l + L] == e[l + L - q]; ++L)
                                            ;
                                        if (L > R) {
                                            if (R = L,
                                                M = q,
                                                L > D)
                                                break;
                                            var H = Math.min(q, L - 2),
                                                U = 0;
                                            for (C = 0; C < H; ++C) {
                                                var W = l - q + C + 32768 & 32767,
                                                    V = W - g[W] + 32768 & 32767;
                                                V > U && (U = V,
                                                    T = W)
                                            }
                                        }
                                    }
                                    q += (A = T) - (T = g[A]) + 32768 & 32767
                                }
                            if (M) {
                                w[O++] = 268435456 | $t[R] << 18 | Ct[M];
                                var Q = 31 & $t[R],
                                    G = 31 & Ct[M];
                                I += Ot[Q] + Pt[G],
                                    ++k[257 + Q],
                                    ++S[G],
                                    P = l + R,
                                    ++F
                            } else
                                w[O++] = e[l],
                                    ++k[e[l]]
                        }
                    }
                    u = Yt(e, c, o, w, k, S, I, O, E, l - E, u),
                        o || (u = Xt(c, u, en))
                }
                return Wt(a, 0, r + Ut(u) + i)
            }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, r, !i)
        },
        rn = function (e, t, n) {
            for (; n; ++t)
                e[t] = n,
                    n >>>= 8
        };

    function on(e, t) {
        void 0 === t && (t = {});
        var n = function () {
            var e = 4294967295;
            return {
                p: function (t) {
                    for (var n = e, r = 0; r < t.length; ++r)
                        n = tn[255 & n ^ t[r]] ^ n >>> 8;
                    e = n
                },
                d: function () {
                    return 4294967295 ^ e
                }
            }
        }(),
            r = e.length;
        n.p(e);
        var i, o = nn(e, t, 10 + ((i = t).filename && i.filename.length + 1 || 0), 8),
            s = o.length;
        return function (e, t) {
            var n = t.filename;
            if (e[0] = 31,
                e[1] = 139,
                e[2] = 8,
                e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0,
                e[9] = 3,
                0 != t.mtime && rn(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
                n) {
                e[3] = 8;
                for (var r = 0; r <= n.length; ++r)
                    e[r + 10] = n.charCodeAt(r)
            }
        }(o, t),
            rn(o, s - 8, n.d()),
            rn(o, s - 4, r),
            o
    }

    function sn(e, t) {
        var n = e.length;
        if (!t && "undefined" != typeof TextEncoder)
            return (new TextEncoder).encode(e);
        for (var r = new St(e.length + (e.length >>> 1)), i = 0, o = function (e) {
            r[i++] = e
        }, s = 0; s < n; ++s) {
            if (i + 5 > r.length) {
                var a = new St(i + 8 + (n - s << 1));
                a.set(r),
                    r = a
            }
            var c = e.charCodeAt(s);
            c < 128 || t ? o(c) : c < 2048 ? (o(192 | c >>> 6),
                o(128 | 63 & c)) : c > 55295 && c < 57344 ? (o(240 | (c = 65536 + (1047552 & c) | 1023 & e.charCodeAt(++s)) >>> 18),
                    o(128 | c >>> 12 & 63),
                    o(128 | c >>> 6 & 63),
                    o(128 | 63 & c)) : (o(224 | c >>> 12),
                        o(128 | c >>> 6 & 63),
                        o(128 | 63 & c))
        }
        return Wt(r, 0, i)
    } ! function (e) {
        e.GZipJS = "gzip-js",
            e.LZ64 = "lz64",
            e.Base64 = "base64"
    }(Bt || (Bt = {}));
    var an, cn, un, ln = function (e, t, n) {
        var r = t || {};
        r.ip = n.ip ? 1 : 0,
            r._ = (new Date).getTime().toString(),
            r.ver = F.LIB_VERSION;
        var i = e.split("?");
        if (i.length > 1) {
            var o, s = v(i[1].split("&"));
            try {
                for (s.s(); !(o = s.n()).done;) {
                    var a = o.value.split("=")[0];
                    r[a] && delete r[a]
                }
            } catch (e) {
                s.e(e)
            } finally {
                s.f()
            }
        }
        var c = e.indexOf("?") > -1 ? "&" : "?";
        return e + c + function (e) {
            var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                i = [];
            return L(e, (function (e, r) {
                t = encodeURIComponent(e.toString()),
                    n = encodeURIComponent(r),
                    i[i.length] = n + "=" + t
            })),
                i.join(r)
        }(r)
    },
        dn = function e(t, n) {
            if (n.blob && t.buffer)
                return new Blob([t.buffer], {
                    type: "text/plain"
                });
            if (n.sendBeacon || n.blob) {
                var r = e(t, {
                    method: "POST"
                });
                return new Blob([r], {
                    type: "application/x-www-form-urlencoded"
                })
            }
            if ("POST" !== n.method)
                return null;
            var i, o;
            return i = Array.isArray(t) || (o = t,
                "[object Uint8Array]" === Object.prototype.toString.call(o)) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data),
                "compression" in t && t.compression && (i += "&compression=" + t.compression),
                i
        },
        pn = function (e) {
            var t = e.url,
                n = e.data,
                r = e.headers,
                i = e.options,
                o = e.captureMetrics,
                s = e.callback,
                a = e.retriesPerformedSoFar,
                c = e.retryQueue,
                u = e.onXHRError,
                l = e.timeout,
                d = void 0 === l ? 1e4 : l,
                p = new XMLHttpRequest;
            p.open(i.method || "GET", t, !0);
            var f = dn(n, i);
            o.incr("_send_request"),
                o.incr("_send_request_inflight"),
                L(r, (function (e, t) {
                    p.setRequestHeader(t, e)
                })),
                "POST" !== i.method || i.blob || p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                p.timeout = d,
                p.withCredentials = !0,
                p.onreadystatechange = function () {
                    if (4 === p.readyState)
                        if (o.incr("xhr-response"),
                            o.incr("xhr-response-".concat(p.status)),
                            o.decr("_send_request_inflight"),
                            200 === p.status) {
                            if (s) {
                                var e;
                                try {
                                    e = JSON.parse(p.responseText)
                                } catch (e) {
                                    return void D(e)
                                }
                                s(e)
                            }
                        } else
                            "function" == typeof u && u(p), [401, 403, 404, 500].indexOf(p.status) < 0 && c.enqueue({
                                url: t,
                                data: n,
                                options: i,
                                headers: r,
                                retriesPerformedSoFar: (a || 0) + 1,
                                callback: s
                            }),
                                s && s({
                                    status: 0
                                })
                },
                p.send(f)
        },
        fn = function (e) {
            a(i, e);
            var n = p(i);

            function i(e, t) {
                var o;
                return r(this, i),
                    (o = n.call(this)).captureMetrics = e,
                    o.isPolling = !1,
                    o.queue = [],
                    o.areWeOnline = !0,
                    o.onXHRError = t,
                    "onLine" in window.navigator && (o.areWeOnline = window.navigator.onLine,
                        window.addEventListener("online", (function () {
                            o._handleWeAreNowOnline()
                        })),
                        window.addEventListener("offline", (function () {
                            o.areWeOnline = !1
                        }))),
                    o
            }
            return o(i, [{
                key: "enqueue",
                value: function (e) {
                    var t = e.retriesPerformedSoFar || 0;
                    if (!(t >= 10)) {
                        var n = 3e3 * Math.pow(2, t),
                            r = new Date(Date.now() + n);
                        console.warn("Enqueued failed request for retry in ".concat(n)),
                            this.queue.push({
                                retryAt: r,
                                requestData: e
                            }),
                            this.isPolling || (this.isPolling = !0,
                                this.poll())
                    }
                }
            }, {
                key: "poll",
                value: function () {
                    var e = this;
                    this._poller && clearTimeout(this._poller),
                        this._poller = setTimeout((function () {
                            e.areWeOnline && e.queue.length > 0 && e.flush(),
                                e.poll()
                        }), this._pollInterval)
                }
            }, {
                key: "flush",
                value: function () {
                    var e = new Date(Date.now()),
                        t = this.queue.filter((function (t) {
                            return t.retryAt < e
                        }));
                    if (t.length > 0) {
                        this.queue = this.queue.filter((function (t) {
                            return t.retryAt >= e
                        }));
                        var n, r = v(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value.requestData;
                                this._executeXhrRequest(i)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                }
            }, {
                key: "unload",
                value: function () {
                    this._poller && (clearTimeout(this._poller),
                        this._poller = void 0);
                    var e, n = v(this.queue);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r = e.value.requestData,
                                i = r.url,
                                o = r.data,
                                s = r.options;
                            try {
                                window.navigator.sendBeacon(i, dn(o, t(t({}, s), {}, {
                                    sendBeacon: !0
                                })))
                            } catch (e) {
                                F.DEBUG && console.error(e)
                            }
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    this.queue = []
                }
            }, {
                key: "_executeXhrRequest",
                value: function (e) {
                    var t = e.url,
                        n = e.data,
                        r = e.options,
                        i = e.headers,
                        o = e.callback,
                        s = e.retriesPerformedSoFar;
                    pn({
                        url: t,
                        data: n || {},
                        options: r || {},
                        headers: i || {},
                        retriesPerformedSoFar: s || 0,
                        callback: o,
                        captureMetrics: this.captureMetrics,
                        retryQueue: this,
                        onXHRError: this.onXHRError
                    })
                }
            }, {
                key: "_handleWeAreNowOnline",
                value: function () {
                    this.areWeOnline = !0,
                        this.flush()
                }
            }]),
                i
        }(bt),
        hn = 18e5,
        _n = 864e5,
        gn = function () {
            function e(t, n) {
                r(this, e),
                    this.persistence = n,
                    this._windowId = void 0,
                    this._sessionId = void 0,
                    this._sessionStartTimestamp = null,
                    this._sessionActivityTimestamp = null;
                var i = t.persistence_name || t.token;
                if (this.window_id_storage_key = "ph_" + i + "_window_id",
                    this.primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists", !this.persistence.disabled && Ce.is_supported()) {
                    var o = Ce.parse(this.window_id_storage_key),
                        s = Ce.parse(this.primary_window_exists_storage_key);
                    o && !s ? this._windowId = o : Ce.remove(this.window_id_storage_key),
                        Ce.set(this.primary_window_exists_storage_key, !0)
                }
                this._listenToReloadWindow()
            }
            return o(e, [{
                key: "_setWindowId",
                value: function (e) {
                    e !== this._windowId && (this._windowId = e, !this.persistence.disabled && Ce.is_supported() && Ce.set(this.window_id_storage_key, e))
                }
            }, {
                key: "_getWindowId",
                value: function () {
                    return this._windowId ? this._windowId : !this.persistence.disabled && Ce.is_supported() ? Ce.parse(this.window_id_storage_key) : null
                }
            }, {
                key: "_setSessionId",
                value: function (e, t, n) {
                    e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n,
                        this._sessionActivityTimestamp = t,
                        this._sessionId = e,
                        this.persistence.register(s({}, rt, [t, e, n])))
                }
            }, {
                key: "_getSessionId",
                value: function () {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                        return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props.$sesid;
                    return Array.isArray(e) && 2 === e.length && e.push(e[0]),
                        e || [0, null, 0]
                }
            }, {
                key: "resetSessionId",
                value: function () {
                    this._setSessionId(null, null, null)
                }
            }, {
                key: "_listenToReloadWindow",
                value: function () {
                    var e = this;
                    window.addEventListener("beforeunload", (function () {
                        !e.persistence.disabled && Ce.is_supported() && Ce.remove(e.primary_window_exists_storage_key)
                    }))
                }
            }, {
                key: "checkAndGetSessionAndWindowId",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = t || (new Date).getTime(),
                        r = this._getSessionId(),
                        i = f(r, 3),
                        o = i[0],
                        s = i[1],
                        a = i[2],
                        c = this._getWindowId(),
                        u = a && a > 0 && Math.abs(n - a) > _n;
                    !s || !e && Math.abs(n - o) > hn || u ? (s = oe(),
                        c = oe(),
                        a = n) : c || (c = oe());
                    var l = 0 === o || !e || u ? n : o,
                        d = 0 === a ? (new Date).getTime() : a;
                    return this._setWindowId(c),
                        this._setSessionId(s, l, d), {
                        sessionId: s,
                        windowId: c
                    }
                }
            }]),
                e
        }(),
        vn = o((function e(t, n, i, o) {
            r(this, e),
                this.name = "posthog-js",
                this.setupOnce = function (e) {
                    e((function (e) {
                        var r, s, a;
                        if ("error" !== e.level || !t.__loaded)
                            return e;
                        e.tags || (e.tags = {});
                        var c = t.config.ui_host || t.config.api_host;
                        e.tags["PostHog Person URL"] = c + "/person/" + t.get_distinct_id(),
                            t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = c + "/recordings/" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId);
                        var u = (null === (r = e.exception) || void 0 === r ? void 0 : r.values) || [],
                            l = {
                                $sentry_event_id: e.event_id,
                                $sentry_exception: e.exception,
                                $sentry_exception_message: null === (s = u[0]) || void 0 === s ? void 0 : s.value,
                                $sentry_exception_type: null === (a = u[0]) || void 0 === a ? void 0 : a.type,
                                $sentry_tags: e.tags
                            };
                        return n && i && (l.$sentry_url = (o || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + e.event_id),
                            t.capture("$exception", l),
                            e
                    }))
                }
        })),
        yn = function () {
            function e() {
                r(this, e),
                    s(this, "_seenFirstPageView", !1)
            }
            return o(e, [{
                key: "onPageview",
                value: function () {
                    this._seenFirstPageView && (this._pageViewId = oe()),
                        this._seenFirstPageView = !0
                }
            }, {
                key: "getPageViewId",
                value: function () {
                    return this._pageViewId || (this._pageViewId = oe()),
                        this._pageViewId
                }
            }]),
                e
        }();
    ! function (e) {
        e[e.INIT_MODULE = 0] = "INIT_MODULE",
            e[e.INIT_SNIPPET = 1] = "INIT_SNIPPET"
    }(an || (an = {}));
    var mn = function () { },
        bn = {},
        wn = "posthog",
        kn = x.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
        Sn = !kn && -1 === $.indexOf("MSIE") && -1 === $.indexOf("Mozilla"),
        Fn = function () {
            var e, t, n;
            return {
                api_host: "https://app.posthog.com",
                api_method: "POST",
                api_transport: "XHR",
                ui_host: null,
                token: "",
                autocapture: !0,
                rageclick: !0,
                cross_subdomain_cookie: -1 === (null == T || null === (e = T.location) || void 0 === e || null === (t = e.hostname) || void 0 === t ? void 0 : t.indexOf("herokuapp.com")),
                persistence: "cookie",
                persistence_name: "",
                cookie_name: "",
                loaded: mn,
                store_google: !0,
                save_referrer: !0,
                test: !1,
                verbose: !1,
                img: !1,
                capture_pageview: !0,
                capture_pageleave: !0,
                debug: !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_cookie: !1,
                enable_recording_console_log: void 0,
                secure_cookie: "https:" === (null == x || null === (n = x.location) || void 0 === n ? void 0 : n.protocol),
                ip: !0,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_capturing_persistence_type: "localStorage",
                opt_out_capturing_cookie_prefix: null,
                opt_in_site_apps: !1,
                property_blacklist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                xhr_headers: {},
                inapp_protocol: "//",
                inapp_link_new_window: !1,
                request_batching: !0,
                properties_string_max_length: 65535,
                session_recording: {
                    blockClass: "ph-no-capture",
                    blockSelector: null,
                    ignoreClass: "ph-ignore-input",
                    maskAllInputs: !0,
                    maskInputOptions: {},
                    maskInputFn: null,
                    slimDOMOptions: {},
                    collectFonts: !1,
                    inlineStylesheet: !0
                },
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                advanced_disable_decide: !1,
                advanced_disable_toolbar_metrics: !1,
                on_xhr_error: function (e) {
                    var t = "Bad HTTP status: " + e.status + " " + e.statusText;
                    console.error(t)
                },
                get_device_id: function (e) {
                    return e
                },
                _onCapture: mn,
                _capture_metrics: !1,
                capture_performance: void 0,
                name: "posthog",
                callback_fn: "posthog._jsc",
                bootstrap: {},
                disable_compression: !1
            }
        },
        In = function (e, t, n) {
            var r, i = n !== wn && un ? n ? un[n] : void 0 : un;
            if (i && cn === an.INIT_MODULE)
                r = i;
            else {
                if (i && !W(i))
                    return void console.error("You have already initialized " + n);
                r = new On
            }
            if (r._init(e, t, n),
                r.toolbar.maybeLoadToolbar(),
                r.sessionRecording = new lt(r),
                r.sessionRecording.startRecordingIfEnabled(),
                r.webPerformance = new ht(r),
                r.webPerformance.startObservingIfEnabled(),
                r.__autocapture = r.get_config("autocapture"),
                r.get_config("autocapture")) {
                r.__autocapture = r.get_config("autocapture");
                Fe.enabledForProject(r.get_config("token"), 100, 100) ? Fe.isBrowserSupported() ? Fe.init(r) : (r.__autocapture = !1,
                    q("Disabling Automatic Event Collection because this browser is not supported")) : (r.__autocapture = !1,
                        q("Not in active bucket: disabling Automatic Event Collection."))
            }
            return F.DEBUG = F.DEBUG || r.get_config("debug"),
                void 0 !== i && W(i) && (r._execute_array.call(r.people, i.people),
                    r._execute_array(i)),
                r
        },
        On = function () {
            function e() {
                var t = this;
                r(this, e),
                    this.config = Fn(),
                    this.compression = {},
                    this.decideEndpointWasHit = !1,
                    this.SentryIntegration = vn,
                    this.segmentIntegration = function () {
                        return e = t,
                            n = function (t, n) {
                                t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(),
                                    t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
                                        distinct_id: t.event.userId
                                    }),
                                        e.reloadFeatureFlags());
                                var r = e._calculate_event_properties(n, t.event.properties);
                                return t.event.properties = Object.assign({}, r, t.event.properties),
                                    t
                            }, {
                            name: "PostHog JS",
                            type: "enrichment",
                            version: "1.0.0",
                            isLoaded: function () {
                                return !0
                            },
                            load: function () {
                                return Promise.resolve()
                            },
                            track: function (e) {
                                return n(e, e.event.event)
                            },
                            page: function (e) {
                                return n(e, "$pageview")
                            },
                            identify: function (e) {
                                return n(e, "$identify")
                            },
                            screen: function (e) {
                                return n(e, "$screen")
                            }
                        };
                        var e, n
                    },
                    this.__captureHooks = [],
                    this.__request_queue = [],
                    this.__loaded = !1,
                    this.__loaded_recorder = !1,
                    this.__autocapture = void 0,
                    this._jsc = function () { },
                    this.people = new Qe(this),
                    this.featureFlags = new Xe(this),
                    this.feature_flags = this.featureFlags,
                    this.toolbar = new mt(this),
                    this.pageViewIdManager = new yn,
                    this._captureMetrics = void 0,
                    this._requestQueue = void 0,
                    this._retryQueue = void 0,
                    this.persistence = void 0,
                    this.sessionManager = void 0
            }
            return o(e, [{
                key: "init",
                value: function (e, t, n) {
                    if (z(n))
                        console.error("You must name your new library: init(token, config, name)");
                    else {
                        if (n !== wn) {
                            var r = In(e, t, n);
                            return un[n] = r,
                                r._loaded(),
                                r
                        }
                        console.error("You must initialize the main posthog object right after you include the PostHog js snippet")
                    }
                }
            }, {
                key: "_init",
                value: function (e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    if (this.__loaded = !0,
                        this.config = {},
                        this._triggered_notifs = [],
                        this.set_config(U({}, Fn(), r, {
                            name: i,
                            token: e,
                            callback_fn: (i === wn ? i : "posthog." + i) + "._jsc"
                        })),
                        this._jsc = function () { },
                        (null != x && null !== (t = x.rrweb) && void 0 !== t && t.record || null != x && x.rrwebRecord) && (this.__loaded_recorder = !0),
                        this._captureMetrics = new kt(this.get_config("_capture_metrics")),
                        this._requestQueue = new wt(this._captureMetrics, this._handle_queued_event.bind(this)),
                        this._retryQueue = new fn(this._captureMetrics, this.get_config("on_xhr_error")),
                        this.__captureHooks = [],
                        this.__request_queue = [],
                        this.persistence = new at(this.config),
                        this.sessionManager = new gn(this.config, this.persistence),
                        this._gdpr_init(),
                        r.segment && (this.config.get_device_id = function () {
                            return r.segment.user().anonymousId()
                        },
                            r.segment.user().id() && (this.register({
                                distinct_id: r.segment.user().id()
                            }),
                                this.persistence.set_user_state("identified")),
                            r.segment.register(this.segmentIntegration())),
                        void 0 !== (null === (n = r.bootstrap) || void 0 === n ? void 0 : n.distinctID)) {
                        var o, s, a = this.get_config("get_device_id")(oe()),
                            c = null !== (o = r.bootstrap) && void 0 !== o && o.isIdentifiedID ? a : r.bootstrap.distinctID;
                        this.persistence.set_user_state(null !== (s = r.bootstrap) && void 0 !== s && s.isIdentifiedID ? "identified" : "anonymous"),
                            this.register({
                                distinct_id: r.bootstrap.distinctID,
                                $device_id: c
                            })
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                        var u, l, d = Object.keys((null === (u = r.bootstrap) || void 0 === u ? void 0 : u.featureFlags) || {}).filter((function (e) {
                            var t, n;
                            return !(null === (t = r.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e])
                        })).reduce((function (e, t) {
                            var n, i;
                            return e[t] = (null === (n = r.bootstrap) || void 0 === n || null === (i = n.featureFlags) || void 0 === i ? void 0 : i[t]) || !1,
                                e
                        }), {}),
                            p = Object.keys((null === (l = r.bootstrap) || void 0 === l ? void 0 : l.featureFlagPayloads) || {}).filter((function (e) {
                                return d[e]
                            })).reduce((function (e, t) {
                                var n, i, o, s;
                                null !== (n = r.bootstrap) && void 0 !== n && null !== (i = n.featureFlagPayloads) && void 0 !== i && i[t] && (e[t] = null === (o = r.bootstrap) || void 0 === o || null === (s = o.featureFlagPayloads) || void 0 === s ? void 0 : s[t]);
                                return e
                            }), {});
                        this.featureFlags.receivedFeatureFlags({
                            featureFlags: d,
                            featureFlagPayloads: p
                        })
                    }
                    if (!this.get_distinct_id()) {
                        var f = this.get_config("get_device_id")(oe());
                        this.register_once({
                            distinct_id: f,
                            $device_id: f
                        }, ""),
                            this.persistence.set_user_state("anonymous")
                    }
                    x.addEventListener && x.addEventListener("onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this))
                }
            }, {
                key: "_loaded",
                value: function () {
                    this.featureFlags.setReloadingPaused(!0);
                    try {
                        this.get_config("loaded")(this)
                    } catch (e) {
                        console.error("`loaded` function failed", e)
                    }
                    this._start_queue_if_opted_in(),
                        this.get_config("capture_pageview") && this.capture("$pageview", {}, {
                            send_instantly: !0
                        }),
                        this.get_config("advanced_disable_decide") || new gt(this).call(),
                        this.featureFlags.resetRequestQueue(),
                        this.featureFlags.setReloadingPaused(!1)
                }
            }, {
                key: "_start_queue_if_opted_in",
                value: function () {
                    this.has_opted_out_capturing() || this.get_config("request_batching") && this._requestQueue.poll()
                }
            }, {
                key: "_dom_loaded",
                value: function () {
                    var e = this;
                    this.has_opted_out_capturing() || H(this.__request_queue, (function (t) {
                        e._send_request.apply(e, h(t))
                    })),
                        this.__request_queue = [],
                        this._start_queue_if_opted_in()
                }
            }, {
                key: "_prepare_callback",
                value: function (e, t) {
                    if (z(e))
                        return null;
                    if (kn)
                        return function (n) {
                            e(n, t)
                        };
                    var n = this._jsc,
                        r = "" + Math.floor(1e8 * Math.random()),
                        i = this.get_config("callback_fn") + "[" + r + "]";
                    return n[r] = function (i) {
                        delete n[r],
                            e(i, t)
                    },
                        i
                }
            }, {
                key: "_handle_unload",
                value: function () {
                    this.get_config("request_batching") ? (this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave"),
                        this.get_config("_capture_metrics") && (this._requestQueue.updateUnloadMetrics(),
                            this.capture("$capture_metrics", this._captureMetrics.metrics)),
                        this._requestQueue.unload(),
                        this._retryQueue.unload()) : this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave", null, {
                            transport: "sendBeacon"
                        })
                }
            }, {
                key: "_handle_queued_event",
                value: function (e, t, n) {
                    var r = JSON.stringify(t);
                    this.__compress_and_send_json_request(e, r, n || bn, mn)
                }
            }, {
                key: "__compress_and_send_json_request",
                value: function (e, n, r, i) {
                    var o, s = function (e, n, r) {
                        return e === Bt.LZ64 ? [{
                            data: S.compressToBase64(n),
                            compression: Bt.LZ64
                        }, r] : e === Bt.GZipJS ? [on(sn(n), {
                            mtime: 0
                        }), t(t({}, r), {}, {
                            blob: !0,
                            urlQueryArgs: {
                                compression: Bt.GZipJS
                            }
                        })] : [{
                            data: ne(n)
                        }, r]
                    }((o = this.compression)[Bt.GZipJS] ? Bt.GZipJS : o[Bt.LZ64] ? Bt.LZ64 : Bt.Base64, n, r),
                        a = f(s, 2),
                        c = a[0],
                        u = a[1];
                    this._send_request(e, c, u, i)
                }
            }, {
                key: "_send_request",
                value: function (e, n, r, i) {
                    if (Sn)
                        this.__request_queue.push([e, n, r, i]);
                    else {
                        var o = {
                            method: this.get_config("api_method"),
                            transport: this.get_config("api_transport"),
                            verbose: this.get_config("verbose")
                        };
                        r = U(o, r || {}),
                            kn || (r.method = "GET");
                        var s = "sendBeacon" in x.navigator && "sendBeacon" === r.transport;
                        if (e = ln(e, r.urlQueryArgs || {}, {
                            ip: this.get_config("ip")
                        }),
                            G(n) && this.get_config("img")) {
                            var a = T.createElement("img");
                            a.src = e,
                                T.body.appendChild(a)
                        } else if (s)
                            try {
                                x.navigator.sendBeacon(e, dn(n, t(t({}, r), {}, {
                                    sendBeacon: !0
                                })))
                            } catch (e) {
                                this.get_config("debug") && console.error(e)
                            }
                        else if (kn)
                            try {
                                pn({
                                    url: e,
                                    data: n,
                                    headers: this.get_config("xhr_headers"),
                                    options: r,
                                    captureMetrics: this._captureMetrics,
                                    callback: i,
                                    retriesPerformedSoFar: 0,
                                    retryQueue: this._retryQueue,
                                    onXHRError: this.get_config("on_xhr_error")
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        else {
                            var c, u = T.createElement("script");
                            u.type = "text/javascript",
                                u.async = !0,
                                u.defer = !0,
                                u.src = e;
                            var l = T.getElementsByTagName("script")[0];
                            null === (c = l.parentNode) || void 0 === c || c.insertBefore(u, l)
                        }
                    }
                }
            }, {
                key: "_execute_array",
                value: function (e) {
                    var t, n = this,
                        r = [],
                        i = [],
                        o = [];
                    H(e, (function (e) {
                        e && (t = e[0],
                            W(t) ? o.push(e) : "function" == typeof e ? e.call(n) : W(e) && "alias" === t ? r.push(e) : W(e) && -1 !== t.indexOf("capture") && "function" == typeof n[t] ? o.push(e) : i.push(e))
                    }));
                    var s = function (e, t) {
                        H(e, (function (e) {
                            if (W(e[0])) {
                                var n = t;
                                L(e, (function (e) {
                                    n = n[e[0]].apply(n, e.slice(1))
                                }))
                            } else
                                this[e[0]].apply(this, e.slice(1))
                        }), t)
                    };
                    s(r, this),
                        s(i, this),
                        s(o, this)
                }
            }, {
                key: "_hasBootstrappedFeatureFlags",
                value: function () {
                    var e, t;
                    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                }
            }, {
                key: "push",
                value: function (e) {
                    this._execute_array([e])
                }
            }, {
                key: "capture",
                value: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bn;
                    if (this.__loaded && !Ue(this, !1)) {
                        this._captureMetrics.incr("capture"),
                            "$snapshot" === e && this._captureMetrics.incr("snapshot");
                        var r = (n = n || bn).transport;
                        if (r && (n.transport = r),
                            z(e) || "string" != typeof e)
                            console.error("No event name provided to posthog.capture");
                        else if (!se($)) {
                            this.persistence.update_search_keyword(T.referrer),
                                this.get_config("store_google") && this.persistence.update_campaign_params(),
                                this.get_config("save_referrer") && this.persistence.update_referrer_info(T.referrer);
                            var i = {
                                event: e,
                                properties: this._calculate_event_properties(e, t || {})
                            };
                            "$identify" === e && n.$set && (i.$set = n.$set),
                                (i = te(i, n._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp = n.timestamp || new Date,
                                this.get_config("debug") && q("PostHog.js send", i);
                            var o = JSON.stringify(i),
                                s = this.get_config("api_host") + (n.endpoint || "/e/"),
                                a = n !== bn;
                            return !this.get_config("request_batching") || a && !n._batchKey || n.send_instantly ? this.__compress_and_send_json_request(s, o, n) : this._requestQueue.enqueue(s, i, n),
                                this._invokeCaptureHooks(e, i),
                                i
                        }
                    }
                }
            }, {
                key: "_addCaptureHook",
                value: function (e) {
                    this.__captureHooks.push(e)
                }
            }, {
                key: "_invokeCaptureHooks",
                value: function (e, t) {
                    this.config._onCapture(e, t),
                        L(this.__captureHooks, (function (t) {
                            return t(e)
                        }))
                }
            }, {
                key: "_calculate_event_properties",
                value: function (e, n) {
                    var r, i = this.persistence.remove_event_timer(e),
                        o = t({}, n);
                    if (o.token = this.get_config("token"),
                        "$snapshot" === e) {
                        var s = this.persistence.properties();
                        return o.distinct_id = s.distinct_id,
                            o
                    }
                    var a = le.properties();
                    if (this.sessionManager) {
                        var c = this.sessionManager.checkAndGetSessionAndWindowId(),
                            u = c.sessionId,
                            l = c.windowId;
                        o.$session_id = u,
                            o.$window_id = l
                    }
                    if (null !== (r = this.webPerformance) && void 0 !== r && r.isEnabled && ("$pageview" === e && this.pageViewIdManager.onPageview(),
                        o = U(o, {
                            $pageview_id: this.pageViewIdManager.getPageViewId()
                        })),
                        "$performance_event" === e) {
                        var d = this.persistence.properties();
                        return o.distinct_id = d.distinct_id,
                            o.$current_url = a.$current_url,
                            o
                    }
                    if (void 0 !== i) {
                        var p = (new Date).getTime() - i;
                        o.$duration = parseFloat((p / 1e3).toFixed(3))
                    }
                    o = U({}, a, this.persistence.properties(), o);
                    var f = this.get_config("property_blacklist");
                    W(f) ? L(f, (function (e) {
                        delete o[e]
                    })) : console.error("Invalid value for property_blacklist config: " + f);
                    var h = this.get_config("sanitize_properties");
                    return h && (o = h(o, e)),
                        o
                }
            }, {
                key: "register",
                value: function (e, t) {
                    this.persistence.register(e, t)
                }
            }, {
                key: "register_once",
                value: function (e, t, n) {
                    this.persistence.register_once(e, t, n)
                }
            }, {
                key: "unregister",
                value: function (e) {
                    this.persistence.unregister(e)
                }
            }, {
                key: "_register_single",
                value: function (e, t) {
                    this.register(s({}, e, t))
                }
            }, {
                key: "getFeatureFlag",
                value: function (e, t) {
                    return this.featureFlags.getFeatureFlag(e, t)
                }
            }, {
                key: "getFeatureFlagPayload",
                value: function (e) {
                    var t = this.featureFlags.getFeatureFlagPayload(e);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
            }, {
                key: "isFeatureEnabled",
                value: function (e, t) {
                    return this.featureFlags.isFeatureEnabled(e, t)
                }
            }, {
                key: "reloadFeatureFlags",
                value: function () {
                    this.featureFlags.reloadFeatureFlags()
                }
            }, {
                key: "onFeatureFlags",
                value: function (e) {
                    return this.featureFlags.onFeatureFlags(e)
                }
            }, {
                key: "identify",
                value: function (e, t, n) {
                    if (e) {
                        this._captureMetrics.incr("identify");
                        var r = this.get_distinct_id();
                        if (this.register({
                            $user_id: e
                        }), !this.get_property("$device_id")) {
                            var i = r;
                            this.register_once({
                                $had_persisted_distinct_id: !0,
                                $device_id: i
                            }, "")
                        }
                        e !== r && e !== this.get_property(Ke) && (this.unregister(Ke),
                            this.register({
                                distinct_id: e
                            }));
                        var o = "anonymous" === this.persistence.get_user_state();
                        e !== r && o ? (this.persistence.set_user_state("identified"),
                            this.capture("$identify", {
                                distinct_id: e,
                                $anon_distinct_id: r
                            }, {
                                $set: t || {},
                                $set_once: n || {}
                            }),
                            this.featureFlags.setAnonymousDistinctId(r)) : (t && this.people.set(t),
                                n && this.people.set_once(n)),
                            e !== r && this.reloadFeatureFlags()
                    } else
                        console.error("Unique user id has not been set in posthog.identify")
                }
            }, {
                key: "group",
                value: function (e, n, r) {
                    if (e && n) {
                        this._captureMetrics.incr("group");
                        var i = this.getGroups();
                        this.register({
                            $groups: t(t({}, i), {}, s({}, e, n))
                        }),
                            r && this.capture("$groupidentify", {
                                $group_type: e,
                                $group_key: n,
                                $group_set: r
                            }),
                            i[e] !== n && this.reloadFeatureFlags()
                    } else
                        console.error("posthog.group requires a group type and group key")
                }
            }, {
                key: "resetGroups",
                value: function () {
                    this.register({
                        $groups: {}
                    }),
                        this.reloadFeatureFlags()
                }
            }, {
                key: "reset",
                value: function (e) {
                    var t = this.get_property("$device_id");
                    this.persistence.clear(),
                        this.persistence.set_user_state("anonymous"),
                        this.sessionManager.resetSessionId();
                    var n = this.get_config("get_device_id")(oe());
                    this.register_once({
                        distinct_id: n,
                        $device_id: e ? n : t
                    }, "")
                }
            }, {
                key: "get_distinct_id",
                value: function () {
                    return this.get_property("distinct_id")
                }
            }, {
                key: "getGroups",
                value: function () {
                    return this.get_property("$groups") || {}
                }
            }, {
                key: "alias",
                value: function (e, t) {
                    return e === this.get_property(Ye) ? (N("Attempting to create alias for existing People user - aborting."), -2) : (z(t) && (t = this.get_distinct_id()),
                        e !== t ? (this._register_single(Ke, e),
                            this.capture("$create_alias", {
                                alias: e,
                                distinct_id: t
                            })) : (console.error("alias matches current distinct_id - skipping api call."),
                                this.identify(e), -1))
                }
            }, {
                key: "set_config",
                value: function (e) {
                    var n = t({}, this.config);
                    G(e) && (U(this.config, e),
                        this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
                        this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
                        this.persistence && this.persistence.update_config(this.config),
                        Ee.is_supported() && "true" === Ee.get("ph_debug") && (this.config.debug = !0),
                        this.get_config("debug") && (F.DEBUG = !0),
                        this.sessionRecording && void 0 !== e.disable_session_recording && n.disable_session_recording !== e.disable_session_recording && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()))
                }
            }, {
                key: "startSessionRecording",
                value: function () {
                    this.set_config({
                        disable_session_recording: !1
                    })
                }
            }, {
                key: "stopSessionRecording",
                value: function () {
                    this.set_config({
                        disable_session_recording: !0
                    })
                }
            }, {
                key: "sessionRecordingStarted",
                value: function () {
                    var e;
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started())
                }
            }, {
                key: "loadToolbar",
                value: function (e) {
                    return this.toolbar.loadToolbar(e)
                }
            }, {
                key: "get_config",
                value: function (e) {
                    var t;
                    return null === (t = this.config) || void 0 === t ? void 0 : t[e]
                }
            }, {
                key: "get_property",
                value: function (e) {
                    return this.persistence.props[e]
                }
            }, {
                key: "toString",
                value: function () {
                    var e, t = null !== (e = this.get_config("name")) && void 0 !== e ? e : wn;
                    return t !== wn && (t = "posthog." + t),
                        t
                }
            }, {
                key: "_gdpr_init",
                value: function () {
                    "localStorage" === this.get_config("opt_out_capturing_persistence_type") && Ee.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
                        persistence_type: "cookie"
                    }) && this.opt_in_capturing({
                        enable_persistence: !1
                    }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({
                        persistence_type: "cookie"
                    }) && this.opt_out_capturing({
                        clear_persistence: !1
                    }),
                        this.clear_opt_in_out_capturing({
                            persistence_type: "cookie",
                            enable_persistence: !1
                        })),
                        this.has_opted_out_capturing() ? this._gdpr_update_persistence({
                            clear_persistence: !0
                        }) : this.has_opted_in_capturing() || !this.get_config("opt_out_capturing_by_default") && !Oe.get("ph_optout") || (Oe.remove("ph_optout"),
                            this.opt_out_capturing({
                                clear_persistence: this.get_config("opt_out_persistence_by_default")
                            }))
                }
            }, {
                key: "_gdpr_update_persistence",
                value: function (e) {
                    var t;
                    if (e && e.clear_persistence)
                        t = !0;
                    else {
                        if (!e || !e.enable_persistence)
                            return;
                        t = !1
                    }
                    this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t)
                }
            }, {
                key: "_gdpr_call_func",
                value: function (e, t) {
                    return t = U({
                        capture: this.capture.bind(this),
                        persistence_type: this.get_config("opt_out_capturing_persistence_type"),
                        cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"),
                        cookie_expiration: this.get_config("cookie_expiration"),
                        cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                        secure_cookie: this.get_config("secure_cookie")
                    }, t || {}),
                        Ee.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"),
                        e(this.get_config("token"), {
                            capture: t.capture,
                            captureEventName: t.capture_event_name,
                            captureProperties: t.capture_properties,
                            persistenceType: t.persistence_type,
                            persistencePrefix: t.cookie_prefix,
                            cookieExpiration: t.cookie_expiration,
                            crossSubdomainCookie: t.cross_subdomain_cookie,
                            secureCookie: t.secure_cookie
                        })
                }
            }, {
                key: "opt_in_capturing",
                value: function (e) {
                    e = U({
                        enable_persistence: !0
                    }, e || {}),
                        this._gdpr_call_func(Re, e),
                        this._gdpr_update_persistence(e)
                }
            }, {
                key: "opt_out_capturing",
                value: function (e) {
                    var t = U({
                        clear_persistence: !0
                    }, e || {});
                    this._gdpr_call_func(Me, t),
                        this._gdpr_update_persistence(t)
                }
            }, {
                key: "has_opted_in_capturing",
                value: function (e) {
                    return this._gdpr_call_func(je, e)
                }
            }, {
                key: "has_opted_out_capturing",
                value: function (e) {
                    return this._gdpr_call_func(qe, e)
                }
            }, {
                key: "clear_opt_in_out_capturing",
                value: function (e) {
                    var t = U({
                        enable_persistence: !0
                    }, null != e ? e : {});
                    this._gdpr_call_func(De, t),
                        this._gdpr_update_persistence(t)
                }
            }, {
                key: "debug",
                value: function (e) {
                    !1 === e ? (x.console.log("You've disabled debug mode."),
                        localStorage && localStorage.removeItem("ph_debug"),
                        this.set_config({
                            debug: !1
                        })) : (x.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),
                            localStorage && localStorage.setItem("ph_debug", "true"),
                            this.set_config({
                                debug: !0
                            }))
                }
            }, {
                key: "decodeLZ64",
                value: function (e) {
                    return S.decompressFromBase64(e || null)
                }
            }]),
                e
        }();
    ! function (e, t) {
        for (var n = 0; n < t.length; n++)
            e.prototype[t[n]] = Y(e.prototype[t[n]])
    }(On, ["identify"]);
    var Pn = {},
        En = function () {
            un.init = function (e, t, n) {
                if (n)
                    return un[n] || (un[n] = Pn[n] = In(e || "", t || {}, n),
                        un[n]._loaded()),
                        un[n];
                var r = un;
                return Pn.posthog ? r = Pn.posthog : e && ((r = In(e, t || {}, wn))._loaded(),
                    Pn.posthog = r),
                    un = r,
                    cn === an.INIT_SNIPPET && (x.posthog = un),
                    L(Pn, (function (e, t) {
                        t !== wn && (un[t] = e)
                    })),
                    r
            }
        };
    cn = an.INIT_SNIPPET,
        z(x.posthog) && (x.posthog = []),
        (un = x.posthog).__loaded || un.config && un.persistence ? console.error("PostHog library has already been downloaded at least once.") : (L(un._i, (function (e) {
            e && W(e) && (Pn[e[2]] = In.apply(void 0, h(e)))
        })),
            En(),
            un.init(),
            L(Pn, (function (e) {
                e._loaded()
            })),
            function () {
                function e() {
                    e.done || (e.done = !0,
                        Sn = !1,
                        L(Pn, (function (e) {
                            e._dom_loaded()
                        })))
                }
                T.addEventListener && ("complete" === T.readyState ? e() : T.addEventListener("DOMContentLoaded", e, !1)),
                    ue(x, "load", e, !0)
            }())
}();
//# sourceMappingURL=array.js.map