import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <div className="box">
      <Note />
      <Note />
      <Note />
      </div>
      
      
      <Footer />
    </div>
  );
}

export default App;
