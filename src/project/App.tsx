import React from 'react';
import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import './App.css';

import { RRTS_UlbiTV } from './RRTS_UlbiTV/RRTS_UlbiTV.jsx';

function App() {
  return (
    <div className="App">
      <RRTS_UlbiTV/>
    </div>
  );
}

export default App;
