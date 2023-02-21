import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between sm:items-start bg-white text-secondary px-4 sm:px-36 py-8 space-y-4 sm:space-y-0">
      <div className="w-full sm:max-w-[40%]">
        <p className="text-xl font-bold font-chakra">About Us</p>
        <p>Our products provide world-class protection and value to both new and used automobile buyers. One can find wide range of services which help to the car to retain the same superb look it had when you bought it, and this helps to maintain its value when you sell it.</p>
      </div>
      <div className="flex flex-col space-y-4 justify-between max-w-[40%]">
        <p className="text-xl font-bold font-chakra">Contact Info</p>
        <p>+91-8851-766763</p>
        <div className="flex space-x-2 font-bold"><a href="https://www.facebook.com/profile.php?id=100088306002766"><FacebookIcon /></a> <a href="https://www.instagram.com/gotdetailings/"><InstagramIcon /></a></div>
        <NavLink className="underline" to="/privacy-policy">Privacy Policy</NavLink>
      </div>
    </div>
  )
}
