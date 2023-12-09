import { useState } from "react";
import "../styles/AreaVolume.css"
import coodinations from "../assets/coodinations.json";

const AreaVolume = ()=>{
    const [value, setValue] = useState("")
    const [result, setResult] = useState(null)
    const [meandepth, setmeandepth] = useState(null)
    const [type,setType] = useState("")
    
    const checkname = (calculationType)=>{
        const selected=coodinations.features.find((current)=> current.properties.Name===value)
        const currentarea= selected.properties.Area
        setType(calculationType)
        if(calculationType==="Area in acres"){
         
          setResult(currentarea)
        }
        if(calculationType==="Volume in cubic meter"){
          const currentvolume=(currentarea*meandepth*4046.86).toFixed(3)
          setResult(currentvolume)
        }
    }

    const clear = ()=>{
      setResult(null)
      setmeandepth("")
      setValue("")
    }
        return (
          <div className="AreaVolume">
              <div className="Inputfield">
                <label>Location Name</label>
              <input type="text" placeholder="Enter the field location" value={value} onChange={(e)=>setValue(e.target.value)} />
                </div>  

                <div className="Inputfield">
                <label>Mean Depth</label>
                <input type="number" placeholder="Enter the mean depth of Saltpan" value={meandepth} onChange={(e)=>setmeandepth(e.target.value)} />
                </div>

                <button onClick={()=>checkname("Area in acres")}>Calculate Area</button>
                <button onClick={()=>checkname("Volume in cubic meter")}>Calculate Volume</button>
                <button onClick={clear}>Clear</button>
                {result && (
                  <h2>Saltpan {type} : {result}</h2>
                )}
                
          </div>
        );
      };
      
      
      
      

export default AreaVolume;