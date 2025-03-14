import React from 'react'
import Rectangle from "../assets/images/Rectangle.png"
import card21a from "../assets/images/card21a.png"
import card21b from "../assets/images/card21b.png"
import card21c from "../assets/images/card21c.png"
import card21d from "../assets/images/card21d.png"
import card21e from "../assets/images/card21e.png"
import card21f from "../assets/images/card21f.png"
import card21g from "../assets/images/card21g.png"
import card22a from "../assets/images/card22a.png"
import card22b from "../assets/images/card22b.png"
import card22c from "../assets/images/card22c.png"
import card22d from "../assets/images/card22d.png"
import card22e from "../assets/images/card22e.png"
import card22f from "../assets/images/card22f.png"
import card22g from "../assets/images/card22g.png"
import card23a from "../assets/images/card23a.png"
import card23b from "../assets/images/card23b.png"
import card23c from "../assets/images/card23c.png"
import card23d from "../assets/images/card23d.png"
import card23e from "../assets/images/card23e.png"
import card23f from "../assets/images/card23f.png"
import card23g from "../assets/images/card23g.png"




export const Top_collection = () => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='px-[40px] pt-[40px]'>
                    <h1 className='text-4xl'>TOP COLLECTIONS</h1>
                </div>
                <div className='px-[40px] pt-[50px]'>
                    <a className='font-semibold text-[#FE0101] font-roboto' href="">View More Collection</a>
                </div>
            </div>
            <div className='grid grid-cols-3 py-[40px] px-[25px]'>
                <div className='relative'>
                    <img src={Rectangle} className='2xl:w-[31vw]' alt="" />

                    <div className='absolute pr-[11px] bottom-[118px] 2xl:bottom-[207px] flex flex-wrap justify-around gap-1'>
                        <img src={card21a} className='2xl:w-[12vw]' alt="" />
                        <img src={card21b} className='2xl:w-[12vw]' alt="" />
                        <div className='flex gap-[19px] 2xl:gap-[21px]'>
                            <img src={card21c} className='2xl:w-[5vw]' alt="" />
                            <img src={card21d} className='2xl:w-[5vw]' alt="" />
                        </div>
                        <div className='flex gap-[19px] 2xl:gap-[21px]'>
                            <img src={card21e} className='2xl:w-[5vw]' alt="" />
                            <img src={card21f} className='2xl:w-[5vw]' alt="" />
                        </div>

                    </div>
                    <div className='flex'>
                        <div className='absolute bottom-[30px] left-[12px] 2xl:left-[45px] 2xl:bottom-[65px]'>
                            <img src={card21g} className='2xl:w-[5vw]' alt="" />
                        </div>
                        <div className='absolute  bottom-[40px] left-[89px] 2xl:bottom-[103px] 2xl:left-[149px]'>
                            <h1 className='font-semibold'>WONDERFUL ARTWORK</h1>
                            <p>Created by Jacob Jones</p>
                        </div>
                    </div>

                </div>
                <div className='relative'>
                    <img src={Rectangle} className='2xl:w-[31vw]' alt="" />
                    <div className='absolute pr-[11px] bottom-[118px] 2xl:bottom-[188px] flex flex-wrap justify-around gap-1'>
                        <img src={card22a} className='2xl:w-[12vw]' alt="" />
                        <img src={card22b} className='2xl:w-[12vw]' alt="" />
                        <div className='flex gap-[19px] 2xl:gap-[21px] '>
                            <img src={card22c} className='2xl:w-[5vw] 2xl:mt-[20px]' alt="" />
                            <img src={card22d} className='2xl:w-[5vw] 2xl:mt-[20px]' alt="" />
                        </div>
                        <div className='flex gap-[19px] 2xl:gap-[21px] '>
                            <img src={card22e} className='2xl:w-[5vw] 2xl:mt-[20px]' alt="" />
                            <img src={card22f} className='2xl:w-[5vw] 2xl:mt-[20px]' alt="" />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='absolute bottom-[30px] left-[12px] 2xl:left-[45px] 2xl:bottom-[65px]'>
                            <img src={card22g} className='2xl:w-[5vw]' alt="" />
                        </div>
                        <div className='absolute  bottom-[40px] left-[89px] 2xl:bottom-[103px] 2xl:left-[149px]'>
                            <h1 className='font-semibold'>WONDERFUL ARTWORK</h1>
                            <p>Created by Jacob Jones</p>
                        </div>
                    </div>

                </div>
                <div className='relative'>
                    <img src={Rectangle} className='2xl:w-[31vw]' alt="" />
                    <div className='absolute pr-[11px] bottom-[118px] 2xl:bottom-[188px] flex flex-wrap justify-around gap-1'>
                        <img src={card23a} className='2xl:w-[12vw]' alt="" />
                        <img src={card23b} className='2xl:w-[12vw]' alt="" />
                        <div className='flex gap-[19px] 2xl:gap-[21px] 2xl:mt-[20px]'>
                            <img src={card23c} className='2xl:w-[5vw]' alt="" />
                            <img src={card23d} className='2xl:w-[5vw]' alt="" />
                        </div>
                        <div className='flex gap-[19px]'>
                            <img src={card23e} className='2xl:w-[5vw] 2xl:mt-[20px]' alt="" />
                            <img src={card23f} className='2xl:w-[5vw] 2xl:mt-[20px]' alt="" />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='absolute bottom-[30px] left-[12px] 2xl:left-[45px] 2xl:bottom-[65px]'>
                            <img src={card23g} className='2xl:w-[5vw]' alt="" />
                        </div>
                        <div className='absolute  bottom-[40px] left-[89px] 2xl:bottom-[103px] 2xl:left-[149px]'>
                            <h1 className='font-semibold'>WONDERFUL ARTWORK</h1>
                            <p>Created by Jacob Jones</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Top_collection;