$(".accordion-toggle").on("click", function() {
        $(this).parent().toggleClass("is-open");
    }),
    function() {
        var t;
        (t = jQuery).fn.flexNav = function(e) {
            var n, o, i, a;
            (o = t.extend({
                animationSpeed: 300,
                transitionOpacity: !0,
                buttonSelector: ".menu-button"
            }, e)),
            (n = t(this)).addClass("with-js"), !0 === o.transitionOpacity && n.addClass("opacity"),
                n.find("li").each(function() {
                    if (t(this).has("ul").length) return t(this).addClass("item-with-ul").find("ul").hide();
                }),
                t(o.buttonSelector).data("navEl", n),
                (a = ".item-with-ul, " + o.buttonSelector),
                t(a).append('<span class="chevron chevron--button" title="Tap to expand" role="button" aria-pressed="false"></span>'),
                t(".flexnav__label").attr({
                    title: "Tap to expand",
                    role: "button",
                    "aria-pressed": "false"
                }),
                (i = o.buttonSelector + ", " + o.buttonSelector + " .chevron"),
                t(i).on("click", function(e) {
                    var n, a;
                    return (
                        t(i).toggleClass("active"),
                        e.preventDefault(),
                        e.stopPropagation(),
                        (a = o.buttonSelector),
                        (n = t(this).is(a) ? t(this) : t(this).parent(a)),
                        n.data("navEl"),
                        t("body").toggleClass("overflow-hidden"),
                        t(".flexnav--full").toggleClass("flexnav-show")
                    );
                }),
                t(document).click(function(e) {
                    t(e.target).closest(".flexnav--full").length ||
                        (t(".flexnav--full").hasClass("flexnav-show") && (t(".flexnav--full").removeClass("flexnav-show"), t("body").removeClass("overflow-hidden"), t(".menu-button").removeClass("active")));
                }),
                t(".chevron").on("click", function(e) {
                    t(this).attr("title", "Click to expand") ?
                        (t(this).removeAttr("title").removeAttr("aria-pressed"), t(this).attr("title", "Click to collapse").attr("aria-pressed", "true")) :
                        (t(this).removeAttr("title").removeAttr("aria-pressed"), t(this).attr("title", "Click to expand").attr("aria-pressed", "false")),
                        t(this).toggleClass("chevron-up");
                    var n, i;
                    return (
                        (n = t(this).parent(".item-with-ul").find(">ul")),
                        (i = t(this).parent(".item-with-ul").find(">span.chevron")), !0 === n.hasClass("flexnav-show") ?
                        (n.removeClass("flexnav-show").slideUp(o.animationSpeed), i.removeClass("active")) :
                        !1 === n.hasClass("flexnav-show") ?
                        (n.addClass("flexnav-show").slideDown(o.animationSpeed), i.addClass("active")) :
                        void 0
                    );
                }),
                t(".flexnav__label").on("click", function(e) {
                    var n = t(this).siblings(".chevron");
                    n.attr("title", "Tap to expand") ?
                        (n.removeAttr("title").removeAttr("aria-pressed"), n.attr("title", "Tap to collapse").attr("aria-pressed", "true")) :
                        (n.removeAttr("title").removeAttr("aria-pressed"), n.attr("title", "Tap to expand").attr("aria-pressed", "false")),
                        n.toggleClass("chevron-up");
                    var i, a;
                    return (
                        (i = t(this).parent(".item-with-ul").find(">ul")),
                        (a = t(this).parent(".item-with-ul").find(">span.chevron")), !0 === i.hasClass("flexnav-show") ?
                        (i.removeClass("flexnav-show").slideUp(o.animationSpeed), a.removeClass("active")) :
                        !1 === i.hasClass("flexnav-show") ?
                        (i.addClass("flexnav-show").slideDown(o.animationSpeed), a.addClass("active")) :
                        void 0
                    );
                });
        };
    }.call(this),
    null !== document.querySelector(".nav-header-strip") ? (document.body.className += " nav-header-strip--padding") : (document.querySelector(".nav-header").className += " border-bottom"),
    (window.FontAwesomeCdnConfig = {
        autoA11y: {
            enabled: !0
        },
        asyncLoading: {
            enabled: !0
        },
        reporting: {
            enabled: !0,
            domains: "localhost, *.dev"
        },
        useUrl: "use.fontawesome.com",
        faCdnUrl: "https://cdn.fontawesome.com:443",
        code: "cdac07bd55",
        webFontLoaderVersion: "1.6.24",
    }),
    (function() {
            function t(t) {
                var e, n, o, i;
                (t = t || "fa"),
                (e = document.querySelectorAll("." + t)),
                Array.prototype.forEach.call(e, function(t) {
                    (n = t.getAttribute("title")),
                    t.setAttribute("aria-hidden", "true"),
                        (o = !t.nextElementSibling || !t.nextElementSibling.classList.contains("sr-only")),
                        n && o && ((i = document.createElement("span")), (i.innerHTML = n), i.classList.add("sr-only"), t.parentNode.insertBefore(i, t.nextSibling));
                });
            }!(function() {
                function t(t) {
                    this.el = t;
                    for (var e = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), o = 0; o < e.length; o++) n.call(this, e[o]);
                }
                if (!(void 0 === window.Element || "classList" in document.documentElement)) {
                    var e = Array.prototype,
                        n = e.push,
                        o = e.splice,
                        i = e.join;
                    (t.prototype = {
                        add: function(t) {
                            this.contains(t) || (n.call(this, t), (this.el.className = this.toString()));
                        },
                        contains: function(t) {
                            return -1 != this.el.className.indexOf(t);
                        },
                        item: function(t) {
                            return this[t] || null;
                        },
                        remove: function(t) {
                            if (this.contains(t)) {
                                for (var e = 0; e < this.length && this[e] != t; e++);
                                o.call(this, e, 1), (this.el.className = this.toString());
                            }
                        },
                        toString: function() {
                            return i.call(this, " ");
                        },
                        toggle: function(t) {
                            return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t);
                        },
                    }),
                    (window.DOMTokenList = t),
                    (function(t, e, n) {
                        Object.defineProperty ? Object.defineProperty(t, e, {
                            get: n
                        }) : t.__defineGetter__(e, n);
                    })(Element.prototype, "classList", function() {
                        return new t(this);
                    });
                }
            })();
            var e,
                n,
                o,
                i,
                a,
                s,
                r,
                l = {
                    isIE: function(t, e) {
                        var n,
                            o = "IE",
                            i = document.createElement("B"),
                            a = document.documentElement;
                        return t && ((o += " " + t), e && (o = e + " " + o)), (i.innerHTML = "\x3c!--[if " + o + ']><b id="fitest"></b><![endif]--\x3e'), a.appendChild(i), (n = !!document.getElementById("fitest")), a.removeChild(i), n;
                    },
                },
                c = {
                    load: function(t) {
                        var e = document.createElement("link");
                        (e.href = t), (e.media = "all"), (e.rel = "stylesheet"), document.getElementsByTagName("head")[0].appendChild(e);
                    },
                    loadAsync: function(t, e, n, o) {
                        var i,
                            a = document.createElement("script"),
                            s = {},
                            r = function() {},
                            l = document.scripts[0];
                        window.WebFontConfig || (window.WebFontConfig = {}),
                            (s = window.WebFontConfig).custom || (s.custom = {}),
                            s.custom.families || (s.custom.families = []),
                            s.custom.urls || (s.custom.urls = []),
                            s.custom.testStrings || (s.custom.testStrings = {}),
                            s.custom.families.push(e),
                            s.custom.urls.push(t),
                            (s.custom.testStrings[e] = n),
                            (i = s.fontactive || r),
                            (s.fontactive = function(t, n) {
                                var o = (window.FontAwesomeHooks || {}).loaded || r;
                                i(t, n), e === t && "n4" === n && o();
                            }),
                            (a.src = o),
                            l.parentNode.insertBefore(a, l);
                    },
                },
                d = {
                    load: function(t) {
                        var e = document.createElement("script"),
                            n = document.scripts[0];
                        (e.src = t), n.parentNode.appendChild(e);
                    },
                };
            //         if (
            //             (window.FontAwesomeCdnConfig &&
            //                 ((e = window.FontAwesomeCdnConfig),
            //                 (n = e.useUrl),
            //                 (o = e.faCdnUrl),
            //                 (i = e.code),
            //                 (a = e.webFontLoaderVersion),
            //                 e.autoA11y.enabled &&
            //                     ((function (t) {
            //                         var e,
            //                             n = [],
            //                             o = document,
            //                             i = "DOMContentLoaded",
            //                             a = (o.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
            //                         a ||
            //                             o.addEventListener(
            //                                 i,
            //                                 (e = function () {
            //                                     for (o.removeEventListener(i, e), a = 1; (e = n.shift()); ) e();
            //                                 })
            //                             ),
            //                             a ? setTimeout(t, 0) : n.push(t);
            //                     })(t.bind(t, "fa")),
            //                     (function (t) {
            //                         "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, { childList: !0, subtree: !0 });
            //                     })(t.bind(t, "fa"))),
            //                 e.reporting.enabled &&
            //                     (function (t, e) {
            //                         var n = !1;
            //                         return (
            //                             t.split(",").forEach(function (t) {
            //                                 var o = new RegExp(t.trim().replace(".", "\\.").replace("*", "(.*)"));
            //                                 e.match(o) && (n = !0);
            //                             }),
            //                             n
            //                         );
            //                     })(e.reporting.domains, location.host) &&
            //                     d.load(o + "/js/stats.js"),
            //                 (r = "https://" + n + "/" + i + ".css"),
            //                 (s = "https://" + n + "/webfontloader/" + a + "/webfontloader.js"),
            //                 e.asyncLoading.enabled ? c.loadAsync(r, "FontAwesome", "Ã¯â€°â‚¬", s) : c.load(r)),
            //             window.FortAwesomeConfig)
            //         ) {
            //             (n = (e = window.FortAwesomeConfig).useUrl), (i = e.code), (r = "https://" + n + "/" + (l.isIE(8, "lte") ? i + "-sd" : i) + ".css"), c.load(r);
            //         }
            //     })(),
            $(".list-expandable__item__toggle").on("click", function() {
                    $(this).siblings(".list-expandable__item__content").toggleClass("list-expandable__item__content--expanded");
                }),
                $(".tab__content:first").addClass("tab__content--open"),
                $(".tab__item").click(function() {
                    $(".tab__content").removeClass("tab__content--open");
                    var t = $(this).attr("rel");
                    $("#" + t).addClass("tab__content--open"), $(".tab__item").removeClass("tab--active"), $(this).addClass("tab--active"), $(".tab__title").removeClass("tab--open"), $(".tab__title[rel^='" + t + "']").addClass("tab--open");
                }),
                $(".tab__title").click(function() {
                    $(this).toggleClass("tab--open");
                    var t = $(this).attr("rel");
                    $("#" + t).toggleClass("tab__content--open");
                }),
                $(".tab__item").last().addClass("tab--last"),
                $(".skip").click(function(t) {
                    var e = "#" + this.href.split("#")[1];
                    $(e)
                        .attr("tabindex", -1)
                        .on("blur focusout", function() {
                            $(this).removAttr("tabindex");
                        })
                        .focus();
                }),
                (function(t, e) {
                    "function" == typeof define && define.amd ? define([], e()) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.zenscroll = e());
                })(this, function() {
                    "use strict";
                    var t = function(t) {
                        return "getComputedStyle" in window && "smooth" === window.getComputedStyle(t)["scroll-behavior"];
                    };
                    if ("undefined" == typeof window || !("document" in window)) return {};
                    var e = function(e, n, o) {
                            (n = n || 999), o || 0 === o || (o = null == document.querySelector(".nav-header-strip") ? 70 : 100);
                            var i,
                                a = function(t) {
                                    i = t;
                                },
                                s = document.documentElement,
                                r = function() {
                                    return e ? e.scrollTop : window.scrollY || s.scrollTop;
                                },
                                l = function() {
                                    return e ? Math.min(e.offsetHeight, window.innerHeight) : window.innerHeight || s.clientHeight;
                                },
                                c = function(t) {
                                    return e ? t.offsetTop : t.getBoundingClientRect().top + r() - s.offsetTop;
                                },
                                d = function() {
                                    clearTimeout(i), a(0);
                                },
                                u = function(o, i, c) {
                                    if ((d(), t(e || document.body)))(e || window).scrollTo(0, o), c && c();
                                    else {
                                        var u = r(),
                                            f = Math.max(o, 0) - u;
                                        i = i || Math.min(Math.abs(f), n);
                                        var m = new Date().getTime();
                                        !(function t() {
                                            a(
                                                setTimeout(function() {
                                                    var n = Math.min((new Date().getTime() - m) / i, 1),
                                                        o = Math.max(Math.floor(u + f * (n < 0.5 ? 2 * n * n : n * (4 - 2 * n) - 1)), 0);
                                                    e ? (e.scrollTop = o) : window.scrollTo(0, o), n < 1 && l() + o < (e || s).scrollHeight ? t() : (setTimeout(d, 99), c && c());
                                                }, 9)
                                            );
                                        })();
                                    }
                                },
                                f = function(t, e, n) {
                                    var i = c(t) - o;
                                    return u(i, e, n), i;
                                };
                            return {
                                setup: function(t, e) {
                                    t && (n = t), (0 === e || e) && (o = e);
                                },
                                to: f,
                                toY: u,
                                intoView: function(t, e, n) {
                                    var i = t.getBoundingClientRect().height,
                                        a = c(t),
                                        s = a + i,
                                        d = l(),
                                        m = r(),
                                        h = m + d;
                                    a - o < m || i + o > d ? f(t, e, n) : s + o > h ? u(s - d + o, e, n) : n && n();
                                },
                                center: function(t, e, n, o) {
                                    u(Math.max(c(t) - l() / 2 + (n || t.getBoundingClientRect().height / 2), 0), e, o);
                                },
                                stop: d,
                                moving: function() {
                                    return !!i;
                                },
                                getY: r,
                            };
                        },
                        n = e();
                    if ("addEventListener" in window && !t(document.body) && !window.noZensmooth) {
                        "scrollRestoration" in history &&
                            ((history.scrollRestoration = "manual"),
                                window.addEventListener(
                                    "popstate",
                                    function(t) {
                                        t.state && "scrollY" in t.state && n.toY(t.state.scrollY);
                                    }, !1
                                ));
                        var o = function(t, e) {
                            try {
                                history.replaceState({
                                    scrollY: n.getY()
                                }, ""), history.pushState({
                                    scrollY: e
                                }, "", window.location.href.split("#")[0] + t);
                            } catch (t) {}
                        };
                        /* window.addEventListener(
                             "click",
                             function (t) {
                                 for (var e = t.target; e && "A" !== e.tagName; ) e = e.parentNode;
                                 if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) {
                                     var i = e.getAttribute("href") || "";
                                     if (0 === i.indexOf("#"))
                                         if ("#" === i) t.preventDefault(), n.toY(0), o("", 0);
                                         else {
                                             var a = e.hash.substring(1),
                                                 s = document.getElementById(a);
                                             s && (t.preventDefault(), o("#" + a, n.to(s)));
                                         }
                                 }
                             },
                             !1
                         );*/
                    }
                    return {
                        createScroller: e,
                        setup: n.setup,
                        to: n.to,
                        toY: n.toY,
                        intoView: n.intoView,
                        center: n.center,
                        stop: n.stop,
                        moving: n.moving
                    };
                });
	});
