import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-10">
      <div className='flex max-w-7xl mx-auto justify-between'>
        <div>
          <img src={logo} alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Services</h6>
          <div className='flex flex-col'>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <div className='flex flex-col'>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <div className='flex flex-col'>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer