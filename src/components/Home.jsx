import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import { reducer } from '../ApiReducer'

const initialState = {
    loading: true,
    error: '',
    post: []
}
const Home = () => {

    const [state, dispatch] = useReducer(reducer, initialState )

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/users")
                
                dispatch({type: "FETCH_SUCCESS", payload: res.data})
                
            } catch (error) {
                dispatch({type: "FETCH_ERROR", })
                
            }
        }

        fetchData()
    }, [])

    



  return (
    <>
      <div className="w-full">
        <div className="mx-5">
            <h1 className="text-xl">
                Users
            </h1>
            <ul className='p-4'>
                {state.loading && <h1 className='text-2xl text-red-700 font-bold'>Loading..........</h1>}


                {state.loading === false && state.post.map((user)=>(
                    <div  key={user.id}>
                        <Link  to={`/userdetail/${user.id}`}>
                            <li className='border border-gray-300 p-2 cursor-pointer hover:bg-gray-100'>
                                {user.name}
                            </li>
                        
                        </Link>

                    </div>
                ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default Home
