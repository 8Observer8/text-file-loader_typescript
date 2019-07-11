
export class TextLoader
{
    public static LoadUsingXMLHttpRequest(
        filePath: string, callback: (fileContent: string) => void): void
    {
        let request = new XMLHttpRequest();

        request.onreadystatechange = () =>
        {
            if (request.readyState === 4 && request.status !== 404)
            {
                callback(request.responseText);
            }
        };

        request.open("GET", filePath, true);
        request.send();
    }

    public static LoadUsingFileReader(
        input: HTMLInputElement,
        callback: (fileContent: string) => void): void
    {
        let reader = new FileReader();

        reader.onload = () =>
        {
            callback(reader.result as string);
        }

        let file = input.files[0];
        reader.readAsText(file);
    }
}
