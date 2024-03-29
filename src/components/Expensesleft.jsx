import React from 'react'
import img1 from '../../public/img1.png';
import img2 from '../../public/img2.png';
import img3 from '../../public/img3.png';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import ChartBarSimple from './shared/ChartBarSimple'
import { FaBus } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoFastFood } from "react-icons/io5";
import { FaRegPlayCircle } from "react-icons/fa";
export default function Expensesleft() {
  return (
    
    <div className="flex flex-col font-f-poppins mt-5 ml-4 mr-5 ">
          {/* Expenses col */}
          
          <div className="col col-span-3">
            <div className='flex sm:justify-between'>
            
                <div className=''>
                    <div className='font-p-600 text-[30px] 2xl:text-[50px] xl:text-[45px] lg:text-[40px] md:text-[35px]  leading-[50px] tracking-[0.67px]'>Expenses</div>
                    <div className='font-p-400 text-[12px] 2xl:text-[24px] 2xl:mt-3 xl:text-[20px] lg:text-[16px] md:text-[12px]  opacity-50 leading-[24px] tracking-[0.34px]'>01 - 25 March, 2020</div>
                </div>
                <div className='flex justify-end mt-3 flex-wrap'>
                    <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src={img1} alt="Image 1" />
                    <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src={img2} alt="Image 2" />
                    <img className='inline-block h-6 w-6 rounded-full ring-2 ring-white' src={img3} alt="Image 3" />
                    <AiOutlinePlusCircle className="fill-icon-colour px-1 h-5 w-7 left-[800px] -ml-[-3px]"/>
                </div>
   
            </div>
            
            
          </div>

          <div className='col-span-3 flex-wrap '>
            <div className='text-40px font-p-400'>
              <div className='md:w-auto '>
              <ChartBarSimple />
              </div>
            </div>
          </div>

          <div className='col-span-3'>
            <div className='mt-4 flex justify-between'>
              <div className='text-[18px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[14px] leading-[50px] tracking-[0.67px]  font-p-600'>Today</div>
              <BsThreeDots className='mt-4'/>
            </div>
          </div>
          <hr className='mt-3 mb-3'></hr>
          
          <div className='mt-6 flex justify-between'>
            <div className='flex'>
              <div className='text-20px 2xl:text-[28px] xl:text-[24px] lg:text-[20px] font-semibold bg-cart-blue rounded-full p-4 text-custom-white'><AiOutlineShoppingCart  /></div>
              <div className='ms-5'>
                  <div className='text-[16px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[16px]  font-p-500'>Grocery</div>
                  <div className='text-[13px] 2xl:text-[22px] xl:text-[18px] lg:text-[14px] md:text-[12px] font-p-400 text-new-grey'>5:12 pm  •  Belanja di pasar</div>
                </div>    
            </div>
            
            <div className='flex'>
                  <div className='text-[13px] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[12px] text-gray-400 font-p-600 '>-326.800</div>
            </div>
          </div>
          <div className='mt-6 flex justify-between'>
            <div className='flex'>
              <div className='text-20px 2xl:text-[28px] xl:text-[24px] lg:text-[20px] bg-bus-color rounded-full p-4 text-custom-white'><FaBus /></div>
              <div className='ms-5'>
                  <div className='text-[16px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[16px]  font-p-500'>Transportation</div>
                  <div className='text-[13px] 2xl:text-[22px] xl:text-[18px] lg:text-[14px] md:text-[12px] font-p-400 text-new-grey'>5:12 pm  •  Naik bus umum</div>
                </div>
            </div>
            <div className='flex'>
                  <div className='text-[13px] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[12px] text-gray-400 font-p-600'>-15.000</div>
            </div>
            </div>
            <div className='mt-6 flex justify-between'>
            <div className='flex'>
              <div className='text-20px 2xl:text-[28px] xl:text-[24px] lg:text-[20px] font-semibold bg-house-color rounded-full p-4 text-custom-white'><FaBus /></div>
              <div className='ms-5'>
                  <div className='text-[16px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[16px]  font-p-500'>Housing</div>
                  <div className='text-[13px] 2xl:text-[22px] xl:text-[18px] lg:text-[14px] md:text-[12px] font-p-400 text-new-grey'>5:12 pm  •  Bayar Listrik</div>
                </div>
            </div>
            <div className='flex'>
                  <div className='text-[13px] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[12px] text-gray-400 font-p-600'>-185.750</div>
            </div>
            </div>
            <div className='col-span-3'>
            <div className='mt-7 flex justify-between'>
              <div className='text-[18px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[14px] leading-[50px] tracking-[0.67px]  font-p-600'>Monday, 23 March 2020</div>
              <BsThreeDots className='mt-4'/>
            </div>
          </div>
          <hr className='mt-2 mb-3'></hr>
          <div className='mt-6 flex justify-between'>
            <div className='flex'>
              <div className='text-20px 2xl:text-[28px] xl:text-[24px] lg:text-[20px] font-semibold bg-food-color rounded-full p-4 text-custom-white'><IoFastFood /></div>
              <div className='ms-5'>
                  <div className='text-[16px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[16px]  font-p-500'>Food and drink</div>
                  <div className='text-[13px] 2xl:text-[22px] xl:text-[18px] lg:text-[14px] md:text-[12px] font-p-400 text-new-grey'>5:12 pm  •  Makan Steak</div>
                </div>
            </div>
            <div className='flex'>
                  <div className='text-[13px] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[12px] text-gray-400 font-p-600'>-185.750</div>
            </div>
            </div>
            <div className='mt-6 flex justify-between'>
            <div className='flex'>
              <div className='text-20px 2xl:text-[28px] xl:text-[24px] lg:text-[20px] font-semibold bg-e-color rounded-full p-4 text-custom-white'><FaRegPlayCircle /></div>
              <div className='ms-5'>
                  <div className='text-[16px] 2xl:text-[26px] xl:text-[22px] lg:text-[18px] md:text-[16px]  font-p-500'>Entertainment</div>
                  <div className='text-[13px] 2xl:text-[22px] xl:text-[18px] lg:text-[14px] md:text-[12px] font-p-400 text-new-grey'>5:12 pm  •  Nonton Bioskop</div>
                </div>
            </div>
            <div className='flex'>
                  <div className='text-[13px] 2xl:text-[20px] xl:text-[16px] lg:text-[12px] md:text-[12px] text-gray-400 font-p-600'>-35.200</div>
            </div>
            </div>
          
          
        </div>
        
  )
}
