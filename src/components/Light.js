import React,{useState} from "react";
import './light.css'

const Light = ({isOn,toggle}) => {

    var [color, setColor] = useState('grey');

    console.log(isOn);

    var click = () =>{
    isOn==='ON'? setColor('orange'):setColor('grey')
    toggle()
    }
    
    return(
       <div className="container">
         <div className="bulb">
           <button style={{background:color}}></button>
         </div>
         <div className="button">
           <button onClick={click}>{isOn}</button>
         </div>
       </div>
        
    );
    
    };
    

export default Light;