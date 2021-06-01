//import logo from './logo.svg';
import './style.css';
import './App.css';
import styled from "./styled.jpg"

function App() {
  return (
    <div className="App">
      
      <h1>Hi there!</h1>
      <img style={{maxWidth: '10vw'}} src={styled} alt ='styled' />
      <div style={{border:"solid 1px black", maxWidth:'100vw'}}>
      <h1 className='title'>My Name is Hager Abeulaziz</h1>
      <h1 className=' red'>I am 25 Years Old</h1>

      <br ></br>
      <img src="/pic.jpg" alt="pic" ></img>
      

      </div>
      <br ></br>
      
      <video width={320} height={240} controls></video>

 <source src="myVideo.mp4" type="video/mp4" ></source>
    </div>
  );
}

export default App;
