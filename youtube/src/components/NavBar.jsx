import React from 'react'
import { assets } from '../assets/images/vidTube_img/images/assets'

const NavBar = () => {
  return (
  <> 
	<div className="flex w-full items-center justify-between p-4 bg-gray-900">
	 {/* Left */}
		<div className="flex gap-4 items-center">
			<img src={assets.menu} alt="" className="w-9 h-9" />
			<img src={assets.logo} alt="" className="w-16" />
		</div>

	 {/* Middle */}
		<div className="flex items-center gap-2 bg-gray-800 rounded px-3 py-1">
				<input
					type="text"
					placeholder="Search for anything"
					className="bg-transparent outline-none placeholder:text-gray-400 h-7"
				/>
				<img src={assets.search} alt="" className="w-6 h-6" />
				<img src={assets.voice_search} alt="" className="w-9 h-7" />
		</div>

		<div className='flex items-center gap-4'>
			<img className='h-7' src={assets.upload} alt="" />
			<img className='h-7' src={assets.notification} alt="" />
			<img className='h-7' src={assets.more} alt="" />
			<img className='rounded-full h-7' src={assets.jack} alt="" />
		</div>
	</div>



</>
  )
}

export default NavBar