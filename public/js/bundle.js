(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextLoader_1 = require("./TextLoader");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var filePath = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
        TextLoader_1.TextLoader.Load(filePath, this.OnLoadFile);
    };
    Program.OnLoadFile = function (fileContent) {
        console.log(fileContent);
    };
    return Program;
}());
// Debug Version
// Program.Main();
// Release Version
window.onload = function () { return Program.Main(); };

},{"./TextLoader":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextLoader = /** @class */ (function () {
    function TextLoader() {
    }
    TextLoader.Load = function (filePath, callback) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status !== 404) {
                callback(request.responseText);
            }
        };
        request.open("GET", filePath, true);
        request.send();
    };
    return TextLoader;
}());
exports.TextLoader = TextLoader;

},{}]},{},[1]);
