'use client'
import Image from "next/image"
import { TEAM } from "@/lib/data"

export default function Team() {
    return (
        <section className="relative bg-primer py-24" id="team">
            <div className="mx-auto max-w-7xl z-30 p-6" >
                <div className="flex flex-col justify-center items-center text-center mx-auto max-w-2xl  mb-4 ">
                    <h1 className="text-3xl font-style md:text-4xl lg:text-6xl text-white font-medium ">
                        Our Best Team
                    </h1>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                    TEAM.map((item, idx) =>(
                        <div key={idx} className="flex flex-col justify-center items-center space-y-2 py-4 px-6 md:p-6 ">
                            <Image 
                                src={item.image}
                                width={150}
                                height={150}
                                alt={item.name}
                            />
                            <h1 className="text-md text-white font-style font-medium">{item.name}</h1>
                            <p className="text-sm text-tersier">{item.title}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}