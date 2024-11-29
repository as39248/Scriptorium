// helper function that reads from stdin, returns sanitized string 
export function readArgs(input) {
    if (!input) {
        return [];
    }
    return input.split(" ");
}

// creates a file with the respective extension, given code as a string 
// return filename on success
export function createFile(code, lang) {
    let filename = "";
    if(lang === "Python") {
        filename = "py.py";
    } else if (lang === "C") {
        filename = "c.c";
    } else if (lang === "C++") {
        filename = "cpp.cpp";
    } else if (lang === "Java") {
        filename = "Main.java";
    } else if (lang === "JavaScript") {
        filename = "js.js";
    } else if (lang === "Python2") {
        filename = "py2.py"
    } else if (lang === "C#") {
        filename = "cs.cs"
    } else if (lang === "Shell") {
        filename = "sh.sh"
    } else if (lang === "C14") {
        filename = "c14.c";
    } else if (lang === "C13") {
        filename = "c13.c";
    }

    // writes text to file
    const fs = require('fs');
    try {
    	fs.writeFileSync(filename, code);
    }
    catch (err) {
    	return "FILE ERROR";
    }
    return filename;
}

// runs code.c, code.cpp etc using node's child_process.execSync(), and returns results of the execution
export function executeCode(lang, args, stdin) {

    const { exec, spawnSync } = require('node:child_process');
    
    if (lang == "Python") {
        // code execution with no isolation for testing
        const child = spawnSync("python3", ["py.py"].concat(args), {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

       // const child = spawnSync("docker run", ["-i", "--rm", "py"], 
        //    {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "C") {
        // code execution with no isolation for testing
        //const child = spawnSync("gcc", ["c.c"], {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});
        //const child = spawnSync("./a.out", args, {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "c"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "C++") {
        //const child = spawnSync("g++", ["cpp.cpp"], {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});
        //const child = spawnSync("./a.out", args, {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "cpp"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "Java") {
        //const child = spawnSync("javac", ["Main.java"], {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});
        //const child = spawnSync("java", ["Main"].concat(args), {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "java"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "JavaScript") {
        //const child = spawnSync("node", ["js.js"].concat(args), {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "js"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "Python2") {
        // code execution with no isolation for testing
        //const child = spawnSync("python2", ["py2.py"].concat(args), {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "py2"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "C#") {
        // code execution with no isolation for testing
        //const child = spawnSync("csc", ["cs.cs"], {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});
        //const child = spawnSync("cs.exe, args, {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "cs"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "Shell") {
        // code execution with no isolation for testing
        //const child = spawnSync("sh.sh", args, {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "sh"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "C14") {
        // code execution with no isolation for testing
        //const child = spawnSync("gcc", ["c14.c"], {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});
        //const child = spawnSync("./a.out", args, {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "c14"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    } else if (lang == "C13") {
        // code execution with no isolation for testing
        //const child = spawnSync("gcc", ["c13.c"], {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});
        //const child = spawnSync("./a.out", args, {stdio: 'pipe', encoding: 'utf-8', shell: true, input: stdin});

        const child = spawnSync("docker run", ["-i", "--rm", "c13"], 
            {stdio: 'pipe', encoding: 'utf-8', shell: true,});
        return [child.stdout, child.stderr]
    }
}
