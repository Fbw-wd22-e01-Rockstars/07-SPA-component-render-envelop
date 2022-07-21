import React from "react"
import Address from "./Address";
import Stamp from "./Stamp";


export default function Envelop({toPerson,fromPerson}){
//received props from parent component(App)
// {toPerson , fromPerson} inside our props
    return(
        <div style={{display:"flex",border:"2px solid black", height:"500px",alignItems:"center"}}>
            <div style={{height:"100%",width:"40%"}}>
            <Address fullName={toPerson.fullName} address={toPerson.address} cityStateZip={toPerson.cityStateZip} /> 
            
            </div>
            <div style={{width:"40%"}}> 
            <Address fullName={fromPerson.fullName} address={fromPerson.address} cityStateZip={fromPerson.cityStateZip}/></div>
            <Stamp/>

        </div>
    )
}

