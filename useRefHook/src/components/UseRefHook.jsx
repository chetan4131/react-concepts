
import { useEffect, useRef } from 'react'

function UseRefHook() {

  const divElement = useRef('')
  

  useEffect(() => {
   
   console.log('Div element is',  divElement)
   
  },[])

  function handleClick(){
   console.log('>>>>>>', divElement.current.innerText
   ) 
  }
  return (
    <>
      <div ref={divElement}>
        <h1>useRef Hook</h1>
      </div>

      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default UseRefHook
