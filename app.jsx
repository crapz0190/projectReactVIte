import { Header } from "./src/components/Header";
import { MainContent } from "./src/components/MainContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./src/components/Footer";
import "./main.css"

export function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
      <MainContent />
      <Footer />
    </div>
  )
}