import React from 'react'
import { Container } from '@mui/material'
import like from '../assets/like.svg'
import view from '../assets/view.svg'
const YourPost = () => {
  return (
    <div className='yourpost'>
     <Container>
      <span className='postdatetime'>30.05.2024 02:05</span>
      <div className='yr_ques'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores reiciendis eaque magnam quisquam ut repellendus adipisci ducimus natus similique.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis a totam adipisci fugiat, maiores tenetur voluptate eligendi quam iste explicabo.
      </div>
      <div className='bottomyrpost'>
      <div className='pubpri'>
        <p>Public</p>
        <p>Private</p>
      </div>
      
      <div className='socialreach'>
        <span> <img src={view} alt="view" />23</span>
        <span><img src={like} alt="like" /> 12</span>
      </div>

      <div className='editdelete'>
        <button className='edityrpost'>EDIT</button>
        <button className='deleteyrpost'>DELETE</button>
      </div>
      </div>
     </Container>
    </div>
  )
}

export default YourPost