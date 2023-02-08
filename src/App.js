import React, {useState} from 'react';
import './App.css';
import Table from './Table';

function App() {
  const [comments,setComments] = useState([]);
  return (
    <Table comments={comments} setComments={setComments} />
  );
}

export default App;
