"use strict";
function logDeviceWidth() {
    1200 <= deviceWidth
        ? (deviceClass = "xl")
        : 992 <= deviceWidth && deviceWidth <= 1200
        ? (deviceClass = "lg")
        : 768 <= deviceWidth && deviceWidth <= 992
        ? (deviceClass = "md")
        : 576 <= deviceWidth && deviceWidth <= 768
        ? (deviceClass = "sm")
        : 0 <= deviceWidth && deviceWidth <= 576 && (deviceClass = "xs");
}
function getShowGSCell(e, t, n, i) {
    $.ajax({
        url: "https://spreadsheets.google.com/feeds/cells/" + t + "/od6/public/full?alt=json",
        dataType: "jsonp",
        success: function (e) {
            var t = e.feed.entry.find(function (e) {
                return e.title.$t == n;
            }).content.$t;
            $(i).html(t);
        },
        cache: !1,
    });
}
function submitFormToGoogle(s, r, e) {
    $(e).on("click", function (e) {
        e.preventDefault();
        var t,
            n,
            i = $(s).serializeArray(),
            a =
                ((t = i),
                (n = {}),
                $.map(t, function (e, t) {
                    n[e.name] = e.value;
                }),
                n),
            o = r;
        $(s).addClass("submitInProgress");
        $.ajax({
            url: o,
            method: "GET",
            dataType: "json",
            data: a,
            success: function (e) {
                $(s).addClass("submitSuccessful");
            },
        });
    });
}
function bannerVideo(a, e, t, n, i, o, s, r) {
    function d(e, t) {
        var n = "url('" + t + "')  no-repeat scroll center cover;",
            i =
                '<video src="' +
                e +
                '" muted autoplay loop class="banner-media"></video><div class="clickToPause-container"><button class="pauseVideo button clickToPause"><span class="fas fa-play"></span><span class="fas fa-pause"></span><span class="sr-only">Pause banner video</span></button></div>';
        $(a).css("background", n), $(a).html(i);
    }
    function l(e) {
        var t = '<img src="' + e + '" class="banner-media" alt="' + r + '"></img>';
        $(a).html(t);
    }
    1380 <= screen.width ? d(e, t) : 992 <= screen.width && screen.width <= 1379 ? d(n, i) : 640 <= screen.width && screen.width <= 991 ? l(o) : screen.width <= 639 && l(s);
}
function vimeoPlayer(e, t, n, i) {
    var a =
        '<iframe src="' +
        ("https://player.vimeo.com/video/" + t + (!0 === n ? "?autoplay=1&muted=1&" : "?autoplay=0&") + (!0 === i ? "loop=1&" : "loop=0&") + "title=0&byline=0&portrait=0") +
        '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    $(e).addClass("vimeo-embed"), $(e).append(a);
}
function fsJqueryCallback() {
    function p(e) {
        !0 === t && console.log(e);
    }
    var t = !1;
    (-1 < window.location.href.indexOf("Action/Preview") || -1 < window.location.href.indexOf("Action/Edit")) &&
        ($(".fsHidden, .fsWorkflowHidden, .fsHiddenByFieldSetting").show(), $(".fsHidden, .fsWorkflowHidden, .fsHiddenByFieldSetting").attr("style", "display: block !important"));
    var o, e;
    window.location.href;
    "undefined" != typeof isFSLandingPageForm && !0 === isFSLandingPageForm ? ((o = !0), console.log("is fsLP landing page"), (allGTAGdata = "")) : (o = !1),
        (e = $("[data-addClass-next]")) &&
            e.each(function () {
                var e,
                    t,
                    n,
                    i,
                    a,
                    o,
                    s,
                    r,
                    d,
                    l,
                    c,
                    f = $(this),
                    u = f.attr("data-addClass-next"),
                    h = f.parents(".fsRow").next(".fsRow").attr("id");
                (n = "#" + h),
                    (i = "." + (e = u)),
                    $(n),
                    (a = $(n + " .fieldset-content")),
                    (o = $(n + " .fieldset-content .fsOptionLabel")),
                    (s = e + "-content"),
                    (d = (r = e + "-option") + " " + e + "-option-other"),
                    (l = i + "-option"),
                    (c = i + "-option-other"),
                    (t = !!$(n + " .fieldset-content div.vertical.fs-clear > input") && $(n + " .fieldset-content > div.vertical.fs-clear")),
                    a.addClass(s),
                    o.addClass(r),
                    0 != t && t.addClass(d),
                    t.html(t.html().replace("Other:", "Other")),
                    p(c),
                    $(c + " > input").attr("placeholder", "Enter gift amount"),
                    p(l + ' input[type="radio"]'),
                    $(l + ' input[type="radio"]').on("change", function () {
                        p("radio clicked!"), $(l).removeClass("checked"), $(this).parents(l).addClass("checked");
                    }),
                    $("input.fsOtherField").on("input", function () {
                        var e = $(this)
                            .val()
                            .replace(/[^\d.-]/g, "");
                        $(this).val(), p(e), $(this).val(e);
                    });
            }),
        "undefined" != typeof formIsGiving &&
            !0 === formIsGiving &&
            (console.log("is giving form"),
            $('input[type="radio"]').each(function () {
                var e = $(this).parents("fieldset");
                -1 < e.find("legend").text().indexOf("Select an amount") && e.addClass("giving--amount");
            }),
            $("fieldset.giving--amount :input").change(function () {
                var e,
                    t,
                    n = $('fieldset.giving--amount .checked input[type="radio"]').val(),
                    i = $(".get-amount"),
                    a = "Select a recurring gift amount before continuing.",
                    o = $(".get-amount-bookend"),
                    s = ((e = n) <= 0 ? ((t = a), o.hide()) : ((t = e), o.show()), t);
                i.text(s);
            }),
            $("fieldset.giving--amount .fsOtherField").on("input", function () {
                this.value = this.value.match(/^\d+\.?\d{0,2}/);
                var e = $(this).val(),
                    t = $(this).parent().find('input[type="radio"]');
                t.val(e), t.trigger("change");
            }),
            $('input[value="50.00"]').attr("checked", "checked"),
            $('input[value="50.00"]').parent().addClass("checked"),
            $('input[value="50.00"]').trigger("change")),
        (function () {
            function d(n, i) {
                $(".fsForm .fsLabel, .fsForm label").each(function () {
                    if (-1 < $(this).text().indexOf(n)) {
                        var e = $(this).attr("id"),
                            t = $("#" + e);
                        !(function (e, t, n) {
                            var i = t.parents(".fsRowBody");
                            switch (e) {
                                case "legend":
                                    var a = i.find('input[value="' + n + '"]'),
                                        o = i.find(".fsRadio-buttons-option-other"),
                                        s = function () {
                                            a.attr("id"), a.attr("checked", "checked"), i.find(".fsOptionLabel").removeClass("checked"), a.parents(".fsOptionLabel").addClass("checked"), a.trigger("change");
                                        };
                                    1 <= a.length && "radio" === a.attr("type")
                                        ? s()
                                        : 1 <= a.length && "checkbox" === a.attr("type")
                                        ? s()
                                        : a.length <= 0 && 1 <= o.length && (o.find(".fsOptionLabel").focus(), o.find(".fsOptionLabel").click(), o.find(".fsOtherField").val(n), o.find('input[type="radio"]'));
                                    break;
                                default:
                                    t.parent().find(".fsField").val(n);
                            }
                        })(t[0].nodeName.toLowerCase(), t, i);
                    }
                });
            }
            var e;
            (e =
                !1 === o || "undefined" == typeof fsLPType || "undefined" == typeof fsLPAud || "undefined" == typeof fsLPMes || "undefined" == typeof fsFormat || "undefined" == typeof fsFormatType
                    ? window.location.href
                    : window.location.href + "&type=" + fsLPType + "&audience=" + fsLPAud + "&message=" + fsLPMes + "&fsFormat=" + fsFormat + "&fsFormatType=" + fsFormatType),
                (function (e) {
                    var t = Object.entries(e),
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                            var r = _slicedToArray(o.value, 2);
                            d(r[0], r[1]);
                        }
                    } catch (e) {
                        (i = !0), (a = e);
                    } finally {
                        try {
                            !n && s.return && s.return();
                        } finally {
                            if (i) throw a;
                        }
                    }
                })(
                    (function (e) {
                        function i(e, t) {
                            n[e] = t;
                        }
                        var a = e.substring(e.indexOf("?") + 1).split("&"),
                            n = {};
                        return (
                            (function () {
                                for (var e = 0, t = a.length; e < t; e++) {
                                    var n = a[e].split("=");
                                    i(n[0], n[1]);
                                }
                                !1 !== o && i("utm_all", window.location.href);
                            })(),
                            n
                        );
                    })(decodeURI(e))
                );
        })(),
        $(document).ready(function () {
            $(".fsNextButton, .fsPreviousButton").on("click", function () {
                $("html,body").animate({ scrollTop: ($(".fsForm").offset().top -= 120) }, 200);
            });
        });
}
var deviceClass,
    allGTAGdata,
    _slicedToArray = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
            return (function (e, t) {
                var n = [],
                    i = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var s, r = e[Symbol.iterator](); !(i = (s = r.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    (a = !0), (o = e);
                } finally {
                    try {
                        !i && r.return && r.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return n;
            })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    },
    clientResW = window.screen.availWidth,
    clientResH = window.screen.availHeight,
    clientTotalResW = window.screen.width,
    clientTotalResH = window.screen.height,
    deviceWidth = $(document).width();
logDeviceWidth(),
    $(".in_ratio_constraint").each(function () {
        var e = $(this).height(),
            t = $(this).width() / e,
            n = $(this).children().height();
        $(this).children().width() / n < t ? ($(this).removeClass("landscape"), $(this).addClass("portrait")) : ($(this).removeClass("portrait"), $(this).addClass("landscape"));
    }),
    $("#myCustomTestTest").addClass("myCustomTestClassTestTest"),
    $(document).ready(function () {
        var e = window.location.href;
        -1 < e.indexOf("westminstercollege.edu/create-alert")
            ? getShowGSCell("alertCellHTML", "1O0eiZf7o7II4_JfnuCTnNaNhKx1E4erYYQohSPm14Yc", "G2", "#draft-notifications")
            : -1 < e.indexOf("?test-notification") && -1 < e.indexOf("faculty-and-staff-resources")
            ? getShowGSCell("alertCellHTML", "1O0eiZf7o7II4_JfnuCTnNaNhKx1E4erYYQohSPm14Yc", "C2", "#custom-body-container-top")
            : -1 < e.indexOf("?test-notification") && -1 < e.indexOf("current-student-resources")
            ? getShowGSCell("alertCellHTML", "1O0eiZf7o7II4_JfnuCTnNaNhKx1E4erYYQohSPm14Yc", "E2", "#custom-body-container-top")
            : -1 < e.indexOf("?test-notification") && e.indexOf("faculty-and-staff-resources") < 0 && e.indexOf("current-student-resources") < 0
            ? getShowGSCell("alertCellHTML", "1O0eiZf7o7II4_JfnuCTnNaNhKx1E4erYYQohSPm14Yc", "A2", "#custom-body-container-top")
            : -1 < e.indexOf("faculty-and-staff-resources") && e.indexOf("?test-alert") < 0
            ? getShowGSCell("alertCellHTML", "1oaLzVn24mQcQ5PXn3iifzkkHbtCwAZgHVq1gI3mA8C4", "C2", "#custom-body-container-top")
            : -1 < e.indexOf("current-student-resources") && e.indexOf("?test-alert") < 0
            ? getShowGSCell("alertCellHTML", "1oaLzVn24mQcQ5PXn3iifzkkHbtCwAZgHVq1gI3mA8C4", "E2", "#custom-body-container-top")
            : getShowGSCell("alertCellHTML", "1oaLzVn24mQcQ5PXn3iifzkkHbtCwAZgHVq1gI3mA8C4", "A2", "#custom-body-container-top");
    }),
    $(document).ready(function () {
        var e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        window.location.hash &&
            e &&
            setTimeout(function () {
                var e = window.location.hash;
                (window.location.hash = ""), (window.location.hash = e);
            }, 300);
    }),
    fsJqueryCallback();
