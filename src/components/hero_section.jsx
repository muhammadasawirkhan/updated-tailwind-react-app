import React from 'react';
import Left from "../assets/images/Left.png";
import Right from "../assets/images/Right.png";
import Card6_pic from "../assets/images/Card6_pic.png"
import Card12_pic from "../assets/images/Card12_pic.png"
import Card10_pic from "../assets/images/Card10_pic.png"
import Subtract from "../assets/images/Subtract.png"
import Ellipse from "../assets/images/Ellipse.png"
import Price from "../assets/images/Price.png"

export const Hero_section = () => {
    return (
        <>
            <div className=''>
                <div className='text-center mt-[50px]'>
                    <h1 className='text-6xl'>DISCOVER, CREATE &<br /> SELL ARTWORKS.</h1>
                </div>
                <div className='text-center mt-[20px]'>
                    <p className='font-roboto'>Discover and trade unique digital art pieces on our NFT website,<br /> where creativity meets blockchain technology.</p>
                </div>
                <div className='flex justify-between max-w-[1950px]'>
                    <div className='mt-[225px] '>
                        <img src={Left} className='min-w-[450px] w-[450px]' alt="" />
                    </div>
                    
                    
                    {/*carda*/}
                    
                    
                    <div className='relative right-[75px] z-[-1] skew-y-[3deg] max-w-[20vw] min-w-[20vw]'>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[110px] left-[26px]'>
                            <img src={Card6_pic} className='w-[279px] ' alt="" />
                        </div>
                        <div className='absolute z-[1] bottom-[295px] left-[170px] '>
                            <img src={Price} alt="" />
                        </div>
                        <div>
                            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[308px] left-[30px] '>BUY</button>
                        </div>
                    </div>

                    {/*carda*/}
                    
                    
                    <div className='relative right-[295px] z-[-1] skew-y-[3deg] max-w-[20vw] min-w-[20vw]'>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[110px] left-[26px]'>
                            <img src={Card6_pic} className='w-[279px] ' alt="" />
                        </div>
                        <div className='absolute z-[1] bottom-[295px] left-[170px] '>
                            <img src={Price} alt="" />
                        </div>
                        <div>
                            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[308px] left-[30px] '>BUY</button>
                        </div>
                    </div>
                    {/*cardb*/}
                    <div className='relative top-[9px] right-[460px] max-w-[20vw] min-w-[20vw]'>
                        <img src={Subtract} alt="" />
                        <div className='flex absolute bottom-[340px]  left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[110px] left-[26px]'>
                            <img src={Card12_pic} className='w-[279px] ' alt="" />
                        </div>
                        <div className='absolute z-[1] bottom-[295px] left-[170px] '>
                            <img src={Price} alt="" />
                        </div>
                        <div>
                            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[308px] left-[30px] '>BUY</button>
                        </div>
                    </div>
                    {/*cardc*/}
                    <div className='relative right-[655px] z-[-1] skew-y-[-3deg] max-w-[20vw] min-w-[20vw]' >
                        <img src={Subtract} alt="" />
                        <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[110px] left-[26px] '>
                            <img src={Card10_pic} className='w-[279px]  ' alt="" />
                        </div>
                        <div className='absolute z-[1] bottom-[295px] left-[170px] '>
                            <img src={Price} alt="" />
                        </div>
                        <div>
                            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[308px] left-[30px] '>BUY</button>
                        </div>
                    </div>
                    {/*cardc*/}
                    <div className='relative right-[840px] z-[-2] skew-y-[-3deg] max-w-[20vw] min-w-[20vw]' >
                        <img src={Subtract} alt="" />
                        <div className='flex absolute bottom-[340px] z-[1] left-[25px]'>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div className='mb-[275px] ml-[4px]'>
                                <h1>STELLA NOVA</h1>
                                <p>@Stella Nova</p>
                            </div>
                        </div>
                        <div className='absolute top-[110px] left-[26px] '>
                            <img src={Card10_pic} className='w-[279px]  ' alt="" />
                        </div>
                        <div className='absolute z-[1] bottom-[295px] left-[170px] '>
                            <img src={Price} alt="" />
                        </div>
                        <div>
                            <button className='w-[56px] text-[#fff] h-[36px] rounded absolute bg-gradient-to-r from-[#FD0000] to-[#FF9292] z-[1] bottom-[308px] left-[30px] '>BUY</button>
                        </div>
                    </div>
                    <div className='mt-[220px] absolute left-[1453px]'>
                        <img src={Right} className='min-w-[450px] w-[450px] ' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero_section;
