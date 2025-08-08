import { Link } from "react-router-dom"
import { ProductData } from "../../data/product"
import { ExpertiseData } from "../../data/expertise"
import type { footerTypes } from "../../Types/productData"
import { companyData } from "../../data/company"
import { images } from "../../Types/images"
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { BiLogoLinkedin } from "react-icons/bi"

function Footer() {
  const location = 'https://www.google.com/maps/@4.0543873,9.6985381,17z?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D'
  return (
    <div className="flex  flex-col items-center bg-gray-200 md:bg-gray-200 md:flex-row justify-around p-5">
      <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-20">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-medium pb-2">Products</h1>
          {
            ProductData.map((item:footerTypes) =>(
              <Link className="text-sm font-small py-2 text-accent hover:text-primary" to={item.path}>{item.title}</Link>
            ))
          }
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-medium pb-2">Company</h1>
          {
            companyData.map((item:footerTypes) =>(
              <Link className="text-sm font-small py-2 text-accent hover:text-primary" to={item.path}>{item.title}</Link>
            ))
          }
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-medium pb-2">Expertise</h1>
          {
            ExpertiseData.map((item:footerTypes) =>(
              <Link className="text-sm font-small py-2 text-accent hover:text-primary" to={item.path}>{item.title}</Link>
            ))
          }
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-medium pb-2">Blog</h1>
          <Link className="text-sm font-small py-2 text-accent hover:text-primary" to={'/blog'}>Other locations</Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-5 md:gap-y-5 md:items-end">
        <Link to={'/'} className="max-w-[100px] md:max-w-[130px]">
          <img className="w-full" src={images.logo} alt="logo" />
        </Link>
        <Link to={location}>
            <img className="w-[200px] rounded-2xl shadow-2xl" src={images.map} alt="map" />
        </Link>
        <div className="flex gap-10">
          <FaFacebookF size={30} className="bg-secondary p-1 rounded-full text-white"  />
          <BiLogoLinkedin size={30} className="bg-secondary p-1 rounded-full text-white"/>
          <FaXTwitter size={30} className="bg-secondary p-1 rounded-full text-white" />
          <FaYoutube size={30} className="bg-secondary p-1 rounded-full text-white" />
        </div>
      </div>
      
    </div>
  )
}

export default Footer
