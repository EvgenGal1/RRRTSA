import React from 'react';
import './App.css';

import { RR_Doc } from './RR_Doc/RR_Doc.jsx';
import { RR_UlbiTV } from './RR_UlbiTV/RR_UlbiTV.jsx';
import { RRTS_UlbiTV } from './RRTS_UlbiTV/RRTS_UlbiTV.jsx';

function App() {
  return (
    <div className="App">
      <RR_Doc/>
      <RR_UlbiTV/>
      <RRTS_UlbiTV/>
    </div>
  );
}

export default App;
