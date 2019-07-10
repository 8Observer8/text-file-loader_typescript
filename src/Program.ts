import { TextLoader } from "./TextLoader";

class Program
{
    public static Main(): void
    {
        let filePath = "https://www.w3.org/TR/PNG/iso_8859-1.txt";

        TextLoader.Load(filePath, this.OnLoadFile);
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
