import React from 'react'
import add from '../assets/add.svg'
const Library = () => {
  return (
    <div className='Library'>
        <button>All</button>
        <button>Public</button>
        <button>Private</button>
        <button>Favourite</button>
        <button>Trees</button>
        <img src={add} alt="plus" />
    </div>
  )
}

export default Library