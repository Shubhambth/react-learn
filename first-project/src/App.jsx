import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialAllowed, setSpecialAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let special = "!@#$%^&*()_+-={}[]|\\:;?><,./";

    if (numberAllowed) {
      str += numbers;
    }
    if (specialAllowed) {
      str += special;
    }

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, specialAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, specialAllowed, generatePassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-2xl font-semibold mb-4">🔑 Password Generator</h2>

        {/* Password Display */}
        <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden p-2 mb-4">
          <input
            type="text"
            className="w-full bg-transparent outline-none text-lg px-2"
            value={password}
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded transition"
          >
            Copy
          </button>
        </div>

        {/* Password Length */}
        <div className="mb-4">
          <label className="text-gray-300">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="w-full cursor-pointer accent-blue-600"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        {/* Options */}
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-blue-500"
            />
            <span>Include Numbers</span>
          </label>
          <label className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={specialAllowed}
              onChange={() => setSpecialAllowed((prev) => !prev)}
              className="accent-blue-500"
            />
            <span>Include Special Characters</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-600 hover:bg-green-500 text-white text-lg font-medium py-2 rounded transition"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
