define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=TextLoader.js.map