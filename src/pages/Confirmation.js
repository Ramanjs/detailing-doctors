import {useLocation} from "react-router-dom"
import { Helmet } from "react-helmet"

export default function Confirmation() {
  const { state } = useLocation()

  return (
    <div className="w-full">
      <Helmet>
        <title>Detailing Doctors | Contact Us</title>
        <meta name="description" content="The premium car detailing studio"/>
        <script>
          window.dataLayer = (window.dataLayer || [])
          function gtag(){dataLayer.push(arguments)}
          gtag('event', 'conversion', {'send_to': 'AW-852817015/ooQaCNeZnI4YEPfo05YD'})
        </script>
      </Helmet>
      <div className="text-white min-h-screen flex flex-col justify-center">
        <h1 className="font-chakra text-5xl font-semibold text-center my-4">{state.heading}</h1>
        <p className="text-xl text-center max-w-screen-sm mx-auto my-8">{state.content}</p>
      </div>
    </div>
  )
}
