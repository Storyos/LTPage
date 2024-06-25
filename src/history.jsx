import React, { useEffect } from "react";
import Header from "./header";
import { useNavigate } from "react-router-dom";
function History() {
    let navigate = useNavigate();

    useEffect(()=>{
        alert("현재 개발중입니다..");
        navigate("/main");
    })
    return (
        <>
            <div className="min-h-screen p-6 bg-giants-navy font-custom">
                <Header />
                <main className="space-y-8">
                    <section id="gallery" className="p-6 m-2 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800">데이터 분석실</h2>
                    </section>
                </main>
            </div>
        </>
    )
}

export default History;