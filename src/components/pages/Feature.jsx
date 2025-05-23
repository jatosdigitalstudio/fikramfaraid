"use client"
import Image from "next/image";
import { FEATURE } from "@/lib/data";

export default function Feature() {
  return (
    <section className="relative flex items-center py-32 z-50">
        <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative text-left text-white px-6">
                    <h6 className="text-primer text-sm tracking-widest md:text-md mb-4 uppercase">
                        layanan hukum         
                    </h6>
                    <h1 className="text-3xl font-style md:text-4xl lg:text-6xl text-black font-medium mb-12">
                        Treat you like a Queen
                    </h1>
                    <Image 
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={500} 
                        height={500} 
                        alt="FF LAW" 
                    />
                </div>
                <div className="flex flex-col p-6 space-y-2">
                    {
                        FEATURE.map((item,idx) => (
                            <div className="flex flex-row justify-center items-center gap-4 bg-primer py-4 px-6 rounded-full" key={idx}>
                                <div className="flex-shrink-0 w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#D6A340] flex items-center justify-center mr-2">
                                    <Image
                                        src={item.icon || "/Icon-fflaw.png"}
                                        alt="FFLAW"
                                        width={62}
                                        height={62}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 text-white">
                                    <h6 className="font-style">{item.title}</h6>
                                    <p className="text-xs text-abumuda">{item.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  );
}

