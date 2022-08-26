import React from "react"
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-neutral-100 py-8 text-neutral-700 ">
      <div className="container flex flex-row justify-center">
        <a className="mr-5">Copyright {currentYear}</a>
        <a href="https://www.linkedin.com/in/erika-raquel-gutierrez-aguilar-a0152b115" className="contact linkedin mr-5">
          <AiFillLinkedin className="icon flex justify-center text-2xl" />
        </a>

        <a href="https://wa.me/528444598594?text=Hola!%20Raquel%20,%20buen%20día!." className="contact whatsapp">
          <AiOutlineWhatsApp className="icon flex justify-center text-2xl" />
        </a>
      </div>
    </footer>
  )
}

export default Footer