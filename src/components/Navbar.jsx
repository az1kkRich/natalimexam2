import React, { useRef, useState } from 'react'

const Navbar = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const  logButt = useRef(),
    formRef = useRef();


  const handleLoginButt = () => {
    if (logButt.current.innerText === "Login") {
      logButt.current.innerText = "Close"
      formRef.current.className = "block"
    } else {
      logButt.current.innerText = "Login"
      formRef.current.className = "hidden"

    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.username.value;
    const email = e.target.email.value

    setUserName(name);
    setUserEmail(email);

    // console.log(e.target.username.value);
    
    console.log(name, email);
    
    logButt.current.innerText = "Login"
    formRef.current.className = "hidden"
    
  }
  



  return (
    <>
      <div className="w-full">
        <div className="mx-5">
          <h1 className="text-2xl">
            User Manager
          </h1>
          <button ref={logButt} className='border p-2 rounded bg-blue-600 text-white cursor-pointer' onClick={() => handleLoginButt()}>Login</button>
          <form ref={formRef} className='hidden'
            onSubmit={handleSubmit}>
            <hr />
            <input type="text" name="username"
               
              id="username" placeholder='Username' className='border block my-2' />

            <input type="email" name="email"
              
             

              id="email" placeholder='email' className='border block my-2' />
            <button type='submit' className='border px-1 mb-2 rounded bg-blue-600 text-white'> Send</button>
            <hr />
          </form>

          {userName && userEmail && (
            <div><h1>Welcome <strong>{userName}</strong> {userEmail}</h1></div>
          )}

        </div>
      </div>
      <hr className='my-3' />
    </>
  )
}

export default Navbar
