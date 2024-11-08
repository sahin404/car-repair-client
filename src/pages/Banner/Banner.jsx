import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={img1}
                    className="w-full" />
                <div className='absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]0'>
                    <div className='space-y-5'>
                        <h1 className='text-6xl font-bold text-white w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='w-1/2 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn border text-black border-[#FF3811]'>Contact Us</button>
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-5 right-5 flex justify-end gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={img2}
                    className="w-full" />
                    <div className='absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]0'>
                    <div className='space-y-5'>
                        <h1 className='text-6xl font-bold text-white w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='w-1/2 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn border text-black border-[#FF3811]'>Contact Us</button>
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-5 right-5 flex justify-end gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={img3}
                    className="w-full" />
                    <div className='absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]0'>
                    <div className='space-y-5'>
                        <h1 className='text-6xl font-bold text-white w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='w-1/2 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn border text-black border-[#FF3811]'>Contact Us</button>
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-5 right-5 flex justify-end gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={img4}
                    className="w-full" />
                    <div className='absolute flex items-center pl-10 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]0'>
                    <div className='space-y-5'>
                        <h1 className='text-6xl font-bold text-white w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='w-1/2 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className='btn bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn border text-black border-[#FF3811]'>Contact Us</button>
                        </div>
                    </div>

                </div>
                <div className="absolute bottom-5 right-5 flex justify-end gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle text-white bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Banner