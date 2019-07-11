define(["require", "exports", "./TextLoader"], function (require, exports, TextLoader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Playground: https://next.plnkr.co/edit/JgPIlgBpNQK8BwO2?open=Program.ts&preview
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var _this = this;
            // FileReader
            var inputElement = document.getElementById("input");
            if (inputElement === null) {
                console.log("Failed to get the \"input\" element.");
                return;
            }
            inputElement.onchange = function (ev) {
                TextLoader_1.TextLoader.LoadUsingFileReader(inputElement, _this.OnLoadFile);
            };
            // XMLHTTPRequest
            var filePath = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
            TextLoader_1.TextLoader.LoadUsingXMLHttpRequest(filePath, this.OnLoadFile);
        };
        Program.OnLoadFile = function (fileContent) {
            var output = document.getElementById("output");
            output.textContent = fileContent;
        };
        return Program;
    }());
    // Debug Version
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
//# sourceMappingURL=Program.js.map