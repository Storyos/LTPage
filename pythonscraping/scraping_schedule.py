import requests
from bs4 import BeautifulSoup
import json

# URL 설정
url = 'https://statiz.sporki.com/schedule/'

try:
    print("Sending request to:", url)
    # 요청 보내기
    response = requests.get(url)
    response.raise_for_status()  # 요청이 성공적으로 완료되었는지 확인
    response.encoding = 'utf-8'  # 페이지 인코딩 설정
    print("Request successful")

    # BeautifulSoup을 사용하여 HTML 파싱
    soup = BeautifulSoup(response.text, 'html.parser')
    print("HTML parsing successful")

    # 필요한 데이터 추출
    data = {
        "경기일정": []
    }

    # 경기 일정 테이블 선택 및 데이터 추출
    calendar_table = soup.find('div', {'class': 'calendar_area'}).find('table')
    if calendar_table:
        for row in calendar_table.find('tbody').find_all('tr'):
            days = row.find_all('td')
            for day in days:
                date = day.find('span', {'class': 'day'})
                if date:
                    games = day.find('div', {'class': 'games'})
                    if games:
                        for game in games.find_all('li'):
                            teams = game.find_all('span', {'class': 'team'})
                            scores = game.find_all('span', {'class': 'score'})
                            if teams and scores:
                                team1 = teams[0].get_text(strip=True)
                                team2 = teams[1].get_text(strip=True)
                                if "롯데" in [team1, team2]:  # 롯데가 포함된 경기만 추가
                                    data["경기일정"].append({
                                        "날짜": date.get_text(strip=True),
                                        "팀1": team1,
                                        "점수1": scores[0].get_text(strip=True),
                                        "팀2": team2,
                                        "점수2": scores[1].get_text(strip=True),
                                    })
        print("경기일정 데이터 추출 완료")
    else:
        print("테이블 없음 (경기일정)")

    # 결과를 JSON 파일로 저장
    with open('../src/api/game_schedule.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)
    print('Data has been saved to game_schedule.json')

except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
