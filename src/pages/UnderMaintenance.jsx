import React from 'react';
import errorImage from '../assets/img/heran.png';
import bgImage from '../assets/img/bg4.png';

const UnderMaintenance = () => {
    return (
        <div className="relative h-screen bg-cover bg-center font-times" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex justify-center items-center h-screen">
                    <div className="text-center">
                        <img
                            src={errorImage}
                            alt="Error Image"
                            className="w-1/3 max-w-sm mb-5 mx-auto"
                        />
                        <p className="text-2xl font-markin text-white">Error 69! Maaf tampilan webnya masih belum jadi, ownernya mager.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderMaintenance;
