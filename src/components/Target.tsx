import React ,{useState}from 'react'

export default function Target() {

const [target , setTarget] = useState(0)
  return (

    // 2 usestate to save data 
    // 1 target 
    // 2 progress = current / target 
   <>
   <div> 
<label htmlFor="set-target">Set target</label>
<input type="text" id='set-target' value={target} onChange={(e)=> setTarget(parseInt(e.target.value))}/>
<button type='reset' >Reset</button>

        <p>Current saving: </p>  
    <p>Target: {target}</p>
    <label htmlFor="progress">Progress</label>
    <input type="range" id='progress' />

   </div>
   </>
  )
}
