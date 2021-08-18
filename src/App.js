import React,{useState} from 'react';
import Singlecolor from './Singlecolor';
import Values from 'values.js';


function App()
{
  const [color,setColor]=useState('');
  const [error,setError]=useState(false);
  const [list,setList]= useState([]);

const handleSubmit =(e)=>
{
 e.preventDefault();
 try{
  let colors=new Values(color).all(10)
  setList(colors);
  console.log('hello');
 }catch(error){
  setError(true);
  console.log(error);
 }

}


  return ( 
    <>
    <section className="container">
<h3>Color Palette</h3>
<form onSubmit={handleSubmit} >
  <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="#f15025" className={`${error ? 'error' :null}`}/>
  <button className="btn" type="submit">Submit</button>
</form>
    </section>
    <section className="colors">
      {list.map((color,index)=>{
        console.log(color)
        return <Singlecolor key={index} {...color} index={index} hexcolor={color.hex}/>
      })}
     
    </section>
    </>
  );
};

export default App;
