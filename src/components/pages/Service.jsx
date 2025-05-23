'use client'
import Image from "next/image"
import { SERVICES } from "@/lib/data"

export default function Service() {
    return (
        <section className="relative py-28" id="service">
            <div className="mx-auto max-w-7xl z-30 p-6" >
                <div className="flex flex-col max-w-2xl  mb-4 md:mb-8">
                    <h1 className="text-3xl font-style md:text-4xl lg:text-6xl text-black font-medium mb-6">
                        Ruang Lingkup
                    </h1>
                    <p className="leading-[1.6] text-md">
                        Fikram Faraid & Co. selalu siap menangani berbagai permasalahan
                        hukum, dalam membela dan kepentingan hukum Klien baik di dalam
                        maupun luar pengadilan      
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                    SERVICES.map((item, idx) =>(
                        <div key={idx} className="flex h-32 justify-start items-end space-y-2 bg-sekunder py-4 px-4 md:p-6 transform transition-transform duration-300 hover:-translate-y-2 hover:bg-primer">
                            <h1 className="text-md text-white font-style font-medium">{item.title}</h1>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}