import React, { useState } from 'react';
import bgImage from '../assets/img/bg4.png';

const Post = () => {
    const [activeSection, setActiveSection] = useState(null); // Default : Tidak ada section yang aktif secara default

    const handleClick = (id) => {
        setActiveSection(id); // State section aktif
    };

    const getContent = (id) => {
        switch (id) {
            case 'section1':
                return {
                    title: 'Holy Grail War',
                    text: 'The Holy Grail War (聖杯戦争, Seihai Sensō) is a battle royale where Masters, usually skilled Magi, summon powerful Heroic Spirits called Servants. These pairs fight until only one remains to claim the Holy Grail, a legendary artifact said to grant any wish.'
                };
            case 'section2':
                return {
                    title: 'Zero Requiem',
                    text: 'The Zero Requiem (ゼロ・レクイエム, Zero Rekuiemu) is a plan orchestrated by Lelouch after he assumes the Britannian throne from his father and is carried out with the assistance of Suzaku and C.C.'
                };
            case 'section3':
                return {
                    title: 'Phantom Thieves',
                    text: 'The Phantom Thieves of Hearts (心の怪盗団, Kokoro no kaitou-dan)?, also known simply as the Phantom Thieves (怪盗団, Kaitou-dan)?, the Phantom Thieves are devoted to "stealing" corrupt hearts, usually of adults in positions of power, in order to reform society.'
                };
            case 'section4':
                return {
                    title: 'The Rumbling',
                    text: 'The Rumbling (地鳴らし Jinarashi?) was a cataclysmic event involving Wall Titans marching across the earth, destroying all life upon it.For over a century, it was a key deterrence factor for the Subjects of Ymir on Paradis Island until the year 854 when Eren Yeager unhardened the Walls, freed the Wall Titans, and began the Rumbling.'
                };
            case 'section5':
                return {
                    title: 'Content for Section 5',
                    text: 'The aftermath of the Holy Grail War is often filled with tension and conflict among the remaining participants.'
                };
            case 'section6':
                return {
                    title: 'Content for Section 6',
                    text: 'A look at the different factions involved in the Holy Grail War and their motivations for fighting.'
                };
            case 'section7':
                return {
                    title: 'Content for Section 7',
                    text: 'This section discusses notable battles and turning points during the Holy Grail War.'
                };
            case 'section8':
                return {
                    title: 'Content for Section 8',
                    text: 'An analysis of the artifacts and items that play crucial roles in the battles of the Holy Grail War.'
                };
            case 'section9':
                return {
                    title: 'Content for Section 9',
                    text: 'Exploring the psychological aspects and dilemmas faced by the participants in the Holy Grail War.'
                };
            case 'section10':
                return {
                    title: 'Content for Section 10',
                    text: 'The legacy of the Holy Grail War and its impact on the world and future generations.'
                };
            default:
                return {
                    title: 'No Content Available',
                    text: 'This section is currently empty.'
                };
        }
    };

    console.log("Rendering Post");
    return (
        <div className="relative h-screen bg-cover bg-center font-times" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 border-4 border-[#8c6723] rounded-lg p-8 mx-10 my-20 max-w-3xl w-full shadow-lg">
                    {/* Nav Angka */}
                    <div className="flex justify-center mb-6">
                        {Array.from({ length: 10 }, (_, index) => (
                            <div
                                key={index}
                                className="cursor-pointer text-[#8c6723] mx-2 text-3xl border-t-2 border-b-2 border-[#8c6723] p-2"
                                onClick={() => handleClick(`section${index + 1}`)}
                            >
                                {index === 9 ? '10' : `0${index + 1}`} {/* Menampilkan angka 10 tanpa '0' */}
                            </div>
                        ))}
                    </div>

                    {/* Konten yang ditampilkan di bawah barisan angka */}
                    <div className="text-center mt-8">
                        {activeSection && (
                            <div>
                                {/* Ambil konten berdasarkan activeSection */}
                                {(() => {
                                    const content = getContent(activeSection);
                                    return (
                                        <>
                                            <h2 className="text-5xl font-bold text-[#8c6723]">{content.title}</h2>
                                            <p className="text-gray-800 mt-4 leading-relaxed font-sans">{content.text}</p> {/* Tambah jarak dengan mt-4 */}
                                        </>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
