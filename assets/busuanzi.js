function busuanzi() {
    var t, e, n, a, c, o, i;
    o = !1, i = [], ready = function (t) {
        return o || "interactive" === document.readyState || "complete" === document.readyState ? t.call(document) : i.push(function () {
            return t.call(this)
        }), this
    }, a = function () {
        for (var t = 0, e = i.length; e > t; t++) i[t].apply(document);
        i = []
    }, c = function () {
        o || (o = !0, a.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", c, !1) : document.attachEvent && (document.detachEvent("onreadystatechange", c), window == window.top && (clearInterval(n), n = null)))
    }, document.addEventListener ? document.addEventListener("DOMContentLoaded", c, !1) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
        /loaded|complete/.test(document.readyState) && c()
    }), window == window.top && (n = setInterval(function () {
        try {
            o || document.documentElement.doScroll("left")
        } catch (t) {
            return
        }
        c()
    }, 5))), t = {
        fetch: function (t, e) {
            var n = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
            window[n] = this.evalCall(e), t = t.replace("=BusuanziCallback", "=" + n), scriptTag = document.createElement("SCRIPT"), scriptTag.type = "text/javascript", scriptTag.defer = !0, scriptTag.src = t, document.getElementsByTagName("HEAD")[0].appendChild(scriptTag)
        },
        evalCall: function (t) {
            return function (n) {
                ready(function () {
                    try {
                        t(n), scriptTag.parentElement.removeChild(scriptTag)
                    } catch (t) {
                        e.hides()
                    }
                })
            }
        }
    }, t.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function (t) {
        e.texts(t), e.shows()
    }), e = {
        bszs: ["site_pv", "page_pv", "site_uv"],
        texts: function (t) {
            this.bszs.map(function (e) {
                var n = document.getElementById("busuanzi_value_" + e);
                n && (n.innerHTML = t[e])
            })
        },
        hides: function () {
            this.bszs.map(function (t) {
                var e = document.getElementById("busuanzi_container_" + t);
                e && (e.style.display = "none")
            })
        },
        shows: function () {
            this.bszs.map(function (t) {
                var e = document.getElementById("busuanzi_container_" + t);
                e && (e.style.display = "inline")
            })
        }
    }
}