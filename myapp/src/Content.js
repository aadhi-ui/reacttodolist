import React from 'react'

const Content = () => {
    function Changethename(){
        const names=['name','hlo', 'hlo there']
        const  word  =Math.floor(Math.random()*3)
        const name = names[word]
        return name
    }

    const handleclick = (name1) => {
        console.log(`thaks for visiting ${name1}`)
    }
    const handleDoubleclick = (e) =>{
            console.log(e.target)
    }

    
  return (
  <main>
    <p onDoubleClick={()=> handleclick('aadhi')}>this the word {Changethename()}.</p>
    <button onClick={(e)=> handleDoubleclick(e)}>Click me</button>
  </main>
  
  )
}
export default Content
