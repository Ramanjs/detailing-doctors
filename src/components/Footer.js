import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start bg-white text-secondary px-2 sm:px-36 py-8">
      <div className="max-w-[40%]">
        <p className="text-xl font-bold font-chakra">About Us</p>
        <p>Our products provide world-class protection and value to both new and used automobile buyers. One can find wide range of services which help to the car to retain the same superb look it had when you bought it, and this helps to maintain its value when you sell it.</p>
      </div>
      <div className="flex flex-col space-y-4 justify-between max-w-[40%]">
        <p className="text-xl font-bold font-chakra">Contact Info</p>
        <p>+91 1234567891</p>
        <div className="flex space-x-2 font-bold"><FacebookIcon /> <InstagramIcon /></div>
      </div>
    </div>
  )
}
