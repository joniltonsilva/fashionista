import React from "react";

import './styles/global.css';
import './App.scss';

function App({children}) {  
  return (
    <div className="app">
      {children}
    </div>
  );
}

export default App;
