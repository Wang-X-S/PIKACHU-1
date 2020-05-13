// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin *{box-sizing:border-box;margin:0;padding:0;}\n.skin *::before{box-sizing: border-box;}\n.skin *::after{box-sizing:border-box;}\n.skin{\n    position:relative;  \n    background: #ffe600;\n    height:50vh;\n}\n.nose{\n    border:10px solid black;\n    border-color:black transparent transparent; \n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position:relative;\n    left:50%;\n    top:145px;\n    margin-left:-10px;\n    z-index: 999;    \n}\n@keyframes wave{\n    0%{\n        transform:rotate(0deg);\n    }\n    33%{\n        transform:rotate(5deg)\n    }\n    66%{\n        transform:rotate(-5deg)\n    }\n    100%{\n        transform:rotate(0deg);\n    }\n}\n.nose:hover{\n    transform-origin:50% 100%;\n    /* \u4EE5\u9876\u70B9\u4E3A\u57FA\u70B9\u6447\u52A8 50%\u662F\u5DE6\u53F3\u65B9\u5411\u4EE5\u6B63\u4E2D\u5FC3\u4E3A\u57FA\u70B9 100%\u662F\u4E0A\u4E0B\u65B9\u5411\u4EE5\u6700\u4E0B\u4E3A\u57FA\u51C6\n        \u4E5F\u53EF\u4EE5\u5199\u6210  transform-origin:center bottom   */\n    animation:wave 0.3s infinite linear;\n}\n.yuan{\n    position:absolute;\n    width:20px;\n    height:6px;\n    top:-16px;\n    background:black;\n    left:-10px;\n    border-radius:10px 10px 0 0 ;\n}\n.eye{\n    border:2px solid #000;\n    width :64px;\n    height:64px;\n    position: absolute;\n    left:50%;\n    top:100px;\n    margin-left:-32px;\n    background: #2e2e2e;\n    border-radius:50%;\n}\n.eye::before{\n    content:'';\n    display:block; /* \u9ED8\u8BA4\u662F\u5185\u8054\u5143\u7D20,\u7528block */\n    border:3px solid #000;\n    width:31px;\n    height:31px;\n    border-radius:50%;\n    background:#fff;\n    position: relative;\n    left:8px;\n    top:2px;\n}\n.eye.left{\ntransform:translateX(-100px);\n}\n.eye.right{\ntransform:translateX(100px);\n}\n.mouth{\n    width:200px;\n    height:200px;\n    position: absolute;\n    left:50%;\n    top:170px;\n    margin-left:-100px;\n}\n.mouth .up{\n    position: relative;\n    top:-20px;\n    z-index: 1;\n}\n.mouth .up .lip{\n    border: 3px solid black;\n    height: 30px;\n    width: 100px;\n    background: #ffe600;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n  }\n  .mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    transform: rotate(-15deg) translateX(-53px);\n  }\n  .mouth .up .lip.right{\n    border-radius: 0 0 50px 0px;\n    transform: rotate(15deg) translateX(53px);\n  }\n  .mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left::before{\n    right: -6px;\n  \n  }\n  .mouth .up .lip.right::before{\n    left: -6px;\n  }\n  .mouth .down{\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n  }\n.mouth .down .yuan1{\n    border:3px solid black;\n    width:150px;\n    height:1000px;\n    position: absolute;\n    bottom:0;\n    left:50%;\n    margin-left:-75px;\n    border-radius: 100px / 400px;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\nwidth:200px;\nheight:300px;\nbottom:-155px;\nbackground:#ff485f;\nposition: absolute;\nleft:50%;\nmargin-left:-100px;\nborder-radius:100px;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n  }\n  .face.left{\n    transform: translateX(-180px);\n    background: #ff0000;\n    border-radius: 50%;\n  }\n  .face.right{\n    transform: translateX(180px);\n    background: #ff0000;\n    border-radius: 50%;\n  }\n\n  ";
var _default = string; //导出string

exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入string
var n = 1;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var slow = function slow() {
  pause();
  time = 300;
  id = play();
};

var normal = function normal() {
  pause();
  time = 100;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.9c476151.js.map