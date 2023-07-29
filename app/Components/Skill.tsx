import React from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai';
export default function Skill() {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* card start here d */}
      <div className="p-4 w-[100%] md:w-1/3">        
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold '/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-gray-700 rounded-xl w-[80%]'>  


              </div>

            </div>
            <p className='font-bold text-right'>80%</p>
          </div>
        </div>
      </div> {/* card end here */}
      <div className="p-4 w-[100%] md:w-1/3">        
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold '/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-gray-700 rounded-xl w-[55%]'>  


              </div>

            </div>
            <p className='font-bold text-right'>55%</p>
          </div>
        </div>
      </div> {/* card end here */}
      <div className="p-4 w-[100%] md:w-1/3">        
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white flex-shrink-0">
              <AiOutlineCheckSquare className='text-xl font-bold '/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript/Typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute h-1 bg-gray-700 rounded-xl w-[50%]'>  


              </div>

            </div>
            <p className='font-bold text-right'>50%</p>
          </div>
        </div>
      </div> {/* card end here */}
      
    </div>
  </div>
</section>

    </div>
  )
}
