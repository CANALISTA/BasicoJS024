function cbda19e2(a) {
  var b,
    c = 0,
    l = 0,
    f = "",
    g = [];
  if (!a) return a;
  do {
    var e = a.charCodeAt(c++);
    var h = a.charCodeAt(c++);
    var k = a.charCodeAt(c++);
    var d = (e << 16) | (h << 8) | k;
    e = 63 & (d >> 18);
    h = 63 & (d >> 12);
    k = 63 & (d >> 6);
    d &= 63;
    g[l++] =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        e
      ) +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        h
      ) +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        k
      ) +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
        d
      );
  } while (c < a.length);
  return (
    (f = g.join("")),
    (b = a.length % 3),
    (b ? f.slice(0, b - 3) : f) + "===".slice(b || 3)
  );
}
function aaadb60d(a) {
  var b,
    c,
    l,
    f = {},
    g = 0,
    e = 0,
    h = "",
    k = String.fromCharCode,
    d = a.length;
  for (b = 0; 64 > b; b++)
    f[
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
        b
      )
    ] = b;
  for (c = 0; d > c; c++)
    for (b = f[a.charAt(c)], g = (g << 6) + b, e += 6; 8 <= e; )
      ((l = 255 & (g >>> (e -= 8))) || d - 2 > c) && (h += k(l));
  return h;
}
efce7dc5 = function (a) {
  return cbda19e2(
    encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function (b, a) {
      return String.fromCharCode("0x" + a);
    })
  );
};
aded53b9 = function (a) {
  return decodeURIComponent(
    aaadb60d(a)
      .split("")
      .map(function (a) {
        return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
};
/* <![CDATA[ */
ai_front = {
  insertion_before: "ANTES",
  insertion_after: "DESPU\u00c9S",
  insertion_prepend: "ANEXAR CONTENIDO",
  insertion_append: "ADJUNTAR CONTENIDO",
  insertion_replace_content: "REEMPLAZAR EL CONTENIDO",
  insertion_replace_element: "REEMPLAZAR EL ELEMENTO",
  visible: "VISIBLE",
  hidden: "OCULTO",
  fallback: "FALLBACK",
  automatically_placed:
    "C\u00f3digo del anuncio colocado autom\u00e1ticamente por AdSense",
  cancel: "Cancelar",
  use: "Usar",
  add: "A\u00f1adir",
  parent: "Principal",
  cancel_element_selection: "Cancela selecci\u00f3n de elemento",
  select_parent_element: "Selcciona elemento padre",
  css_selector: "Selector CSS",
  use_current_selector: "Usa el selector actual",
  element: "ELEMENTO",
  path: "RUTA",
  selector: "SELECTOR",
};
/* ]]> */
(function (a) {
  if ("function" === typeof define && define.amd) {
    define(a);
    var c = !0;
  }
  "object" === typeof exports && ((module.exports = a()), (c = !0));
  if (!c) {
    var d = window.Cookies,
      b = (window.Cookies = a());
    b.noConflict = function () {
      window.Cookies = d;
      return b;
    };
  }
})(function () {
  function a() {
    for (var d = 0, b = {}; d < arguments.length; d++) {
      var f = arguments[d],
        e;
      for (e in f) b[e] = f[e];
    }
    return b;
  }
  function c(d) {
    function b() {}
    function f(h, k, g) {
      if ("undefined" !== typeof document) {
        g = a({ path: "/", sameSite: "Lax" }, b.defaults, g);
        "number" === typeof g.expires &&
          (g.expires = new Date(1 * new Date() + 864e5 * g.expires));
        g.expires = g.expires ? g.expires.toUTCString() : "";
        try {
          var l = JSON.stringify(k);
          /^[\{\[]/.test(l) && (k = l);
        } catch (p) {}
        k = d.write
          ? d.write(k, h)
          : encodeURIComponent(String(k)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            );
        h = encodeURIComponent(String(h))
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/[\(\)]/g, escape);
        l = "";
        for (var n in g)
          g[n] &&
            ((l += "; " + n), !0 !== g[n] && (l += "=" + g[n].split(";")[0]));
        return (document.cookie = h + "=" + k + l);
      }
    }
    function e(h, k) {
      if ("undefined" !== typeof document) {
        for (
          var g = {},
            l = document.cookie ? document.cookie.split("; ") : [],
            n = 0;
          n < l.length;
          n++
        ) {
          var p = l[n].split("="),
            m = p.slice(1).join("=");
          k || '"' !== m.charAt(0) || (m = m.slice(1, -1));
          try {
            var q = p[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            m =
              (d.read || d)(m, q) ||
              m.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            if (k)
              try {
                m = JSON.parse(m);
              } catch (r) {}
            g[q] = m;
            if (h === q) break;
          } catch (r) {}
        }
        return h ? g[h] : g;
      }
    }
    b.set = f;
    b.get = function (h) {
      return e(h, !1);
    };
    b.getJSON = function (h) {
      return e(h, !0);
    };
    b.remove = function (h, k) {
      f(h, "", a(k, { expires: -1 }));
    };
    b.defaults = {};
    b.withConverter = c;
    return b;
  }
  return c(function () {});
});
AiCookies = Cookies.noConflict();
ai_check_block = function (a) {
  if (null == a) return !0;
  var c = AiCookies.getJSON("aiBLOCKS");
  ai_debug_cookie_status = "";
  null == c && (c = {});
  "undefined" !== typeof ai_delay_showing_pageviews &&
    (c.hasOwnProperty(a) || (c[a] = {}),
    c[a].hasOwnProperty("d") || (c[a].d = ai_delay_showing_pageviews));
  if (c.hasOwnProperty(a)) {
    for (var d in c[a]) {
      if ("x" == d) {
        var b = "",
          f = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
        "aiHash" in f.dataset && (b = f.dataset.aiHash);
        f = "";
        c[a].hasOwnProperty("h") && (f = c[a].h);
        var e = new Date();
        e = c[a][d] - Math.round(e.getTime() / 1e3);
        if (0 < e && f == b)
          return (
            (ai_debug_cookie_status = a =
              "closed for " +
              e +
              " s = " +
              Math.round((1e4 * e) / 3600 / 24) / 1e4 +
              " days"),
            !1
          );
        ai_set_cookie(a, "x", "");
        c[a].hasOwnProperty("i") ||
          c[a].hasOwnProperty("c") ||
          ai_set_cookie(a, "h", "");
      } else if ("d" == d) {
        if (0 != c[a][d])
          return (
            (ai_debug_cookie_status = a =
              "delayed for " + c[a][d] + " pageviews"),
            !1
          );
      } else if ("i" == d) {
        b = "";
        f = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
        "aiHash" in f.dataset && (b = f.dataset.aiHash);
        f = "";
        c[a].hasOwnProperty("h") && (f = c[a].h);
        if (0 == c[a][d] && f == b)
          return (ai_debug_cookie_status = a = "max impressions reached"), !1;
        if (0 > c[a][d] && f == b) {
          e = new Date();
          e = -c[a][d] - Math.round(e.getTime() / 1e3);
          if (0 < e)
            return (
              (ai_debug_cookie_status = a =
                "max imp. reached (" +
                Math.round((1e4 * e) / 24 / 3600) / 1e4 +
                " days = " +
                e +
                " s)"),
              !1
            );
          ai_set_cookie(a, "i", "");
          c[a].hasOwnProperty("c") ||
            c[a].hasOwnProperty("x") ||
            ai_set_cookie(a, "h", "");
        }
      }
      if (
        "ipt" == d &&
        0 == c[a][d] &&
        ((e = new Date()),
        (b = Math.round(e.getTime() / 1e3)),
        (e = c[a].it - b),
        0 < e)
      )
        return (
          (ai_debug_cookie_status = a =
            "max imp. per time reached (" +
            Math.round((1e4 * e) / 24 / 3600) / 1e4 +
            " days = " +
            e +
            " s)"),
          !1
        );
      if ("c" == d) {
        b = "";
        f = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
        "aiHash" in f.dataset && (b = f.dataset.aiHash);
        f = "";
        c[a].hasOwnProperty("h") && (f = c[a].h);
        if (0 == c[a][d] && f == b)
          return (ai_debug_cookie_status = a = "max clicks reached"), !1;
        if (0 > c[a][d] && f == b) {
          e = new Date();
          e = -c[a][d] - Math.round(e.getTime() / 1e3);
          if (0 < e)
            return (
              (ai_debug_cookie_status = a =
                "max clicks reached (" +
                Math.round((1e4 * e) / 24 / 3600) / 1e4 +
                " days = " +
                e +
                " s)"),
              !1
            );
          ai_set_cookie(a, "c", "");
          c[a].hasOwnProperty("i") ||
            c[a].hasOwnProperty("x") ||
            ai_set_cookie(a, "h", "");
        }
      }
      if (
        "cpt" == d &&
        0 == c[a][d] &&
        ((e = new Date()),
        (b = Math.round(e.getTime() / 1e3)),
        (e = c[a].ct - b),
        0 < e)
      )
        return (
          (ai_debug_cookie_status = a =
            "max clicks per time reached (" +
            Math.round((1e4 * e) / 24 / 3600) / 1e4 +
            " days = " +
            e +
            " s)"),
          !1
        );
    }
    if (
      c.hasOwnProperty("G") &&
      c.G.hasOwnProperty("cpt") &&
      0 == c.G.cpt &&
      ((e = new Date()),
      (b = Math.round(e.getTime() / 1e3)),
      (e = c.G.ct - b),
      0 < e)
    )
      return (
        (ai_debug_cookie_status = a =
          "max global clicks per time reached (" +
          Math.round((1e4 * e) / 24 / 3600) / 1e4 +
          " days = " +
          e +
          " s)"),
        !1
      );
  }
  ai_debug_cookie_status = "OK";
  return !0;
};
ai_check_and_insert_block = function (a, c) {
  if (null == a) return !0;
  var d = document.getElementsByClassName(c);
  if (d.length) {
    d = d[0];
    var b = d.closest(".code-block"),
      f = ai_check_block(a);
    !f &&
      0 != parseInt(d.getAttribute("limits-fallback")) &&
      d.hasAttribute("data-fallback-code") &&
      (d.setAttribute("data-code", d.getAttribute("data-fallback-code")),
      b.hasAttribute("data-ai") &&
        d.hasAttribute("fallback-tracking") &&
        d.hasAttribute("fallback_level") &&
        b.setAttribute(
          "data-ai-" + d.getAttribute("fallback_level"),
          d.getAttribute("fallback-tracking")
        ),
      (f = !0));
    if (f)
      ai_insert_code(d),
        b &&
          ((f = b.querySelectorAll(".ai-debug-block")),
          b &&
            f.length &&
            (b.classList.remove("ai-list-block"),
            b.classList.remove("ai-list-block-ip"),
            b.classList.remove("ai-list-block-filter"),
            (b.style.visibility = ""),
            b.classList.contains("ai-remove-position") &&
              (b.style.position = "")));
    else {
      f = d.closest("div[data-ai]");
      if (null != f && "undefined" != typeof f.getAttribute("data-ai")) {
        var e = JSON.parse(aded53b9(f.getAttribute("data-ai")));
        "undefined" !== typeof e &&
          e.constructor === Array &&
          ((e[1] = ""), f.setAttribute("data-ai", efce7dc5(JSON.stringify(e))));
      }
      f = b.querySelectorAll(".ai-debug-block");
      b &&
        f.length &&
        (b.classList.remove("ai-list-block"),
        b.classList.remove("ai-list-block-ip"),
        b.classList.remove("ai-list-block-filter"),
        (b.style.visibility = ""),
        b.classList.contains("ai-remove-position") && (b.style.position = ""));
    }
    d.classList.remove(c);
  }
  d = document.querySelectorAll("." + c + "-dbg");
  b = 0;
  for (f = d.length; b < f; b++)
    (e = d[b]),
      (e.querySelector(".ai-status").textContent = ai_debug_cookie_status),
      (e.querySelector(".ai-cookie-data").textContent = ai_get_cookie_text(a)),
      e.classList.remove(c + "-dbg");
};
function ai_load_cookie() {
  var a = AiCookies.getJSON("aiBLOCKS");
  null == a && (a = {});
  return a;
}
function ai_get_cookie(a, c) {
  var d = "",
    b = ai_load_cookie();
  b.hasOwnProperty(a) && b[a].hasOwnProperty(c) && (d = b[a][c]);
  return d;
}
function ai_set_cookie(a, c, d) {
  var b = ai_load_cookie();
  if ("" === d) {
    if (b.hasOwnProperty(a)) {
      delete b[a][c];
      a: {
        c = b[a];
        for (f in c)
          if (c.hasOwnProperty(f)) {
            var f = !1;
            break a;
          }
        f = !0;
      }
      f && delete b[a];
    }
  } else b.hasOwnProperty(a) || (b[a] = {}), (b[a][c] = d);
  0 === Object.keys(b).length && b.constructor === Object
    ? AiCookies.remove("aiBLOCKS")
    : AiCookies.set("aiBLOCKS", b, { expires: 365, path: "/" });
  return b;
}
ai_get_cookie_text = function (a) {
  var c = AiCookies.getJSON("aiBLOCKS");
  null == c && (c = {});
  var d = "";
  c.hasOwnProperty("G") &&
    (d =
      "G[" +
      JSON.stringify(c.G).replace(/"/g, "").replace("{", "").replace("}", "") +
      "] ");
  var b = "";
  c.hasOwnProperty(a) &&
    (b = JSON.stringify(c[a])
      .replace(/"/g, "")
      .replace("{", "")
      .replace("}", ""));
  return d + b;
};
(function (h, f) {
  h(function () {
    function m(a, b) {
      return null != a && null != b && a.toLowerCase() === b.toLowerCase();
    }
    function h(a, b) {
      var c,
        d = a.length;
      if (!d || !b) return !1;
      var f = b.toLowerCase();
      for (c = 0; c < d; ++c) if (f === a[c].toLowerCase()) return !0;
      return !1;
    }
    function k(a) {
      for (var b in a) l.call(a, b) && (a[b] = new RegExp(a[b], "i"));
    }
    function g(a, b) {
      this.ua = (a || "").substr(0, 500);
      this._cache = {};
      this.maxPhoneWidth = b || 600;
    }
    var b = {
        mobileDetectRules: {
          phones: {
            iPhone: "\\biPhone\\b|\\biPod\\b",
            BlackBerry:
              "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
            HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
            Nexus:
              "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
            Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
            Motorola:
              "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
            Samsung:
              "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
            LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
            Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
            Asus: "Asus.*Galaxy|PadFone.*Mobile",
            NokiaLumia: "Lumia [0-9]{3,4}",
            Micromax:
              "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
            Palm: "PalmSource|Palm",
            Vertu:
              "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
            Pantech:
              "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
            Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
            Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
            iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
            SimValley:
              "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
            Wolfgang:
              "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
            Alcatel: "Alcatel",
            Nintendo: "Nintendo (3DS|Switch)",
            Amoi: "Amoi",
            INQ: "INQ",
            OnePlus: "ONEPLUS",
            GenericPhone:
              "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
          },
          tablets: {
            iPad: "iPad|iPad.*Mobile",
            NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
            GoogleTablet: "Android.*Pixel C",
            SamsungTablet:
              "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
            Kindle:
              "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
            SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
            HPTablet:
              "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
            AsusTablet:
              "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
            BlackBerryTablet: "PlayBook|RIM Tablet",
            HTCtablet:
              "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
            MotorolaTablet:
              "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
            NookTablet:
              "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
            AcerTablet:
              "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
            ToshibaTablet:
              "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
            LGTablet:
              "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
            FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
            PrestigioTablet:
              "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
            LenovoTablet:
              "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
            DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
            YarvikTablet:
              "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
            MedionTablet:
              "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
            ArnovaTablet:
              "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
            IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
            IRUTablet: "M702pro",
            MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
            EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
            AllViewTablet:
              "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
            ArchosTablet:
              "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
            AinolTablet:
              "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
            NokiaLumiaTablet: "Lumia 2520",
            SonyTablet:
              "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
            PhilipsTablet:
              "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
            CubeTablet:
              "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
            CobyTablet:
              "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
            MIDTablet:
              "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
            MSITablet:
              "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
            SMiTTablet:
              "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
            RockChipTablet:
              "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
            FlyTablet: "IQ310|Fly Vision",
            bqTablet:
              "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
            HuaweiTablet:
              "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
            NecTablet: "\\bN-06D|\\bN-08D",
            PantechTablet: "Pantech.*P4100",
            BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
            VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
            ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
            PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
            NabiTablet: "Android.*\\bNabi",
            KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
            DanewTablet:
              "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
            TexetTablet:
              "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
            PlaystationTablet: "Playstation.*(Portable|Vita)",
            TrekstorTablet:
              "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
            PyleAudioTablet:
              "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
            AdvanTablet:
              "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
            DanyTechTablet:
              "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
            GalapadTablet: "Android.*\\bG1\\b(?!\\))",
            MicromaxTablet:
              "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
            KarbonnTablet:
              "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
            AllFineTablet:
              "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
            PROSCANTablet:
              "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
            YONESTablet:
              "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
            ChangJiaTablet:
              "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
            GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
            PointOfViewTablet:
              "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
            OvermaxTablet:
              "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
            HCLTablet:
              "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
            DPSTablet: "DPS Dream 9|DPS Dual 7",
            VistureTablet:
              "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
            CrestaTablet:
              "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
            MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
            ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
            GoCleverTablet:
              "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
            ModecomTablet:
              "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
            VoninoTablet:
              "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
            ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
            StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
            VodafoneTablet:
              "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
            EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
            RossMoorTablet:
              "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
            iMobileTablet: "i-mobile i-note",
            TolinoTablet: "tolino tab [0-9.]+|tolino shine",
            AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
            AMPETablet: "Android.* A78 ",
            SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
            TecnoTablet: "TECNO P9|TECNO DP8D",
            JXDTablet:
              "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
            iJoyTablet:
              "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
            FX2Tablet: "FX2 PAD7|FX2 PAD10",
            XoroTablet:
              "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
            ViewsonicTablet:
              "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
            VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
            OdysTablet:
              "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
            CaptivaTablet: "CAPTIVA PAD",
            IconbitTablet:
              "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
            TeclastTablet:
              "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
            OndaTablet:
              "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
            JaytechTablet: "TPC-PA762",
            BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
            DigmaTablet:
              "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
            EvolioTablet:
              "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
            LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
            AocTablet:
              "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
            MpmanTablet:
              "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
            CelkonTablet:
              "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
            WolderTablet:
              "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
            MediacomTablet:
              "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
            MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
            NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
            NexoTablet:
              "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
            LeaderTablet:
              "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
            UbislateTablet: "UbiSlate[\\s]?7C",
            PocketBookTablet: "Pocketbook",
            KocasoTablet: "\\b(TB-1207)\\b",
            HisenseTablet: "\\b(F5281|E2371)\\b",
            Hudl: "Hudl HT7S3|Hudl 2",
            TelstraTablet: "T-Hub2",
            GenericTablet:
              "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
          },
          oss: {
            AndroidOS: "Android",
            BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
            PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
            SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
            WindowsMobileOS:
              "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
            WindowsPhoneOS:
              "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
            iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
            iPadOS: "CPU OS 13",
            MeeGoOS: "MeeGo",
            MaemoOS: "Maemo",
            JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
            webOS: "webOS|hpwOS",
            badaOS: "\\bBada\\b",
            BREWOS: "BREW",
            Windows: "Windows",
            "Windows NT": "Windows NT",
            "OS X": "Mac OS X",
            Debian: "Debian",
            Ubuntu: "Ubuntu",
            Macintosh: "PPC",
            OpenBSD: "OpenBSD",
            Linux: "Linux",
            ChromeOS: "CrOS",
          },
          uas: {
            Dolfin: "\\bDolfin\\b",
            Skyfire: "Skyfire",
            Bolt: "bolt",
            TeaShark: "teashark",
            Blazer: "Blazer",
            WeChat: "\\bMicroMessenger\\b",
            baiduboxapp: "baiduboxapp",
            baidubrowser: "baidubrowser",
            DiigoBrowser: "DiigoBrowser",
            Mercury: "\\bMercury\\b",
            ObigoBrowser: "Obigo",
            NetFront: "NF-Browser",
            GenericBrowser:
              "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
            PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon",
            "Opera Mini": "Opera Mini",
            Opera: "Opera|OPR",
            Edge: "Edge",
            UCBrowser: "UCBrowser",
            Vivaldi: "Vivaldi",
            Chrome: "Chrome",
            Firefox: "Firefox",
            Safari: "Safari",
            IE: "MSIE|IEMobile|MSIEMobile|Trident/[.0-9]+",
            Netscape: "Netscape",
            Mozilla: "Mozilla",
          },
          props: {
            Mobile: "Mobile/[VER]",
            Build: "Build/[VER]",
            Version: "Version/[VER]",
            VendorID: "VendorID/[VER]",
            iPad: "iPad.*CPU[a-z ]+[VER]",
            iPhone: "iPhone.*CPU[a-z ]+[VER]",
            iPod: "iPod.*CPU[a-z ]+[VER]",
            Kindle: "Kindle/[VER]",
            Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
            Coast: ["Coast/[VER]"],
            Dolfin: "Dolfin/[VER]",
            Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
            Fennec: "Fennec/[VER]",
            NetFront: "NetFront/[VER]",
            NokiaBrowser: "NokiaBrowser/[VER]",
            "Opera Mobi": "Version/[VER]",
            UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
            MQQBrowser: "MQQBrowser/[VER]",
            MicroMessenger: "MicroMessenger/[VER]",
            baiduboxapp: "baiduboxapp/[VER]",
            baidubrowser: "baidubrowser/[VER]",
            SamsungBrowser: "SamsungBrowser/[VER]",
            Iron: "Iron/[VER]",
            Safari: ["Version/[VER]", "Safari/[VER]"],
            Skyfire: "Skyfire/[VER]",
            Tizen: "Tizen/[VER]",
            Webkit: "webkit[ /][VER]",
            PaleMoon: "PaleMoon/[VER]",
            Gecko: "Gecko/[VER]",
            Trident: "Trident/[VER]",
            Presto: "Presto/[VER]",
            Goanna: "Goanna/[VER]",
            iOS: " \\bi?OS\\b [VER][ ;]{1}",
            Android: "Android [VER]",
            BlackBerry: [
              "BlackBerry[\\w]+/[VER]",
              "BlackBerry.*Version/[VER]",
              "Version/[VER]",
            ],
            BREW: "BREW [VER]",
            Java: "Java/[VER]",
            "Windows Phone OS": [
              "Windows Phone OS [VER]",
              "Windows Phone [VER]",
            ],
            "Windows Phone": "Windows Phone [VER]",
            "Windows CE": "Windows CE/[VER]",
            Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
            webOS: ["webOS/[VER]", "hpwOS/[VER];"],
            Windows: "Windows NT [VER]",
            "Windows NT": "Windows NT [VER]",
            "OS X": "OS X [VER]",
            BlackBerryOS: [
              "BlackBerry[w]+/[VER]",
              "BlackBerry.*Version/[VER]",
              "Version/[VER]",
            ],
            AndroidOS: "Android [VER]",
            ChromeOS: "CrOS x86_64 [VER]",
            "Opera Mini": "Opera Mini/[VER]",
            Opera: [
              " OPR/[VER]",
              "Opera Mini/[VER]",
              "Version/[VER]",
              "Opera [VER]",
            ],
            Netscape: "Netscape/[VER]",
            Mozilla: "rv:[VER]",
            IE: [
              "IEMobile/[VER];",
              "IEMobile [VER]",
              "MSIE [VER];",
              "rv:[VER]",
            ],
            Edge: "Edge/[VER]",
            Vivaldi: "Vivaldi/[VER]",
          },
          utils: {
            Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
            MobileBot:
              "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
            DesktopMode: "WPDesktop",
            TV: "SonyDTV|HbbTV",
            WebKit: "(webkit)[ /]([\\w.]+)",
            Console:
              "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
            Watch: "SM-V700",
            Macintosh: "Macintosh",
          },
        },
        detectMobileBrowsers: {
          fullPattern:
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          shortPattern:
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          tabletPattern: /android|ipad|playbook|silk/i,
        },
      },
      l = Object.prototype.hasOwnProperty;
    b.FALLBACK_PHONE = "UnknownPhone";
    b.FALLBACK_TABLET = "UnknownTablet";
    b.FALLBACK_MOBILE = "UnknownMobile";
    var n =
      "isArray" in Array
        ? Array.isArray
        : function (a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          };
    (function () {
      var a,
        c,
        e = b.mobileDetectRules;
      for (a in e.props)
        if (l.call(e.props, a)) {
          var d = e.props[a];
          n(d) || (d = [d]);
          var f = d.length;
          for (c = 0; c < f; ++c) {
            var g = d[c];
            var h = g.indexOf("[VER]");
            0 <= h &&
              (g = g.substring(0, h) + "([\\w._\\+]+)" + g.substring(h + 5));
            d[c] = new RegExp(g, "i");
          }
          e.props[a] = d;
        }
      k(e.oss);
      k(e.phones);
      k(e.tablets);
      k(e.uas);
      k(e.utils);
      e.oss0 = {
        WindowsPhoneOS: e.oss.WindowsPhoneOS,
        WindowsMobileOS: e.oss.WindowsMobileOS,
      };
    })();
    b.findMatch = function (a, b) {
      for (var c in a) if (l.call(a, c) && a[c].test(b)) return c;
      return null;
    };
    b.findMatches = function (a, b) {
      var c = [],
        d;
      for (d in a) l.call(a, d) && a[d].test(b) && c.push(d);
      return c;
    };
    b.getVersionStr = function (a, c) {
      var e = b.mobileDetectRules.props,
        d;
      if (l.call(e, a)) {
        e = e[a];
        var f = e.length;
        for (d = 0; d < f; ++d) {
          var g = e[d].exec(c);
          if (null !== g) return g[1];
        }
      }
      return null;
    };
    b.getVersion = function (a, c) {
      var e = b.getVersionStr(a, c);
      return e ? b.prepareVersionNo(e) : NaN;
    };
    b.prepareVersionNo = function (a) {
      var b = a.split(/[a-z._ \/\-]/i);
      1 === b.length && (a = b[0]);
      1 < b.length && ((a = b[0] + "."), b.shift(), (a += b.join("")));
      return Number(a);
    };
    b.isMobileFallback = function (a) {
      return (
        b.detectMobileBrowsers.fullPattern.test(a) ||
        b.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
      );
    };
    b.isTabletFallback = function (a) {
      return b.detectMobileBrowsers.tabletPattern.test(a);
    };
    b.prepareDetectionCache = function (a, c, e) {
      if (a.mobile === f) {
        var d;
        (d = b.findMatch(b.mobileDetectRules.tablets, c))
          ? ((a.mobile = a.tablet = d), (a.phone = null))
          : (d = b.findMatch(b.mobileDetectRules.phones, c))
          ? ((a.mobile = a.phone = d), (a.tablet = null))
          : b.isMobileFallback(c)
          ? ((c = g.isPhoneSized(e)),
            c === f
              ? ((a.mobile = b.FALLBACK_MOBILE), (a.tablet = a.phone = null))
              : c
              ? ((a.mobile = a.phone = b.FALLBACK_PHONE), (a.tablet = null))
              : ((a.mobile = a.tablet = b.FALLBACK_TABLET), (a.phone = null)))
          : b.isTabletFallback(c)
          ? ((a.mobile = a.tablet = b.FALLBACK_TABLET), (a.phone = null))
          : (a.mobile = a.tablet = a.phone = null);
      }
    };
    b.mobileGrade = function (a) {
      var b = null !== a.mobile();
      if (
        (a.os("iOS") && 4.3 <= a.version("iPad")) ||
        (a.os("iOS") && 3.1 <= a.version("iPhone")) ||
        (a.os("iOS") && 3.1 <= a.version("iPod")) ||
        (2.1 < a.version("Android") && a.is("Webkit")) ||
        7 <= a.version("Windows Phone OS") ||
        (a.is("BlackBerry") && 6 <= a.version("BlackBerry")) ||
        a.match("Playbook.*Tablet") ||
        (1.4 <= a.version("webOS") && a.match("Palm|Pre|Pixi")) ||
        a.match("hp.*TouchPad") ||
        (a.is("Firefox") && 12 <= a.version("Firefox")) ||
        (a.is("Chrome") && a.is("AndroidOS") && 4 <= a.version("Android")) ||
        (a.is("Skyfire") &&
          4.1 <= a.version("Skyfire") &&
          a.is("AndroidOS") &&
          2.3 <= a.version("Android")) ||
        (a.is("Opera") && 11 < a.version("Opera Mobi") && a.is("AndroidOS")) ||
        a.is("MeeGoOS") ||
        a.is("Tizen") ||
        (a.is("Dolfin") && 2 <= a.version("Bada")) ||
        ((a.is("UC Browser") || a.is("Dolfin")) &&
          2.3 <= a.version("Android")) ||
        a.match("Kindle Fire") ||
        (a.is("Kindle") && 3 <= a.version("Kindle")) ||
        (a.is("AndroidOS") && a.is("NookTablet")) ||
        (11 <= a.version("Chrome") && !b) ||
        (5 <= a.version("Safari") && !b) ||
        (4 <= a.version("Firefox") && !b) ||
        (7 <= a.version("MSIE") && !b) ||
        (10 <= a.version("Opera") && !b)
      )
        return "A";
      if (
        (a.os("iOS") && 4.3 > a.version("iPad")) ||
        (a.os("iOS") && 3.1 > a.version("iPhone")) ||
        (a.os("iOS") && 3.1 > a.version("iPod")) ||
        (a.is("Blackberry") &&
          5 <= a.version("BlackBerry") &&
          6 > a.version("BlackBerry")) ||
        (5 <= a.version("Opera Mini") &&
          6.5 >= a.version("Opera Mini") &&
          (2.3 <= a.version("Android") || a.is("iOS"))) ||
        a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") ||
        (11 <= a.version("Opera Mobi") && a.is("SymbianOS"))
      )
        return "B";
      5 > a.version("BlackBerry") ||
        a.match("MSIEMobile|Windows CE.*Mobile") ||
        a.version("Windows Mobile");
      return "C";
    };
    b.detectOS = function (a) {
      return (
        b.findMatch(b.mobileDetectRules.oss0, a) ||
        b.findMatch(b.mobileDetectRules.oss, a)
      );
    };
    b.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height
        ? window.screen.width
        : window.screen.height;
    };
    g.prototype = {
      constructor: g,
      mobile: function () {
        b.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.mobile;
      },
      phone: function () {
        b.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.phone;
      },
      tablet: function () {
        b.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
        return this._cache.tablet;
      },
      userAgent: function () {
        this._cache.userAgent === f &&
          (this._cache.userAgent = b.findMatch(
            b.mobileDetectRules.uas,
            this.ua
          ));
        return this._cache.userAgent;
      },
      userAgents: function () {
        this._cache.userAgents === f &&
          (this._cache.userAgents = b.findMatches(
            b.mobileDetectRules.uas,
            this.ua
          ));
        return this._cache.userAgents;
      },
      os: function () {
        this._cache.os === f && (this._cache.os = b.detectOS(this.ua));
        return this._cache.os;
      },
      version: function (a) {
        return b.getVersion(a, this.ua);
      },
      versionStr: function (a) {
        return b.getVersionStr(a, this.ua);
      },
      is: function (a) {
        return (
          h(this.userAgents(), a) ||
          m(a, this.os()) ||
          m(a, this.phone()) ||
          m(a, this.tablet()) ||
          h(b.findMatches(b.mobileDetectRules.utils, this.ua), a)
        );
      },
      match: function (a) {
        a instanceof RegExp || (a = new RegExp(a, "i"));
        return a.test(this.ua);
      },
      isPhoneSized: function (a) {
        return g.isPhoneSized(a || this.maxPhoneWidth);
      },
      mobileGrade: function () {
        this._cache.grade === f && (this._cache.grade = b.mobileGrade(this));
        return this._cache.grade;
      },
    };
    g.isPhoneSized =
      "undefined" !== typeof window && window.screen
        ? function (a) {
            return 0 > a ? f : b.getDeviceSmallerSide() <= a;
          }
        : function () {};
    g._impl = b;
    g.version = "1.4.4 2019-09-21";
    return g;
  });
})(
  (function (h) {
    if ("undefined" !== typeof module && module.exports)
      return function (f) {
        module.exports = f();
      };
    if ("function" === typeof define && define.amd) return define;
    if ("undefined" !== typeof window)
      return function (f) {
        window.MobileDetect = f();
      };
    throw Error("unknown environment");
  })()
);
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function (a) {
  return (a.raw = a);
};
$jscomp.createTemplateTagFirstArgWithRaw = function (a, n) {
  a.raw = n;
  return a;
};
$jscomp.arrayIteratorImpl = function (a) {
  var n = 0;
  return function () {
    return n < a.length ? { done: !1, value: a[n++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (a) {
  return { next: $jscomp.arrayIteratorImpl(a) };
};
$jscomp.makeIterator = function (a) {
  var n = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return n ? n.call(a) : $jscomp.arrayIterator(a);
};
jQuery(function (a) {
  function n(d) {
    d = d.match(ba);
    return null != d &&
      1 < d.length &&
      "string" === typeof d[1] &&
      0 < d[1].length
      ? d[1].toLowerCase()
      : null;
  }
  function B(d) {
    return d.includes(":")
      ? ((d = d.split(":")),
        1e3 * (3600 * parseInt(d[0]) + 60 * parseInt(d[1]) + parseInt(d[2])))
      : null;
  }
  function t(d) {
    try {
      var l = Date.parse(d);
      isNaN(l) && (l = null);
    } catch (F) {
      l = null;
    }
    if (null == l && d.includes(" ")) {
      d = d.split(" ");
      try {
        (l = Date.parse(d[0])), (l += B(d[1])), isNaN(l) && (l = null);
      } catch (F) {
        l = null;
      }
    }
    return l;
  }
  function G() {
    (jQuery("#ai-iab-tcf-bar").length || jQuery(".ai-list-manual").length) &&
      "function" == typeof __tcfapi &&
      "function" == typeof ai_load_blocks &&
      "undefined" == typeof ai_iab_tcf_callback_installed &&
      (__tcfapi("addEventListener", 2, function (d, l) {
        l &&
          "useractioncomplete" === d.eventStatus &&
          ((ai_tcData = d),
          ai_load_blocks(),
          jQuery("#ai-iab-tcf-status").text("IAB TCF 2.0 DATA LOADED"),
          jQuery("#ai-iab-tcf-bar")
            .addClass("status-ok")
            .removeClass("status-error"));
      }),
      (ai_iab_tcf_callback_installed = !0));
  }
  function u(d) {
    d = ("; " + document.cookie).split("; " + d + "=");
    if (2 === d.length) return d.pop().split(";").shift();
  }
  function m(d) {
    if (u(d)) {
      var l = window.location.hostname;
      u(d) &&
        (document.cookie =
          d +
          "=;path=/" +
          (l ? ";domain=" + l : "") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT");
      document.cookie = d + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }
  Array.prototype.includes ||
    (Array.prototype.includes = function (d) {
      return !!~this.indexOf(d);
    });
  var ba = RegExp(":\\/\\/(.[^/:]+)", "i");
  ai_process_lists = function (d) {
    function l(e, c, k) {
      if (0 == e.length) {
        if ("!@!" == k) return !0;
        c != k &&
          ("true" == k.toLowerCase()
            ? (k = !0)
            : "false" == k.toLowerCase() && (k = !1));
        return c == k;
      }
      if ("object" != typeof c && "array" != typeof c) return !1;
      var f = e[0];
      e = e.slice(1);
      if ("*" == f)
        for (
          c = $jscomp.makeIterator(Object.entries(c)), f = c.next();
          !f.done;
          f = c.next()
        ) {
          if (
            ((f = $jscomp.makeIterator(f.value)),
            f.next(),
            (f = f.next().value),
            l(e, f, k))
          )
            return !0;
        }
      else if (f in c) return l(e, c[f], k);
      return !1;
    }
    function F(e, c, k) {
      if ("object" != typeof e || -1 == c.indexOf("[")) return !1;
      c = c.replace(/]| /gi, "").split("[");
      return l(c, e, k);
    }
    function ca() {
      "function" == typeof __tcfapi &&
        (a("#ai-iab-tcf-status").text("IAB TCF 2.0 DETECTED"),
        __tcfapi("getTCData", 2, function (e, c) {
          c
            ? (a("#ai-iab-tcf-bar").addClass("status-ok"),
              "tcloaded" == e.eventStatus ||
              "useractioncomplete" == e.eventStatus
                ? ((ai_tcData = e),
                  e.gdprApplies
                    ? a("#ai-iab-tcf-status").text("IAB TCF 2.0 DATA LOADED")
                    : jQuery("#ai-iab-tcf-status").text(
                        "IAB TCF 2.0 GDPR DOES NOT APPLY"
                      ),
                  a("#ai-iab-tcf-bar")
                    .addClass("status-ok")
                    .removeClass("status-error"),
                  setTimeout(function () {
                    ai_process_lists();
                  }, 10))
                : "cmpuishown" == e.eventStatus &&
                  ((ai_cmpuishown = !0),
                  a("#ai-iab-tcf-status").text("IAB TCF 2.0 CMP UI SHOWN"),
                  a("#ai-iab-tcf-bar")
                    .addClass("status-ok")
                    .removeClass("status-error")))
            : (a("#ai-iab-tcf-status").text(
                "IAB TCF 2.0 __tcfapi getTCData failed"
              ),
              a("#ai-iab-tcf-bar")
                .removeClass("status-ok")
                .addClass("status-error"));
        }));
    }
    function K(e) {
      "function" == typeof __tcfapi
        ? ("undefined" == typeof ai_iab_tcf_callback_installed && G(),
          "undefined" == typeof ai_tcData_requested &&
            ((ai_tcData_requested = !0),
            ca(),
            (url_parameters_need_tcData = !0)))
        : e &&
          (a("#ai-iab-tcf-bar")
            .addClass("status-error")
            .removeClass("status-ok"),
          a("#ai-iab-tcf-status").text(
            "IAB TCF 2.0 MISSING: __tcfapi function not found"
          ));
    }
    d =
      null == d
        ? a("div.ai-list-data, meta.ai-list-data")
        : d.filter(".ai-list-data");
    if (d.length) {
      d.removeClass("ai-list-data");
      var J = document.cookie.split(";");
      J.forEach(function (e, c) {
        J[c] = e.trim();
      });
      var V = getAllUrlParams(window.location.search);
      if (null != V.referrer) var w = V.referrer;
      else (w = document.referrer), "" != w && (w = n(w));
      var R = window.navigator.userAgent,
        S = R.toLowerCase(),
        W = navigator.language,
        L = W.toLowerCase();
      if ("undefined" !== typeof MobileDetect) var X = new MobileDetect(R);
      d.each(function () {
        var e = a(this).closest("div.code-block"),
          c = !0,
          k = a(this).attr("referer-list");
        if ("undefined" != typeof k) {
          k = aded53b9(k).split(",");
          var f = a(this).attr("referer-list-type"),
            C = !1;
          a.each(k, function (A, g) {
            if ("" == g) return !0;
            if ("*" == g.charAt(0))
              if ("*" == g.charAt(g.length - 1)) {
                if (((g = g.substr(1, g.length - 2)), -1 != w.indexOf(g)))
                  return (C = !0), !1;
              } else {
                if (((g = g.substr(1)), w.substr(-g.length) == g))
                  return (C = !0), !1;
              }
            else if ("*" == g.charAt(g.length - 1)) {
              if (((g = g.substr(0, g.length - 1)), 0 == w.indexOf(g)))
                return (C = !0), !1;
            } else if ("#" == g) {
              if ("" == w) return (C = !0), !1;
            } else if (g == w) return (C = !0), !1;
          });
          switch (f) {
            case "B":
              C && (c = !1);
              break;
            case "W":
              C || (c = !1);
          }
        }
        if (
          c &&
          ((k = a(this).attr("client-list")),
          "undefined" != typeof k && "undefined" !== typeof X)
        )
          switch (
            ((k = aded53b9(k).split(",")),
            (f = a(this).attr("client-list-type")),
            (r = !1),
            a.each(k, function (A, g) {
              if ("" == g.trim()) return !0;
              var M = g.split("&&");
              a.each(M, function (da, b) {
                var x = !0,
                  q = !1;
                b = b.trim();
                "!!" == b.substring(0, 2) && ((x = !1), (b = b.substring(2)));
                "language:" == b.substring(0, 9) &&
                  ((q = !0), (b = b.substring(9).toLowerCase()));
                var p = !1;
                q
                  ? "*" == b.charAt(0)
                    ? "*" == b.charAt(b.length - 1)
                      ? ((b = b.substr(1, b.length - 2).toLowerCase()),
                        -1 != L.indexOf(b) && (p = !0))
                      : ((b = b.substr(1).toLowerCase()),
                        L.substr(-b.length) == b && (p = !0))
                    : "*" == b.charAt(b.length - 1)
                    ? ((b = b.substr(0, b.length - 1).toLowerCase()),
                      0 == L.indexOf(b) && (p = !0))
                    : b == L && (p = !0)
                  : "*" == b.charAt(0)
                  ? "*" == b.charAt(b.length - 1)
                    ? ((b = b.substr(1, b.length - 2).toLowerCase()),
                      -1 != S.indexOf(b) && (p = !0))
                    : ((b = b.substr(1).toLowerCase()),
                      S.substr(-b.length) == b && (p = !0))
                  : "*" == b.charAt(b.length - 1)
                  ? ((b = b.substr(0, b.length - 1).toLowerCase()),
                    0 == S.indexOf(b) && (p = !0))
                  : X.is(b) && (p = !0);
                r = p ? x : !x;
                if (!r) return !1;
              });
              if (r) return !1;
            }),
            f)
          ) {
            case "B":
              r && (c = !1);
              break;
            case "W":
              r || (c = !1);
          }
        var N = (k = !1);
        if (c) {
          var h = a(this).attr("parameter-list");
          if ("undefined" != typeof h) {
            h = aded53b9(h);
            f = a(this).attr("parameter-list-type");
            h = h.replace("tcf-gdpr", "tcf-v2[gdprApplies]=true");
            h = h.replace("tcf-no-gdpr", "tcf-v2[gdprApplies]=false");
            h = h.replace(
              "tcf-google",
              "tcf-v2[vendor][consents][755]=true && tcf-v2[purpose][consents][1]=true"
            );
            h = h.replace(
              "tcf-media.net",
              "tcf-v2[vendor][consents][142]=true && tcf-v2[purpose][consents][1]=true"
            );
            h = h.replace(
              "tcf-amazon",
              "tcf-v2[vendor][consents][793]=true && tcf-v2[purpose][consents][1]=true"
            );
            h = h.replace(
              "tcf-ezoic",
              "tcf-v2[vendor][consents][347]=true && tcf-v2[purpose][consents][1]=true"
            );
            h = h.split(",");
            var Y = [];
            J.forEach(function (A) {
              A = A.split("=");
              try {
                var g = JSON.parse(decodeURIComponent(A[1]));
              } catch (M) {
                g = decodeURIComponent(A[1]);
              }
              Y[A[0]] = g;
            });
            var r = !1,
              O = a(this);
            a.each(h, function (A, g) {
              var M = g.split("&&");
              a.each(M, function (da, b) {
                var x = !0;
                b = b.trim();
                "!!" == b.substring(0, 2) && ((x = !1), (b = b.substring(2)));
                var q = b,
                  p = "!@!",
                  Z = -1 != b.indexOf("["),
                  aa =
                    (0 == b.indexOf("tcf-v2") ||
                      0 == b.indexOf("euconsent-v2")) &&
                    -1 != b.indexOf("[");
                -1 != b.indexOf("=") &&
                  ((p = b.split("=")),
                  (q = p[0]),
                  (p = p[1]),
                  (Z = -1 != q.indexOf("[")),
                  (aa =
                    (0 == q.indexOf("tcf-v2") ||
                      0 == q.indexOf("euconsent-v2")) &&
                    -1 != q.indexOf("[")));
                if (aa)
                  a("#ai-iab-tcf-bar").show(),
                    "object" == typeof ai_tcData
                      ? (a("#ai-iab-tcf-bar").addClass("status-ok"),
                        (q = q.replace(/]| /gi, "").split("[")),
                        q.shift(),
                        (r = (q = l(q, ai_tcData, p)) ? x : !x))
                      : (O.addClass("ai-list-data"),
                        (N = !0),
                        "function" == typeof __tcfapi
                          ? K(!1)
                          : "undefined" == typeof ai_tcData_retrying &&
                            ((ai_tcData_retrying = !0),
                            setTimeout(function () {
                              "function" == typeof __tcfapi
                                ? K(!1)
                                : setTimeout(function () {
                                    "function" == typeof __tcfapi
                                      ? K(!1)
                                      : setTimeout(function () {
                                          K(!0);
                                        }, 3e3);
                                  }, 1e3);
                            }, 600)));
                else if (Z) r = (q = F(Y, q, p)) ? x : !x;
                else {
                  var T = !1;
                  "!@!" == p
                    ? J.every(function (ea) {
                        return ea.split("=")[0] == b ? ((T = !0), !1) : !0;
                      })
                    : (T = -1 != J.indexOf(b));
                  r = T ? x : !x;
                }
                if (!r) return !1;
              });
              if (r) return !1;
            });
            r && (N = !1);
            switch (f) {
              case "B":
                r && (c = !1);
                break;
              case "W":
                r || (c = !1);
            }
            a(this).hasClass("ai-list-manual") &&
              (c
                ? (O.removeClass("ai-list-data"),
                  O.removeClass("ai-list-manual"))
                : ((k = !0), O.addClass("ai-list-data")));
            if (
              !k &&
              !N &&
              ((f = a(this).data("debug-info")),
              "undefined" != typeof f && ((f = a("." + f)), 0 != f.length))
            ) {
              var v = f.parent();
              v.hasClass("ai-debug-info") && v.remove();
            }
          }
        }
        v = a(this).prevAll(".ai-debug-bar.ai-debug-lists");
        f = "" == w ? "#" : w;
        v.find(".ai-debug-name.ai-list-info")
          .text(f)
          .attr("title", R + "\n" + W);
        v.find(".ai-debug-name.ai-list-status").text(
          c ? ai_front.visible : ai_front.hidden
        );
        f = !1;
        if (c) {
          var D = a(this).attr("scheduling-start");
          h = a(this).attr("scheduling-end");
          var H = a(this).attr("scheduling-days");
          if (
            "undefined" != typeof D &&
            "undefined" != typeof h &&
            "undefined" != typeof H
          ) {
            f = !0;
            var y = aded53b9(D),
              P = aded53b9(h),
              U = parseInt(a(this).attr("scheduling-fallback")),
              Q = parseInt(a(this).attr("gmt"));
            y.includes("-") || P.includes("-")
              ? ((h = t(y) + Q), (D = t(P) + Q))
              : ((h = B(y)), (D = B(P)));
            H = aded53b9(H).split(",");
            v = a(this).attr("scheduling-type");
            var z = new Date().getTime() + Q,
              E = new Date(z),
              I = E.getDay();
            y.includes("-") ||
              P.includes("-") ||
              ((y =
                new Date(E.getFullYear(), E.getMonth(), E.getDate()).getTime() +
                Q),
              (z -= y),
              0 > z && (z += 864e5));
            0 == I ? (I = 6) : I--;
            y = z >= h && z < D && H.includes(I.toString());
            switch (v) {
              case "B":
                y = !y;
            }
            y || (c = !1);
            E = E.toISOString().split(".")[0].replace("T", " ");
            v = a(this).prevAll(".ai-debug-bar.ai-debug-scheduling");
            v.find(".ai-debug-name.ai-scheduling-info").text(
              E +
                " " +
                I +
                " current_time:" +
                Math.floor(z.toString() / 1e3) +
                "  start_date:" +
                Math.floor(h / 1e3).toString() +
                " =" +
                (z >= h).toString() +
                " end_date:" +
                Math.floor(D / 1e3).toString() +
                " =:" +
                (z < D).toString() +
                " days:" +
                H.toString() +
                " =:" +
                H.includes(I.toString()).toString()
            );
            v.find(".ai-debug-name.ai-scheduling-status").text(
              c ? ai_front.visible : ai_front.hidden
            );
            c ||
              0 == U ||
              (v
                .removeClass("ai-debug-scheduling")
                .addClass("ai-debug-fallback"),
              v
                .find(".ai-debug-name.ai-scheduling-status")
                .text(ai_front.fallback + " = " + U));
          }
        }
        if (k || N) return !0;
        a(this).css({
          visibility: "",
          position: "",
          width: "",
          height: "",
          "z-index": "",
        });
        c
          ? (e.css({ visibility: "" }),
            e.hasClass("ai-remove-position") && e.css({ position: "" }),
            "undefined" != typeof a(this).data("code") &&
              ((c = aded53b9(a(this).data("code"))),
              0 != a(this).closest("head").length
                ? (a(this).after(c), a(this).remove())
                : a(this).append(c),
              ai_process_element(this)))
          : f && !y && 0 != U
          ? (e.css({ visibility: "" }),
            e.hasClass("ai-remove-position") && e.css({ position: "" }),
            a(this).next(".ai-fallback").removeClass("ai-fallback"),
            "undefined" != typeof a(this).data("fallback-code")
              ? ((c = aded53b9(a(this).data("fallback-code"))),
                a(this).append(c),
                ai_process_element(this))
              : (a(this).hide(),
                e.find(".ai-debug-block").length ||
                  -1 != e.attr("style").indexOf("height:") ||
                  e.hide()),
            (c = e.attr("data-ai")),
            "undefined" !== typeof c &&
              !1 !== c &&
              ((c = a(this).attr("fallback-tracking")),
              "undefined" !== typeof c &&
                !1 !== c &&
                e.attr("data-ai-" + a(this).attr("fallback_level"), c)))
          : (a(this).hide(),
            e.removeAttr("data-ai").removeClass("ai-track"),
            e.find(".ai-debug-block").length
              ? (e.css({ visibility: "" }).removeClass("ai-close"),
                e.hasClass("ai-remove-position") && e.css({ position: "" }))
              : -1 == e.attr("style").indexOf("height:") && e.hide());
        a(this).attr("data-code", "");
        a(this).attr("data-fallback-code", "");
        e.removeClass("ai-list-block");
      });
    }
  };
  a(document).ready(function (d) {
    setTimeout(function () {
      ai_process_lists();
      setTimeout(function () {
        G();
        if ("function" == typeof ai_load_blocks) {
          var l = function (F) {
            ("cmplzEnableScripts" != F.type && "all" !== F.consentLevel) ||
              ai_load_blocks();
          };
          jQuery(document).on("cmplzEnableScripts", l);
          jQuery(document).on("cmplz_event_marketing", l);
        }
      }, 50);
      jQuery(".ai-debug-page-type").dblclick(function () {
        jQuery("#ai-iab-tcf-status").text("CONSENT COOKIES");
        jQuery("#ai-iab-tcf-bar").show();
      });
      jQuery("#ai-iab-tcf-bar").click(function () {
        m("euconsent-v2");
        m("__lxG__consent__v2");
        m("__lxG__consent__v2_daisybit");
        m("__lxG__consent__v2_gdaisybit");
        m("CookieLawInfoConsent");
        m("cookielawinfo-checkbox-advertisement");
        m("cookielawinfo-checkbox-analytics");
        m("cookielawinfo-checkbox-necessary");
        m("complianz_policy_id");
        m("complianz_consent_status");
        m("cmplz_marketing");
        m("cmplz_consent_status");
        m("cmplz_preferences");
        m("cmplz_statistics-anonymous");
        m("cmplz_choice");
        m("moove_gdpr_popup");
        m("real_cookie_banner-blog:1-tcf");
        m("real_cookie_banner-blog:1");
        jQuery("#ai-iab-tcf-status").text("CONSENT COOKIES DELETED");
      });
    }, 5);
  });
});
function ai_process_element(a) {
  setTimeout(function () {
    "function" == typeof ai_process_rotations_in_element &&
      ai_process_rotations_in_element(a);
    "function" == typeof ai_process_lists &&
      ai_process_lists(jQuery(".ai-list-data", a));
    "function" == typeof ai_process_ip_addresses &&
      ai_process_ip_addresses(jQuery(".ai-ip-data", a));
    "function" == typeof ai_process_filter_hooks &&
      ai_process_filter_hooks(jQuery(".ai-filter-check", a));
    "function" == typeof eddc405b && eddc405b(a);
  }, 5);
}
function getAllUrlParams(a) {
  var n = a ? a.split("?")[1] : window.location.search.slice(1);
  a = {};
  if (n) {
    n = n.split("#")[0];
    n = n.split("&");
    for (var B = 0; B < n.length; B++) {
      var t = n[B].split("="),
        G = void 0,
        u = t[0].replace(/\[\d*\]/, function (m) {
          G = m.slice(1, -1);
          return "";
        });
      t = "undefined" === typeof t[1] ? "" : t[1];
      u = u.toLowerCase();
      t = t.toLowerCase();
      a[u]
        ? ("string" === typeof a[u] && (a[u] = [a[u]]),
          "undefined" === typeof G ? a[u].push(t) : (a[u][G] = t))
        : (a[u] = t);
    }
  }
  return a;
}
jQuery(document).ready(function (c) {
  function f(a) {
    var d = c(a).find(".ai-close-button.ai-close-unprocessed");
    d.length &&
      (0 !== c(a).outerHeight()
        ? c(a)
            .css("width", "")
            .addClass("ai-close-fit")
            .find(".ai-close-button")
            .fadeIn(50)
        : ((d = c(a)),
          setTimeout(function () {
            0 !== d.outerHeight() &&
              d
                .css("width", "")
                .addClass("ai-close-fit")
                .find(".ai-close-button")
                .fadeIn(50);
          }, 4e3)),
      c(d).removeClass("ai-close-unprocessed"));
  }
  ai_close_block = function (a) {
    var d = c(a).closest(".ai-close"),
      b = c(a).data("ai-block");
    if ("undefined" != typeof d) {
      var e = d.find(".ai-attributes [data-ai-hash]").data("ai-hash");
      a = c(a).data("ai-closed-time");
      if ("undefined" != typeof a) {
        var g = Math.round(new Date().getTime() / 1e3);
        ai_set_cookie(b, "x", Math.round(g + 86400 * a));
        ai_set_cookie(b, "h", e);
      } else
        (e = ai_set_cookie(b, "x", "")),
          !e.hasOwnProperty(b) ||
            e[b].hasOwnProperty("i") ||
            e[b].hasOwnProperty("c") ||
            ai_set_cookie(b, "h", "");
      d.remove();
    } else
      ai_set_cookie(b, "x", ""),
        !e.hasOwnProperty(b) ||
          e[b].hasOwnProperty("i") ||
          e[b].hasOwnProperty("c") ||
          ai_set_cookie(b, "h", "");
  };
  ai_install_close_buttons = function (a) {
    setTimeout(function () {
      c(".ai-close-button.ai-close-unprocessed", a).click(function () {
        ai_close_block(this);
      });
    }, 1800);
    "undefined" === typeof ai_preview &&
      setTimeout(function () {
        c(".ai-close-button.ai-close-unprocessed", a).each(function () {
          var d = c(this),
            b = d.data("ai-close-timeout");
          0 < b &&
            setTimeout(function () {
              ai_close_block(d);
            }, 1e3 * (2 < b ? b - 2 : 0) + 1);
        });
      }, 2e3);
    setTimeout(function () {
      c(a).hasClass("ai-close")
        ? f(a)
        : c(".ai-close", a).each(function () {
            f(this);
          });
    }, 2200);
  };
  ai_install_close_buttons(document);
});
jQuery(function (a) {
  function u(d, c) {
    c || (c = window.location.href);
    d = d.replace(/[\[\]]/g, "\\$&");
    var f = new RegExp("[?&]" + d + "(=([^&#]*)|&|#|$)").exec(c);
    return f
      ? f[2]
        ? decodeURIComponent(f[2].replace(/\+/g, " "))
        : ""
      : null;
  }
  function v(d) {
    d.removeClass("ai-ip-data");
    var c = !1;
    if ("" != ai_ip_data) {
      try {
        var f = JSON.parse(ai_ip_data),
          g = f[0],
          l = f[1],
          n = f[2],
          p = f[3];
      } catch (e) {
        return;
      }
      var r = !1;
      -1 != g.indexOf("#") && ((r = !0), (g = g.replace("#", "")));
      var q = "";
      r && (q = "CFP BLOCKED, ");
      q = q + g + ", " + l;
      null != n && null != p && (q = q + ":" + n + ":" + p);
      null == n && (n = "");
      null == p && (p = "");
      null != f &&
        d.each(function () {
          var e = a(this).closest("div.code-block");
          c = !0;
          var h = a(this).attr("ip-addresses");
          if ("undefined" != typeof h) {
            h = h.split(",");
            var t = a(this).attr("ip-address-list"),
              k = !1;
            a.each(h, function (w, b) {
              if ("*" == b.charAt(0))
                if ("*" == b.charAt(b.length - 1)) {
                  if (((b = b.substr(1, b.length - 2)), -1 != g.indexOf(b)))
                    return (k = !0), !1;
                } else {
                  if (((b = b.substr(1)), g.substr(-b.length) == b))
                    return (k = !0), !1;
                }
              else if ("*" == b.charAt(b.length - 1)) {
                if (((b = b.substr(0, b.length - 1)), 0 == g.indexOf(b)))
                  return (k = !0), !1;
              } else if ("#" == b) {
                if ("" == g) return (k = !0), !1;
              } else if ("CFP" == b.toUpperCase()) {
                if (r) return (k = !0), !1;
              } else if (b == g) return (k = !0), !1;
            });
            switch (t) {
              case "B":
                k && (c = !1);
                break;
              case "W":
                k || (c = !1);
            }
          }
          if (c && ((h = a(this).attr("countries")), "undefined" != typeof h))
            switch (
              ((h = h.split(",")),
              (t = a(this).attr("country-list")),
              (k = !1),
              a.each(h, function (w, b) {
                var m = b.trim().split(":");
                if (null == m[1] || "" == n) m[1] = "";
                if (null == m[2] || "" == p) m[2] = "";
                var x = m.join(":").toUpperCase();
                m = (
                  l +
                  ":" +
                  ("" == m[1] ? "" : n) +
                  ":" +
                  ("" == m[2] ? "" : p)
                ).toUpperCase();
                if (x == m) return (k = !0), !1;
              }),
              t)
            ) {
              case "B":
                k && (c = !1);
                break;
              case "W":
                k || (c = !1);
            }
          a(this).css({
            visibility: "",
            position: "",
            width: "",
            height: "",
            "z-index": "",
          });
          h = a(this).prev(".ai-debug-bar");
          h.find(".ai-debug-name.ai-ip-country").text(q);
          h.find(".ai-debug-name.ai-ip-status").text(
            c ? ai_front.visible : ai_front.hidden
          );
          c
            ? (e.css({ visibility: "" }),
              e.hasClass("ai-remove-position") && e.css({ position: "" }),
              "undefined" != typeof a(this).data("code") &&
                ((h = aded53b9(a(this).data("code"))),
                0 != a(this).closest("head").length
                  ? (a(this).after(h), a(this).remove())
                  : a(this).append(h),
                a(this).attr("data-code", ""),
                ai_process_element(this)))
            : (a(this).hide(),
              e.removeAttr("data-ai"),
              e.find(".ai-debug-block")
                ? (e.css({ visibility: "" }).removeClass("ai-close"),
                  e.hasClass("ai-remove-position") && e.css({ position: "" }),
                  "undefined" != typeof a(this).data("code") &&
                    (e.removeClass("ai-list-block"),
                    e.removeClass("ai-list-block-filter"),
                    e.prev().hasClass("ai-debug-info") && e.prev().remove()))
                : -1 == e.attr("style").indexOf("height:") && e.hide());
          e.removeClass("ai-list-block-ip");
        });
    }
  }
  ai_process_ip_addresses = function (d) {
    d =
      null == d
        ? a("div.ai-ip-data, meta.ai-ip-data")
        : d.filter(".ai-ip-data");
    if (d.length)
      if ("undefined" != typeof ai_ip_data) v(d);
      else if ("undefined" == typeof ai_ip_data_requested) {
        ai_ip_data_requested = !0;
        var c =
            "/wp-admin/admin-ajax.php?action=ai_ajax&ip-data=ip-address-country-city&ai_check=df3407cbda&ver=" +
            (new Date().getTime() + "-" + Math.round(1e5 * Math.random())),
          f = u("ai-debug-ip-address");
        null != f && (c += "&ai-debug-ip-address=" + f);
        f = u("ai-debug-country");
        null != f && (c += "&ai-debug-country=" + f);
        a.get(c, function (g) {
          ai_ip_data = g;
          if ("" == g) {
            var l = "Ajax request returned empty data, geo-targeting disabled";
            console.error(l);
            "undefined" != typeof ai_js_errors && ai_js_errors.push([l, c, 0]);
          } else
            try {
              JSON.parse(g);
            } catch (n) {
              (l = "Ajax call returned invalid data, geo-targeting disabled"),
                console.error(l, g),
                "undefined" != typeof ai_js_errors &&
                  ai_js_errors.push([l, c, 0]);
            }
          d = a("div.ai-ip-data, meta.ai-ip-data");
          d.length && v(d);
        }).fail(function (g, l, n) {
          a("div.ai-ip-data").each(function () {
            a(this)
              .css({
                display: "none",
                visibility: "",
                position: "",
                width: "",
                height: "",
                "z-index": "",
              })
              .removeClass("ai-ip-data")
              .hide();
          });
        });
      }
  };
  a(document).ready(function (d) {
    setTimeout(function () {
      ai_process_ip_addresses();
    }, 5);
  });
});
function ai_process_element(a) {
  setTimeout(function () {
    "function" == typeof ai_process_rotations_in_element &&
      ai_process_rotations_in_element(a);
    "function" == typeof ai_process_lists &&
      ai_process_lists(jQuery(".ai-list-data", a));
    "function" == typeof ai_process_ip_addresses &&
      ai_process_ip_addresses(jQuery(".ai-ip-data", a));
    "function" == typeof ai_process_filter_hooks &&
      ai_process_filter_hooks(jQuery(".ai-filter-check", a));
    "function" == typeof eddc405b && eddc405b(a);
  }, 5);
}
var cbab5565e289 = !1,
  efaeaa624552 = 0,
  adcd35b30166 = "aiADB",
  feceb96cab01 = "aiADB_PV",
  ffade8845a25 = "aiADB_PR",
  eadcca17fccd = jQuery("<kbd>")
    .append(
      jQuery("<kbd>")
        .append(
          jQuery("<div>")
            .append(
              jQuery("<kbd>")
                .append(
                  jQuery("<ins>", {
                    attr: {
                      style: aded53b9(
                        "Y3Vyc29yOiBwb2ludGVyOyBwb3NpdGlvbjogZml4ZWQ7ICB3aWR0aDogMTAwLjQ0JTsgIHRvcDogMDsgei1pbmRleDogNDk2MDkxMjsgIGxlZnQ6IDA7ICBoZWlnaHQ6IDEwMC4xNCU7ICB1c2VyLXNlbGVjdDogbm9uZTtvcGFjaXR5OiAwLjg7IGJhY2tncm91bmQ6ICMwOTA5MDk7"
                      ),
                    },
                  })
                    .append(jQuery("<div>"))
                    .append(
                      jQuery("<div>", {
                        attr: {
                          style: aded53b9(
                            "cG9zaXRpb246IGZpeGVkOyAgY3Vyc29yOiBwb2ludGVyOyAgbGVmdDogMDsgIGhlaWdodDogMTAwLjI0JTsgei1pbmRleDogNTQ4NjQ7ICB0b3A6IDA7ICB3aWR0aDogMTAwLjgxJTsgIHVzZXItc2VsZWN0OiBub25lOw=="
                          ),
                        },
                      })
                    )
                )
                .append(
                  jQuery("<div>", {
                    attr: {
                      style: aded53b9(
                        "bGVmdDogMDsgcG9zaXRpb246IGZpeGVkOyAgdXNlci1zZWxlY3Q6IG5vbmU7ICB0b3A6IDA7ICBoZWlnaHQ6IDEwMC4yOCU7IHotaW5kZXg6IDY4NzI0OyAgY3Vyc29yOiBwb2ludGVyOyAgd2lkdGg6IDEwMC40MSU7"
                      ),
                    },
                  })
                )
                .append(jQuery("<div>"))
                .append(
                  jQuery("<div>", {
                    attr: {
                      style: aded53b9(
                        "d2lkdGg6IDEwMC4zOSU7ICBjdXJzb3I6IHBvaW50ZXI7ICBsZWZ0OiAwOyAgaGVpZ2h0OiAxMDAuMjklOyAgdG9wOiAwOyBwb3NpdGlvbjogZml4ZWQ7IHotaW5kZXg6IDg3MzYxOyAgdXNlci1zZWxlY3Q6IG5vbmU7"
                      ),
                    },
                  })
                )
            )
            .append(
              jQuery("<div>", {
                attr: {
                  style: aded53b9(
                    "cG9zaXRpb246IGZpeGVkOyAgbGVmdDogMDsgIHdpZHRoOiAxMDAuNjElOyB6LWluZGV4OiA1OTg4NjsgIHVzZXItc2VsZWN0OiBub25lOyAgdG9wOiAwOyAgY3Vyc29yOiBwb2ludGVyOyAgaGVpZ2h0OiAxMDAuNjYlOw=="
                  ),
                },
              })
            )
            .append(jQuery("<div>"))
            .append(
              jQuery("<div>", {
                attr: {
                  style: aded53b9(
                    "cG9zaXRpb246IGZpeGVkOyAgdG9wOiAwOyAgbGVmdDogMDsgIHdpZHRoOiAxMDAuMTUlOyAgdXNlci1zZWxlY3Q6IG5vbmU7ICBjdXJzb3I6IHBvaW50ZXI7ICBoZWlnaHQ6IDEwMC4zNCU7IHotaW5kZXg6IDMyNDY3Ow=="
                  ),
                },
              })
            )
        )
        .prepend(
          jQuery("<div>", {
            attr: {
              style: aded53b9(
                "ei1pbmRleDogODIxNzU7ICBoZWlnaHQ6IDEwMC44NSU7ICB1c2VyLXNlbGVjdDogbm9uZTsgIHdpZHRoOiAxMDAuNDMlOyAgY3Vyc29yOiBwb2ludGVyOyAgbGVmdDogMDsgcG9zaXRpb246IGZpeGVkOyAgdG9wOiAwOw=="
              ),
            },
          })
        )
        .prepend(jQuery("<div>"))
        .append(jQuery("<div>"))
        .append(
          jQuery("<div>", {
            attr: {
              style: aded53b9(
                "Y3Vyc29yOiBwb2ludGVyOyAgdXNlci1zZWxlY3Q6IG5vbmU7ICBoZWlnaHQ6IDEwMC41NyU7IHBvc2l0aW9uOiBmaXhlZDsgIHdpZHRoOiAxMDAuNjklOyB6LWluZGV4OiA0MjExNjsgIGxlZnQ6IDA7ICB0b3A6IDA7"
              ),
            },
          })
        )
    )
    .prepend(
      jQuery("<div>", {
        attr: {
          style: aded53b9(
            "bGVmdDogMDsgIGhlaWdodDogMTAwLjE5JTsgcG9zaXRpb246IGZpeGVkOyB6LWluZGV4OiA5NzAzOTsgIGN1cnNvcjogcG9pbnRlcjsgIHdpZHRoOiAxMDAuODMlOyAgdG9wOiAwOyAgdXNlci1zZWxlY3Q6IG5vbmU7"
          ),
        },
      })
    )
    .prepend(jQuery("<div>")),
  cadfdbe3e199 = jQuery("<p>")
    .append(
      jQuery("<div>")
        .append(
          jQuery("<section>")
            .append(
              jQuery("<div>", {
                attr: {
                  style: aded53b9(
                    "Y3Vyc29yOiBwb2ludGVyOyBwb3NpdGlvbjogZml4ZWQ7ICB0b3A6IDQ5LjE1JTsgIGxlZnQ6IDQ5LjMlOyAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgYmFja2dyb3VuZDogIzE4MTgxODsgIHVzZXItc2VsZWN0OiBub25lOyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUxLjEzJSwgLTUxLjEzJSk7IHotaW5kZXg6IDk3MTMwNTg0OyAgY29sb3I6ICNmZmY7Ym9yZGVyOiA1cHggc29saWQgI2YwMDsgd2lkdGg6IDM1MHB4OyAgcGFkZGluZzogMTBweDsgIGJvcmRlci1yYWRpdXM6IDVweDs="
                  ),
                },
                html: aded53b9(
                  "PHA+PHN0cm9uZz5CbG9xdWVhZG8gcG9yIGVsIGJsb3F1ZWFkb3IgZGUgYW51bmNpb3M8L3N0cm9uZz48L3A+PHA+UGFyZWNlIHF1ZSBlc3TDoXMgdXRpbGl6YW5kbyBhbGfDum4gc29mdHdhcmUgZGUgYmxvcXVlbyBkZSBhbnVuY2lvcyBxdWUgaW1waWRlIHF1ZSBsYSBww6FnaW5hIHNlIGNhcmd1ZSBwb3IgY29tcGxldG8uIEluY2x1eWUgZXN0YSB3ZWIgZW4gbGEgbGlzdGEgYmxhbmNhIG8gZGVzYWN0aXZhIGVsIHNvZnR3YXJlIGRlIGJsb3F1ZW8gZGUgYW51bmNpb3MuPC9wPg=="
                ),
              })
                .append(jQuery("<p>"))
                .append(
                  jQuery("<div>", {
                    attr: {
                      style: aded53b9(
                        "dG9wOiA1My4xNSU7ICBsZWZ0OiA0Ny45NSU7ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTEuNDIlLCAtNTEuNDIlKTsgIHVzZXItc2VsZWN0OiBub25lOyAgY3Vyc29yOiBwb2ludGVyOyBwb3NpdGlvbjogZml4ZWQ7IHotaW5kZXg6IDk4MTYxOyAgY29sb3I6ICNmZmY7ICBiYWNrZ3JvdW5kOiAjMDkwOTA5Ow=="
                      ),
                    },
                  })
                )
            )
            .append(jQuery("<p>"))
            .prepend(jQuery("<p>"))
            .append(jQuery("<p>"))
            .append(
              jQuery("<div>", {
                attr: {
                  style: aded53b9(
                    "dG9wOiA1Mi4zJTsgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgIGxlZnQ6IDQ4LjQyJTsgIHVzZXItc2VsZWN0OiBub25lOyBwb3NpdGlvbjogZml4ZWQ7IHotaW5kZXg6IDM0NjM5OTsgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MC4yNiUsIC01MC4yNiUpOyAgYmFja2dyb3VuZDogIzAyMDIwMjsgIGNvbG9yOiAjZmZmOyAgY3Vyc29yOiBwb2ludGVyOw=="
                  ),
                },
              })
            )
        )
        .append(
          jQuery("<div>", {
            attr: {
              style: aded53b9(
                "bGVmdDogNTMuNDElOyBwb3NpdGlvbjogZml4ZWQ7IHotaW5kZXg6IDk5ODEzODsgIGNvbG9yOiAjZmZmOyAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgY3Vyc29yOiBwb2ludGVyOyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwLjYxJSwgLTUwLjYxJSk7ICB1c2VyLXNlbGVjdDogbm9uZTsgIGJhY2tncm91bmQ6ICMxNDE0MTQ7ICB0b3A6IDUxLjI5JTs="
              ),
            },
          })
        )
        .prepend(jQuery("<p>"))
        .append(jQuery("<p>"))
        .append(
          jQuery("<div>", {
            attr: {
              style: aded53b9(
                "dGV4dC1kZWNvcmF0aW9uOiBub25lOyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQ3LjcyJSwgLTQ3LjcyJSk7IHotaW5kZXg6IDY5MzQ2MDsgcG9zaXRpb246IGZpeGVkOyAgYmFja2dyb3VuZDogIzA4MDgwODsgIGxlZnQ6IDQ3LjM3JTsgIGNvbG9yOiAjZmZmOyAgY3Vyc29yOiBwb2ludGVyOyAgdG9wOiA1Mi41NiU7ICB1c2VyLXNlbGVjdDogbm9uZTs="
              ),
            },
          })
        )
    )
    .prepend(jQuery("<p>"))
    .prepend(jQuery("<p>")),
  faea47a9191d = 1,
  afeb093c69a3 = 0,
  aada4eb6d623 = 0,
  eabbea4d89d4 = "",
  fadbf7ced3c5 = "",
  eeec96205bec = "";
function deffb8101533() {
  (function (a) {
    a(".bccb439d5cdf").each(function () {
      var c = a(this).parent(),
        d = a(this).data("css");
      "undefined" == typeof d && (d = "display: none !important;");
      var b = a(this).data("selectors");
      if ("undefined" == typeof b || "" == b) b = "p";
      var g = !1;
      a(c)
        .find(".bccb439d5cdf, .fadd65f44453, " + b)
        .each(function () {
          if (a(this).hasClass("bccb439d5cdf")) a(this).remove(), (g = !0);
          else if (a(this).hasClass("fadd65f44453")) a(this).remove(), (g = !1);
          else if (g) {
            var e = a(this).attr("style");
            "undefined" == typeof e
              ? (e = "")
              : ((e = e.trim()),
                "" != e && ";" != e[e.length - 1] && (e += ";"));
            a(this).attr("style", e + " " + d);
          }
        });
    });
    a(".ebfba4aeeed3").each(function () {
      var c = a(this).parent(),
        d = a(this).data("selectors");
      if ("undefined" == typeof d || "" == d) d = "p";
      var b = !1;
      a(c)
        .find(".ebfba4aeeed3, .aaaaf78f3505, " + d)
        .each(function () {
          a(this).hasClass("ebfba4aeeed3")
            ? (a(this).remove(), (b = !0))
            : a(this).hasClass("aaaaf78f3505")
            ? (a(this).remove(), (b = !1))
            : b && a(this).remove();
        });
    });
    a(".cbcfd3779001").each(function () {
      var c = a(this).parent(),
        d = a(this).data("text");
      "undefined" == typeof d && (d = "");
      var b = a(this).data("css");
      "undefined" == typeof b && (b = "");
      var g = a(this).data("selectors");
      if ("undefined" == typeof g || "" == g) g = "p";
      var e = !1;
      a(c)
        .find(".cbcfd3779001, .ebad9f75bfa4, " + g)
        .each(function () {
          if (a(this).hasClass("cbcfd3779001")) a(this).remove(), (e = !0);
          else if (a(this).hasClass("ebad9f75bfa4")) a(this).remove(), (e = !1);
          else if (e) {
            if (0 != d.length) {
              var f = Math.round(a(this).text().length / (d.length + 1));
              a(this).text(
                Array(f + 1)
                  .join(d + " ")
                  .trim()
              );
            } else a(this).text("");
            "" != b &&
              ((f = a(this).attr("style")),
              "undefined" == typeof f
                ? (f = "")
                : ((f = f.trim()),
                  "" != f && ";" != f[f.length - 1] && (f += ";")),
              "" != b && (b = " " + b),
              a(this).attr("style", f + b));
          }
        });
    });
  })(jQuery);
}
function eddc405b(a) {
  (function (c) {
    "undefined" == typeof a && (a = c("body"));
    var d = c(aded53b9("Ym9keQ==")).attr(
        aded53b9("ZGF0YS02MThkY2I3MzE0Nzk3MzY0NzFmMDdlNWVlNzQ0NTIzYQ==")
      ),
      b = "string" === typeof d ? d == aded53b9("bWFzaw==") : null;
    if ("string" === typeof d && "boolean" === typeof b)
      if (b) {
        do {
          var g = !1;
          c(".ai-adb-hide", a).each(function () {
            c(this).css({ display: "none", visibility: "hidden" });
            c(this).removeClass("ai-adb-hide");
            var e = c(this).closest("div[data-ai]");
            if ("undefined" != typeof e.attr("data-ai")) {
              var f = JSON.parse(aded53b9(e.attr("data-ai")));
              "undefined" !== typeof f &&
                f.constructor === Array &&
                ((f[1] = ""), e.attr("data-ai", efce7dc5(JSON.stringify(f))));
            }
            ai_disable_processing(c(this));
          });
          c(".ai-adb-show", a).each(function () {
            c(this).css({ display: "block", visibility: "visible" });
            c(this).removeClass("ai-adb-show");
            if ("undefined" != typeof c(this).data("code")) {
              var e = aded53b9(c(this).data("code"));
              c(this).append(e);
              g = !0;
              "function" == typeof ai_process_elements && ai_process_elements();
            }
            e = c(this).attr("data-ai-tracking");
            if ("undefined" != typeof e) {
              var f = c(this).closest("div[data-ai]");
              if ("undefined" != typeof f.attr("data-ai")) {
                if (c(this).hasClass("ai-no-tracking")) {
                  var h = JSON.parse(aded53b9(f.attr("data-ai")));
                  "undefined" !== typeof h &&
                    h.constructor === Array &&
                    ((h[1] = ""), (e = efce7dc5(JSON.stringify(h))));
                }
                f.attr("data-ai", e);
              }
            }
          });
        } while (g);
        setTimeout(function () {
          "function" == typeof ai_process_impressions &&
            1 == ai_tracking_finished &&
            ai_process_impressions();
          "function" == typeof ai_install_click_trackers &&
            1 == ai_tracking_finished &&
            ai_install_click_trackers();
        }, 15);
        setTimeout(deffb8101533, 10);
      } else
        c(".ai-adb-hide", a).each(function () {
          c(this).removeClass("ai-adb-hide");
          if (
            0 == c(this).outerHeight() &&
            0 == c(this).closest(".ai-adb-show").length
          ) {
            var e = c(this).closest("div[data-ai]");
            if ("undefined" != typeof e.attr("data-ai")) {
              var f = JSON.parse(aded53b9(e.attr("data-ai")));
              "undefined" !== typeof f &&
                f.constructor === Array &&
                ((f[1] = ""),
                e.attr("data-ai", efce7dc5(JSON.stringify(f))),
                e.addClass("ai-viewport-0").css("display", "none"));
            }
          }
        }),
          c(".ai-adb-show", a).each(function () {
            ai_disable_processing(c(this));
            c(this).removeClass("ai-adb-show");
          });
  })(jQuery);
}
dada7f432f16 = function (a) {
  var c = dccc74b9db55(a),
    d = jQuery("#ai-adb-events");
  if (0 != d.count) {
    var b = d.text();
    d.text(("" != b ? b + ", " : b + ", EVENTS: ") + a);
  }
  return c;
};
dccc74b9db55 = function (a) {
  return "";
};
var ccaf7d0d6945 = function (a) {
    setTimeout(function () {
      bbaa83b3de9e(a);
    }, 2);
  },
  ai_disable_processing = function (a) {
    jQuery(a).find(".ai-lazy").removeClass("ai-lazy");
    jQuery(a).find(".ai-manual").removeClass("ai-manual");
    jQuery(a)
      .find(".ai-rotate")
      .removeClass("ai-unprocessed")
      .removeAttr("data-info");
    jQuery(a).find(".ai-list-data").removeClass("ai-list-data");
    jQuery(a).find(".ai-ip-data").removeClass("ai-ip-data");
    jQuery(a).find("[data-code]").removeAttr("data-code");
  },
  bbaa83b3de9e = function (a) {
    cbab5565e289 ||
      ((cbab5565e289 = !0),
      jQuery(aded53b9("Ym9keQ==")).attr(
        aded53b9("ZGF0YS02MThkY2I3MzE0Nzk3MzY0NzFmMDdlNWVlNzQ0NTIzYQ=="),
        aded53b9("bWFzaw==")
      ),
      (function (c) {
        c(window).ready(function () {
          eddc405b();
        });
        "undefined" !== typeof MobileDetect &&
          new MobileDetect(window.navigator.userAgent).is("bot") &&
          (aada4eb6d623 = 0);
        if ("" != eabbea4d89d4) {
          if (eabbea4d89d4.includes(",")) {
            var d = eabbea4d89d4.split(","),
              b = parseInt(d[0]);
            d = parseInt(d[1]);
          } else (b = parseInt(eabbea4d89d4)), (d = 0);
          var g = 1,
            e = AiCookies.get(feceb96cab01);
          "undefined" != typeof e && (g = parseInt(e) + 1);
          if (g <= b) {
            AiCookies.set(feceb96cab01, g, { expires: 365, path: "/" });
            window.ai_d1 = g;
            0;
            return;
          }
          if (
            0 != d &&
            (AiCookies.set(feceb96cab01, g, { expires: 365, path: "/" }),
            0 != (g - b - 1) % d)
          ) {
            window.ai_d1 = g;
            0;
            return;
          }
        }
        if (0 == afeb093c69a3 || (1 == aada4eb6d623 && faea47a9191d))
          AiCookies.remove(adcd35b30166, { path: "/" });
        else {
          e = AiCookies.get(adcd35b30166);
          if ("undefined" != typeof e && "acffbdde" == e) {
            0;
            return;
          }
          AiCookies.set(adcd35b30166, "acffbdde", {
            expires: afeb093c69a3,
            path: "/",
          });
        }
        0 == aada4eb6d623
          ? ((ai_dummy = 16), 0, ai_dummy++)
          : (0, (ai_dummy = 13));
        switch (aada4eb6d623) {
          case 1:
            faea47a9191d
              ? (eadcca17fccd
                  .find('[style*="cursor"]')
                  .css("cursor", "no-drop"),
                cadfdbe3e199.find('[style*="cursor"]').css("cursor", "no-drop"))
              : (eadcca17fccd.click(function () {
                  c(this).remove();
                  cadfdbe3e199.remove();
                }),
                cadfdbe3e199.click(function () {
                  c(this).remove();
                  eadcca17fccd.remove();
                }),
                (window.onkeydown = function (f) {
                  27 === f.keyCode &&
                    (eadcca17fccd.click(), cadfdbe3e199.click());
                }));
            b = c(aded53b9("Ym9keQ==")).children();
            b.eq(Math.floor(Math.random() * b.length)).after(eadcca17fccd);
            b.eq(Math.floor(Math.random() * b.length)).after(cadfdbe3e199);
            break;
          case 2:
            "" != eeec96205bec &&
              ((b = !0),
              "http" == eeec96205bec.toLowerCase().substring(0, 4)
                ? window.location.href == eeec96205bec && (b = !1)
                : window.location.pathname == eeec96205bec && (b = !1),
              b
                ? ((e = AiCookies.get(ffade8845a25)),
                  "undefined" == typeof e &&
                    ((b = new Date()),
                    b.setTime(b.getTime() + 1e4),
                    AiCookies.set(ffade8845a25, window.location.href, {
                      expires: b,
                      path: "/",
                    }),
                    window.location.replace(eeec96205bec)))
                : AiCookies.remove(ffade8845a25, { path: "/" }));
        }
      })(jQuery));
  },
  fecbe7cdf9e0 = function (a) {
    setTimeout(function () {
      cbab5565e289 || fecbe7cdf9e0_actions(a);
    }, 200);
  },
  fecbe7cdf9e0_actions = function (a) {
    efaeaa624552++;
    cbab5565e289 ||
      4 != efaeaa624552 ||
      (jQuery(aded53b9("Ym9keQ==")).attr(
        aded53b9("ZGF0YS02MThkY2I3MzE0Nzk3MzY0NzFmMDdlNWVlNzQ0NTIzYQ=="),
        aded53b9("Y2xlYXI=")
      ),
      (ai_dummy = 11),
      0,
      (ai_dummy = 14),
      eddc405b());
  };
0 &&
  jQuery(document).ready(function () {
    ccaf7d0d6945(0);
  });
jQuery(document).ready(function (a) {
  a(window).ready(function () {
    dcbb969b62a1 = "undefined" !== typeof ffff176479d3;
    setTimeout(function () {
      a("#ai-adb-bar").click(function () {
        AiCookies.remove(adcd35b30166, { path: "/" });
        AiCookies.remove(feceb96cab01, { path: "/" });
        0;
        ai_dummy = 15;
      });
    }, 2);
    if ((!cbab5565e289 || dcbb969b62a1) && "" != fadbf7ced3c5) {
      var c = 0,
        d = 0,
        b = fadbf7ced3c5.split(",");
      a.each(b, function (g) {
        b[g] = b[g].trim();
        0 != a(b[g]).length &&
          a(b[g]).each(function (e) {
            var f = a(this).outerHeight();
            e = a(this).find(".ai-attributes");
            e.length &&
              e.each(function () {
                f >= a(this).outerHeight() && (f -= a(this).outerHeight());
              });
            c++;
            if (
              0 === f &&
              (a(document).ready(function () {
                (cbab5565e289 && !dcbb969b62a1) || ccaf7d0d6945(4);
              }),
              d++,
              !dcbb969b62a1)
            )
              return !1;
          });
      });
      0 != c &&
        0 == d &&
        a(document).ready(function () {
          fecbe7cdf9e0(4);
        });
    }
  });
});
function acdd8671cc65(a, c) {
  var d = document.createElement("script");
  d.src =
    "https://blog.facialix.com/wp-content/uploads/ad-inserter/13a5196f39/" +
    a +
    ".js?ver=" +
    new Date().getTime();
  var b = document.getElementsByTagName("head")[0],
    g = !1;
  d.onerror = function () {
    c && c();
    d.onerror = null;
    b.removeChild(d);
  };
  d.onload = d.onreadystatechange = function () {
    g ||
      (this.readyState &&
        "loaded" != this.readyState &&
        "complete" != this.readyState) ||
      ((g = !0),
      c && c(),
      (d.onload = d.onreadystatechange = null),
      b.removeChild(d));
  };
  b.appendChild(d);
}
jQuery(window).on("load", function () {
  function a() {
    document.getElementById("cddc7a205b72")
      ? fecbe7cdf9e0(1)
      : (cbab5565e289 && !dcbb969b62a1) || ccaf7d0d6945(1);
  }
  function c() {
    "undefined" == typeof window.cbeab96fd2b5
      ? (!cbab5565e289 || dcbb969b62a1) && ccaf7d0d6945(2)
      : fecbe7cdf9e0(2);
  }
  function d() {
    var b = jQuery(aded53b9("I2FpLWFkYi1nYQ=="));
    b.length &&
      (b.width() * b.height()
        ? fecbe7cdf9e0(5)
        : (!cbab5565e289 || dcbb969b62a1) && ccaf7d0d6945(5));
    b = jQuery(aded53b9("I2FpLWFkYi1tbg=="));
    b.length &&
      (b.width() * b.height()
        ? fecbe7cdf9e0(6)
        : (!cbab5565e289 || dcbb969b62a1) && ccaf7d0d6945(6));
    b = jQuery(aded53b9("I2FpLWFkYi1kYmxjbGs="));
    b.length &&
      (b.width() * b.height()
        ? fecbe7cdf9e0(8)
        : (!cbab5565e289 || dcbb969b62a1) && ccaf7d0d6945(8));
  }
  setTimeout(function () {
    d();
    setTimeout(function () {
      cbab5565e289 ||
        setTimeout(function () {
          d();
        }, 400);
    }, 5);
  }, 1050);
  setTimeout(function () {
    var b = "undefined" !== typeof ffff176479d3;
    jQuery(aded53b9("I2FpLWFkYi1hZHM=")).length &&
      (document.getElementById("cddc7a205b72") ? a() : acdd8671cc65("ads", a));
    jQuery(aded53b9("I2FpLWFkYi1zcG9uc29ycw==")).length &&
      ("undefined" == typeof window.cbeab96fd2b5
        ? acdd8671cc65("sponsors", c)
        : c());
    var g = aded53b9("I2Jhbm5lci1hZHZlcnQtY29udGFpbmVy"),
      e = aded53b9("I2Jhbm5lci1hZHZlcnQtY29udGFpbmVyIGltZw==");
    jQuery(g).length &&
      0 < jQuery(e).length &&
      (0 === jQuery(e).outerHeight()
        ? (!cbab5565e289 || b) && ccaf7d0d6945(3)
        : fecbe7cdf9e0(3),
      jQuery(e).remove());
    jQuery(aded53b9("I2FpLWFkYi1iYW5uZXI=")).length &&
      ("undefined" == typeof window.ad_banner
        ? (!cbab5565e289 || dcbb969b62a1) && ccaf7d0d6945(11)
        : fecbe7cdf9e0(11));
    jQuery(aded53b9("I2FpLWFkYi0zMDB4MjUw")).length &&
      ("undefined" == typeof window.ad_300x250
        ? (!cbab5565e289 || dcbb969b62a1) && ccaf7d0d6945(12)
        : fecbe7cdf9e0(12));
  }, 1150);
});
jQuery(window).on("load", function () {
  function b() {
    if ("undefined" === typeof daeea257a18c)
      (cbab5565e289 && !dcbb969b62a1) || ccaf7d0d6945(9);
    else {
      var a = !1;
      daeea257a18c.onDetected(function () {
        (cbab5565e289 && !dcbb969b62a1) || a || ((a = !0), ccaf7d0d6945(9));
      });
      daeea257a18c.onNotDetected(function () {
        a || ((a = !0), fecbe7cdf9e0(9));
      });
      daeea257a18c.check();
    }
  }
  function c() {
    if ("undefined" === typeof edcdaac2cbc7)
      (cbab5565e289 && !dcbb969b62a1) || ccaf7d0d6945(10);
    else {
      var a = !1;
      edcdaac2cbc7
        .on(!0, function () {
          (cbab5565e289 && !dcbb969b62a1) || a || ((a = !0), ccaf7d0d6945(10));
        })
        .on(!1, function () {
          a || ((a = !0), fecbe7cdf9e0(10));
        });
      edcdaac2cbc7.check();
    }
    ebad0dce60fb = edcdaac2cbc7 = void 0;
  }
  setTimeout(function () {
    jQuery(aded53b9("I2FpLWFkYi1hZHZlcnRpc2luZw==")).length &&
      ("undefined" === typeof daeea257a18c
        ? acdd8671cc65("advertising", b)
        : b());
    jQuery(aded53b9("I2FpLWFkYi1hZHZlcnRz")).length &&
      ("undefined" === typeof edcdaac2cbc7 ? acdd8671cc65("adverts", c) : c());
  }, 1100);
});

ai_js_code = true;
