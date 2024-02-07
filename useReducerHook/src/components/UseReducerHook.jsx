import React , {useReducer} from 'react'

const initialValue = []
const reducer = ((state, action)=>{
  console.log('state-----', state)
  console.log('action-----', action)
    // switch(action.type){
    //     case "ADD_TASK" :
    //         console.log("All is well")
    //         console.log('*****', [...state])
    //       return ([...state,{name: action.payload}])
    //         default : state
    // }
   

})
const UseReducerHook = () => {

    const [todos, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      
      <input type="text" onBlur={(e) => {dispatch({type:"ADD_TASK", payload: e.target.value})}}/>

      <button>Add task</button>

      <hr />
      {/* <p>
        {
            todos.map((e ,index)=>{
                  return(
                    <p key={index}> {e.name}</p>
                  )
            })
        }
      </p> */}
    </div>
  )
}

export default UseReducerHook
