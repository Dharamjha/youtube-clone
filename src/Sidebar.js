import React from 'react'
import SidebarRow from './SidebarRow';
import "./Sidebar.css";
import { House } from 'lucide-react';
import { Flame } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { FileVideo2 } from 'lucide-react';
import { History } from 'lucide-react';
import { MonitorPlay } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';


export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={House} title="Home" />
        <SidebarRow Icon={Flame} title="Trending" />
        <SidebarRow Icon={HandCoins} title="Subscription" />
        <hr />
        <SidebarRow Icon={FileVideo2} title="Library" />
        <SidebarRow Icon={History} title="History" />
        <SidebarRow Icon={MonitorPlay} title="Your Videos" />
        <SidebarRow Icon={AlarmClock} title="Watch Later" />
        <SidebarRow Icon={ThumbsUp} title="Liked Videos" />
        <SidebarRow Icon={ChevronDown} title="Show More" />
        <hr />

    </div>
  )
}
