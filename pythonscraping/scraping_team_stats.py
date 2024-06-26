import requests
from bs4 import BeautifulSoup
import json

# URL 설정
url = 'https://statiz.sporki.com/team/?m=cteam&ct_code=3'

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
        "통산성적": [],
        "연도별성적": []
    }

    # 통산 성적 테이블 선택 및 데이터 추출
    total_record_table = soup.find('div', {'class': 'table_type03'}).find('table')
    if total_record_table:
        headers = [header.get_text(strip=True) for header in total_record_table.find('thead').find_all('th')]
        for row in total_record_table.find('tbody').find_all('tr'):
            cells = row.find_all('td')
            if len(cells) > 1:
                record = {headers[i]: cells[i].get_text(strip=True) for i in range(len(cells))}
                data["통산성적"].append(record)
        print("통산 성적 데이터 추출 완료")
    else:
        print("테이블 없음 (통산 성적)")

    # 연도별 성적 테이블 선택 및 데이터 추출
    yearly_record_table = soup.find_all('div', {'class': 'table_type03'})[1].find('table')
    if yearly_record_table:
        headers = [header.get_text(strip=True) for header in yearly_record_table.find('thead').find_all('th')]
        for row in yearly_record_table.find('tbody').find_all('tr'):
            cells = row.find_all('td')
            if len(cells) > 1:
                record = {headers[i]: cells[i].get_text(strip=True) for i in range(len(cells))}
                data["연도별성적"].append(record)
        print("연도별 성적 데이터 추출완료")
    else:
        print("테이블 없음 (연도별 성적)")

    # 결과를 JSON 파일로 저장
    with open('../src/api/team_stats.json', 'w', encoding='utf-8') as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)
    print('Data has been saved to team_stats.json')

except requests.exceptions.RequestException as e:
    print(f"Request failed: {e}")
except Exception as e:
    print(f"An error occurred: {e}")
