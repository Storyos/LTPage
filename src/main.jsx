import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import player1 from './images/player3.jpg'; 
import player2 from './images/player5.jpg'; 
import player3 from './images/player4.jpg'; 
import teamRankingData from './api/team_ranking.json'
import giantsSchedule from './api/game_schedule.json'
import Header from './header';
function MainPage() {
    return (
        <div className="min-h-screen p-6 bg-giants-navy font-custom">
            <Header/>
            <main className="space-y-8">
                <section id="carousel" className="p-8 m-2 bg-white rounded-lg shadow-md">
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                        <div>
                            <img src={player1} alt="Player 1" />
                            <p className="legend">이 주의 롯데 TOP1 : 수원에 강림한 예수!</p>
                        </div>
                        <div>
                            <img src={player2} alt="Player 2" />
                            <p className="legend">이 주의 롯데 Top2 : 대기록 달성은 실패했지만 미친 페이스</p>
                        </div>
                        <div>
                            <img src={player3} alt="Player 3" />
                            <p className="legend">이 주의 롯데 Top3 : 8년 만에 등장한 롯데 30도루, 마황 황성빈</p>
                        </div>
                    </Carousel>
                </section>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col col-span-2 space-y-8">
                        <section id="schedule" className="flex-grow p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800">경기 일정 (6월) </h2>
                            <ul className="mt-4 text-gray-700 list-disc list-inside">
                                {giantsSchedule.경기일정.map((team, index) => (
                                <li key={index}>
                                    {team["날짜"]}일 - {team["팀1"]} VS {team["팀2"]}
                                </li>
                            ))}
                            </ul>
                        </section>
                        <section id="events" className="flex-grow p-6 bg-white rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800">이벤트</h2>
                            <ul className="mt-4 text-gray-700 list-disc list-inside">
                                <li>팬 사인회 - 2024-07-01</li>
                                <li>경품 추첨 - 2024-07-05</li>
                            </ul>
                        </section>
                    </div>
                    <section id="rankings" className="h-full p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800">팀 순위</h2>
                        <ul className="mt-4 text-gray-700 list-disc list-inside">
                            {teamRankingData.팀순위.map((team, index) => (
                                <li className='p-2' key={index}>
                                    {team["순위"]}위 - {team["팀"]} (승률: {team["승률"]}, 승: {team["승"]}, 패: {team["패"]}, 무: {team["무"]})
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <section id="players" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">선수 기록</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>고승민 - 타율: .304, 홈런: 6, 타점: 42</li>
                        <li>레이예스 - 타율: .340, 홈런: 7, 타점: 62</li>
                        <li>윤동희 - 타율: .303 홈런: 5, 타점: 37</li>
                        <li>황성빈 - 타율: .354 홈런: 4 타점: 13</li>
                    </ul>
                </section>
                <section id="news" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800">뉴스</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>롯데 자이언츠, KIA 타이거즈와의 경기에서 극적인 무승부</li>
                        <li>황성빈, 시즌 30도루 달성</li>
                    </ul>
                </section>
                <section id="developer" className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold giants-navy">Made by..</h2>
                    <ul className="mt-4 text-gray-700 list-disc list-inside">
                        <li>이름 : 김범규 </li>
                        <li>학번 : 201911454</li>
                        <li>학력 : 부경대학교 컴퓨터공학 전공 (4학년 재학중)</li>
                        <div className='m-2 font-bold giants-red' ><a href='https://github.com/Storyos/'>GitHub 이동하기</a></div>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default MainPage;
