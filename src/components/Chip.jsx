import React from 'react'

function Chip() {
  return (
    <div className='bg-[#000000] pb-10 pt-36 flex flex-col items-center justify-center gap-10'>
        <div className=''>
            <img src="https://www.apple.com/v/iphone-15-pro/c/images/overview/chip/chip__fuct924q1s66_large.jpg" alt="" />
        </div>
       <div className='text-white text-center flex flex-col gap-8'> <h1 className='lg:text-7xl text-4xl font-bold '>A17 Pro chip.</h1>
       <h1 className='lg:text-7xl text-4xl font-bold '> A monster win for gaming.</h1>
        <p className='text-[#86868B]  text-xl lg:text-3xl'>It’s here. The biggest redesign in the history of Apple GPUs.</p>
        </div>
        <div className='px-4 lg:px-0'>
            <img src="https://www.apple.com/v/iphone-15-pro/c/images/overview/chip/chip_performance_hw__6ytcie74ao22_large.png" alt="" />
        </div>
        <div className='flex flex-col lg:flex-row px-4 lg:px-0 justify-center items-start gap-10 lg:justify-evenly  lg:gap-[260px]'>
            <div className='flex flex-col lg:items-center gap-7'>
                <p className='text-[#86868B] text-xl lg:w-[300px]'>A17 Pro is an entirely new class of iPhone chip that delivers our <span className='text-white'> best graphics performance by far.</span></p>
                <p className='text-[#86868B] text-xl lg:w-[300px]'>Mobile <span className='text-white'>games will look and feel so immersive, </span> with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.</p>
            </div>
            <div className=''>
            <p className='text-[#86868B] text-xl'>New</p>
            <h1 className='text-white text-5xl'>Pro-class GPU</h1>
            <p className='text-[#86868B] text-xl'>with 6 cores</p>
            </div>
        </div>
    </div>
  )
}

export default Chip