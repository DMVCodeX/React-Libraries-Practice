import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
      <ReactPlayer url="https://www.youtube.com/watch?v=U0eLmyJkQBc" />
    </div>
  );
}

export default App;
