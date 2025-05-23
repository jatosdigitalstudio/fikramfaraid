import Image from "next/image"


export default function About() {
    return (
        <section className="flex justify-center items-center px-6 py-32" id="about">
            <div className="container max-w-7xl mx-auto">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 place-items-center "> */}
                <div className="realtive flex flex-col md:flex-row bg-abumuda justify-center items-center">
                    <div className="flex flex-col w-full mb-8 left-0 p-6 md:px-24 md:py-20">
                        <h6 className="text-primer text-sm tracking-widest md:text-md mb-4 uppercase">
                            tentang kami         
                        </h6>
                        <h1 className="text-3xl font-style md:text-4xl lg:text-6xl text-maroon font-medium mb-6">
                            Fokus pada Solusi, Bukan Masalah
                        </h1>
                        <p className="leading-[1.6] text-sm mb-4">
                            Fikram Faraid & Co. menyediakan layanan hukum yang inovatif di
                            berbagai bidang praktik dengan fokus komersial yang unik. Fikram Faraid
                            & Co. berusaha untuk memahami kekhawatiran Klien dan menawarkan
                            layanan Terbaik.       
                        </p>
                        <p className="leading-[1.6] text-sm">
                            Para Pengacara Fikram Faraid & Co. selalu memberi nilai pada pekerjaan
                            dan berorientasi pada hasil. Fikram Faraid & Co. telah menempa
                            pengalaman dan membangun reputasi untuk mencapai kepentingan
                            terbaik Klien.     
                        </p>
                    </div>
                    <div className="md:px-12">
                        <Image 
                            src="https://images.unsplash.com/photo-1676181739678-47d76dc38a87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            width={600} 
                            height={600} 
                            alt="FF LAW" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}