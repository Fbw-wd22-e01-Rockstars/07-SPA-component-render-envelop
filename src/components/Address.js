import React from 'react'

/* let num =[1,2,3]
const [a,b,c]= num */

export default function Address({fullName,address,cityStateZip}) {
   
  return (
    <div>
        <h3>{fullName}</h3>
        <h4>{address}</h4>
        <h4>{cityStateZip}</h4>
    </div>
  )
}





