import React from 'react'
import { assets } from '../assets/images/vidTube_img/images/assets'

const NavBar = () => {
  return (
		<div className=''>
			<img src= {assets.like} alt="" />
			<img src={assets.banner} alt="" />
			<p className='text-white'>VidTube</p>
		</div>
  )
}

export default NavBar