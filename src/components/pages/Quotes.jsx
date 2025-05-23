"use client"
import Image from "next/image";

export default function Quotes() {
  return (
    <section className="relative h-[80vh] bg-[#652126] flex items-center z-50">
        <div className="container mx-auto">
            <Image
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="grid grid-cols-2">
                <div className=""></div>
                <div className="relative bg-sekunder text-left text-white px-6 md:p-24 ">
                    <h6 className="text-cream text-sm tracking-widest md:text-md mb-4 uppercase">
                        filosofi         
                    </h6>
                    <h1 className="text-3xl leading-[1.2] font-style md:text-4xl font-bold">
                        “Bertindaklah seakan dasar-dasar tindakanmu
                        akan menghasilkan sebuah hukum untuk seluruh dunia.”
                    </h1>
                    <p className="font-text text-lg md:text-lg my-4">
                        Immanuel Kant
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
