import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-[#181818]">
        <div className="mx-auto py-4 md:py-8 px-6 md:px-28">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="flex flex-col mb-2 max-w-md space-y-4">
                <Link href="/" >
                    <Image src="/Logo-fflaw-white.png" width={250} height={100} alt='Fikram Faraid & Co' />
                </Link>
                <p className="text-md text-abumuda">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl aliquet sed leo sollicitudin 
                            donec magna. Tellus eu ullamcorper donec eget.
                </p>
                <div className="flex flex-row mt-6 gap-2">
                    <Link className="bg-red p-2 rounded-full" href="www.facebook.com">
                        {/* <RiFacebookCircleFill size={32} className= text-abumuda" /> */}
                    </Link>
                    <Link className="bg-red p-2 rounded-full" href="https://www.instagram.com/">
                        {/* <RiInstagramFill size={32} className= text-abumuda" /> */}
                    </Link>
                    <Link className="bg-red p-2 rounded-full" href="https://www.linkedin.com/">
                        {/* <RiLinkedinBoxFill size={32} className= text-abumuda" /> */}
                    </Link>
                </div>
            </div>
            
            <div className="grid grid-rows md:grid-cols-3 gap-8">
                <div>
                <h3 className="font-style text-white text-xl mb-4">Company</h3>
                  <ul className="space-y-2 text-md ">
                      <li><Link href="/#about" className="text-abumuda">About Us</Link></li>
                      <li><Link href="/#service" className="text-abumuda">Services</Link></li>
                      <li><Link href="/#team" className="text-abumuda">Team</Link></li>
                      <li><Link href="/#client" className="text-abumuda">Client</Link></li>
                  </ul>
                </div>

                <div>
                <h3 className="font-style text-white text-xl mb-4">Practice Areas</h3>
                <ul className="space-y-2 text-md ">
                    <li><Link href="/" className="text-abumuda">Real Estate Law</Link></li>
                    <li><Link href="/" className="text-abumuda">Finance Law</Link></li>
                    <li><Link href="/" className="text-abumuda">Transportation Law</Link></li>
                    <li><Link href="/" className="text-abumuda">Corporate Law</Link></li>
                    <li><Link href="/" className="text-abumuda">Maritim Law</Link></li>
                    <li><Link href="/" className="text-abumuda">Insurance Law</Link></li>
                </ul>
                </div>

                <div>
                <h3 className="font-style text-white text-xl mb-4">Contact Us</h3>
                <ul className="space-y-2 text-md ">
                    <li><Link href="/" className="text-abumuda">+6221 22441337 </Link></li>
                    <li><Link href="/" className="text-abumuda">+6221 22442642 </Link></li>
                </ul>
                </div>
            </div>
          </div>

  
         
        </div>
        <div className="bg-black text-abumuda py-4 text-center text-sm md:text-md">
          <p>© 2025 Fikram Faraid & Co. All rights reserved.</p>
        </div>
      </footer>
    );
  }