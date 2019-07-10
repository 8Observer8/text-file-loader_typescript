define(["require", "exports", "./TextLoader"], function (require, exports, TextLoader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var filePath = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
            TextLoader_1.TextLoader.Load(filePath, this.OnLoadFile);
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