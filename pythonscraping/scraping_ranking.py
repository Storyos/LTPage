import requests
from bs4 import BeautifulSoup
import json

# URL 설정
url = 'https://statiz.sporki.com/'

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
        "팀순위": [],
        "팀": [],
        "G": [],
        "승": [],
        "무": [],
        "패": [],
        "승차": [],
        "승률": [],
        "득점": [],
        "실점": [],
    }

    # 팀 순위 테이블 선택 및 데이터 추출
    ranking_table = soup.find_all('div', {'class': 'table_type03'})[2].find('table')
    print(ranking_table)
    if ranking_table:
        headers = [header.get_text(strip=True) for header in ranking_table.find('thead').find_all('th')]
        for row in ranking_table.find('tbody').find_all('tr'):
            cells = row.find_all('td')
            if len(cells) == 10:  # 열의 수가 10인지 확인
                team_data = {headers[i]: cells[i].get_text(strip=True) for i in range(len(cells))}
                data["팀순위"].append(team_data)
                data["팀"].append(cells[1].get_text(strip=True))
                data["G"].append(cells[2].get_text(strip=True))
                data["승"].append(cells[3].get_text(strip=True))
                data["무"].append(cells[4].get_text(strip=True))
                data["패"].append(cells[5].get_text(strip=True))
                data["승차"].append(cells[6].get_text(strip=True))
                data["승률"].append(cells[7].get_text(strip=True))
                data["득점"].append(cells[8].get_text(strip=True))
                data["실점"].append(cells[9].get_text(strip=True))
        print("팀순위 데이터 추출 완료")
    else:
        print("테이블 없음 (팀 순위)")

    # 결과를 JSON 파일로 저장
    with open('../src/api/team_ranking.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)
    print('Data has been saved to team_ranking.json')

except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
