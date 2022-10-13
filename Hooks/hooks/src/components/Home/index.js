import React, {useState, useEffect} from "react";

import prize from '../Data'

// import useFetch from "../useFetch";

// import {MessagesContext} from "./Chart"


import './index.css'

//  Normal class component 

// class Home extends Component{
//     state = {
//         name:"swarna"
//     }
//     render(){
//         const{name} = this.state
//         return(
//             <div className="main"> 
//                 <h1>{name}</h1>
//                 <br />
//                 <button onClick={() =>{
//                     this.setState({name:"Teja"})
//                 }}>Click</button>
//             </div>
//         )
//     }
// }

// export default Home


// useState............Hook

// const Home =() => {
//     const [name, setName]  = useState("Teja")
//     const [age, setAge] = useState(0)
//   return (
//         <div className="main"> 
//         <h1>Message Notifications</h1>
//         <p>You Have received {age} new Message</p>
//         <button onClick={() =>setAge(age + 1)}>Click</button>

//         <h1>{name}</h1>
//         <br />
//         <button onClick={() =>setName("Swarna")}>Click</button>
//         </div>
//   )
// }

// export default Home


// useEffect............Hook

const Home =() => {
    // const [data, setData]  = useState([])

    // useEffect(() => {
    //     fetch('prize')
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setData(data)
    //     })

    // }, [])

    // console.log(data)

    const data = prize

  return (
        <div className="main"> 
        <div>
        <h1>Users</h1>        
        {data.map(user =>(
            <p key={user.id}>{user.name}</p>
        ))}
        </div>
        </div>
  )
}

export default Home



// // Custom Hook

// const Home = () =>{

// const  data = useFetch("https://jsonplaceholder.typicode.com/users")
//     return(
//         <div className="main">
//         <h1>Users</h1>        
//      {data.map(user =>(
//             <p key={user.id}>{user.name}</p>
//         ))}
//         </div>
//     )
// }
// export default Home


// Context Hook
// const value = useDetails()

// const Home = () =>{

//         return(
//             <div className="main">
//             <h1> Context</h1>
//             <p>{value.username}</p>
//             {/* <MessagesContext.Consumer>
//                 {(value) => <div>
//                     value.userName
//                     </div>}
//             </MessagesContext.Consumer>   */}
//             </div>
//         )
//     }
//     export default Home






// useReducer .... Hook

// const initialState = {
//     username:'',
//     loading:false,
//     users:[],
//     error:''

// }

// function userReducer(state, action){
//     switch (action.type) {
//         case "FETCH_REQUEST":
//             return {...state, loading:true}
//         case "FETCH_SUCCESS":
//             return {...state, loading:false, users:action.payload}
//         case "FETCH_FAIL":
//             return {...state, loading:false, error:action.payload}
//         default:
//             break;
//     }
// }


// const Home =() => {

//     const [state, dispatch]  = useReducer(userReducer, initialState)
//     useEffect(() =>{
//         dispatch({type:"FETCH_REQUEST"})
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data =>{
//             dispatch({type:"FETCH_SUCCESS", payload:data})
//         })
//         .catch(error =>{
//             dispatch({type:"FETCH_FAIL", error: "Something went wrong" + error.toString()})
//         })

//     },[])

//   return (
//         <div className="main"> 
//         <h1>Use Reducer</h1>
//         <h2>User Names</h2>
//         {state.users.map((user) =>
//             <p>{user.name}</p>)}
//          </div>
//   )
// }

// export default Home