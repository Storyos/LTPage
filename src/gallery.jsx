import React, { useState,useEffect } from "react";
import Header from "./header";
import LotteImage from "./api/lotte_image.json"

function Gallery() {
    // const [lotteImages, setLotteImages] = useState([]);
    

    return (
        <>
            <div className="min-h-screen p-6 bg-giants-navy font-custom">
                <Header/>
                <main className="space-y-8">
                    <section id="gallery" className="p-6 m-2 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800">사진 갤러리</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {LotteImage.map((image, index) => (
                                <div key={index} className="w-full h-48">
                                    <img src={image} alt={`Gallery image ${index + 1}`} className="object-fill w-full h-full rounded-lg"/>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Gallery;
