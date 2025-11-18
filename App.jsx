import { useState, useEffect } from "react";
import Home from "./screens/Home";
import Daily from "./screens/Daily";
import Weekly from "./screens/Weekly";
import Meals from "./screens/Meals";
import Budget from "./screens/Budget";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  const S = { home: <Home go={setScreen} />, daily: <Daily />, weekly: <Weekly />, meals: <Meals />, budget: <Budget /> };

  return (
    <div className="app">
      <header>
        <h1>Solo Living System</h1>
        <button onClick={() => setDark(!dark)}>Dark Mode</button>
      </header>
      {S[screen]}
      <nav>
        <button onClick={() => setScreen("home")}>Home</button>
        <button onClick={() => setScreen("daily")}>Daily</button>
        <button onClick={() => setScreen("weekly")}>Weekly</button>
        <button onClick={() => setScreen("meals")}>Meals</button>
        <button onClick={() => setScreen("budget")}>Budget</button>
      </nav>
    </div>
  );
}