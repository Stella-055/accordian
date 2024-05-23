import { useState } from 'react'
import dataitem from './data.js'

function Accordian() {
    const [selection,setselection]=useState(null);
    const [enable,setenable]= useState(false)
    const [multiselection,setmultiselection]=useState([])
function handlesingleselection(id){
setselection(selection===id?null:id)
}

  
  function handlemultiselection(id) {
    if (multiselection.includes(id)) {
      setmultiselection(multiselection.filter(item => item !== id));
    } else {
    
      setmultiselection([...multiselection, id]);
    }
  }

  return (<div className='outerwrap'>
  <button onClick={()=>setenable(!enable)}>Enable multiple selection</button>
   <div className="wrapper">
    {dataitem.map( data =>
      <div key={data.id}> <div className='sectionone'  onClick={enable===true?()=>{ handlemultiselection(data.id)}:() =>
            handlesingleselection(data.id)}>
                 <h1>{data.question}</h1>
         <span>+</span> </div> 
           { selection===data.id|| multiselection .includes(data.id)  ? <div  className='sectiontwo'><h1>{data.answer}</h1></div>:null}
       
           </div>
    )}
   </div></div>
  )
}

export default Accordian