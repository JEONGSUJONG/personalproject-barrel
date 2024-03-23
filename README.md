# 🏊 배럴 : BARREL

![image](https://github.com/JEONGSUJONG/github-mainpage/assets/142254876/aaafbf44-4ec9-471a-a0f7-92e73894ed72)

클론 코딩 : **배럴 : BARREL** https://www.getbarrel.com/

## 👨‍💻 팀원 소개

| FULLSTACK |
| --------- |
| 정수종    |

## 📅 프로젝트 기간

2024.01.27(Sat) ~ ing (총 #주) **완성도 65%**

## 🌟 프로젝트 개요

대표적인 수영복 쇼핑몰 **BARREL**은 다양한 수영에 필요한 부품들을 살 수 있습니다. 프론트엔드와 백엔드를 직접 구현하며 연습하기 위해 클론 코딩으로 제작했습니다.

## ✨ 프로젝트 핵심 기능

#### ☕ 주문

-

## 🎴 Mildstone & Issues

**BACKEND**

| 색상 | 중요도  |
| ---- | ------- |
| 🔴   | 완료    |
| 🟡   | 진행 중 |
| 🔵   | 진행 전 |

<details>
<summary> - Users - </summary>

<br>

- 🔴 Login with Token of JWT / Register / Logout
- 🔴 product cart CRUD
- 🔴 payment / get payment history
- 🟡 AuthUserMiddleware of admin
- 🔵 Email Authentication
- 🔵 kakao Login/Register

</details>

<details>
<summary> - Product - </summary>

<br>

- 🔴 Product Postman test (GET, POST)
- 🔴 get product items
- 🟡 likes
    - 상품 클릭시 해당 상품으로 이동
- 🔵 color and size
- 🔵 Image to amazon S3
- 🔵 해당 상품의 좋아요 갯수
- 🔵 Product Update, Delete router
    - POST, PUT, DELETE : Admin 권한 줘야함 (Navbar 업데이트)
- 🔵 cart 제품 별 갯수 증가 및 감소

</details>

<details>
<summary> - likes - </summary>

<br>

- 🔴 likes UI
- 🔴 likes Postman test (PUT, GET)
- 🟡 좋아요 상태 업데이트가 안됌.
    - 상품을 삭제해도 해당 상품의 id는 유지되는 상태로 좋아요 db에 남아있음.
        - 그로 인해서 좋아요 목록 조회에 에러가 발생함
        - 또, 상품 총 likes 갯수에 문제가 있음
- 🔵 likes toast 적용하기
- 🔵 likes list 중 checkbox로 선택항목 장바구니로 이동시켜야함
    - 좋아요 삭제도 포함시켜야함 -> state
    - 상품 클릭시 해당 상품으로 이동
- 🔵 likes.length에 따른 navbar 업데이트


</details>

<details>
<summary> - Admin - </summary>

<br>

- 🔵 role 적용

</details>

#### 🙌 프로젝트/스터디 모집 게시판

- 프로젝트나 스터디를 함께 할 팀원을 찾거나 프로젝트 아이디어를 공유할 수 있는 공간을 제공합니다

#### ⚔ 프로필 관리

- 사용자의 기술 스택, 경력, 교육 배경 등을 관리할 수 있는 개인 프로필 기능을 제공합니다

## 🎵 서비스 화면

### 🎺 로그인, 회원가입 페이지

### 🎸 메인 페이지

### 💾 마이 프로필 페이지

### 🎧 게시물 상세, 수정 페이지(+ 댓글 기능)

### 💬 게시물 작성 페이지

### 🎹 관리자 페이지

## 🔨 주요 기술

**Programming Language**

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

**Frontend**

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponent-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

**Backend**

<img src="https://img.shields.io/badge/gpt-412991?style=for-the-badge&logo=openai&logoColor=white"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/mongoose-F04D35?style=for-the-badge&logo=mongoose&logoColor=white"> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">

**Backend - Node.js, Express.js**

- Node.js 및 Express.js를 활용한 REST API 개발.

**Database - MongoDB**

- MongoDB를 사용하여 유연한 데이터 스토리지와 관리 기능 제공.

## 💄 디자인 시안

[FIGMA]

## 🔒 ERD

## 📄 아키텍처 구성도

## 📄 컴포넌트 명세서

## 📄 API 명세서

## ⚙️ 프로젝트 파일 구조

**Front-end**

```

```

**Back-end**

```
server
├─ .env
├─ app.js
├─ middlewares
│ ├─ async-handler.js
│ ├─ error-handler.js
│ ├─ jwt-handler.js
│ ├─ res-handler.js
│ ├─ s3-handler.js
│ └─ validation-middleware.js
├─ models
│ ├─ board-schema.js
│ ├─ comment-schema.js
│ ├─ custom-recipe-schema.js
│ ├─ like-schema.js
│ ├─ order-schema.js
│ ├─ orderdetail-schema.js
│ ├─ orderoption-schema.js
│ ├─ product-schema.js
│ └─ user-schema.js
├─ package-lock.json
├─ package.json
├─ routes
│ ├─ board-router.js
│ ├─ comment-router.js
│ ├─ like-router.js
│ ├─ order-router.js
│ ├─ orderoption-router.js
│ ├─ ping-router.js
│ ├─ product-router.js
│ └─ user-router.js
├─ services
│ ├─ board-service.js
│ ├─ comment-service.js
│ ├─ like-service.js
│ ├─ order-service.js
│ ├─ orderoption-service.js
│ ├─ product-service.js
│ └─ user-service.js
└─ utils
├─ email-send.js
├─ jwt-token.js
└─ pagination.js
```

## 🗣 협업 환경
