import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import { SlidersHorizontal } from 'lucide-react';

import './Searchpage.css';

const Searchpage = () => {
  return (
    <div className='searchpage'>
      <div className='searchpage_filter'>
        <SlidersHorizontal />
        <h2>FILTER</h2>
      </div>
      <hr/>

      <ChannelRow
        image="https://media.licdn.com/dms/image/v2/D5635AQFA_-dss_IO_A/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1716355414831?e=1724824800&v=beta&t=8co-EP7p_ZBDsdfdmP66Oty4cgF9d2yaPaW7pY4vTrE"
        channel="Pro Coder SK. Rafikul"
        verified
        subs="660k"
        noOfVideos={222}
        description="You will find awesome Programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the...."
      />

<hr/>

  <VideoRow
   
   views ="1.4k"
   subs="668k"
   description="Dreaming of landing a job at Facebook, Amazon, Netflix, or Google (FANG)? In this video, we’ll dive into what it really takes to join the ranks of these tech giants. From the intense interview processes to the day-to-day life of a FANG engineer, we’ll explore the pros, cons, and everything in between."
   timestamp="59seconds ago"
   channel="Pro Coder SK. Rafikul"
   title="The only video you need to watch for DSA"
   image="https://miro.medium.com/v2/resize:fit:1024/1*lGUL34nZvS3gXv4LNAKG3Q.jpeg"


  />
   <VideoRow
   
   views ="4.4m"
   subs="668k"
   description="Debugging is every coder's rite of passage, but it doesn’t have to be a headache! In this video, we’ll dive into the quirks and tricks of debugging, turning frustrating bugs into learning experiences. With a cup of coffee by your side, discover how to tackle those stubborn issues like a pro."
   timestamp="3 days ago"
   channel="Pro Coder SK. Rafikul"
   title="Debugging: The Art of Turning Coffee into Code"
   image="https://media.licdn.com/dms/image/D4D12AQE2VGEzy6kITQ/article-cover_image-shrink_720_1280/0/1705579467476?e=2147483647&v=beta&t=8q4nyIZenFSppuISqg22tOPUxE-oycRW7zyQ9C-RhrI"


  />
   <VideoRow
   
   views ="10.9k"
   subs="668k"
   description="React is all about building user interfaces, but it’s also about having a great relationship with the DOM. In this video, we’ll explore how React simplifies your life by handling the DOM with care, making your coding experience a whole lot smoother. Learn how to create components that’ll make your users fall in love!"
   timestamp="7 days ago"
   channel="Pro Coder SK. Rafikul"
   title="React: Building a Better DOMance"
   image="https://i.ytimg.com/vi/MuGPZ4oQyKQ/maxresdefault.jpg"


  />
   <VideoRow
   
   views ="1.9m"
   subs="668k"
   description="JavaScript is powerful, versatile, and sometimes downright confusing. This video explores the quirks, the magic, and the madness of JavaScript. Learn why this language is both loved and loathed, and how to navigate its tricky waters with confidence."
   timestamp="10 days ago"
   channel="Pro Coder SK. Rafikul"
   title="JavaScript: The Language That’s Both Your Best Friend and Worst Enemy"
   image="https://images.prismic.io/turing/652ebc99fbd9a45bcec8182d_Best_Online_Resources_to_Learn_Java_Script_for_Free_29680a8105.webp?auto=format,compress"


  />

<VideoRow
   
   views ="100m"
   subs="668k"
   description="APIs are the unsung heroes of the tech world. This video delves into the world of APIs, showing how they connect the dots in modern development. Learn how to harness their power to create more dynamic, integrated applications."
   timestamp="15 days ago"
   channel="Pro Coder SK. Rafikul"
   title="APIs: The Real MVPs of Modern Development"
   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuQG8ppbft5A8o-6U5TmExiRF-0SEDtBvKA&s"


  />

<VideoRow
   
   views ="300m"
   subs="668k"
   description="Chatbots are more than just a fad—they’re a fun way to learn about AI and programming! In this video, we’ll walk through building a simple chatbot from scratch, using natural language processing to make your bot smart and sassy."
   timestamp="300 days ago"
   channel="Pro Coder SK. Rafikul"
   title="Building Your First Chatbot: Because Why Not?"
   image="https://cdn.prod.website-files.com/5e305a6cb7083222527a89cc/66accb695d15914b1daf7df4_how_to_build_your_own_ai_chatbot_from_scratch.webp"


  />

    </div>
  )
}

export default Searchpage;

