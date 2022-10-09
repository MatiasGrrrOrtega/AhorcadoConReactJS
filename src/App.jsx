import Home from "./components/Home";
import Game from "./components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developer from "./components/Developer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Developer" element={ <Developer/> } />
        <Route path="/Game" element={ <Game/>} />
      </Routes>
    </BrowserRouter>
  );
}