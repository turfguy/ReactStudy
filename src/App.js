/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post= '블로그 글 제목임';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉,따봉변경] = useState(0);
  let logo = 'ReactBlog';
  return (
    <div className="App">
        <div className="black-nav">
          <h4>{logo}</h4>
        </div>
        <button onClick={()=>{
          let change = [...글제목];
           글제목.sort();
           글제목변경(글제목);
        }}>글정렬</button>

        <button onClick={()=>{
          let copy = [...글제목];
          copy[0]= '여자 코트 추천'
          글제목변경(글제목);
          }}>♻️</button>
        <div className= "list">
            <h4>
              {글제목[0]}
            </h4>
              <span onClick={()=>{따봉변경(따봉++)}}>❤️</span> {따봉}
            <p>5월 3일 글임</p>
        </div>
        <div className= "list">
            <h4>{글제목[1]}</h4>
            <p>5월 3일 글임</p>
        </div>
        <div className= "list">
            <h4>{글제목[2 ]}</h4>
            <p>5월 3일 글임</p>
        </div>
      
      </div>
  );
}

export default App;
