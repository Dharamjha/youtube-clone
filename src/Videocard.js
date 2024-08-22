
import React from 'react'
import './Videocard.css';
import { Smile } from 'lucide-react';

function Videocard({ image, title, channel, views, timestamp, channelimage }) { // Destructure the props here
  return (
    <div className='videocard'>
        <img className='videocard_thumbnail' src={image} alt='' />
        <div className='video_info'>
            <Smile className='video_avatar' alt={channel} />

            <div className='video_text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Videocard
