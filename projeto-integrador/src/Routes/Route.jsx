import React from "react";

import { BrowserRouter as Router, 
    Routes, 
    Route,
  } from "react-router-dom";

import PagesContatos from "../pages/Contatos/contatos";

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Contato" element={<PagesContatos/>} />
      </Routes>
    </Router>
  );
};

export default Root;