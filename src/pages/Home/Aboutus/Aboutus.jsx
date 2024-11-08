import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const Aboutus = () => {
    return (
        <div className="hero bg-base-200 my-10 p-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className='w-1/2 relative'>
                    <img className='rounded-xl w-4/5' src={img2} alt="" />
                    <img className='border-8 rounded-lg border-white absolute  w-2/5 -bottom-14 right-5' src={img1} alt="" />
                </div>
                <div className='w-1/2 space-y-5'>
                   <h3 className='text-[#FF3811] font-bold text-xl'>About Us</h3>
                   <h1 className='text-5xl font-semibold'>We are qualified & of experience in this field</h1>
                   <p className='text-[#737373] text-md'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                   <p className='text-[#737373] text-md' >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                   <button className='btn bg-[#FF3811] text-white'>Get more info</button>
                </div>
            </div>
        </div>
    )
}

export default Aboutus