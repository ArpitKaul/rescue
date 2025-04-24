import { assets } from '../../assets/assets'
import './Headers.css'
const Header = () => {
  return (
    <div className='flex'>
      <div className='ml-16 mt-16'>
        <img className='w-[28rem]' src={assets.dog} alt="" />
      </div>
      <div className='w-[35rem]  mt-16'>
        <div className='flex'>
        <h1 className='text-6xl font-serif'> Help a Stray. Save a Life.</h1>
        {/* <img className='w-7 h-7 mt-3' src={assets.logo1} alt="" /> */}
        </div>
        <p className='mt-10 text-2xl ml-32'>Join a movement of compassion.
        Help rescue and protect stray animals through quick reporting and local support. Our mission is to ensure every injured or abandoned animal gets the care it deserves — one life-saving action at a time.</p>
      </div>
    </div>
  )
}
export default Header
