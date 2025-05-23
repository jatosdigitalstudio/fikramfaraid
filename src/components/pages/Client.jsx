import Image from "next/image"


export default function Client() {
    return (
        <section className="flex justify-center items-center py-28" id="client">
            <div className="container max-w-7xl mx-auto">
                <div className="realtive flex flex-col md:flex-row bg-abumuda justify-center items-center">
                    <div className="md:px-12">
                        <Image 
                            src="https://images.pexels.com/photos/8112186/pexels-photo-8112186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            width={600} 
                            height={600} 
                            alt="FF LAW" 
                        />
                    </div>
                    <div className="flex flex-col w-full mb-8 left-0 p-6 md:px-24 md:py-12">
                        <h6 className="text-primer text-sm tracking-widest md:text-md mb-4 uppercase">
                            Riwayat pekerjaan       
                        </h6>
                        <h1 className="text-3xl font-style md:text-4xl text-maroon font-medium mb-4">
                            Dipercaya oleh Klien Terkemuka
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <ul className="">
                                {
                                    CLIENT1.map((item,idx) => (
                                        <li key={idx}>{item}</li>
                                    ))
                                }
                            </ul>
                            <div className="space-y-4">
                                {
                                    CLIENT2.map((item,idx) => (
                                        <div className="">
                                            <h6 className="uppercase font-bold">{item.title}</h6>
                                            <ul>
                                                {item.client.map((cl,idx) =>(
                                                    <li key={idx}>{cl}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CLIENT1 = ["PT. GUNADI PUTRA NUSANTARA",
"PT. GUNADI TRANS NUSANTARA",
"PT. ALMAS SATRIA PERKASA",
"PT. ARYASATYA ALMAS PERSADA",
"PT. PRAJA GUPTA",
"PT. BONCENG INDONESIA",
"PT. SWA NUSA MULTIMEDIA",
"PT. SWA NUSA MARITIM",
"PT. SWA NUSA MIXINDO",
"PT. BARUNA WIRA DHARMA",
"PT. PROSYS BANGUN PERSADA",
"PT. SURYA MANDIRI LOGISTIK",
"PT. INDO KAYA ENERGI",
"PT. NESINDO ENERGI",
"PT. NESINDO ENERGI WATU",
"PT. VISI WISATA UNIVERSAL",
"PT. LEGALINDO BERKAH ABADI",
"PT. TIDAR NUSANTARA ABADI",
"PT. ZIGITAL INOVASI INDONESIA",]

const CLIENT2 = [
    {
        title: "Personal Retainer",
        client: [
            "MAHFUZ SIDIK (Sekjen Partai Gelora)",
            "MAYJEND TNI (PURN). R. GAUTAMA WIRANEGARA S.E.",
            "NOFEL SALEH HILABI",
            "MUHAMMAD HARRIFAR SYAFAR",
            "IRVAN MAULANA",
        ]
    },
    {
        title: "Citra Group",
        client: [
            "PT. CITRA MEGA NUSANTARA",
            "PT. CITRA AKBAR NUSANTARA",
        ]
    },
    {
        title: "Sabika Group",
        client: [
            "PT. SABIKA HOTEL INDONESIA",
            "PT. PANGAN NUSANTARA",
        ]
    }
]