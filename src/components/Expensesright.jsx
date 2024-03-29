import React from 'react';
import img1 from '../../public/right01.png';
import img2 from '../../public/right02.png';

export default function () {
  return (
    
    <div>
      <div className="flex flex-wrap flex-col font-f-poppins ml-10 mr-10 mt-20">
        <div className='flex-row justify-between items-center'>
            <div className='mt-1 justify-between font-p-600 text-[20px] leading-[30px] tracking-[0.33px]'>Where your money go?</div>

            <div className='mt-8 flex justify-between leading-[24px] tracking-[0.46px]'>
                <div className='flex font-p-500 text-[13px] '> Food and Drinks
                </div>
                <div className='flex'>
                  <div className='text-16px font-p-400 text-[13px]'>872.400</div>
            </div>
            
            </div>
            <div className='flex items-center justify-center mt-2'>
            <div class="w-[250px] h-[5px] rounded-full bg-color-grey">
                <div class='w-[70px] h-[5px] rounded-full bg-color-progress' ></div>
            </div>
            </div>
            <div className='mt-8 flex justify-between leading-[24px] tracking-[0.46px]'>
                <div className='flex font-p-500 text-[13px] '> Shopping
                </div>
                <div className='flex'>
                  <div className='text-16px font-p-400 text-[13px]'>1.378.200</div>
            </div>
            
            </div>
            <div className='flex items-center justify-center mt-2 '>
            <div class="w-[250px] h-[5px] rounded-full bg-color-grey">
                <div class='w-[110px] h-[5px] rounded-full bg-color-progress' ></div>
            </div>
            </div>
            <div className='mt-8 flex justify-between leading-[24px] tracking-[0.46px]'>
                <div className='flex font-p-500 text-[13px] '> Housing
                </div>
                <div className='flex'>
                  <div className='text-16px font-p-400 text-[13px]'>1.378.200</div>
            </div>
            
            </div>
            <div className='flex items-center justify-center mt-2 '>
            <div class="w-[250px] h-[5px] rounded-full bg-color-grey">
                <div class='w-[90px] h-[5px] rounded-full bg-color-progress' ></div>
            </div>
            </div>
            <div className='mt-8 flex justify-between leading-[24px] tracking-[0.46px]'>
                <div className='flex font-p-500 text-[13px] '> Transportation
                </div>
                <div className='flex'>
                  <div className='text-16px font-p-400 text-[13px]'>420.700</div>
            </div>
            
            </div>
            <div className='flex items-center justify-center mt-2 '>
            <div class="w-[250px] h-[5px] rounded-full bg-color-grey">
                <div class='w-[60px] h-[5px] rounded-full bg-color-progress' ></div>
            </div>
            </div>
            <div className='mt-8 flex justify-between leading-[24px] tracking-[0.46px]'>
                <div className='flex font-p-500 text-[13px] '> Vehicle
                </div>
                <div className='flex'>
                  <div className='text-16px font-p-400 text-[13px]'>520.000</div>
            </div>
            
            </div>
            <div className='flex items-center justify-center mt-2 '>
            <div class="w-[250px] h-[5px] rounded-full bg-color-grey">
                <div class='w-[90px] h-[5px] rounded-full bg-color-progress' ></div>
            </div>
            </div>

            
            <div className='flex justify-center items-center mt-20'>
              <div className='w-[250px] h-[258px] bg-color-box rounded-xl ps-6 pe-6 justify-center'>
                <div className=' flex justify-between '>
                  <div className=' transform -translate-y-1/4'>
                    <img src={img1} className="flex w-[84.15px] h-[72.43px]" alt="Image 1" />
                  </div>
                  <div className=' transform -translate-y-1/2'>
                    <img src={img2} className="w-[52.53px] h-[90.12px]" alt="Image 1" />
                  </div>
                </div>
                <div className='font-f-poppins'>
              <div className=' font-p-600 text-[16px]'>Save more money</div>
              <div className=' text-[12px] font-p-400 mt-1'> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
            </div>
            <div className=' items-center'>
              <button className='bg-custombg-color font-p-600 p-2.5 text-custom-white text-[13px] w-[200px] rounded-lg mt-6'>VIEW TIPS</button>
            </div>
              </div>
            
              
            
            </div>
      
        </div>
        
     
      </div>
    </div>
    
  )
}
