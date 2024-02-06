import React, {useEffect, useState} from 'react'

const SetTimeout = () => {
    const [text, setText] = useState('Jai shri ram')

    const [ loading, setLoading ] = useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            console.log('ramram')
            setText("jai hanuman")
            setLoading(false)
        },4000)
        
    },[])
  return (
    <div>
      {
      loading ? <h2>Please wait</h2>: <h2> {text}</h2>
      }
    </div>
  )
}

export default SetTimeout
