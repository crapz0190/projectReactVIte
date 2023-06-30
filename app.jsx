import { Header } from "./src/components/Header";
import { MainContent } from "./src/pages/MainContent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css"

export function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}