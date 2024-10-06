import React from 'react';
import bg1 from '../assets/img/bg1.png';
import bg2 from '../assets/img/bg2.jpg';

function Home() {
    console.log("Rendering Home");
    return (
        <div>
            {/* Bagian pertama */}
            <div className="relative h-screen">
                <img src={bg1} alt="Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                    <h1 className="text-8xl font-bold mb-2 font-montserrat">
                        𝐓𝐇𝐀𝐓 𝐑𝐀𝐍𝐃𝐎𝐌 𝐆𝐔𝐘
                    </h1>
                    <p className="text-xl italic font-ptSerif">
                        "Seorang pelajar dari jurusan <span className="italic text-yellow-400">𝗥𝗣𝗟</span> yang malah menemukan kesenangannya di dunia blogging"
                    </p>
                </div>
            </div>

            {/* Bagian kedua */}
            <div className="relative h-screen">
                <img src={bg2} alt="Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-between text-white bg-black bg-opacity-50 px-10">
                    <p className="text-base font-montserrat max-w-2xl text-right">
                        Selamat datang di personal websitenya Damar — ya, sudah jelas, kan <b>Maheswara Damar</b>! Singkat
                        aja, website ini hadir sebagai ruang media untuk menuangkan kreativitas Damar sebagai anak 𝗥𝗣𝗟 yang lagi
                        𝘴𝘶𝘯𝘵𝘶𝘬, 𝘢𝘸𝘸
                    </p>
                    <h2 className="text-6xl font-bold font-montserrat ml-10 mb-4">Against Uncertainties</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
