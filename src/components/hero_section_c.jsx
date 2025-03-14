import React from 'react'
import Subtract from "../assets/images/Subtract.png"
import Card1pic from "../assets/images/Card1pic.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"
import Card5_pic from "../assets/images/Card5_pic.png"
import Card6_pic from "../assets/images/Card6_pic.png"
import Card7_pic from "../assets/images/Card7_pic.png"
import Card8_pic from "../assets/images/Card8_pic.png"
import Card9_pic from "../assets/images/Card9_pic.png"
import Card10_pic from "../assets/images/Card10_pic.png"
import Card11_pic from "../assets/images/Card11_pic.png"
import Card12_pic from "../assets/images/Card12_pic.png"


export const Hero_section_c = () => {
    return (
        <>
            <div className='flex justify-between items-center px-[40px] mt-[50px]'>
                <div className=' '>
                    <h1 className='font-roboto text-4xl'>Trending NFT'S</h1>
                </div>
                <div className='mr-[10px]'>
                    <button className=' w-[213] h-[50px] bg-[#fff] border-2 border-[#FE0101] rounded pl-[16px] pt-[10px] pr-[16px] pb-[10px] mt-[35px] text-[#FE0101]'><a href="">Last 30 Minutes</a></button>
                </div>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-4 gap-4 pt-[40px] 2xl:pl-[20px] 2xl:gap-0 '>
                {/*card5 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[127px] 2xl:left-[23px]'>
                        <img src={Card5_pic} className='w-[279px] 2xl:w-[20vw] rounded-[14px] ' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px] '>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card6 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card6_pic} className='w-[279px] 2xl:w-[20vw] ' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px] '>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card7 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card7_pic} className='w-[279px] 2xl:w-[20vw] rounded-[14px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card8 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card8_pic} className='w-[279px] 2xl:w-[20vw] rounded-[14px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card9 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card9_pic} className='w-[279px] 2xl:w-[20vw] rounded-[14px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card10 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card10_pic} className='w-[279px] 2xl:w-[20vw] ' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card11 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card11_pic} className='w-[279px] 2xl:w-[20vw] rounded-[14px]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>
                {/*card12 */}
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
                    <div className='absolute top-[91px] left-[16px] 2xl:top-[132px] 2xl:left-[23px]'>
                        <img src={Card12_pic} className='w-[279px] 2xl:w-[20vw]' alt="" />
                    </div>
                    <div className='absolute z-[1] bottom-[25px] left-[160px] 2xl:bottom-[38px] 2xl:left-[260px]'>
                        <img src={Price} alt="" />
                    </div>
                    <div>
                        <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[38px] left-[30px] 2xl:bottom-[50px] 2xl:left-[48px]'>BUY</button>
                    </div>
                </div>

            </div>


            {/*<div className="flex flex-wrap gap-6">
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 1</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 2</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 3</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 4</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 5</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 6</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 7</div>
            <div className="w-[calc(25%-16px)] bg-white p-4 shadow rounded">Card 8</div>
            </div>
            */}
        </>
    )
}
export default Hero_section_c;
