// API endpoint for code execution

import { readArgs, createFile, executeCode } from "@/utils/execUtils";

const LANGS = ["Python", "Java", "JavaScript", "C", "C++", "Python2", "C#", "Shell", "C14", "C13"];

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { user } = req.body;
    const { code, lang, arg, stdin } = user;
    //const { code, lang, arg, stdin } = req.body;

    console.log(code,lang,arg,stdin);

    if (!code || !lang) {
        console.log("Please include code and language.");
        return res.status(400).json({
            stdout: "Failed to execute.",
            stderr: "Please include code and language."
        });
    }

    if(!LANGS.includes(lang)) {
        console.log("Language is not supported.");
        return res.status(400).json({
            stdout: "Failed to execute.",
            stderr: "Language is not supported."
        });
    }

    // creates a file on server
    const filename = createFile(code, lang);
    if(filename === "FILE ERROR") {
    	return res.status(503).json({ 
            stdout: "Failed to execute.",
            stderr: "Servor Error."
        });
    }

    // pass in stdin as args to execute
    const args = readArgs(arg);

    // runs created file with given arguments
    const result = executeCode(lang, args, stdin);
  
    return res.status(200).json({
        stdout: result[0],
        stderr: result[1]
    });
    
}
  
