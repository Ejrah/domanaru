import React from 'react';
import bgImage from '../assets/img/bg4.png';
function About() {
    console.log("Rendering About");
    return (
        <div
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="p-6 rounded-lg bg-white bg-opacity-90">
                    <h1 className="text-4xl font-bold mb-4 text-center">Judul Postingan</h1>
                    <p className="text-lg text-gray-800">
                        Ini adalah contoh konten untuk halaman postingan. Tambahkan konten yang relevan di sini.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
