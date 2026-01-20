import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />}>
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
