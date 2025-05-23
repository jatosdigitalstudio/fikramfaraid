"use client"
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[100vh] mt-[-100px] bg-[#652126] flex items-center z-50">
        <div className="container mx-auto">
            <Image
                src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative max-w-4xl text-left text-white md:ml-12 px-6 md:px-24">
                <div>
                     <h1 className="text-3xl leading-[1.2] font-style md:text-6xl font-medium">
                        Mitra Hukum Strategis untuk Solusi yang Berkelanjutan
                    </h1>
                </div>
                <div>
                    <p className="font-text text-md md:text-lg my-4">
                        Pendampingan hukum inovatif, progresif, dan berintegritas.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2">
                    <Link href="/#inquiry" scroll className="bg-sekunder px-6 py-3 rounded-full">
                        Konsultasi Sekarang
                    </Link>
                    <Link href="/#about" scroll className="px-4 py-3 rounded-full">
                        Kenali selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
