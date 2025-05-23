jQuery(document).ready(function(s) {
    function a(t) {
        var r = d(t);
        if (t.parents(".cd-headline").hasClass("type")) {
            var c = t.parent(".cd-words-wrapper");
            c.addClass("selected").removeClass("waiting"), setTimeout(function() {
                c.removeClass("selected"), t.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
            }, 500), setTimeout(function() {
                e(r, 150)
            }, 1300)
        } else if (t.parents(".cd-headline").hasClass("letters")) {
            var o = t.children("i").length >= r.children("i").length;
            (function e(n, t, r, c) {
                if (n.removeClass("in").addClass("out"), n.is(":last-child") ? r && setTimeout(function() {
                        a(d(t))
                    }, 2500) : setTimeout(function() {
                        e(n.next(), t, r, c)
                    }, c), n.is(":last-child") && s("html").hasClass("no-csstransitions")) {
                    var o = d(t);
                    l(t, o)
                }
            })(t.find("i").eq(0), t, o, 50), n(r.find("i").eq(0), r, o, 50)
        } else t.parents(".cd-headline").hasClass("clip") ? t.parents(".cd-words-wrapper").animate({
            width: "2px"
        }, 600, function() {
            l(t, r), e(r)
        }) : t.parents(".cd-headline").hasClass("loading-bar") ? (t.parents(".cd-words-wrapper").removeClass("is-loading"), l(t, r), setTimeout(function() {
            a(r)
        }, 3800), setTimeout(function() {
            t.parents(".cd-words-wrapper").addClass("is-loading")
        }, 800)) : (l(t, r), setTimeout(function() {
            a(r)
        }, 2500))
    }

    function e(s, e) {
        s.parents(".cd-headline").hasClass("type") ? (n(s.find("i").eq(0), s, !1, e), s.addClass("is-visible").removeClass("is-hidden")) : s.parents(".cd-headline").hasClass("clip") && s.parents(".cd-words-wrapper").animate({
            width: s.width() + 10
        }, 600, function() {
            setTimeout(function() {
                a(s)
            }, 1500)
        })
    }

    function n(s, e, d, t) {
        s.addClass("in").removeClass("out"), s.is(":last-child") ? (e.parents(".cd-headline").hasClass("type") && setTimeout(function() {
            e.parents(".cd-words-wrapper").addClass("waiting")
        }, 200), d || setTimeout(function() {
            a(e)
        }, 2500)) : setTimeout(function() {
            n(s.next(), e, d, t)
        }, t)
    }

    function d(s) {
        return s.is(":last-child") ? s.parent().children().eq(0) : s.next()
    }

    function t(s) {
        return s.is(":first-child") ? s.parent().children().last() : s.prev()
    }

    function l(s, a) {
        s.removeClass("is-visible").addClass("is-hidden"), a.removeClass("is-hidden").addClass("is-visible")
    }(function a(e) {
        e.each(function() {
            var a = s(this),
                e = a.text().split(""),
                n = a.hasClass("is-visible");
            for (i in e) a.parents(".rotate-2").length > 0 && (e[i] = "<em>" + e[i] + "</em>"), e[i] = n ? '<i class="in">' + e[i] + "</i>" : "<i>" + e[i] + "</i>";
            var d = e.join("");
            a.html(d).css("opacity", 1)
        })
    })(s(".cd-headline.letters").find("b")),
    function e(n) {
        var d = 2500;
        n.each(function() {
            var e = s(this);
            if (e.hasClass("loading-bar")) d = 3800, setTimeout(function() {
                e.find(".cd-words-wrapper").addClass("is-loading")
            }, 800);
            else if (e.hasClass("clip")) {
                var n = e.find(".cd-words-wrapper"),
                    t = n.width() + 10;
                n.css("width", t)
            } else if (!e.hasClass("type")) {
                var l = e.find(".cd-words-wrapper b"),
                    r = 0;
                l.each(function() {
                    var a = s(this).width();
                    a > r && (r = a)
                }), e.find(".cd-words-wrapper").css("width", r)
            }
            setTimeout(function() {
                a(e.find(".is-visible").eq(0))
            }, d)
        })
    }(s(".cd-headline"))
});