function xb(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Hv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Pr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Kv = { exports: {} },
  Jl = {},
  Gv = { exports: {} },
  we = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs = Symbol.for("react.element"),
  bb = Symbol.for("react.portal"),
  wb = Symbol.for("react.fragment"),
  Rb = Symbol.for("react.strict_mode"),
  Cb = Symbol.for("react.profiler"),
  _b = Symbol.for("react.provider"),
  Eb = Symbol.for("react.context"),
  kb = Symbol.for("react.forward_ref"),
  Tb = Symbol.for("react.suspense"),
  Pb = Symbol.for("react.memo"),
  Nb = Symbol.for("react.lazy"),
  Qh = Symbol.iterator;
function $b(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qh && e[Qh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qv = Object.assign,
  Xv = {};
function hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xv),
    (this.updater = n || qv);
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yv() {}
Yv.prototype = hi.prototype;
function Jf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xv),
    (this.updater = n || qv);
}
var ep = (Jf.prototype = new Yv());
ep.constructor = Jf;
Qv(ep, hi.prototype);
ep.isPureReactComponent = !0;
var Xh = Array.isArray,
  Zv = Object.prototype.hasOwnProperty,
  tp = { current: null },
  Jv = { key: !0, ref: !0, __self: !0, __source: !0 };
function ey(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Zv.call(t, r) && !Jv.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Xs,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: tp.current,
  };
}
function Ab(e, t) {
  return {
    $$typeof: Xs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function np(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xs;
}
function Lb(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yh = /\/+/g;
function Nc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lb("" + e.key)
    : t.toString(36);
}
function Ka(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xs:
          case bb:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Nc(s, 0) : r),
      Xh(o)
        ? ((n = ""),
          e != null && (n = e.replace(Yh, "$&/") + "/"),
          Ka(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (np(o) &&
            (o = Ab(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Yh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Xh(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Nc(i, a);
      s += Ka(i, t, n, l, o);
    }
  else if (((l = $b(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Nc(i, a++)), (s += Ka(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ya(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ka(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Mb(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var At = { current: null },
  Ga = { transition: null },
  Ob = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: Ga,
    ReactCurrentOwner: tp,
  };
function ty() {
  throw Error("act(...) is not supported in production builds of React.");
}
we.Children = {
  map: ya,
  forEach: function (e, t, n) {
    ya(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ya(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ya(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!np(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
we.Component = hi;
we.Fragment = wb;
we.Profiler = Cb;
we.PureComponent = Jf;
we.StrictMode = Rb;
we.Suspense = Tb;
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ob;
we.act = ty;
we.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Qv({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = tp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Zv.call(t, l) &&
        !Jv.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Xs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
we.createContext = function (e) {
  return (
    (e = {
      $$typeof: Eb,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _b, _context: e }),
    (e.Consumer = e)
  );
};
we.createElement = ey;
we.createFactory = function (e) {
  var t = ey.bind(null, e);
  return (t.type = e), t;
};
we.createRef = function () {
  return { current: null };
};
we.forwardRef = function (e) {
  return { $$typeof: kb, render: e };
};
we.isValidElement = np;
we.lazy = function (e) {
  return { $$typeof: Nb, _payload: { _status: -1, _result: e }, _init: Mb };
};
we.memo = function (e, t) {
  return { $$typeof: Pb, type: e, compare: t === void 0 ? null : t };
};
we.startTransition = function (e) {
  var t = Ga.transition;
  Ga.transition = {};
  try {
    e();
  } finally {
    Ga.transition = t;
  }
};
we.unstable_act = ty;
we.useCallback = function (e, t) {
  return At.current.useCallback(e, t);
};
we.useContext = function (e) {
  return At.current.useContext(e);
};
we.useDebugValue = function () {};
we.useDeferredValue = function (e) {
  return At.current.useDeferredValue(e);
};
we.useEffect = function (e, t) {
  return At.current.useEffect(e, t);
};
we.useId = function () {
  return At.current.useId();
};
we.useImperativeHandle = function (e, t, n) {
  return At.current.useImperativeHandle(e, t, n);
};
we.useInsertionEffect = function (e, t) {
  return At.current.useInsertionEffect(e, t);
};
we.useLayoutEffect = function (e, t) {
  return At.current.useLayoutEffect(e, t);
};
we.useMemo = function (e, t) {
  return At.current.useMemo(e, t);
};
we.useReducer = function (e, t, n) {
  return At.current.useReducer(e, t, n);
};
we.useRef = function (e) {
  return At.current.useRef(e);
};
we.useState = function (e) {
  return At.current.useState(e);
};
we.useSyncExternalStore = function (e, t, n) {
  return At.current.useSyncExternalStore(e, t, n);
};
we.useTransition = function () {
  return At.current.useTransition();
};
we.version = "18.3.1";
Gv.exports = we;
var S = Gv.exports;
const Ee = Hv(S),
  pl = xb({ __proto__: null, default: Ee }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ib = S,
  Fb = Symbol.for("react.element"),
  Bb = Symbol.for("react.fragment"),
  Db = Object.prototype.hasOwnProperty,
  zb = Ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jb = { key: !0, ref: !0, __self: !0, __source: !0 };
function ny(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Db.call(t, r) && !jb.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Fb,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: zb.current,
  };
}
Jl.Fragment = Bb;
Jl.jsx = ny;
Jl.jsxs = ny;
Kv.exports = Jl;
var w = Kv.exports,
  Td = {},
  ry = { exports: {} },
  en = {},
  oy = { exports: {} },
  iy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, V) {
    var F = $.length;
    $.push(V);
    e: for (; 0 < F; ) {
      var J = (F - 1) >>> 1,
        k = $[J];
      if (0 < o(k, V)) ($[J] = V), ($[F] = k), (F = J);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var V = $[0],
      F = $.pop();
    if (F !== V) {
      $[0] = F;
      e: for (var J = 0, k = $.length, O = k >>> 1; J < O; ) {
        var M = 2 * (J + 1) - 1,
          Z = $[M],
          U = M + 1,
          ie = $[U];
        if (0 > o(Z, F))
          U < k && 0 > o(ie, Z)
            ? (($[J] = ie), ($[U] = F), (J = U))
            : (($[J] = Z), ($[M] = F), (J = M));
        else if (U < k && 0 > o(ie, F)) ($[J] = ie), ($[U] = F), (J = U);
        else break e;
      }
    }
    return V;
  }
  function o($, V) {
    var F = $.sortIndex - V.sortIndex;
    return F !== 0 ? F : $.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    h = !1,
    v = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m($) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= $)
        r(u), (V.sortIndex = V.expirationTime), t(l, V);
      else break;
      V = n(u);
    }
  }
  function x($) {
    if (((v = !1), m($), !h))
      if (n(l) !== null) (h = !0), H(C);
      else {
        var V = n(u);
        V !== null && Q(x, V.startTime - $);
      }
  }
  function C($, V) {
    (h = !1), v && ((v = !1), g(N), (N = -1)), (y = !0);
    var F = f;
    try {
      for (
        m(V), d = n(l);
        d !== null && (!(d.expirationTime > V) || ($ && !j()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var k = J(d.expirationTime <= V);
          (V = e.unstable_now()),
            typeof k == "function" ? (d.callback = k) : d === n(l) && r(l),
            m(V);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var O = !0;
      else {
        var M = n(u);
        M !== null && Q(x, M.startTime - V), (O = !1);
      }
      return O;
    } finally {
      (d = null), (f = F), (y = !1);
    }
  }
  var E = !1,
    _ = null,
    N = -1,
    I = 5,
    A = -1;
  function j() {
    return !(e.unstable_now() - A < I);
  }
  function G() {
    if (_ !== null) {
      var $ = e.unstable_now();
      A = $;
      var V = !0;
      try {
        V = _(!0, $);
      } finally {
        V ? D() : ((E = !1), (_ = null));
      }
    } else E = !1;
  }
  var D;
  if (typeof p == "function")
    D = function () {
      p(G);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      K = W.port2;
    (W.port1.onmessage = G),
      (D = function () {
        K.postMessage(null);
      });
  } else
    D = function () {
      R(G, 0);
    };
  function H($) {
    (_ = $), E || ((E = !0), D());
  }
  function Q($, V) {
    N = R(function () {
      $(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || y || ((h = !0), H(C));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function ($) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = f;
      }
      var F = f;
      f = V;
      try {
        return $();
      } finally {
        f = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, V) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var F = f;
      f = $;
      try {
        return V();
      } finally {
        f = F;
      }
    }),
    (e.unstable_scheduleCallback = function ($, V, F) {
      var J = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? J + F : J))
          : (F = J),
        $)
      ) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return (
        (k = F + k),
        ($ = {
          id: c++,
          callback: V,
          priorityLevel: $,
          startTime: F,
          expirationTime: k,
          sortIndex: -1,
        }),
        F > J
          ? (($.sortIndex = F),
            t(u, $),
            n(l) === null &&
              $ === n(u) &&
              (v ? (g(N), (N = -1)) : (v = !0), Q(x, F - J)))
          : (($.sortIndex = k), t(l, $), h || y || ((h = !0), H(C))),
        $
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function ($) {
      var V = f;
      return function () {
        var F = f;
        f = V;
        try {
          return $.apply(this, arguments);
        } finally {
          f = F;
        }
      };
    });
})(iy);
oy.exports = iy;
var Ub = oy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vb = S,
  Jt = Ub;
function z(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sy = new Set(),
  Rs = {};
function po(e, t) {
  Zo(e, t), Zo(e + "Capture", t);
}
function Zo(e, t) {
  for (Rs[e] = t, e = 0; e < t.length; e++) sy.add(t[e]);
}
var Zn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pd = Object.prototype.hasOwnProperty,
  Wb =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Zh = {},
  Jh = {};
function Hb(e) {
  return Pd.call(Jh, e)
    ? !0
    : Pd.call(Zh, e)
    ? !1
    : Wb.test(e)
    ? (Jh[e] = !0)
    : ((Zh[e] = !0), !1);
}
function Kb(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gb(e, t, n, r) {
  if (t === null || typeof t > "u" || Kb(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Lt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  St[t] = new Lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  St[e] = new Lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  St[e] = new Lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  St[e] = new Lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  St[e] = new Lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  St[e] = new Lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  St[e] = new Lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rp = /[\-:]([a-z])/g;
function op(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rp, op);
    St[t] = new Lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rp, op);
    St[t] = new Lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(rp, op);
  St[t] = new Lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  St[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  St[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ip(e, t, n, r) {
  var o = St.hasOwnProperty(t) ? St[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gb(t, n, o, r) && (n = null),
    r || o === null
      ? Hb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nr = Vb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sa = Symbol.for("react.element"),
  Po = Symbol.for("react.portal"),
  No = Symbol.for("react.fragment"),
  sp = Symbol.for("react.strict_mode"),
  Nd = Symbol.for("react.profiler"),
  ay = Symbol.for("react.provider"),
  ly = Symbol.for("react.context"),
  ap = Symbol.for("react.forward_ref"),
  $d = Symbol.for("react.suspense"),
  Ad = Symbol.for("react.suspense_list"),
  lp = Symbol.for("react.memo"),
  ur = Symbol.for("react.lazy"),
  uy = Symbol.for("react.offscreen"),
  em = Symbol.iterator;
function Mi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (em && e[em]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ze = Object.assign,
  $c;
function es(e) {
  if ($c === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $c = (t && t[1]) || "";
    }
  return (
    `
` +
    $c +
    e
  );
}
var Ac = !1;
function Lc(e, t) {
  if (!e || Ac) return "";
  Ac = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ac = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? es(e) : "";
}
function qb(e) {
  switch (e.tag) {
    case 5:
      return es(e.type);
    case 16:
      return es("Lazy");
    case 13:
      return es("Suspense");
    case 19:
      return es("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Lc(e.type, !1)), e;
    case 11:
      return (e = Lc(e.type.render, !1)), e;
    case 1:
      return (e = Lc(e.type, !0)), e;
    default:
      return "";
  }
}
function Ld(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case No:
      return "Fragment";
    case Po:
      return "Portal";
    case Nd:
      return "Profiler";
    case sp:
      return "StrictMode";
    case $d:
      return "Suspense";
    case Ad:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ly:
        return (e.displayName || "Context") + ".Consumer";
      case ay:
        return (e._context.displayName || "Context") + ".Provider";
      case ap:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lp:
        return (
          (t = e.displayName || null), t !== null ? t : Ld(e.type) || "Memo"
        );
      case ur:
        (t = e._payload), (e = e._init);
        try {
          return Ld(e(t));
        } catch {}
    }
  return null;
}
function Qb(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ld(t);
    case 8:
      return t === sp ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function cy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xb(e) {
  var t = cy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xa(e) {
  e._valueTracker || (e._valueTracker = Xb(e));
}
function dy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = cy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Md(e, t) {
  var n = t.checked;
  return Ze({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function tm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function fy(e, t) {
  (t = t.checked), t != null && ip(e, "checked", t, !1);
}
function Od(e, t) {
  fy(e, t);
  var n = kr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Id(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Id(e, t.type, kr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function nm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Id(e, t, n) {
  (t !== "number" || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ts = Array.isArray;
function Uo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return Ze({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function rm(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92));
      if (ts(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kr(n) };
}
function py(e, t) {
  var n = kr(t.value),
    r = kr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function om(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ba,
  my = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ba = ba || document.createElement("div"),
          ba.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ba.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Cs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ls = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ls).forEach(function (e) {
  Yb.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ls[t] = ls[e]);
  });
});
function gy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ls.hasOwnProperty(e) && ls[e])
    ? ("" + t).trim()
    : t + "px";
}
function vy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = gy(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Zb = Ze(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Dd(e, t) {
  if (t) {
    if (Zb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function zd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jd = null;
function up(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ud = null,
  Vo = null,
  Wo = null;
function im(e) {
  if ((e = Js(e))) {
    if (typeof Ud != "function") throw Error(z(280));
    var t = e.stateNode;
    t && ((t = ou(t)), Ud(e.stateNode, e.type, t));
  }
}
function yy(e) {
  Vo ? (Wo ? Wo.push(e) : (Wo = [e])) : (Vo = e);
}
function Sy() {
  if (Vo) {
    var e = Vo,
      t = Wo;
    if (((Wo = Vo = null), im(e), t)) for (e = 0; e < t.length; e++) im(t[e]);
  }
}
function xy(e, t) {
  return e(t);
}
function by() {}
var Mc = !1;
function wy(e, t, n) {
  if (Mc) return e(t, n);
  Mc = !0;
  try {
    return xy(e, t, n);
  } finally {
    (Mc = !1), (Vo !== null || Wo !== null) && (by(), Sy());
  }
}
function _s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ou(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(z(231, t, typeof n));
  return n;
}
var Vd = !1;
if (Zn)
  try {
    var Oi = {};
    Object.defineProperty(Oi, "passive", {
      get: function () {
        Vd = !0;
      },
    }),
      window.addEventListener("test", Oi, Oi),
      window.removeEventListener("test", Oi, Oi);
  } catch {
    Vd = !1;
  }
function Jb(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var us = !1,
  ml = null,
  gl = !1,
  Wd = null,
  ew = {
    onError: function (e) {
      (us = !0), (ml = e);
    },
  };
function tw(e, t, n, r, o, i, s, a, l) {
  (us = !1), (ml = null), Jb.apply(ew, arguments);
}
function nw(e, t, n, r, o, i, s, a, l) {
  if ((tw.apply(this, arguments), us)) {
    if (us) {
      var u = ml;
      (us = !1), (ml = null);
    } else throw Error(z(198));
    gl || ((gl = !0), (Wd = u));
  }
}
function ho(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ry(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function sm(e) {
  if (ho(e) !== e) throw Error(z(188));
}
function rw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ho(e)), t === null)) throw Error(z(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return sm(o), e;
        if (i === r) return sm(o), t;
        i = i.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? e : t;
}
function Cy(e) {
  return (e = rw(e)), e !== null ? _y(e) : null;
}
function _y(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _y(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ey = Jt.unstable_scheduleCallback,
  am = Jt.unstable_cancelCallback,
  ow = Jt.unstable_shouldYield,
  iw = Jt.unstable_requestPaint,
  ot = Jt.unstable_now,
  sw = Jt.unstable_getCurrentPriorityLevel,
  cp = Jt.unstable_ImmediatePriority,
  ky = Jt.unstable_UserBlockingPriority,
  vl = Jt.unstable_NormalPriority,
  aw = Jt.unstable_LowPriority,
  Ty = Jt.unstable_IdlePriority,
  eu = null,
  zn = null;
function lw(e) {
  if (zn && typeof zn.onCommitFiberRoot == "function")
    try {
      zn.onCommitFiberRoot(eu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Pn = Math.clz32 ? Math.clz32 : dw,
  uw = Math.log,
  cw = Math.LN2;
function dw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((uw(e) / cw) | 0)) | 0;
}
var wa = 64,
  Ra = 4194304;
function ns(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = ns(a)) : ((i &= s), i !== 0 && (r = ns(i)));
  } else (s = n & ~o), s !== 0 ? (r = ns(s)) : i !== 0 && (r = ns(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Pn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function fw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function pw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Pn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = fw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Hd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Py() {
  var e = wa;
  return (wa <<= 1), !(wa & 4194240) && (wa = 64), e;
}
function Oc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Pn(t)),
    (e[t] = n);
}
function hw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Pn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function dp(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Pn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Ae = 0;
function Ny(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $y,
  fp,
  Ay,
  Ly,
  My,
  Kd = !1,
  Ca = [],
  yr = null,
  Sr = null,
  xr = null,
  Es = new Map(),
  ks = new Map(),
  fr = [],
  mw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function lm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yr = null;
      break;
    case "dragenter":
    case "dragleave":
      Sr = null;
      break;
    case "mouseover":
    case "mouseout":
      xr = null;
      break;
    case "pointerover":
    case "pointerout":
      Es.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ks.delete(t.pointerId);
  }
}
function Ii(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Js(t)), t !== null && fp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gw(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (yr = Ii(yr, e, t, n, r, o)), !0;
    case "dragenter":
      return (Sr = Ii(Sr, e, t, n, r, o)), !0;
    case "mouseover":
      return (xr = Ii(xr, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Es.set(i, Ii(Es.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), ks.set(i, Ii(ks.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Oy(e) {
  var t = Hr(e.target);
  if (t !== null) {
    var n = ho(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ry(n)), t !== null)) {
          (e.blockedOn = t),
            My(e.priority, function () {
              Ay(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function qa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jd = r), n.target.dispatchEvent(r), (jd = null);
    } else return (t = Js(n)), t !== null && fp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function um(e, t, n) {
  qa(e) && n.delete(t);
}
function vw() {
  (Kd = !1),
    yr !== null && qa(yr) && (yr = null),
    Sr !== null && qa(Sr) && (Sr = null),
    xr !== null && qa(xr) && (xr = null),
    Es.forEach(um),
    ks.forEach(um);
}
function Fi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Kd ||
      ((Kd = !0),
      Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority, vw)));
}
function Ts(e) {
  function t(o) {
    return Fi(o, e);
  }
  if (0 < Ca.length) {
    Fi(Ca[0], e);
    for (var n = 1; n < Ca.length; n++) {
      var r = Ca[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    yr !== null && Fi(yr, e),
      Sr !== null && Fi(Sr, e),
      xr !== null && Fi(xr, e),
      Es.forEach(t),
      ks.forEach(t),
      n = 0;
    n < fr.length;
    n++
  )
    (r = fr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < fr.length && ((n = fr[0]), n.blockedOn === null); )
    Oy(n), n.blockedOn === null && fr.shift();
}
var Ho = nr.ReactCurrentBatchConfig,
  Sl = !0;
function yw(e, t, n, r) {
  var o = Ae,
    i = Ho.transition;
  Ho.transition = null;
  try {
    (Ae = 1), pp(e, t, n, r);
  } finally {
    (Ae = o), (Ho.transition = i);
  }
}
function Sw(e, t, n, r) {
  var o = Ae,
    i = Ho.transition;
  Ho.transition = null;
  try {
    (Ae = 4), pp(e, t, n, r);
  } finally {
    (Ae = o), (Ho.transition = i);
  }
}
function pp(e, t, n, r) {
  if (Sl) {
    var o = Gd(e, t, n, r);
    if (o === null) Hc(e, t, r, xl, n), lm(e, r);
    else if (gw(o, e, t, n, r)) r.stopPropagation();
    else if ((lm(e, r), t & 4 && -1 < mw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Js(o);
        if (
          (i !== null && $y(i),
          (i = Gd(e, t, n, r)),
          i === null && Hc(e, t, r, xl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Hc(e, t, r, null, n);
  }
}
var xl = null;
function Gd(e, t, n, r) {
  if (((xl = null), (e = up(r)), (e = Hr(e)), e !== null))
    if (((t = ho(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ry(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (xl = e), null;
}
function Iy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sw()) {
        case cp:
          return 1;
        case ky:
          return 4;
        case vl:
        case aw:
          return 16;
        case Ty:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hr = null,
  hp = null,
  Qa = null;
function Fy() {
  if (Qa) return Qa;
  var e,
    t = hp,
    n = t.length,
    r,
    o = "value" in hr ? hr.value : hr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Qa = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Xa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _a() {
  return !0;
}
function cm() {
  return !1;
}
function tn(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? _a
        : cm),
      (this.isPropagationStopped = cm),
      this
    );
  }
  return (
    Ze(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _a));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _a));
      },
      persist: function () {},
      isPersistent: _a,
    }),
    t
  );
}
var mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mp = tn(mi),
  Zs = Ze({}, mi, { view: 0, detail: 0 }),
  xw = tn(Zs),
  Ic,
  Fc,
  Bi,
  tu = Ze({}, Zs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gp,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bi &&
            (Bi && e.type === "mousemove"
              ? ((Ic = e.screenX - Bi.screenX), (Fc = e.screenY - Bi.screenY))
              : (Fc = Ic = 0),
            (Bi = e)),
          Ic);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fc;
    },
  }),
  dm = tn(tu),
  bw = Ze({}, tu, { dataTransfer: 0 }),
  ww = tn(bw),
  Rw = Ze({}, Zs, { relatedTarget: 0 }),
  Bc = tn(Rw),
  Cw = Ze({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _w = tn(Cw),
  Ew = Ze({}, mi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kw = tn(Ew),
  Tw = Ze({}, mi, { data: 0 }),
  fm = tn(Tw),
  Pw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $w = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Aw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $w[e]) ? !!t[e] : !1;
}
function gp() {
  return Aw;
}
var Lw = Ze({}, Zs, {
    key: function (e) {
      if (e.key) {
        var t = Pw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gp,
    charCode: function (e) {
      return e.type === "keypress" ? Xa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mw = tn(Lw),
  Ow = Ze({}, tu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pm = tn(Ow),
  Iw = Ze({}, Zs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gp,
  }),
  Fw = tn(Iw),
  Bw = Ze({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dw = tn(Bw),
  zw = Ze({}, tu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jw = tn(zw),
  Uw = [9, 13, 27, 32],
  vp = Zn && "CompositionEvent" in window,
  cs = null;
Zn && "documentMode" in document && (cs = document.documentMode);
var Vw = Zn && "TextEvent" in window && !cs,
  By = Zn && (!vp || (cs && 8 < cs && 11 >= cs)),
  hm = " ",
  mm = !1;
function Dy(e, t) {
  switch (e) {
    case "keyup":
      return Uw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zy(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $o = !1;
function Ww(e, t) {
  switch (e) {
    case "compositionend":
      return zy(t);
    case "keypress":
      return t.which !== 32 ? null : ((mm = !0), hm);
    case "textInput":
      return (e = t.data), e === hm && mm ? null : e;
    default:
      return null;
  }
}
function Hw(e, t) {
  if ($o)
    return e === "compositionend" || (!vp && Dy(e, t))
      ? ((e = Fy()), (Qa = hp = hr = null), ($o = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return By && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function gm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kw[e.type] : t === "textarea";
}
function jy(e, t, n, r) {
  yy(r),
    (t = bl(t, "onChange")),
    0 < t.length &&
      ((n = new mp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ds = null,
  Ps = null;
function Gw(e) {
  Zy(e, 0);
}
function nu(e) {
  var t = Mo(e);
  if (dy(t)) return e;
}
function qw(e, t) {
  if (e === "change") return t;
}
var Uy = !1;
if (Zn) {
  var Dc;
  if (Zn) {
    var zc = "oninput" in document;
    if (!zc) {
      var vm = document.createElement("div");
      vm.setAttribute("oninput", "return;"),
        (zc = typeof vm.oninput == "function");
    }
    Dc = zc;
  } else Dc = !1;
  Uy = Dc && (!document.documentMode || 9 < document.documentMode);
}
function ym() {
  ds && (ds.detachEvent("onpropertychange", Vy), (Ps = ds = null));
}
function Vy(e) {
  if (e.propertyName === "value" && nu(Ps)) {
    var t = [];
    jy(t, Ps, e, up(e)), wy(Gw, t);
  }
}
function Qw(e, t, n) {
  e === "focusin"
    ? (ym(), (ds = t), (Ps = n), ds.attachEvent("onpropertychange", Vy))
    : e === "focusout" && ym();
}
function Xw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return nu(Ps);
}
function Yw(e, t) {
  if (e === "click") return nu(t);
}
function Zw(e, t) {
  if (e === "input" || e === "change") return nu(t);
}
function Jw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var An = typeof Object.is == "function" ? Object.is : Jw;
function Ns(e, t) {
  if (An(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pd.call(t, o) || !An(e[o], t[o])) return !1;
  }
  return !0;
}
function Sm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xm(e, t) {
  var n = Sm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Sm(n);
  }
}
function Wy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hy() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function yp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function eR(e) {
  var t = Hy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = xm(n, i));
        var s = xm(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tR = Zn && "documentMode" in document && 11 >= document.documentMode,
  Ao = null,
  qd = null,
  fs = null,
  Qd = !1;
function bm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qd ||
    Ao == null ||
    Ao !== hl(r) ||
    ((r = Ao),
    "selectionStart" in r && yp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (fs && Ns(fs, r)) ||
      ((fs = r),
      (r = bl(qd, "onSelect")),
      0 < r.length &&
        ((t = new mp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ao))));
}
function Ea(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Lo = {
    animationend: Ea("Animation", "AnimationEnd"),
    animationiteration: Ea("Animation", "AnimationIteration"),
    animationstart: Ea("Animation", "AnimationStart"),
    transitionend: Ea("Transition", "TransitionEnd"),
  },
  jc = {},
  Ky = {};
Zn &&
  ((Ky = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Lo.animationend.animation,
    delete Lo.animationiteration.animation,
    delete Lo.animationstart.animation),
  "TransitionEvent" in window || delete Lo.transitionend.transition);
function ru(e) {
  if (jc[e]) return jc[e];
  if (!Lo[e]) return e;
  var t = Lo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ky) return (jc[e] = t[n]);
  return e;
}
var Gy = ru("animationend"),
  qy = ru("animationiteration"),
  Qy = ru("animationstart"),
  Xy = ru("transitionend"),
  Yy = new Map(),
  wm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nr(e, t) {
  Yy.set(e, t), po(t, [e]);
}
for (var Uc = 0; Uc < wm.length; Uc++) {
  var Vc = wm[Uc],
    nR = Vc.toLowerCase(),
    rR = Vc[0].toUpperCase() + Vc.slice(1);
  Nr(nR, "on" + rR);
}
Nr(Gy, "onAnimationEnd");
Nr(qy, "onAnimationIteration");
Nr(Qy, "onAnimationStart");
Nr("dblclick", "onDoubleClick");
Nr("focusin", "onFocus");
Nr("focusout", "onBlur");
Nr(Xy, "onTransitionEnd");
Zo("onMouseEnter", ["mouseout", "mouseover"]);
Zo("onMouseLeave", ["mouseout", "mouseover"]);
Zo("onPointerEnter", ["pointerout", "pointerover"]);
Zo("onPointerLeave", ["pointerout", "pointerover"]);
po(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
po(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
po("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
po(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
po(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
po(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var rs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oR = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
function Rm(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nw(r, t, void 0, e), (e.currentTarget = null);
}
function Zy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Rm(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Rm(o, a, u), (i = l);
        }
    }
  }
  if (gl) throw ((e = Wd), (gl = !1), (Wd = null), e);
}
function Ve(e, t) {
  var n = t[ef];
  n === void 0 && (n = t[ef] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Jy(t, e, 2, !1), n.add(r));
}
function Wc(e, t, n) {
  var r = 0;
  t && (r |= 4), Jy(n, e, r, t);
}
var ka = "_reactListening" + Math.random().toString(36).slice(2);
function $s(e) {
  if (!e[ka]) {
    (e[ka] = !0),
      sy.forEach(function (n) {
        n !== "selectionchange" && (oR.has(n) || Wc(n, !1, e), Wc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ka] || ((t[ka] = !0), Wc("selectionchange", !1, t));
  }
}
function Jy(e, t, n, r) {
  switch (Iy(t)) {
    case 1:
      var o = yw;
      break;
    case 4:
      o = Sw;
      break;
    default:
      o = pp;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Vd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Hc(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Hr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  wy(function () {
    var u = i,
      c = up(n),
      d = [];
    e: {
      var f = Yy.get(e);
      if (f !== void 0) {
        var y = mp,
          h = e;
        switch (e) {
          case "keypress":
            if (Xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Mw;
            break;
          case "focusin":
            (h = "focus"), (y = Bc);
            break;
          case "focusout":
            (h = "blur"), (y = Bc);
            break;
          case "beforeblur":
          case "afterblur":
            y = Bc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = dm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ww;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fw;
            break;
          case Gy:
          case qy:
          case Qy:
            y = _w;
            break;
          case Xy:
            y = Dw;
            break;
          case "scroll":
            y = xw;
            break;
          case "wheel":
            y = jw;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = kw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = pm;
        }
        var v = (t & 4) !== 0,
          R = !v && e === "scroll",
          g = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              g !== null && ((x = _s(p, g)), x != null && v.push(As(p, x, m)))),
            R)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((f = new y(f, h, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== jd &&
            (h = n.relatedTarget || n.fromElement) &&
            (Hr(h) || h[Jn]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((h = n.relatedTarget || n.toElement),
              (y = u),
              (h = h ? Hr(h) : null),
              h !== null &&
                ((R = ho(h)), h !== R || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((y = null), (h = u)),
          y !== h)
        ) {
          if (
            ((v = dm),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = pm),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (R = y == null ? f : Mo(y)),
            (m = h == null ? f : Mo(h)),
            (f = new v(x, p + "leave", y, n, c)),
            (f.target = R),
            (f.relatedTarget = m),
            (x = null),
            Hr(c) === u &&
              ((v = new v(g, p + "enter", h, n, c)),
              (v.target = m),
              (v.relatedTarget = R),
              (x = v)),
            (R = x),
            y && h)
          )
            t: {
              for (v = y, g = h, p = 0, m = v; m; m = xo(m)) p++;
              for (m = 0, x = g; x; x = xo(x)) m++;
              for (; 0 < p - m; ) (v = xo(v)), p--;
              for (; 0 < m - p; ) (g = xo(g)), m--;
              for (; p--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = xo(v)), (g = xo(g));
              }
              v = null;
            }
          else v = null;
          y !== null && Cm(d, f, y, v, !1),
            h !== null && R !== null && Cm(d, R, h, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? Mo(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var C = qw;
        else if (gm(f))
          if (Uy) C = Zw;
          else {
            C = Xw;
            var E = Qw;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Yw);
        if (C && (C = C(e, u))) {
          jy(d, C, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Id(f, "number", f.value);
      }
      switch (((E = u ? Mo(u) : window), e)) {
        case "focusin":
          (gm(E) || E.contentEditable === "true") &&
            ((Ao = E), (qd = u), (fs = null));
          break;
        case "focusout":
          fs = qd = Ao = null;
          break;
        case "mousedown":
          Qd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qd = !1), bm(d, n, c);
          break;
        case "selectionchange":
          if (tR) break;
        case "keydown":
        case "keyup":
          bm(d, n, c);
      }
      var _;
      if (vp)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        $o
          ? Dy(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (By &&
          n.locale !== "ko" &&
          ($o || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && $o && (_ = Fy())
            : ((hr = c),
              (hp = "value" in hr ? hr.value : hr.textContent),
              ($o = !0))),
        (E = bl(u, N)),
        0 < E.length &&
          ((N = new fm(N, e, null, n, c)),
          d.push({ event: N, listeners: E }),
          _ ? (N.data = _) : ((_ = zy(n)), _ !== null && (N.data = _)))),
        (_ = Vw ? Ww(e, n) : Hw(e, n)) &&
          ((u = bl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new fm("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    Zy(d, t);
  });
}
function As(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = _s(e, n)),
      i != null && r.unshift(As(e, i, o)),
      (i = _s(e, t)),
      i != null && r.push(As(e, i, o))),
      (e = e.return);
  }
  return r;
}
function xo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = _s(n, i)), l != null && s.unshift(As(n, l, a)))
        : o || ((l = _s(n, i)), l != null && s.push(As(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var iR = /\r\n?/g,
  sR = /\u0000|\uFFFD/g;
function _m(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      iR,
      `
`
    )
    .replace(sR, "");
}
function Ta(e, t, n) {
  if (((t = _m(t)), _m(e) !== t && n)) throw Error(z(425));
}
function wl() {}
var Xd = null,
  Yd = null;
function Zd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Jd = typeof setTimeout == "function" ? setTimeout : void 0,
  aR = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Em = typeof Promise == "function" ? Promise : void 0,
  lR =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Em < "u"
      ? function (e) {
          return Em.resolve(null).then(e).catch(uR);
        }
      : Jd;
function uR(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kc(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ts(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ts(t);
}
function br(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function km(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gi = Math.random().toString(36).slice(2),
  Dn = "__reactFiber$" + gi,
  Ls = "__reactProps$" + gi,
  Jn = "__reactContainer$" + gi,
  ef = "__reactEvents$" + gi,
  cR = "__reactListeners$" + gi,
  dR = "__reactHandles$" + gi;
function Hr(e) {
  var t = e[Dn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jn] || n[Dn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = km(e); e !== null; ) {
          if ((n = e[Dn])) return n;
          e = km(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Js(e) {
  return (
    (e = e[Dn] || e[Jn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function ou(e) {
  return e[Ls] || null;
}
var tf = [],
  Oo = -1;
function $r(e) {
  return { current: e };
}
function He(e) {
  0 > Oo || ((e.current = tf[Oo]), (tf[Oo] = null), Oo--);
}
function Ue(e, t) {
  Oo++, (tf[Oo] = e.current), (e.current = t);
}
var Tr = {},
  Et = $r(Tr),
  Bt = $r(!1),
  eo = Tr;
function Jo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Dt(e) {
  return (e = e.childContextTypes), e != null;
}
function Rl() {
  He(Bt), He(Et);
}
function Tm(e, t, n) {
  if (Et.current !== Tr) throw Error(z(168));
  Ue(Et, t), Ue(Bt, n);
}
function e0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(z(108, Qb(e) || "Unknown", o));
  return Ze({}, n, r);
}
function Cl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tr),
    (eo = Et.current),
    Ue(Et, e),
    Ue(Bt, Bt.current),
    !0
  );
}
function Pm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((e = e0(e, t, eo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      He(Bt),
      He(Et),
      Ue(Et, e))
    : He(Bt),
    Ue(Bt, n);
}
var Gn = null,
  iu = !1,
  Gc = !1;
function t0(e) {
  Gn === null ? (Gn = [e]) : Gn.push(e);
}
function fR(e) {
  (iu = !0), t0(e);
}
function Ar() {
  if (!Gc && Gn !== null) {
    Gc = !0;
    var e = 0,
      t = Ae;
    try {
      var n = Gn;
      for (Ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gn = null), (iu = !1);
    } catch (o) {
      throw (Gn !== null && (Gn = Gn.slice(e + 1)), Ey(cp, Ar), o);
    } finally {
      (Ae = t), (Gc = !1);
    }
  }
  return null;
}
var Io = [],
  Fo = 0,
  _l = null,
  El = 0,
  un = [],
  cn = 0,
  to = null,
  Qn = 1,
  Xn = "";
function Dr(e, t) {
  (Io[Fo++] = El), (Io[Fo++] = _l), (_l = e), (El = t);
}
function n0(e, t, n) {
  (un[cn++] = Qn), (un[cn++] = Xn), (un[cn++] = to), (to = e);
  var r = Qn;
  e = Xn;
  var o = 32 - Pn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Pn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Qn = (1 << (32 - Pn(t) + o)) | (n << o) | r),
      (Xn = i + e);
  } else (Qn = (1 << i) | (n << o) | r), (Xn = e);
}
function Sp(e) {
  e.return !== null && (Dr(e, 1), n0(e, 1, 0));
}
function xp(e) {
  for (; e === _l; )
    (_l = Io[--Fo]), (Io[Fo] = null), (El = Io[--Fo]), (Io[Fo] = null);
  for (; e === to; )
    (to = un[--cn]),
      (un[cn] = null),
      (Xn = un[--cn]),
      (un[cn] = null),
      (Qn = un[--cn]),
      (un[cn] = null);
}
var Xt = null,
  Qt = null,
  qe = !1,
  Tn = null;
function r0(e, t) {
  var n = fn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Nm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xt = e), (Qt = br(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xt = e), (Qt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = to !== null ? { id: Qn, overflow: Xn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = fn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xt = e),
            (Qt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rf(e) {
  if (qe) {
    var t = Qt;
    if (t) {
      var n = t;
      if (!Nm(e, t)) {
        if (nf(e)) throw Error(z(418));
        t = br(n.nextSibling);
        var r = Xt;
        t && Nm(e, t)
          ? r0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (qe = !1), (Xt = e));
      }
    } else {
      if (nf(e)) throw Error(z(418));
      (e.flags = (e.flags & -4097) | 2), (qe = !1), (Xt = e);
    }
  }
}
function $m(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xt = e;
}
function Pa(e) {
  if (e !== Xt) return !1;
  if (!qe) return $m(e), (qe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zd(e.type, e.memoizedProps))),
    t && (t = Qt))
  ) {
    if (nf(e)) throw (o0(), Error(z(418)));
    for (; t; ) r0(e, t), (t = br(t.nextSibling));
  }
  if (($m(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qt = br(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qt = null;
    }
  } else Qt = Xt ? br(e.stateNode.nextSibling) : null;
  return !0;
}
function o0() {
  for (var e = Qt; e; ) e = br(e.nextSibling);
}
function ei() {
  (Qt = Xt = null), (qe = !1);
}
function bp(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
var pR = nr.ReactCurrentBatchConfig;
function Di(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, e));
  }
  return e;
}
function Na(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Am(e) {
  var t = e._init;
  return t(e._payload);
}
function i0(e) {
  function t(g, p) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [p]), (g.flags |= 16)) : m.push(p);
    }
  }
  function n(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function o(g, p) {
    return (g = _r(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, p, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((g.flags |= 2), p) : m)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, p, m, x) {
    return p === null || p.tag !== 6
      ? ((p = ed(m, g.mode, x)), (p.return = g), p)
      : ((p = o(p, m)), (p.return = g), p);
  }
  function l(g, p, m, x) {
    var C = m.type;
    return C === No
      ? c(g, p, m.props.children, x, m.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === ur &&
            Am(C) === p.type))
      ? ((x = o(p, m.props)), (x.ref = Di(g, p, m)), (x.return = g), x)
      : ((x = rl(m.type, m.key, m.props, null, g.mode, x)),
        (x.ref = Di(g, p, m)),
        (x.return = g),
        x);
  }
  function u(g, p, m, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = td(m, g.mode, x)), (p.return = g), p)
      : ((p = o(p, m.children || [])), (p.return = g), p);
  }
  function c(g, p, m, x, C) {
    return p === null || p.tag !== 7
      ? ((p = Xr(m, g.mode, x, C)), (p.return = g), p)
      : ((p = o(p, m)), (p.return = g), p);
  }
  function d(g, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ed("" + p, g.mode, m)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Sa:
          return (
            (m = rl(p.type, p.key, p.props, null, g.mode, m)),
            (m.ref = Di(g, null, p)),
            (m.return = g),
            m
          );
        case Po:
          return (p = td(p, g.mode, m)), (p.return = g), p;
        case ur:
          var x = p._init;
          return d(g, x(p._payload), m);
      }
      if (ts(p) || Mi(p))
        return (p = Xr(p, g.mode, m, null)), (p.return = g), p;
      Na(g, p);
    }
    return null;
  }
  function f(g, p, m, x) {
    var C = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : a(g, p, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Sa:
          return m.key === C ? l(g, p, m, x) : null;
        case Po:
          return m.key === C ? u(g, p, m, x) : null;
        case ur:
          return (C = m._init), f(g, p, C(m._payload), x);
      }
      if (ts(m) || Mi(m)) return C !== null ? null : c(g, p, m, x, null);
      Na(g, m);
    }
    return null;
  }
  function y(g, p, m, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(m) || null), a(p, g, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Sa:
          return (g = g.get(x.key === null ? m : x.key) || null), l(p, g, x, C);
        case Po:
          return (g = g.get(x.key === null ? m : x.key) || null), u(p, g, x, C);
        case ur:
          var E = x._init;
          return y(g, p, m, E(x._payload), C);
      }
      if (ts(x) || Mi(x)) return (g = g.get(m) || null), c(p, g, x, C, null);
      Na(p, x);
    }
    return null;
  }
  function h(g, p, m, x) {
    for (
      var C = null, E = null, _ = p, N = (p = 0), I = null;
      _ !== null && N < m.length;
      N++
    ) {
      _.index > N ? ((I = _), (_ = null)) : (I = _.sibling);
      var A = f(g, _, m[N], x);
      if (A === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && A.alternate === null && t(g, _),
        (p = i(A, p, N)),
        E === null ? (C = A) : (E.sibling = A),
        (E = A),
        (_ = I);
    }
    if (N === m.length) return n(g, _), qe && Dr(g, N), C;
    if (_ === null) {
      for (; N < m.length; N++)
        (_ = d(g, m[N], x)),
          _ !== null &&
            ((p = i(_, p, N)), E === null ? (C = _) : (E.sibling = _), (E = _));
      return qe && Dr(g, N), C;
    }
    for (_ = r(g, _); N < m.length; N++)
      (I = y(_, g, N, m[N], x)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? N : I.key),
          (p = i(I, p, N)),
          E === null ? (C = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        _.forEach(function (j) {
          return t(g, j);
        }),
      qe && Dr(g, N),
      C
    );
  }
  function v(g, p, m, x) {
    var C = Mi(m);
    if (typeof C != "function") throw Error(z(150));
    if (((m = C.call(m)), m == null)) throw Error(z(151));
    for (
      var E = (C = null), _ = p, N = (p = 0), I = null, A = m.next();
      _ !== null && !A.done;
      N++, A = m.next()
    ) {
      _.index > N ? ((I = _), (_ = null)) : (I = _.sibling);
      var j = f(g, _, A.value, x);
      if (j === null) {
        _ === null && (_ = I);
        break;
      }
      e && _ && j.alternate === null && t(g, _),
        (p = i(j, p, N)),
        E === null ? (C = j) : (E.sibling = j),
        (E = j),
        (_ = I);
    }
    if (A.done) return n(g, _), qe && Dr(g, N), C;
    if (_ === null) {
      for (; !A.done; N++, A = m.next())
        (A = d(g, A.value, x)),
          A !== null &&
            ((p = i(A, p, N)), E === null ? (C = A) : (E.sibling = A), (E = A));
      return qe && Dr(g, N), C;
    }
    for (_ = r(g, _); !A.done; N++, A = m.next())
      (A = y(_, g, N, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? N : A.key),
          (p = i(A, p, N)),
          E === null ? (C = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        _.forEach(function (G) {
          return t(g, G);
        }),
      qe && Dr(g, N),
      C
    );
  }
  function R(g, p, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === No &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Sa:
          e: {
            for (var C = m.key, E = p; E !== null; ) {
              if (E.key === C) {
                if (((C = m.type), C === No)) {
                  if (E.tag === 7) {
                    n(g, E.sibling),
                      (p = o(E, m.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ur &&
                    Am(C) === E.type)
                ) {
                  n(g, E.sibling),
                    (p = o(E, m.props)),
                    (p.ref = Di(g, E, m)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, E);
                break;
              } else t(g, E);
              E = E.sibling;
            }
            m.type === No
              ? ((p = Xr(m.props.children, g.mode, x, m.key)),
                (p.return = g),
                (g = p))
              : ((x = rl(m.type, m.key, m.props, null, g.mode, x)),
                (x.ref = Di(g, p, m)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case Po:
          e: {
            for (E = m.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(g, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = td(m, g.mode, x)), (p.return = g), (g = p);
          }
          return s(g);
        case ur:
          return (E = m._init), R(g, p, E(m._payload), x);
      }
      if (ts(m)) return h(g, p, m, x);
      if (Mi(m)) return v(g, p, m, x);
      Na(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = o(p, m)), (p.return = g), (g = p))
          : (n(g, p), (p = ed(m, g.mode, x)), (p.return = g), (g = p)),
        s(g))
      : n(g, p);
  }
  return R;
}
var ti = i0(!0),
  s0 = i0(!1),
  kl = $r(null),
  Tl = null,
  Bo = null,
  wp = null;
function Rp() {
  wp = Bo = Tl = null;
}
function Cp(e) {
  var t = kl.current;
  He(kl), (e._currentValue = t);
}
function of(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ko(e, t) {
  (Tl = e),
    (wp = Bo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ft = !0), (e.firstContext = null));
}
function gn(e) {
  var t = e._currentValue;
  if (wp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bo === null)) {
      if (Tl === null) throw Error(z(308));
      (Bo = e), (Tl.dependencies = { lanes: 0, firstContext: e });
    } else Bo = Bo.next = e;
  return t;
}
var Kr = null;
function _p(e) {
  Kr === null ? (Kr = [e]) : Kr.push(e);
}
function a0(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _p(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    er(e, r)
  );
}
function er(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var cr = !1;
function Ep(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function l0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Te & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      er(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _p(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    er(e, n)
  );
}
function Ya(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), dp(e, n);
  }
}
function Lm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Pl(e, t, n, r) {
  var o = e.updateQueue;
  cr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            v = a;
          switch (((f = t), (y = n), v.tag)) {
            case 1:
              if (((h = v.payload), typeof h == "function")) {
                d = h.call(y, d, f);
                break e;
              }
              d = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = v.payload),
                (f = typeof h == "function" ? h.call(y, d, f) : h),
                f == null)
              )
                break e;
              d = Ze({}, d, f);
              break e;
            case 2:
              cr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (ro |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Mm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(z(191, o));
        o.call(r);
      }
    }
}
var ea = {},
  jn = $r(ea),
  Ms = $r(ea),
  Os = $r(ea);
function Gr(e) {
  if (e === ea) throw Error(z(174));
  return e;
}
function kp(e, t) {
  switch ((Ue(Os, t), Ue(Ms, e), Ue(jn, ea), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bd(t, e));
  }
  He(jn), Ue(jn, t);
}
function ni() {
  He(jn), He(Ms), He(Os);
}
function u0(e) {
  Gr(Os.current);
  var t = Gr(jn.current),
    n = Bd(t, e.type);
  t !== n && (Ue(Ms, e), Ue(jn, n));
}
function Tp(e) {
  Ms.current === e && (He(jn), He(Ms));
}
var Xe = $r(0);
function Nl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var qc = [];
function Pp() {
  for (var e = 0; e < qc.length; e++)
    qc[e]._workInProgressVersionPrimary = null;
  qc.length = 0;
}
var Za = nr.ReactCurrentDispatcher,
  Qc = nr.ReactCurrentBatchConfig,
  no = 0,
  Ye = null,
  ut = null,
  pt = null,
  $l = !1,
  ps = !1,
  Is = 0,
  hR = 0;
function wt() {
  throw Error(z(321));
}
function Np(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!An(e[n], t[n])) return !1;
  return !0;
}
function $p(e, t, n, r, o, i) {
  if (
    ((no = i),
    (Ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Za.current = e === null || e.memoizedState === null ? yR : SR),
    (e = n(r, o)),
    ps)
  ) {
    i = 0;
    do {
      if (((ps = !1), (Is = 0), 25 <= i)) throw Error(z(301));
      (i += 1),
        (pt = ut = null),
        (t.updateQueue = null),
        (Za.current = xR),
        (e = n(r, o));
    } while (ps);
  }
  if (
    ((Za.current = Al),
    (t = ut !== null && ut.next !== null),
    (no = 0),
    (pt = ut = Ye = null),
    ($l = !1),
    t)
  )
    throw Error(z(300));
  return e;
}
function Ap() {
  var e = Is !== 0;
  return (Is = 0), e;
}
function In() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pt === null ? (Ye.memoizedState = pt = e) : (pt = pt.next = e), pt;
}
function vn() {
  if (ut === null) {
    var e = Ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ut.next;
  var t = pt === null ? Ye.memoizedState : pt.next;
  if (t !== null) (pt = t), (ut = e);
  else {
    if (e === null) throw Error(z(310));
    (ut = e),
      (e = {
        memoizedState: ut.memoizedState,
        baseState: ut.baseState,
        baseQueue: ut.baseQueue,
        queue: ut.queue,
        next: null,
      }),
      pt === null ? (Ye.memoizedState = pt = e) : (pt = pt.next = e);
  }
  return pt;
}
function Fs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xc(e) {
  var t = vn(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = ut,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((no & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Ye.lanes |= c),
          (ro |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      An(r, t.memoizedState) || (Ft = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ye.lanes |= i), (ro |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yc(e) {
  var t = vn(),
    n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    An(i, t.memoizedState) || (Ft = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function c0() {}
function d0(e, t) {
  var n = Ye,
    r = vn(),
    o = t(),
    i = !An(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ft = !0)),
    (r = r.queue),
    Lp(h0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (pt !== null && pt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Bs(9, p0.bind(null, n, r, o, t), void 0, null),
      ht === null)
    )
      throw Error(z(349));
    no & 30 || f0(n, t, o);
  }
  return o;
}
function f0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function p0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), m0(t) && g0(e);
}
function h0(e, t, n) {
  return n(function () {
    m0(t) && g0(e);
  });
}
function m0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !An(e, n);
  } catch {
    return !0;
  }
}
function g0(e) {
  var t = er(e, 1);
  t !== null && Nn(t, e, 1, -1);
}
function Om(e) {
  var t = In();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vR.bind(null, Ye, e)),
    [t.memoizedState, e]
  );
}
function Bs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function v0() {
  return vn().memoizedState;
}
function Ja(e, t, n, r) {
  var o = In();
  (Ye.flags |= e),
    (o.memoizedState = Bs(1 | t, n, void 0, r === void 0 ? null : r));
}
function su(e, t, n, r) {
  var o = vn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ut !== null) {
    var s = ut.memoizedState;
    if (((i = s.destroy), r !== null && Np(r, s.deps))) {
      o.memoizedState = Bs(t, n, i, r);
      return;
    }
  }
  (Ye.flags |= e), (o.memoizedState = Bs(1 | t, n, i, r));
}
function Im(e, t) {
  return Ja(8390656, 8, e, t);
}
function Lp(e, t) {
  return su(2048, 8, e, t);
}
function y0(e, t) {
  return su(4, 2, e, t);
}
function S0(e, t) {
  return su(4, 4, e, t);
}
function x0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function b0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), su(4, 4, x0.bind(null, t, e), n)
  );
}
function Mp() {}
function w0(e, t) {
  var n = vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Np(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function R0(e, t) {
  var n = vn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Np(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function C0(e, t, n) {
  return no & 21
    ? (An(n, t) || ((n = Py()), (Ye.lanes |= n), (ro |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ft = !0)), (e.memoizedState = n));
}
function mR(e, t) {
  var n = Ae;
  (Ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qc.transition;
  Qc.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ae = n), (Qc.transition = r);
  }
}
function _0() {
  return vn().memoizedState;
}
function gR(e, t, n) {
  var r = Cr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    E0(e))
  )
    k0(t, n);
  else if (((n = a0(e, t, n, r)), n !== null)) {
    var o = Pt();
    Nn(n, e, r, o), T0(n, t, r);
  }
}
function vR(e, t, n) {
  var r = Cr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (E0(e)) k0(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), An(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), _p(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = a0(e, t, o, r)),
      n !== null && ((o = Pt()), Nn(n, e, r, o), T0(n, t, r));
  }
}
function E0(e) {
  var t = e.alternate;
  return e === Ye || (t !== null && t === Ye);
}
function k0(e, t) {
  ps = $l = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function T0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), dp(e, n);
  }
}
var Al = {
    readContext: gn,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useInsertionEffect: wt,
    useLayoutEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useMutableSource: wt,
    useSyncExternalStore: wt,
    useId: wt,
    unstable_isNewReconciler: !1,
  },
  yR = {
    readContext: gn,
    useCallback: function (e, t) {
      return (In().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: gn,
    useEffect: Im,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ja(4194308, 4, x0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ja(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ja(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = In();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = In();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gR.bind(null, Ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = In();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Om,
    useDebugValue: Mp,
    useDeferredValue: function (e) {
      return (In().memoizedState = e);
    },
    useTransition: function () {
      var e = Om(!1),
        t = e[0];
      return (e = mR.bind(null, e[1])), (In().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ye,
        o = In();
      if (qe) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = t()), ht === null)) throw Error(z(349));
        no & 30 || f0(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Im(h0.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Bs(9, p0.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = In(),
        t = ht.identifierPrefix;
      if (qe) {
        var n = Xn,
          r = Qn;
        (n = (r & ~(1 << (32 - Pn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Is++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hR++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  SR = {
    readContext: gn,
    useCallback: w0,
    useContext: gn,
    useEffect: Lp,
    useImperativeHandle: b0,
    useInsertionEffect: y0,
    useLayoutEffect: S0,
    useMemo: R0,
    useReducer: Xc,
    useRef: v0,
    useState: function () {
      return Xc(Fs);
    },
    useDebugValue: Mp,
    useDeferredValue: function (e) {
      var t = vn();
      return C0(t, ut.memoizedState, e);
    },
    useTransition: function () {
      var e = Xc(Fs)[0],
        t = vn().memoizedState;
      return [e, t];
    },
    useMutableSource: c0,
    useSyncExternalStore: d0,
    useId: _0,
    unstable_isNewReconciler: !1,
  },
  xR = {
    readContext: gn,
    useCallback: w0,
    useContext: gn,
    useEffect: Lp,
    useImperativeHandle: b0,
    useInsertionEffect: y0,
    useLayoutEffect: S0,
    useMemo: R0,
    useReducer: Yc,
    useRef: v0,
    useState: function () {
      return Yc(Fs);
    },
    useDebugValue: Mp,
    useDeferredValue: function (e) {
      var t = vn();
      return ut === null ? (t.memoizedState = e) : C0(t, ut.memoizedState, e);
    },
    useTransition: function () {
      var e = Yc(Fs)[0],
        t = vn().memoizedState;
      return [e, t];
    },
    useMutableSource: c0,
    useSyncExternalStore: d0,
    useId: _0,
    unstable_isNewReconciler: !1,
  };
function En(e, t) {
  if (e && e.defaultProps) {
    (t = Ze({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function sf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ze({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var au = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ho(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pt(),
      o = Cr(e),
      i = Yn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = wr(e, i, o)),
      t !== null && (Nn(t, e, o, r), Ya(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pt(),
      o = Cr(e),
      i = Yn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = wr(e, i, o)),
      t !== null && (Nn(t, e, o, r), Ya(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pt(),
      r = Cr(e),
      o = Yn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = wr(e, o, r)),
      t !== null && (Nn(t, e, r, n), Ya(t, e, r));
  },
};
function Fm(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ns(n, r) || !Ns(o, i)
      : !0
  );
}
function P0(e, t, n) {
  var r = !1,
    o = Tr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = gn(i))
      : ((o = Dt(t) ? eo : Et.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Jo(e, o) : Tr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = au),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Bm(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && au.enqueueReplaceState(t, t.state, null);
}
function af(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ep(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = gn(i))
    : ((i = Dt(t) ? eo : Et.current), (o.context = Jo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (sf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && au.enqueueReplaceState(o, o.state, null),
      Pl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ri(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qb(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Zc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bR = typeof WeakMap == "function" ? WeakMap : Map;
function N0(e, t, n) {
  (n = Yn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ml || ((Ml = !0), (yf = r)), lf(e, t);
    }),
    n
  );
}
function $0(e, t, n) {
  (n = Yn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        lf(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        lf(e, t),
          typeof r != "function" &&
            (Rr === null ? (Rr = new Set([this])) : Rr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Dm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bR();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = OR.bind(null, e, t, n)), t.then(e, e));
}
function zm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function jm(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Yn(-1, 1)), (t.tag = 2), wr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wR = nr.ReactCurrentOwner,
  Ft = !1;
function Tt(e, t, n, r) {
  t.child = e === null ? s0(t, null, n, r) : ti(t, e.child, n, r);
}
function Um(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Ko(t, o),
    (r = $p(e, t, n, r, i, o)),
    (n = Ap()),
    e !== null && !Ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tr(e, t, o))
      : (qe && n && Sp(t), (t.flags |= 1), Tt(e, t, r, o), t.child)
  );
}
function Vm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Up(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), A0(e, t, i, r, o))
      : ((e = rl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ns), n(s, r) && e.ref === t.ref)
    )
      return tr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = _r(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function A0(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ns(i, r) && e.ref === t.ref)
      if (((Ft = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ft = !0);
      else return (t.lanes = e.lanes), tr(e, t, o);
  }
  return uf(e, t, n, r, o);
}
function L0(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ue(zo, Gt),
        (Gt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ue(zo, Gt),
          (Gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ue(zo, Gt),
        (Gt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ue(zo, Gt),
      (Gt |= r);
  return Tt(e, t, o, n), t.child;
}
function M0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function uf(e, t, n, r, o) {
  var i = Dt(n) ? eo : Et.current;
  return (
    (i = Jo(t, i)),
    Ko(t, o),
    (n = $p(e, t, n, r, i, o)),
    (r = Ap()),
    e !== null && !Ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        tr(e, t, o))
      : (qe && r && Sp(t), (t.flags |= 1), Tt(e, t, n, o), t.child)
  );
}
function Wm(e, t, n, r, o) {
  if (Dt(n)) {
    var i = !0;
    Cl(t);
  } else i = !1;
  if ((Ko(t, o), t.stateNode === null))
    el(e, t), P0(t, n, r), af(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = gn(u))
      : ((u = Dt(n) ? eo : Et.current), (u = Jo(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Bm(t, s, r, u)),
      (cr = !1);
    var f = t.memoizedState;
    (s.state = f),
      Pl(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || Bt.current || cr
        ? (typeof c == "function" && (sf(t, n, c, r), (l = t.memoizedState)),
          (a = cr || Fm(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      l0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : En(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = gn(l))
        : ((l = Dt(n) ? eo : Et.current), (l = Jo(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Bm(t, s, r, l)),
      (cr = !1),
      (f = t.memoizedState),
      (s.state = f),
      Pl(t, r, s, o);
    var h = t.memoizedState;
    a !== d || f !== h || Bt.current || cr
      ? (typeof y == "function" && (sf(t, n, y, r), (h = t.memoizedState)),
        (u = cr || Fm(t, n, u, r, f, h, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, h, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, h, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (s.props = r),
        (s.state = h),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return cf(e, t, n, r, i, o);
}
function cf(e, t, n, r, o, i) {
  M0(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Pm(t, n, !1), tr(e, t, i);
  (r = t.stateNode), (wR.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ti(t, e.child, null, i)), (t.child = ti(t, null, a, i)))
      : Tt(e, t, a, i),
    (t.memoizedState = r.state),
    o && Pm(t, n, !0),
    t.child
  );
}
function O0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Tm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Tm(e, t.context, !1),
    kp(e, t.containerInfo);
}
function Hm(e, t, n, r, o) {
  return ei(), bp(o), (t.flags |= 256), Tt(e, t, n, r), t.child;
}
var df = { dehydrated: null, treeContext: null, retryLane: 0 };
function ff(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function I0(e, t, n) {
  var r = t.pendingProps,
    o = Xe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ue(Xe, o & 1),
    e === null)
  )
    return (
      rf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = cu(s, r, 0, null)),
              (e = Xr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ff(n)),
              (t.memoizedState = df),
              e)
            : Op(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return RR(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = _r(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = _r(a, i)) : ((i = Xr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ff(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = df),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = _r(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Op(e, t) {
  return (
    (t = cu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $a(e, t, n, r) {
  return (
    r !== null && bp(r),
    ti(t, e.child, null, n),
    (e = Op(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function RR(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Zc(Error(z(422)))), $a(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = cu({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Xr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ti(t, e.child, null, s),
        (t.child.memoizedState = ff(s)),
        (t.memoizedState = df),
        i);
  if (!(t.mode & 1)) return $a(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(z(419))), (r = Zc(i, r, void 0)), $a(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ft || a)) {
    if (((r = ht), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), er(e, o), Nn(r, e, o, -1));
    }
    return jp(), (r = Zc(Error(z(421)))), $a(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = IR.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Qt = br(o.nextSibling)),
      (Xt = t),
      (qe = !0),
      (Tn = null),
      e !== null &&
        ((un[cn++] = Qn),
        (un[cn++] = Xn),
        (un[cn++] = to),
        (Qn = e.id),
        (Xn = e.overflow),
        (to = t)),
      (t = Op(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Km(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), of(e.return, t, n);
}
function Jc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function F0(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Tt(e, t, r.children, n), (r = Xe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Km(e, n, t);
        else if (e.tag === 19) Km(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ue(Xe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Nl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Jc(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Nl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Jc(t, !0, n, null, i);
        break;
      case "together":
        Jc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function el(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ro |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (
      e = t.child, n = _r(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = _r(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function CR(e, t, n) {
  switch (t.tag) {
    case 3:
      O0(t), ei();
      break;
    case 5:
      u0(t);
      break;
    case 1:
      Dt(t.type) && Cl(t);
      break;
    case 4:
      kp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ue(kl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ue(Xe, Xe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? I0(e, t, n)
          : (Ue(Xe, Xe.current & 1),
            (e = tr(e, t, n)),
            e !== null ? e.sibling : null);
      Ue(Xe, Xe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return F0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ue(Xe, Xe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), L0(e, t, n);
  }
  return tr(e, t, n);
}
var B0, pf, D0, z0;
B0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
pf = function () {};
D0 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Gr(jn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Md(e, o)), (r = Md(e, r)), (i = []);
        break;
      case "select":
        (o = Ze({}, o, { value: void 0 })),
          (r = Ze({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Fd(e, o)), (r = Fd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = wl);
    }
    Dd(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rs.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Rs.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Ve("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
z0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zi(e, t) {
  if (!qe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Rt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _R(e, t, n) {
  var r = t.pendingProps;
  switch ((xp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Rt(t), null;
    case 1:
      return Dt(t.type) && Rl(), Rt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ni(),
        He(Bt),
        He(Et),
        Pp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Tn !== null && (bf(Tn), (Tn = null)))),
        pf(e, t),
        Rt(t),
        null
      );
    case 5:
      Tp(t);
      var o = Gr(Os.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        D0(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Rt(t), null;
        }
        if (((e = Gr(jn.current)), Pa(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Dn] = t), (r[Ls] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ve("cancel", r), Ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < rs.length; o++) Ve(rs[o], r);
              break;
            case "source":
              Ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ve("error", r), Ve("load", r);
              break;
            case "details":
              Ve("toggle", r);
              break;
            case "input":
              tm(r, i), Ve("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ve("invalid", r);
              break;
            case "textarea":
              rm(r, i), Ve("invalid", r);
          }
          Dd(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ta(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ta(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Rs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Ve("scroll", r);
            }
          switch (n) {
            case "input":
              xa(r), nm(r, i, !0);
              break;
            case "textarea":
              xa(r), om(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = wl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Dn] = t),
            (e[Ls] = r),
            B0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = zd(n, r)), n)) {
              case "dialog":
                Ve("cancel", e), Ve("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < rs.length; o++) Ve(rs[o], e);
                o = r;
                break;
              case "source":
                Ve("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ve("error", e), Ve("load", e), (o = r);
                break;
              case "details":
                Ve("toggle", e), (o = r);
                break;
              case "input":
                tm(e, r), (o = Md(e, r)), Ve("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ze({}, r, { value: void 0 })),
                  Ve("invalid", e);
                break;
              case "textarea":
                rm(e, r), (o = Fd(e, r)), Ve("invalid", e);
                break;
              default:
                o = r;
            }
            Dd(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? vy(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && my(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Cs(e, l)
                    : typeof l == "number" && Cs(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Rs.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Ve("scroll", e)
                      : l != null && ip(e, i, l, s));
              }
            switch (n) {
              case "input":
                xa(e), nm(e, r, !1);
                break;
              case "textarea":
                xa(e), om(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Uo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Uo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = wl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Rt(t), null;
    case 6:
      if (e && t.stateNode != null) z0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (((n = Gr(Os.current)), Gr(jn.current), Pa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Dn] = t),
            (i = r.nodeValue !== n) && ((e = Xt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ta(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ta(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Dn] = t),
            (t.stateNode = r);
      }
      return Rt(t), null;
    case 13:
      if (
        (He(Xe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (qe && Qt !== null && t.mode & 1 && !(t.flags & 128))
          o0(), ei(), (t.flags |= 98560), (i = !1);
        else if (((i = Pa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(z(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(z(317));
            i[Dn] = t;
          } else
            ei(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Rt(t), (i = !1);
        } else Tn !== null && (bf(Tn), (Tn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Xe.current & 1 ? ct === 0 && (ct = 3) : jp())),
          t.updateQueue !== null && (t.flags |= 4),
          Rt(t),
          null);
    case 4:
      return (
        ni(), pf(e, t), e === null && $s(t.stateNode.containerInfo), Rt(t), null
      );
    case 10:
      return Cp(t.type._context), Rt(t), null;
    case 17:
      return Dt(t.type) && Rl(), Rt(t), null;
    case 19:
      if ((He(Xe), (i = t.memoizedState), i === null)) return Rt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) zi(i, !1);
        else {
          if (ct !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Nl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    zi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ue(Xe, (Xe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ot() > oi &&
            ((t.flags |= 128), (r = !0), zi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Nl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !qe)
            )
              return Rt(t), null;
          } else
            2 * ot() - i.renderingStartTime > oi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ot()),
          (t.sibling = null),
          (n = Xe.current),
          Ue(Xe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Rt(t), null);
    case 22:
    case 23:
      return (
        zp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Gt & 1073741824 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Rt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function ER(e, t) {
  switch ((xp(t), t.tag)) {
    case 1:
      return (
        Dt(t.type) && Rl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ni(),
        He(Bt),
        He(Et),
        Pp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Tp(t), null;
    case 13:
      if (
        (He(Xe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(z(340));
        ei();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return He(Xe), null;
    case 4:
      return ni(), null;
    case 10:
      return Cp(t.type._context), null;
    case 22:
    case 23:
      return zp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Aa = !1,
  _t = !1,
  kR = typeof WeakSet == "function" ? WeakSet : Set,
  ee = null;
function Do(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        tt(e, t, r);
      }
    else n.current = null;
}
function hf(e, t, n) {
  try {
    n();
  } catch (r) {
    tt(e, t, r);
  }
}
var Gm = !1;
function TR(e, t) {
  if (((Xd = Sl), (e = Hy()), yp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Yd = { focusedElem: e, selectionRange: n }, Sl = !1, ee = t;
    ee !== null;

  )
    if (((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ee = e);
    else
      for (; ee !== null; ) {
        t = ee;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var v = h.memoizedProps,
                    R = h.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : En(t.type, v),
                      R
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (x) {
          tt(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ee = e);
          break;
        }
        ee = t.return;
      }
  return (h = Gm), (Gm = !1), h;
}
function hs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && hf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function lu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function mf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function j0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), j0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Dn], delete t[Ls], delete t[ef], delete t[cR], delete t[dR])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function U0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || U0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = wl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gf(e, t, n), e = e.sibling; e !== null; ) gf(e, t, n), (e = e.sibling);
}
function vf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vf(e, t, n), e = e.sibling; e !== null; ) vf(e, t, n), (e = e.sibling);
}
var gt = null,
  kn = !1;
function ir(e, t, n) {
  for (n = n.child; n !== null; ) V0(e, t, n), (n = n.sibling);
}
function V0(e, t, n) {
  if (zn && typeof zn.onCommitFiberUnmount == "function")
    try {
      zn.onCommitFiberUnmount(eu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _t || Do(n, t);
    case 6:
      var r = gt,
        o = kn;
      (gt = null),
        ir(e, t, n),
        (gt = r),
        (kn = o),
        gt !== null &&
          (kn
            ? ((e = gt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : gt.removeChild(n.stateNode));
      break;
    case 18:
      gt !== null &&
        (kn
          ? ((e = gt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Kc(e.parentNode, n)
              : e.nodeType === 1 && Kc(e, n),
            Ts(e))
          : Kc(gt, n.stateNode));
      break;
    case 4:
      (r = gt),
        (o = kn),
        (gt = n.stateNode.containerInfo),
        (kn = !0),
        ir(e, t, n),
        (gt = r),
        (kn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_t &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && hf(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      ir(e, t, n);
      break;
    case 1:
      if (
        !_t &&
        (Do(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          tt(n, t, a);
        }
      ir(e, t, n);
      break;
    case 21:
      ir(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_t = (r = _t) || n.memoizedState !== null), ir(e, t, n), (_t = r))
        : ir(e, t, n);
      break;
    default:
      ir(e, t, n);
  }
}
function Qm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kR()),
      t.forEach(function (r) {
        var o = FR.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Cn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (gt = a.stateNode), (kn = !1);
              break e;
            case 3:
              (gt = a.stateNode.containerInfo), (kn = !0);
              break e;
            case 4:
              (gt = a.stateNode.containerInfo), (kn = !0);
              break e;
          }
          a = a.return;
        }
        if (gt === null) throw Error(z(160));
        V0(i, s, o), (gt = null), (kn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        tt(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) W0(t, e), (t = t.sibling);
}
function W0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Cn(t, e), On(e), r & 4)) {
        try {
          hs(3, e, e.return), lu(3, e);
        } catch (v) {
          tt(e, e.return, v);
        }
        try {
          hs(5, e, e.return);
        } catch (v) {
          tt(e, e.return, v);
        }
      }
      break;
    case 1:
      Cn(t, e), On(e), r & 512 && n !== null && Do(n, n.return);
      break;
    case 5:
      if (
        (Cn(t, e),
        On(e),
        r & 512 && n !== null && Do(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Cs(o, "");
        } catch (v) {
          tt(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && fy(o, i),
              zd(a, s);
            var u = zd(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? vy(o, d)
                : c === "dangerouslySetInnerHTML"
                ? my(o, d)
                : c === "children"
                ? Cs(o, d)
                : ip(o, c, d, u);
            }
            switch (a) {
              case "input":
                Od(o, i);
                break;
              case "textarea":
                py(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Uo(o, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Uo(o, !!i.multiple, i.defaultValue, !0)
                      : Uo(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ls] = i;
          } catch (v) {
            tt(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Cn(t, e), On(e), r & 4)) {
        if (e.stateNode === null) throw Error(z(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          tt(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Cn(t, e), On(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ts(t.containerInfo);
        } catch (v) {
          tt(e, e.return, v);
        }
      break;
    case 4:
      Cn(t, e), On(e);
      break;
    case 13:
      Cn(t, e),
        On(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Bp = ot())),
        r & 4 && Qm(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_t = (u = _t) || c), Cn(t, e), (_t = u)) : Cn(t, e),
        On(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (ee = e, c = e.child; c !== null; ) {
            for (d = ee = c; ee !== null; ) {
              switch (((f = ee), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hs(4, f, f.return);
                  break;
                case 1:
                  Do(f, f.return);
                  var h = f.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (v) {
                      tt(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Do(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ym(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (ee = y)) : Ym(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = gy("display", s)));
              } catch (v) {
                tt(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                tt(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Cn(t, e), On(e), r & 4 && Qm(e);
      break;
    case 21:
      break;
    default:
      Cn(t, e), On(e);
  }
}
function On(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (U0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Cs(o, ""), (r.flags &= -33));
          var i = qm(e);
          vf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = qm(e);
          gf(e, a, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (l) {
      tt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function PR(e, t, n) {
  (ee = e), H0(e);
}
function H0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ee !== null; ) {
    var o = ee,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Aa;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || _t;
        a = Aa;
        var u = _t;
        if (((Aa = s), (_t = l) && !u))
          for (ee = o; ee !== null; )
            (s = ee),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Zm(o)
                : l !== null
                ? ((l.return = s), (ee = l))
                : Zm(o);
        for (; i !== null; ) (ee = i), H0(i), (i = i.sibling);
        (ee = o), (Aa = a), (_t = u);
      }
      Xm(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (ee = i)) : Xm(e);
  }
}
function Xm(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || lu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : En(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Mm(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mm(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ts(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(z(163));
          }
        _t || (t.flags & 512 && mf(t));
      } catch (f) {
        tt(t, t.return, f);
      }
    }
    if (t === e) {
      ee = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ee = n);
      break;
    }
    ee = t.return;
  }
}
function Ym(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t === e) {
      ee = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ee = n);
      break;
    }
    ee = t.return;
  }
}
function Zm(e) {
  for (; ee !== null; ) {
    var t = ee;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lu(4, t);
          } catch (l) {
            tt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              tt(t, o, l);
            }
          }
          var i = t.return;
          try {
            mf(t);
          } catch (l) {
            tt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            mf(t);
          } catch (l) {
            tt(t, s, l);
          }
      }
    } catch (l) {
      tt(t, t.return, l);
    }
    if (t === e) {
      ee = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (ee = a);
      break;
    }
    ee = t.return;
  }
}
var NR = Math.ceil,
  Ll = nr.ReactCurrentDispatcher,
  Ip = nr.ReactCurrentOwner,
  hn = nr.ReactCurrentBatchConfig,
  Te = 0,
  ht = null,
  lt = null,
  yt = 0,
  Gt = 0,
  zo = $r(0),
  ct = 0,
  Ds = null,
  ro = 0,
  uu = 0,
  Fp = 0,
  ms = null,
  It = null,
  Bp = 0,
  oi = 1 / 0,
  Kn = null,
  Ml = !1,
  yf = null,
  Rr = null,
  La = !1,
  mr = null,
  Ol = 0,
  gs = 0,
  Sf = null,
  tl = -1,
  nl = 0;
function Pt() {
  return Te & 6 ? ot() : tl !== -1 ? tl : (tl = ot());
}
function Cr(e) {
  return e.mode & 1
    ? Te & 2 && yt !== 0
      ? yt & -yt
      : pR.transition !== null
      ? (nl === 0 && (nl = Py()), nl)
      : ((e = Ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Iy(e.type))),
        e)
    : 1;
}
function Nn(e, t, n, r) {
  if (50 < gs) throw ((gs = 0), (Sf = null), Error(z(185)));
  Ys(e, n, r),
    (!(Te & 2) || e !== ht) &&
      (e === ht && (!(Te & 2) && (uu |= n), ct === 4 && pr(e, yt)),
      zt(e, r),
      n === 1 && Te === 0 && !(t.mode & 1) && ((oi = ot() + 500), iu && Ar()));
}
function zt(e, t) {
  var n = e.callbackNode;
  pw(e, t);
  var r = yl(e, e === ht ? yt : 0);
  if (r === 0)
    n !== null && am(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && am(n), t === 1))
      e.tag === 0 ? fR(Jm.bind(null, e)) : t0(Jm.bind(null, e)),
        lR(function () {
          !(Te & 6) && Ar();
        }),
        (n = null);
    else {
      switch (Ny(r)) {
        case 1:
          n = cp;
          break;
        case 4:
          n = ky;
          break;
        case 16:
          n = vl;
          break;
        case 536870912:
          n = Ty;
          break;
        default:
          n = vl;
      }
      n = J0(n, K0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function K0(e, t) {
  if (((tl = -1), (nl = 0), Te & 6)) throw Error(z(327));
  var n = e.callbackNode;
  if (Go() && e.callbackNode !== n) return null;
  var r = yl(e, e === ht ? yt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
  else {
    t = r;
    var o = Te;
    Te |= 2;
    var i = q0();
    (ht !== e || yt !== t) && ((Kn = null), (oi = ot() + 500), Qr(e, t));
    do
      try {
        LR();
        break;
      } catch (a) {
        G0(e, a);
      }
    while (!0);
    Rp(),
      (Ll.current = i),
      (Te = o),
      lt !== null ? (t = 0) : ((ht = null), (yt = 0), (t = ct));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Hd(e)), o !== 0 && ((r = o), (t = xf(e, o)))), t === 1)
    )
      throw ((n = Ds), Qr(e, 0), pr(e, r), zt(e, ot()), n);
    if (t === 6) pr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !$R(o) &&
          ((t = Il(e, r)),
          t === 2 && ((i = Hd(e)), i !== 0 && ((r = i), (t = xf(e, i)))),
          t === 1))
      )
        throw ((n = Ds), Qr(e, 0), pr(e, r), zt(e, ot()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          zr(e, It, Kn);
          break;
        case 3:
          if (
            (pr(e, r), (r & 130023424) === r && ((t = Bp + 500 - ot()), 10 < t))
          ) {
            if (yl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Pt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Jd(zr.bind(null, e, It, Kn), t);
            break;
          }
          zr(e, It, Kn);
          break;
        case 4:
          if ((pr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Pn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ot() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * NR(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Jd(zr.bind(null, e, It, Kn), r);
            break;
          }
          zr(e, It, Kn);
          break;
        case 5:
          zr(e, It, Kn);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return zt(e, ot()), e.callbackNode === n ? K0.bind(null, e) : null;
}
function xf(e, t) {
  var n = ms;
  return (
    e.current.memoizedState.isDehydrated && (Qr(e, t).flags |= 256),
    (e = Il(e, t)),
    e !== 2 && ((t = It), (It = n), t !== null && bf(t)),
    e
  );
}
function bf(e) {
  It === null ? (It = e) : It.push.apply(It, e);
}
function $R(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!An(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function pr(e, t) {
  for (
    t &= ~Fp,
      t &= ~uu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Pn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Jm(e) {
  if (Te & 6) throw Error(z(327));
  Go();
  var t = yl(e, 0);
  if (!(t & 1)) return zt(e, ot()), null;
  var n = Il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hd(e);
    r !== 0 && ((t = r), (n = xf(e, r)));
  }
  if (n === 1) throw ((n = Ds), Qr(e, 0), pr(e, t), zt(e, ot()), n);
  if (n === 6) throw Error(z(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zr(e, It, Kn),
    zt(e, ot()),
    null
  );
}
function Dp(e, t) {
  var n = Te;
  Te |= 1;
  try {
    return e(t);
  } finally {
    (Te = n), Te === 0 && ((oi = ot() + 500), iu && Ar());
  }
}
function oo(e) {
  mr !== null && mr.tag === 0 && !(Te & 6) && Go();
  var t = Te;
  Te |= 1;
  var n = hn.transition,
    r = Ae;
  try {
    if (((hn.transition = null), (Ae = 1), e)) return e();
  } finally {
    (Ae = r), (hn.transition = n), (Te = t), !(Te & 6) && Ar();
  }
}
function zp() {
  (Gt = zo.current), He(zo);
}
function Qr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), aR(n)), lt !== null))
    for (n = lt.return; n !== null; ) {
      var r = n;
      switch ((xp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rl();
          break;
        case 3:
          ni(), He(Bt), He(Et), Pp();
          break;
        case 5:
          Tp(r);
          break;
        case 4:
          ni();
          break;
        case 13:
          He(Xe);
          break;
        case 19:
          He(Xe);
          break;
        case 10:
          Cp(r.type._context);
          break;
        case 22:
        case 23:
          zp();
      }
      n = n.return;
    }
  if (
    ((ht = e),
    (lt = e = _r(e.current, null)),
    (yt = Gt = t),
    (ct = 0),
    (Ds = null),
    (Fp = uu = ro = 0),
    (It = ms = null),
    Kr !== null)
  ) {
    for (t = 0; t < Kr.length; t++)
      if (((n = Kr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Kr = null;
  }
  return e;
}
function G0(e, t) {
  do {
    var n = lt;
    try {
      if ((Rp(), (Za.current = Al), $l)) {
        for (var r = Ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        $l = !1;
      }
      if (
        ((no = 0),
        (pt = ut = Ye = null),
        (ps = !1),
        (Is = 0),
        (Ip.current = null),
        n === null || n.return === null)
      ) {
        (ct = 1), (Ds = t), (lt = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = yt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = zm(s);
          if (y !== null) {
            (y.flags &= -257),
              jm(y, s, a, i, t),
              y.mode & 1 && Dm(i, u, t),
              (t = y),
              (l = u);
            var h = t.updateQueue;
            if (h === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Dm(i, u, t), jp();
              break e;
            }
            l = Error(z(426));
          }
        } else if (qe && a.mode & 1) {
          var R = zm(s);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              jm(R, s, a, i, t),
              bp(ri(l, a));
            break e;
          }
        }
        (i = l = ri(l, a)),
          ct !== 4 && (ct = 2),
          ms === null ? (ms = [i]) : ms.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = N0(i, l, t);
              Lm(i, g);
              break e;
            case 1:
              a = l;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Rr === null || !Rr.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = $0(i, a, t);
                Lm(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      X0(n);
    } catch (C) {
      (t = C), lt === n && n !== null && (lt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function q0() {
  var e = Ll.current;
  return (Ll.current = Al), e === null ? Al : e;
}
function jp() {
  (ct === 0 || ct === 3 || ct === 2) && (ct = 4),
    ht === null || (!(ro & 268435455) && !(uu & 268435455)) || pr(ht, yt);
}
function Il(e, t) {
  var n = Te;
  Te |= 2;
  var r = q0();
  (ht !== e || yt !== t) && ((Kn = null), Qr(e, t));
  do
    try {
      AR();
      break;
    } catch (o) {
      G0(e, o);
    }
  while (!0);
  if ((Rp(), (Te = n), (Ll.current = r), lt !== null)) throw Error(z(261));
  return (ht = null), (yt = 0), ct;
}
function AR() {
  for (; lt !== null; ) Q0(lt);
}
function LR() {
  for (; lt !== null && !ow(); ) Q0(lt);
}
function Q0(e) {
  var t = Z0(e.alternate, e, Gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? X0(e) : (lt = t),
    (Ip.current = null);
}
function X0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ER(n, t)), n !== null)) {
        (n.flags &= 32767), (lt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ct = 6), (lt = null);
        return;
      }
    } else if (((n = _R(n, t, Gt)), n !== null)) {
      lt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      lt = t;
      return;
    }
    lt = t = e;
  } while (t !== null);
  ct === 0 && (ct = 5);
}
function zr(e, t, n) {
  var r = Ae,
    o = hn.transition;
  try {
    (hn.transition = null), (Ae = 1), MR(e, t, n, r);
  } finally {
    (hn.transition = o), (Ae = r);
  }
  return null;
}
function MR(e, t, n, r) {
  do Go();
  while (mr !== null);
  if (Te & 6) throw Error(z(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(z(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (hw(e, i),
    e === ht && ((lt = ht = null), (yt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      La ||
      ((La = !0),
      J0(vl, function () {
        return Go(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = hn.transition), (hn.transition = null);
    var s = Ae;
    Ae = 1;
    var a = Te;
    (Te |= 4),
      (Ip.current = null),
      TR(e, n),
      W0(n, e),
      eR(Yd),
      (Sl = !!Xd),
      (Yd = Xd = null),
      (e.current = n),
      PR(n),
      iw(),
      (Te = a),
      (Ae = s),
      (hn.transition = i);
  } else e.current = n;
  if (
    (La && ((La = !1), (mr = e), (Ol = o)),
    (i = e.pendingLanes),
    i === 0 && (Rr = null),
    lw(n.stateNode),
    zt(e, ot()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ml) throw ((Ml = !1), (e = yf), (yf = null), e);
  return (
    Ol & 1 && e.tag !== 0 && Go(),
    (i = e.pendingLanes),
    i & 1 ? (e === Sf ? gs++ : ((gs = 0), (Sf = e))) : (gs = 0),
    Ar(),
    null
  );
}
function Go() {
  if (mr !== null) {
    var e = Ny(Ol),
      t = hn.transition,
      n = Ae;
    try {
      if (((hn.transition = null), (Ae = 16 > e ? 16 : e), mr === null))
        var r = !1;
      else {
        if (((e = mr), (mr = null), (Ol = 0), Te & 6)) throw Error(z(331));
        var o = Te;
        for (Te |= 4, ee = e.current; ee !== null; ) {
          var i = ee,
            s = i.child;
          if (ee.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (ee = u; ee !== null; ) {
                  var c = ee;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (ee = d);
                  else
                    for (; ee !== null; ) {
                      c = ee;
                      var f = c.sibling,
                        y = c.return;
                      if ((j0(c), c === u)) {
                        ee = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (ee = f);
                        break;
                      }
                      ee = y;
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var v = h.child;
                if (v !== null) {
                  h.child = null;
                  do {
                    var R = v.sibling;
                    (v.sibling = null), (v = R);
                  } while (v !== null);
                }
              }
              ee = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (ee = s);
          else
            e: for (; ee !== null; ) {
              if (((i = ee), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hs(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (ee = g);
                break e;
              }
              ee = i.return;
            }
        }
        var p = e.current;
        for (ee = p; ee !== null; ) {
          s = ee;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (ee = m);
          else
            e: for (s = p; ee !== null; ) {
              if (((a = ee), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lu(9, a);
                  }
                } catch (C) {
                  tt(a, a.return, C);
                }
              if (a === s) {
                ee = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (ee = x);
                break e;
              }
              ee = a.return;
            }
        }
        if (
          ((Te = o), Ar(), zn && typeof zn.onPostCommitFiberRoot == "function")
        )
          try {
            zn.onPostCommitFiberRoot(eu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Ae = n), (hn.transition = t);
    }
  }
  return !1;
}
function eg(e, t, n) {
  (t = ri(n, t)),
    (t = N0(e, t, 1)),
    (e = wr(e, t, 1)),
    (t = Pt()),
    e !== null && (Ys(e, 1, t), zt(e, t));
}
function tt(e, t, n) {
  if (e.tag === 3) eg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        eg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rr === null || !Rr.has(r)))
        ) {
          (e = ri(n, e)),
            (e = $0(t, e, 1)),
            (t = wr(t, e, 1)),
            (e = Pt()),
            t !== null && (Ys(t, 1, e), zt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function OR(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e &&
      (yt & n) === n &&
      (ct === 4 || (ct === 3 && (yt & 130023424) === yt && 500 > ot() - Bp)
        ? Qr(e, 0)
        : (Fp |= n)),
    zt(e, t);
}
function Y0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ra), (Ra <<= 1), !(Ra & 130023424) && (Ra = 4194304))
      : (t = 1));
  var n = Pt();
  (e = er(e, t)), e !== null && (Ys(e, t, n), zt(e, n));
}
function IR(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Y0(e, n);
}
function FR(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(t), Y0(e, n);
}
var Z0;
Z0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Bt.current) Ft = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ft = !1), CR(e, t, n);
      Ft = !!(e.flags & 131072);
    }
  else (Ft = !1), qe && t.flags & 1048576 && n0(t, El, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      el(e, t), (e = t.pendingProps);
      var o = Jo(t, Et.current);
      Ko(t, n), (o = $p(null, t, r, e, o, n));
      var i = Ap();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Dt(r) ? ((i = !0), Cl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ep(t),
            (o.updater = au),
            (t.stateNode = o),
            (o._reactInternals = t),
            af(t, r, e, n),
            (t = cf(null, t, r, !0, i, n)))
          : ((t.tag = 0), qe && i && Sp(t), Tt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (el(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = DR(r)),
          (e = En(r, e)),
          o)
        ) {
          case 0:
            t = uf(null, t, r, e, n);
            break e;
          case 1:
            t = Wm(null, t, r, e, n);
            break e;
          case 11:
            t = Um(null, t, r, e, n);
            break e;
          case 14:
            t = Vm(null, t, r, En(r.type, e), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        uf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        Wm(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((O0(t), e === null)) throw Error(z(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          l0(e, t),
          Pl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ri(Error(z(423)), t)), (t = Hm(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ri(Error(z(424)), t)), (t = Hm(e, t, r, n, o));
            break e;
          } else
            for (
              Qt = br(t.stateNode.containerInfo.firstChild),
                Xt = t,
                qe = !0,
                Tn = null,
                n = s0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ei(), r === o)) {
            t = tr(e, t, n);
            break e;
          }
          Tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        u0(t),
        e === null && rf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Zd(r, o) ? (s = null) : i !== null && Zd(r, i) && (t.flags |= 32),
        M0(e, t),
        Tt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && rf(t), null;
    case 13:
      return I0(e, t, n);
    case 4:
      return (
        kp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ti(t, null, r, n)) : Tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        Um(e, t, r, o, n)
      );
    case 7:
      return Tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Tt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Ue(kl, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (An(i.value, s)) {
            if (i.children === o.children && !Bt.current) {
              t = tr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Yn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      of(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(z(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  of(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Tt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Ko(t, n),
        (o = gn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = En(r, t.pendingProps)),
        (o = En(r.type, o)),
        Vm(e, t, r, o, n)
      );
    case 15:
      return A0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : En(r, o)),
        el(e, t),
        (t.tag = 1),
        Dt(r) ? ((e = !0), Cl(t)) : (e = !1),
        Ko(t, n),
        P0(t, r, o),
        af(t, r, o, n),
        cf(null, t, r, !0, e, n)
      );
    case 19:
      return F0(e, t, n);
    case 22:
      return L0(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function J0(e, t) {
  return Ey(e, t);
}
function BR(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function fn(e, t, n, r) {
  return new BR(e, t, n, r);
}
function Up(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function DR(e) {
  if (typeof e == "function") return Up(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ap)) return 11;
    if (e === lp) return 14;
  }
  return 2;
}
function _r(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = fn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function rl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Up(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case No:
        return Xr(n.children, o, i, t);
      case sp:
        (s = 8), (o |= 8);
        break;
      case Nd:
        return (
          (e = fn(12, n, t, o | 2)), (e.elementType = Nd), (e.lanes = i), e
        );
      case $d:
        return (e = fn(13, n, t, o)), (e.elementType = $d), (e.lanes = i), e;
      case Ad:
        return (e = fn(19, n, t, o)), (e.elementType = Ad), (e.lanes = i), e;
      case uy:
        return cu(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ay:
              s = 10;
              break e;
            case ly:
              s = 9;
              break e;
            case ap:
              s = 11;
              break e;
            case lp:
              s = 14;
              break e;
            case ur:
              (s = 16), (r = null);
              break e;
          }
        throw Error(z(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = fn(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Xr(e, t, n, r) {
  return (e = fn(7, e, r, t)), (e.lanes = n), e;
}
function cu(e, t, n, r) {
  return (
    (e = fn(22, e, r, t)),
    (e.elementType = uy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ed(e, t, n) {
  return (e = fn(6, e, null, t)), (e.lanes = n), e;
}
function td(e, t, n) {
  return (
    (t = fn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zR(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Oc(0)),
    (this.expirationTimes = Oc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Oc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Vp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new zR(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = fn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ep(i),
    e
  );
}
function jR(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Po,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function e1(e) {
  if (!e) return Tr;
  e = e._reactInternals;
  e: {
    if (ho(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(z(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Dt(n)) return e0(e, n, t);
  }
  return t;
}
function t1(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Vp(n, r, !0, e, o, i, s, a, l)),
    (e.context = e1(null)),
    (n = e.current),
    (r = Pt()),
    (o = Cr(n)),
    (i = Yn(r, o)),
    (i.callback = t ?? null),
    wr(n, i, o),
    (e.current.lanes = o),
    Ys(e, o, r),
    zt(e, r),
    e
  );
}
function du(e, t, n, r) {
  var o = t.current,
    i = Pt(),
    s = Cr(o);
  return (
    (n = e1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wr(o, t, s)),
    e !== null && (Nn(e, o, s, i), Ya(e, o, s)),
    s
  );
}
function Fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function tg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wp(e, t) {
  tg(e, t), (e = e.alternate) && tg(e, t);
}
function UR() {
  return null;
}
var n1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hp(e) {
  this._internalRoot = e;
}
fu.prototype.render = Hp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  du(e, t, null, null);
};
fu.prototype.unmount = Hp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    oo(function () {
      du(null, e, null, null);
    }),
      (t[Jn] = null);
  }
};
function fu(e) {
  this._internalRoot = e;
}
fu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ly();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < fr.length && t !== 0 && t < fr[n].priority; n++);
    fr.splice(n, 0, e), n === 0 && Oy(e);
  }
};
function Kp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ng() {}
function VR(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Fl(s);
        i.call(u);
      };
    }
    var s = t1(t, r, e, 0, null, !1, !1, "", ng);
    return (
      (e._reactRootContainer = s),
      (e[Jn] = s.current),
      $s(e.nodeType === 8 ? e.parentNode : e),
      oo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Fl(l);
      a.call(u);
    };
  }
  var l = Vp(e, 0, !1, null, null, !1, !1, "", ng);
  return (
    (e._reactRootContainer = l),
    (e[Jn] = l.current),
    $s(e.nodeType === 8 ? e.parentNode : e),
    oo(function () {
      du(t, l, n, r);
    }),
    l
  );
}
function hu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Fl(s);
        a.call(l);
      };
    }
    du(t, s, e, o);
  } else s = VR(n, t, e, o, r);
  return Fl(s);
}
$y = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ns(t.pendingLanes);
        n !== 0 &&
          (dp(t, n | 1), zt(t, ot()), !(Te & 6) && ((oi = ot() + 500), Ar()));
      }
      break;
    case 13:
      oo(function () {
        var r = er(e, 1);
        if (r !== null) {
          var o = Pt();
          Nn(r, e, 1, o);
        }
      }),
        Wp(e, 1);
  }
};
fp = function (e) {
  if (e.tag === 13) {
    var t = er(e, 134217728);
    if (t !== null) {
      var n = Pt();
      Nn(t, e, 134217728, n);
    }
    Wp(e, 134217728);
  }
};
Ay = function (e) {
  if (e.tag === 13) {
    var t = Cr(e),
      n = er(e, t);
    if (n !== null) {
      var r = Pt();
      Nn(n, e, t, r);
    }
    Wp(e, t);
  }
};
Ly = function () {
  return Ae;
};
My = function (e, t) {
  var n = Ae;
  try {
    return (Ae = e), t();
  } finally {
    Ae = n;
  }
};
Ud = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Od(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ou(r);
            if (!o) throw Error(z(90));
            dy(r), Od(r, o);
          }
        }
      }
      break;
    case "textarea":
      py(e, n);
      break;
    case "select":
      (t = n.value), t != null && Uo(e, !!n.multiple, t, !1);
  }
};
xy = Dp;
by = oo;
var WR = { usingClientEntryPoint: !1, Events: [Js, Mo, ou, yy, Sy, Dp] },
  ji = {
    findFiberByHostInstance: Hr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  HR = {
    bundleType: ji.bundleType,
    version: ji.version,
    rendererPackageName: ji.rendererPackageName,
    rendererConfig: ji.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ji.findFiberByHostInstance || UR,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ma.isDisabled && Ma.supportsFiber)
    try {
      (eu = Ma.inject(HR)), (zn = Ma);
    } catch {}
}
en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WR;
en.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Kp(t)) throw Error(z(200));
  return jR(e, t, null, n);
};
en.createRoot = function (e, t) {
  if (!Kp(e)) throw Error(z(299));
  var n = !1,
    r = "",
    o = n1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Vp(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jn] = t.current),
    $s(e.nodeType === 8 ? e.parentNode : e),
    new Hp(t)
  );
};
en.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(z(188))
      : ((e = Object.keys(e).join(",")), Error(z(268, e)));
  return (e = Cy(t)), (e = e === null ? null : e.stateNode), e;
};
en.flushSync = function (e) {
  return oo(e);
};
en.hydrate = function (e, t, n) {
  if (!pu(t)) throw Error(z(200));
  return hu(null, e, t, !0, n);
};
en.hydrateRoot = function (e, t, n) {
  if (!Kp(e)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = n1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = t1(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Jn] = t.current),
    $s(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new fu(t);
};
en.render = function (e, t, n) {
  if (!pu(t)) throw Error(z(200));
  return hu(null, e, t, !1, n);
};
en.unmountComponentAtNode = function (e) {
  if (!pu(e)) throw Error(z(40));
  return e._reactRootContainer
    ? (oo(function () {
        hu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jn] = null);
        });
      }),
      !0)
    : !1;
};
en.unstable_batchedUpdates = Dp;
en.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!pu(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return hu(e, t, n, !1, r);
};
en.version = "18.3.1-next-f1338f8080-20240426";
function r1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r1);
    } catch (e) {
      console.error(e);
    }
}
r1(), (ry.exports = en);
var Gp = ry.exports;
const os = Hv(Gp);
var rg = Gp;
(Td.createRoot = rg.createRoot), (Td.hydrateRoot = rg.hydrateRoot);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zs() {
  return (
    (zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zs.apply(this, arguments)
  );
}
var gr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(gr || (gr = {}));
const og = "popstate";
function KR(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return wf(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : i1(o);
  }
  return qR(t, n, null, e);
}
function dt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function o1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function GR() {
  return Math.random().toString(36).substr(2, 8);
}
function ig(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    zs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? vi(t) : t,
      { state: n, key: (t && t.key) || r || GR() }
    )
  );
}
function i1(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function vi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function qR(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = gr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(zs({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = gr.Pop;
    let R = c(),
      g = R == null ? null : R - u;
    (u = R), l && l({ action: a, location: v.location, delta: g });
  }
  function f(R, g) {
    a = gr.Push;
    let p = wf(v.location, R, g);
    u = c() + 1;
    let m = ig(p, u),
      x = v.createHref(p);
    try {
      s.pushState(m, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(x);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function y(R, g) {
    a = gr.Replace;
    let p = wf(v.location, R, g);
    u = c();
    let m = ig(p, u),
      x = v.createHref(p);
    s.replaceState(m, "", x),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function h(R) {
    let g = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof R == "string" ? R : i1(R);
    return (
      (p = p.replace(/ $/, "%20")),
      dt(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, g)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(R) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(og, d),
        (l = R),
        () => {
          o.removeEventListener(og, d), (l = null);
        }
      );
    },
    createHref(R) {
      return t(o, R);
    },
    createURL: h,
    encodeLocation(R) {
      let g = h(R);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: y,
    go(R) {
      return s.go(R);
    },
  };
  return v;
}
var sg;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(sg || (sg = {}));
function QR(e, t, n) {
  return n === void 0 && (n = "/"), XR(e, t, n, !1);
}
function XR(e, t, n, r) {
  let o = typeof t == "string" ? vi(t) : t,
    i = l1(o.pathname || "/", n);
  if (i == null) return null;
  let s = s1(e);
  YR(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = lC(i);
    a = sC(s[l], u, r);
  }
  return a;
}
function s1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (dt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Yr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (dt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      s1(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: oC(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of a1(i.path)) o(i, s, l);
    }),
    t
  );
}
function a1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = a1(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function YR(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : iC(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ZR = /^:[\w-]+$/,
  JR = 3,
  eC = 2,
  tC = 1,
  nC = 10,
  rC = -2,
  ag = (e) => e === "*";
function oC(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ag) && (r += rC),
    t && (r += eC),
    n
      .filter((o) => !ag(o))
      .reduce((o, i) => o + (ZR.test(i) ? JR : i === "" ? tC : nC), r)
  );
}
function iC(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function sC(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = lg(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = lg(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: Yr([i, d.pathname]),
        pathnameBase: hC(Yr([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = Yr([i, d.pathnameBase]));
  }
  return s;
}
function lg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = aC(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: y } = c;
      if (f === "*") {
        let v = a[d] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const h = a[d];
      return (
        y && !h ? (u[f] = void 0) : (u[f] = (h || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function aC(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    o1(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function lC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      o1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function l1(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function uC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? vi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : cC(n, t)) : t,
    search: mC(r),
    hash: gC(o),
  };
}
function cC(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function nd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function dC(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fC(e, t) {
  let n = dC(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function pC(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = vi(e))
    : ((o = zs({}, e)),
      dt(
        !o.pathname || !o.pathname.includes("?"),
        nd("?", "pathname", "search", o)
      ),
      dt(
        !o.pathname || !o.pathname.includes("#"),
        nd("#", "pathname", "hash", o)
      ),
      dt(!o.search || !o.search.includes("#"), nd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = uC(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Yr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  hC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  mC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  gC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function vC(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const u1 = ["post", "put", "patch", "delete"];
new Set(u1);
const yC = ["get", ...u1];
new Set(yC);
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function js() {
  return (
    (js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    js.apply(this, arguments)
  );
}
const qp = S.createContext(null),
  SC = S.createContext(null),
  mu = S.createContext(null),
  gu = S.createContext(null),
  mo = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  c1 = S.createContext(null);
function vu() {
  return S.useContext(gu) != null;
}
function d1() {
  return vu() || dt(!1), S.useContext(gu).location;
}
function f1(e) {
  S.useContext(mu).static || S.useLayoutEffect(e);
}
function ta() {
  let { isDataRoute: e } = S.useContext(mo);
  return e ? LC() : xC();
}
function xC() {
  vu() || dt(!1);
  let e = S.useContext(qp),
    { basename: t, future: n, navigator: r } = S.useContext(mu),
    { matches: o } = S.useContext(mo),
    { pathname: i } = d1(),
    s = JSON.stringify(fC(o, n.v7_relativeSplatPath)),
    a = S.useRef(!1);
  return (
    f1(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = pC(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Yr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function bC() {
  let { matches: e } = S.useContext(mo),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function wC(e, t) {
  return RC(e, t);
}
function RC(e, t, n, r) {
  vu() || dt(!1);
  let { navigator: o } = S.useContext(mu),
    { matches: i } = S.useContext(mo),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = d1(),
    c;
  if (t) {
    var d;
    let R = typeof t == "string" ? vi(t) : t;
    l === "/" || ((d = R.pathname) != null && d.startsWith(l)) || dt(!1),
      (c = R);
  } else c = u;
  let f = c.pathname || "/",
    y = f;
  if (l !== "/") {
    let R = l.replace(/^\//, "").split("/");
    y = "/" + f.replace(/^\//, "").split("/").slice(R.length).join("/");
  }
  let h = QR(e, { pathname: y }),
    v = TC(
      h &&
        h.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, a, R.params),
            pathname: Yr([
              l,
              o.encodeLocation
                ? o.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === "/"
                ? l
                : Yr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? S.createElement(
        gu.Provider,
        {
          value: {
            location: js(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: gr.Pop,
          },
        },
        v
      )
    : v;
}
function CC() {
  let e = AC(),
    t = vC(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    null
  );
}
const _C = S.createElement(CC, null);
class EC extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? S.createElement(
          mo.Provider,
          { value: this.props.routeContext },
          S.createElement(c1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function kC(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(qp);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(mo.Provider, { value: t }, r)
  );
}
function TC(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || dt(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: y } = n,
          h =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || h) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let y,
      h = !1,
      v = null,
      R = null;
    n &&
      ((y = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || _C),
      l &&
        (u < 0 && f === 0
          ? ((h = !0), (R = null))
          : u === f &&
            ((h = !0), (R = d.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, f + 1)),
      p = () => {
        let m;
        return (
          y
            ? (m = v)
            : h
            ? (m = R)
            : d.route.Component
            ? (m = S.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = c),
          S.createElement(kC, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? S.createElement(EC, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var p1 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(p1 || {}),
  Bl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Bl || {});
function PC(e) {
  let t = S.useContext(qp);
  return t || dt(!1), t;
}
function NC(e) {
  let t = S.useContext(SC);
  return t || dt(!1), t;
}
function $C(e) {
  let t = S.useContext(mo);
  return t || dt(!1), t;
}
function h1(e) {
  let t = $C(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || dt(!1), n.route.id;
}
function AC() {
  var e;
  let t = S.useContext(c1),
    n = NC(Bl.UseRouteError),
    r = h1(Bl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function LC() {
  let { router: e } = PC(p1.UseNavigateStable),
    t = h1(Bl.UseNavigateStable),
    n = S.useRef(!1);
  return (
    f1(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, js({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function jr(e) {
  dt(!1);
}
function MC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = gr.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  vu() && dt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = S.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: js({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = vi(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: y = null,
      key: h = "default",
    } = r,
    v = S.useMemo(() => {
      let R = l1(c, l);
      return R == null
        ? null
        : {
            location: { pathname: R, search: d, hash: f, state: y, key: h },
            navigationType: o,
          };
    }, [l, c, d, f, y, h, o]);
  return v == null
    ? null
    : S.createElement(
        mu.Provider,
        { value: u },
        S.createElement(gu.Provider, { children: n, value: v })
      );
}
function OC(e) {
  let { children: t, location: n } = e;
  return wC(Rf(t), n);
}
new Promise(() => {});
function Rf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, Rf(r.props.children, i));
        return;
      }
      r.type !== jr && dt(!1), !r.props.index || !r.props.children || dt(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Rf(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const IC = "6";
try {
  window.__reactRouterVersion = IC;
} catch {}
const FC = "startTransition",
  ug = pl[FC];
function BC(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = S.useRef();
  i.current == null && (i.current = KR({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (d) => {
        u && ug ? ug(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.createElement(MC, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var cg;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(cg || (cg = {}));
var dg;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(dg || (dg = {}));
var m1 = {};
function DC(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var zC = DC,
  Se = zC;
function jC(e) {
  return !!e && typeof e.then == "function";
}
var We = jC;
function UC(e, t) {
  if (e != null) return e;
  throw Se(t ?? "Got unexpected null or undefined");
}
var Qe = UC;
function ve(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class yu {
  getValue() {
    throw Se("BaseLoadable");
  }
  toPromise() {
    throw Se("BaseLoadable");
  }
  valueMaybe() {
    throw Se("BaseLoadable");
  }
  valueOrThrow() {
    throw Se(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw Se("BaseLoadable");
  }
  promiseOrThrow() {
    throw Se(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw Se("BaseLoadable");
  }
  errorOrThrow() {
    throw Se(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw Se("BaseLoadable");
  }
}
class VC extends yu {
  constructor(t) {
    super(),
      ve(this, "state", "hasValue"),
      ve(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return We(n) ? io(n) : ii(n) ? n : na(n);
    } catch (n) {
      return We(n) ? io(n.next(() => this.map(t))) : Su(n);
    }
  }
}
class WC extends yu {
  constructor(t) {
    super(),
      ve(this, "state", "hasError"),
      ve(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class g1 extends yu {
  constructor(t) {
    super(),
      ve(this, "state", "loading"),
      ve(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return io(
      this.contents
        .then((n) => {
          const r = t(n);
          if (ii(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (We(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function na(e) {
  return Object.freeze(new VC(e));
}
function Su(e) {
  return Object.freeze(new WC(e));
}
function io(e) {
  return Object.freeze(new g1(e));
}
function v1() {
  return Object.freeze(new g1(new Promise(() => {})));
}
function HC(e) {
  return e.every((t) => t.state === "hasValue")
    ? na(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
    ? Su(
        Qe(
          e.find((t) => t.state === "hasError"),
          "Invalid loadable passed to loadableAll"
        ).contents
      )
    : io(Promise.all(e.map((t) => t.contents)));
}
function y1(e) {
  const n = (
      Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])
    ).map((o) => (ii(o) ? o : We(o) ? io(o) : na(o))),
    r = HC(n);
  return Array.isArray(e)
    ? r
    : r.map((o) =>
        Object.getOwnPropertyNames(e).reduce(
          (i, s, a) => ({ ...i, [s]: o[a] }),
          {}
        )
      );
}
function ii(e) {
  return e instanceof yu;
}
const KC = {
  of: (e) => (We(e) ? io(e) : ii(e) ? e : na(e)),
  error: (e) => Su(e),
  loading: () => v1(),
  all: y1,
  isLoadable: ii,
};
var go = {
    loadableWithValue: na,
    loadableWithError: Su,
    loadableWithPromise: io,
    loadableLoading: v1,
    loadableAll: y1,
    isLoadable: ii,
    RecoilLoadable: KC,
  },
  GC = go.loadableWithValue,
  qC = go.loadableWithError,
  QC = go.loadableWithPromise,
  XC = go.loadableLoading,
  YC = go.loadableAll,
  ZC = go.isLoadable,
  JC = go.RecoilLoadable,
  ra = Object.freeze({
    __proto__: null,
    loadableWithValue: GC,
    loadableWithError: qC,
    loadableWithPromise: QC,
    loadableLoading: XC,
    loadableAll: YC,
    isLoadable: ZC,
    RecoilLoadable: JC,
  });
const Cf = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function e_(e, t) {
  var n, r;
  const o =
    (n = m1[e]) === null ||
    n === void 0 ||
    (r = n.toLowerCase()) === null ||
    r === void 0
      ? void 0
      : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o))
    throw Se(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function t_(e, t) {
  var n;
  const r = (n = m1[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function n_() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (e_("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        Cf.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      t_("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          Cf.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
n_();
var yi = Cf;
function xu(e) {
  return yi.RECOIL_GKS_ENABLED.has(e);
}
xu.setPass = (e) => {
  yi.RECOIL_GKS_ENABLED.add(e);
};
xu.setFail = (e) => {
  yi.RECOIL_GKS_ENABLED.delete(e);
};
xu.clear = () => {
  yi.RECOIL_GKS_ENABLED.clear();
};
var De = xu;
function r_(e, t, { error: n } = {}) {
  return null;
}
var o_ = r_,
  Qp = o_,
  rd,
  od,
  id;
const i_ =
    (rd = Ee.createMutableSource) !== null && rd !== void 0
      ? rd
      : Ee.unstable_createMutableSource,
  S1 =
    (od = Ee.useMutableSource) !== null && od !== void 0
      ? od
      : Ee.unstable_useMutableSource,
  x1 =
    (id = Ee.useSyncExternalStore) !== null && id !== void 0
      ? id
      : Ee.unstable_useSyncExternalStore;
function s_() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
    Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0
      ? e
      : n.currentDispatcher
    ).useSyncExternalStore != null
  );
}
function a_() {
  return De("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : De("recoil_sync_external_store") && x1 != null
    ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
    : De("recoil_mutable_source") &&
      S1 != null &&
      typeof window < "u" &&
      !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
    ? De("recoil_suppress_rerender_in_callback")
      ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
      : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
    : De("recoil_suppress_rerender_in_callback")
    ? { mode: "LEGACY", early: !0, concurrent: !1 }
    : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function l_() {
  return !1;
}
var oa = {
  createMutableSource: i_,
  useMutableSource: S1,
  useSyncExternalStore: x1,
  currentRendererSupportsUseSyncExternalStore: s_,
  reactMode: a_,
  isFastRefreshEnabled: l_,
};
class Xp {
  constructor(t) {
    ve(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class b1 extends Xp {}
class w1 extends Xp {}
function u_(e) {
  return e instanceof b1 || e instanceof w1;
}
var bu = {
    AbstractRecoilValue: Xp,
    RecoilState: b1,
    RecoilValueReadOnly: w1,
    isRecoilValue: u_,
  },
  c_ = bu.AbstractRecoilValue,
  d_ = bu.RecoilState,
  f_ = bu.RecoilValueReadOnly,
  p_ = bu.isRecoilValue,
  si = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: c_,
    RecoilState: d_,
    RecoilValueReadOnly: f_,
    isRecoilValue: p_,
  });
function h_(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var wu = h_;
class R1 {}
const m_ = new R1(),
  so = new Map(),
  Yp = new Map();
function g_(e) {
  return wu(e, (t) => Qe(Yp.get(t)));
}
function v_(e) {
  if (so.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function y_(e) {
  yi.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && v_(e.key), so.set(e.key, e);
  const t =
    e.set == null
      ? new si.RecoilValueReadOnly(e.key)
      : new si.RecoilState(e.key);
  return Yp.set(e.key, t), t;
}
class C1 extends Error {}
function S_(e) {
  const t = so.get(e);
  if (t == null) throw new C1(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function x_(e) {
  return so.get(e);
}
const Dl = new Map();
function b_(e) {
  var t;
  if (!De("recoil_memory_managament_2020")) return;
  const n = so.get(e);
  if (
    n != null &&
    (t = n.shouldDeleteConfigOnRelease) !== null &&
    t !== void 0 &&
    t.call(n)
  ) {
    var r;
    so.delete(e), (r = _1(e)) === null || r === void 0 || r(), Dl.delete(e);
  }
}
function w_(e, t) {
  De("recoil_memory_managament_2020") &&
    (t === void 0 ? Dl.delete(e) : Dl.set(e, t));
}
function _1(e) {
  return Dl.get(e);
}
var Ht = {
  nodes: so,
  recoilValues: Yp,
  registerNode: y_,
  getNode: S_,
  getNodeMaybe: x_,
  deleteNodeConfigIfPossible: b_,
  setConfigDeletionHandler: w_,
  getConfigDeletionHandler: _1,
  recoilValuesForKeys: g_,
  NodeMissingError: C1,
  DefaultValue: R1,
  DEFAULT_VALUE: m_,
};
function R_(e, t) {
  t();
}
var C_ = { enqueueExecution: R_ };
function __(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var E_ = __(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (P) {
            return typeof P;
          }
        : function (P) {
            return P &&
              typeof Symbol == "function" &&
              P.constructor === Symbol &&
              P !== Symbol.prototype
              ? "symbol"
              : typeof P;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    s = o / 2,
    a = o / 4,
    l = {},
    u = function (T) {
      return function () {
        return T;
      };
    },
    c = (n.hash = function (P) {
      var T = typeof P > "u" ? "undefined" : t(P);
      if (T === "number") return P;
      T !== "string" && (P += "");
      for (var B = 0, X = 0, Y = P.length; X < Y; ++X) {
        var te = P.charCodeAt(X);
        B = ((B << 5) - B + te) | 0;
      }
      return B;
    }),
    d = function (T) {
      return (
        (T -= (T >> 1) & 1431655765),
        (T = (T & 858993459) + ((T >> 2) & 858993459)),
        (T = (T + (T >> 4)) & 252645135),
        (T += T >> 8),
        (T += T >> 16),
        T & 127
      );
    },
    f = function (T, B) {
      return (B >>> T) & i;
    },
    y = function (T) {
      return 1 << T;
    },
    h = function (T, B) {
      return d(T & (B - 1));
    },
    v = function (T, B, X, Y) {
      var te = Y;
      if (!T) {
        var me = Y.length;
        te = new Array(me);
        for (var pe = 0; pe < me; ++pe) te[pe] = Y[pe];
      }
      return (te[B] = X), te;
    },
    R = function (T, B, X) {
      var Y = X.length - 1,
        te = 0,
        me = 0,
        pe = X;
      if (T) te = me = B;
      else for (pe = new Array(Y); te < B; ) pe[me++] = X[te++];
      for (++te; te <= Y; ) pe[me++] = X[te++];
      return T && (pe.length = Y), pe;
    },
    g = function (T, B, X, Y) {
      var te = Y.length;
      if (T) {
        for (var me = te; me >= B; ) Y[me--] = Y[me];
        return (Y[B] = X), Y;
      }
      for (var pe = 0, he = 0, be = new Array(te + 1); pe < B; )
        be[he++] = Y[pe++];
      for (be[B] = X; pe < te; ) be[++he] = Y[pe++];
      return be;
    },
    p = 1,
    m = 2,
    x = 3,
    C = 4,
    E = { __hamt_isEmpty: !0 },
    _ = function (T) {
      return T === E || (T && T.__hamt_isEmpty);
    },
    N = function (T, B, X, Y) {
      return { type: p, edit: T, hash: B, key: X, value: Y, _modify: $ };
    },
    I = function (T, B, X) {
      return { type: m, edit: T, hash: B, children: X, _modify: V };
    },
    A = function (T, B, X) {
      return { type: x, edit: T, mask: B, children: X, _modify: F };
    },
    j = function (T, B, X) {
      return { type: C, edit: T, size: B, children: X, _modify: J };
    },
    G = function (T) {
      return T === E || T.type === p || T.type === m;
    },
    D = function (T, B, X, Y, te) {
      for (var me = [], pe = Y, he = 0, be = 0; pe; ++be)
        pe & 1 && (me[be] = te[he++]), (pe >>>= 1);
      return (me[B] = X), j(T, he + 1, me);
    },
    W = function (T, B, X, Y) {
      for (
        var te = new Array(B - 1), me = 0, pe = 0, he = 0, be = Y.length;
        he < be;
        ++he
      )
        if (he !== X) {
          var Ke = Y[he];
          Ke && !_(Ke) && ((te[me++] = Ke), (pe |= 1 << he));
        }
      return A(T, pe, te);
    },
    K = function P(T, B, X, Y, te, me) {
      if (X === te) return I(T, X, [me, Y]);
      var pe = f(B, X),
        he = f(B, te);
      return A(
        T,
        y(pe) | y(he),
        pe === he ? [P(T, B + r, X, Y, te, me)] : pe < he ? [Y, me] : [me, Y]
      );
    },
    H = function (T, B, X, Y, te, me, pe, he) {
      for (var be = te.length, Ke = 0; Ke < be; ++Ke) {
        var Ot = te[Ke];
        if (X(pe, Ot.key)) {
          var ft = Ot.value,
            sn = me(ft);
          return sn === ft
            ? te
            : sn === l
            ? (--he.value, R(T, Ke, te))
            : v(T, Ke, N(B, Y, pe, sn), te);
        }
      }
      var Rn = me();
      return Rn === l ? te : (++he.value, v(T, be, N(B, Y, pe, Rn), te));
    },
    Q = function (T, B) {
      return T === B.edit;
    },
    $ = function (T, B, X, Y, te, me, pe) {
      if (B(me, this.key)) {
        var he = Y(this.value);
        return he === this.value
          ? this
          : he === l
          ? (--pe.value, E)
          : Q(T, this)
          ? ((this.value = he), this)
          : N(T, te, me, he);
      }
      var be = Y();
      return be === l
        ? this
        : (++pe.value, K(T, X, this.hash, this, te, N(T, te, me, be)));
    },
    V = function (T, B, X, Y, te, me, pe) {
      if (te === this.hash) {
        var he = Q(T, this),
          be = H(he, T, B, this.hash, this.children, Y, me, pe);
        return be === this.children
          ? this
          : be.length > 1
          ? I(T, this.hash, be)
          : be[0];
      }
      var Ke = Y();
      return Ke === l
        ? this
        : (++pe.value, K(T, X, this.hash, this, te, N(T, te, me, Ke)));
    },
    F = function (T, B, X, Y, te, me, pe) {
      var he = this.mask,
        be = this.children,
        Ke = f(X, te),
        Ot = y(Ke),
        ft = h(he, Ot),
        sn = he & Ot,
        Rn = sn ? be[ft] : E,
        So = Rn._modify(T, B, X + r, Y, te, me, pe);
      if (Rn === So) return this;
      var va = Q(T, this),
        Ai = he,
        Li = void 0;
      if (sn && _(So)) {
        if (((Ai &= ~Ot), !Ai)) return E;
        if (be.length <= 2 && G(be[ft ^ 1])) return be[ft ^ 1];
        Li = R(va, ft, be);
      } else if (!sn && !_(So)) {
        if (be.length >= s) return D(T, Ke, So, he, be);
        (Ai |= Ot), (Li = g(va, ft, So, be));
      } else Li = v(va, ft, So, be);
      return va ? ((this.mask = Ai), (this.children = Li), this) : A(T, Ai, Li);
    },
    J = function (T, B, X, Y, te, me, pe) {
      var he = this.size,
        be = this.children,
        Ke = f(X, te),
        Ot = be[Ke],
        ft = (Ot || E)._modify(T, B, X + r, Y, te, me, pe);
      if (Ot === ft) return this;
      var sn = Q(T, this),
        Rn = void 0;
      if (_(Ot) && !_(ft)) ++he, (Rn = v(sn, Ke, ft, be));
      else if (!_(Ot) && _(ft)) {
        if ((--he, he <= a)) return W(T, he, Ke, be);
        Rn = v(sn, Ke, E, be);
      } else Rn = v(sn, Ke, ft, be);
      return sn ? ((this.size = he), (this.children = Rn), this) : j(T, he, Rn);
    };
  E._modify = function (P, T, B, X, Y, te, me) {
    var pe = X();
    return pe === l ? E : (++me.value, N(P, Y, te, pe));
  };
  function k(P, T, B, X, Y) {
    (this._editable = P),
      (this._edit = T),
      (this._config = B),
      (this._root = X),
      (this._size = Y);
  }
  k.prototype.setTree = function (P, T) {
    return this._editable
      ? ((this._root = P), (this._size = T), this)
      : P === this._root
      ? this
      : new k(this._editable, this._edit, this._config, P, T);
  };
  var O = (n.tryGetHash = function (P, T, B, X) {
    for (var Y = X._root, te = 0, me = X._config.keyEq; ; )
      switch (Y.type) {
        case p:
          return me(B, Y.key) ? Y.value : P;
        case m: {
          if (T === Y.hash)
            for (var pe = Y.children, he = 0, be = pe.length; he < be; ++he) {
              var Ke = pe[he];
              if (me(B, Ke.key)) return Ke.value;
            }
          return P;
        }
        case x: {
          var Ot = f(te, T),
            ft = y(Ot);
          if (Y.mask & ft) {
            (Y = Y.children[h(Y.mask, ft)]), (te += r);
            break;
          }
          return P;
        }
        case C: {
          if (((Y = Y.children[f(te, T)]), Y)) {
            te += r;
            break;
          }
          return P;
        }
        default:
          return P;
      }
  });
  k.prototype.tryGetHash = function (P, T, B) {
    return O(P, T, B, this);
  };
  var M = (n.tryGet = function (P, T, B) {
    return O(P, B._config.hash(T), T, B);
  });
  k.prototype.tryGet = function (P, T) {
    return M(P, T, this);
  };
  var Z = (n.getHash = function (P, T, B) {
    return O(void 0, P, T, B);
  });
  (k.prototype.getHash = function (P, T) {
    return Z(P, T, this);
  }),
    (n.get = function (P, T) {
      return O(void 0, T._config.hash(P), P, T);
    }),
    (k.prototype.get = function (P, T) {
      return M(T, P, this);
    });
  var U = (n.has = function (P, T, B) {
    return O(l, P, T, B) !== l;
  });
  k.prototype.hasHash = function (P, T) {
    return U(P, T, this);
  };
  var ie = (n.has = function (P, T) {
    return U(T._config.hash(P), P, T);
  });
  k.prototype.has = function (P) {
    return ie(P, this);
  };
  var se = function (T, B) {
    return T === B;
  };
  (n.make = function (P) {
    return new k(
      0,
      0,
      { keyEq: (P && P.keyEq) || se, hash: (P && P.hash) || c },
      E,
      0
    );
  }),
    (n.empty = n.make());
  var q = (n.isEmpty = function (P) {
    return P && !!_(P._root);
  });
  k.prototype.isEmpty = function () {
    return q(this);
  };
  var xe = (n.modifyHash = function (P, T, B, X) {
    var Y = { value: X._size },
      te = X._root._modify(
        X._editable ? X._edit : NaN,
        X._config.keyEq,
        0,
        P,
        T,
        B,
        Y
      );
    return X.setTree(te, Y.value);
  });
  k.prototype.modifyHash = function (P, T, B) {
    return xe(B, P, T, this);
  };
  var de = (n.modify = function (P, T, B) {
    return xe(P, B._config.hash(T), T, B);
  });
  k.prototype.modify = function (P, T) {
    return de(T, P, this);
  };
  var le = (n.setHash = function (P, T, B, X) {
    return xe(u(B), P, T, X);
  });
  k.prototype.setHash = function (P, T, B) {
    return le(P, T, B, this);
  };
  var oe = (n.set = function (P, T, B) {
    return le(B._config.hash(P), P, T, B);
  });
  k.prototype.set = function (P, T) {
    return oe(P, T, this);
  };
  var ye = u(l),
    Pe = (n.removeHash = function (P, T, B) {
      return xe(ye, P, T, B);
    });
  k.prototype.removeHash = k.prototype.deleteHash = function (P, T) {
    return Pe(P, T, this);
  };
  var rt = (n.remove = function (P, T) {
    return Pe(T._config.hash(P), P, T);
  });
  k.prototype.remove = k.prototype.delete = function (P) {
    return rt(P, this);
  };
  var ze = (n.beginMutation = function (P) {
    return new k(P._editable + 1, P._edit + 1, P._config, P._root, P._size);
  });
  k.prototype.beginMutation = function () {
    return ze(this);
  };
  var kt = (n.endMutation = function (P) {
    return (P._editable = P._editable && P._editable - 1), P;
  });
  k.prototype.endMutation = function () {
    return kt(this);
  };
  var Kt = (n.mutate = function (P, T) {
    var B = ze(T);
    return P(B), kt(B);
  });
  k.prototype.mutate = function (P) {
    return Kt(P, this);
  };
  var xt = function (T) {
      return T && je(T[0], T[1], T[2], T[3], T[4]);
    },
    je = function (T, B, X, Y, te) {
      for (; X < T; ) {
        var me = B[X++];
        if (me && !_(me)) return on(me, Y, [T, B, X, Y, te]);
      }
      return xt(te);
    },
    on = function (T, B, X) {
      switch (T.type) {
        case p:
          return { value: B(T), rest: X };
        case m:
        case C:
        case x:
          var Y = T.children;
          return je(Y.length, Y, 0, B, X);
        default:
          return xt(X);
      }
    },
    bt = { done: !0 };
  function Oe(P) {
    this.v = P;
  }
  (Oe.prototype.next = function () {
    if (!this.v) return bt;
    var P = this.v;
    return (this.v = xt(P.rest)), P;
  }),
    (Oe.prototype[Symbol.iterator] = function () {
      return this;
    });
  var Mt = function (T, B) {
      return new Oe(on(T._root, B));
    },
    Mn = function (T) {
      return [T.key, T.value];
    },
    bn = (n.entries = function (P) {
      return Mt(P, Mn);
    });
  k.prototype.entries = k.prototype[Symbol.iterator] = function () {
    return bn(this);
  };
  var Ie = function (T) {
      return T.key;
    },
    fe = (n.keys = function (P) {
      return Mt(P, Ie);
    });
  k.prototype.keys = function () {
    return fe(this);
  };
  var wn = function (T) {
      return T.value;
    },
    Fr =
      (n.values =
      k.prototype.values =
        function (P) {
          return Mt(P, wn);
        });
  k.prototype.values = function () {
    return Fr(this);
  };
  var or = (n.fold = function (P, T, B) {
    var X = B._root;
    if (X.type === p) return P(T, X.value, X.key);
    for (var Y = [X.children], te = void 0; (te = Y.pop()); )
      for (var me = 0, pe = te.length; me < pe; ) {
        var he = te[me++];
        he &&
          he.type &&
          (he.type === p ? (T = P(T, he.value, he.key)) : Y.push(he.children));
      }
    return T;
  });
  k.prototype.fold = function (P, T) {
    return or(P, T, this);
  };
  var ce = (n.forEach = function (P, T) {
    return or(
      function (B, X, Y) {
        return P(X, Y, T);
      },
      null,
      T
    );
  });
  k.prototype.forEach = function (P) {
    return ce(P, this);
  };
  var Be = (n.count = function (P) {
    return P._size;
  });
  (k.prototype.count = function () {
    return Be(this);
  }),
    Object.defineProperty(k.prototype, "size", { get: k.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class k_ {
  constructor(t) {
    ve(this, "_map", void 0),
      (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return Jp(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Zp {
  constructor(t) {
    if ((ve(this, "_hamt", E_.empty.beginMutation()), t instanceof Zp)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return Jp(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function Jp(e) {
  return De("recoil_hamt_2020") ? new Zp(e) : new k_(e);
}
var T_ = { persistentMap: Jp },
  P_ = T_.persistentMap,
  N_ = Object.freeze({ __proto__: null, persistentMap: P_ });
function $_(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var vs = $_;
function A_(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var zl = A_;
function L_() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function M_(e) {
  return {
    nodeDeps: zl(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: zl(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function sd(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    s = o.get(e);
  if (s && r && s !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const a = s == null ? t : vs(t, s);
  for (const l of a) i.has(l) || i.set(l, new Set()), Qe(i.get(l)).add(e);
  if (s) {
    const l = vs(s, t);
    for (const u of l) {
      if (!i.has(u)) return;
      const c = Qe(i.get(u));
      c.delete(e), c.size === 0 && i.delete(u);
    }
  }
}
function O_(e, t, n, r) {
  var o, i, s, a;
  const l = n.getState();
  r === l.currentTree.version ||
    r === ((o = l.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = l.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if (
    (sd(e, t, u),
    r === ((s = l.previousTree) === null || s === void 0 ? void 0 : s.version))
  ) {
    const d = n.getGraph(l.currentTree.version);
    sd(e, t, d, u);
  }
  if (
    r ===
      ((a = l.previousTree) === null || a === void 0 ? void 0 : a.version) ||
    r === l.currentTree.version
  ) {
    var c;
    const d = (c = l.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (d !== void 0) {
      const f = n.getGraph(d);
      sd(e, t, f, u);
    }
  }
}
var ia = { cloneGraph: M_, graph: L_, saveDepsToStore: O_ };
let I_ = 0;
const F_ = () => I_++;
let B_ = 0;
const D_ = () => B_++;
let z_ = 0;
const j_ = () => z_++;
var Ru = {
  getNextTreeStateVersion: F_,
  getNextStoreID: D_,
  getNextComponentID: j_,
};
const { persistentMap: fg } = N_,
  { graph: U_ } = ia,
  { getNextTreeStateVersion: E1 } = Ru;
function k1() {
  const e = E1();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: fg(),
    nonvalidatedAtoms: fg(),
  };
}
function V_() {
  const e = k1();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, U_()),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(),
  };
}
var T1 = {
  makeEmptyTreeState: k1,
  makeEmptyStoreState: V_,
  getNextTreeStateVersion: E1,
};
class P1 {}
function W_() {
  return new P1();
}
var Cu = { RetentionZone: P1, retentionZone: W_ };
function H_(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function K_(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function G_(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function q_(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function Q_(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function X_(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var N1 = {
  setByAddingToSet: H_,
  setByDeletingFromSet: K_,
  mapBySettingInMap: G_,
  mapByUpdatingInMap: q_,
  mapByDeletingFromMap: Q_,
  mapByDeletingMultipleFromMap: X_,
};
function* Y_(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var eh = Y_;
function Z_(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var $1 = Z_;
const { getNode: sa, getNodeMaybe: J_, recoilValuesForKeys: pg } = Ht,
  { RetentionZone: hg } = Cu,
  { setByAddingToSet: eE } = N1,
  tE = Object.freeze(new Set());
class nE extends Error {}
function rE(e, t, n) {
  if (!De("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let s = r.get(i);
    s || r.set(i, (s = new Set())), s.add(t);
  }
  if (n instanceof hg) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!De("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function s(a) {
      const l = i.nodesRetainedByZone.get(a);
      l == null || l.delete(t),
        l && l.size === 0 && i.nodesRetainedByZone.delete(a);
    }
    if (n instanceof hg) s(n);
    else if (Array.isArray(n)) for (const a of n) s(a);
  };
}
function th(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = sa(n),
    s = rE(e, n, i.retainedBy),
    a = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    a(), s();
  });
}
function oE(e, t, n) {
  th(e, e.getState().currentTree, t, n);
}
function iE(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t);
}
function sE(e, t, n) {
  return th(e, t, n, "get"), sa(n).get(e, t);
}
function A1(e, t, n) {
  return sa(n).peek(e, t);
}
function aE(e, t, n) {
  var r;
  const o = J_(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: eE(e.dirtyAtoms, t),
    }
  );
}
function lE(e, t, n, r) {
  const o = sa(n);
  if (o.set == null) throw new nE(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return th(e, t, n, "set"), i(e, t, r);
}
function uE(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = sa(n).nodeType;
  return $1(
    { type: i },
    {
      loadable: () => A1(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var s;
        return pg((s = o.nodeDeps.get(n)) !== null && s !== void 0 ? s : []);
      },
      subscribers: () => {
        var s, a;
        return {
          nodes: pg(eh(L1(e, t, new Set([n])), (l) => l !== n)),
          components: wu(
            (s =
              (a = r.nodeToComponentSubscriptions.get(n)) === null ||
              a === void 0
                ? void 0
                : a.values()) !== null && s !== void 0
              ? s
              : [],
            ([l]) => ({ name: l })
          ),
        };
      },
    }
  );
}
function L1(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let a = o.pop(); a; a = o.pop()) {
    var s;
    r.add(a);
    const l =
      (s = i.nodeToNodeSubscriptions.get(a)) !== null && s !== void 0 ? s : tE;
    for (const u of l) r.has(u) || o.push(u);
  }
  return r;
}
var Lr = {
  getNodeLoadable: sE,
  peekNodeLoadable: A1,
  setNodeValue: lE,
  initializeNode: oE,
  cleanUpNode: iE,
  setUnvalidatedAtomValue_DEPRECATED: aE,
  peekNodeInfo: uE,
  getDownstreamNodes: L1,
};
let M1 = null;
function cE(e) {
  M1 = e;
}
function dE() {
  var e;
  (e = M1) === null || e === void 0 || e();
}
var O1 = { setInvalidateMemoizedSnapshot: cE, invalidateMemoizedSnapshot: dE };
const { getDownstreamNodes: fE, getNodeLoadable: I1, setNodeValue: pE } = Lr,
  { getNextComponentID: hE } = Ru,
  { getNode: mE, getNodeMaybe: F1 } = Ht,
  { DefaultValue: nh } = Ht,
  { reactMode: gE } = oa,
  {
    AbstractRecoilValue: vE,
    RecoilState: yE,
    RecoilValueReadOnly: SE,
    isRecoilValue: xE,
  } = si,
  { invalidateMemoizedSnapshot: bE } = O1;
function wE(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version ===
      ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const s = I1(e, n, t);
  return s.state === "loading" && s.contents.catch(() => {}), s;
}
function RE(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof nh
        ? n.delete(o)
        : n.set(o, r);
    }),
    n
  );
}
function CE(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = I1(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw Se(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function _E(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      s = CE(e, t, o, i),
      a = pE(e, t, o.key, s);
    for (const [l, u] of a.entries()) _f(t, l, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    _f(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      s = F1(o);
    s == null || (r = s.invalidate) === null || r === void 0 || r.call(s, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Qp(`Unknown action ${n.type}`);
}
function _f(e, t, n) {
  n.state === "hasValue" && n.contents instanceof nh
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function B1(e, t) {
  e.replaceState((n) => {
    const r = D1(n);
    for (const o of t) _E(e, r, o);
    return z1(e, r), bE(), r;
  });
}
function _u(e, t) {
  if (ys.length) {
    const n = ys[ys.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else B1(e, [t]);
}
const ys = [];
function EE() {
  const e = new Map();
  return (
    ys.push(e),
    () => {
      for (const [t, n] of e) B1(t, n);
      ys.pop();
    }
  );
}
function D1(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function z1(e, t) {
  const n = fE(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = F1(i)) === null ||
      r === void 0 ||
      (o = r.invalidate) === null ||
      o === void 0 ||
      o.call(r, t);
  }
}
function j1(e, t, n) {
  _u(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function kE(e, t, n) {
  if (n instanceof nh) return j1(e, t, n);
  _u(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function TE(e, t) {
  _u(e, { type: "markModified", recoilValue: t });
}
function PE(e, t, n) {
  _u(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function NE(e, { key: t }, n, r = null) {
  const o = hE(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) ||
    i.nodeToComponentSubscriptions.set(t, new Map()),
    Qe(i.nodeToComponentSubscriptions.get(t)).set(o, [
      r ?? "<not captured>",
      n,
    ]);
  const s = gE();
  if (s.early && (s.mode === "LEGACY" || s.mode === "MUTABLE_SOURCE")) {
    const a = e.getState().nextTree;
    a && a.dirtyAtoms.has(t) && n(a);
  }
  return {
    release: () => {
      const a = e.getState(),
        l = a.nodeToComponentSubscriptions.get(t);
      l === void 0 ||
        !l.has(o) ||
        (l.delete(o), l.size === 0 && a.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function $E(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = mE(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var Vn = {
  RecoilValueReadOnly: SE,
  AbstractRecoilValue: vE,
  RecoilState: yE,
  getRecoilValueAsLoadable: wE,
  setRecoilValue: j1,
  setRecoilValueLoadable: kE,
  markRecoilValueModified: TE,
  setUnvalidatedRecoilValue: PE,
  subscribeToRecoilValue: NE,
  isRecoilValue: xE,
  applyAtomValueWrites: RE,
  batchStart: EE,
  writeLoadableToTreeState: _f,
  invalidateDownstreams: z1,
  copyTreeState: D1,
  refreshRecoilValue: $E,
};
function AE(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var LE = AE;
const { cleanUpNode: ME } = Lr,
  { deleteNodeConfigIfPossible: OE, getNode: U1 } = Ht,
  { RetentionZone: V1 } = Cu,
  IE = 12e4,
  W1 = new Set();
function H1(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const s of t)
    if (s instanceof V1) for (const a of zE(n, s)) o.add(a);
    else o.add(s);
  const i = FE(e, o);
  for (const s of i) DE(e, r, s);
}
function FE(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    s = new Set();
  return a(t), i;
  function a(l) {
    const u = new Set(),
      c = BE(e, r, l, i, s);
    for (const h of c) {
      var d;
      if (U1(h).retainedBy === "recoilRoot") {
        s.add(h);
        continue;
      }
      if (
        ((d = n.retention.referenceCounts.get(h)) !== null && d !== void 0
          ? d
          : 0) > 0
      ) {
        s.add(h);
        continue;
      }
      if (K1(h).some((R) => n.retention.referenceCounts.get(R))) {
        s.add(h);
        continue;
      }
      const v = o.nodeToNodeSubscriptions.get(h);
      if (v && LE(v, (R) => s.has(R))) {
        s.add(h);
        continue;
      }
      i.add(h), u.add(h);
    }
    const f = new Set();
    for (const h of u)
      for (const v of (y = o.nodeDeps.get(h)) !== null && y !== void 0
        ? y
        : W1) {
        var y;
        i.has(v) || f.add(v);
      }
    f.size && a(f);
  }
}
function BE(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    s = [],
    a = new Set();
  for (; n.size > 0; ) l(Qe(n.values().next().value));
  return s;
  function l(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (a.has(u)) return;
    const c = i.nodeToNodeSubscriptions.get(u);
    if (c) for (const d of c) l(d);
    a.add(u), n.delete(u), s.push(u);
  }
}
function DE(e, t, n) {
  if (!De("recoil_memory_managament_2020")) return;
  ME(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = K1(n);
  for (const l of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(l)) === null ||
      i === void 0 ||
      i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const s = r.graphsByVersion.get(t.version);
  if (s) {
    const l = s.nodeDeps.get(n);
    if (l !== void 0) {
      s.nodeDeps.delete(n);
      for (const u of l) {
        var a;
        (a = s.nodeToNodeSubscriptions.get(u)) === null ||
          a === void 0 ||
          a.delete(n);
      }
    }
    s.nodeToNodeSubscriptions.delete(n);
  }
  OE(n);
}
function zE(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0
    ? n
    : W1;
}
function K1(e) {
  const t = U1(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot"
    ? []
    : t instanceof V1
    ? [t]
    : t;
}
function jE(e, t) {
  const n = e.getState();
  n.nextTree
    ? n.retention.retainablesToCheckForRelease.add(t)
    : H1(e, new Set([t]));
}
function UE(e, t, n) {
  var r;
  if (!De("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? G1(e, t) : o.set(t, i);
}
function G1(e, t) {
  if (!De("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), jE(e, t);
}
function VE(e) {
  if (!De("recoil_memory_managament_2020")) return;
  const t = e.getState();
  H1(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear();
}
function WE(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var vo = {
  SUSPENSE_TIMEOUT_MS: IE,
  updateRetainCount: UE,
  updateRetainCountToZero: G1,
  releaseScheduledRetainablesNow: VE,
  retainedByOptionWithDefault: WE,
};
const { unstable_batchedUpdates: HE } = os;
var KE = { unstable_batchedUpdates: HE };
const { unstable_batchedUpdates: GE } = KE;
var qE = { unstable_batchedUpdates: GE };
const { batchStart: QE } = Vn,
  { unstable_batchedUpdates: XE } = qE;
let rh = XE || ((e) => e());
const YE = (e) => {
    rh = e;
  },
  ZE = () => rh,
  JE = (e) => {
    rh(() => {
      let t = () => {};
      try {
        (t = QE()), e();
      } finally {
        t();
      }
    });
  };
var Eu = { getBatcher: ZE, setBatcher: YE, batchUpdates: JE };
function* ek(e) {
  for (const t of e) for (const n of t) yield n;
}
var q1 = ek;
const Q1 = typeof Window > "u" || typeof window > "u",
  tk = (e) => !Q1 && (e === window || e instanceof Window),
  nk = typeof navigator < "u" && navigator.product === "ReactNative";
var ku = { isSSR: Q1, isReactNative: nk, isWindow: tk };
function rk(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function ok(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function ik(e, t) {
  let n, r;
  return [
    (...s) => {
      const a = t(...s);
      return n === a || ((n = a), (r = e(...s))), r;
    },
    () => {
      n = null;
    },
  ];
}
var sk = {
  memoizeWithArgsHash: rk,
  memoizeOneWithArgsHash: ok,
  memoizeOneWithArgsHashAndInvalidation: ik,
};
const { batchUpdates: Ef } = Eu,
  { initializeNode: ak, peekNodeInfo: lk } = Lr,
  { graph: uk } = ia,
  { getNextStoreID: ck } = Ru,
  { DEFAULT_VALUE: dk, recoilValues: mg, recoilValuesForKeys: gg } = Ht,
  {
    AbstractRecoilValue: fk,
    getRecoilValueAsLoadable: pk,
    setRecoilValue: vg,
    setUnvalidatedRecoilValue: hk,
  } = Vn,
  { updateRetainCount: ol } = vo,
  { setInvalidateMemoizedSnapshot: mk } = O1,
  { getNextTreeStateVersion: gk, makeEmptyStoreState: vk } = T1,
  { isSSR: yk } = ku,
  { memoizeOneWithArgsHashAndInvalidation: Sk } = sk;
class Tu {
  constructor(t, n) {
    ve(this, "_store", void 0),
      ve(this, "_refCount", 1),
      ve(
        this,
        "getLoadable",
        (r) => (this.checkRefCount_INTERNAL(), pk(this._store, r))
      ),
      ve(
        this,
        "getPromise",
        (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())
      ),
      ve(this, "getNodes_UNSTABLE", (r) => {
        if (
          (this.checkRefCount_INTERNAL(),
          (r == null ? void 0 : r.isModified) === !0)
        ) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const s = this._store.getState().currentTree;
          return gg(s.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? mg.values()
          : r.isInitialized === !0
          ? gg(q1([o, i]))
          : eh(mg.values(), ({ key: s }) => !o.has(s) && !i.has(s));
      }),
      ve(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (
          this.checkRefCount_INTERNAL(),
          lk(this._store, this._store.getState().currentTree, r)
        )
      ),
      ve(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new kf(this, Ef);
        return r(o), o;
      }),
      ve(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new kf(this, Ef);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: ck(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return Qe(o.get(r));
          const i = uk();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw Se("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms)
      ak(this._store, r, "get"), ol(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    yk || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !De("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    De("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function X1(e, t, n = !1) {
  const r = e.getState(),
    o = n ? gk() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(
      wu(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])
    ),
  };
}
function xk(e) {
  const t = new Tu(vk());
  return e != null ? t.map(e) : t;
}
const [yg, Y1] = Sk(
  (e, t) => {
    var n;
    const r = e.getState(),
      o =
        t === "latest"
          ? (n = r.nextTree) !== null && n !== void 0
            ? n
            : r.currentTree
          : Qe(r.previousTree);
    return new Tu(X1(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        (n = e.getState().nextTree) === null || n === void 0
          ? void 0
          : n.version
      ) +
      String(e.getState().currentTree.version) +
      String(
        (r = e.getState().previousTree) === null || r === void 0
          ? void 0
          : r.version
      )
    );
  }
);
mk(Y1);
function bk(e, t = "latest") {
  const n = yg(e, t);
  return n.isRetained() ? n : (Y1(), yg(e, t));
}
class kf extends Tu {
  constructor(t, n) {
    super(
      X1(
        t.getStore_INTERNAL(),
        t.getStore_INTERNAL().getState().currentTree,
        !0
      ),
      t.getStoreID()
    ),
      ve(this, "_batch", void 0),
      ve(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          ol(i, r.key, 1), vg(this.getStore_INTERNAL(), r, o);
        });
      }),
      ve(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          ol(o, r.key, 1), vg(this.getStore_INTERNAL(), r, dk);
        });
      }),
      ve(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        Ef(() => {
          for (const [i, s] of r.entries()) ol(o, i, 1), hk(o, new fk(i), s);
        });
      }),
      (this._batch = n);
  }
}
var Pu = {
    Snapshot: Tu,
    MutableSnapshot: kf,
    freshSnapshot: xk,
    cloneSnapshot: bk,
  },
  wk = Pu.Snapshot,
  Rk = Pu.MutableSnapshot,
  Ck = Pu.freshSnapshot,
  _k = Pu.cloneSnapshot,
  Nu = Object.freeze({
    __proto__: null,
    Snapshot: wk,
    MutableSnapshot: Rk,
    freshSnapshot: Ck,
    cloneSnapshot: _k,
  });
function Ek(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var kk = Ek;
const { useRef: Tk } = Ee;
function Pk(e) {
  const t = Tk(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var Sg = Pk;
const { getNextTreeStateVersion: Nk, makeEmptyStoreState: Z1 } = T1,
  {
    cleanUpNode: $k,
    getDownstreamNodes: Ak,
    initializeNode: Lk,
    setNodeValue: Mk,
    setUnvalidatedAtomValue_DEPRECATED: Ok,
  } = Lr,
  { graph: Ik } = ia,
  { cloneGraph: Fk } = ia,
  { getNextStoreID: J1 } = Ru,
  { createMutableSource: ad, reactMode: eS } = oa,
  { applyAtomValueWrites: Bk } = Vn,
  { releaseScheduledRetainablesNow: tS } = vo,
  { freshSnapshot: Dk } = Nu,
  {
    useCallback: zk,
    useContext: nS,
    useEffect: Tf,
    useMemo: jk,
    useRef: Uk,
    useState: Vk,
  } = Ee;
function Ui() {
  throw Se("This component must be used inside a <RecoilRoot> component.");
}
const rS = Object.freeze({
  storeID: J1(),
  getState: Ui,
  replaceState: Ui,
  getGraph: Ui,
  subscribeToTransactions: Ui,
  addTransactionMetadata: Ui,
});
let Pf = !1;
function xg(e) {
  if (Pf)
    throw Se(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    De("recoil_memory_managament_2020") &&
      De("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      tS(e);
    const n = t.currentTree.version,
      r = Nk();
    (t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, Fk(Qe(t.graphsByVersion.get(n))));
  }
}
const oS = Ee.createContext({ current: rS }),
  $u = () => nS(oS),
  iS = Ee.createContext(null);
function Wk() {
  return nS(iS);
}
function oh(e, t, n) {
  const r = Ak(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [s, [a, l]] of i) l(n);
  }
}
function sS(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions)
      if (r.has(o)) for (const [s, a] of i) a(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!eS().early || t.suspendedComponentResolvers.size > 0) &&
      (oh(e, t, n),
      t.suspendedComponentResolvers.forEach((o) => o()),
      t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length
    );
}
function Hk(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      sS(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Qp(
            "Ended batch with no previous state, which is unexpected",
            "recoil"
          ),
      (t.previousTree = null),
      De("recoil_memory_managament_2020") && n == null && tS(e);
  } finally {
    t.commitDepth--;
  }
}
function Kk({ setNotifyBatcherOfChange: e }) {
  const t = $u(),
    [, n] = Vk([]);
  return (
    e(() => n({})),
    Tf(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    Tf(() => {
      C_.enqueueExecution("Batcher", () => {
        Hk(t.current);
      });
    }),
    null
  );
}
function Gk(e, t) {
  const n = Z1();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          s = Mk(e, i, r.key, o),
          a = new Set(s.keys()),
          l = i.nonvalidatedAtoms.clone();
        for (const u of a) l.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: kk(i.dirtyAtoms, a),
          atomValues: Bk(i.atomValues, s),
          nonvalidatedAtoms: l,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = Ok(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function qk(e) {
  const t = Dk(e),
    n = t.getStore_INTERNAL().getState();
  return (
    t.retain(),
    n.nodeCleanupFunctions.forEach((r) => r()),
    n.nodeCleanupFunctions.clear(),
    n
  );
}
let bg = 0;
function Qk({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r,
}) {
  let o;
  const i = (y) => {
      const h = o.current.graphsByVersion;
      if (h.has(y)) return Qe(h.get(y));
      const v = Ik();
      return h.set(y, v), v;
    },
    s = (y, h) => {
      if (h == null) {
        const { transactionSubscriptions: v } = d.current.getState(),
          R = bg++;
        return (
          v.set(R, y),
          {
            release: () => {
              v.delete(R);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: v } = d.current.getState();
        v.has(h) || v.set(h, new Map());
        const R = bg++;
        return (
          Qe(v.get(h)).set(R, y),
          {
            release: () => {
              const g = v.get(h);
              g && (g.delete(R), g.size === 0 && v.delete(h));
            },
          }
        );
      }
    },
    a = (y) => {
      xg(d.current);
      for (const h of Object.keys(y))
        Qe(d.current.getState().nextTree).transactionMetadata[h] = y[h];
    },
    l = (y) => {
      xg(d.current);
      const h = Qe(o.current.nextTree);
      let v;
      try {
        (Pf = !0), (v = y(h));
      } finally {
        Pf = !1;
      }
      v !== h &&
        ((o.current.nextTree = v),
        eS().early && oh(d.current, o.current, v),
        Qe(u.current)());
    },
    u = Uk(null),
    c = zk(
      (y) => {
        u.current = y;
      },
      [u]
    ),
    d = Sg(
      () =>
        n ?? {
          storeID: J1(),
          getState: () => o.current,
          replaceState: l,
          getGraph: i,
          subscribeToTransactions: s,
          addTransactionMetadata: a,
        }
    );
  n != null && (d.current = n),
    (o = Sg(() => (e != null ? Gk(d.current, e) : t != null ? qk(t) : Z1())));
  const f = jk(
    () => (ad == null ? void 0 : ad(o, () => o.current.currentTree.version)),
    [o]
  );
  return (
    Tf(() => {
      const y = d.current;
      for (const h of new Set(y.getState().knownAtoms)) Lk(y, h, "get");
      return () => {
        for (const h of y.getState().knownAtoms) $k(y, h);
      };
    }, [d]),
    Ee.createElement(
      oS.Provider,
      { value: d },
      Ee.createElement(
        iS.Provider,
        { value: f },
        Ee.createElement(Kk, { setNotifyBatcherOfChange: c }),
        r
      )
    )
  );
}
function Xk(e) {
  const { override: t, ...n } = e,
    r = $u();
  return t === !1 && r.current !== rS ? e.children : Ee.createElement(Qk, n);
}
function Yk() {
  return $u().current.storeID;
}
var rr = {
  RecoilRoot: Xk,
  useStoreRef: $u,
  useRecoilMutableSource: Wk,
  useRecoilStoreID: Yk,
  notifyComponents_FOR_TESTING: oh,
  sendEndOfBatchNotifications_FOR_TESTING: sS,
};
function Zk(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var Jk = Zk;
const { useEffect: eT, useRef: tT } = Ee;
function nT(e) {
  const t = tT();
  return (
    eT(() => {
      t.current = e;
    }),
    t.current
  );
}
var aS = nT;
const { useStoreRef: rT } = rr,
  { SUSPENSE_TIMEOUT_MS: oT } = vo,
  { updateRetainCount: Vi } = vo,
  { RetentionZone: iT } = Cu,
  { useEffect: sT, useRef: aT } = Ee,
  { isSSR: wg } = ku;
function lT(e) {
  if (De("recoil_memory_managament_2020")) return uT(e);
}
function uT(e) {
  const n = (Array.isArray(e) ? e : [e]).map((s) =>
      s instanceof iT ? s : s.key
    ),
    r = rT();
  sT(() => {
    if (!De("recoil_memory_managament_2020")) return;
    const s = r.current;
    if (o.current && !wg) window.clearTimeout(o.current), (o.current = null);
    else for (const a of n) Vi(s, a, 1);
    return () => {
      for (const a of n) Vi(s, a, -1);
    };
  }, [r, ...n]);
  const o = aT(),
    i = aS(n);
  if (!wg && (i === void 0 || !Jk(i, n))) {
    const s = r.current;
    for (const a of n) Vi(s, a, 1);
    if (i) for (const a of i) Vi(s, a, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const a of n) Vi(s, a, -1);
      }, oT));
  }
}
var ih = lT;
function cT() {
  return "<component name not available>";
}
var aa = cT;
const { batchUpdates: dT } = Eu,
  { DEFAULT_VALUE: lS } = Ht,
  {
    currentRendererSupportsUseSyncExternalStore: fT,
    reactMode: Si,
    useMutableSource: pT,
    useSyncExternalStore: hT,
  } = oa,
  { useRecoilMutableSource: mT, useStoreRef: Wn } = rr,
  {
    AbstractRecoilValue: Nf,
    getRecoilValueAsLoadable: la,
    setRecoilValue: jl,
    setUnvalidatedRecoilValue: gT,
    subscribeToRecoilValue: ai,
  } = Vn,
  {
    useCallback: jt,
    useEffect: li,
    useMemo: uS,
    useRef: Ss,
    useState: sh,
  } = Ee,
  { setByAddingToSet: vT } = N1,
  { isSSR: yT } = ku;
function ah(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          yT &&
            We(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
    ? e.contents
    : Se(`Invalid value of loadable atom "${t.key}"`);
}
function ST() {
  const e = aa(),
    t = Wn(),
    [, n] = sh([]),
    r = Ss(new Set());
  r.current = new Set();
  const o = Ss(new Set()),
    i = Ss(new Map()),
    s = jt(
      (l) => {
        const u = i.current.get(l);
        u && (u.release(), i.current.delete(l));
      },
      [i]
    ),
    a = jt((l, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    li(() => {
      const l = t.current;
      vs(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const c = ai(l, new Nf(u), (f) => a(f, u), e);
        i.current.set(u, c),
          l.getState().nextTree
            ? l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                a(l.getState(), u);
              })
            : a(l.getState(), u);
      }),
        vs(o.current, r.current).forEach((u) => {
          s(u);
        }),
        (o.current = r.current);
    }),
    li(() => {
      const l = i.current;
      return (
        vs(r.current, new Set(l.keys())).forEach((u) => {
          const c = ai(t.current, new Nf(u), (d) => a(d, u), e);
          l.set(u, c);
        }),
        () => l.forEach((u, c) => s(c))
      );
    }, [e, t, s, a]),
    uS(() => {
      function l(h) {
        return (v) => {
          jl(t.current, h, v);
        };
      }
      function u(h) {
        return () => jl(t.current, h, lS);
      }
      function c(h) {
        var v;
        r.current.has(h.key) || (r.current = vT(r.current, h.key));
        const R = t.current.getState();
        return la(
          t.current,
          h,
          Si().early && (v = R.nextTree) !== null && v !== void 0
            ? v
            : R.currentTree
        );
      }
      function d(h) {
        const v = c(h);
        return ah(v, h, t);
      }
      function f(h) {
        return [d(h), l(h)];
      }
      function y(h) {
        return [c(h), l(h)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: c,
        getRecoilState: f,
        getRecoilStateLoadable: y,
        getSetRecoilState: l,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const xT = { current: 0 };
function bT(e) {
  const t = Wn(),
    n = aa(),
    r = jt(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c =
          Si().early && (a = u.nextTree) !== null && a !== void 0
            ? a
            : u.currentTree;
      return { loadable: la(l, e, c), key: e.key };
    }, [t, e]),
    o = jt((a) => {
      let l;
      return () => {
        var u, c;
        const d = a();
        return (u = l) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((c = l) === null || c === void 0 ? void 0 : c.key) === d.key
          ? l
          : ((l = d), d);
      };
    }, []),
    i = uS(() => o(r), [r, o]),
    s = jt(
      (a) => {
        const l = t.current;
        return ai(l, e, a, n).release;
      },
      [t, e, n]
    );
  return hT(s, i, i).loadable;
}
function wT(e) {
  const t = Wn(),
    n = jt(() => {
      var u;
      const c = t.current,
        d = c.getState(),
        f =
          Si().early && (u = d.nextTree) !== null && u !== void 0
            ? u
            : d.currentTree;
      return la(c, e, f);
    }, [t, e]),
    r = jt(() => n(), [n]),
    o = aa(),
    i = jt(
      (u, c) => {
        const d = t.current;
        return ai(
          d,
          e,
          () => {
            if (!De("recoil_suppress_rerender_in_callback")) return c();
            const y = n();
            l.current.is(y) || c(), (l.current = y);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    s = mT();
  if (s == null)
    throw Se(
      "Recoil hooks must be used in components contained within a <RecoilRoot> component."
    );
  const a = pT(s, r, i),
    l = Ss(a);
  return (
    li(() => {
      l.current = a;
    }),
    a
  );
}
function $f(e) {
  const t = Wn(),
    n = aa(),
    r = jt(() => {
      var l;
      const u = t.current,
        c = u.getState(),
        d =
          Si().early && (l = c.nextTree) !== null && l !== void 0
            ? l
            : c.currentTree;
      return la(u, e, d);
    }, [t, e]),
    o = jt(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = jt(
      (l) => {
        const u = o();
        return l.loadable.is(u.loadable) && l.key === u.key ? l : u;
      },
      [o]
    );
  li(() => {
    const l = ai(
      t.current,
      e,
      (u) => {
        a(i);
      },
      n
    );
    return a(i), l.release;
  }, [n, e, t, i]);
  const [s, a] = sh(o);
  return s.key !== e.key ? o().loadable : s.loadable;
}
function RT(e) {
  const t = Wn(),
    [, n] = sh([]),
    r = aa(),
    o = jt(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c =
          Si().early && (a = u.nextTree) !== null && a !== void 0
            ? a
            : u.currentTree;
      return la(l, e, c);
    }, [t, e]),
    i = o(),
    s = Ss(i);
  return (
    li(() => {
      s.current = i;
    }),
    li(() => {
      const a = t.current,
        l = a.getState(),
        u = ai(
          a,
          e,
          (d) => {
            var f;
            if (!De("recoil_suppress_rerender_in_callback")) return n([]);
            const y = o();
            ((f = s.current) !== null && f !== void 0 && f.is(y)) || n(y),
              (s.current = y);
          },
          r
        );
      if (l.nextTree)
        a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (s.current = null), n([]);
        });
      else {
        var c;
        if (!De("recoil_suppress_rerender_in_callback")) return n([]);
        const d = o();
        ((c = s.current) !== null && c !== void 0 && c.is(d)) || n(d),
          (s.current = d);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function lh(e) {
  return (
    De("recoil_memory_managament_2020") && ih(e),
    {
      TRANSITION_SUPPORT: $f,
      SYNC_EXTERNAL_STORE: fT() ? bT : $f,
      MUTABLE_SOURCE: wT,
      LEGACY: RT,
    }[Si().mode](e)
  );
}
function cS(e) {
  const t = Wn(),
    n = lh(e);
  return ah(n, e, t);
}
function Au(e) {
  const t = Wn();
  return jt(
    (n) => {
      jl(t.current, e, n);
    },
    [t, e]
  );
}
function CT(e) {
  const t = Wn();
  return jt(() => {
    jl(t.current, e, lS);
  }, [t, e]);
}
function _T(e) {
  return [cS(e), Au(e)];
}
function ET(e) {
  return [lh(e), Au(e)];
}
function kT() {
  const e = Wn();
  return (t, n = {}) => {
    dT(() => {
      e.current.addTransactionMetadata(n),
        t.forEach((r, o) => gT(e.current, new Nf(o), r));
    });
  };
}
function dS(e) {
  return De("recoil_memory_managament_2020") && ih(e), $f(e);
}
function fS(e) {
  const t = Wn(),
    n = dS(e);
  return ah(n, e, t);
}
function TT(e) {
  return [fS(e), Au(e)];
}
var PT = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: xT,
  useRecoilInterface: ST,
  useRecoilState: _T,
  useRecoilStateLoadable: ET,
  useRecoilValue: cS,
  useRecoilValueLoadable: lh,
  useResetRecoilState: CT,
  useSetRecoilState: Au,
  useSetUnvalidatedAtomValues: kT,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: dS,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: fS,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: TT,
};
function NT(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var $T = NT;
function AT(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var LT = AT;
function MT(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var OT = MT;
const { batchUpdates: IT } = Eu,
  { DEFAULT_VALUE: FT, getNode: pS, nodes: BT } = Ht,
  { useStoreRef: uh } = rr,
  { AbstractRecoilValue: DT, setRecoilValueLoadable: zT } = Vn,
  { SUSPENSE_TIMEOUT_MS: jT } = vo,
  { cloneSnapshot: Ul } = Nu,
  { useCallback: Lu, useEffect: hS, useRef: Rg, useState: UT } = Ee,
  { isSSR: Cg } = ku;
function Mu(e) {
  const t = uh();
  hS(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function _g(e) {
  const t = e.atomValues.toMap(),
    n = zl(
      $T(t, (r, o) => {
        const s = pS(o).persistence_UNSTABLE;
        return s != null && s.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return OT(e.nonvalidatedAtoms.toMap(), n);
}
function VT(e) {
  Mu(
    Lu(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = _g(r),
          i = _g(n),
          s = zl(BT, (l) => {
            var u, c, d, f;
            return {
              persistence_UNSTABLE: {
                type:
                  (u =
                    (c = l.persistence_UNSTABLE) === null || c === void 0
                      ? void 0
                      : c.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d =
                    (f = l.persistence_UNSTABLE) === null || f === void 0
                      ? void 0
                      : f.backButton) !== null && d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          a = LT(r.dirtyAtoms, (l) => o.has(l) || i.has(l));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: s,
          modifiedAtoms: a,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function WT(e) {
  Mu(
    Lu(
      (t) => {
        const n = Ul(t, "latest"),
          r = Ul(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function HT() {
  const e = uh(),
    [t, n] = UT(() => Ul(e.current)),
    r = aS(t),
    o = Rg(),
    i = Rg();
  if (
    (Mu(Lu((a) => n(Ul(a)), [])),
    hS(() => {
      const a = t.retain();
      if (o.current && !Cg) {
        var l;
        window.clearTimeout(o.current),
          (o.current = null),
          (l = i.current) === null || l === void 0 || l.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(a, 10);
      };
    }, [t]),
    r !== t && !Cg)
  ) {
    if (o.current) {
      var s;
      window.clearTimeout(o.current),
        (o.current = null),
        (s = i.current) === null || s === void 0 || s.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var a;
        (o.current = null),
          (a = i.current) === null || a === void 0 || a.call(i),
          (i.current = null);
      }, jT));
  }
  return t;
}
function mS(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  IT(() => {
    const s = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const c of u) {
        var a, l;
        ((a = o.atomValues.get(c)) === null || a === void 0
          ? void 0
          : a.contents) !==
          ((l = i.atomValues.get(c)) === null || l === void 0
            ? void 0
            : l.contents) &&
          pS(c).shouldRestoreFromSnapshots &&
          s.add(c);
      }
    s.forEach((u) => {
      zT(e, new DT(u), i.atomValues.has(u) ? Qe(i.atomValues.get(u)) : FT);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function KT() {
  const e = uh();
  return Lu((t) => mS(e.current, t), [e]);
}
var gS = {
  useRecoilSnapshot: HT,
  gotoSnapshot: mS,
  useGotoRecoilSnapshot: KT,
  useRecoilTransactionObserver: WT,
  useTransactionObservation_DEPRECATED: VT,
  useTransactionSubscription_DEPRECATED: Mu,
};
const { peekNodeInfo: GT } = Lr,
  { useStoreRef: qT } = rr;
function QT() {
  const e = qT();
  return ({ key: t }) => GT(e.current, e.current.getState().currentTree, t);
}
var XT = QT;
const { reactMode: YT } = oa,
  { RecoilRoot: ZT, useStoreRef: JT } = rr,
  { useMemo: e2 } = Ee;
function t2() {
  YT().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = JT().current;
  return e2(() => {
    function t({ children: n }) {
      return Ee.createElement(ZT, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var n2 = t2;
const { loadableWithValue: r2 } = ra,
  { initializeNode: o2 } = Lr,
  { DEFAULT_VALUE: i2, getNode: s2 } = Ht,
  {
    copyTreeState: a2,
    getRecoilValueAsLoadable: l2,
    invalidateDownstreams: u2,
    writeLoadableToTreeState: c2,
  } = Vn;
function Eg(e) {
  return s2(e.key).nodeType === "atom";
}
class d2 {
  constructor(t, n) {
    ve(this, "_store", void 0),
      ve(this, "_treeState", void 0),
      ve(this, "_changes", void 0),
      ve(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Eg(r))
          throw Se("Reading selectors within atomicUpdate is not supported");
        const o = l2(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : Se(
              `Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`
            );
      }),
      ve(this, "set", (r, o) => {
        if (!Eg(r))
          throw Se("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else o2(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      ve(this, "reset", (r) => {
        this.set(r, i2);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = a2(this._treeState);
    for (const [n, r] of this._changes) c2(t, n, r2(r));
    return u2(this._store, t), t;
  }
}
function f2(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new d2(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var p2 = { atomicUpdater: f2 },
  h2 = p2.atomicUpdater,
  vS = Object.freeze({ __proto__: null, atomicUpdater: h2 });
function m2(e, t) {
  if (!e) throw new Error(t);
}
var g2 = m2,
  is = g2;
const { atomicUpdater: v2 } = vS,
  { batchUpdates: y2 } = Eu,
  { DEFAULT_VALUE: S2 } = Ht,
  { useStoreRef: x2 } = rr,
  { refreshRecoilValue: b2, setRecoilValue: kg } = Vn,
  { cloneSnapshot: w2 } = Nu,
  { gotoSnapshot: R2 } = gS,
  { useCallback: C2 } = Ee;
class yS {}
const _2 = new yS();
function SS(e, t, n, r) {
  let o = _2,
    i;
  if (
    (y2(() => {
      const a =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw Se(a);
      const l = $1(
          {
            ...(r ?? {}),
            set: (c, d) => kg(e, c, d),
            reset: (c) => kg(e, c, S2),
            refresh: (c) => b2(e, c),
            gotoSnapshot: (c) => R2(e, c),
            transact_UNSTABLE: (c) => v2(e)(c),
          },
          {
            snapshot: () => {
              const c = w2(e);
              return (i = c.retain()), c;
            },
          }
        ),
        u = t(l);
      if (typeof u != "function") throw Se(a);
      o = u(...n);
    }),
    o instanceof yS && is(!1),
    We(o))
  )
    o = o.finally(() => {
      var a;
      (a = i) === null || a === void 0 || a();
    });
  else {
    var s;
    (s = i) === null || s === void 0 || s();
  }
  return o;
}
function E2(e, t) {
  const n = x2();
  return C2((...r) => SS(n.current, e, r), t != null ? [...t, n] : void 0);
}
var xS = { recoilCallback: SS, useRecoilCallback: E2 };
const { useStoreRef: k2 } = rr,
  { refreshRecoilValue: T2 } = Vn,
  { useCallback: P2 } = Ee;
function N2(e) {
  const t = k2();
  return P2(() => {
    const n = t.current;
    T2(n, e);
  }, [e, t]);
}
var $2 = N2;
const { atomicUpdater: A2 } = vS,
  { useStoreRef: L2 } = rr,
  { useMemo: M2 } = Ee;
function O2(e, t) {
  const n = L2();
  return M2(
    () =>
      (...r) => {
        A2(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var I2 = O2;
class F2 {
  constructor(t) {
    ve(this, "value", void 0), (this.value = t);
  }
}
var B2 = { WrappedValue: F2 },
  D2 = B2.WrappedValue,
  bS = Object.freeze({ __proto__: null, WrappedValue: D2 });
const { isFastRefreshEnabled: z2 } = oa;
class Tg extends Error {}
class j2 {
  constructor(t) {
    var n, r, o;
    ve(this, "_name", void 0),
      ve(this, "_numLeafs", void 0),
      ve(this, "_root", void 0),
      ve(this, "_onHit", void 0),
      ve(this, "_onSet", void 0),
      ve(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit =
        (n = t == null ? void 0 : t.onHit) !== null && n !== void 0
          ? n
          : () => {}),
      (this._onSet =
        (r = t == null ? void 0 : t.onSet) !== null && r !== void 0
          ? r
          : () => {}),
      (this._mapNodeValue =
        (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0
          ? o
          : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0
      ? void 0
      : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf"))
        return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, s, a, l;
      let u, c;
      for (const [R, g] of t) {
        var d, f, y;
        const p = this._root;
        if ((p == null ? void 0 : p.type) === "leaf")
          throw this.invalidCacheError();
        const m = u;
        if (
          ((u = m ? m.branches.get(c) : p),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : {
                  type: "branch",
                  nodeKey: R,
                  parent: m,
                  branches: new Map(),
                  branchKey: c,
                }),
          u.type !== "branch" || u.nodeKey !== R)
        )
          throw this.invalidCacheError();
        m == null || m.branches.set(c, u),
          r == null ||
            (f = r.onNodeVisit) === null ||
            f === void 0 ||
            f.call(r, u),
          (c = this._mapNodeValue(g)),
          (this._root = (y = this._root) !== null && y !== void 0 ? y : u);
      }
      const h = u
        ? (i = u) === null || i === void 0
          ? void 0
          : i.branches.get(c)
        : this._root;
      if (h != null && (h.type !== "leaf" || h.branchKey !== c))
        throw this.invalidCacheError();
      const v = { type: "leaf", value: n, parent: u, branchKey: c };
      (s = u) === null || s === void 0 || s.branches.set(c, v),
        (this._root = (a = this._root) !== null && a !== void 0 ? a : v),
        this._numLeafs++,
        this._onSet(v),
        r == null ||
          (l = r.onNodeVisit) === null ||
          l === void 0 ||
          l.call(r, v);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof Tg) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return (
          r.branches.size === 0
            ? ((this._root = null), (this._numLeafs = 0))
            : this._numLeafs--,
          !0
        );
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey),
        (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = z2()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Qp(t + (this._name != null ? ` - ${this._name}` : "")), new Tg());
  }
}
var U2 = { TreeCache: j2 },
  V2 = U2.TreeCache,
  wS = Object.freeze({ __proto__: null, TreeCache: V2 });
class W2 {
  constructor(t) {
    var n;
    ve(this, "_maxSize", void 0),
      ve(this, "_size", void 0),
      ve(this, "_head", void 0),
      ve(this, "_tail", void 0),
      ve(this, "_map", void 0),
      ve(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      s = { key: t, right: i, left: null, value: n };
    i ? (i.left = s) : (this._tail = s),
      this._map.set(r, s),
      (this._head = s),
      this._size++,
      this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = Qe(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map());
  }
}
var H2 = { LRUCache: W2 },
  K2 = H2.LRUCache,
  RS = Object.freeze({ __proto__: null, LRUCache: K2 });
const { LRUCache: G2 } = RS,
  { TreeCache: q2 } = wS;
function Q2({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new G2({ maxSize: t }),
    o = new q2({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const s = r.tail();
        r.set(i, !0), s && o.size() > t && o.delete(s.key);
      },
    });
  return o;
}
var Pg = Q2;
function _n(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw Se("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (We(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => _n(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return _n(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, s] of e) o[typeof i == "string" ? i : _n(i, t)] = s;
    return _n(o, t, n);
  }
  return e instanceof Set
    ? _n(
        Array.from(e).sort((o, i) => _n(o, t).localeCompare(_n(i, t))),
        t,
        n
      )
    : Symbol !== void 0 &&
      e[Symbol.iterator] != null &&
      typeof e[Symbol.iterator] == "function"
    ? _n(Array.from(e), t, n)
    : `{${Object.keys(e)
        .filter((o) => e[o] !== void 0)
        .sort()
        .map((o) => `${_n(o, t)}:${_n(e[o], t, o)}`)
        .join(",")}}`;
}
function X2(e, t = { allowFunctions: !1 }) {
  return _n(e, t);
}
var Ou = X2;
const { TreeCache: Y2 } = wS,
  Oa = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function Z2(
  {
    equality: e = Oa.equality,
    eviction: t = Oa.eviction,
    maxSize: n = Oa.maxSize,
  } = Oa,
  r
) {
  const o = J2(e);
  return eP(t, n, o, r);
}
function J2(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Ou(t);
  }
  throw Se(`Unrecognized equality policy ${e}`);
}
function eP(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new Y2({ name: r, mapNodeValue: n });
    case "lru":
      return Pg({ name: r, maxSize: Qe(t), mapNodeValue: n });
    case "most-recent":
      return Pg({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw Se(`Unrecognized eviction policy ${e}`);
}
var tP = Z2;
function nP(e) {
  return () => null;
}
var rP = { startPerfBlock: nP };
const {
    isLoadable: oP,
    loadableWithError: Ia,
    loadableWithPromise: iP,
    loadableWithValue: ld,
  } = ra,
  { WrappedValue: CS } = bS,
  { getNodeLoadable: Fa, peekNodeLoadable: sP, setNodeValue: aP } = Lr,
  { saveDepsToStore: lP } = ia,
  {
    DEFAULT_VALUE: uP,
    getConfigDeletionHandler: cP,
    getNode: dP,
    registerNode: Ng,
  } = Ht,
  { isRecoilValue: fP } = si,
  { markRecoilValueModified: $g } = Vn,
  { retainedByOptionWithDefault: pP } = vo,
  { recoilCallback: hP } = xS,
  { startPerfBlock: mP } = rP;
class _S {}
const Wi = new _S(),
  Hi = [],
  Ba = new Map(),
  gP = (() => {
    let e = 0;
    return () => e++;
  })();
function ES(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    s = new Set(),
    a = tP(o ?? { equality: "reference", eviction: "keep-all" }, n),
    l = pP(e.retainedBy_UNSTABLE),
    u = new Map();
  let c = 0;
  function d() {
    return !De("recoil_memory_managament_2020") || c > 0;
  }
  function f(k) {
    return (
      k.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function y() {
    return cP(n) !== void 0 && !d();
  }
  function h(k, O, M, Z, U) {
    H(O, Z, U), v(k, M);
  }
  function v(k, O) {
    W(k, O) && D(k), g(O, !0);
  }
  function R(k, O) {
    W(k, O) && (Qe(A(k)).stateVersions.clear(), g(O, !1));
  }
  function g(k, O) {
    const M = Ba.get(k);
    if (M != null) {
      for (const Z of M) $g(Z, Qe(t));
      O && Ba.delete(k);
    }
  }
  function p(k, O) {
    let M = Ba.get(O);
    M == null && Ba.set(O, (M = new Set())), M.add(k);
  }
  function m(k, O, M, Z, U, ie) {
    return O.then((se) => {
      if (!d()) throw (D(k), Wi);
      const q = ld(se);
      return h(k, M, U, q, Z), se;
    }).catch((se) => {
      if (!d()) throw (D(k), Wi);
      if (We(se)) return x(k, se, M, Z, U, ie);
      const q = Ia(se);
      throw (h(k, M, U, q, Z), se);
    });
  }
  function x(k, O, M, Z, U, ie) {
    return O.then((se) => {
      if (!d()) throw (D(k), Wi);
      ie.loadingDepKey != null && ie.loadingDepPromise === O
        ? M.atomValues.set(ie.loadingDepKey, ld(se))
        : k.getState().knownSelectors.forEach((le) => {
            M.atomValues.delete(le);
          });
      const q = _(k, M);
      if (q && q.state !== "loading") {
        if (((W(k, U) || A(k) == null) && v(k, U), q.state === "hasValue"))
          return q.contents;
        throw q.contents;
      }
      if (!W(k, U)) {
        const le = I(k, M);
        if (le != null) return le.loadingLoadable.contents;
      }
      const [xe, de] = E(k, M, U);
      if (
        (xe.state !== "loading" && h(k, M, U, xe, de), xe.state === "hasError")
      )
        throw xe.contents;
      return xe.contents;
    }).catch((se) => {
      if (se instanceof _S) throw Wi;
      if (!d()) throw (D(k), Wi);
      const q = Ia(se);
      throw (h(k, M, U, q, Z), se);
    });
  }
  function C(k, O, M, Z) {
    var U, ie, se, q;
    if (
      W(k, Z) ||
      O.version ===
        ((U = k.getState()) === null ||
        U === void 0 ||
        (ie = U.currentTree) === null ||
        ie === void 0
          ? void 0
          : ie.version) ||
      O.version ===
        ((se = k.getState()) === null ||
        se === void 0 ||
        (q = se.nextTree) === null ||
        q === void 0
          ? void 0
          : q.version)
    ) {
      var xe, de, le;
      lP(
        n,
        M,
        k,
        (xe =
          (de = k.getState()) === null ||
          de === void 0 ||
          (le = de.nextTree) === null ||
          le === void 0
            ? void 0
            : le.version) !== null && xe !== void 0
          ? xe
          : k.getState().currentTree.version
      );
    }
    for (const oe of M) s.add(oe);
  }
  function E(k, O, M) {
    const Z = mP(n);
    let U = !0,
      ie = !0;
    const se = () => {
      Z(), (ie = !1);
    };
    let q,
      xe = !1,
      de;
    const le = { loadingDepKey: null, loadingDepPromise: null },
      oe = new Map();
    function ye({ key: rt }) {
      const ze = Fa(k, O, rt);
      switch (
        (oe.set(rt, ze),
        U || (C(k, O, new Set(oe.keys()), M), R(k, M)),
        ze.state)
      ) {
        case "hasValue":
          return ze.contents;
        case "hasError":
          throw ze.contents;
        case "loading":
          throw (
            ((le.loadingDepKey = rt),
            (le.loadingDepPromise = ze.contents),
            ze.contents)
          );
      }
      throw Se("Invalid Loadable state");
    }
    const Pe =
      (rt) =>
      (...ze) => {
        if (ie)
          throw Se(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && is(!1), hP(k, rt, ze, { node: t });
      };
    try {
      (q = r({ get: ye, getCallback: Pe })),
        (q = fP(q) ? ye(q) : q),
        oP(q) && (q.state === "hasError" && (xe = !0), (q = q.contents)),
        We(q) ? (q = m(k, q, O, oe, M, le).finally(se)) : se(),
        (q = q instanceof CS ? q.value : q);
    } catch (rt) {
      (q = rt),
        We(q) ? (q = x(k, q, O, oe, M, le).finally(se)) : ((xe = !0), se());
    }
    return (
      xe ? (de = Ia(q)) : We(q) ? (de = iP(q)) : (de = ld(q)),
      (U = !1),
      G(k, M, oe),
      C(k, O, new Set(oe.keys()), M),
      [de, oe]
    );
  }
  function _(k, O) {
    let M = O.atomValues.get(n);
    if (M != null) return M;
    const Z = new Set();
    try {
      M = a.get(
        (ie) => (typeof ie != "string" && is(!1), Fa(k, O, ie).contents),
        {
          onNodeVisit: (ie) => {
            ie.type === "branch" && ie.nodeKey !== n && Z.add(ie.nodeKey);
          },
        }
      );
    } catch (ie) {
      throw Se(`Problem with cache lookup for selector "${n}": ${ie.message}`);
    }
    if (M) {
      var U;
      O.atomValues.set(n, M),
        C(
          k,
          O,
          Z,
          (U = A(k)) === null || U === void 0 ? void 0 : U.executionID
        );
    }
    return M;
  }
  function N(k, O) {
    const M = _(k, O);
    if (M != null) return D(k), M;
    const Z = I(k, O);
    if (Z != null) {
      var U;
      return (
        ((U = Z.loadingLoadable) === null || U === void 0
          ? void 0
          : U.state) === "loading" && p(k, Z.executionID),
        Z.loadingLoadable
      );
    }
    const ie = gP(),
      [se, q] = E(k, O, ie);
    return (
      se.state === "loading"
        ? (j(k, ie, se, q, O), p(k, ie))
        : (D(k), H(O, se, q)),
      se
    );
  }
  function I(k, O) {
    const M = q1([
      u.has(k) ? [Qe(u.get(k))] : [],
      wu(
        eh(u, ([U]) => U !== k),
        ([, U]) => U
      ),
    ]);
    function Z(U) {
      for (const [ie, se] of U) if (!Fa(k, O, ie).is(se)) return !0;
      return !1;
    }
    for (const U of M) {
      if (
        U.stateVersions.get(O.version) ||
        !Z(U.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return U.stateVersions.set(O.version, !0), U;
      U.stateVersions.set(O.version, !1);
    }
  }
  function A(k) {
    return u.get(k);
  }
  function j(k, O, M, Z, U) {
    u.set(k, {
      depValuesDiscoveredSoFarDuringAsyncWork: Z,
      executionID: O,
      loadingLoadable: M,
      stateVersions: new Map([[U.version, !0]]),
    });
  }
  function G(k, O, M) {
    if (W(k, O)) {
      const Z = A(k);
      Z != null && (Z.depValuesDiscoveredSoFarDuringAsyncWork = M);
    }
  }
  function D(k) {
    u.delete(k);
  }
  function W(k, O) {
    var M;
    return O === ((M = A(k)) === null || M === void 0 ? void 0 : M.executionID);
  }
  function K(k) {
    return Array.from(k.entries()).map(([O, M]) => [O, M.contents]);
  }
  function H(k, O, M) {
    k.atomValues.set(n, O);
    try {
      a.set(K(M), O);
    } catch (Z) {
      throw Se(`Problem with setting cache for selector "${n}": ${Z.message}`);
    }
  }
  function Q(k) {
    if (Hi.includes(n)) {
      const O = `Recoil selector has circular dependencies: ${Hi.slice(
        Hi.indexOf(n)
      ).join(" → ")}`;
      return Ia(Se(O));
    }
    Hi.push(n);
    try {
      return k();
    } finally {
      Hi.pop();
    }
  }
  function $(k, O) {
    const M = O.atomValues.get(n);
    return (
      M ??
      a.get((Z) => {
        var U;
        return (
          typeof Z != "string" && is(!1),
          (U = sP(k, O, Z)) === null || U === void 0 ? void 0 : U.contents
        );
      })
    );
  }
  function V(k, O) {
    return Q(() => N(k, O));
  }
  function F(k) {
    k.atomValues.delete(n);
  }
  function J(k, O) {
    t == null && is(!1);
    for (const Z of s) {
      var M;
      const U = dP(Z);
      (M = U.clearCache) === null || M === void 0 || M.call(U, k, O);
    }
    s.clear(), F(O), a.clear(), $g(k, t);
  }
  return i != null
    ? (t = Ng({
        key: n,
        nodeType: "selector",
        peek: $,
        get: V,
        set: (O, M, Z) => {
          let U = !1;
          const ie = new Map();
          function se({ key: le }) {
            if (U)
              throw Se(
                "Recoil: Async selector sets are not currently supported."
              );
            const oe = Fa(O, M, le);
            if (oe.state === "hasValue") return oe.contents;
            if (oe.state === "loading") {
              const ye = `Getting value of asynchronous atom or selector "${le}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw Se(ye);
            } else throw oe.contents;
          }
          function q(le, oe) {
            if (U)
              throw Se(
                "Recoil: Async selector sets are not currently supported."
              );
            const ye = typeof oe == "function" ? oe(se(le)) : oe;
            aP(O, M, le.key, ye).forEach((rt, ze) => ie.set(ze, rt));
          }
          function xe(le) {
            q(le, uP);
          }
          const de = i({ set: q, get: se, reset: xe }, Z);
          if (de !== void 0)
            throw We(de)
              ? Se("Recoil: Async selector sets are not currently supported.")
              : Se("Recoil: selector set should be a void function.");
          return (U = !0), ie;
        },
        init: f,
        invalidate: F,
        clearCache: J,
        shouldDeleteConfigOnRelease: y,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }))
    : (t = Ng({
        key: n,
        nodeType: "selector",
        peek: $,
        get: V,
        init: f,
        invalidate: F,
        clearCache: J,
        shouldDeleteConfigOnRelease: y,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }));
}
ES.value = (e) => new CS(e);
var ui = ES;
const {
    isLoadable: vP,
    loadableWithError: ud,
    loadableWithPromise: cd,
    loadableWithValue: bo,
  } = ra,
  { WrappedValue: kS } = bS,
  { peekNodeInfo: yP } = Lr,
  {
    DEFAULT_VALUE: Wr,
    DefaultValue: dr,
    getConfigDeletionHandler: TS,
    registerNode: SP,
    setConfigDeletionHandler: xP,
  } = Ht,
  { isRecoilValue: bP } = si,
  {
    getRecoilValueAsLoadable: wP,
    markRecoilValueModified: RP,
    setRecoilValue: Ag,
    setRecoilValueLoadable: CP,
  } = Vn,
  { retainedByOptionWithDefault: _P } = vo,
  Ki = (e) => (e instanceof kS ? e.value : e);
function EP(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = _P(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(p) {
    return cd(
      p
        .then((m) => ((s = bo(m)), m))
        .catch((m) => {
          throw ((s = ud(m)), m);
        })
    );
  }
  let s = We(e.default)
    ? i(e.default)
    : vP(e.default)
    ? e.default.state === "loading"
      ? i(e.default.contents)
      : e.default
    : bo(Ki(e.default));
  s.contents;
  let a;
  const l = new Map();
  function u(p) {
    return p;
  }
  function c(p, m) {
    const x = m
      .then((C) => {
        var E, _;
        return (
          ((_ = (
            (E = p.getState().nextTree) !== null && E !== void 0
              ? E
              : p.getState().currentTree
          ).atomValues.get(t)) === null || _ === void 0
            ? void 0
            : _.contents) === x && Ag(p, g, C),
          C
        );
      })
      .catch((C) => {
        var E, _;
        throw (
          (((_ = (
            (E = p.getState().nextTree) !== null && E !== void 0
              ? E
              : p.getState().currentTree
          ).atomValues.get(t)) === null || _ === void 0
            ? void 0
            : _.contents) === x && CP(p, g, ud(C)),
          C)
        );
      });
    return x;
  }
  function d(p, m, x) {
    var C;
    o++;
    const E = () => {
      var A;
      o--,
        (A = l.get(p)) === null || A === void 0 || A.forEach((j) => j()),
        l.delete(p);
    };
    if ((p.getState().knownAtoms.add(t), s.state === "loading")) {
      const A = () => {
        var j;
        ((j = p.getState().nextTree) !== null && j !== void 0
          ? j
          : p.getState().currentTree
        ).atomValues.has(t) || RP(p, g);
      };
      s.contents.finally(A);
    }
    const _ = (C = e.effects) !== null && C !== void 0 ? C : e.effects_UNSTABLE;
    if (_ != null) {
      let A = function (F) {
          if (W && F.key === t) {
            const J = D;
            return J instanceof dr
              ? f(p, m)
              : We(J)
              ? cd(J.then((k) => (k instanceof dr ? s.toPromise() : k)))
              : bo(J);
          }
          return wP(p, F);
        },
        j = function (F) {
          return A(F).toPromise();
        },
        G = function (F) {
          var J;
          const k = yP(
            p,
            (J = p.getState().nextTree) !== null && J !== void 0
              ? J
              : p.getState().currentTree,
            F.key
          );
          return W && F.key === t && !(D instanceof dr)
            ? { ...k, isSet: !0, loadable: A(F) }
            : k;
        },
        D = Wr,
        W = !0,
        K = !1,
        H = null;
      const Q = (F) => (J) => {
          if (W) {
            const k = A(g),
              O = k.state === "hasValue" ? k.contents : Wr;
            (D = typeof J == "function" ? J(O) : J),
              We(D) && (D = D.then((M) => ((H = { effect: F, value: M }), M)));
          } else {
            if (We(J))
              throw Se("Setting atoms to async values is not implemented.");
            typeof J != "function" && (H = { effect: F, value: Ki(J) }),
              Ag(
                p,
                g,
                typeof J == "function"
                  ? (k) => {
                      const O = Ki(J(k));
                      return (H = { effect: F, value: O }), O;
                    }
                  : Ki(J)
              );
          }
        },
        $ = (F) => () => Q(F)(Wr),
        V = (F) => (J) => {
          var k;
          const { release: O } = p.subscribeToTransactions((M) => {
            var Z;
            let { currentTree: U, previousTree: ie } = M.getState();
            ie || (ie = U);
            const se =
              (Z = U.atomValues.get(t)) !== null && Z !== void 0 ? Z : s;
            if (se.state === "hasValue") {
              var q, xe, de, le;
              const oe = se.contents,
                ye =
                  (q = ie.atomValues.get(t)) !== null && q !== void 0 ? q : s,
                Pe = ye.state === "hasValue" ? ye.contents : Wr;
              ((xe = H) === null || xe === void 0 ? void 0 : xe.effect) !== F ||
              ((de = H) === null || de === void 0 ? void 0 : de.value) !== oe
                ? J(oe, Pe, !U.atomValues.has(t))
                : ((le = H) === null || le === void 0 ? void 0 : le.effect) ===
                    F && (H = null);
            }
          }, t);
          l.set(p, [...((k = l.get(p)) !== null && k !== void 0 ? k : []), O]);
        };
      for (const F of _)
        try {
          const J = F({
            node: g,
            storeID: p.storeID,
            parentStoreID_UNSTABLE: p.parentStoreID,
            trigger: x,
            setSelf: Q(F),
            resetSelf: $(F),
            onSet: V(F),
            getPromise: j,
            getLoadable: A,
            getInfo_UNSTABLE: G,
          });
          if (J != null) {
            var N;
            l.set(p, [
              ...((N = l.get(p)) !== null && N !== void 0 ? N : []),
              J,
            ]);
          }
        } catch (J) {
          (D = J), (K = !0);
        }
      if (((W = !1), !(D instanceof dr))) {
        var I;
        const F = K ? ud(D) : We(D) ? cd(c(p, D)) : bo(Ki(D));
        F.contents,
          m.atomValues.set(t, F),
          (I = p.getState().nextTree) === null ||
            I === void 0 ||
            I.atomValues.set(t, F);
      }
    }
    return E;
  }
  function f(p, m) {
    var x, C;
    return (x = (C = m.atomValues.get(t)) !== null && C !== void 0 ? C : a) !==
      null && x !== void 0
      ? x
      : s;
  }
  function y(p, m) {
    if (m.atomValues.has(t)) return Qe(m.atomValues.get(t));
    if (m.nonvalidatedAtoms.has(t)) {
      if (a != null) return a;
      if (n == null) return s;
      const x = m.nonvalidatedAtoms.get(t),
        C = n.validator(x, Wr);
      return (a = C instanceof dr ? s : bo(C)), a;
    } else return s;
  }
  function h() {
    a = void 0;
  }
  function v(p, m, x) {
    if (m.atomValues.has(t)) {
      const C = Qe(m.atomValues.get(t));
      if (C.state === "hasValue" && x === C.contents) return new Map();
    } else if (!m.nonvalidatedAtoms.has(t) && x instanceof dr) return new Map();
    return (a = void 0), new Map().set(t, bo(x));
  }
  function R() {
    return TS(t) !== void 0 && o <= 0;
  }
  const g = SP({
    key: t,
    nodeType: "atom",
    peek: f,
    get: y,
    set: v,
    init: d,
    invalidate: h,
    shouldDeleteConfigOnRelease: R,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? {
          type: e.persistence_UNSTABLE.type,
          backButton: e.persistence_UNSTABLE.backButton,
        }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return g;
}
function ch(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return bP(n) ? kP({ ...t, default: n }) : EP({ ...t, default: n });
}
function kP(e) {
  const t = ch({
      ...e,
      default: Wr,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) =>
                r instanceof dr
                  ? r
                  : Qe(e.persistence_UNSTABLE).validator(r, Wr),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = ui({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof dr ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return xP(n.key, TS(e.key)), n;
}
ch.value = (e) => new kS(e);
var PS = ch;
class TP {
  constructor(t) {
    var n;
    ve(this, "_map", void 0),
      ve(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0
          ? n
          : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var PP = { MapCache: TP },
  NP = PP.MapCache,
  $P = Object.freeze({ __proto__: null, MapCache: NP });
const { LRUCache: Lg } = RS,
  { MapCache: AP } = $P,
  Da = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function LP({
  equality: e = Da.equality,
  eviction: t = Da.eviction,
  maxSize: n = Da.maxSize,
} = Da) {
  const r = MP(e);
  return OP(t, n, r);
}
function MP(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Ou(t);
  }
  throw Se(`Unrecognized equality policy ${e}`);
}
function OP(e, t, n) {
  switch (e) {
    case "keep-all":
      return new AP({ mapKey: n });
    case "lru":
      return new Lg({ mapKey: n, maxSize: Qe(t) });
    case "most-recent":
      return new Lg({ mapKey: n, maxSize: 1 });
  }
  throw Se(`Unrecognized eviction policy ${e}`);
}
var NS = LP;
const { setConfigDeletionHandler: IP } = Ht;
function FP(e) {
  var t, n;
  const r = NS({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, s;
    const a = r.get(o);
    if (a != null) return a;
    const { cachePolicyForParams_UNSTABLE: l, ...u } = e,
      c = "default" in e ? e.default : new Promise(() => {}),
      d = PS({
        ...u,
        key: `${e.key}__${(i = Ou(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof c == "function" ? c(o) : c,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function"
            ? e.retainedBy_UNSTABLE(o)
            : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
            ? e.effects_UNSTABLE(o)
            : (s = e.effects) !== null && s !== void 0
            ? s
            : e.effects_UNSTABLE,
      });
    return (
      r.set(o, d),
      IP(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var BP = FP;
const { setConfigDeletionHandler: DP } = Ht;
let zP = 0;
function jP(e) {
  var t, n;
  const r = NS({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let s;
    try {
      s = r.get(o);
    } catch (f) {
      throw Se(`Problem with cache lookup for selector ${e.key}: ${f.message}`);
    }
    if (s != null) return s;
    const a = `${e.key}__selectorFamily/${
        (i = Ou(o, { allowFunctions: !0 })) !== null && i !== void 0
          ? i
          : "void"
      }/${zP++}`,
      l = (f) => e.get(o)(f),
      u = e.cachePolicy_UNSTABLE,
      c =
        typeof e.retainedBy_UNSTABLE == "function"
          ? e.retainedBy_UNSTABLE(o)
          : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const f = e.set;
      d = ui({
        key: a,
        get: l,
        set: (h, v) => f(o)(h, v),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    } else
      d = ui({
        key: a,
        get: l,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    return (
      r.set(o, d),
      DP(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var Mr = jP;
const UP = Mr({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function VP(e) {
  return UP(e);
}
var WP = VP;
const HP = Mr({
  key: "__error",
  get: (e) => () => {
    throw Se(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function KP(e) {
  return HP(e);
}
var GP = KP;
function qP(e) {
  return e;
}
var QP = qP;
const {
  loadableWithError: $S,
  loadableWithPromise: AS,
  loadableWithValue: LS,
} = ra;
function Iu(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (s) {
      r[o] = s;
    }
  return [n, r];
}
function XP(e) {
  return e != null && !We(e);
}
function Fu(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function Af(e, t) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (n, r, o) => ({ ...n, [r]: t[o] }),
        {}
      );
}
function qo(e, t, n) {
  const r = n.map((o, i) => (o == null ? LS(t[i]) : We(o) ? AS(o) : $S(o)));
  return Af(e, r);
}
function YP(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const ZP = Mr({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Fu(e),
          [r, o] = Iu(t, n);
        return qo(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  JP = Mr({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Fu(e),
          [r, o] = Iu(t, n);
        return o.some((i) => !We(i))
          ? qo(e, r, o)
          : new Promise((i) => {
              for (const [s, a] of o.entries())
                We(a) &&
                  a
                    .then((l) => {
                      (r[s] = l), (o[s] = void 0), i(qo(e, r, o));
                    })
                    .catch((l) => {
                      (o[s] = l), i(qo(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  eN = Mr({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Fu(e),
          [r, o] = Iu(t, n);
        if (o.every((s) => s == null)) return Af(e, r);
        const i = o.find(XP);
        if (i != null) throw i;
        return Promise.all(o).then((s) => Af(e, YP(r, s)));
      },
    dangerouslyAllowMutability: !0,
  }),
  tN = Mr({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Fu(e),
          [r, o] = Iu(t, n);
        return o.every((i) => !We(i))
          ? qo(e, r, o)
          : Promise.all(
              o.map((i, s) =>
                We(i)
                  ? i
                      .then((a) => {
                        (r[s] = a), (o[s] = void 0);
                      })
                      .catch((a) => {
                        (r[s] = void 0), (o[s] = a);
                      })
                  : null
              )
            ).then(() => qo(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  nN = Mr({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return ui.value(LS(t(e)));
        } catch (n) {
          return ui.value(We(n) ? AS(n) : $S(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var rN = {
  waitForNone: ZP,
  waitForAny: JP,
  waitForAll: eN,
  waitForAllSettled: tN,
  noWait: nN,
};
const { RecoilLoadable: oN } = ra,
  { DefaultValue: iN } = Ht,
  { RecoilRoot: sN, useRecoilStoreID: aN } = rr,
  { isRecoilValue: lN } = si,
  { retentionZone: uN } = Cu,
  { freshSnapshot: cN } = Nu,
  {
    useRecoilState: dN,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: fN,
    useRecoilStateLoadable: pN,
    useRecoilValue: hN,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: mN,
    useRecoilValueLoadable: gN,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: vN,
    useResetRecoilState: yN,
    useSetRecoilState: SN,
  } = PT,
  {
    useGotoRecoilSnapshot: xN,
    useRecoilSnapshot: bN,
    useRecoilTransactionObserver: wN,
  } = gS,
  { useRecoilCallback: RN } = xS,
  {
    noWait: CN,
    waitForAll: _N,
    waitForAllSettled: EN,
    waitForAny: kN,
    waitForNone: TN,
  } = rN;
var ua = {
    DefaultValue: iN,
    isRecoilValue: lN,
    RecoilLoadable: oN,
    RecoilEnv: yi,
    RecoilRoot: sN,
    useRecoilStoreID: aN,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: n2,
    atom: PS,
    selector: ui,
    atomFamily: BP,
    selectorFamily: Mr,
    constSelector: WP,
    errorSelector: GP,
    readOnlySelector: QP,
    noWait: CN,
    waitForNone: TN,
    waitForAny: kN,
    waitForAll: _N,
    waitForAllSettled: EN,
    useRecoilValue: hN,
    useRecoilValueLoadable: gN,
    useRecoilState: dN,
    useRecoilStateLoadable: pN,
    useSetRecoilState: SN,
    useResetRecoilState: yN,
    useGetRecoilValueInfo_UNSTABLE: XT,
    useRecoilRefresher_UNSTABLE: $2,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: vN,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: mN,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: fN,
    useRecoilCallback: RN,
    useRecoilTransaction_UNSTABLE: I2,
    useGotoRecoilSnapshot: xN,
    useRecoilSnapshot: bN,
    useRecoilTransactionObserver_UNSTABLE: wN,
    snapshot_UNSTABLE: cN,
    useRetain: ih,
    retentionZone: uN,
  },
  PN = ua.RecoilRoot,
  dh = ua.atom,
  NN = ua.selectorFamily,
  $N = ua.useRecoilValue,
  Us = ua.useRecoilState;
const Vs = { black: "#000", white: "#fff" },
  wo = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Ro = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Co = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  _o = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Eo = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Gi = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  AN = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function ao(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const LN = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ao },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Bu = "$$material";
function b() {
  return (
    (b = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    b.apply(null, arguments)
  );
}
function re(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function MS(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var MN =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ON = MS(function (e) {
    return (
      MN.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  IN = !1;
function FN(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function BN(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var DN = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !IN : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(BN(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = FN(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ct = "-ms-",
  Vl = "-moz-",
  Ne = "-webkit-",
  OS = "comm",
  fh = "rule",
  ph = "decl",
  zN = "@import",
  IS = "@keyframes",
  jN = "@layer",
  UN = Math.abs,
  Du = String.fromCharCode,
  VN = Object.assign;
function WN(e, t) {
  return vt(e, 0) ^ 45
    ? (((((((t << 2) ^ vt(e, 0)) << 2) ^ vt(e, 1)) << 2) ^ vt(e, 2)) << 2) ^
        vt(e, 3)
    : 0;
}
function FS(e) {
  return e.trim();
}
function HN(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function $e(e, t, n) {
  return e.replace(t, n);
}
function Lf(e, t) {
  return e.indexOf(t);
}
function vt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ws(e, t, n) {
  return e.slice(t, n);
}
function Fn(e) {
  return e.length;
}
function hh(e) {
  return e.length;
}
function za(e, t) {
  return t.push(e), e;
}
function KN(e, t) {
  return e.map(t).join("");
}
var zu = 1,
  ci = 1,
  BS = 0,
  Vt = 0,
  at = 0,
  xi = "";
function ju(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: zu,
    column: ci,
    length: s,
    return: "",
  };
}
function qi(e, t) {
  return VN(ju("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function GN() {
  return at;
}
function qN() {
  return (
    (at = Vt > 0 ? vt(xi, --Vt) : 0), ci--, at === 10 && ((ci = 1), zu--), at
  );
}
function Yt() {
  return (
    (at = Vt < BS ? vt(xi, Vt++) : 0), ci++, at === 10 && ((ci = 1), zu++), at
  );
}
function Un() {
  return vt(xi, Vt);
}
function il() {
  return Vt;
}
function ca(e, t) {
  return Ws(xi, e, t);
}
function Hs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function DS(e) {
  return (zu = ci = 1), (BS = Fn((xi = e))), (Vt = 0), [];
}
function zS(e) {
  return (xi = ""), e;
}
function sl(e) {
  return FS(ca(Vt - 1, Mf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function QN(e) {
  for (; (at = Un()) && at < 33; ) Yt();
  return Hs(e) > 2 || Hs(at) > 3 ? "" : " ";
}
function XN(e, t) {
  for (
    ;
    --t &&
    Yt() &&
    !(at < 48 || at > 102 || (at > 57 && at < 65) || (at > 70 && at < 97));

  );
  return ca(e, il() + (t < 6 && Un() == 32 && Yt() == 32));
}
function Mf(e) {
  for (; Yt(); )
    switch (at) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mf(at);
        break;
      case 40:
        e === 41 && Mf(e);
        break;
      case 92:
        Yt();
        break;
    }
  return Vt;
}
function YN(e, t) {
  for (; Yt() && e + at !== 57; ) if (e + at === 84 && Un() === 47) break;
  return "/*" + ca(t, Vt - 1) + "*" + Du(e === 47 ? e : Yt());
}
function ZN(e) {
  for (; !Hs(Un()); ) Yt();
  return ca(e, Vt);
}
function JN(e) {
  return zS(al("", null, null, null, [""], (e = DS(e)), 0, [0], e));
}
function al(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      y = 0,
      h = 0,
      v = 1,
      R = 1,
      g = 1,
      p = 0,
      m = "",
      x = o,
      C = i,
      E = r,
      _ = m;
    R;

  )
    switch (((h = p), (p = Yt()))) {
      case 40:
        if (h != 108 && vt(_, d - 1) == 58) {
          Lf((_ += $e(sl(p), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += sl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += QN(h);
        break;
      case 92:
        _ += XN(il() - 1, 7);
        continue;
      case 47:
        switch (Un()) {
          case 42:
          case 47:
            za(e$(YN(Yt(), il()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * v:
        a[u++] = Fn(_) * g;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            R = 0;
          case 59 + c:
            g == -1 && (_ = $e(_, /\f/g, "")),
              y > 0 &&
                Fn(_) - d &&
                za(
                  y > 32
                    ? Og(_ + ";", r, n, d - 1)
                    : Og($e(_, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (za((E = Mg(_, t, n, u, c, o, a, m, (x = []), (C = []), d)), i),
              p === 123)
            )
              if (c === 0) al(_, t, E, E, x, i, d, a, C);
              else
                switch (f === 99 && vt(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    al(
                      e,
                      E,
                      E,
                      r && za(Mg(e, E, E, 0, 0, o, a, m, o, (x = []), d), C),
                      o,
                      C,
                      d,
                      a,
                      r ? x : C
                    );
                    break;
                  default:
                    al(_, E, E, E, [""], C, 0, a, C);
                }
        }
        (u = c = y = 0), (v = g = 1), (m = _ = ""), (d = s);
        break;
      case 58:
        (d = 1 + Fn(_)), (y = h);
      default:
        if (v < 1) {
          if (p == 123) --v;
          else if (p == 125 && v++ == 0 && qN() == 125) continue;
        }
        switch (((_ += Du(p)), p * v)) {
          case 38:
            g = c > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Fn(_) - 1) * g), (g = 1);
            break;
          case 64:
            Un() === 45 && (_ += sl(Yt())),
              (f = Un()),
              (c = d = Fn((m = _ += ZN(il())))),
              p++;
            break;
          case 45:
            h === 45 && Fn(_) == 2 && (v = 0);
        }
    }
  return i;
}
function Mg(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], y = hh(f), h = 0, v = 0, R = 0;
    h < r;
    ++h
  )
    for (var g = 0, p = Ws(e, d + 1, (d = UN((v = s[h])))), m = e; g < y; ++g)
      (m = FS(v > 0 ? f[g] + " " + p : $e(p, /&\f/g, f[g]))) && (l[R++] = m);
  return ju(e, t, n, o === 0 ? fh : a, l, u, c);
}
function e$(e, t, n) {
  return ju(e, t, n, OS, Du(GN()), Ws(e, 2, -2), 0);
}
function Og(e, t, n, r) {
  return ju(e, t, n, ph, Ws(e, 0, r), Ws(e, r + 1, -1), r);
}
function Qo(e, t) {
  for (var n = "", r = hh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function t$(e, t, n, r) {
  switch (e.type) {
    case jN:
      if (e.children.length) break;
    case zN:
    case ph:
      return (e.return = e.return || e.value);
    case OS:
      return "";
    case IS:
      return (e.return = e.value + "{" + Qo(e.children, r) + "}");
    case fh:
      e.value = e.props.join(",");
  }
  return Fn((n = Qo(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function n$(e) {
  var t = hh(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function r$(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var o$ = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = Un()), o === 38 && i === 12 && (n[r] = 1), !Hs(i);

    )
      Yt();
    return ca(t, Vt);
  },
  i$ = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Hs(o)) {
        case 0:
          o === 38 && Un() === 12 && (n[r] = 1), (t[r] += o$(Vt - 1, n, r));
          break;
        case 2:
          t[r] += sl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Un() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Du(o);
      }
    while ((o = Yt()));
    return t;
  },
  s$ = function (t, n) {
    return zS(i$(DS(t), n));
  },
  Ig = new WeakMap(),
  a$ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ig.get(r)) &&
        !o
      ) {
        Ig.set(t, !0);
        for (
          var i = [], s = s$(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  l$ = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function jS(e, t) {
  switch (WN(e, t)) {
    case 5103:
      return Ne + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ne + e + Vl + e + Ct + e + e;
    case 6828:
    case 4268:
      return Ne + e + Ct + e + e;
    case 6165:
      return Ne + e + Ct + "flex-" + e + e;
    case 5187:
      return (
        Ne + e + $e(e, /(\w+).+(:[^]+)/, Ne + "box-$1$2" + Ct + "flex-$1$2") + e
      );
    case 5443:
      return Ne + e + Ct + "flex-item-" + $e(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Ne +
        e +
        Ct +
        "flex-line-pack" +
        $e(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Ne + e + Ct + $e(e, "shrink", "negative") + e;
    case 5292:
      return Ne + e + Ct + $e(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Ne +
        "box-" +
        $e(e, "-grow", "") +
        Ne +
        e +
        Ct +
        $e(e, "grow", "positive") +
        e
      );
    case 4554:
      return Ne + $e(e, /([^-])(transform)/g, "$1" + Ne + "$2") + e;
    case 6187:
      return (
        $e(
          $e($e(e, /(zoom-|grab)/, Ne + "$1"), /(image-set)/, Ne + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return $e(e, /(image-set\([^]*)/, Ne + "$1$`$1");
    case 4968:
      return (
        $e(
          $e(e, /(.+:)(flex-)?(.*)/, Ne + "box-pack:$3" + Ct + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Ne +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $e(e, /(.+)-inline(.+)/, Ne + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Fn(e) - 1 - t > 6)
        switch (vt(e, t + 1)) {
          case 109:
            if (vt(e, t + 4) !== 45) break;
          case 102:
            return (
              $e(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Ne +
                  "$2-$3$1" +
                  Vl +
                  (vt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Lf(e, "stretch")
              ? jS($e(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (vt(e, t + 1) !== 115) break;
    case 6444:
      switch (vt(e, Fn(e) - 3 - (~Lf(e, "!important") && 10))) {
        case 107:
          return $e(e, ":", ":" + Ne) + e;
        case 101:
          return (
            $e(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Ne +
                (vt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Ne +
                "$2$3$1" +
                Ct +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (vt(e, t + 11)) {
        case 114:
          return Ne + e + Ct + $e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ne + e + Ct + $e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ne + e + Ct + $e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ne + e + Ct + e + e;
  }
  return e;
}
var u$ = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case ph:
          t.return = jS(t.value, t.length);
          break;
        case IS:
          return Qo([qi(t, { value: $e(t.value, "@", "@" + Ne) })], o);
        case fh:
          if (t.length)
            return KN(t.props, function (i) {
              switch (HN(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Qo(
                    [qi(t, { props: [$e(i, /:(read-\w+)/, ":" + Vl + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Qo(
                    [
                      qi(t, {
                        props: [$e(i, /:(plac\w+)/, ":" + Ne + "input-$1")],
                      }),
                      qi(t, { props: [$e(i, /:(plac\w+)/, ":" + Vl + "$1")] }),
                      qi(t, { props: [$e(i, /:(plac\w+)/, Ct + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  c$ = [u$],
  US = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var R = v.getAttribute("data-emotion");
        R.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || c$,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var R = v.getAttribute("data-emotion").split(" "), g = 1;
            g < R.length;
            g++
          )
            i[R[g]] = !0;
          a.push(v);
        }
      );
    var l,
      u = [a$, l$];
    {
      var c,
        d = [
          t$,
          r$(function (v) {
            c.insert(v);
          }),
        ],
        f = n$(u.concat(o, d)),
        y = function (R) {
          return Qo(JN(R), f);
        };
      l = function (R, g, p, m) {
        (c = p),
          y(R ? R + "{" + g.styles + "}" : g.styles),
          m && (h.inserted[g.name] = !0);
      };
    }
    var h = {
      key: n,
      sheet: new DN({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return h.sheet.hydrate(a), h;
  },
  VS = { exports: {} },
  Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mt = typeof Symbol == "function" && Symbol.for,
  mh = mt ? Symbol.for("react.element") : 60103,
  gh = mt ? Symbol.for("react.portal") : 60106,
  Uu = mt ? Symbol.for("react.fragment") : 60107,
  Vu = mt ? Symbol.for("react.strict_mode") : 60108,
  Wu = mt ? Symbol.for("react.profiler") : 60114,
  Hu = mt ? Symbol.for("react.provider") : 60109,
  Ku = mt ? Symbol.for("react.context") : 60110,
  vh = mt ? Symbol.for("react.async_mode") : 60111,
  Gu = mt ? Symbol.for("react.concurrent_mode") : 60111,
  qu = mt ? Symbol.for("react.forward_ref") : 60112,
  Qu = mt ? Symbol.for("react.suspense") : 60113,
  d$ = mt ? Symbol.for("react.suspense_list") : 60120,
  Xu = mt ? Symbol.for("react.memo") : 60115,
  Yu = mt ? Symbol.for("react.lazy") : 60116,
  f$ = mt ? Symbol.for("react.block") : 60121,
  p$ = mt ? Symbol.for("react.fundamental") : 60117,
  h$ = mt ? Symbol.for("react.responder") : 60118,
  m$ = mt ? Symbol.for("react.scope") : 60119;
function nn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case mh:
        switch (((e = e.type), e)) {
          case vh:
          case Gu:
          case Uu:
          case Wu:
          case Vu:
          case Qu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ku:
              case qu:
              case Yu:
              case Xu:
              case Hu:
                return e;
              default:
                return t;
            }
        }
      case gh:
        return t;
    }
  }
}
function WS(e) {
  return nn(e) === Gu;
}
Le.AsyncMode = vh;
Le.ConcurrentMode = Gu;
Le.ContextConsumer = Ku;
Le.ContextProvider = Hu;
Le.Element = mh;
Le.ForwardRef = qu;
Le.Fragment = Uu;
Le.Lazy = Yu;
Le.Memo = Xu;
Le.Portal = gh;
Le.Profiler = Wu;
Le.StrictMode = Vu;
Le.Suspense = Qu;
Le.isAsyncMode = function (e) {
  return WS(e) || nn(e) === vh;
};
Le.isConcurrentMode = WS;
Le.isContextConsumer = function (e) {
  return nn(e) === Ku;
};
Le.isContextProvider = function (e) {
  return nn(e) === Hu;
};
Le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === mh;
};
Le.isForwardRef = function (e) {
  return nn(e) === qu;
};
Le.isFragment = function (e) {
  return nn(e) === Uu;
};
Le.isLazy = function (e) {
  return nn(e) === Yu;
};
Le.isMemo = function (e) {
  return nn(e) === Xu;
};
Le.isPortal = function (e) {
  return nn(e) === gh;
};
Le.isProfiler = function (e) {
  return nn(e) === Wu;
};
Le.isStrictMode = function (e) {
  return nn(e) === Vu;
};
Le.isSuspense = function (e) {
  return nn(e) === Qu;
};
Le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Uu ||
    e === Gu ||
    e === Wu ||
    e === Vu ||
    e === Qu ||
    e === d$ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Yu ||
        e.$$typeof === Xu ||
        e.$$typeof === Hu ||
        e.$$typeof === Ku ||
        e.$$typeof === qu ||
        e.$$typeof === p$ ||
        e.$$typeof === h$ ||
        e.$$typeof === m$ ||
        e.$$typeof === f$))
  );
};
Le.typeOf = nn;
VS.exports = Le;
var g$ = VS.exports,
  HS = g$,
  v$ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  y$ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  KS = {};
KS[HS.ForwardRef] = v$;
KS[HS.Memo] = y$;
var S$ = !0;
function x$(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var GS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || S$ === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  qS = function (t, n, r) {
    GS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function b$(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var w$ = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  R$ = !1,
  C$ = /[A-Z]|^ms/g,
  _$ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  QS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Fg = function (t) {
    return t != null && typeof t != "boolean";
  },
  dd = MS(function (e) {
    return QS(e) ? e : e.replace(C$, "-$&").toLowerCase();
  }),
  Bg = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(_$, function (r, o, i) {
            return (Bn = { name: o, styles: i, next: Bn }), o;
          });
    }
    return w$[t] !== 1 && !QS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  E$ =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ks(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return (Bn = { name: o.name, styles: o.styles, next: Bn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (Bn = { name: s.name, styles: s.styles, next: Bn }), (s = s.next);
        var a = i.styles + ";";
        return a;
      }
      return k$(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = Bn,
          u = n(e);
        return (Bn = l), Ks(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function k$(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Ks(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : Fg(a) && (r += dd(i) + ":" + Bg(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && R$) throw new Error(E$);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            Fg(s[l]) && (r += dd(i) + ":" + Bg(i, s[l]) + ";");
        else {
          var u = Ks(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += dd(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Dg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Bn;
function yh(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  Bn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += Ks(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += Ks(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  Dg.lastIndex = 0;
  for (var u = "", c; (c = Dg.exec(o)) !== null; ) u += "-" + c[1];
  var d = b$(o) + u;
  return { name: d, styles: o, next: Bn };
}
var T$ = function (t) {
    return t();
  },
  XS = pl.useInsertionEffect ? pl.useInsertionEffect : !1,
  P$ = XS || T$,
  zg = XS || S.useLayoutEffect,
  YS = S.createContext(typeof HTMLElement < "u" ? US({ key: "css" }) : null),
  N$ = YS.Provider,
  ZS = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(YS);
      return t(n, o, r);
    });
  },
  Zu = S.createContext({}),
  fd = { exports: {} },
  jg;
function JS() {
  return (
    jg ||
      ((jg = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        ({}).hasOwnProperty.call(o, i) && (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(fd)),
    fd.exports
  );
}
JS();
var $$ = ZS(function (e, t) {
  var n = e.styles,
    r = yh([n], void 0, S.useContext(Zu)),
    o = S.useRef();
  return (
    zg(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    zg(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && qS(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Ju() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return yh(t);
}
var bi = function () {
    var t = Ju.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  A$ = ON,
  L$ = function (t) {
    return t !== "theme";
  },
  Ug = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? A$ : L$;
  },
  Vg = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  M$ = !1,
  O$ = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      GS(n, r, o),
      P$(function () {
        return qS(n, r, o);
      }),
      null
    );
  },
  I$ = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Vg(t, n, r),
      l = a || Ug(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, y = 1; y < f; y++) d.push(c[y], c[0][y]);
      }
      var h = ZS(function (v, R, g) {
        var p = (u && v.as) || o,
          m = "",
          x = [],
          C = v;
        if (v.theme == null) {
          C = {};
          for (var E in v) C[E] = v[E];
          C.theme = S.useContext(Zu);
        }
        typeof v.className == "string"
          ? (m = x$(R.registered, x, v.className))
          : v.className != null && (m = v.className + " ");
        var _ = yh(d.concat(x), R.registered, C);
        (m += R.key + "-" + _.name), s !== void 0 && (m += " " + s);
        var N = u && a === void 0 ? Ug(p) : l,
          I = {};
        for (var A in v) (u && A === "as") || (N(A) && (I[A] = v[A]));
        return (
          (I.className = m),
          g && (I.ref = g),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(O$, {
              cache: R,
              serialized: _,
              isStringTag: typeof p == "string",
            }),
            S.createElement(p, I)
          )
        );
      });
      return (
        (h.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = o),
        (h.__emotion_styles = d),
        (h.__emotion_forwardProp = a),
        Object.defineProperty(h, "toString", {
          value: function () {
            return s === void 0 && M$ ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (h.withComponent = function (v, R) {
          return e(v, b({}, n, R, { shouldForwardProp: Vg(h, R, !0) })).apply(
            void 0,
            d
          );
        }),
        h
      );
    };
  },
  F$ = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Of = I$.bind();
F$.forEach(function (e) {
  Of[e] = Of(e);
});
let If;
typeof document == "object" && (If = US({ key: "css", prepend: !0 }));
function B$(e) {
  const { injectFirst: t, children: n } = e;
  return t && If ? w.jsx(N$, { value: If, children: n }) : n;
}
function D$(e) {
  return e == null || Object.keys(e).length === 0;
}
function ex(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(D$(o) ? n : o) : t;
  return w.jsx($$, { styles: r });
}
function Sh(e, t) {
  return Of(e, t);
}
const tx = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  z$ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: ex,
        StyledEngineProvider: B$,
        ThemeContext: Zu,
        css: Ju,
        default: Sh,
        internal_processStyles: tx,
        keyframes: bi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function qn(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function nx(e) {
  if (!qn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = nx(e[n]);
    }),
    t
  );
}
function Nt(e, t, n = { clone: !0 }) {
  const r = n.clone ? b({}, e) : e;
  return (
    qn(e) &&
      qn(t) &&
      Object.keys(t).forEach((o) => {
        qn(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && qn(e[o])
          ? (r[o] = Nt(e[o], t[o], n))
          : n.clone
          ? (r[o] = qn(t[o]) ? nx(t[o]) : t[o])
          : (r[o] = t[o]);
      }),
    r
  );
}
const j$ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nt, isPlainObject: qn },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  U$ = ["values", "unit", "step"],
  V$ = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => b({}, n, { [r.key]: r.val }), {})
    );
  };
function rx(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = re(e, U$),
    i = V$(t),
    s = Object.keys(i);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, y) {
    const h = s.indexOf(y);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : y) - r / 100
    }${n})`;
  }
  function c(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const y = s.indexOf(f);
    return y === 0
      ? a(s[1])
      : y === s.length - 1
      ? l(s[y])
      : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return b(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const W$ = { borderRadius: 4 };
function xs(e, t) {
  return t ? Nt(e, t, { clone: !1 }) : e;
}
const xh = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Wg = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${xh[e]}px)`,
  };
function Wt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Wg;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Wg;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || xh).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function ox(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function ix(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function H$(e, ...t) {
  const n = ox(e),
    r = [n, ...t].reduce((o, i) => Nt(o, i), {});
  return ix(Object.keys(n), r);
}
function K$(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function Zr({ values: e, breakpoints: t, base: n }) {
  const r = n || K$(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (s, a, l) => (
      Array.isArray(e)
        ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
        ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
        : (s[a] = e),
      s
    ),
    {}
  );
}
function ae(e) {
  if (typeof e != "string") throw new Error(ao(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const G$ = Object.freeze(
  Object.defineProperty({ __proto__: null, default: ae }, Symbol.toStringTag, {
    value: "Module",
  })
);
function di(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Wl(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = di(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function it(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = di(l, r) || {};
      return Wt(s, a, (d) => {
        let f = Wl(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = Wl(u, o, `${t}${d === "default" ? "" : ae(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function q$(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Q$ = { m: "margin", p: "padding" },
  X$ = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Hg = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Y$ = q$((e) => {
    if (e.length > 2)
      if (Hg[e]) e = Hg[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Q$[t],
      o = X$[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  bh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  wh = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...bh, ...wh];
function da(e, t, n, r) {
  var o;
  const i = (o = di(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function Rh(e) {
  return da(e, "spacing", 8);
}
function lo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Z$(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = lo(t, n)), r), {});
}
function J$(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = Y$(n),
    i = Z$(o, r),
    s = e[n];
  return Wt(e, s, i);
}
function sx(e, t) {
  const n = Rh(e.theme);
  return Object.keys(e)
    .map((r) => J$(e, t, r, n))
    .reduce(xs, {});
}
function Je(e) {
  return sx(e, bh);
}
Je.propTypes = {};
Je.filterProps = bh;
function et(e) {
  return sx(e, wh);
}
et.propTypes = {};
et.filterProps = wh;
function eA(e = 8) {
  if (e.mui) return e;
  const t = Rh({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function ec(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? xs(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function dn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Sn(e, t) {
  return it({ prop: e, themeKey: "borders", transform: t });
}
const tA = Sn("border", dn),
  nA = Sn("borderTop", dn),
  rA = Sn("borderRight", dn),
  oA = Sn("borderBottom", dn),
  iA = Sn("borderLeft", dn),
  sA = Sn("borderColor"),
  aA = Sn("borderTopColor"),
  lA = Sn("borderRightColor"),
  uA = Sn("borderBottomColor"),
  cA = Sn("borderLeftColor"),
  dA = Sn("outline", dn),
  fA = Sn("outlineColor"),
  tc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = da(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: lo(t, r) });
      return Wt(e, e.borderRadius, n);
    }
    return null;
  };
tc.propTypes = {};
tc.filterProps = ["borderRadius"];
ec(tA, nA, rA, oA, iA, sA, aA, lA, uA, cA, tc, dA, fA);
const nc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = da(e.theme, "spacing", 8),
      n = (r) => ({ gap: lo(t, r) });
    return Wt(e, e.gap, n);
  }
  return null;
};
nc.propTypes = {};
nc.filterProps = ["gap"];
const rc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = da(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: lo(t, r) });
    return Wt(e, e.columnGap, n);
  }
  return null;
};
rc.propTypes = {};
rc.filterProps = ["columnGap"];
const oc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = da(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: lo(t, r) });
    return Wt(e, e.rowGap, n);
  }
  return null;
};
oc.propTypes = {};
oc.filterProps = ["rowGap"];
const pA = it({ prop: "gridColumn" }),
  hA = it({ prop: "gridRow" }),
  mA = it({ prop: "gridAutoFlow" }),
  gA = it({ prop: "gridAutoColumns" }),
  vA = it({ prop: "gridAutoRows" }),
  yA = it({ prop: "gridTemplateColumns" }),
  SA = it({ prop: "gridTemplateRows" }),
  xA = it({ prop: "gridTemplateAreas" }),
  bA = it({ prop: "gridArea" });
ec(nc, rc, oc, pA, hA, mA, gA, vA, yA, SA, xA, bA);
function Xo(e, t) {
  return t === "grey" ? t : e;
}
const wA = it({ prop: "color", themeKey: "palette", transform: Xo }),
  RA = it({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Xo,
  }),
  CA = it({ prop: "backgroundColor", themeKey: "palette", transform: Xo });
ec(wA, RA, CA);
function qt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _A = it({ prop: "width", transform: qt }),
  Ch = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || xh[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: qt(n) };
      };
      return Wt(e, e.maxWidth, t);
    }
    return null;
  };
Ch.filterProps = ["maxWidth"];
const EA = it({ prop: "minWidth", transform: qt }),
  kA = it({ prop: "height", transform: qt }),
  TA = it({ prop: "maxHeight", transform: qt }),
  PA = it({ prop: "minHeight", transform: qt });
it({ prop: "size", cssProperty: "width", transform: qt });
it({ prop: "size", cssProperty: "height", transform: qt });
const NA = it({ prop: "boxSizing" });
ec(_A, Ch, EA, kA, TA, PA, NA);
const fa = {
  border: { themeKey: "borders", transform: dn },
  borderTop: { themeKey: "borders", transform: dn },
  borderRight: { themeKey: "borders", transform: dn },
  borderBottom: { themeKey: "borders", transform: dn },
  borderLeft: { themeKey: "borders", transform: dn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: dn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: tc },
  color: { themeKey: "palette", transform: Xo },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Xo,
  },
  backgroundColor: { themeKey: "palette", transform: Xo },
  p: { style: et },
  pt: { style: et },
  pr: { style: et },
  pb: { style: et },
  pl: { style: et },
  px: { style: et },
  py: { style: et },
  padding: { style: et },
  paddingTop: { style: et },
  paddingRight: { style: et },
  paddingBottom: { style: et },
  paddingLeft: { style: et },
  paddingX: { style: et },
  paddingY: { style: et },
  paddingInline: { style: et },
  paddingInlineStart: { style: et },
  paddingInlineEnd: { style: et },
  paddingBlock: { style: et },
  paddingBlockStart: { style: et },
  paddingBlockEnd: { style: et },
  m: { style: Je },
  mt: { style: Je },
  mr: { style: Je },
  mb: { style: Je },
  ml: { style: Je },
  mx: { style: Je },
  my: { style: Je },
  margin: { style: Je },
  marginTop: { style: Je },
  marginRight: { style: Je },
  marginBottom: { style: Je },
  marginLeft: { style: Je },
  marginX: { style: Je },
  marginY: { style: Je },
  marginInline: { style: Je },
  marginInlineStart: { style: Je },
  marginInlineEnd: { style: Je },
  marginBlock: { style: Je },
  marginBlockStart: { style: Je },
  marginBlockEnd: { style: Je },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ "@media print": { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: nc },
  rowGap: { style: oc },
  columnGap: { style: rc },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: qt },
  maxWidth: { style: Ch },
  minWidth: { transform: qt },
  height: { transform: qt },
  maxHeight: { transform: qt },
  minHeight: { transform: qt },
  boxSizing: {},
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function $A(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function AA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ax() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = di(o, u) || {};
    return d
      ? d(s)
      : Wt(s, r, (h) => {
          let v = Wl(f, c, h);
          return (
            h === v &&
              typeof h == "string" &&
              (v = Wl(f, c, `${n}${h === "default" ? "" : ae(h)}`, h)),
            l === !1 ? v : { [l]: v }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : fa;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = ox(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((y) => {
          const h = AA(u[y], i);
          if (h != null)
            if (typeof h == "object")
              if (s[y]) f = xs(f, e(y, h, i, s));
              else {
                const v = Wt({ theme: i }, h, (R) => ({ [y]: R }));
                $A(v, h) ? (f[y] = t({ sx: h, theme: i })) : (f = xs(f, v));
              }
            else f = xs(f, e(y, h, i, s));
        }),
        ix(d, f)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const wi = ax();
wi.filterProps = ["sx"];
function lx(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const LA = ["breakpoints", "palette", "spacing", "shape"];
function Ri(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = re(e, LA),
    a = rx(n),
    l = eA(o);
  let u = Nt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: b({ mode: "light" }, r),
      spacing: l,
      shape: b({}, W$, i),
    },
    s
  );
  return (
    (u.applyStyles = lx),
    (u = t.reduce((c, d) => Nt(c, d), u)),
    (u.unstable_sxConfig = b({}, fa, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return wi({ sx: d, theme: this });
    }),
    u
  );
}
const MA = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Ri,
      private_createBreakpoints: rx,
      unstable_applyStyles: lx,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function OA(e) {
  return Object.keys(e).length === 0;
}
function IA(e = null) {
  const t = S.useContext(Zu);
  return !t || OA(t) ? e : t;
}
const FA = Ri();
function ic(e = FA) {
  return IA(e);
}
function BA({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = ic(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return w.jsx(ex, { styles: o });
}
const DA = ["sx"],
  zA = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : fa;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function pa(e) {
  const { sx: t } = e,
    n = re(e, DA),
    { systemProps: r, otherProps: o } = zA(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return qn(a) ? b({}, r, a) : r;
        })
      : (i = b({}, r, t)),
    b({}, o, { sx: i })
  );
}
const jA = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: wi,
        extendSxProp: pa,
        unstable_createStyleFunctionSx: ax,
        unstable_defaultSxConfig: fa,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Kg = (e) => e,
  UA = () => {
    let e = Kg;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Kg;
      },
    };
  },
  ux = UA();
function cx(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = cx(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ue() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = cx(e)) && (r && (r += " "), (r += t));
  return r;
}
const VA = ["className", "component"];
function WA(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = Sh("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as",
    })(wi);
  return S.forwardRef(function (l, u) {
    const c = ic(n),
      d = pa(l),
      { className: f, component: y = "div" } = d,
      h = re(d, VA);
    return w.jsx(
      i,
      b(
        {
          as: y,
          ref: u,
          className: ue(f, o ? o(r) : r),
          theme: (t && c[t]) || c,
        },
        h
      )
    );
  });
}
const HA = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function Re(e, t, n = "Mui") {
  const r = HA[t];
  return r ? `${n}-${r}` : `${ux.generate(e)}-${t}`;
}
function Ce(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Re(e, o, n);
    }),
    r
  );
}
var dx = { exports: {} },
  Me = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h = Symbol.for("react.element"),
  Eh = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  lc = Symbol.for("react.profiler"),
  uc = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  KA = Symbol.for("react.server_context"),
  dc = Symbol.for("react.forward_ref"),
  fc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.suspense_list"),
  hc = Symbol.for("react.memo"),
  mc = Symbol.for("react.lazy"),
  GA = Symbol.for("react.offscreen"),
  fx;
fx = Symbol.for("react.module.reference");
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _h:
        switch (((e = e.type), e)) {
          case sc:
          case lc:
          case ac:
          case fc:
          case pc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case KA:
              case cc:
              case dc:
              case mc:
              case hc:
              case uc:
                return e;
              default:
                return t;
            }
        }
      case Eh:
        return t;
    }
  }
}
Me.ContextConsumer = cc;
Me.ContextProvider = uc;
Me.Element = _h;
Me.ForwardRef = dc;
Me.Fragment = sc;
Me.Lazy = mc;
Me.Memo = hc;
Me.Portal = Eh;
Me.Profiler = lc;
Me.StrictMode = ac;
Me.Suspense = fc;
Me.SuspenseList = pc;
Me.isAsyncMode = function () {
  return !1;
};
Me.isConcurrentMode = function () {
  return !1;
};
Me.isContextConsumer = function (e) {
  return xn(e) === cc;
};
Me.isContextProvider = function (e) {
  return xn(e) === uc;
};
Me.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === _h;
};
Me.isForwardRef = function (e) {
  return xn(e) === dc;
};
Me.isFragment = function (e) {
  return xn(e) === sc;
};
Me.isLazy = function (e) {
  return xn(e) === mc;
};
Me.isMemo = function (e) {
  return xn(e) === hc;
};
Me.isPortal = function (e) {
  return xn(e) === Eh;
};
Me.isProfiler = function (e) {
  return xn(e) === lc;
};
Me.isStrictMode = function (e) {
  return xn(e) === ac;
};
Me.isSuspense = function (e) {
  return xn(e) === fc;
};
Me.isSuspenseList = function (e) {
  return xn(e) === pc;
};
Me.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === sc ||
    e === lc ||
    e === ac ||
    e === fc ||
    e === pc ||
    e === GA ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === mc ||
        e.$$typeof === hc ||
        e.$$typeof === uc ||
        e.$$typeof === cc ||
        e.$$typeof === dc ||
        e.$$typeof === fx ||
        e.getModuleId !== void 0))
  );
};
Me.typeOf = xn;
dx.exports = Me;
var Gg = dx.exports;
const qA = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function px(e) {
  const t = `${e}`.match(qA);
  return (t && t[1]) || "";
}
function hx(e, t = "") {
  return e.displayName || e.name || px(e) || t;
}
function qg(e, t, n) {
  const r = hx(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function QA(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return hx(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Gg.ForwardRef:
          return qg(e, e.render, "ForwardRef");
        case Gg.Memo:
          return qg(e, e.type, "memo");
        default:
          return;
      }
  }
}
const XA = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: QA, getFunctionName: px },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  YA = ["ownerState"],
  ZA = ["variants"],
  JA = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function eL(e) {
  return Object.keys(e).length === 0;
}
function tL(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function pd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const nL = Ri(),
  rL = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ja({ defaultTheme: e, theme: t, themeId: n }) {
  return eL(t) ? e : t[n] || t;
}
function oL(e) {
  return e ? (t, n) => n[e] : null;
}
function ll(e, t) {
  let { ownerState: n } = t,
    r = re(t, YA);
  const o = typeof e == "function" ? e(b({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => ll(i, b({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = re(o, ZA);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props(b({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style(b({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function iL(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = nL,
      rootShouldForwardProp: r = pd,
      slotShouldForwardProp: o = pd,
    } = e,
    i = (s) =>
      wi(b({}, s, { theme: ja(b({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      tx(s, (C) => C.filter((E) => !(E != null && E.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = oL(rL(u)),
        } = a,
        y = re(a, JA),
        h = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        v = d || !1;
      let R,
        g = pd;
      u === "Root" || u === "root"
        ? (g = r)
        : u
        ? (g = o)
        : tL(s) && (g = void 0);
      const p = Sh(s, b({ shouldForwardProp: g, label: R }, y)),
        m = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) || qn(C)
            ? (E) =>
                ll(
                  C,
                  b({}, E, {
                    theme: ja({ theme: E.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : C,
        x = (C, ...E) => {
          let _ = m(C);
          const N = E ? E.map(m) : [];
          l &&
            f &&
            N.push((j) => {
              const G = ja(b({}, j, { defaultTheme: n, themeId: t }));
              if (
                !G.components ||
                !G.components[l] ||
                !G.components[l].styleOverrides
              )
                return null;
              const D = G.components[l].styleOverrides,
                W = {};
              return (
                Object.entries(D).forEach(([K, H]) => {
                  W[K] = ll(H, b({}, j, { theme: G }));
                }),
                f(j, W)
              );
            }),
            l &&
              !h &&
              N.push((j) => {
                var G;
                const D = ja(b({}, j, { defaultTheme: n, themeId: t })),
                  W =
                    D == null ||
                    (G = D.components) == null ||
                    (G = G[l]) == null
                      ? void 0
                      : G.variants;
                return ll({ variants: W }, b({}, j, { theme: D }));
              }),
            v || N.push(i);
          const I = N.length - E.length;
          if (Array.isArray(C) && I > 0) {
            const j = new Array(I).fill("");
            (_ = [...C, ...j]), (_.raw = [...C.raw, ...j]);
          }
          const A = p(_, ...N);
          return s.muiName && (A.muiName = s.muiName), A;
        };
      return p.withConfig && (x.withConfig = p.withConfig), x;
    }
  );
}
const mx = iL();
function Gs(e, t) {
  const n = b({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = b({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = b({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = Gs(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function sL(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Gs(t.components[n].defaultProps, r);
}
function gx({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = ic(n);
  return r && (o = o[r] || o), sL({ theme: o, name: t, props: e });
}
const uo = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
function aL(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const lL = Object.freeze(
  Object.defineProperty({ __proto__: null, default: aL }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Qg(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function vx(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function hd(e, t) {
  var n, r;
  return (
    S.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function Zt(e) {
  return (e && e.ownerDocument) || document;
}
function co(e) {
  return Zt(e).defaultView || window;
}
function Ff(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Xg = 0;
function uL(e) {
  const [t, n] = S.useState(e),
    r = e || t;
  return (
    S.useEffect(() => {
      t == null && ((Xg += 1), n(`mui-${Xg}`));
    }, [t]),
    r
  );
}
const Yg = pl.useId;
function yx(e) {
  if (Yg !== void 0) {
    const t = Yg();
    return e ?? t;
  }
  return uL(e);
}
function Bf({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, s] = S.useState(t),
    a = o ? e : i,
    l = S.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function jo(e) {
  const t = S.useRef(e);
  return (
    uo(() => {
      t.current = e;
    }),
    S.useRef((...n) => (0, t.current)(...n)).current
  );
}
function $t(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Ff(n, t);
            });
          },
    e
  );
}
const Zg = {};
function cL(e, t) {
  const n = S.useRef(Zg);
  return n.current === Zg && (n.current = e(t)), n;
}
const dL = [];
function fL(e) {
  S.useEffect(e, dL);
}
class gc {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new gc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Sx() {
  const e = cL(gc.create).current;
  return fL(e.disposeEffect), e;
}
let vc = !0,
  Df = !1;
const pL = new gc(),
  hL = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function mL(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && hL[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function gL(e) {
  e.metaKey || e.altKey || e.ctrlKey || (vc = !0);
}
function md() {
  vc = !1;
}
function vL() {
  this.visibilityState === "hidden" && Df && (vc = !0);
}
function yL(e) {
  e.addEventListener("keydown", gL, !0),
    e.addEventListener("mousedown", md, !0),
    e.addEventListener("pointerdown", md, !0),
    e.addEventListener("touchstart", md, !0),
    e.addEventListener("visibilitychange", vL, !0);
}
function SL(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return vc || mL(t);
}
function xx() {
  const e = S.useCallback((o) => {
      o != null && yL(o.ownerDocument);
    }, []),
    t = S.useRef(!1);
  function n() {
    return t.current
      ? ((Df = !0),
        pL.start(100, () => {
          Df = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return SL(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function bx(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function _e(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
function Hl(e) {
  return typeof e == "string";
}
function xL(e, t, n) {
  return e === void 0 || Hl(e)
    ? t
    : b({}, t, { ownerState: b({}, t.ownerState, n) });
}
function wx(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function Jg(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function bL(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const y = ue(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      h = b(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      v = b({}, n, o, r);
    return (
      y.length > 0 && (v.className = y),
      Object.keys(h).length > 0 && (v.style = h),
      { props: v, internalRef: void 0 }
    );
  }
  const s = wx(b({}, o, r)),
    a = Jg(r),
    l = Jg(o),
    u = t(s),
    c = ue(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = b(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = b({}, u, n, l, a);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
function wL(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
const RL = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function fi(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    s = re(e, RL),
    a = i ? {} : wL(r, o),
    { props: l, internalRef: u } = bL(b({}, s, { externalSlotProps: a })),
    c = $t(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return xL(n, b({}, l, { ref: c }), o);
}
const CL = S.createContext(),
  _L = () => {
    const e = S.useContext(CL);
    return e ?? !1;
  },
  EL = S.createContext(void 0);
function kL(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const o = t.components[n];
  return o.defaultProps
    ? Gs(o.defaultProps, r)
    : !o.styleOverrides && !o.variants
    ? Gs(o, r)
    : r;
}
function TL({ props: e, name: t }) {
  const n = S.useContext(EL);
  return kL({ props: e, name: t, theme: { components: n } });
}
const PL = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  NL = Ri(),
  $L = mx("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${ae(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  AL = (e) => gx({ props: e, name: "MuiContainer", defaultTheme: NL }),
  LL = (e, t) => {
    const n = (l) => Re(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
      a = {
        root: [
          "root",
          s && `maxWidth${ae(String(s))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return _e(a, n, r);
  };
function ML(e = {}) {
  const {
      createStyledComponent: t = $L,
      useThemeProps: n = AL,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: s, ownerState: a }) =>
        b(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !a.disableGutters && {
            paddingLeft: s.spacing(2),
            paddingRight: s.spacing(2),
            [s.breakpoints.up("sm")]: {
              paddingLeft: s.spacing(3),
              paddingRight: s.spacing(3),
            },
          }
        ),
      ({ theme: s, ownerState: a }) =>
        a.fixed &&
        Object.keys(s.breakpoints.values).reduce((l, u) => {
          const c = u,
            d = s.breakpoints.values[c];
          return (
            d !== 0 &&
              (l[s.breakpoints.up(c)] = {
                maxWidth: `${d}${s.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: s, ownerState: a }) =>
        b(
          {},
          a.maxWidth === "xs" && {
            [s.breakpoints.up("xs")]: {
              maxWidth: Math.max(s.breakpoints.values.xs, 444),
            },
          },
          a.maxWidth &&
            a.maxWidth !== "xs" && {
              [s.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                  s.breakpoints.unit
                }`,
              },
            }
        )
    );
  return S.forwardRef(function (a, l) {
    const u = n(a),
      {
        className: c,
        component: d = "div",
        disableGutters: f = !1,
        fixed: y = !1,
        maxWidth: h = "lg",
      } = u,
      v = re(u, PL),
      R = b({}, u, { component: d, disableGutters: f, fixed: y, maxWidth: h }),
      g = LL(R, r);
    return w.jsx(
      o,
      b({ as: d, ownerState: R, className: ue(g.root, c), ref: l }, v)
    );
  });
}
const OL = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  IL = Ri(),
  FL = mx("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function BL(e) {
  return gx({ props: e, name: "MuiStack", defaultTheme: IL });
}
function DL(e, t) {
  const n = S.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push(S.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    []
  );
}
const zL = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    }[e]),
  jL = ({ ownerState: e, theme: t }) => {
    let n = b(
      { display: "flex", flexDirection: "column" },
      Wt(
        { theme: t },
        Zr({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      )
    );
    if (e.spacing) {
      const r = Rh(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, u) => (
            ((typeof e.spacing == "object" && e.spacing[u] != null) ||
              (typeof e.direction == "object" && e.direction[u] != null)) &&
              (l[u] = !0),
            l
          ),
          {}
        ),
        i = Zr({ values: e.direction, base: o }),
        s = Zr({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((l, u, c) => {
          if (!i[l]) {
            const f = u > 0 ? i[c[u - 1]] : "column";
            i[l] = f;
          }
        }),
        (n = Nt(
          n,
          Wt({ theme: t }, s, (l, u) =>
            e.useFlexGap
              ? { gap: lo(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${zL(u ? i[u] : e.direction)}`]: lo(r, l),
                  },
                }
          )
        ));
    }
    return (n = H$(t.breakpoints, n)), n;
  };
function UL(e = {}) {
  const {
      createStyledComponent: t = FL,
      useThemeProps: n = BL,
      componentName: r = "MuiStack",
    } = e,
    o = () => _e({ root: ["root"] }, (l) => Re(r, l), {}),
    i = t(jL);
  return S.forwardRef(function (l, u) {
    const c = n(l),
      d = pa(c),
      {
        component: f = "div",
        direction: y = "column",
        spacing: h = 0,
        divider: v,
        children: R,
        className: g,
        useFlexGap: p = !1,
      } = d,
      m = re(d, OL),
      x = { direction: y, spacing: h, useFlexGap: p },
      C = o();
    return w.jsx(
      i,
      b({ as: f, ownerState: x, ref: u, className: ue(C.root, g) }, m, {
        children: v ? DL(R, v) : R,
      })
    );
  });
}
function VL(e, t) {
  return b(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var st = {},
  Rx = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Rx);
var Cx = Rx.exports;
const WL = Pr(LN),
  HL = Pr(lL);
var _x = Cx;
Object.defineProperty(st, "__esModule", { value: !0 });
var vr = (st.alpha = Px);
st.blend = oM;
st.colorChannel = void 0;
var KL = (st.darken = Th);
st.decomposeColor = yn;
st.emphasize = Nx;
var GL = (st.getContrastRatio = JL);
st.getLuminance = Kl;
st.hexToRgb = Ex;
st.hslToRgb = Tx;
var qL = (st.lighten = Ph);
st.private_safeAlpha = eM;
st.private_safeColorChannel = void 0;
st.private_safeDarken = tM;
st.private_safeEmphasize = rM;
st.private_safeLighten = nM;
st.recomposeColor = Ci;
st.rgbToHex = ZL;
var ev = _x(WL),
  QL = _x(HL);
function kh(e, t = 0, n = 1) {
  return (0, QL.default)(e, t, n);
}
function Ex(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function XL(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function yn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return yn(Ex(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, ev.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, ev.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const kx = (e) => {
  const t = yn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
st.colorChannel = kx;
const YL = (e, t) => {
  try {
    return kx(e);
  } catch {
    return e;
  }
};
st.private_safeColorChannel = YL;
function Ci(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function ZL(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = yn(e);
  return `#${t.map((n, r) => XL(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Tx(e) {
  e = yn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Ci({ type: a, values: l })
  );
}
function Kl(e) {
  e = yn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? yn(Tx(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function JL(e, t) {
  const n = Kl(e),
    r = Kl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Px(e, t) {
  return (
    (e = yn(e)),
    (t = kh(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Ci(e)
  );
}
function eM(e, t, n) {
  try {
    return Px(e, t);
  } catch {
    return e;
  }
}
function Th(e, t) {
  if (((e = yn(e)), (t = kh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Ci(e);
}
function tM(e, t, n) {
  try {
    return Th(e, t);
  } catch {
    return e;
  }
}
function Ph(e, t) {
  if (((e = yn(e)), (t = kh(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Ci(e);
}
function nM(e, t, n) {
  try {
    return Ph(e, t);
  } catch {
    return e;
  }
}
function Nx(e, t = 0.15) {
  return Kl(e) > 0.5 ? Th(e, t) : Ph(e, t);
}
function rM(e, t, n) {
  try {
    return Nx(e, t);
  } catch {
    return e;
  }
}
function oM(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = yn(e),
    s = yn(t),
    a = [
      o(i.values[0], s.values[0]),
      o(i.values[1], s.values[1]),
      o(i.values[2], s.values[2]),
    ];
  return Ci({ type: "rgb", values: a });
}
const iM = ["mode", "contrastThreshold", "tonalOffset"],
  tv = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Vs.white, default: Vs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  gd = {
    text: {
      primary: Vs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Vs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function nv(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = qL(e.main, o))
      : t === "dark" && (e.dark = KL(e.main, i)));
}
function sM(e = "light") {
  return e === "dark"
    ? { main: Co[200], light: Co[50], dark: Co[400] }
    : { main: Co[700], light: Co[400], dark: Co[800] };
}
function aM(e = "light") {
  return e === "dark"
    ? { main: Ro[200], light: Ro[50], dark: Ro[400] }
    : { main: Ro[500], light: Ro[300], dark: Ro[700] };
}
function lM(e = "light") {
  return e === "dark"
    ? { main: wo[500], light: wo[300], dark: wo[700] }
    : { main: wo[700], light: wo[400], dark: wo[800] };
}
function uM(e = "light") {
  return e === "dark"
    ? { main: _o[400], light: _o[300], dark: _o[700] }
    : { main: _o[700], light: _o[500], dark: _o[900] };
}
function cM(e = "light") {
  return e === "dark"
    ? { main: Eo[400], light: Eo[300], dark: Eo[700] }
    : { main: Eo[800], light: Eo[500], dark: Eo[900] };
}
function dM(e = "light") {
  return e === "dark"
    ? { main: Gi[400], light: Gi[300], dark: Gi[700] }
    : { main: "#ed6c02", light: Gi[500], dark: Gi[900] };
}
function fM(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = re(e, iM),
    i = e.primary || sM(t),
    s = e.secondary || aM(t),
    a = e.error || lM(t),
    l = e.info || uM(t),
    u = e.success || cM(t),
    c = e.warning || dM(t);
  function d(v) {
    return GL(v, gd.text.primary) >= n ? gd.text.primary : tv.text.primary;
  }
  const f = ({
      color: v,
      name: R,
      mainShade: g = 500,
      lightShade: p = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((v = b({}, v)),
        !v.main && v[g] && (v.main = v[g]),
        !v.hasOwnProperty("main"))
      )
        throw new Error(ao(11, R ? ` (${R})` : "", g));
      if (typeof v.main != "string")
        throw new Error(ao(12, R ? ` (${R})` : "", JSON.stringify(v.main)));
      return (
        nv(v, "light", p, r),
        nv(v, "dark", m, r),
        v.contrastText || (v.contrastText = d(v.main)),
        v
      );
    },
    y = { dark: gd, light: tv };
  return Nt(
    b(
      {
        common: b({}, Vs),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: a, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: AN,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      y[t]
    ),
    o
  );
}
const pM = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function hM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const rv = { textTransform: "uppercase" },
  ov = '"Roboto", "Helvetica", "Arial", sans-serif';
function mM(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = ov,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = re(n, pM),
    y = o / 14,
    h = d || ((g) => `${(g / u) * y}rem`),
    v = (g, p, m, x, C) =>
      b(
        { fontFamily: r, fontWeight: g, fontSize: h(p), lineHeight: m },
        r === ov ? { letterSpacing: `${hM(x / p)}em` } : {},
        C,
        c
      ),
    R = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -0.5),
      h3: v(s, 48, 1.167, 0),
      h4: v(s, 34, 1.235, 0.25),
      h5: v(s, 24, 1.334, 0),
      h6: v(a, 20, 1.6, 0.15),
      subtitle1: v(s, 16, 1.75, 0.15),
      subtitle2: v(a, 14, 1.57, 0.1),
      body1: v(s, 16, 1.5, 0.15),
      body2: v(s, 14, 1.43, 0.15),
      button: v(a, 14, 1.75, 0.4, rv),
      caption: v(s, 12, 1.66, 0.4),
      overline: v(s, 12, 2.66, 1, rv),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Nt(
    b(
      {
        htmlFontSize: u,
        pxToRem: h,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      R
    ),
    f,
    { clone: !1 }
  );
}
const gM = 0.2,
  vM = 0.14,
  yM = 0.12;
function Ge(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${gM})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vM})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yM})`,
  ].join(",");
}
const SM = [
    "none",
    Ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  xM = ["duration", "easing", "delay"],
  bM = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  wM = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function iv(e) {
  return `${Math.round(e)}ms`;
}
function RM(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function CM(e) {
  const t = b({}, bM, e.easing),
    n = b({}, wM, e.duration);
  return b(
    {
      getAutoHeightDuration: RM,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          re(i, xM),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : iv(s)} ${a} ${
                  typeof l == "string" ? l : iv(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const _M = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  EM = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function $x(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = re(e, EM);
  if (e.vars) throw new Error(ao(18));
  const a = fM(r),
    l = Ri(e);
  let u = Nt(l, {
    mixins: VL(l.breakpoints, n),
    palette: a,
    shadows: SM.slice(),
    typography: mM(a, i),
    transitions: CM(o),
    zIndex: b({}, _M),
  });
  return (
    (u = Nt(u, s)),
    (u = t.reduce((c, d) => Nt(c, d), u)),
    (u.unstable_sxConfig = b({}, fa, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return wi({ sx: d, theme: this });
    }),
    u
  );
}
const Nh = $x();
function $h() {
  const e = ic(Nh);
  return e[Bu] || e;
}
var ha = {},
  vd = { exports: {} },
  sv;
function kM() {
  return (
    sv ||
      ((sv = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {};
          for (var i in n)
            if ({}.hasOwnProperty.call(n, i)) {
              if (r.includes(i)) continue;
              o[i] = n[i];
            }
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(vd)),
    vd.exports
  );
}
const TM = Pr(z$),
  PM = Pr(j$),
  NM = Pr(G$),
  $M = Pr(XA),
  AM = Pr(MA),
  LM = Pr(jA);
var _i = Cx;
Object.defineProperty(ha, "__esModule", { value: !0 });
var MM = (ha.default = GM);
ha.shouldForwardProp = ul;
ha.systemDefaultTheme = void 0;
var an = _i(JS()),
  zf = _i(kM()),
  av = jM(TM),
  OM = PM;
_i(NM);
_i($M);
var IM = _i(AM),
  FM = _i(LM);
const BM = ["ownerState"],
  DM = ["variants"],
  zM = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Ax(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Ax = function (r) {
    return r ? n : t;
  })(e);
}
function jM(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Ax(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function UM(e) {
  return Object.keys(e).length === 0;
}
function VM(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function ul(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const WM = (ha.systemDefaultTheme = (0, IM.default)()),
  HM = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ua({ defaultTheme: e, theme: t, themeId: n }) {
  return UM(t) ? e : t[n] || t;
}
function KM(e) {
  return e ? (t, n) => n[e] : null;
}
function cl(e, t) {
  let { ownerState: n } = t,
    r = (0, zf.default)(t, BM);
  const o =
    typeof e == "function" ? e((0, an.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => cl(i, (0, an.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, zf.default)(o, DM);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, an.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == "function"
                ? l.style((0, an.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return o;
}
function GM(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = WM,
      rootShouldForwardProp: r = ul,
      slotShouldForwardProp: o = ul,
    } = e,
    i = (s) =>
      (0, FM.default)(
        (0, an.default)({}, s, {
          theme: Ua((0, an.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, av.internal_processStyles)(s, (C) =>
        C.filter((E) => !(E != null && E.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = KM(HM(u)),
        } = a,
        y = (0, zf.default)(a, zM),
        h = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        v = d || !1;
      let R,
        g = ul;
      u === "Root" || u === "root"
        ? (g = r)
        : u
        ? (g = o)
        : VM(s) && (g = void 0);
      const p = (0, av.default)(
          s,
          (0, an.default)({ shouldForwardProp: g, label: R }, y)
        ),
        m = (C) =>
          (typeof C == "function" && C.__emotion_real !== C) ||
          (0, OM.isPlainObject)(C)
            ? (E) =>
                cl(
                  C,
                  (0, an.default)({}, E, {
                    theme: Ua({ theme: E.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : C,
        x = (C, ...E) => {
          let _ = m(C);
          const N = E ? E.map(m) : [];
          l &&
            f &&
            N.push((j) => {
              const G = Ua(
                (0, an.default)({}, j, { defaultTheme: n, themeId: t })
              );
              if (
                !G.components ||
                !G.components[l] ||
                !G.components[l].styleOverrides
              )
                return null;
              const D = G.components[l].styleOverrides,
                W = {};
              return (
                Object.entries(D).forEach(([K, H]) => {
                  W[K] = cl(H, (0, an.default)({}, j, { theme: G }));
                }),
                f(j, W)
              );
            }),
            l &&
              !h &&
              N.push((j) => {
                var G;
                const D = Ua(
                    (0, an.default)({}, j, { defaultTheme: n, themeId: t })
                  ),
                  W =
                    D == null ||
                    (G = D.components) == null ||
                    (G = G[l]) == null
                      ? void 0
                      : G.variants;
                return cl(
                  { variants: W },
                  (0, an.default)({}, j, { theme: D })
                );
              }),
            v || N.push(i);
          const I = N.length - E.length;
          if (Array.isArray(C) && I > 0) {
            const j = new Array(I).fill("");
            (_ = [...C, ...j]), (_.raw = [...C.raw, ...j]);
          }
          const A = p(_, ...N);
          return s.muiName && (A.muiName = s.muiName), A;
        };
      return p.withConfig && (x.withConfig = p.withConfig), x;
    }
  );
}
function Lx(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rn = (e) => Lx(e) && e !== "classes",
  ne = MM({ themeId: Bu, defaultTheme: Nh, rootShouldForwardProp: rn }),
  lv = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
function ke(e) {
  return TL(e);
}
function qM(e) {
  return Re("MuiSvgIcon", e);
}
Ce("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const QM = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  XM = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(n)}`],
      };
    return _e(o, qM, r);
  },
  YM = ne("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${ae(n.color)}`],
        t[`fontSize${ae(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, d, f, y, h;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (y = (e.vars || e).palette) == null || (y = y.action) == null
                  ? void 0
                  : y.active,
              disabled:
                (h = (e.vars || e).palette) == null || (h = h.action) == null
                  ? void 0
                  : h.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  jf = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      y = re(r, QM),
      h = S.isValidElement(o) && o.type === "svg",
      v = b({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: h,
      }),
      R = {};
    c || (R.viewBox = f);
    const g = XM(v);
    return w.jsxs(
      YM,
      b(
        {
          as: a,
          className: ue(g.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        R,
        y,
        h && o.props,
        {
          ownerState: v,
          children: [
            h ? o.props.children : o,
            d ? w.jsx("title", { children: d }) : null,
          ],
        }
      )
    );
  });
jf.muiName = "SvgIcon";
function yc(e, t) {
  function n(r, o) {
    return w.jsx(
      jf,
      b({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = jf.muiName), S.memo(S.forwardRef(n));
}
function Uf(e, t) {
  return (
    (Uf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Uf(e, t)
  );
}
function Mx(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Uf(e, t);
}
const uv = { disabled: !1 },
  Gl = Ee.createContext(null);
var ZM = function (t) {
    return t.scrollTop;
  },
  ss = "unmounted",
  Ur = "exited",
  Vr = "entering",
  To = "entered",
  Vf = "exiting",
  Hn = (function (e) {
    Mx(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = Ur), (i.appearStatus = Vr))
            : (l = To)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = ss)
          : (l = Ur),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === ss ? { status: Ur } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Vr && s !== To && (i = Vr)
            : (s === Vr || s === To) && (i = Vf);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (s = o.enter),
            (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Vr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : os.findDOMNode(this);
              s && ZM(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Ur &&
            this.setState({ status: ss });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [os.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!o && !s) || uv.disabled) {
          this.safeSetState({ status: To }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: Vr }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: To }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : os.findDOMNode(this);
        if (!i || uv.disabled) {
          this.safeSetState({ status: Ur }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Vf }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: Ur }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : os.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ss) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = re(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Ee.createElement(
          Gl.Provider,
          { value: null },
          typeof s == "function"
            ? s(o, a)
            : Ee.cloneElement(Ee.Children.only(s), a)
        );
      }),
      t
    );
  })(Ee.Component);
Hn.contextType = Gl;
Hn.propTypes = {};
function ko() {}
Hn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ko,
  onEntering: ko,
  onEntered: ko,
  onExit: ko,
  onExiting: ko,
  onExited: ko,
};
Hn.UNMOUNTED = ss;
Hn.EXITED = Ur;
Hn.ENTERING = Vr;
Hn.ENTERED = To;
Hn.EXITING = Vf;
function JM(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ah(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function eO(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a;
}
function qr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function tO(e, t) {
  return Ah(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: qr(n, "appear", e),
      enter: qr(n, "enter", e),
      exit: qr(n, "exit", e),
    });
  });
}
function nO(e, t, n) {
  var r = Ah(e.children),
    o = eO(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var s = o[i];
      if (S.isValidElement(s)) {
        var a = i in t,
          l = i in r,
          u = t[i],
          c = S.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: qr(s, "exit", e),
              enter: qr(s, "enter", e),
            }))
          : !l && a && !c
          ? (o[i] = S.cloneElement(s, { in: !1 }))
          : l &&
            a &&
            S.isValidElement(u) &&
            (o[i] = S.cloneElement(s, {
              onExited: n.bind(null, s),
              in: u.props.in,
              exit: qr(s, "exit", e),
              enter: qr(s, "enter", e),
            }));
      }
    }),
    o
  );
}
var rO =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  oO = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Lh = (function (e) {
    Mx(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(JM(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var s = i.children,
          a = i.handleExited,
          l = i.firstRender;
        return { children: l ? tO(o, a) : nO(o, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var s = Ah(this.props.children);
        o.key in s ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var l = b({}, a.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          s = o.childFactory,
          a = re(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = rO(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? Ee.createElement(Gl.Provider, { value: l }, u)
            : Ee.createElement(
                Gl.Provider,
                { value: l },
                Ee.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(Ee.Component);
Lh.propTypes = {};
Lh.defaultProps = oO;
const Ox = (e) => e.scrollTop;
function ql(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration:
      (n = s.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = s.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: s.transitionDelay,
  };
}
function iO(e) {
  return Re("MuiPaper", e);
}
Ce("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const sO = ["className", "component", "elevation", "square", "variant"],
  aO = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return _e(i, iO, o);
  },
  lO = ne("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return b(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        b(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${vr(
                "#fff",
                lv(t.elevation)
              )}, ${vr("#fff", lv(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  Mh = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation",
      } = r,
      u = re(r, sO),
      c = b({}, r, { component: i, elevation: s, square: a, variant: l }),
      d = aO(c);
    return w.jsx(
      lO,
      b({ as: i, ownerState: c, className: ue(d.root, o), ref: n }, u)
    );
  });
function uO(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: s,
      in: a,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = S.useState(!1),
    f = ue(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    y = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
    h = ue(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && d(!0),
    S.useEffect(() => {
      if (!a && l != null) {
        const v = setTimeout(l, u);
        return () => {
          clearTimeout(v);
        };
      }
    }, [l, a, u]),
    w.jsx("span", {
      className: f,
      style: y,
      children: w.jsx("span", { className: h }),
    })
  );
}
const ln = Ce("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  cO = ["center", "classes", "className"];
let Sc = (e) => e,
  cv,
  dv,
  fv,
  pv;
const Wf = 550,
  dO = 80,
  fO = bi(
    cv ||
      (cv = Sc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  pO = bi(
    dv ||
      (dv = Sc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  hO = bi(
    fv ||
      (fv = Sc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  mO = ne("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  gO = ne(uO, { name: "MuiTouchRipple", slot: "Ripple" })(
    pv ||
      (pv = Sc`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    ln.rippleVisible,
    fO,
    Wf,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ln.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    ln.child,
    ln.childLeaving,
    pO,
    Wf,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ln.childPulsate,
    hO,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  vO = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: s } = r,
      a = re(r, cO),
      [l, u] = S.useState([]),
      c = S.useRef(0),
      d = S.useRef(null);
    S.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = S.useRef(!1),
      y = Sx(),
      h = S.useRef(null),
      v = S.useRef(null),
      R = S.useCallback(
        (x) => {
          const {
            pulsate: C,
            rippleX: E,
            rippleY: _,
            rippleSize: N,
            cb: I,
          } = x;
          u((A) => [
            ...A,
            w.jsx(
              gO,
              {
                classes: {
                  ripple: ue(i.ripple, ln.ripple),
                  rippleVisible: ue(i.rippleVisible, ln.rippleVisible),
                  ripplePulsate: ue(i.ripplePulsate, ln.ripplePulsate),
                  child: ue(i.child, ln.child),
                  childLeaving: ue(i.childLeaving, ln.childLeaving),
                  childPulsate: ue(i.childPulsate, ln.childPulsate),
                },
                timeout: Wf,
                pulsate: C,
                rippleX: E,
                rippleY: _,
                rippleSize: N,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = I);
        },
        [i]
      ),
      g = S.useCallback(
        (x = {}, C = {}, E = () => {}) => {
          const {
            pulsate: _ = !1,
            center: N = o || C.pulsate,
            fakeElement: I = !1,
          } = C;
          if ((x == null ? void 0 : x.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (x == null ? void 0 : x.type) === "touchstart" && (f.current = !0);
          const A = I ? null : v.current,
            j = A
              ? A.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let G, D, W;
          if (
            N ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            (G = Math.round(j.width / 2)), (D = Math.round(j.height / 2));
          else {
            const { clientX: K, clientY: H } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x;
            (G = Math.round(K - j.left)), (D = Math.round(H - j.top));
          }
          if (N)
            (W = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3)),
              W % 2 === 0 && (W += 1);
          else {
            const K =
                Math.max(Math.abs((A ? A.clientWidth : 0) - G), G) * 2 + 2,
              H = Math.max(Math.abs((A ? A.clientHeight : 0) - D), D) * 2 + 2;
            W = Math.sqrt(K ** 2 + H ** 2);
          }
          x != null && x.touches
            ? h.current === null &&
              ((h.current = () => {
                R({ pulsate: _, rippleX: G, rippleY: D, rippleSize: W, cb: E });
              }),
              y.start(dO, () => {
                h.current && (h.current(), (h.current = null));
              }))
            : R({ pulsate: _, rippleX: G, rippleY: D, rippleSize: W, cb: E });
        },
        [o, R, y]
      ),
      p = S.useCallback(() => {
        g({}, { pulsate: !0 });
      }, [g]),
      m = S.useCallback(
        (x, C) => {
          if (
            (y.clear(),
            (x == null ? void 0 : x.type) === "touchend" && h.current)
          ) {
            h.current(),
              (h.current = null),
              y.start(0, () => {
                m(x, C);
              });
            return;
          }
          (h.current = null),
            u((E) => (E.length > 0 ? E.slice(1) : E)),
            (d.current = C);
        },
        [y]
      );
    return (
      S.useImperativeHandle(n, () => ({ pulsate: p, start: g, stop: m }), [
        p,
        g,
        m,
      ]),
      w.jsx(
        mO,
        b({ className: ue(ln.root, i.root, s), ref: v }, a, {
          children: w.jsx(Lh, { component: null, exit: !0, children: l }),
        })
      )
    );
  });
function yO(e) {
  return Re("MuiButtonBase", e);
}
const SO = Ce("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  xO = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  bO = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      s = _e({ root: ["root", t && "disabled", n && "focusVisible"] }, yO, o);
    return n && r && (s.root += ` ${r}`), s;
  },
  wO = ne("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${SO.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  Oh = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: y = "a",
        onBlur: h,
        onClick: v,
        onContextMenu: R,
        onDragLeave: g,
        onFocus: p,
        onFocusVisible: m,
        onKeyDown: x,
        onKeyUp: C,
        onMouseDown: E,
        onMouseLeave: _,
        onMouseUp: N,
        onTouchEnd: I,
        onTouchMove: A,
        onTouchStart: j,
        tabIndex: G = 0,
        TouchRippleProps: D,
        touchRippleRef: W,
        type: K,
      } = r,
      H = re(r, xO),
      Q = S.useRef(null),
      $ = S.useRef(null),
      V = $t($, W),
      { isFocusVisibleRef: F, onFocus: J, onBlur: k, ref: O } = xx(),
      [M, Z] = S.useState(!1);
    u && M && Z(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Z(!0), Q.current.focus();
          },
        }),
        []
      );
    const [U, ie] = S.useState(!1);
    S.useEffect(() => {
      ie(!0);
    }, []);
    const se = U && !c && !u;
    S.useEffect(() => {
      M && f && !c && U && $.current.pulsate();
    }, [c, f, M, U]);
    function q(fe, wn, Fr = d) {
      return jo(
        (or) => (wn && wn(or), !Fr && $.current && $.current[fe](or), !0)
      );
    }
    const xe = q("start", E),
      de = q("stop", R),
      le = q("stop", g),
      oe = q("stop", N),
      ye = q("stop", (fe) => {
        M && fe.preventDefault(), _ && _(fe);
      }),
      Pe = q("start", j),
      rt = q("stop", I),
      ze = q("stop", A),
      kt = q(
        "stop",
        (fe) => {
          k(fe), F.current === !1 && Z(!1), h && h(fe);
        },
        !1
      ),
      Kt = jo((fe) => {
        Q.current || (Q.current = fe.currentTarget),
          J(fe),
          F.current === !0 && (Z(!0), m && m(fe)),
          p && p(fe);
      }),
      xt = () => {
        const fe = Q.current;
        return l && l !== "button" && !(fe.tagName === "A" && fe.href);
      },
      je = S.useRef(!1),
      on = jo((fe) => {
        f &&
          !je.current &&
          M &&
          $.current &&
          fe.key === " " &&
          ((je.current = !0),
          $.current.stop(fe, () => {
            $.current.start(fe);
          })),
          fe.target === fe.currentTarget &&
            xt() &&
            fe.key === " " &&
            fe.preventDefault(),
          x && x(fe),
          fe.target === fe.currentTarget &&
            xt() &&
            fe.key === "Enter" &&
            !u &&
            (fe.preventDefault(), v && v(fe));
      }),
      bt = jo((fe) => {
        f &&
          fe.key === " " &&
          $.current &&
          M &&
          !fe.defaultPrevented &&
          ((je.current = !1),
          $.current.stop(fe, () => {
            $.current.pulsate(fe);
          })),
          C && C(fe),
          v &&
            fe.target === fe.currentTarget &&
            xt() &&
            fe.key === " " &&
            !fe.defaultPrevented &&
            v(fe);
      });
    let Oe = l;
    Oe === "button" && (H.href || H.to) && (Oe = y);
    const Mt = {};
    Oe === "button"
      ? ((Mt.type = K === void 0 ? "button" : K), (Mt.disabled = u))
      : (!H.href && !H.to && (Mt.role = "button"),
        u && (Mt["aria-disabled"] = u));
    const Mn = $t(n, O, Q),
      bn = b({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: G,
        focusVisible: M,
      }),
      Ie = bO(bn);
    return w.jsxs(
      wO,
      b(
        {
          as: Oe,
          className: ue(Ie.root, a),
          ownerState: bn,
          onBlur: kt,
          onClick: v,
          onContextMenu: de,
          onFocus: Kt,
          onKeyDown: on,
          onKeyUp: bt,
          onMouseDown: xe,
          onMouseLeave: ye,
          onMouseUp: oe,
          onDragLeave: le,
          onTouchEnd: rt,
          onTouchMove: ze,
          onTouchStart: Pe,
          ref: Mn,
          tabIndex: u ? -1 : G,
          type: K,
        },
        Mt,
        H,
        { children: [s, se ? w.jsx(vO, b({ ref: V, center: i }, D)) : null] }
      )
    );
  });
function RO(e) {
  return Re("MuiTypography", e);
}
Ce("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const CO = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  _O = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${ae(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return _e(a, RO, s);
  },
  EO = ne("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${ae(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  hv = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  kO = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  TO = (e) => kO[e] || e,
  nt = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiTypography" }),
      o = TO(r.color),
      i = pa(b({}, r, { color: o })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: y = hv,
      } = i,
      h = re(i, CO),
      v = b({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: f,
        variantMapping: y,
      }),
      R = l || (d ? "p" : y[f] || hv[f]) || "span",
      g = _O(v);
    return w.jsx(
      EO,
      b({ as: R, ref: n, ownerState: v, className: ue(g.root, a) }, h)
    );
  });
function PO(e) {
  return Re("MuiAppBar", e);
}
Ce("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const NO = ["className", "color", "enableColorOnDark", "position"],
  $O = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${ae(t)}`, `position${ae(n)}`] };
    return _e(o, PO, r);
  },
  Va = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  AO = ne(Mh, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${ae(n.position)}`], t[`color${ae(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return b(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        b(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            b(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        b(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Va(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Va(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Va(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Va(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          !["inherit", "transparent"].includes(t.color) && {
            backgroundColor: "var(--AppBar-background)",
          },
          { color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)" },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  LO = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed",
      } = r,
      l = re(r, NO),
      u = b({}, r, { color: i, position: a, enableColorOnDark: s }),
      c = $O(u);
    return w.jsx(
      AO,
      b(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: ue(c.root, o, a === "fixed" && "mui-fixed"),
          ref: n,
        },
        l
      )
    );
  });
function MO(e) {
  return typeof e == "function" ? e() : e;
}
const OO = S.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [s, a] = S.useState(null),
      l = $t(S.isValidElement(r) ? r.ref : null, n);
    if (
      (uo(() => {
        i || a(MO(o) || document.body);
      }, [o, i]),
      uo(() => {
        if (s && !i)
          return (
            Ff(n, s),
            () => {
              Ff(n, null);
            }
          );
      }, [n, s, i]),
      i)
    ) {
      if (S.isValidElement(r)) {
        const u = { ref: l };
        return S.cloneElement(r, u);
      }
      return w.jsx(S.Fragment, { children: r });
    }
    return w.jsx(S.Fragment, { children: s && Gp.createPortal(r, s) });
  }),
  IO = ["onChange", "maxRows", "minRows", "style", "value"];
function Wa(e) {
  return parseInt(e, 10) || 0;
}
const FO = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function BO(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const DO = S.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
    l = re(t, IO),
    { current: u } = S.useRef(a != null),
    c = S.useRef(null),
    d = $t(n, c),
    f = S.useRef(null),
    y = S.useRef(null),
    h = S.useCallback(() => {
      const g = c.current,
        m = co(g).getComputedStyle(g);
      if (m.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const x = y.current;
      (x.style.width = m.width),
        (x.value = g.value || t.placeholder || "x"),
        x.value.slice(-1) ===
          `
` && (x.value += " ");
      const C = m.boxSizing,
        E = Wa(m.paddingBottom) + Wa(m.paddingTop),
        _ = Wa(m.borderBottomWidth) + Wa(m.borderTopWidth),
        N = x.scrollHeight;
      x.value = "x";
      const I = x.scrollHeight;
      let A = N;
      i && (A = Math.max(Number(i) * I, A)),
        o && (A = Math.min(Number(o) * I, A)),
        (A = Math.max(A, I));
      const j = A + (C === "border-box" ? E + _ : 0),
        G = Math.abs(A - N) <= 1;
      return { outerHeightStyle: j, overflowing: G };
    }, [o, i, t.placeholder]),
    v = S.useCallback(() => {
      const g = h();
      if (BO(g)) return;
      const p = g.outerHeightStyle,
        m = c.current;
      f.current !== p && ((f.current = p), (m.style.height = `${p}px`)),
        (m.style.overflow = g.overflowing ? "hidden" : "");
    }, [h]);
  uo(() => {
    const g = () => {
      v();
    };
    let p;
    const m = vx(g),
      x = c.current,
      C = co(x);
    C.addEventListener("resize", m);
    let E;
    return (
      typeof ResizeObserver < "u" &&
        ((E = new ResizeObserver(g)), E.observe(x)),
      () => {
        m.clear(),
          cancelAnimationFrame(p),
          C.removeEventListener("resize", m),
          E && E.disconnect();
      }
    );
  }, [h, v]),
    uo(() => {
      v();
    });
  const R = (g) => {
    u || v(), r && r(g);
  };
  return w.jsxs(S.Fragment, {
    children: [
      w.jsx(
        "textarea",
        b({ value: a, onChange: R, ref: d, rows: i, style: s }, l)
      ),
      w.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: y,
        tabIndex: -1,
        style: b({}, FO.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function yo({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const Ih = S.createContext(void 0);
function Or() {
  return S.useContext(Ih);
}
function zO(e) {
  return w.jsx(BA, b({}, e, { defaultTheme: Nh, themeId: Bu }));
}
function mv(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ql(e, t = !1) {
  return (
    e &&
    ((mv(e.value) && e.value !== "") ||
      (t && mv(e.defaultValue) && e.defaultValue !== ""))
  );
}
function jO(e) {
  return e.startAdornment;
}
function UO(e) {
  return Re("MuiInputBase", e);
}
const pi = Ce("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  VO = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  xc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${ae(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  bc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  WO = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: f,
        startAdornment: y,
        type: h,
      } = e,
      v = {
        root: [
          "root",
          `color${ae(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          f && f !== "medium" && `size${ae(f)}`,
          c && "multiline",
          y && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          h === "search" && "inputTypeSearch",
          c && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          y && "inputAdornedStart",
          i && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return _e(v, UO, t);
  },
  wc = ne("div", { name: "MuiInputBase", slot: "Root", overridesResolver: xc })(
    ({ theme: e, ownerState: t }) =>
      b(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${pi.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          b({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  Rc = ne("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: bc,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = b(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return b(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${pi.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${pi.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  HO = w.jsx(zO, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  KO = S.forwardRef(function (t, n) {
    var r;
    const o = ke({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: y,
        endAdornment: h,
        fullWidth: v = !1,
        id: R,
        inputComponent: g = "input",
        inputProps: p = {},
        inputRef: m,
        maxRows: x,
        minRows: C,
        multiline: E = !1,
        name: _,
        onBlur: N,
        onChange: I,
        onClick: A,
        onFocus: j,
        onKeyDown: G,
        onKeyUp: D,
        placeholder: W,
        readOnly: K,
        renderSuffix: H,
        rows: Q,
        slotProps: $ = {},
        slots: V = {},
        startAdornment: F,
        type: J = "text",
        value: k,
      } = o,
      O = re(o, VO),
      M = p.value != null ? p.value : k,
      { current: Z } = S.useRef(M != null),
      U = S.useRef(),
      ie = S.useCallback((Ie) => {}, []),
      se = $t(U, m, p.ref, ie),
      [q, xe] = S.useState(!1),
      de = Or(),
      le = yo({
        props: o,
        muiFormControl: de,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (le.focused = de ? de.focused : q),
      S.useEffect(() => {
        !de && f && q && (xe(!1), N && N());
      }, [de, f, q, N]);
    const oe = de && de.onFilled,
      ye = de && de.onEmpty,
      Pe = S.useCallback(
        (Ie) => {
          Ql(Ie) ? oe && oe() : ye && ye();
        },
        [oe, ye]
      );
    uo(() => {
      Z && Pe({ value: M });
    }, [M, Pe, Z]);
    const rt = (Ie) => {
        if (le.disabled) {
          Ie.stopPropagation();
          return;
        }
        j && j(Ie),
          p.onFocus && p.onFocus(Ie),
          de && de.onFocus ? de.onFocus(Ie) : xe(!0);
      },
      ze = (Ie) => {
        N && N(Ie),
          p.onBlur && p.onBlur(Ie),
          de && de.onBlur ? de.onBlur(Ie) : xe(!1);
      },
      kt = (Ie, ...fe) => {
        if (!Z) {
          const wn = Ie.target || U.current;
          if (wn == null) throw new Error(ao(1));
          Pe({ value: wn.value });
        }
        p.onChange && p.onChange(Ie, ...fe), I && I(Ie, ...fe);
      };
    S.useEffect(() => {
      Pe(U.current);
    }, []);
    const Kt = (Ie) => {
      U.current && Ie.currentTarget === Ie.target && U.current.focus(),
        A && A(Ie);
    };
    let xt = g,
      je = p;
    E &&
      xt === "input" &&
      (Q
        ? (je = b({ type: void 0, minRows: Q, maxRows: Q }, je))
        : (je = b({ type: void 0, maxRows: x, minRows: C }, je)),
      (xt = DO));
    const on = (Ie) => {
      Pe(
        Ie.animationName === "mui-auto-fill-cancel" ? U.current : { value: "x" }
      );
    };
    S.useEffect(() => {
      de && de.setAdornedStart(!!F);
    }, [de, F]);
    const bt = b({}, o, {
        color: le.color || "primary",
        disabled: le.disabled,
        endAdornment: h,
        error: le.error,
        focused: le.focused,
        formControl: de,
        fullWidth: v,
        hiddenLabel: le.hiddenLabel,
        multiline: E,
        size: le.size,
        startAdornment: F,
        type: J,
      }),
      Oe = WO(bt),
      Mt = V.root || u.Root || wc,
      Mn = $.root || c.root || {},
      bn = V.input || u.Input || Rc;
    return (
      (je = b({}, je, (r = $.input) != null ? r : c.input)),
      w.jsxs(S.Fragment, {
        children: [
          !y && HO,
          w.jsxs(
            Mt,
            b(
              {},
              Mn,
              !Hl(Mt) && { ownerState: b({}, bt, Mn.ownerState) },
              { ref: n, onClick: Kt },
              O,
              {
                className: ue(
                  Oe.root,
                  Mn.className,
                  l,
                  K && "MuiInputBase-readOnly"
                ),
                children: [
                  F,
                  w.jsx(Ih.Provider, {
                    value: null,
                    children: w.jsx(
                      bn,
                      b(
                        {
                          ownerState: bt,
                          "aria-invalid": le.error,
                          "aria-describedby": i,
                          autoComplete: s,
                          autoFocus: a,
                          defaultValue: d,
                          disabled: le.disabled,
                          id: R,
                          onAnimationStart: on,
                          name: _,
                          placeholder: W,
                          readOnly: K,
                          required: le.required,
                          rows: Q,
                          value: M,
                          onKeyDown: G,
                          onKeyUp: D,
                          type: J,
                        },
                        je,
                        !Hl(bn) && {
                          as: xt,
                          ownerState: b({}, bt, je.ownerState),
                        },
                        {
                          ref: se,
                          className: ue(
                            Oe.input,
                            je.className,
                            K && "MuiInputBase-readOnly"
                          ),
                          onBlur: ze,
                          onChange: kt,
                          onFocus: rt,
                        }
                      )
                    ),
                  }),
                  h,
                  H ? H(b({}, le, { startAdornment: F })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  Fh = KO;
function GO(e) {
  return Re("MuiInput", e);
}
const Qi = b({}, pi, Ce("MuiInput", ["root", "underline", "input"]));
function qO(e) {
  return Re("MuiOutlinedInput", e);
}
const sr = b(
  {},
  pi,
  Ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
);
function QO(e) {
  return Re("MuiFilledInput", e);
}
const Br = b({}, pi, Ce("MuiFilledInput", ["root", "underline", "input"])),
  XO = yc(w.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  YO = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  ZO = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  JO = S.forwardRef(function (t, n) {
    const r = $h(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: y,
        onExited: h,
        onExiting: v,
        style: R,
        timeout: g = o,
        TransitionComponent: p = Hn,
      } = t,
      m = re(t, YO),
      x = S.useRef(null),
      C = $t(x, a.ref, n),
      E = (W) => (K) => {
        if (W) {
          const H = x.current;
          K === void 0 ? W(H) : W(H, K);
        }
      },
      _ = E(f),
      N = E((W, K) => {
        Ox(W);
        const H = ql({ style: R, timeout: g, easing: l }, { mode: "enter" });
        (W.style.webkitTransition = r.transitions.create("opacity", H)),
          (W.style.transition = r.transitions.create("opacity", H)),
          c && c(W, K);
      }),
      I = E(d),
      A = E(v),
      j = E((W) => {
        const K = ql({ style: R, timeout: g, easing: l }, { mode: "exit" });
        (W.style.webkitTransition = r.transitions.create("opacity", K)),
          (W.style.transition = r.transitions.create("opacity", K)),
          y && y(W);
      }),
      G = E(h),
      D = (W) => {
        i && i(x.current, W);
      };
    return w.jsx(
      p,
      b(
        {
          appear: s,
          in: u,
          nodeRef: x,
          onEnter: N,
          onEntered: I,
          onEntering: _,
          onExit: j,
          onExited: G,
          onExiting: A,
          addEndListener: D,
          timeout: g,
        },
        m,
        {
          children: (W, K) =>
            S.cloneElement(
              a,
              b(
                {
                  style: b(
                    {
                      opacity: 0,
                      visibility: W === "exited" && !u ? "hidden" : void 0,
                    },
                    ZO[W],
                    R,
                    a.props.style
                  ),
                  ref: C,
                },
                K
              )
            ),
        }
      )
    );
  });
function eI(e) {
  return Re("MuiBackdrop", e);
}
Ce("MuiBackdrop", ["root", "invisible"]);
const tI = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  nI = (e) => {
    const { classes: t, invisible: n } = e;
    return _e({ root: ["root", n && "invisible"] }, eI, t);
  },
  rI = ne("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    b(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  oI = S.forwardRef(function (t, n) {
    var r, o, i;
    const s = ke({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: y,
        slotProps: h = {},
        slots: v = {},
        TransitionComponent: R = JO,
        transitionDuration: g,
      } = s,
      p = re(s, tI),
      m = b({}, s, { component: u, invisible: f }),
      x = nI(m),
      C = (r = h.root) != null ? r : d.root;
    return w.jsx(
      R,
      b({ in: y, timeout: g }, p, {
        children: w.jsx(
          rI,
          b({ "aria-hidden": !0 }, C, {
            as: (o = (i = v.root) != null ? i : c.Root) != null ? o : u,
            className: ue(x.root, l, C == null ? void 0 : C.className),
            ownerState: b({}, m, C == null ? void 0 : C.ownerState),
            classes: x,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  iI = Ce("MuiBox", ["root"]),
  sI = $x(),
  Ei = WA({
    themeId: Bu,
    defaultTheme: sI,
    defaultClassName: iI.root,
    generateClassName: ux.generate,
  });
function aI(e) {
  return Re("MuiButton", e);
}
const Ha = Ce("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  lI = S.createContext({}),
  uI = S.createContext(void 0),
  cI = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  dI = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: s,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${ae(t)}`,
          `size${ae(o)}`,
          `${i}Size${ae(o)}`,
          `color${ae(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${ae(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${ae(o)}`],
      },
      l = _e(a, aI, s);
    return b({}, s, l);
  },
  Ix = (e) =>
    b(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  fI = ne(Oh, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ae(n.color)}`],
        t[`size${ae(n.size)}`],
        t[`${n.variant}Size${ae(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return b(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": b(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : vr(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : vr(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : vr(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": b(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Ha.focusVisible}`]: b(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ha.disabled}`]: b(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${vr(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Ha.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Ha.disabled}`]: { boxShadow: "none" },
      }
  ),
  pI = ne("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${ae(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    b(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      Ix(e)
    )
  ),
  hI = ne("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${ae(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    b(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      Ix(e)
    )
  ),
  Er = S.forwardRef(function (t, n) {
    const r = S.useContext(lI),
      o = S.useContext(uI),
      i = Gs(r, t),
      s = ke({ props: i, name: "MuiButton" }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: y = !1,
        endIcon: h,
        focusVisibleClassName: v,
        fullWidth: R = !1,
        size: g = "medium",
        startIcon: p,
        type: m,
        variant: x = "text",
      } = s,
      C = re(s, cI),
      E = b({}, s, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: y,
        fullWidth: R,
        size: g,
        type: m,
        variant: x,
      }),
      _ = dI(E),
      N =
        p && w.jsx(pI, { className: _.startIcon, ownerState: E, children: p }),
      I = h && w.jsx(hI, { className: _.endIcon, ownerState: E, children: h }),
      A = o || "";
    return w.jsxs(
      fI,
      b(
        {
          ownerState: E,
          className: ue(r.className, _.root, c, A),
          component: u,
          disabled: d,
          focusRipple: !y,
          focusVisibleClassName: ue(_.focusVisible, v),
          ref: n,
          type: m,
        },
        C,
        { classes: _, children: [N, a, I] }
      )
    );
  });
function mI(e) {
  return Re("MuiCard", e);
}
Ce("MuiCard", ["root"]);
const gI = ["className", "raised"],
  vI = (e) => {
    const { classes: t } = e;
    return _e({ root: ["root"] }, mI, t);
  },
  yI = ne(Mh, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  ki = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      s = re(r, gI),
      a = b({}, r, { raised: i }),
      l = vI(a);
    return w.jsx(
      yI,
      b(
        {
          className: ue(l.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: a,
        },
        s
      )
    );
  });
function SI(e) {
  return Re("MuiCardActionArea", e);
}
const yd = Ce("MuiCardActionArea", ["root", "focusVisible", "focusHighlight"]),
  xI = ["children", "className", "focusVisibleClassName"],
  bI = (e) => {
    const { classes: t } = e;
    return _e({ root: ["root"], focusHighlight: ["focusHighlight"] }, SI, t);
  },
  wI = ne(Oh, {
    name: "MuiCardActionArea",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    display: "block",
    textAlign: "inherit",
    borderRadius: "inherit",
    width: "100%",
    [`&:hover .${yd.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.hoverOpacity,
      "@media (hover: none)": { opacity: 0 },
    },
    [`&.${yd.focusVisible} .${yd.focusHighlight}`]: {
      opacity: (e.vars || e).palette.action.focusOpacity,
    },
  })),
  RI = ne("span", {
    name: "MuiCardActionArea",
    slot: "FocusHighlight",
    overridesResolver: (e, t) => t.focusHighlight,
  })(({ theme: e }) => ({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
    opacity: 0,
    backgroundColor: "currentcolor",
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.short,
    }),
  })),
  Fx = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCardActionArea" }),
      { children: o, className: i, focusVisibleClassName: s } = r,
      a = re(r, xI),
      l = r,
      u = bI(l);
    return w.jsxs(
      wI,
      b(
        {
          className: ue(u.root, i),
          focusVisibleClassName: ue(s, u.focusVisible),
          ref: n,
          ownerState: l,
        },
        a,
        {
          children: [
            o,
            w.jsx(RI, { className: u.focusHighlight, ownerState: l }),
          ],
        }
      )
    );
  });
function CI(e) {
  return Re("MuiCardActions", e);
}
Ce("MuiCardActions", ["root", "spacing"]);
const _I = ["disableSpacing", "className"],
  EI = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return _e({ root: ["root", !n && "spacing"] }, CI, t);
  },
  kI = ne("div", {
    name: "MuiCardActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    b(
      { display: "flex", alignItems: "center", padding: 8 },
      !e.disableSpacing && {
        "& > :not(style) ~ :not(style)": { marginLeft: 8 },
      }
    )
  ),
  TI = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCardActions" }),
      { disableSpacing: o = !1, className: i } = r,
      s = re(r, _I),
      a = b({}, r, { disableSpacing: o }),
      l = EI(a);
    return w.jsx(kI, b({ className: ue(l.root, i), ownerState: a, ref: n }, s));
  });
function PI(e) {
  return Re("MuiCardContent", e);
}
Ce("MuiCardContent", ["root"]);
const NI = ["className", "component"],
  $I = (e) => {
    const { classes: t } = e;
    return _e({ root: ["root"] }, PI, t);
  },
  AI = ne("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  Ti = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      s = re(r, NI),
      a = b({}, r, { component: i }),
      l = $I(a);
    return w.jsx(
      AI,
      b({ as: i, className: ue(l.root, o), ownerState: a, ref: n }, s)
    );
  });
function LI(e) {
  return Re("MuiCardMedia", e);
}
Ce("MuiCardMedia", ["root", "media", "img"]);
const MI = ["children", "className", "component", "image", "src", "style"],
  OI = (e) => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e;
    return _e({ root: ["root", n && "media", r && "img"] }, LI, t);
  },
  II = ne("div", {
    name: "MuiCardMedia",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { isMediaComponent: r, isImageComponent: o } = n;
      return [t.root, r && t.media, o && t.img];
    },
  })(({ ownerState: e }) =>
    b(
      {
        display: "block",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      e.isMediaComponent && { width: "100%" },
      e.isImageComponent && { objectFit: "cover" }
    )
  ),
  FI = ["video", "audio", "picture", "iframe", "img"],
  BI = ["picture", "img"],
  Bx = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCardMedia" }),
      {
        children: o,
        className: i,
        component: s = "div",
        image: a,
        src: l,
        style: u,
      } = r,
      c = re(r, MI),
      d = FI.indexOf(s) !== -1,
      f = !d && a ? b({ backgroundImage: `url("${a}")` }, u) : u,
      y = b({}, r, {
        component: s,
        isMediaComponent: d,
        isImageComponent: BI.indexOf(s) !== -1,
      }),
      h = OI(y);
    return w.jsx(
      II,
      b(
        {
          className: ue(h.root, i),
          as: s,
          role: !d && a ? "img" : void 0,
          ref: n,
          style: f,
          ownerState: y,
          src: d ? a || l : void 0,
        },
        c,
        { children: o }
      )
    );
  });
function DI(e) {
  return Re("PrivateSwitchBase", e);
}
Ce("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const zI = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  jI = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${ae(o)}`],
        input: ["input"],
      };
    return _e(i, DI, t);
  },
  UI = ne(Oh)(({ ownerState: e }) =>
    b(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  VI = ne("input", { shouldForwardProp: rn })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  WI = S.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: s,
        defaultChecked: a,
        disabled: l,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: d,
        id: f,
        inputProps: y,
        inputRef: h,
        name: v,
        onBlur: R,
        onChange: g,
        onFocus: p,
        readOnly: m,
        required: x = !1,
        tabIndex: C,
        type: E,
        value: _,
      } = t,
      N = re(t, zI),
      [I, A] = Bf({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      j = Or(),
      G = (V) => {
        p && p(V), j && j.onFocus && j.onFocus(V);
      },
      D = (V) => {
        R && R(V), j && j.onBlur && j.onBlur(V);
      },
      W = (V) => {
        if (V.nativeEvent.defaultPrevented) return;
        const F = V.target.checked;
        A(F), g && g(V, F);
      };
    let K = l;
    j && typeof K > "u" && (K = j.disabled);
    const H = E === "checkbox" || E === "radio",
      Q = b({}, t, { checked: I, disabled: K, disableFocusRipple: u, edge: c }),
      $ = jI(Q);
    return w.jsxs(
      UI,
      b(
        {
          component: "span",
          className: ue($.root, s),
          centerRipple: !0,
          focusRipple: !u,
          disabled: K,
          tabIndex: null,
          role: void 0,
          onFocus: G,
          onBlur: D,
          ownerState: Q,
          ref: n,
        },
        N,
        {
          children: [
            w.jsx(
              VI,
              b(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: a,
                  className: $.input,
                  disabled: K,
                  id: H ? f : void 0,
                  name: v,
                  onChange: W,
                  readOnly: m,
                  ref: h,
                  required: x,
                  ownerState: Q,
                  tabIndex: C,
                  type: E,
                },
                E === "checkbox" && _ === void 0 ? {} : { value: _ },
                y
              )
            ),
            I ? i : d,
          ],
        }
      )
    );
  }),
  HI = yc(
    w.jsx("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
    "CheckBoxOutlineBlank"
  ),
  KI = yc(
    w.jsx("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
    "CheckBox"
  ),
  GI = yc(
    w.jsx("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox"
  );
function qI(e) {
  return Re("MuiCheckbox", e);
}
const Sd = Ce("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
  ]),
  QI = [
    "checkedIcon",
    "color",
    "icon",
    "indeterminate",
    "indeterminateIcon",
    "inputProps",
    "size",
    "className",
  ],
  XI = (e) => {
    const { classes: t, indeterminate: n, color: r, size: o } = e,
      i = {
        root: ["root", n && "indeterminate", `color${ae(r)}`, `size${ae(o)}`],
      },
      s = _e(i, qI, t);
    return b({}, t, s);
  },
  YI = ne(WI, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.indeterminate && t.indeterminate,
        t[`size${ae(n.size)}`],
        n.color !== "default" && t[`color${ae(n.color)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette[t.color].mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : vr(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${Sd.checked}, &.${Sd.indeterminate}`]: {
          color: (e.vars || e).palette[t.color].main,
        },
        [`&.${Sd.disabled}`]: { color: (e.vars || e).palette.action.disabled },
      }
    )
  ),
  ZI = w.jsx(KI, {}),
  JI = w.jsx(HI, {}),
  eF = w.jsx(GI, {}),
  Dx = S.forwardRef(function (t, n) {
    var r, o;
    const i = ke({ props: t, name: "MuiCheckbox" }),
      {
        checkedIcon: s = ZI,
        color: a = "primary",
        icon: l = JI,
        indeterminate: u = !1,
        indeterminateIcon: c = eF,
        inputProps: d,
        size: f = "medium",
        className: y,
      } = i,
      h = re(i, QI),
      v = u ? c : l,
      R = u ? c : s,
      g = b({}, i, { color: a, indeterminate: u, size: f }),
      p = XI(g);
    return w.jsx(
      YI,
      b(
        {
          type: "checkbox",
          inputProps: b({ "data-indeterminate": u }, d),
          icon: S.cloneElement(v, {
            fontSize: (r = v.props.fontSize) != null ? r : f,
          }),
          checkedIcon: S.cloneElement(R, {
            fontSize: (o = R.props.fontSize) != null ? o : f,
          }),
          ownerState: g,
          ref: n,
          className: ue(p.root, y),
        },
        h,
        { classes: p }
      )
    );
  });
function tF(e) {
  return Re("MuiCircularProgress", e);
}
Ce("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const nF = [
  "className",
  "color",
  "disableShrink",
  "size",
  "style",
  "thickness",
  "value",
  "variant",
];
let Cc = (e) => e,
  gv,
  vv,
  yv,
  Sv;
const ar = 44,
  rF = bi(
    gv ||
      (gv = Cc`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  oF = bi(
    vv ||
      (vv = Cc`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  iF = (e) => {
    const { classes: t, variant: n, color: r, disableShrink: o } = e,
      i = {
        root: ["root", n, `color${ae(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${ae(n)}`, o && "circleDisableShrink"],
      };
    return _e(i, tF, t);
  },
  sF = ne("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], t[`color${ae(n.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      b(
        { display: "inline-block" },
        e.variant === "determinate" && {
          transition: t.transitions.create("transform"),
        },
        e.color !== "inherit" && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      Ju(
        yv ||
          (yv = Cc`
      animation: ${0} 1.4s linear infinite;
    `),
        rF
      )
  ),
  aF = ne("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg,
  })({ display: "block" }),
  lF = ne("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.circle,
        t[`circle${ae(n.variant)}`],
        n.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      b(
        { stroke: "currentColor" },
        e.variant === "determinate" && {
          transition: t.transitions.create("stroke-dashoffset"),
        },
        e.variant === "indeterminate" && {
          strokeDasharray: "80px, 200px",
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === "indeterminate" &&
      !e.disableShrink &&
      Ju(
        Sv ||
          (Sv = Cc`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        oF
      )
  ),
  uF = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiCircularProgress" }),
      {
        className: o,
        color: i = "primary",
        disableShrink: s = !1,
        size: a = 40,
        style: l,
        thickness: u = 3.6,
        value: c = 0,
        variant: d = "indeterminate",
      } = r,
      f = re(r, nF),
      y = b({}, r, {
        color: i,
        disableShrink: s,
        size: a,
        thickness: u,
        value: c,
        variant: d,
      }),
      h = iF(y),
      v = {},
      R = {},
      g = {};
    if (d === "determinate") {
      const p = 2 * Math.PI * ((ar - u) / 2);
      (v.strokeDasharray = p.toFixed(3)),
        (g["aria-valuenow"] = Math.round(c)),
        (v.strokeDashoffset = `${(((100 - c) / 100) * p).toFixed(3)}px`),
        (R.transform = "rotate(-90deg)");
    }
    return w.jsx(
      sF,
      b(
        {
          className: ue(h.root, o),
          style: b({ width: a, height: a }, R, l),
          ownerState: y,
          ref: n,
          role: "progressbar",
        },
        g,
        f,
        {
          children: w.jsx(aF, {
            className: h.svg,
            ownerState: y,
            viewBox: `${ar / 2} ${ar / 2} ${ar} ${ar}`,
            children: w.jsx(lF, {
              className: h.circle,
              style: v,
              ownerState: y,
              cx: ar,
              cy: ar,
              r: (ar - u) / 2,
              fill: "none",
              strokeWidth: u,
            }),
          }),
        }
      )
    );
  }),
  Ir = ML({
    createStyledComponent: ne("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${ae(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => ke({ props: e, name: "MuiContainer" }),
  });
function cF(e) {
  const t = Zt(e);
  return t.body === e
    ? co(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function bs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function xv(e) {
  return parseInt(co(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function dF(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function bv(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !dF(s);
    a && l && bs(s, o);
  });
}
function xd(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function fF(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (cF(r)) {
      const s = bx(Zt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${xv(r) + s}px`);
      const a = Zt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${xv(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Zt(r).body;
    else {
      const s = r.parentElement,
        a = co(r);
      i =
        (s == null ? void 0 : s.nodeName) === "HTML" &&
        a.getComputedStyle(s).overflowY === "scroll"
          ? s
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function pF(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class hF {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && bs(t.modalRef, !1);
    const o = pF(n);
    bv(n, t.mount, t.modalRef, o, !0);
    const i = xd(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = xd(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = fF(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = xd(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && bs(t.modalRef, n),
        bv(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && bs(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const mF = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function gF(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function vF(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function yF(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    vF(e)
  );
}
function SF(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(mF)).forEach((r, o) => {
      const i = gF(r);
      i === -1 ||
        !yF(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function xF() {
  return !0;
}
function bF(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = SF,
      isEnabled: s = xF,
      open: a,
    } = e,
    l = S.useRef(!1),
    u = S.useRef(null),
    c = S.useRef(null),
    d = S.useRef(null),
    f = S.useRef(null),
    y = S.useRef(!1),
    h = S.useRef(null),
    v = $t(t.ref, h),
    R = S.useRef(null);
  S.useEffect(() => {
    !a || !h.current || (y.current = !n);
  }, [n, a]),
    S.useEffect(() => {
      if (!a || !h.current) return;
      const m = Zt(h.current);
      return (
        h.current.contains(m.activeElement) ||
          (h.current.hasAttribute("tabIndex") ||
            h.current.setAttribute("tabIndex", "-1"),
          y.current && h.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [a]),
    S.useEffect(() => {
      if (!a || !h.current) return;
      const m = Zt(h.current),
        x = (_) => {
          (R.current = _),
            !(r || !s() || _.key !== "Tab") &&
              m.activeElement === h.current &&
              _.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        C = () => {
          const _ = h.current;
          if (_ === null) return;
          if (!m.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (
            _.contains(m.activeElement) ||
            (r &&
              m.activeElement !== u.current &&
              m.activeElement !== c.current)
          )
            return;
          if (m.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!y.current) return;
          let N = [];
          if (
            ((m.activeElement === u.current || m.activeElement === c.current) &&
              (N = i(h.current)),
            N.length > 0)
          ) {
            var I, A;
            const j = !!(
                (I = R.current) != null &&
                I.shiftKey &&
                ((A = R.current) == null ? void 0 : A.key) === "Tab"
              ),
              G = N[0],
              D = N[N.length - 1];
            typeof G != "string" &&
              typeof D != "string" &&
              (j ? D.focus() : G.focus());
          } else _.focus();
        };
      m.addEventListener("focusin", C), m.addEventListener("keydown", x, !0);
      const E = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && C();
      }, 50);
      return () => {
        clearInterval(E),
          m.removeEventListener("focusin", C),
          m.removeEventListener("keydown", x, !0);
      };
    }, [n, r, o, s, a, i]);
  const g = (m) => {
      d.current === null && (d.current = m.relatedTarget),
        (y.current = !0),
        (f.current = m.target);
      const x = t.props.onFocus;
      x && x(m);
    },
    p = (m) => {
      d.current === null && (d.current = m.relatedTarget), (y.current = !0);
    };
  return w.jsxs(S.Fragment, {
    children: [
      w.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      S.cloneElement(t, { ref: v, onFocus: g }),
      w.jsx("div", {
        tabIndex: a ? 0 : -1,
        onFocus: p,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function wF(e) {
  return typeof e == "function" ? e() : e;
}
function RF(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const CF = new hF();
function _F(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = CF,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    f = S.useRef({}),
    y = S.useRef(null),
    h = S.useRef(null),
    v = $t(h, d),
    [R, g] = S.useState(!c),
    p = RF(l);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const x = () => Zt(y.current),
    C = () => (
      (f.current.modalRef = h.current), (f.current.mount = y.current), f.current
    ),
    E = () => {
      o.mount(C(), { disableScrollLock: r }),
        h.current && (h.current.scrollTop = 0);
    },
    _ = jo(() => {
      const H = wF(t) || x().body;
      o.add(C(), H), h.current && E();
    }),
    N = S.useCallback(() => o.isTopModal(C()), [o]),
    I = jo((H) => {
      (y.current = H), H && (c && N() ? E() : h.current && bs(h.current, m));
    }),
    A = S.useCallback(() => {
      o.remove(C(), m);
    }, [m, o]);
  S.useEffect(
    () => () => {
      A();
    },
    [A]
  ),
    S.useEffect(() => {
      c ? _() : (!p || !i) && A();
    }, [c, A, p, i, _]);
  const j = (H) => (Q) => {
      var $;
      ($ = H.onKeyDown) == null || $.call(H, Q),
        !(Q.key !== "Escape" || Q.which === 229 || !N()) &&
          (n || (Q.stopPropagation(), u && u(Q, "escapeKeyDown")));
    },
    G = (H) => (Q) => {
      var $;
      ($ = H.onClick) == null || $.call(H, Q),
        Q.target === Q.currentTarget && u && u(Q, "backdropClick");
    };
  return {
    getRootProps: (H = {}) => {
      const Q = wx(e);
      delete Q.onTransitionEnter, delete Q.onTransitionExited;
      const $ = b({}, Q, H);
      return b({ role: "presentation" }, $, { onKeyDown: j($), ref: v });
    },
    getBackdropProps: (H = {}) => {
      const Q = H;
      return b({ "aria-hidden": !0 }, Q, { onClick: G(Q), open: c });
    },
    getTransitionProps: () => {
      const H = () => {
          g(!1), s && s();
        },
        Q = () => {
          g(!0), a && a(), i && A();
        };
      return {
        onEnter: Qg(H, l == null ? void 0 : l.props.onEnter),
        onExited: Qg(Q, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: v,
    portalRef: I,
    isTopModal: N,
    exited: R,
    hasTransition: p,
  };
}
function EF(e) {
  return Re("MuiModal", e);
}
Ce("MuiModal", ["root", "hidden", "backdrop"]);
const kF = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  TF = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return _e(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      EF,
      r
    );
  },
  PF = ne("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  NF = ne(oI, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  $F = S.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = ke({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = NF,
        BackdropProps: d,
        className: f,
        closeAfterTransition: y = !1,
        children: h,
        container: v,
        component: R,
        components: g = {},
        componentsProps: p = {},
        disableAutoFocus: m = !1,
        disableEnforceFocus: x = !1,
        disableEscapeKeyDown: C = !1,
        disablePortal: E = !1,
        disableRestoreFocus: _ = !1,
        disableScrollLock: N = !1,
        hideBackdrop: I = !1,
        keepMounted: A = !1,
        onBackdropClick: j,
        open: G,
        slotProps: D,
        slots: W,
      } = u,
      K = re(u, kF),
      H = b({}, u, {
        closeAfterTransition: y,
        disableAutoFocus: m,
        disableEnforceFocus: x,
        disableEscapeKeyDown: C,
        disablePortal: E,
        disableRestoreFocus: _,
        disableScrollLock: N,
        hideBackdrop: I,
        keepMounted: A,
      }),
      {
        getRootProps: Q,
        getBackdropProps: $,
        getTransitionProps: V,
        portalRef: F,
        isTopModal: J,
        exited: k,
        hasTransition: O,
      } = _F(b({}, H, { rootRef: n })),
      M = b({}, H, { exited: k }),
      Z = TF(M),
      U = {};
    if ((h.props.tabIndex === void 0 && (U.tabIndex = "-1"), O)) {
      const { onEnter: oe, onExited: ye } = V();
      (U.onEnter = oe), (U.onExited = ye);
    }
    const ie =
        (r = (o = W == null ? void 0 : W.root) != null ? o : g.Root) != null
          ? r
          : PF,
      se =
        (i = (s = W == null ? void 0 : W.backdrop) != null ? s : g.Backdrop) !=
        null
          ? i
          : c,
      q = (a = D == null ? void 0 : D.root) != null ? a : p.root,
      xe = (l = D == null ? void 0 : D.backdrop) != null ? l : p.backdrop,
      de = fi({
        elementType: ie,
        externalSlotProps: q,
        externalForwardedProps: K,
        getSlotProps: Q,
        additionalProps: { ref: n, as: R },
        ownerState: M,
        className: ue(
          f,
          q == null ? void 0 : q.className,
          Z == null ? void 0 : Z.root,
          !M.open && M.exited && (Z == null ? void 0 : Z.hidden)
        ),
      }),
      le = fi({
        elementType: se,
        externalSlotProps: xe,
        additionalProps: d,
        getSlotProps: (oe) =>
          $(
            b({}, oe, {
              onClick: (ye) => {
                j && j(ye), oe != null && oe.onClick && oe.onClick(ye);
              },
            })
          ),
        className: ue(
          xe == null ? void 0 : xe.className,
          d == null ? void 0 : d.className,
          Z == null ? void 0 : Z.backdrop
        ),
        ownerState: M,
      });
    return !A && !G && (!O || k)
      ? null
      : w.jsx(OO, {
          ref: F,
          container: v,
          disablePortal: E,
          children: w.jsxs(
            ie,
            b({}, de, {
              children: [
                !I && c ? w.jsx(se, b({}, le)) : null,
                w.jsx(bF, {
                  disableEnforceFocus: x,
                  disableAutoFocus: m,
                  disableRestoreFocus: _,
                  isEnabled: J,
                  open: G,
                  children: S.cloneElement(h, U),
                }),
              ],
            })
          ),
        });
  }),
  AF = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  LF = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = _e({ root: ["root", !n && "underline"], input: ["input"] }, QO, t);
    return b({}, t, o);
  },
  MF = ne(wc, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...xc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return b(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${Br.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${Br.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${Br.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${Br.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${Br.disabled}, .${Br.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${Br.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        b(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  OF = ne(Rc, { name: "MuiFilledInput", slot: "Input", overridesResolver: bc })(
    ({ theme: e, ownerState: t }) =>
      b(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  Bh = S.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = ke({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: d = "input",
        multiline: f = !1,
        slotProps: y,
        slots: h = {},
        type: v = "text",
      } = a,
      R = re(a, AF),
      g = b({}, a, { fullWidth: c, inputComponent: d, multiline: f, type: v }),
      p = LF(a),
      m = { root: { ownerState: g }, input: { ownerState: g } },
      x = y ?? u ? Nt(m, y ?? u) : m,
      C = (r = (o = h.root) != null ? o : l.Root) != null ? r : MF,
      E = (i = (s = h.input) != null ? s : l.Input) != null ? i : OF;
    return w.jsx(
      Fh,
      b(
        {
          slots: { root: C, input: E },
          componentsProps: x,
          fullWidth: c,
          inputComponent: d,
          multiline: f,
          ref: n,
          type: v,
        },
        R,
        { classes: p }
      )
    );
  });
Bh.muiName = "Input";
function IF(e) {
  return Re("MuiFormControl", e);
}
Ce("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const FF = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  BF = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = {
        root: ["root", n !== "none" && `margin${ae(n)}`, r && "fullWidth"],
      };
    return _e(o, IF, t);
  },
  DF = ne("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      b({}, t.root, t[`margin${ae(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    b(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  zF = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: y = "none",
        required: h = !1,
        size: v = "medium",
        variant: R = "outlined",
      } = r,
      g = re(r, FF),
      p = b({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: d,
        hiddenLabel: f,
        margin: y,
        required: h,
        size: v,
        variant: R,
      }),
      m = BF(p),
      [x, C] = S.useState(() => {
        let D = !1;
        return (
          o &&
            S.Children.forEach(o, (W) => {
              if (!hd(W, ["Input", "Select"])) return;
              const K = hd(W, ["Select"]) ? W.props.input : W;
              K && jO(K.props) && (D = !0);
            }),
          D
        );
      }),
      [E, _] = S.useState(() => {
        let D = !1;
        return (
          o &&
            S.Children.forEach(o, (W) => {
              hd(W, ["Input", "Select"]) &&
                (Ql(W.props, !0) || Ql(W.props.inputProps, !0)) &&
                (D = !0);
            }),
          D
        );
      }),
      [N, I] = S.useState(!1);
    l && N && I(!1);
    const A = c !== void 0 && !l ? c : N;
    let j;
    const G = S.useMemo(
      () => ({
        adornedStart: x,
        setAdornedStart: C,
        color: s,
        disabled: l,
        error: u,
        filled: E,
        focused: A,
        fullWidth: d,
        hiddenLabel: f,
        size: v,
        onBlur: () => {
          I(!1);
        },
        onEmpty: () => {
          _(!1);
        },
        onFilled: () => {
          _(!0);
        },
        onFocus: () => {
          I(!0);
        },
        registerEffect: j,
        required: h,
        variant: R,
      }),
      [x, s, l, u, E, A, d, f, j, h, v, R]
    );
    return w.jsx(Ih.Provider, {
      value: G,
      children: w.jsx(
        DF,
        b({ as: a, ownerState: p, className: ue(m.root, i), ref: n }, g, {
          children: o,
        })
      ),
    });
  }),
  jF = UL({
    createStyledComponent: ne("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => ke({ props: e, name: "MuiStack" }),
  });
function UF(e) {
  return Re("MuiFormControlLabel", e);
}
const as = Ce("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
    "required",
    "asterisk",
  ]),
  VF = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "required",
    "slotProps",
    "value",
  ],
  WF = (e) => {
    const {
        classes: t,
        disabled: n,
        labelPlacement: r,
        error: o,
        required: i,
      } = e,
      s = {
        root: [
          "root",
          n && "disabled",
          `labelPlacement${ae(r)}`,
          o && "error",
          i && "required",
        ],
        label: ["label", n && "disabled"],
        asterisk: ["asterisk", o && "error"],
      };
    return _e(s, UF, t);
  },
  HF = ne("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${as.label}`]: t.label },
        t.root,
        t[`labelPlacement${ae(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${as.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${as.label}`]: {
          [`&.${as.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  KF = ne("span", {
    name: "MuiFormControlLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${as.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  zx = S.forwardRef(function (t, n) {
    var r, o;
    const i = ke({ props: t, name: "MuiFormControlLabel" }),
      {
        className: s,
        componentsProps: a = {},
        control: l,
        disabled: u,
        disableTypography: c,
        label: d,
        labelPlacement: f = "end",
        required: y,
        slotProps: h = {},
      } = i,
      v = re(i, VF),
      R = Or(),
      g =
        (r = u ?? l.props.disabled) != null
          ? r
          : R == null
          ? void 0
          : R.disabled,
      p = y ?? l.props.required,
      m = { disabled: g, required: p };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((I) => {
      typeof l.props[I] > "u" && typeof i[I] < "u" && (m[I] = i[I]);
    });
    const x = yo({ props: i, muiFormControl: R, states: ["error"] }),
      C = b({}, i, {
        disabled: g,
        labelPlacement: f,
        required: p,
        error: x.error,
      }),
      E = WF(C),
      _ = (o = h.typography) != null ? o : a.typography;
    let N = d;
    return (
      N != null &&
        N.type !== nt &&
        !c &&
        (N = w.jsx(
          nt,
          b({ component: "span" }, _, {
            className: ue(E.label, _ == null ? void 0 : _.className),
            children: N,
          })
        )),
      w.jsxs(
        HF,
        b({ className: ue(E.root, s), ownerState: C, ref: n }, v, {
          children: [
            S.cloneElement(l, m),
            p
              ? w.jsxs(jF, {
                  display: "block",
                  children: [
                    N,
                    w.jsxs(KF, {
                      ownerState: C,
                      "aria-hidden": !0,
                      className: E.asterisk,
                      children: [" ", "*"],
                    }),
                  ],
                })
              : N,
          ],
        })
      )
    );
  });
function GF(e) {
  return Re("MuiFormHelperText", e);
}
const wv = Ce("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var Rv;
const qF = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  QF = (e) => {
    const {
        classes: t,
        contained: n,
        size: r,
        disabled: o,
        error: i,
        filled: s,
        focused: a,
        required: l,
      } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${ae(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return _e(u, GF, t);
  },
  XF = ne("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.size && t[`size${ae(n.size)}`],
        n.contained && t.contained,
        n.filled && t.filled,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${wv.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${wv.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  YF = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: s = "p" } = r,
      a = re(r, qF),
      l = Or(),
      u = yo({
        props: r,
        muiFormControl: l,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      c = b({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = QF(c);
    return w.jsx(
      XF,
      b({ as: s, ownerState: c, className: ue(d.root, i), ref: n }, a, {
        children:
          o === " "
            ? Rv ||
              (Rv = w.jsx("span", { className: "notranslate", children: "​" }))
            : o,
      })
    );
  });
function ZF(e) {
  return Re("MuiFormLabel", e);
}
const ws = Ce("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  JF = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  e5 = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          `color${ae(n)}`,
          o && "disabled",
          i && "error",
          s && "filled",
          r && "focused",
          a && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return _e(l, ZF, t);
  },
  t5 = ne("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      b(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    b({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${ws.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${ws.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${ws.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  n5 = ne("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${ws.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  r5 = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      a = re(r, JF),
      l = Or(),
      u = yo({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = b({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = e5(c);
    return w.jsxs(
      t5,
      b({ as: s, ownerState: c, className: ue(d.root, i), ref: n }, a, {
        children: [
          o,
          u.required &&
            w.jsxs(n5, {
              ownerState: c,
              "aria-hidden": !0,
              className: d.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  Cv = S.createContext();
function o5(e) {
  return Re("MuiGrid", e);
}
const i5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  s5 = ["column-reverse", "column", "row-reverse", "row"],
  a5 = ["nowrap", "wrap-reverse", "wrap"],
  Xi = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  qs = Ce("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...i5.map((e) => `spacing-xs-${e}`),
    ...s5.map((e) => `direction-xs-${e}`),
    ...a5.map((e) => `wrap-xs-${e}`),
    ...Xi.map((e) => `grid-xs-${e}`),
    ...Xi.map((e) => `grid-sm-${e}`),
    ...Xi.map((e) => `grid-md-${e}`),
    ...Xi.map((e) => `grid-lg-${e}`),
    ...Xi.map((e) => `grid-xl-${e}`),
  ]),
  l5 = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function Yo(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function u5({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const s = Zr({ values: t.columns, breakpoints: e.breakpoints.values }),
        a = typeof s == "object" ? s[o] : s;
      if (a == null) return r;
      const l = `${Math.round((n / a) * 1e8) / 1e6}%`;
      let u = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const c = e.spacing(t.columnSpacing);
        if (c !== "0px") {
          const d = `calc(${l} + ${Yo(c)})`;
          u = { flexBasis: d, maxWidth: d };
        }
      }
      i = b({ flexBasis: l, flexGrow: 0, maxWidth: l }, u);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function c5({ theme: e, ownerState: t }) {
  const n = Zr({ values: t.direction, breakpoints: e.breakpoints.values });
  return Wt({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${qs.item}`] = { maxWidth: "none" }),
      o
    );
  });
}
function jx({ breakpoints: e, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function d5({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Zr({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = jx({ breakpoints: e.breakpoints.values, values: i })),
      (o = Wt({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              marginTop: `-${Yo(c)}`,
              [`& > .${qs.item}`]: { paddingTop: Yo(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${qs.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function f5({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Zr({ values: r, breakpoints: e.breakpoints.values });
    let s;
    typeof i == "object" &&
      (s = jx({ breakpoints: e.breakpoints.values, values: i })),
      (o = Wt({ theme: e }, i, (a, l) => {
        var u;
        const c = e.spacing(a);
        return c !== "0px"
          ? {
              width: `calc(100% + ${Yo(c)})`,
              marginLeft: `-${Yo(c)}`,
              [`& > .${qs.item}`]: { paddingLeft: Yo(c) },
            }
          : (u = s) != null && u.includes(l)
          ? {}
          : {
              width: "100%",
              marginLeft: 0,
              [`& > .${qs.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return o;
}
function p5(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const h5 = ne("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: s,
        wrap: a,
        zeroMinWidth: l,
        breakpoints: u,
      } = n;
    let c = [];
    r && (c = p5(s, u, t));
    const d = [];
    return (
      u.forEach((f) => {
        const y = n[f];
        y && d.push(t[`grid-${f}-${String(y)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...c,
        o !== "row" && t[`direction-xs-${String(o)}`],
        a !== "wrap" && t[`wrap-xs-${String(a)}`],
        ...d,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    b(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap }
    ),
  c5,
  d5,
  f5,
  u5
);
function m5(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const g5 = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: s,
      zeroMinWidth: a,
      breakpoints: l,
    } = e;
    let u = [];
    n && (u = m5(i, l));
    const c = [];
    l.forEach((f) => {
      const y = e[f];
      y && c.push(`grid-${f}-${String(y)}`);
    });
    const d = {
      root: [
        "root",
        n && "container",
        o && "item",
        a && "zeroMinWidth",
        ...u,
        r !== "row" && `direction-xs-${String(r)}`,
        s !== "wrap" && `wrap-xs-${String(s)}`,
        ...c,
      ],
    };
    return _e(d, o5, t);
  },
  Xl = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = $h(),
      i = pa(r),
      {
        className: s,
        columns: a,
        columnSpacing: l,
        component: u = "div",
        container: c = !1,
        direction: d = "row",
        item: f = !1,
        rowSpacing: y,
        spacing: h = 0,
        wrap: v = "wrap",
        zeroMinWidth: R = !1,
      } = i,
      g = re(i, l5),
      p = y || h,
      m = l || h,
      x = S.useContext(Cv),
      C = c ? a || 12 : x,
      E = {},
      _ = b({}, g);
    o.keys.forEach((A) => {
      g[A] != null && ((E[A] = g[A]), delete _[A]);
    });
    const N = b(
        {},
        i,
        {
          columns: C,
          container: c,
          direction: d,
          item: f,
          rowSpacing: p,
          columnSpacing: m,
          wrap: v,
          zeroMinWidth: R,
          spacing: h,
        },
        E,
        { breakpoints: o.keys }
      ),
      I = g5(N);
    return w.jsx(Cv.Provider, {
      value: C,
      children: w.jsx(
        h5,
        b({ ownerState: N, className: ue(I.root, s), as: u, ref: n }, _)
      ),
    });
  }),
  v5 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Hf(e) {
  return `scale(${e}, ${e ** 2})`;
}
const y5 = {
    entering: { opacity: 1, transform: Hf(1) },
    entered: { opacity: 1, transform: "none" },
  },
  bd =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Ux = S.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: y,
        style: h,
        timeout: v = "auto",
        TransitionComponent: R = Hn,
      } = t,
      g = re(t, v5),
      p = Sx(),
      m = S.useRef(),
      x = $h(),
      C = S.useRef(null),
      E = $t(C, i.ref, n),
      _ = (K) => (H) => {
        if (K) {
          const Q = C.current;
          H === void 0 ? K(Q) : K(Q, H);
        }
      },
      N = _(c),
      I = _((K, H) => {
        Ox(K);
        const {
          duration: Q,
          delay: $,
          easing: V,
        } = ql({ style: h, timeout: v, easing: s }, { mode: "enter" });
        let F;
        v === "auto"
          ? ((F = x.transitions.getAutoHeightDuration(K.clientHeight)),
            (m.current = F))
          : (F = Q),
          (K.style.transition = [
            x.transitions.create("opacity", { duration: F, delay: $ }),
            x.transitions.create("transform", {
              duration: bd ? F : F * 0.666,
              delay: $,
              easing: V,
            }),
          ].join(",")),
          l && l(K, H);
      }),
      A = _(u),
      j = _(y),
      G = _((K) => {
        const {
          duration: H,
          delay: Q,
          easing: $,
        } = ql({ style: h, timeout: v, easing: s }, { mode: "exit" });
        let V;
        v === "auto"
          ? ((V = x.transitions.getAutoHeightDuration(K.clientHeight)),
            (m.current = V))
          : (V = H),
          (K.style.transition = [
            x.transitions.create("opacity", { duration: V, delay: Q }),
            x.transitions.create("transform", {
              duration: bd ? V : V * 0.666,
              delay: bd ? Q : Q || V * 0.333,
              easing: $,
            }),
          ].join(",")),
          (K.style.opacity = 0),
          (K.style.transform = Hf(0.75)),
          d && d(K);
      }),
      D = _(f),
      W = (K) => {
        v === "auto" && p.start(m.current || 0, K), r && r(C.current, K);
      };
    return w.jsx(
      R,
      b(
        {
          appear: o,
          in: a,
          nodeRef: C,
          onEnter: I,
          onEntered: A,
          onEntering: N,
          onExit: G,
          onExited: D,
          onExiting: j,
          addEndListener: W,
          timeout: v === "auto" ? null : v,
        },
        g,
        {
          children: (K, H) =>
            S.cloneElement(
              i,
              b(
                {
                  style: b(
                    {
                      opacity: 0,
                      transform: Hf(0.75),
                      visibility: K === "exited" && !a ? "hidden" : void 0,
                    },
                    y5[K],
                    h,
                    i.props.style
                  ),
                  ref: E,
                },
                H
              )
            ),
        }
      )
    );
  });
Ux.muiSupportAuto = !0;
const S5 = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  x5 = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = _e({ root: ["root", !n && "underline"], input: ["input"] }, GO, t);
    return b({}, t, o);
  },
  b5 = ne(wc, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...xc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      b(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${Qi.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${Qi.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${Qi.disabled}, .${Qi.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${Qi.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  w5 = ne(Rc, { name: "MuiInput", slot: "Input", overridesResolver: bc })({}),
  Dh = S.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = ke({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: f = "input",
        multiline: y = !1,
        slotProps: h,
        slots: v = {},
        type: R = "text",
      } = a,
      g = re(a, S5),
      p = x5(a),
      x = { root: { ownerState: { disableUnderline: l } } },
      C = h ?? c ? Nt(h ?? c, x) : x,
      E = (r = (o = v.root) != null ? o : u.Root) != null ? r : b5,
      _ = (i = (s = v.input) != null ? s : u.Input) != null ? i : w5;
    return w.jsx(
      Fh,
      b(
        {
          slots: { root: E, input: _ },
          slotProps: C,
          fullWidth: d,
          inputComponent: f,
          multiline: y,
          ref: n,
          type: R,
        },
        g,
        { classes: p }
      )
    );
  });
Dh.muiName = "Input";
function R5(e) {
  return Re("MuiInputLabel", e);
}
Ce("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const C5 = ["disableAnimation", "margin", "shrink", "variant", "className"],
  _5 = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: s,
        required: a,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${ae(r)}`,
          s,
        ],
        asterisk: [a && "asterisk"],
      },
      u = _e(l, R5, t);
    return b({}, t, u);
  },
  E5 = ne(r5, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${ws.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        b(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            b(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        b(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  k5 = S.forwardRef(function (t, n) {
    const r = ke({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      a = re(r, C5),
      l = Or();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = yo({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required", "focused"],
      }),
      d = b({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      f = _5(d);
    return w.jsx(
      E5,
      b(
        { "data-shrink": u, ownerState: d, ref: n, className: ue(f.root, s) },
        a,
        { classes: f }
      )
    );
  });
function T5(e) {
  return Re("MuiLink", e);
}
const P5 = Ce("MuiLink", [
    "root",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "button",
    "focusVisible",
  ]),
  Vx = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  N5 = (e) => Vx[e] || e,
  $5 = ({ theme: e, ownerState: t }) => {
    const n = N5(t.color),
      r = di(e, `palette.${n}`, !1) || t.color,
      o = di(e, `palette.${n}Channel`);
    return "vars" in e && o ? `rgba(${o} / 0.4)` : vr(r, 0.4);
  },
  A5 = [
    "className",
    "color",
    "component",
    "onBlur",
    "onFocus",
    "TypographyClasses",
    "underline",
    "variant",
    "sx",
  ],
  L5 = (e) => {
    const { classes: t, component: n, focusVisible: r, underline: o } = e,
      i = {
        root: [
          "root",
          `underline${ae(o)}`,
          n === "button" && "button",
          r && "focusVisible",
        ],
      };
    return _e(i, T5, t);
  },
  M5 = ne(nt, {
    name: "MuiLink",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`underline${ae(n.underline)}`],
        n.component === "button" && t.button,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    b(
      {},
      t.underline === "none" && { textDecoration: "none" },
      t.underline === "hover" && {
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      },
      t.underline === "always" &&
        b(
          { textDecoration: "underline" },
          t.color !== "inherit" && {
            textDecorationColor: $5({ theme: e, ownerState: t }),
          },
          { "&:hover": { textDecorationColor: "inherit" } }
        ),
      t.component === "button" && {
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        "&::-moz-focus-inner": { borderStyle: "none" },
        [`&.${P5.focusVisible}`]: { outline: "auto" },
      }
    )
  ),
  Wx = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiLink" }),
      {
        className: o,
        color: i = "primary",
        component: s = "a",
        onBlur: a,
        onFocus: l,
        TypographyClasses: u,
        underline: c = "always",
        variant: d = "inherit",
        sx: f,
      } = r,
      y = re(r, A5),
      { isFocusVisibleRef: h, onBlur: v, onFocus: R, ref: g } = xx(),
      [p, m] = S.useState(!1),
      x = $t(n, g),
      C = (I) => {
        v(I), h.current === !1 && m(!1), a && a(I);
      },
      E = (I) => {
        R(I), h.current === !0 && m(!0), l && l(I);
      },
      _ = b({}, r, {
        color: i,
        component: s,
        focusVisible: p,
        underline: c,
        variant: d,
      }),
      N = L5(_);
    return w.jsx(
      M5,
      b(
        {
          color: i,
          className: ue(N.root, o),
          classes: u,
          component: s,
          onBlur: C,
          onFocus: E,
          ref: x,
          ownerState: _,
          variant: d,
          sx: [
            ...(Object.keys(Vx).includes(i) ? [] : [{ color: i }]),
            ...(Array.isArray(f) ? f : [f]),
          ],
        },
        y
      )
    );
  }),
  O5 = S.createContext({});
function I5(e) {
  return Re("MuiList", e);
}
Ce("MuiList", ["root", "padding", "dense", "subheader"]);
const F5 = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  B5 = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return _e(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      I5,
      t
    );
  },
  D5 = ne("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    b(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  z5 = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = re(r, F5),
      d = S.useMemo(() => ({ dense: a }), [a]),
      f = b({}, r, { component: s, dense: a, disablePadding: l }),
      y = B5(f);
    return w.jsx(O5.Provider, {
      value: d,
      children: w.jsxs(
        D5,
        b({ as: s, className: ue(y.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  j5 = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function wd(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function _v(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function Hx(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function Yi(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !Hx(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const U5 = S.forwardRef(function (t, n) {
  const {
      actions: r,
      autoFocus: o = !1,
      autoFocusItem: i = !1,
      children: s,
      className: a,
      disabledItemsFocusable: l = !1,
      disableListWrap: u = !1,
      onKeyDown: c,
      variant: d = "selectedMenu",
    } = t,
    f = re(t, j5),
    y = S.useRef(null),
    h = S.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  uo(() => {
    o && y.current.focus();
  }, [o]),
    S.useImperativeHandle(
      r,
      () => ({
        adjustStyleForScrollbar: (m, { direction: x }) => {
          const C = !y.current.style.width;
          if (m.clientHeight < y.current.clientHeight && C) {
            const E = `${bx(Zt(m))}px`;
            (y.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = E),
              (y.current.style.width = `calc(100% + ${E})`);
          }
          return y.current;
        },
      }),
      []
    );
  const v = (m) => {
      const x = y.current,
        C = m.key,
        E = Zt(x).activeElement;
      if (C === "ArrowDown") m.preventDefault(), Yi(x, E, u, l, wd);
      else if (C === "ArrowUp") m.preventDefault(), Yi(x, E, u, l, _v);
      else if (C === "Home") m.preventDefault(), Yi(x, null, u, l, wd);
      else if (C === "End") m.preventDefault(), Yi(x, null, u, l, _v);
      else if (C.length === 1) {
        const _ = h.current,
          N = C.toLowerCase(),
          I = performance.now();
        _.keys.length > 0 &&
          (I - _.lastTime > 500
            ? ((_.keys = []), (_.repeating = !0), (_.previousKeyMatched = !0))
            : _.repeating && N !== _.keys[0] && (_.repeating = !1)),
          (_.lastTime = I),
          _.keys.push(N);
        const A = E && !_.repeating && Hx(E, _);
        _.previousKeyMatched && (A || Yi(x, E, !1, l, wd, _))
          ? m.preventDefault()
          : (_.previousKeyMatched = !1);
      }
      c && c(m);
    },
    R = $t(y, n);
  let g = -1;
  S.Children.forEach(s, (m, x) => {
    if (!S.isValidElement(m)) {
      g === x && ((g += 1), g >= s.length && (g = -1));
      return;
    }
    m.props.disabled ||
      (((d === "selectedMenu" && m.props.selected) || g === -1) && (g = x)),
      g === x &&
        (m.props.disabled ||
          m.props.muiSkipListHighlight ||
          m.type.muiSkipListHighlight) &&
        ((g += 1), g >= s.length && (g = -1));
  });
  const p = S.Children.map(s, (m, x) => {
    if (x === g) {
      const C = {};
      return (
        i && (C.autoFocus = !0),
        m.props.tabIndex === void 0 && d === "selectedMenu" && (C.tabIndex = 0),
        S.cloneElement(m, C)
      );
    }
    return m;
  });
  return w.jsx(
    z5,
    b(
      {
        role: "menu",
        ref: R,
        className: a,
        onKeyDown: v,
        tabIndex: o ? 0 : -1,
      },
      f,
      { children: p }
    )
  );
});
function V5(e) {
  return Re("MuiPopover", e);
}
Ce("MuiPopover", ["root", "paper"]);
const W5 = ["onEntering"],
  H5 = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  K5 = ["slotProps"];
function Ev(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function kv(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Tv(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function Rd(e) {
  return typeof e == "function" ? e() : e;
}
const G5 = (e) => {
    const { classes: t } = e;
    return _e({ root: ["root"], paper: ["paper"] }, V5, t);
  },
  q5 = ne($F, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Kx = ne(Mh, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  Q5 = S.forwardRef(function (t, n) {
    var r, o, i;
    const s = ke({ props: t, name: "MuiPopover" }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: d = "anchorEl",
        children: f,
        className: y,
        container: h,
        elevation: v = 8,
        marginThreshold: R = 16,
        open: g,
        PaperProps: p = {},
        slots: m,
        slotProps: x,
        transformOrigin: C = { vertical: "top", horizontal: "left" },
        TransitionComponent: E = Ux,
        transitionDuration: _ = "auto",
        TransitionProps: { onEntering: N } = {},
        disableScrollLock: I = !1,
      } = s,
      A = re(s.TransitionProps, W5),
      j = re(s, H5),
      G = (r = x == null ? void 0 : x.paper) != null ? r : p,
      D = S.useRef(),
      W = $t(D, G.ref),
      K = b({}, s, {
        anchorOrigin: u,
        anchorReference: d,
        elevation: v,
        marginThreshold: R,
        externalPaperSlotProps: G,
        transformOrigin: C,
        TransitionComponent: E,
        transitionDuration: _,
        TransitionProps: A,
      }),
      H = G5(K),
      Q = S.useCallback(() => {
        if (d === "anchorPosition") return c;
        const oe = Rd(l),
          Pe = (
            oe && oe.nodeType === 1 ? oe : Zt(D.current).body
          ).getBoundingClientRect();
        return {
          top: Pe.top + Ev(Pe, u.vertical),
          left: Pe.left + kv(Pe, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, d]),
      $ = S.useCallback(
        (oe) => ({
          vertical: Ev(oe, C.vertical),
          horizontal: kv(oe, C.horizontal),
        }),
        [C.horizontal, C.vertical]
      ),
      V = S.useCallback(
        (oe) => {
          const ye = { width: oe.offsetWidth, height: oe.offsetHeight },
            Pe = $(ye);
          if (d === "none")
            return { top: null, left: null, transformOrigin: Tv(Pe) };
          const rt = Q();
          let ze = rt.top - Pe.vertical,
            kt = rt.left - Pe.horizontal;
          const Kt = ze + ye.height,
            xt = kt + ye.width,
            je = co(Rd(l)),
            on = je.innerHeight - R,
            bt = je.innerWidth - R;
          if (R !== null && ze < R) {
            const Oe = ze - R;
            (ze -= Oe), (Pe.vertical += Oe);
          } else if (R !== null && Kt > on) {
            const Oe = Kt - on;
            (ze -= Oe), (Pe.vertical += Oe);
          }
          if (R !== null && kt < R) {
            const Oe = kt - R;
            (kt -= Oe), (Pe.horizontal += Oe);
          } else if (xt > bt) {
            const Oe = xt - bt;
            (kt -= Oe), (Pe.horizontal += Oe);
          }
          return {
            top: `${Math.round(ze)}px`,
            left: `${Math.round(kt)}px`,
            transformOrigin: Tv(Pe),
          };
        },
        [l, d, Q, $, R]
      ),
      [F, J] = S.useState(g),
      k = S.useCallback(() => {
        const oe = D.current;
        if (!oe) return;
        const ye = V(oe);
        ye.top !== null && (oe.style.top = ye.top),
          ye.left !== null && (oe.style.left = ye.left),
          (oe.style.transformOrigin = ye.transformOrigin),
          J(!0);
      }, [V]);
    S.useEffect(
      () => (
        I && window.addEventListener("scroll", k),
        () => window.removeEventListener("scroll", k)
      ),
      [l, I, k]
    );
    const O = (oe, ye) => {
        N && N(oe, ye), k();
      },
      M = () => {
        J(!1);
      };
    S.useEffect(() => {
      g && k();
    }),
      S.useImperativeHandle(
        a,
        () =>
          g
            ? {
                updatePosition: () => {
                  k();
                },
              }
            : null,
        [g, k]
      ),
      S.useEffect(() => {
        if (!g) return;
        const oe = vx(() => {
            k();
          }),
          ye = co(l);
        return (
          ye.addEventListener("resize", oe),
          () => {
            oe.clear(), ye.removeEventListener("resize", oe);
          }
        );
      }, [l, g, k]);
    let Z = _;
    _ === "auto" && !E.muiSupportAuto && (Z = void 0);
    const U = h || (l ? Zt(Rd(l)).body : void 0),
      ie = (o = m == null ? void 0 : m.root) != null ? o : q5,
      se = (i = m == null ? void 0 : m.paper) != null ? i : Kx,
      q = fi({
        elementType: se,
        externalSlotProps: b({}, G, {
          style: F ? G.style : b({}, G.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: v, ref: W },
        ownerState: K,
        className: ue(H.paper, G == null ? void 0 : G.className),
      }),
      xe = fi({
        elementType: ie,
        externalSlotProps: (x == null ? void 0 : x.root) || {},
        externalForwardedProps: j,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: U,
          open: g,
        },
        ownerState: K,
        className: ue(H.root, y),
      }),
      { slotProps: de } = xe,
      le = re(xe, K5);
    return w.jsx(
      ie,
      b({}, le, !Hl(ie) && { slotProps: de, disableScrollLock: I }, {
        children: w.jsx(
          E,
          b({ appear: !0, in: g, onEntering: O, onExited: M, timeout: Z }, A, {
            children: w.jsx(se, b({}, q, { children: f })),
          })
        ),
      })
    );
  });
function X5(e) {
  return Re("MuiMenu", e);
}
Ce("MuiMenu", ["root", "paper", "list"]);
const Y5 = ["onEntering"],
  Z5 = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  J5 = { vertical: "top", horizontal: "right" },
  eB = { vertical: "top", horizontal: "left" },
  tB = (e) => {
    const { classes: t } = e;
    return _e({ root: ["root"], paper: ["paper"], list: ["list"] }, X5, t);
  },
  nB = ne(Q5, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  rB = ne(Kx, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  oB = ne(U5, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  iB = S.forwardRef(function (t, n) {
    var r, o;
    const i = ke({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: d,
        open: f,
        PaperProps: y = {},
        PopoverClasses: h,
        transitionDuration: v = "auto",
        TransitionProps: { onEntering: R } = {},
        variant: g = "selectedMenu",
        slots: p = {},
        slotProps: m = {},
      } = i,
      x = re(i.TransitionProps, Y5),
      C = re(i, Z5),
      E = _L(),
      _ = b({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: R,
        PaperProps: y,
        transitionDuration: v,
        TransitionProps: x,
        variant: g,
      }),
      N = tB(_),
      I = s && !u && f,
      A = S.useRef(null),
      j = ($, V) => {
        A.current &&
          A.current.adjustStyleForScrollbar($, {
            direction: E ? "rtl" : "ltr",
          }),
          R && R($, V);
      },
      G = ($) => {
        $.key === "Tab" && ($.preventDefault(), d && d($, "tabKeyDown"));
      };
    let D = -1;
    S.Children.map(a, ($, V) => {
      S.isValidElement($) &&
        ($.props.disabled ||
          (((g === "selectedMenu" && $.props.selected) || D === -1) &&
            (D = V)));
    });
    const W = (r = p.paper) != null ? r : rB,
      K = (o = m.paper) != null ? o : y,
      H = fi({
        elementType: p.root,
        externalSlotProps: m.root,
        ownerState: _,
        className: [N.root, l],
      }),
      Q = fi({
        elementType: W,
        externalSlotProps: K,
        ownerState: _,
        className: N.paper,
      });
    return w.jsx(
      nB,
      b(
        {
          onClose: d,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: E ? "right" : "left",
          },
          transformOrigin: E ? J5 : eB,
          slots: { paper: W, root: p.root },
          slotProps: { root: H, paper: Q },
          open: f,
          ref: n,
          transitionDuration: v,
          TransitionProps: b({ onEntering: j }, x),
          ownerState: _,
        },
        C,
        {
          classes: h,
          children: w.jsx(
            oB,
            b(
              {
                onKeyDown: G,
                actions: A,
                autoFocus: s && (D === -1 || u),
                autoFocusItem: I,
                variant: g,
              },
              c,
              { className: ue(N.list, c.className), children: a }
            )
          ),
        }
      )
    );
  });
function sB(e) {
  return Re("MuiNativeSelect", e);
}
const zh = Ce("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  aB = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  lB = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${ae(n)}`, i && "iconOpen", r && "disabled"],
      };
    return _e(a, sB, t);
  },
  Gx = ({ ownerState: e, theme: t }) =>
    b(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": b(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${zh.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  uB = ne("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${zh.multiple}`]: t.multiple },
      ];
    },
  })(Gx),
  qx = ({ ownerState: e, theme: t }) =>
    b(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${zh.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  cB = ne("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ae(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(qx),
  dB = S.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: s,
        inputRef: a,
        variant: l = "standard",
      } = t,
      u = re(t, aB),
      c = b({}, t, { disabled: o, variant: l, error: i }),
      d = lB(c);
    return w.jsxs(S.Fragment, {
      children: [
        w.jsx(
          uB,
          b(
            {
              ownerState: c,
              className: ue(d.select, r),
              disabled: o,
              ref: a || n,
            },
            u
          )
        ),
        t.multiple
          ? null
          : w.jsx(cB, { as: s, ownerState: c, className: d.icon }),
      ],
    });
  });
var Pv;
const fB = ["children", "classes", "className", "label", "notched"],
  pB = ne("fieldset", { shouldForwardProp: rn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  hB = ne("legend", { shouldForwardProp: rn })(({ ownerState: e, theme: t }) =>
    b(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        b(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function mB(e) {
  const { className: t, label: n, notched: r } = e,
    o = re(e, fB),
    i = n != null && n !== "",
    s = b({}, e, { notched: r, withLabel: i });
  return w.jsx(
    pB,
    b({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: w.jsx(hB, {
        ownerState: s,
        children: i
          ? w.jsx("span", { children: n })
          : Pv ||
            (Pv = w.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const gB = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  vB = (e) => {
    const { classes: t } = e,
      r = _e(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        qO,
        t
      );
    return b({}, t, r);
  },
  yB = ne(wc, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: xc,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return b(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${sr.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${sr.focused} .${sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${sr.error} .${sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${sr.disabled} .${sr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        b(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  SB = ne(mB, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  xB = ne(Rc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: bc,
  })(({ theme: e, ownerState: t }) =>
    b(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  jh = S.forwardRef(function (t, n) {
    var r, o, i, s, a;
    const l = ke({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: d = "input",
        label: f,
        multiline: y = !1,
        notched: h,
        slots: v = {},
        type: R = "text",
      } = l,
      g = re(l, gB),
      p = vB(l),
      m = Or(),
      x = yo({
        props: l,
        muiFormControl: m,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      C = b({}, l, {
        color: x.color || "primary",
        disabled: x.disabled,
        error: x.error,
        focused: x.focused,
        formControl: m,
        fullWidth: c,
        hiddenLabel: x.hiddenLabel,
        multiline: y,
        size: x.size,
        type: R,
      }),
      E = (r = (o = v.root) != null ? o : u.Root) != null ? r : yB,
      _ = (i = (s = v.input) != null ? s : u.Input) != null ? i : xB;
    return w.jsx(
      Fh,
      b(
        {
          slots: { root: E, input: _ },
          renderSuffix: (N) =>
            w.jsx(SB, {
              ownerState: C,
              className: p.notchedOutline,
              label:
                f != null && f !== "" && x.required
                  ? a || (a = w.jsxs(S.Fragment, { children: [f, " ", "*"] }))
                  : f,
              notched:
                typeof h < "u"
                  ? h
                  : !!(N.startAdornment || N.filled || N.focused),
            }),
          fullWidth: c,
          inputComponent: d,
          multiline: y,
          ref: n,
          type: R,
        },
        g,
        { classes: b({}, p, { notchedOutline: null }) }
      )
    );
  });
jh.muiName = "Input";
function bB(e) {
  return Re("MuiSelect", e);
}
const Zi = Ce("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var Nv;
const wB = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  RB = ne("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Zi.select}`]: t.select },
        { [`&.${Zi.select}`]: t[n.variant] },
        { [`&.${Zi.error}`]: t.error },
        { [`&.${Zi.multiple}`]: t.multiple },
      ];
    },
  })(Gx, {
    [`&.${Zi.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  CB = ne("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ae(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(qx),
  _B = ne("input", {
    shouldForwardProp: (e) => Lx(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function $v(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function EB(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const kB = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: s,
      } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${ae(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return _e(a, bB, t);
  },
  TB = S.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: s,
        autoWidth: a,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: d,
        disabled: f,
        displayEmpty: y,
        error: h = !1,
        IconComponent: v,
        inputRef: R,
        labelId: g,
        MenuProps: p = {},
        multiple: m,
        name: x,
        onBlur: C,
        onChange: E,
        onClose: _,
        onFocus: N,
        onOpen: I,
        open: A,
        readOnly: j,
        renderValue: G,
        SelectDisplayProps: D = {},
        tabIndex: W,
        value: K,
        variant: H = "standard",
      } = t,
      Q = re(t, wB),
      [$, V] = Bf({ controlled: K, default: d, name: "Select" }),
      [F, J] = Bf({ controlled: A, default: c, name: "Select" }),
      k = S.useRef(null),
      O = S.useRef(null),
      [M, Z] = S.useState(null),
      { current: U } = S.useRef(A != null),
      [ie, se] = S.useState(),
      q = $t(n, R),
      xe = S.useCallback((ce) => {
        (O.current = ce), ce && Z(ce);
      }, []),
      de = M == null ? void 0 : M.parentNode;
    S.useImperativeHandle(
      q,
      () => ({
        focus: () => {
          O.current.focus();
        },
        node: k.current,
        value: $,
      }),
      [$]
    ),
      S.useEffect(() => {
        c && F && M && !U && (se(a ? null : de.clientWidth), O.current.focus());
      }, [M, a]),
      S.useEffect(() => {
        s && O.current.focus();
      }, [s]),
      S.useEffect(() => {
        if (!g) return;
        const ce = Zt(O.current).getElementById(g);
        if (ce) {
          const Be = () => {
            getSelection().isCollapsed && O.current.focus();
          };
          return (
            ce.addEventListener("click", Be),
            () => {
              ce.removeEventListener("click", Be);
            }
          );
        }
      }, [g]);
    const le = (ce, Be) => {
        ce ? I && I(Be) : _ && _(Be),
          U || (se(a ? null : de.clientWidth), J(ce));
      },
      oe = (ce) => {
        ce.button === 0 && (ce.preventDefault(), O.current.focus(), le(!0, ce));
      },
      ye = (ce) => {
        le(!1, ce);
      },
      Pe = S.Children.toArray(l),
      rt = (ce) => {
        const Be = Pe.find((P) => P.props.value === ce.target.value);
        Be !== void 0 && (V(Be.props.value), E && E(ce, Be));
      },
      ze = (ce) => (Be) => {
        let P;
        if (Be.currentTarget.hasAttribute("tabindex")) {
          if (m) {
            P = Array.isArray($) ? $.slice() : [];
            const T = $.indexOf(ce.props.value);
            T === -1 ? P.push(ce.props.value) : P.splice(T, 1);
          } else P = ce.props.value;
          if (
            (ce.props.onClick && ce.props.onClick(Be), $ !== P && (V(P), E))
          ) {
            const T = Be.nativeEvent || Be,
              B = new T.constructor(T.type, T);
            Object.defineProperty(B, "target", {
              writable: !0,
              value: { value: P, name: x },
            }),
              E(B, ce);
          }
          m || le(!1, Be);
        }
      },
      kt = (ce) => {
        j ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(ce.key) !== -1 &&
            (ce.preventDefault(), le(!0, ce)));
      },
      Kt = M !== null && F,
      xt = (ce) => {
        !Kt &&
          C &&
          (Object.defineProperty(ce, "target", {
            writable: !0,
            value: { value: $, name: x },
          }),
          C(ce));
      };
    delete Q["aria-invalid"];
    let je, on;
    const bt = [];
    let Oe = !1;
    (Ql({ value: $ }) || y) && (G ? (je = G($)) : (Oe = !0));
    const Mt = Pe.map((ce) => {
      if (!S.isValidElement(ce)) return null;
      let Be;
      if (m) {
        if (!Array.isArray($)) throw new Error(ao(2));
        (Be = $.some((P) => $v(P, ce.props.value))),
          Be && Oe && bt.push(ce.props.children);
      } else (Be = $v($, ce.props.value)), Be && Oe && (on = ce.props.children);
      return S.cloneElement(ce, {
        "aria-selected": Be ? "true" : "false",
        onClick: ze(ce),
        onKeyUp: (P) => {
          P.key === " " && P.preventDefault(),
            ce.props.onKeyUp && ce.props.onKeyUp(P);
        },
        role: "option",
        selected: Be,
        value: void 0,
        "data-value": ce.props.value,
      });
    });
    Oe &&
      (m
        ? bt.length === 0
          ? (je = null)
          : (je = bt.reduce(
              (ce, Be, P) => (
                ce.push(Be), P < bt.length - 1 && ce.push(", "), ce
              ),
              []
            ))
        : (je = on));
    let Mn = ie;
    !a && U && M && (Mn = de.clientWidth);
    let bn;
    typeof W < "u" ? (bn = W) : (bn = f ? null : 0);
    const Ie = D.id || (x ? `mui-component-select-${x}` : void 0),
      fe = b({}, t, { variant: H, value: $, open: Kt, error: h }),
      wn = kB(fe),
      Fr = b({}, p.PaperProps, (r = p.slotProps) == null ? void 0 : r.paper),
      or = yx();
    return w.jsxs(S.Fragment, {
      children: [
        w.jsx(
          RB,
          b(
            {
              ref: xe,
              tabIndex: bn,
              role: "combobox",
              "aria-controls": or,
              "aria-disabled": f ? "true" : void 0,
              "aria-expanded": Kt ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [g, Ie].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: kt,
              onMouseDown: f || j ? null : oe,
              onBlur: xt,
              onFocus: N,
            },
            D,
            {
              ownerState: fe,
              className: ue(D.className, wn.select, u),
              id: Ie,
              children: EB(je)
                ? Nv ||
                  (Nv = w.jsx("span", {
                    className: "notranslate",
                    children: "​",
                  }))
                : je,
            }
          )
        ),
        w.jsx(
          _B,
          b(
            {
              "aria-invalid": h,
              value: Array.isArray($) ? $.join(",") : $,
              name: x,
              ref: k,
              "aria-hidden": !0,
              onChange: rt,
              tabIndex: -1,
              disabled: f,
              className: wn.nativeInput,
              autoFocus: s,
              ownerState: fe,
            },
            Q
          )
        ),
        w.jsx(CB, { as: v, className: wn.icon, ownerState: fe }),
        w.jsx(
          iB,
          b(
            {
              id: `menu-${x || ""}`,
              anchorEl: de,
              open: Kt,
              onClose: ye,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            p,
            {
              MenuListProps: b(
                {
                  "aria-labelledby": g,
                  role: "listbox",
                  "aria-multiselectable": m ? "true" : void 0,
                  disableListWrap: !0,
                  id: or,
                },
                p.MenuListProps
              ),
              slotProps: b({}, p.slotProps, {
                paper: b({}, Fr, {
                  style: b({ minWidth: Mn }, Fr != null ? Fr.style : null),
                }),
              }),
              children: Mt,
            }
          )
        ),
      ],
    });
  }),
  PB = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  NB = ["root"],
  $B = (e) => {
    const { classes: t } = e;
    return t;
  },
  Uh = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => rn(e) && e !== "variant",
    slot: "Root",
  },
  AB = ne(Dh, Uh)(""),
  LB = ne(jh, Uh)(""),
  MB = ne(Bh, Uh)(""),
  Qx = S.forwardRef(function (t, n) {
    const r = ke({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = XO,
        id: d,
        input: f,
        inputProps: y,
        label: h,
        labelId: v,
        MenuProps: R,
        multiple: g = !1,
        native: p = !1,
        onClose: m,
        onOpen: x,
        open: C,
        renderValue: E,
        SelectDisplayProps: _,
        variant: N = "outlined",
      } = r,
      I = re(r, PB),
      A = p ? dB : TB,
      j = Or(),
      G = yo({ props: r, muiFormControl: j, states: ["variant", "error"] }),
      D = G.variant || N,
      W = b({}, r, { variant: D, classes: s }),
      K = $B(W),
      H = re(K, NB),
      Q =
        f ||
        {
          standard: w.jsx(AB, { ownerState: W }),
          outlined: w.jsx(LB, { label: h, ownerState: W }),
          filled: w.jsx(MB, { ownerState: W }),
        }[D],
      $ = $t(n, Q.ref);
    return w.jsx(S.Fragment, {
      children: S.cloneElement(
        Q,
        b(
          {
            inputComponent: A,
            inputProps: b(
              {
                children: i,
                error: G.error,
                IconComponent: c,
                variant: D,
                type: void 0,
                multiple: g,
              },
              p
                ? { id: d }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: v,
                    MenuProps: R,
                    onClose: m,
                    onOpen: x,
                    open: C,
                    renderValue: E,
                    SelectDisplayProps: b({ id: d }, _),
                  },
              y,
              { classes: y ? Nt(H, y.classes) : H },
              f ? f.props.inputProps : {}
            ),
          },
          ((g && p) || u) && D === "outlined" ? { notched: !0 } : {},
          { ref: $, className: ue(Q.props.className, a, K.root) },
          !f && { variant: D },
          I
        )
      ),
    });
  });
Qx.muiName = "Select";
function OB(e) {
  return Re("MuiToolbar", e);
}
Ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const IB = ["className", "component", "disableGutters", "variant"],
  FB = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return _e({ root: ["root", !n && "gutters", r] }, OB, t);
  },
  BB = ne("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      b(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  DB = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular",
      } = r,
      l = re(r, IB),
      u = b({}, r, { component: i, disableGutters: s, variant: a }),
      c = FB(u);
    return w.jsx(
      BB,
      b({ as: i, className: ue(c.root, o), ref: n, ownerState: u }, l)
    );
  });
function zB(e) {
  return Re("MuiTextField", e);
}
Ce("MuiTextField", ["root"]);
const jB = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  UB = { standard: Dh, filled: Bh, outlined: jh },
  VB = (e) => {
    const { classes: t } = e;
    return _e({ root: ["root"] }, zB, t);
  },
  WB = ne(zF, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  pn = S.forwardRef(function (t, n) {
    const r = ke({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: c = !1,
        error: d = !1,
        FormHelperTextProps: f,
        fullWidth: y = !1,
        helperText: h,
        id: v,
        InputLabelProps: R,
        inputProps: g,
        InputProps: p,
        inputRef: m,
        label: x,
        maxRows: C,
        minRows: E,
        multiline: _ = !1,
        name: N,
        onBlur: I,
        onChange: A,
        onFocus: j,
        placeholder: G,
        required: D = !1,
        rows: W,
        select: K = !1,
        SelectProps: H,
        type: Q,
        value: $,
        variant: V = "outlined",
      } = r,
      F = re(r, jB),
      J = b({}, r, {
        autoFocus: i,
        color: l,
        disabled: c,
        error: d,
        fullWidth: y,
        multiline: _,
        required: D,
        select: K,
        variant: V,
      }),
      k = VB(J),
      O = {};
    V === "outlined" &&
      (R && typeof R.shrink < "u" && (O.notched = R.shrink), (O.label = x)),
      K &&
        ((!H || !H.native) && (O.id = void 0),
        (O["aria-describedby"] = void 0));
    const M = yx(v),
      Z = h && M ? `${M}-helper-text` : void 0,
      U = x && M ? `${M}-label` : void 0,
      ie = UB[V],
      se = w.jsx(
        ie,
        b(
          {
            "aria-describedby": Z,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: y,
            multiline: _,
            name: N,
            rows: W,
            maxRows: C,
            minRows: E,
            type: Q,
            value: $,
            id: M,
            inputRef: m,
            onBlur: I,
            onChange: A,
            onFocus: j,
            placeholder: G,
            inputProps: g,
          },
          O,
          p
        )
      );
    return w.jsxs(
      WB,
      b(
        {
          className: ue(k.root, a),
          disabled: c,
          error: d,
          fullWidth: y,
          ref: n,
          required: D,
          color: l,
          variant: V,
          ownerState: J,
        },
        F,
        {
          children: [
            x != null &&
              x !== "" &&
              w.jsx(k5, b({ htmlFor: M, id: U }, R, { children: x })),
            K
              ? w.jsx(
                  Qx,
                  b(
                    {
                      "aria-describedby": Z,
                      id: M,
                      labelId: U,
                      value: $,
                      input: se,
                    },
                    H,
                    { children: s }
                  )
                )
              : se,
            h && w.jsx(YF, b({ id: Z }, f, { children: h })),
          ],
        }
      )
    );
  });
function Xx(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: HB } = Object.prototype,
  { getPrototypeOf: Vh } = Object,
  _c = ((e) => (t) => {
    const n = HB.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ln = (e) => ((e = e.toLowerCase()), (t) => _c(t) === e),
  Ec = (e) => (t) => typeof t === e,
  { isArray: Pi } = Array,
  Qs = Ec("undefined");
function KB(e) {
  return (
    e !== null &&
    !Qs(e) &&
    e.constructor !== null &&
    !Qs(e.constructor) &&
    mn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Yx = Ln("ArrayBuffer");
function GB(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Yx(e.buffer)),
    t
  );
}
const qB = Ec("string"),
  mn = Ec("function"),
  Zx = Ec("number"),
  kc = (e) => e !== null && typeof e == "object",
  QB = (e) => e === !0 || e === !1,
  dl = (e) => {
    if (_c(e) !== "object") return !1;
    const t = Vh(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  XB = Ln("Date"),
  YB = Ln("File"),
  ZB = Ln("Blob"),
  JB = Ln("FileList"),
  e4 = (e) => kc(e) && mn(e.pipe),
  t4 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (mn(e.append) &&
          ((t = _c(e)) === "formdata" ||
            (t === "object" &&
              mn(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  n4 = Ln("URLSearchParams"),
  [r4, o4, i4, s4] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ln
  ),
  a4 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ma(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Pi(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Jx(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const eb =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  tb = (e) => !Qs(e) && e !== eb;
function Kf() {
  const { caseless: e } = (tb(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Jx(t, o)) || o;
      dl(t[i]) && dl(r)
        ? (t[i] = Kf(t[i], r))
        : dl(r)
        ? (t[i] = Kf({}, r))
        : Pi(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ma(arguments[r], n);
  return t;
}
const l4 = (e, t, n, { allOwnKeys: r } = {}) => (
    ma(
      t,
      (o, i) => {
        n && mn(o) ? (e[i] = Xx(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  u4 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  c4 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  d4 = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Vh(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  f4 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  p4 = (e) => {
    if (!e) return null;
    if (Pi(e)) return e;
    let t = e.length;
    if (!Zx(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  h4 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Vh(Uint8Array)),
  m4 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  g4 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  v4 = Ln("HTMLFormElement"),
  y4 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Av = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  S4 = Ln("RegExp"),
  nb = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    ma(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  x4 = (e) => {
    nb(e, (t, n) => {
      if (mn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (mn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  b4 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Pi(e) ? r(e) : r(String(e).split(t)), n;
  },
  w4 = () => {},
  R4 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Cd = "abcdefghijklmnopqrstuvwxyz",
  Lv = "0123456789",
  rb = { DIGIT: Lv, ALPHA: Cd, ALPHA_DIGIT: Cd + Cd.toUpperCase() + Lv },
  C4 = (e = 16, t = rb.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _4(e) {
  return !!(
    e &&
    mn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const E4 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (kc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Pi(r) ? [] : {};
            return (
              ma(r, (s, a) => {
                const l = n(s, o + 1);
                !Qs(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  k4 = Ln("AsyncFunction"),
  T4 = (e) => e && (kc(e) || mn(e)) && mn(e.then) && mn(e.catch),
  L = {
    isArray: Pi,
    isArrayBuffer: Yx,
    isBuffer: KB,
    isFormData: t4,
    isArrayBufferView: GB,
    isString: qB,
    isNumber: Zx,
    isBoolean: QB,
    isObject: kc,
    isPlainObject: dl,
    isReadableStream: r4,
    isRequest: o4,
    isResponse: i4,
    isHeaders: s4,
    isUndefined: Qs,
    isDate: XB,
    isFile: YB,
    isBlob: ZB,
    isRegExp: S4,
    isFunction: mn,
    isStream: e4,
    isURLSearchParams: n4,
    isTypedArray: h4,
    isFileList: JB,
    forEach: ma,
    merge: Kf,
    extend: l4,
    trim: a4,
    stripBOM: u4,
    inherits: c4,
    toFlatObject: d4,
    kindOf: _c,
    kindOfTest: Ln,
    endsWith: f4,
    toArray: p4,
    forEachEntry: m4,
    matchAll: g4,
    isHTMLForm: v4,
    hasOwnProperty: Av,
    hasOwnProp: Av,
    reduceDescriptors: nb,
    freezeMethods: x4,
    toObjectSet: b4,
    toCamelCase: y4,
    noop: w4,
    toFiniteNumber: R4,
    findKey: Jx,
    global: eb,
    isContextDefined: tb,
    ALPHABET: rb,
    generateString: C4,
    isSpecCompliantForm: _4,
    toJSONObject: E4,
    isAsyncFn: k4,
    isThenable: T4,
  };
function ge(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
L.inherits(ge, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: L.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const ob = ge.prototype,
  ib = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ib[e] = { value: e };
});
Object.defineProperties(ge, ib);
Object.defineProperty(ob, "isAxiosError", { value: !0 });
ge.from = (e, t, n, r, o, i) => {
  const s = Object.create(ob);
  return (
    L.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    ge.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const P4 = null;
function Gf(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function sb(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mv(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = sb(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function N4(e) {
  return L.isArray(e) && !e.some(Gf);
}
const $4 = L.toFlatObject(L, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Tc(e, t, n) {
  if (!L.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = L.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, R) {
        return !L.isUndefined(R[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && L.isSpecCompliantForm(t);
  if (!L.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (L.isDate(h)) return h.toISOString();
    if (!l && L.isBlob(h))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(h) || L.isTypedArray(h)
      ? l && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function c(h, v, R) {
    let g = h;
    if (h && !R && typeof h == "object") {
      if (L.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (L.isArray(h) && N4(h)) ||
        ((L.isFileList(h) || L.endsWith(v, "[]")) && (g = L.toArray(h)))
      )
        return (
          (v = sb(v)),
          g.forEach(function (m, x) {
            !(L.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? Mv([v], x, i) : s === null ? v : v + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return Gf(h) ? !0 : (t.append(Mv(R, v, i), u(h)), !1);
  }
  const d = [],
    f = Object.assign($4, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Gf,
    });
  function y(h, v) {
    if (!L.isUndefined(h)) {
      if (d.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(h),
        L.forEach(h, function (g, p) {
          (!(L.isUndefined(g) || g === null) &&
            o.call(t, g, L.isString(p) ? p.trim() : p, v, f)) === !0 &&
            y(g, v ? v.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!L.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Ov(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Wh(e, t) {
  (this._pairs = []), e && Tc(e, this, t);
}
const ab = Wh.prototype;
ab.append = function (t, n) {
  this._pairs.push([t, n]);
};
ab.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ov);
      }
    : Ov;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function A4(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function lb(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || A4,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = L.isURLSearchParams(t) ? t.toString() : new Wh(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Iv {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    L.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ub = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  L4 = typeof URLSearchParams < "u" ? URLSearchParams : Wh,
  M4 = typeof FormData < "u" ? FormData : null,
  O4 = typeof Blob < "u" ? Blob : null,
  I4 = {
    isBrowser: !0,
    classes: { URLSearchParams: L4, FormData: M4, Blob: O4 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Hh = typeof window < "u" && typeof document < "u",
  F4 = ((e) => Hh && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  B4 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  D4 = (Hh && window.location.href) || "http://localhost",
  z4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Hh,
        hasStandardBrowserEnv: F4,
        hasStandardBrowserWebWorkerEnv: B4,
        origin: D4,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $n = { ...z4, ...I4 };
function j4(e, t) {
  return Tc(
    e,
    new $n.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return $n.isNode && L.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function U4(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function V4(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function cb(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && L.isArray(o) ? o.length : s),
      l
        ? (L.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !L.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && L.isArray(o[s]) && (o[s] = V4(o[s])),
          !a)
    );
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const n = {};
    return (
      L.forEachEntry(e, (r, o) => {
        t(U4(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function W4(e, t, n) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ga = {
  transitional: ub,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = L.isObject(t);
      if ((i && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t)))
        return o ? JSON.stringify(cb(t)) : t;
      if (
        L.isArrayBuffer(t) ||
        L.isBuffer(t) ||
        L.isStream(t) ||
        L.isFile(t) ||
        L.isBlob(t) ||
        L.isReadableStream(t)
      )
        return t;
      if (L.isArrayBufferView(t)) return t.buffer;
      if (L.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return j4(t, this.formSerializer).toString();
        if ((a = L.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Tc(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), W4(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ga.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (L.isResponse(t) || L.isReadableStream(t)) return t;
      if (t && L.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? ge.from(a, ge.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: $n.classes.FormData, Blob: $n.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ga.headers[e] = {};
});
const H4 = L.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  K4 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && H4[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Fv = Symbol("internals");
function Ji(e) {
  return e && String(e).trim().toLowerCase();
}
function fl(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(fl) : String(e);
}
function G4(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const q4 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _d(e, t, n, r, o) {
  if (L.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!L.isString(t))) {
    if (L.isString(r)) return t.indexOf(r) !== -1;
    if (L.isRegExp(r)) return r.test(t);
  }
}
function Q4(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function X4(e, t) {
  const n = L.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class Ut {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = Ji(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = L.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = fl(a));
    }
    const s = (a, l) => L.forEach(a, (u, c) => i(u, c, l));
    if (L.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (L.isString(t) && (t = t.trim()) && !q4(t)) s(K4(t), n);
    else if (L.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ji(t)), t)) {
      const r = L.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return G4(o);
        if (L.isFunction(n)) return n.call(this, o, r);
        if (L.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ji(t)), t)) {
      const r = L.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || _d(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = Ji(s)), s)) {
        const a = L.findKey(r, s);
        a && (!n || _d(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return L.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || _d(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      L.forEach(this, (o, i) => {
        const s = L.findKey(r, i);
        if (s) {
          (n[s] = fl(o)), delete n[i];
          return;
        }
        const a = t ? Q4(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = fl(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      L.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && L.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Fv] = this[Fv] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = Ji(s);
      r[a] || (X4(o, s), (r[a] = !0));
    }
    return L.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Ut.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
L.reduceDescriptors(Ut.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
L.freezeMethods(Ut);
function Ed(e, t) {
  const n = this || ga,
    r = t || n,
    o = Ut.from(r.headers);
  let i = r.data;
  return (
    L.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function db(e) {
  return !!(e && e.__CANCEL__);
}
function Ni(e, t, n) {
  ge.call(this, e ?? "canceled", ge.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
L.inherits(Ni, ge, { __CANCEL__: !0 });
function fb(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ge(
          "Request failed with status code " + n.status,
          [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function Y4(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Z4(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const y = c && u - c;
      return y ? Math.round((f * 1e3) / y) : void 0;
    }
  );
}
function J4(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function () {
    const s = this === !0,
      a = Date.now();
    if (s || a - n > r)
      return (
        o && (clearTimeout(o), (o = null)), (n = a), e.apply(null, arguments)
      );
    o ||
      (o = setTimeout(
        () => ((o = null), (n = Date.now()), e.apply(null, arguments)),
        r - (a - n)
      ));
  };
}
const Yl = (e, t, n = 3) => {
    let r = 0;
    const o = Z4(50, 250);
    return J4((i) => {
      const s = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = s - r,
        u = o(l),
        c = s <= a;
      r = s;
      const d = {
        loaded: s,
        total: a,
        progress: a ? s / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && c ? (a - s) / u : void 0,
        event: i,
        lengthComputable: a != null,
      };
      (d[t ? "download" : "upload"] = !0), e(d);
    }, n);
  },
  e3 = $n.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function o(i) {
          let s = i;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = o(window.location.href)),
          function (s) {
            const a = L.isString(s) ? o(s) : s;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  t3 = $n.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i) {
          const s = [e + "=" + encodeURIComponent(t)];
          L.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            L.isString(r) && s.push("path=" + r),
            L.isString(o) && s.push("domain=" + o),
            i === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function n3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function r3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pb(e, t) {
  return e && !n3(t) ? r3(e, t) : t;
}
const Bv = (e) => (e instanceof Ut ? { ...e } : e);
function fo(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return L.isPlainObject(u) && L.isPlainObject(c)
      ? L.merge.call({ caseless: d }, u, c)
      : L.isPlainObject(c)
      ? L.merge({}, c)
      : L.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (L.isUndefined(c)) {
      if (!L.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!L.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (L.isUndefined(c)) {
      if (!L.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(Bv(u), Bv(c), !0),
  };
  return (
    L.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        f = d(e[c], t[c], c);
      (L.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const hb = (e) => {
    const t = fo({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: a,
    } = t;
    (t.headers = s = Ut.from(s)),
      (t.url = lb(pb(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (L.isFormData(n)) {
      if ($n.hasStandardBrowserEnv || $n.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((l = s.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      $n.hasStandardBrowserEnv &&
      (r && L.isFunction(r) && (r = r(t)), r || (r !== !1 && e3(t.url)))
    ) {
      const u = o && i && t3.read(i);
      u && s.set(o, u);
    }
    return t;
  },
  o3 = typeof XMLHttpRequest < "u",
  i3 =
    o3 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = hb(e);
        let i = o.data;
        const s = Ut.from(o.headers).normalize();
        let { responseType: a } = o,
          l;
        function u() {
          o.cancelToken && o.cancelToken.unsubscribe(l),
            o.signal && o.signal.removeEventListener("abort", l);
        }
        let c = new XMLHttpRequest();
        c.open(o.method.toUpperCase(), o.url, !0), (c.timeout = o.timeout);
        function d() {
          if (!c) return;
          const y = Ut.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            v = {
              data:
                !a || a === "text" || a === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          fb(
            function (g) {
              n(g), u();
            },
            function (g) {
              r(g), u();
            },
            v
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = d)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(d);
            }),
          (c.onabort = function () {
            c &&
              (r(new ge("Request aborted", ge.ECONNABORTED, o, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new ge("Network Error", ge.ERR_NETWORK, o, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let h = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const v = o.transitional || ub;
            o.timeoutErrorMessage && (h = o.timeoutErrorMessage),
              r(
                new ge(
                  h,
                  v.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
                  o,
                  c
                )
              ),
              (c = null);
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            L.forEach(s.toJSON(), function (h, v) {
              c.setRequestHeader(v, h);
            }),
          L.isUndefined(o.withCredentials) ||
            (c.withCredentials = !!o.withCredentials),
          a && a !== "json" && (c.responseType = o.responseType),
          typeof o.onDownloadProgress == "function" &&
            c.addEventListener("progress", Yl(o.onDownloadProgress, !0)),
          typeof o.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Yl(o.onUploadProgress)),
          (o.cancelToken || o.signal) &&
            ((l = (y) => {
              c &&
                (r(!y || y.type ? new Ni(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(l),
            o.signal &&
              (o.signal.aborted ? l() : o.signal.addEventListener("abort", l)));
        const f = Y4(o.url);
        if (f && $n.protocols.indexOf(f) === -1) {
          r(new ge("Unsupported protocol " + f + ":", ge.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  s3 = (e, t) => {
    let n = new AbortController(),
      r;
    const o = function (l) {
      if (!r) {
        (r = !0), s();
        const u = l instanceof Error ? l : this.reason;
        n.abort(
          u instanceof ge ? u : new Ni(u instanceof Error ? u.message : u)
        );
      }
    };
    let i =
      t &&
      setTimeout(() => {
        o(new ge(`timeout ${t} of ms exceeded`, ge.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", o)
              : l.unsubscribe(o));
        }),
        (e = null));
    };
    e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", o));
    const { signal: a } = n;
    return (
      (a.unsubscribe = s),
      [
        a,
        () => {
          i && clearTimeout(i), (i = null);
        },
      ]
    );
  },
  a3 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) (o = r + t), yield e.slice(r, o), (r = o);
  },
  l3 = async function* (e, t, n) {
    for await (const r of e)
      yield* a3(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Dv = (e, t, n, r, o) => {
    const i = l3(e, t, o);
    let s = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(a) {
          const { done: l, value: u } = await i.next();
          if (l) {
            a.close(), r();
            return;
          }
          let c = u.byteLength;
          n && n((s += c)), a.enqueue(new Uint8Array(u));
        },
        cancel(a) {
          return r(a), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  zv = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Pc =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  mb = Pc && typeof ReadableStream == "function",
  qf =
    Pc &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  u3 =
    mb &&
    (() => {
      let e = !1;
      const t = new Request($n.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  jv = 64 * 1024,
  Qf =
    mb &&
    !!(() => {
      try {
        return L.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Zl = { stream: Qf && ((e) => e.body) };
Pc &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Zl[t] &&
        (Zl[t] = L.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new ge(
                `Response type '${t}' is not supported`,
                ge.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const c3 = async (e) => {
    if (e == null) return 0;
    if (L.isBlob(e)) return e.size;
    if (L.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (L.isArrayBufferView(e)) return e.byteLength;
    if ((L.isURLSearchParams(e) && (e = e + ""), L.isString(e)))
      return (await qf(e)).byteLength;
  },
  d3 = async (e, t) => {
    const n = L.toFiniteNumber(e.getContentLength());
    return n ?? c3(t);
  },
  f3 =
    Pc &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: o,
        cancelToken: i,
        timeout: s,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = hb(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [y, h] = o || i || s ? s3([o, i], s) : [],
        v,
        R;
      const g = () => {
        !v &&
          setTimeout(() => {
            y && y.unsubscribe();
          }),
          (v = !0);
      };
      let p;
      try {
        if (
          l &&
          u3 &&
          n !== "get" &&
          n !== "head" &&
          (p = await d3(c, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            _;
          L.isFormData(r) &&
            (_ = E.headers.get("content-type")) &&
            c.setContentType(_),
            E.body && (r = Dv(E.body, jv, zv(p, Yl(l)), null, qf));
        }
        L.isString(d) || (d = d ? "cors" : "omit"),
          (R = new Request(t, {
            ...f,
            signal: y,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let m = await fetch(R);
        const x = Qf && (u === "stream" || u === "response");
        if (Qf && (a || x)) {
          const E = {};
          ["status", "statusText", "headers"].forEach((N) => {
            E[N] = m[N];
          });
          const _ = L.toFiniteNumber(m.headers.get("content-length"));
          m = new Response(
            Dv(m.body, jv, a && zv(_, Yl(a, !0)), x && g, qf),
            E
          );
        }
        u = u || "text";
        let C = await Zl[L.findKey(Zl, u) || "text"](m, e);
        return (
          !x && g(),
          h && h(),
          await new Promise((E, _) => {
            fb(E, _, {
              data: C,
              headers: Ut.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: R,
            });
          })
        );
      } catch (m) {
        throw (
          (g(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new ge("Network Error", ge.ERR_NETWORK, e, R), {
                cause: m.cause || m,
              })
            : ge.from(m, m && m.code, e, R))
        );
      }
    }),
  Xf = { http: P4, xhr: i3, fetch: f3 };
L.forEach(Xf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Uv = (e) => `- ${e}`,
  p3 = (e) => L.isFunction(e) || e === null || e === !1,
  gb = {
    getAdapter: (e) => {
      e = L.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let s;
        if (
          ((r = n),
          !p3(n) && ((r = Xf[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ge(`Unknown adapter '${s}'`);
        if (r) break;
        o[s || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? i.length > 1
            ? `since :
` +
              i.map(Uv).join(`
`)
            : " " + Uv(i[0])
          : "as no adapter specified";
        throw new ge(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Xf,
  };
function kd(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ni(null, e);
}
function Vv(e) {
  return (
    kd(e),
    (e.headers = Ut.from(e.headers)),
    (e.data = Ed.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    gb
      .getAdapter(e.adapter || ga.adapter)(e)
      .then(
        function (r) {
          return (
            kd(e),
            (r.data = Ed.call(e, e.transformResponse, r)),
            (r.headers = Ut.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            db(r) ||
              (kd(e),
              r &&
                r.response &&
                ((r.response.data = Ed.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ut.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const vb = "1.7.2",
  Kh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Kh[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Wv = {};
Kh.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      vb +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new ge(
        o(s, " has been removed" + (n ? " in " + n : "")),
        ge.ERR_DEPRECATED
      );
    return (
      n &&
        !Wv[s] &&
        ((Wv[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function h3(e, t, n) {
  if (typeof e != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new ge("option " + i + " must be " + l, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ge("Unknown option " + i, ge.ERR_BAD_OPTION);
  }
}
const Yf = { assertOptions: h3, validators: Kh },
  lr = Yf.validators;
class Jr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Iv(), response: new Iv() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace
          ? Error.captureStackTrace((o = {}))
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = fo(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Yf.assertOptions(
        r,
        {
          silentJSONParsing: lr.transitional(lr.boolean),
          forcedJSONParsing: lr.transitional(lr.boolean),
          clarifyTimeoutError: lr.transitional(lr.boolean),
        },
        !1
      ),
      o != null &&
        (L.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Yf.assertOptions(
              o,
              { encode: lr.function, serialize: lr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && L.merge(i.common, i[n.method]);
    i &&
      L.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (h) => {
          delete i[h];
        }
      ),
      (n.headers = Ut.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const h = [Vv.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, u),
          f = h.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(h[d++], h[d++]);
      return c;
    }
    f = a.length;
    let y = n;
    for (d = 0; d < f; ) {
      const h = a[d++],
        v = a[d++];
      try {
        y = h(y);
      } catch (R) {
        v.call(this, R);
        break;
      }
    }
    try {
      c = Vv.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = fo(this.defaults, t);
    const n = pb(t.baseURL, t.url);
    return lb(n, t.params, t.paramsSerializer);
  }
}
L.forEach(["delete", "get", "head", "options"], function (t) {
  Jr.prototype[t] = function (n, r) {
    return this.request(
      fo(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
L.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        fo(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Jr.prototype[t] = n()), (Jr.prototype[t + "Form"] = n(!0));
});
class Gh {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Ni(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Gh(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
function m3(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function g3(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const Zf = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Zf).forEach(([e, t]) => {
  Zf[t] = e;
});
function yb(e) {
  const t = new Jr(e),
    n = Xx(Jr.prototype.request, t);
  return (
    L.extend(n, Jr.prototype, t, { allOwnKeys: !0 }),
    L.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return yb(fo(e, o));
    }),
    n
  );
}
const Fe = yb(ga);
Fe.Axios = Jr;
Fe.CanceledError = Ni;
Fe.CancelToken = Gh;
Fe.isCancel = db;
Fe.VERSION = vb;
Fe.toFormData = Tc;
Fe.AxiosError = ge;
Fe.Cancel = Fe.CanceledError;
Fe.all = function (t) {
  return Promise.all(t);
};
Fe.spread = m3;
Fe.isAxiosError = g3;
Fe.mergeConfig = fo;
Fe.AxiosHeaders = Ut;
Fe.formToJSON = (e) => cb(L.isHTMLForm(e) ? new FormData(e) : e);
Fe.getAdapter = gb.getAdapter;
Fe.HttpStatusCode = Zf;
Fe.default = Fe;
const v3 = dh({ key: "authState", default: !1 }),
  qh = dh({ key: "coursesState", default: [] }),
  Sb = dh({ key: "userState", default: null }),
  $i = () => {
    const [e, t] = Us(v3),
      [n, r] = Us(Sb),
      o = ta();
    async function i() {
      const a = localStorage.getItem("token");
      if (a && a !== "null") {
        const u = (
          await Fe.get("http://localhost:3001/admin/me", {
            headers: { Authorization: "Bearer " + a },
          })
        ).data;
        u.username &&
          (t(!0),
          r({ username: u.username }),
          localStorage.setItem(
            "user",
            JSON.stringify({ username: u.username })
          ));
      }
    }
    S.useEffect(() => {
      const a = localStorage.getItem("user");
      if (a) {
        const l = JSON.parse(a);
        r(l), t(!0);
      } else i();
    }, []);
    const s = () => {
      localStorage.setItem("token", "null"),
        localStorage.removeItem("user"),
        t(!1),
        r(null),
        o(0);
    };
    return w.jsx(Ei, {
      sx: { flexGrow: 1 },
      children: w.jsx(LO, {
        position: "static",
        children: w.jsxs(DB, {
          variant: "dense",
          children: [
            w.jsx(nt, {
              variant: "h6",
              component: "div",
              onClick: () => o("/"),
              style: { cursor: "pointer" },
              children: "Courses",
            }),
            e
              ? w.jsxs("div", {
                  style: { display: "flex", marginLeft: "auto" },
                  children: [
                    w.jsxs(nt, {
                      variant: "subtitle1",
                      gutterBottom: !0,
                      style: { margin: "auto", padding: "auto" },
                      children: [
                        "Welcome! ",
                        w.jsx("b", {
                          children: n == null ? void 0 : n.username,
                        }),
                      ],
                    }),
                    w.jsx(Er, {
                      color: "error",
                      variant: "contained",
                      onClick: s,
                      children: "Logout",
                    }),
                  ],
                })
              : w.jsxs(Ir, {
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "10px",
                  },
                  children: [
                    w.jsx(Er, {
                      color: "success",
                      variant: "contained",
                      onClick: () => o("/login"),
                      style: { marginRight: "10px" },
                      children: "Login",
                    }),
                    w.jsx(Er, {
                      color: "success",
                      variant: "contained",
                      style: { marginRight: "10px" },
                      onClick: () => o("/register"),
                      children: "Register",
                    }),
                  ],
                }),
          ],
        }),
      }),
    });
  },
  y3 = () => {
    const e = ta(),
      [t, n] = S.useState(""),
      [r, o] = S.useState(""),
      [i, s] = S.useState(null),
      a = async (l) => {
        l.preventDefault();
        try {
          const u = await Fe.post("http://localhost:3001/admin/login", {
              username: t,
              password: r,
            }),
            { token: c } = u.data;
          c
            ? (localStorage.setItem("token", c), e("/add"))
            : s("Login failed. Please try again.");
        } catch (u) {
          if (Fe.isAxiosError(u) && u.response) {
            const c = u.response.data;
            c.error
              ? s(c.error)
              : c.message
              ? s(c.message)
              : s("An unexpected error occurred.");
          }
        }
      };
    return w.jsxs("div", {
      children: [
        w.jsx($i, {}),
        w.jsxs(Ir, {
          component: "main",
          maxWidth: "xs",
          style: { marginTop: "100px" },
          children: [
            w.jsx(nt, {
              variant: "h5",
              style: {
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              },
              children: "Login to admin dashboard",
            }),
            w.jsx(ki, {
              style: { width: "400px" },
              children: w.jsx(Ti, {
                children: w.jsxs(Ei, {
                  component: "form",
                  noValidate: !0,
                  sx: { mt: 1 },
                  children: [
                    i &&
                      w.jsx(nt, {
                        color: "error",
                        variant: "body2",
                        children: i,
                      }),
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      id: "email",
                      label: "Email Address",
                      name: "email",
                      onChange: (l) => n(l.target.value),
                      autoComplete: "email",
                      autoFocus: !0,
                    }),
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      name: "password",
                      label: "Password",
                      type: "password",
                      id: "password",
                      onChange: (l) => o(l.target.value),
                    }),
                    w.jsx(zx, {
                      control: w.jsx(Dx, {
                        value: "remember",
                        color: "primary",
                      }),
                      label: "Remember me",
                    }),
                    w.jsx(Er, {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      sx: { mt: 3, mb: 2 },
                      onClick: a,
                      children: "Sign In",
                    }),
                    w.jsx(Xl, {
                      container: !0,
                      children: w.jsx(Xl, {
                        item: !0,
                        children: w.jsx(Wx, {
                          href: "/register",
                          variant: "body2",
                          children: "Don't have an account? Register",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  S3 = () => {
    const [e, t] = Us(Sb),
      n = ta();
    async function r() {
      const o = localStorage.getItem("token");
      if (o && o !== "null")
        try {
          const s = (
            await Fe.get("http://localhost:3001/admin/me", {
              headers: { Authorization: `Bearer ${o}` },
            })
          ).data;
          s.username && t({ username: s.username });
        } catch (i) {
          console.error("Failed to fetch user data:", i);
        }
    }
    return (
      S.useEffect(() => {
        r();
      }, []),
      w.jsxs("div", {
        children: [
          w.jsx($i, {}),
          w.jsx(Ei, {
            sx: {
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            },
            children: w.jsxs(Ir, {
              component: "main",
              sx: { mt: 8, mb: 2 },
              maxWidth: "sm",
              children: [
                w.jsx(nt, {
                  variant: "h2",
                  component: "h1",
                  gutterBottom: !0,
                  children: "Welcome Back! 🤩",
                }),
                w.jsx(nt, {
                  variant: "h5",
                  component: "h2",
                  gutterBottom: !0,
                  children:
                    "We provide top-notch online courses designed to help you achieve your goals. Our expertly crafted courses are accessible, engaging, and packed with valuable content.",
                }),
                w.jsx(nt, {
                  variant: "h6",
                  gutterBottom: !0,
                  children: "Come and Join NOW!!",
                }),
                e
                  ? w.jsx(Er, {
                      onClick: () => n("/courses"),
                      variant: "contained",
                      color: "success",
                      children: "View Purchased Courses",
                    })
                  : w.jsx("div", {}),
              ],
            }),
          }),
        ],
      })
    );
  },
  x3 = () => {
    const [e, t] = S.useState(""),
      [n, r] = S.useState(""),
      [o, i] = S.useState(""),
      [s, a] = S.useState(""),
      l = async () => {
        await Fe.post(
          "http://localhost:3001/admin/courses",
          {
            title: e,
            description: n,
            imageLink: s,
            price: o,
            published: new Date(),
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        ),
          alert("course added!");
      };
    return w.jsxs("div", {
      children: [
        w.jsx($i, {}),
        w.jsxs(Ir, {
          component: "main",
          maxWidth: "xs",
          style: { marginTop: "50px" },
          children: [
            w.jsx(nt, {
              variant: "h5",
              style: {
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              },
              children: "Add a new Course 🚀",
            }),
            w.jsx(ki, {
              style: { width: "400px" },
              children: w.jsx(Ti, {
                children: w.jsxs(Ei, {
                  component: "form",
                  noValidate: !0,
                  sx: { mt: 1 },
                  children: [
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      type: "text",
                      fullWidth: !0,
                      name: "Course Name",
                      label: "Course Name",
                      onChange: (u) => t(u.target.value),
                      autoFocus: !0,
                    }),
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      name: "Description",
                      label: "Description",
                      type: "text",
                      onChange: (u) => r(u.target.value),
                    }),
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      name: "Image URL",
                      label: "Image URL",
                      type: "text",
                      onChange: (u) => a(u.target.value),
                    }),
                    w.jsx(pn, {
                      type: "number",
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      name: "Price",
                      label: "Price",
                      onChange: (u) => i(u.target.value),
                    }),
                    w.jsx(Er, {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      sx: { mt: 3, mb: 2 },
                      onClick: l,
                      children: "Add Course",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  b3 = () => {
    const e = ta(),
      [t, n] = S.useState(""),
      [r, o] = S.useState(""),
      [i, s] = S.useState(null),
      a = async (l) => {
        var u;
        l.preventDefault();
        try {
          const d = (
            await Fe.post("http://localhost:3001/admin/signup", {
              username: t,
              password: r,
            })
          ).data;
          d.token
            ? (localStorage.setItem("token", d.token), e("/add"))
            : s("Registration failed. Please try again.");
        } catch (c) {
          const d = (u = c.response) == null ? void 0 : u.data;
          d != null && d.error
            ? s(d.error)
            : d != null && d.message
            ? s(d.message)
            : s("An unexpected error occurred.");
        }
      };
    return w.jsxs("div", {
      children: [
        w.jsx($i, {}),
        w.jsxs(Ir, {
          component: "main",
          maxWidth: "xs",
          style: { marginTop: "100px" },
          children: [
            w.jsx(nt, {
              variant: "h5",
              style: {
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              },
              children: "Register To access Courses 😇",
            }),
            w.jsx(ki, {
              style: { width: "400px" },
              children: w.jsx(Ti, {
                children: w.jsxs(Ei, {
                  component: "form",
                  noValidate: !0,
                  sx: { mt: 1 },
                  onSubmit: a,
                  children: [
                    i &&
                      w.jsx(nt, {
                        color: "error",
                        variant: "body2",
                        children: i,
                      }),
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      id: "email",
                      value: t,
                      label: "Email Address",
                      name: "email",
                      autoComplete: "email",
                      autoFocus: !0,
                      onChange: (l) => n(l.target.value),
                    }),
                    w.jsx(pn, {
                      margin: "normal",
                      required: !0,
                      fullWidth: !0,
                      name: "password",
                      label: "Password",
                      type: "password",
                      value: r,
                      id: "password",
                      onChange: (l) => o(l.target.value),
                    }),
                    w.jsx(zx, {
                      control: w.jsx(Dx, {
                        value: "remember",
                        color: "primary",
                      }),
                      label: "Remember me",
                    }),
                    w.jsx(Er, {
                      type: "submit",
                      fullWidth: !0,
                      variant: "contained",
                      sx: { mt: 3, mb: 2 },
                      children: "Register",
                    }),
                    w.jsx(Xl, {
                      container: !0,
                      children: w.jsx(Xl, {
                        item: !0,
                        children: w.jsx(Wx, {
                          href: "/login",
                          variant: "body2",
                          children: "Already have an account? Login",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  w3 = () => {
    const [e, t] = Us(qh);
    async function n() {
      const o = (
        await Fe.get("http://localhost:3001/admin/courses/", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        })
      ).data;
      t(o.courses);
    }
    return (
      S.useEffect(() => {
        n();
      }, []),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx($i, {}),
          w.jsx(nt, {
            variant: "h4",
            style: {
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            },
            children: "Your Courses 📕",
          }),
          w.jsx("div", {
            style: {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            },
            children: e.map((r) =>
              w.jsx(
                R3,
                {
                  id: r._id,
                  title: r.title,
                  description: r.description,
                  imageLink: r.imageLink,
                  price: r.price,
                },
                r._id
              )
            ),
          }),
        ],
      })
    );
  };
function R3({ id: e, title: t, description: n, imageLink: r, price: o }) {
  const i = ta();
  console.log(e);
  const s = () => {
    i(`/course/${e}`);
  };
  return w.jsx("div", {
    onClick: s,
    children: w.jsx(Ir, {
      component: "main",
      maxWidth: "xs",
      style: { marginTop: "10px" },
      children: w.jsxs(ki, {
        sx: { maxWidth: 345 },
        children: [
          w.jsxs(Fx, {
            children: [
              w.jsx(Bx, {
                component: "img",
                height: "140",
                image: r,
                alt: "course image",
              }),
              w.jsxs(Ti, {
                children: [
                  w.jsx(nt, {
                    gutterBottom: !0,
                    variant: "h5",
                    component: "div",
                    children: t,
                  }),
                  w.jsx(nt, {
                    variant: "body2",
                    color: "text.secondary",
                    children: n,
                  }),
                ],
              }),
            ],
          }),
          w.jsx(TI, {
            children: w.jsxs(nt, { color: "primary", children: ["₹ ", o] }),
          }),
        ],
      }),
    }),
  });
}
const C3 = NN({
    key: "courseByIdState",
    get:
      (e) =>
      ({ get: t }) =>
        t(qh).find((r) => r._id === e),
  }),
  _3 = () => {
    const [e, t] = Us(qh);
    let { courseId: n } = bC();
    const r = n ? $N(C3(n)) : void 0;
    return (
      S.useEffect(() => {
        async function o() {
          const i = await Fe.get("http://localhost:3001/admin/courses/", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          t(i.data.courses);
        }
        o();
      }, [t]),
      r
        ? w.jsxs(w.Fragment, {
            children: [
              w.jsx($i, {}),
              w.jsxs("div", {
                style: { display: "flex" },
                children: [
                  r
                    ? w.jsx(E3, { course: r })
                    : w.jsx("div", {
                        style: {
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "50px",
                        },
                        children: w.jsx(nt, {
                          children: "Course ID not Found!",
                        }),
                      }),
                  w.jsx(k3, { courses: e, course: r, setCourses: t }),
                ],
              }),
            ],
          })
        : w.jsx(uF, {})
    );
  };
function E3({ course: e }) {
  return w.jsx(Ir, {
    style: { paddingTop: "10px" },
    children: w.jsx(ki, {
      style: { display: "flex", margin: "auto" },
      children: w.jsxs(Fx, {
        children: [
          w.jsx(Bx, {
            component: "img",
            height: "450",
            image: e.imageLink,
            alt: e.title,
          }),
          w.jsxs(Ti, {
            children: [
              w.jsx(nt, {
                gutterBottom: !0,
                variant: "h5",
                component: "div",
                children: e.title,
              }),
              w.jsx(nt, {
                variant: "body2",
                color: "text.secondary",
                children: e.description,
              }),
              w.jsxs(nt, {
                variant: "body1",
                color: "text.primary",
                children: ["Rs. ", e.price],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function k3({ course: e, courses: t, setCourses: n }) {
  const [r, o] = S.useState(e.title),
    [i, s] = S.useState(e.description),
    [a, l] = S.useState(e.price),
    [u, c] = S.useState(e.imageLink);
  S.useEffect(() => {
    o(e.title), s(e.description), l(e.price), c(e.imageLink);
  }, [e]);
  async function d(f) {
    f.preventDefault(),
      await Fe.put(
        "http://localhost:3001/admin/courses/" + e._id,
        {
          title: r,
          description: i,
          imageLink: u,
          price: a,
          published: new Date(),
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
    const y = [...t],
      h = y.findIndex((v) => v._id === e._id);
    h !== -1 &&
      (y[h] = { ...e, title: r, description: i, imageLink: u, price: a }),
      n(y);
  }
  return w.jsx("div", {
    children: w.jsxs(Ir, {
      component: "main",
      maxWidth: "xs",
      style: { marginTop: "50px" },
      children: [
        w.jsx(nt, {
          variant: "h5",
          style: {
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          },
          children: "Update Course",
        }),
        w.jsx(ki, {
          style: { width: "400px" },
          children: w.jsx(Ti, {
            children: w.jsxs(Ei, {
              component: "form",
              noValidate: !0,
              sx: { mt: 1 },
              children: [
                w.jsx(pn, {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  value: r,
                  label: "Title",
                  type: "text",
                  onChange: (f) => o(f.target.value),
                }),
                w.jsx(pn, {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  value: i,
                  label: "Description",
                  type: "text",
                  onChange: (f) => s(f.target.value),
                }),
                w.jsx(pn, {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  value: u,
                  label: "Image Url",
                  type: "text",
                  onChange: (f) => c(f.target.value),
                }),
                w.jsx(pn, {
                  margin: "normal",
                  required: !0,
                  fullWidth: !0,
                  value: a,
                  label: "Price",
                  type: "number",
                  onChange: (f) => l(Number(f.target.value)),
                }),
                w.jsx(Er, {
                  type: "submit",
                  fullWidth: !0,
                  variant: "contained",
                  sx: { mt: 3, mb: 2 },
                  onClick: d,
                  children: "Update Course",
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
function T3() {
  return w.jsx(PN, {
    children: w.jsx(BC, {
      children: w.jsxs(OC, {
        children: [
          w.jsx(jr, { path: "/", element: w.jsx(S3, {}) }),
          w.jsx(jr, { path: "/login", element: w.jsx(y3, {}) }),
          w.jsx(jr, { path: "/register", element: w.jsx(b3, {}) }),
          w.jsx(jr, { path: "/add", element: w.jsx(x3, {}) }),
          w.jsx(jr, { path: "/courses", element: w.jsx(w3, {}) }),
          w.jsx(jr, { path: "/course/:courseId", element: w.jsx(_3, {}) }),
        ],
      }),
    }),
  });
}
Td.createRoot(document.getElementById("root")).render(
  w.jsx(Ee.StrictMode, { children: w.jsx(T3, {}) })
);
