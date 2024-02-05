import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
const [fetchData, setFetchData] = useState([])
const [isLoad, setIsLoad] = useState(false)
    useEffect(()=>{
        setIsLoad(true)
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            
            setFetchData(data)
            setIsLoad(false)
        })
        .catch(err => console.log('something went wrong--',err))
       
    },[])
  return (

    isLoad ? <h2 className='load-heading'>Loadinggg....</h2> :
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th colSpan={2}>Rating</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>

                {
                   fetchData.map((item ,id)=>{
                    return(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.category}</td>
                        <td>{item.title}</td>
                        <td>{item.rating.count}</td>
                        <td>{item.rating.rate}</td>
                        <td>{item.price}</td>
                       
                    </tr>
                    )
                   }) 
                }
               
            </tbody>
        </table>
    

    </div>
  )
}

export default UseEffectHook
