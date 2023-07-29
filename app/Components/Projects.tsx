import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Projects() {
  return (
    
    <section id='projects' className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
      {/* card 1 start here */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/porfolio1.jpg"
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">
              Todo App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Todo App
            </h1>
            <Link href={"https://todoapp-mu-neon.vercel.app/"} target='_blank'>
            <p className="leading-relaxed ">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
              <br />
              <span className='hover:underline'>View Project...</span>
            </p></Link>
          </div>
        </div>
      </div>
      {/* card 1 end here */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/porfolio2.jpg"
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">
              Todo App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Todo App
            </h1>
            <Link href={"https://todoapp-mu-neon.vercel.app/"} target='_blank'>
            <p className="leading-relaxed ">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
              <br />
              <span className='hover:underline'>View Project...</span>
            </p></Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative cursor-pointer">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/porfolio1.jpg"
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">
              Todo App
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Todo App
            </h1>
            <Link href={"https://todoapp-mu-neon.vercel.app/"} target='_blank'>
            <p className="leading-relaxed ">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
              <br />
              <span className='hover:underline'>View Project...</span>
            </p></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    
  )
}
