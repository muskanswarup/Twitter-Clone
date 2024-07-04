import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
// import Feed from './Feed'
import { Outlet } from 'react-router-dom'
// import useGetProfile from '../hooks/useGetProfile'
// import { useSelector } from 'react-redux'

const Home = () => {

  // const {user} = useSelector(store => store.user);

  

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSideBar/>
        <Outlet/>
        <RightSideBar/>
    </div>
  )
}

export default Home
