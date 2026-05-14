import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (data) => {

    console.log(data);
    
  return (
    
      <div className='card'>
        <div className='top'>
          <img src={data.brandlogo}
           alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{data.company} <span>{data.posted}</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='box4'>
            <h4>{data.tag1}</h4>
            <h4>{data.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{data.pay}</h3>
            <p>{data.location}</p>
          </div>
          <button>Apply</button>
        </div>
      </div>
  )
}

export default Card
