import { useState } from "react";
import Keyboard from "./Keyboard";
import TextDisplay from "./TextDisplay";
import '../App.css';

export default function App() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("english");

  function handleKeyPress(key) {
    setText((t) => t + key);
  }

  return (
    <div style={{ padding: 20 }}>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: 10 }}
      >
        <option value="english">English</option>
        <option value="hebrew">Hebrew</option>
        <option value="emojis">Emojis</option>
      </select>
      <TextDisplay text={text} language={language} />
      <Keyboard language={language} onKeyPress={handleKeyPress} />
    </div>
  );
}