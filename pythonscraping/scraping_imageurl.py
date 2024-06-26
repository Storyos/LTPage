import requests
from bs4 import BeautifulSoup
import json

url = 'https://www.giantsclub.com/html/index.asp?pcode=418&bcIdx=9'  # 해당 페이지의 URL을 입력하세요
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

image_links = []
real_img=[]
for img_tag in soup.find_all('img'):
    img_url = img_tag.get('src')
    if img_url:
        image_links.append(img_url)

for link in image_links:
    if link.startswith('https://file.giants'):
        real_img.append(link)
        
    with open('../src/api/lotte_image.json', 'w', encoding='utf-8') as json_file:
        json.dump(real_img, json_file, ensure_ascii=False, indent=4)
print('Data has been saved to lotte_image.json')