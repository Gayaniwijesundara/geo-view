import { useState } from "react"
import coodinations from "../assets/coodinations.json";
import "../styles/Comparison.css"


const Comparison=()=>{ 
    const[area,setArea] = useState(null)
    const[type,setType] = useState(null)
    const[list,setList] = useState(null)

    const minorThan =()=>{
        const minors = coodinations.features.filter((polygon)=>polygon.properties.Area <area)
        setType("Area less than")
        if(minors.length===0){
            setList(null)
            return
        }
        setList(minors)
    }

    const equal =()=>{
        const equals = coodinations.features.filter((polygon)=>polygon.properties.Area ==area)
        setType("Area equal")
        if(equals.length===0){
            setList(null)
            return
        }
        setList(equals)
    }
    
    const greaterThan =()=>{
        const greaters = coodinations.features.filter((polygon)=>polygon.properties.Area >area)
        setType("Area greater than")
        if(greaters.length===0){
            setList(null)
            return
        }
        setList(greaters) 
    }

    return(
        <dev className="Comparison">
        <input type="number" placeholder="Enter the Area in acres" value={area} onChange={(e)=>setArea(e.target.value)} />
        <button onClick={minorThan}>Less than</button>
        <button onClick={equal}>Equal to</button>
        <button onClick={greaterThan}>Greater than</button>
        {list !==null && (
            <div>
                {type}
                <div className="listbox">
                {list.map((item)=>(
               <p>
                {item.properties.Name} <span>Area:{item.properties.Area}</span> 
               </p> 
            ))}
                </div>
            
        </div>
        )}
        
        
        </dev>
    )
}

export default Comparison