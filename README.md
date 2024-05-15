# 🏊 배럴 : BARREL

![image](https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/db7d1660-dc57-4cc8-be92-460c4b29ea16)

클론 코딩 : **배럴 : BARREL** https://www.getbarrel.com/

## 👨‍💻 팀원 소개

| FULLSTACK |
| --------- |
| 정수종    |

## 📅 프로젝트 기간

2024.02 ~ 2024.04

## 🌟 프로젝트 개요

대표적인 수영복 쇼핑몰 **BARREL**은 다양한 수영에 필요한 부품들을 살 수 있습니다. 프론트엔드와 백엔드를 직접 구현하며 연습하기 위해 클론 코딩으로 제작했습니다.

## ✨ 프로젝트 핵심 기능

#### 메인 페이지

<img src="https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/62bc4d16-6f5a-4975-9d34-1ffcedf4a4d7" width="600" height="auto">
<img src="https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/90aa2072-35a6-4270-aa14-5c71bb3ace87" width="600" height="auto">

#### 제품 업로드

<img src="https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/af8da443-64c1-484e-acb5-2e9308b4fdc4" width="600" height="auto">

#### 제품 상세

<img src="https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/e23f5e2a-d32e-4a35-aae5-6f985052db4b" width="600" height="auto">

#### 장바구니 및 결제

<img src="https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/8ba3ed7a-b847-4999-9110-f00c1087369e" width="600" height="auto">

#### 필터링 및 검색

<img src="https://github.com/JEONGSUJONG/JEONGSUJONG/assets/168960634/c097e763-6340-4caa-a654-148e23529ce6" width="600" height="auto">

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

## ⚙️ 프로젝트 파일 구조

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