import { readFileSync } from "fs";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import path from "path";
import { fileURLToPath } from "url";

export const getSplitting = async (address) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, address);
    const file = readFileSync(filePath, 'utf8'); // No need for 'await' with readFileSync
    const text = file.toString();

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        separators: ["\n", ".", "\n\n"], // Corrected separators
    });

    // Using splitText or passing an array to createDocuments
    const output = await splitter.createDocuments([text]); // Or splitter.splitText(text)
    return output;
}
