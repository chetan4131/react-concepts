
import { useState } from 'react'


function UseStateHook() {

  const [submitData, setSubmitData]= useState([])
  const [formData, setFormData] = useState({
      name:"",
      email:"",
      mobNo:"",
      date:""
    });
   

    function handleInputValue(e){
      const key = e.target.name
     const value =  e.target.value
     console.log("key", key)
     console.log("value", value)
    setFormData({...formData, [key]:value})
    }

    function submitFormData(e){
        e.preventDefault()
        console.log('Ramram')
        console.log({...formData})
        setSubmitData([...submitData, formData])
        setFormData({
          name:"",
          email:"",
          mobNo:"",
          date:""
        })
    }
  return (
    <>
      <form action="">
         <input type="text" name = "name" placeholder='Enter Name' value={formData.name} 
         onChange={handleInputValue}/> <br />
        
         <input type="email" name="email" placeholder='Enter email' value={formData.email}
          onChange={handleInputValue}/> <br />

         <input type="number" name="mobNo" placeholder='Enter Mob No.' value={formData.mobNo}
          onChange={handleInputValue}/> <br />

         <input type="date" name='date' placeholder='Enter Date' value={formData.date}
          onChange={handleInputValue}/> <br />

          <button onClick={submitFormData}>Submit</button>
      </form>


     {
      submitData.map((data, index)=>{
            return(
              <div key={index}>
                My name is: <b>{data.name}</b>. Email ID: <b>{data.email}</b>. Mobile No. <b>{data.mobNo}</b>. Due Date: <b>{data.date}</b>
            </div>
            )
      })
     }
    
    </>
  )
}

export default UseStateHook
