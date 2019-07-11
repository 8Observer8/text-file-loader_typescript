define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextLoader = /** @class */ (function () {
        function TextLoader() {
        }
        TextLoader.LoadUsingXMLHttpRequest = function (filePath, callback) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status !== 404) {
                    callback(request.responseText);
                }
            };
            request.open("GET", filePath, true);
            request.send();
        };
        TextLoader.LoadUsingFileReader = function (input, callback) {
            var reader = new FileReader();
            reader.onload = function () {
                callback(reader.result);
            };
            var file = input.files[0];
            reader.readAsText(file);
        };
        return TextLoader;
    }());
    exports.TextLoader = TextLoader;
});
//# sourceMappingURL=TextLoader.js.map