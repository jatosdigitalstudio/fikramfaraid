import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/data";

export default function Footer() {
    return (
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto py-4 md:py-8 px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-6 py-8 mb-12">
            <div className="flex flex-col mb-2 max-w-md space-y-4">
                <Link href="/" >
                    <Image src="/Logo-fflaw-white.png" width={250} height={100} alt='Fikram Faraid & Co' />
                </Link>
                <div className="flex flex-row mt-6 gap-2">
                  <ul className="space-y-2 text-md ">
                    <li><Link href="/" className="text-abumuda">0811-988-097 </Link></li>
                    <li><Link href="/" className="text-abumuda">hallo@fflaw.id</Link></li>
                    <li><Link href="/" className="text-abumuda">Senin - Jumat | 09:00 - 17:00</Link></li>
                    <li><Link href="/" className="text-abumuda">
                      Jl. Moch. Kahfi II Nomor 28a, RT 001 RW 004, <br />
                      Kelurahan Ciganjur, Kecamatan Jagakarsa, <br />
                      Jakarta Selatan. DKI Jakarta 12620
                    </Link></li> 
                  </ul>
                </div>
            </div>
            
            <div className="grid grid-rows md:grid-cols-2 gap-8">
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
                <h3 className="font-style text-white text-xl mb-4">Services</h3>
                <ul className="space-y-2 text-md ">
                    {
                      SERVICES.map((item,idx)=>(
                        <li key={idx}><Link href="/" className="text-abumuda">{item.title}</Link></li>
                      ))
                    }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#181818] text-abumuda py-4 text-center text-sm md:text-md">
          <p>© 2025 Fikram Faraid & Co. All rights reserved.</p>
        </div>
      </footer>
    );
  }