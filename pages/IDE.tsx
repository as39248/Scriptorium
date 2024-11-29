import React, { useState, useEffect } from 'react';

// interface IDE {
//   code: string,
//   lang: string;
//   arg: string;
//   stdin: string;
// }

interface Output {
  stdout: string;
  stderr: string;
}

const IDE: React.FC = () => {
    // const initIDE = {code: "", lang: "", arg: "", stdin: ""};
    const initOutput = {stdout: "", stderr: ""};
    // const [IDE, setIDE] = useState<IDE>(initIDE);
    const [Code, setCode] = useState<string>("");
    const [Lang, setLang] = useState<string>("");
    const [Arg, setArg] = useState<string>("");
    const [Stdin, setStdin] = useState<string>("");
    const [Output, setOutput] = useState<Output>(initOutput);

    const handleExecution = async () => {

      let response = await fetch("http://localhost:3000/api/code-exec/execute",
        {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ "user": {
            "code" : Code,
            "lang" : Lang,
            "arg": Arg,
            "stdin": Stdin
          }}),
        }
      );
    
      let result = await response.json();
      setOutput(result);
      return
    }

    return (
      <div className="mt-8 w-full max-w-3xl items-center justify-center min-h-screen">
      
        <div className="p-6 bg-white rounded shadow">
         
            <>
              <textarea 
                className="mt-2 text-sm text-gray-500" 
                placeholder="Start Coding Here!"
                cols={120} rows={20} 
                onChange={(e) => setCode(e.target.value)}>
              </textarea>

            </>

            <>
              
              <textarea 
                className="mt-2 text-sm text-gray-500" 
                placeholder="Language" 
                cols={20} rows={1}
                onChange={(e) => setLang(e.target.value)}></textarea>

              <div></div>

              <textarea 
                className="mt-2 text-sm text-gray-500" 
                placeholder="Command Line Arguments" cols={20} rows={1} 
                onChange={(e) => setArg(e.target.value)}></textarea>

              <div></div>

              <textarea className="mt-2 text-sm text-gray-500" placeholder="Standard Input" cols={20} onChange={(e) => setStdin(e.target.value)}></textarea>
              
              <div></div>

              {/* Execute Button */}
              <div className="mt-1 flex justify-end">
                <button
                  onClick={() => handleExecution()}
                  className="bg-gray-100 text-blue-600 border border-gray-400 px-4 py-2 rounded hover:bg-red-600 hover:text-gray-100 focus:outline-none"
                >
                  Run Code
                </button>
              </div>

              <p>stdout: {Output.stdout}</p>
              <p>stderr: {Output.stderr}</p>
            </>
          
        </div>
      </div>
    );
};

export default IDE;