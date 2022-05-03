import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post= '블로그 글 제목임';
  let [글제목,b] = useState('남자 코트 추천');
  let logo = 'ReactBlog';
  return (
    <div className="App">
        <div className="black-nav">
          <h4>{logo}</h4>
        </div>
        <div className= "list">
            <h4>{글제목}</h4>
            <p>5월 3일 글임</p>
        </div>
      
      </div>
  );
}

export default App;
