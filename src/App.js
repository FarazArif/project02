import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name , rollNo}) {
  return (<div>
        This is name = {name}
    <Hello  MyRollNo={rollNo}/>

    </div>
  );
}

export default App;
