import Image from 'next/image'

import Photo from '../images/foto.webp'
import { Email, GitHub, LinkedIn } from './svgs/Index'

export default function HomePage() {
  return (
    <section>
      <div className="pt-16 flex flex-col h-screen justify-center items-center gap-10">
        <div>
          <h1>Hello! I'm</h1>
          <h1>Matheus</h1>
        </div>
        <p>
          Venha solucionar seus problemas com SITES, LANDING PAGES e muito mais!
        </p>
        <div className="flex flex-col">
          <button>saiba mais!</button>
          <button>contate-me</button>
        </div>
        <div className="rounded-full w-[218px] h-[218px] bg-gradient-to-br from-lightBlue to-purple flex justify-center items-center">
          <Image src={Photo} alt="photo" className="rounded-full w-[214px] h-[214px]" />
        </div>
        <div className="flex w-full justify-center items-center gap-[52px]">
          <a href="https://github.com/fnmatheus" target="_blank">
            <GitHub className="text-[50px]" />
          </a>
          <a href="mailto:nasc.matheusfrancisco@gmail.com" target="_blank">
            <Email className="text-[50px]" />
          </a>
          <a href="https://www.linkedin.com/in/fnmatheus/" target="_blank">
            <LinkedIn className="text-[50px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
