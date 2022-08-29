import { Button, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import "./assets/navbar.css";
import { Image } from 'antd';
import navimg from "./assets/images/tick6.png";

const divStyles={
  boxShadow: '1px 1px 3px antiquewhite',
  margin:'auto',
  padding:'40px' ,
  width:'70vw',
  height:'450px',
  marginTop:'70px',
 background:'white',
 borderRadius:"90px",

};

function App() {
 // const [count, setCount] = useState(0)
 return(

 <div className="app">
  <header className="App-header"> 
  
   <section style={divStyles} className="para">  
 <Image 
   style={{width:"80px" ,height:"80px"}} preview={false}
    width={200}
    src={navimg}
  /> 

                <br/>
               <h1 style={{color: "red",fontSize:'23px'}}>Congratulations!</h1>  
                    <b>  <p style={{color: "black",fontSize:'17px' }}> Your Order Is Successfully Accepted</p> </b>
                      <p style={{color: "grey"}}>Your order have been placed and is on it's way to be processed</p> 
                
                <br/>
                <Button style={{backgroundColor: "#FF1493" ,borderRadius:"300px", color:"white",width:"150px"}}>Thank you</Button>
                </section>

 </header> 
  </div>

 )
}

export default App
