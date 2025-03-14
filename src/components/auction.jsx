import React from 'react'
import Subtract from "../assets/images/Subtract.png"
import Ellipse from "../assets/images/Ellipse.png"
import Card5_pic from "../assets/images/Card5_pic.png"
import Price from "../assets/images/Price.png"
import card13pic from '../assets/images/card13pic.png'
import card14pic from '../assets/images/card14pic.png'
import card15pic from '../assets/images/card15pic.png'
import card16pic from '../assets/images/card16pic.png'
import card17pic from '../assets/images/card17pic.png'
import card18pic from '../assets/images/card18pic.png'
import card19pic from '../assets/images/card19pic.png'
import card20pic from '../assets/images/card20pic.png'
import { useState, useEffect } from "react";






export const Auction = () => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMiutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const deadline = 'December, 31 ,2025'

    const gettime = () => {
        const time = Date.parse(deadline) - Date.now()
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor(time / (1000 * 60 * 60) % 24))
        setMiutes(Math.floor(time / (1000 * 60) % 60))
        setSeconds(Math.floor(time / (1000) % 60))
    }

    useEffect(() => {
        const interval = setInterval(() => gettime(deadline), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className='py-[50px] px-[35px]'>
                <h1 className='text-4xl'>Auction</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 pt-[40px] px-[25px]'>
                {/*card13 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card13pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div className='font-roboto'>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div className='font-roboto'>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div className='font-roboto'>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>


                </div>
                {/*card14 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card14pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>

                </div>
                {/*card15 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card15pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>

                </div>
                {/*card16 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card16pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>

                </div>
                {/*card17 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card17pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>

                </div>
                {/*card18 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card18pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>


                </div>
                {/*card19 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card19pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px] bg-white/70 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>

                </div>
                {/*card20 */}
                <div className='relative'>
                    <img src={Subtract} className='2xl:w-[23vw]' alt="" />
                    <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                        <div>
                            <img src={Ellipse} alt="" />
                        </div>
                        <div className='mt-[2px] ml-[4px] 2xl:mb-[125px] 2xl:ml-[4px]'>
                            <h1>STELLA NOVA</h1>
                            <p>@Stella Nova</p>
                        </div>
                    </div>
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[130px] 2xl:left-[23px]'>
                        <img src={card20pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute flex gap-[3px] top-[231px] left-[96px]  bg-white/60 shadow-lg py-[10px] px-[4px] 2xl:px-[8px] 2xl:top-[316px] 2xl:left-[156px] rounded-md'>
                        <div>
                            <p className='font-roboto'>{days < 10 ? "0" + days : days}:</p>
                        </div>
                        <div>
                            <p>{hours < 10 ? "0" + hours : hours}:</p>
                        </div>
                        <div>
                            <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
                        </div>
                        <div>
                            <p>{seconds < 10 ? "0" + seconds : seconds}</p>
                        </div>
                    </div>

                </div>




            </div>

            <div className='flex justify-center items-center py-[50px] '>
                <button className="px-6 w-[228px] h-[58px] py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#FF9292] to-[#FD0000] hover:opacity-90">
                    <a className='font-semibold' href="">Explore More</a>
                </button>

            </div>

        </>
    )
}
export default Auction;
