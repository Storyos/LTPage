# 롯데자이언츠 팬페이지

### Contributor ( SOLO PROJECT )
|<img src="https://github.com/Storyos.png" width="80">|
| :---: |
|김범규|

## 소개
롯데자이언츠 팬페이지는 롯데자이언츠 팀의 최신 정보와 스탯을 제공하는 웹사이트입니다. 이 프로젝트는 Python, Node.js, React를 사용하여 개발되었으며, 스탯 데이터는 Beautiful Soup4를 사용해 스탯티즈에서 크롤링하였습니다.

## 주요 기능
- 팀과 선수의 최신 스탯 제공
- 경기 일정 및 결과 확인
- 선수별 상세 정보 및 분석
- 팬 커뮤니티 게시판

### 주요 화면
![image](https://github.com/user-attachments/assets/ce722b6c-0080-400b-9b45-3527fbaad0c3)



## 기술 스택
- **프론트엔드**: React, CSS
- **백엔드**: Node.js, Express
- **데이터 수집**: Python, Beautiful Soup4
- **데이터베이스**: MongoDB

## 설치 및 실행 방법

### 프론트엔드
1. 레포지토리 클론
    ```bash
    git clone https://github.com/yourusername/lotte-giants-fanpage.git
    cd lotte-giants-fanpage/frontend
    ```
2. 의존성 설치
    ```bash
    npm install
    ```
3. 애플리케이션 실행
    ```bash
    npm start
    ```

### 백엔드
1. 레포지토리 클론
    ```bash
    git clone https://github.com/yourusername/lotte-giants-fanpage.git
    cd lotte-giants-fanpage/backend
    ```
2. 의존성 설치
    ```bash
    npm install
    ```
3. 환경 변수 설정 (.env 파일)
    ```plaintext
    MONGODB_URI=your-mongodb-uri
    ```
4. 서버 실행
    ```bash
    npm start
    ```

## 데이터 크롤링
1. 데이터 크롤링 스크립트 실행
    ```bash
    cd lotte-giants-fanpage/crawling
    python crawl_stats.py
    ```

## 기여 방법
1. 포크(Fork) 및 클론(Clone)
2. 새로운 브랜치 생성 (`git checkout -b feature/your-feature`)
3. 변경 사항 커밋 (`git commit -m 'Add some feature'`)
4. 푸시(Push) (`git push origin feature/your-feature`)
5. 풀 리퀘스트(Pull Request) 생성

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참고하세요.

