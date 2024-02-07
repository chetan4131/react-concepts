import React, { useState } from 'react'

const Example1 = () => {

  

//    const [state, dispatch] = useReducer(reducer, initialValue)
    const [showData, setShowData] = useState([])
   const [formData, setFormData] = useState({
    name:'',
    email:'',
    number:''
   })

   const handleOnChange = (e) => {
            // console.log('name ---- ', e.target.name)
            // console.log('value ---- ', e.target.value)
            // setFormData({[e.target.name]:e.target.value})
            setFormData({...formData, [e.target.name]:e.target.value})
   }

   const submitData = (e) =>{
    e.preventDefault()
    setShowData([...showData, formData])
    setFormData(
        {
            name:'',
            email:'',
            number:''
           }
    )
   }
  return (
    <div>
      <form action="">
      <input type="text" name='name' placeholder='Enter Name'  value={formData.name} onChange={handleOnChange}/> <br/>
      <input type="text" name='email' placeholder='Enter Email' value={formData.email} onChange={handleOnChange}/> <br/>
      <input type="text" name='number' placeholder='Enter number' value={formData.number} onChange={handleOnChange}/> <br/>
      <button onClick={submitData}>submit</button>
      </form>


      <div>
      {
        showData.map((e, index)=>{
                return(
                    <div key = {index} style={{border:'2px solid red'}}>
                        <p>{e.name}</p>
                        <p>{e.email}</p>
                        <p>{e.number}</p>
                    </div>
                )
        })
      }
      </div>
    </div>
  )
}

export default Example1
