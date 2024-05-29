import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Error = () => {
  const navigate=useNavigate()
  return (
    <div className='err'>
    <h2>ERROR 404</h2>
    <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
    
  )
}

export default Error