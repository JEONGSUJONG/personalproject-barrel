<details>
<summary>📅 2024.01.28</summary>

<h1>Folder 구조 만들기</h1>

<h2>FRONT</h2>

**FRONT 폴더에서 해야함!!**

- Vite을 이용한 리액트 생성
  - `cd FE`
  - `npm init vite`
    - project name : `shoppingmall`
    - select a framework : `React`
    - select a variant : `Javascript`
  - `npm install` (node_modules 설치 확인)
  - `npm run dev` (port에서 웹 확인)

```
└─src
    ├─assets
    ├─components
    │   ├─NotAuthRoutes.jsx
    │   └─ProtectedRoutes.jsx
    ├─hooks
    ├─layout
    │   ├─Footer
    │   │   └─index.jsx
    │   └─NavBar
    │       ├─Sections
    │       │   └─NavItem.jsx
    │       └─index.jsx
    ├─pages
    │   ├─LandingPage
    │   │   └─index.jsx
    │   ├─LoginPage
    │   │   └─index.jsx
    │   └─RegisterPage
    │       └─index.jsx
    ├─store
    │   ├─index.js
    │   ├─thunkFunction.js
    │   └─userSlice.js
    └─utils
        └─axios.js
```

<h1>Vite ESlint 설정하기</h1>

`npm install -D vite-plugin-eslint eslint eslint-config-react-app`

- eslint plugin 적용하기
- `vite.config.js`

  - `import eslint from 'vite-plugin-eslint'`
  - `plugins: [react(), eslint()],` : `eslint()` 추가

- ## src/.eslintrc 파일 추가
  ```
  {
      "extends" : [
          "react-app"
      ]
  }
  ```

<h1>Tailwind CSS</h1>

- VSCode 확장프로그램 -> Tailwind CSS IntelliSense 설치

<h2>Tailwind</h2>

- HTML 안에서 CSS 스타일을 만들 수 있게 해주는 CSS 프레임 워크

- Tailwind CSS는 부트스트랩과 비슷하게 m-1, flex 와 같이 미리 세팅된 Utility Class 를 활용하는 방식으로 HTML 에서 스타일이 가능하다.
  - 빠른 스타일링 작업이 가능
  - class 혹은 id 명을 작성하기 위한 고생을 하지 않아도된다.
  - Utilty Class가 익숙해지는 시간이 필요할 수 있지만 IntelliSense 플러그인이 제공돼서 금방 익숙해진다.

https://tailwindcss.com/ 꼭 들어가서 확인하길 바란다..!

https://github.com/JEONGSUJONG/readme-main/assets/142254876/c379482f-b15d-4b12-a98d-16b5ffd8fcce .GIF

<h2>TailwindCSS 설정하기</h2>

https://tailwindcss.com/docs/guides/vite

- `npm install -D postcss autoprefixer tailwind` 혹은 `npm install tailwindcss --save-dev` 나는 전자의 방법이 안돼서 후자로 하니까 된다..!
- `npx tailwindcss init -p`

  - postcss.config.js , tailwind.config.js 파일 설치 확인!

- tailwind.config.js

```javascript
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
```

- index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind 준비 끝

```jsx
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
    </div>
  );
}
export default App;
```
- test해서 확인하길 바람

<img alt="image" src="https://github.com/JEONGSUJONG/readme-main/assets/142254876/0dc38be4-e4fa-4c69-895b-86313ddcf842">

<h1>React Router Dom</h1>

- React Router DOM 을 사용하면 웹 앱에서 동적 라우팅을 구현할 수 있습니다. 라우팅이 실행 중인 웹 외부의 구성에서 처리되는 기존 라우팅 아키텍쳐와 달리 React Router DOM은 웹 및 플랫폼의 요구 사항에 따라 컴포넌트 기반 라이팅을 용이하게 한다.

<h2>Single Page Application</h2>

- React는 SPA 이기 때문에 하나의 index.html 탬플릿 파일을 가지고 있다. 하나의 템플릿에 자바스크립트를 이용해서 다른 컴포넌트를 이 index.html 템플릿에 넣으므로 페이지를 변경해주게 된다.
- 이 때 React Router DOM 라이브러리가 새 컴포넌트로 라우팅/탐색을 하고 렌더링 하는데 도움이 된다.

<img alt="image" src="https://github.com/JEONGSUJONG/readme-main/assets/142254876/dffa9a45-a2a7-44f7-85d5-f6556c9bc840">

<h2>React Router 설정하기</h2>

- 앱 어디서나 React Router를 사용할 수 있도록 하기 위해 src 폴더에서 index.js 파일에 React-Router-DOM에 있는 BrowserRouter를 가져와 루트 구성 요소를 래핑한다.

<h3>BrowserRouter로 루트 컴포넌트 감싸기</h3>

```jsx
ReactDOM.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
    document.getElementById('root')
);
```

```jsx
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render (
    <BrowserRouter>
        <App />
    </BrowserRouter>
    document.getElementById('root')
);
```

<h4>중첩 라우팅</h4>

- 복잡한 레이아웃 코드를 어지럽히지 않고 url 세그먼트에 연결시킬 수 있다.

```jsx
<BrowserRouter>
    <Routes>
        <Route path="/" element={ <App /> }>
        { /* App 컴포넌트에 Header Footer를 Layout */ }
            <Route index element={ <Home /> }>
            { /* "/" 경로의 Home 컴포넌트 */ }
            <Route path="teams" element={ <Teams /> }>
            { /* "/teams" 경로의 Teams 컴포넌트 */ }
                <Route index element={ <LeagueStanding /> }>
                { /* "/teams" 경로의 LeagueStainding 컴포넌트 */ }
                <Route path=":teamId" element={ <Team /> }>
                <Route path="new" element={ <NewTeamForm /> }>
            </Route>
        </Route>
    </Routes>
</BrowserRouter>
```


<h4>Outlet</h4>

- 자식 경로 요소를 렌더링하려면 부모 경로 요소에 `<Outlet />`을 사용해야 한다.
- 하위 경로가 렌더링될 때 중첩된 UI가 표시될 수 있다 (Header, Footer)

```jsx
function App() {
    return (
        <div>
            <h1>Welcome to the app</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/teams">Teams</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}
```


<h3>여러 컴포넌트 생성 및 라우트 정의</h3>

```jsx
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </div>
    )
}
```

- Routes : 앱에서 생성될 모든 개별 경로에 대한 컨테이너/상위 영역
    - Route로 생성된 자식 컴포넌트 중 매칭되는 첫번째 Route를 렌더링

- Route : 단일 경로를 만드는 데 사용
    - `path` : 원하는 컴포넌트의 url 지정
    - `element` : 경로에 맞게 렌더링 되어야 하는 컴포넌트 지정

<h3>Link</h3>

```jsx
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>HomePage</h1>
            <Link to="about">Showing About Page</Link>
            <Link to="contact">Showing Contact Page</Link>
        </div>
    )
}

export default Home;
```

- Link 구성 요소는 HTML의 앵커 요소(`<a />`)와 유사
    - to 경로는 사용자를 데려가는 경로로 지정
- 앱 구성 요소에 나열된 경로 이름을 생성했기 때문에 링크를 클릭하면 경로를 살펴보고 해당 경로 이름으로 구성 요소를 렌더링


<h1>React Router Dom 적용하기</h1>

- `npm install react-router-dom`

- main.jsx

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

- App.jsx

```jsx
function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
```

</details>
