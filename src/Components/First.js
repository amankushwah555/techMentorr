import React from 'react'

function First() {
  return (
    <div>
      <h1>My First Program</h1>
      <JoinUs />
      <JoinNew />
    </div>
  )
}

function JoinUs(){
  return(
    <h2>Join Us</h2>
  )
}
function JoinNew(){
  return(
    <h3>Join New</h3>
  )
}

export default First
export {JoinUs, JoinNew}