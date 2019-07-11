import { TextLoader } from "./TextLoader";

// Playground: https://next.plnkr.co/edit/JgPIlgBpNQK8BwO2?open=Program.ts&preview

class Program
{
    public static Main(): void
    {
        // FileReader
        let inputElement = document.getElementById("input") as HTMLInputElement;
        if (inputElement === null)
        {
            console.log("Failed to get the \"input\" element.");
            return;
        }
        inputElement.onchange = (ev: Event) =>
        {
            TextLoader.LoadUsingFileReader(inputElement, this.OnLoadFile);
        };

        // XMLHTTPRequest
        let filePath = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
        TextLoader.LoadUsingXMLHttpRequest(filePath, this.OnLoadFile);
    }

    public static OnLoadFile(fileContent: string): void
    {
        let output = document.getElementById("output");
        output.textContent = fileContent;
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();
