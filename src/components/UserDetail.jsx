import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { reducer } from '../ApiReducer';

const initialState = {
  loading: true,
  post: {},
  error: ''
}

const UserDetail = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        

      } catch (error) {
        dispatch({ type: "FETCH_ERROR", })

      }
    }

    fetchData()
  }, [])



  return (
    <>
      <div className="w-full">
        <div className="mx-5">
          {state.loading && <h1 className='text-2xl text-red-700 font-bold'>Loading..........</h1>}

          {state.loading === false && (
            <div >
              <h1 className='text-xl font-bold'>{state.post.name} Detail</h1>
              <h2>Email: {state.post.email}</h2>
              <h2>UserName: {state.post.username}</h2>
              <h2>Website: {state.post.website}</h2>
            </div>
          )}
          <Link to="/">
            <button className='border bg-amber-500 mt-4'> back to Home</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default UserDetail
