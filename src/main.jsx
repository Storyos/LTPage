import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // carousel 스타일을 가져옵니다.
import player1 from './images/player3.jpg'; // 예시 이미지 경로
import player2 from './images/player3.jpg'; // 예시 이미지 경로
import player3 from './images/player3.jpg'; // 예시 이미지 경로
import logo from './images/lotte_logo.jpg'

function MainPage() {
    return (
        <div className="min-h-screen p-6 bg-gray-100 font-custom">
            <header className="flex items-center justify-center py-6 space-x-4 text-center">
                <img src={logo} alt="Giants Logo" className="w-auto h-16" />
                <h1 className="text-4xl font-bold text-custom">롯데 자이언츠 팬 페이지</h1>
            </header>
            <nav className="bg-white shadow-md">
                <ul className="flex justify-center py-4 space-x-6 text-gray-600">
                    <li className="hover:text-blue-600"><a href="#players">선수 정보</a></li>
                    <li className="hover:text-blue-600"><a href="#schedule">경기 일정</a></li>
                    <li className="hover:text-blue-600"><a href="#team">팀 정보</a></li>
                    <li className="hover:text-blue-600"><a href="#news">뉴스</a></li>
                </ul>
            </nav>
            <main className="space-y-8">
                <section id="carousel" className="p-6 bg-white rounded-lg shadow-md">
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src={player1} alt="Player 1" />
                            <p className="legend">선수 1</p>
                        </div>
                        <div>
                            <img src={player2} alt="Player 2" />
                            <p className="legend">선수 2</p>
                        </div>
                        <div>
                            <img src={player3} alt="Player 3" />
                            <p className="legend">선수 3</p>
                        </div>
                    </Carousel>
                </section>
                <section id="schedule" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">경기 일정</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>2024-06-30 vs 두산 베어스</li>
                        <li>2024-07-02 vs SK 와이번스</li>
                        <li>2024-07-04 vs 한화 이글스</li>
                    </ul>
                </section>
                <section id="events" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">이벤트</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>팬 사인회 - 2024-07-01</li>
                        <li>경품 추첨 - 2024-07-05</li>
                    </ul>
                </section>
                <section id="players" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">선수 기록</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>이대호 - 타율: .345, 홈런: 25, 타점: 88</li>
                        <li>손아섭 - 타율: .298, 홈런: 18, 타점: 67</li>
                    </ul>
                </section>
                <section id="news" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">뉴스</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>롯데 자이언츠, 두산 베어스와의 경기에서 승리</li>
                        <li>이대호, 시즌 25호 홈런 달성</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default MainPage;
