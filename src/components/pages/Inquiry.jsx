"use client"
import Image from "next/image";
import { useState } from "react";

export default function Inquiry() {
    const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    subjek: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to API or email service)
    alert("Konsultasi berhasil dikirim!");
  };
  return (
    <section className="relative py-20 bg-[#652126] flex items-center z-50 overflow-hidden" id="inquiry">
        <div className="container max-w-7xl mx-auto">
            <Image
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="background"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div className="relative text-white px-6 md:py-24 md:px-12 ">
                    <h1 className="text-3xl font-style md:text-4xl text-maroon font-medium mb-6">
                        Butuh Bantuan Hukum? Konsultasikan Sekarang.

                    </h1>
                    <p className="leading-[1.6] text-sm mb-4">
                        Kami siap mendengar dan membantu Anda. Sampaikan permasalahan Anda kepada tim kami, 
                        dan kami akan merespons secepatnya dengan solusi hukum yang relevan dan profesional.
                    </p>
                </div>
                <div className="relative w-full bg-sekunder text-white px-6">
                    <div className="max-w-xl mx-auto px-4 py-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                            <label className="block text-sm font-medium mb-1">Nama Lengkap *</label>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-medium mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-medium mb-1">Telepon / WhatsApp *</label>
                            <input
                                type="tel"
                                name="telepon"
                                value={formData.telepon}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            </div>
                            <div>
                            <label className="block text-sm font-medium mb-1">Uraian Permasalahan *</label>
                            <textarea
                                name="pesan"
                                value={formData.pesan}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            </div>
                            <button
                            type="submit"
                            className="w-full bg-primer text-white py-2 rounded-lg hover:bg-black transition"
                            >
                            Kirim Konsultasi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
