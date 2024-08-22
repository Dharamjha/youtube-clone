

// import React from 'react';
// import './Channelrow.css';

// const ChannelRow = ({ image, channel, subs, noOfVideos, description, verified }) => {
//   return (
//     <div className='channelrow'>
//       <img className='channelrow_logo' alt={channel} src={image} />
//       <div className='channelrow_text'>
//         <h4>{channel} {verified && <span>✔</span>}</h4>
//         <p>
//           {subs} subscribers • {noOfVideos} videos
//         </p>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default ChannelRow;

import React from 'react';
import './Channelrow.css';

const ChannelRow = ({ image, channel, subs, noOfVideos, description, verified }) => {
  return (
    <div className='channelrow'>
      <img className='channelrow_logo' alt={channel} src={image} />
      <div className='channelrow_text'>
        <h4>{channel} {verified && <span>✔</span>}</h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
