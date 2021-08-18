import React,{useState,useEffect} from 'react';
import rgbToHex from './utils';
const Singlecolor =({rgb,weight,index, hexcolor})=>
{

    const[alert,setAlert]=useState(false);
    const bcg=rgb.join(',');
    const hex=rgbToHex(...rgb)
    const hexValue=`#${hexcolor}`

    console.log(bcg);

    useEffect(()=>{
        const timeout=setTimeout(()=>
        {
            setAlert(false)
        },3000)
            return ()=>clearTimeout(timeout)
        
        },[alert])
    return (<article className={`color  ${index>10 && 'color-light'}`}  style={{backgroundColor:`rgb(${bcg})`}}
    onClick={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue)
    }}
    
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}%</p>
        {alert && <p style={{color:'grey'}} className="alert">COPIED TO CLIPBOARD!</p>}
        <p className></p>
    </article>
    )
};
export default Singlecolor;