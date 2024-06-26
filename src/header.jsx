import React from "react";
import logo from './images/lotte_logo.jpg'
import { useNavigate } from "react-router-dom";
function Header() {
    let navigate = useNavigate();
    return (
        <div className='m-2 bg-white rounded-lg'>
                <header className="flex items-center justify-center py-6 space-x-4 text-center">
                    <img src={logo} onClick={()=> navigate('/main')} alt="Giants Logo" className="w-auto h-16" />
                    <h1 className="text-4xl font-bold giants-red" onClick={()=> navigate('/main')}>롯데 자이언츠 팬 페이지</h1>
                </header>
                <nav className="bg-white rounded-lg shadow-md">
                    <ul className="flex justify-center py-4 space-x-6 text-gray-600">
                        <li className="hover:text-blue-600"><a href="/main#carousel">이 주의 선수</a></li>
                        <li className="hover:text-blue-600"><a href="/main#schedule">경기 일정</a></li>
                        <li className="hover:text-blue-600"><a href="/history">데이터 분석</a></li>
                        <li className="hover:text-blue-600"><a href="/gallery">갤러리</a></li>
                        <li className="hover:text-blue-600"><a href="/main#news">뉴스</a></li>
                        <li className="hover:text-blue-600"><a href="https://ticket.giantsclub.com/loginForm.do">예매하기</a></li>
                    </ul>
                </nav>
            </div>
    )
}
export default Header