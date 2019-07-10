
export class TextLoader
{
    public static Load(filePath: string, callback: (fileContent: string) => void): void
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
}
