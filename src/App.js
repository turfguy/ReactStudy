/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let post= '블로그 글 제목임';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  
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
              
                <div className= "list" key={i}>
                  <h4 onClick={()=>{
                    setModal(!modal); setTitle(i);
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
                  <button onClick={()=>{
                     let del = [...글제목];
                     del.splice(i,1);
                     글제목변경(del); 
                  }}>삭제</button>
              </div>
            )
          })
        }
        <br></br>
        <input type="text" onChange={(e)=>{
            입력값변경(e.target.value); 
               
        }}/>
        <button  onClick={(e)=>{
            let input = [...글제목];
            input.push(입력값);
            글제목변경(input);
            console.log(입력값);
        }}>입력</button>
        <div>
              {
                modal == true ? <Modal  글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
              }
              </div>
            
      </div>
      
  );
}
function Modal(props){
  return(
     
     <div className='modal' >
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>
              글수정
            </button>
        </div>

     
  )
}
export default App;
