import React from 'react'
import { assets } from '../assets/images/vidTube_img/images/assets'

const NavBar = () => {
  return (
		<div className='flex'>
			<div className='flex gap-4 h-9'>
				<img src={assets.menu} alt="" className='text-4xl'/>
				<img src={assets.logo} alt="" className='text-2xl'/>
			</div>

			<div className='items-center flex gap-8'>
				<input type="text" placeholder='Seach for anything' className='bg-transparent rounded-sm border-inherit placeholder:text-gray-50'/>
				<img src={assets.search} alt="" />
				<img src={assets.voice_search} alt="" className='size-9'/>
			</div>

		</div>

  )
}

export default NavBar