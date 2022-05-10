/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post= '블로그 글 제목임';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let logo = 'ReactBlog';
  return (
    <div className="App">
        <div className="black-nav">
          <h4>{logo}</h4>
        </div>
        <button onClick={()=>{
          let change = [...글제목];
           change.sort();
           글제목변경(change);
        }}>글정렬</button>

        <button onClick={()=>{
          let copy = [...글제목];
          copy[0]= '여자 코트 추천'
          글제목변경(copy);
          }}>♻️</button>
        
        {
          글제목.map(function(a,i){
            return(
              <>
                <div className= "list" key={i}>
                  <h4 onClick={()=>{
                    setModal(!modal)
                  }}>
                    {글제목[i]}
                  </h4>
                    <span onClick={()=>{
                      let ddabong = [...따봉];
                      ddabong[i]+=1;
                      따봉변경(ddabong)
                    }}>    
                    ❤️</span> {따봉[i]}
                  <p>5월 3일 글임</p>
              </div>
              <div>
              {
                modal == true ? <Modal/> : null
              }
              </div>
            </>  
        
            )
          })
        }
      </div>
      
  );
}
function Modal(){
  return(
    <div className='modal'>
        <h4>상세페이지</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
export default App;
