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
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
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
  );
}
```

<h3>여러 컴포넌트 생성 및 라우트 정의</h3>

```jsx
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
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
  );
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

<details>
<summary>📅 2024.01.30</summary>

<h1>Tailwind 적용하기</h1>

- App.jsx

```jsx
function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

- 부모 `div` 에서 `flex` 로 설정하여 자식 요소들이 `flex` 아이템이 되게 설정한다.
- `flex-col` : flex 방향을 세로로 설정한다. 자식 요소(`Navbar`, `main`, `Footer`) 역시 세로로 쌓이게 된다.
- `h-screen` : flex 컨테이너의 높이를 화면 높이의 100%로 설정한다. flex 컨테이너가 화면 전체 높이를 차지한다.
- `justyfy-between` : 주 축을 따라 콘텐츠를 정렬한다. (이 경우에는 세로) , `Navbar` 를 화면 상단, `Footer` 를 화면 하단에 위치시켜 그 사이에 공간을 만든다.

- `md-auto` : `main` 요소의 하단 마진을 자동으로 설정한다. 이로써 `Navbar` 와 `Footer` 사이에서 가능한한 많은 공간을 차지하며 `Footer` 를 화면 하단으로 밀어낸다.
- `w-10/12` : `main` 요소의 너비를 부모 컨테이너의 약 83%로 너비를 차지한다.
- `max-w-4xl` : `main` 요소의 최대 너비 (`max-w`) 를 사전 정의된 값으로 설정
- `max-auto` : 좌우 마진을 자동으로 설정한다.

<h1>React-icons</h1>

https://react-icons.github.io/react-icons/

`npm install react-icons`

- Footer/index.jsx

```jsx
import React from "react";
import { AiOutlineSmile } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="flex h-20 text-lg items-center justify-center bg-gray-800 text-white">
      All rights reserved. <AiOutlineSmile />
    </div>
  );
};
export default Footer;
```

<h1>Redux 사용하기</h1>

`npm install @reduxjs/toolkit react-redux`

- store/userSlice.js

```javascript
const initialState = {
  userData: {
    id: "",
    email: "",
    name: "",
    role: 0,
    image: "",
  },
  isAuth: false,
  isLoading: false,
  error: "",
};
```

- `initalState` 는 슬라이스 초기 상태를 정의한다.
- 사용자 데이터, 인증 상태, 로딩 여부, 오류 메시지를 포함한다.

```javascript
const userSlice = createSlice({
  name: "user", // 슬라이스의 이름
  initialState, // 초기 상태
  reducers: {}, // 리듀서 액션 생성자 함수들이 정의되는 곳
  extraReducers: (builder) => {}, // 비동기 액션에 대한 추가 리듀서
});

export default userSlice.reducer;
```

- `createSlice` 함수는 슬라이스 객체를 생성한다.

  - `reducers` : 리듀서 함수를 정의할 수 있다. 리듀서는 액션이 발생했을 경우 상태를 어떻게 변경할지를 정의한다.
  - `extraReducers` : Redux Toolkit에서 비동기 액션에 대한 추가적인 리듀서를 정의할 수 있는 부분이다.

- 이 슬라이스는 Redux 스토어에 통합되고, 액션 및 리듀서 함수를 추가하여 상태를 업데이트하고 관리할 수 있다.

<h2>Redux store 생성하기</h2>
- store/index.js
  
```javascript
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const store = configureStore({
reducer: {
user: userReducer
}
})

````

- Redux 스토어는 `configureStore` 함수를 사용하여 생성한다.
- `reducer` 속성에는 애플리케이션에 사용할 리듀서들을 등록한다.
  - 여기서는 `userReducer` 를 `user` 슬라이스에 등록


<h2>Provider 감싸기</h2>

- main.jsx

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
````

- `Provider` 컴포넌트는 React 애플리케이션에 Redux 스토어를 제공한다.
- `store` prop에는 위에서 생성한 Redux 스토어가 전달된다.
- 이렇게 함으로써 애플리케이션 내의 모든 컴포넌트가 Redux 스토어의 상태에 접근하고 업데이트할 수 있게 된다.

- Redux 스토어에 정의된 상태와 리듀서를 사용하여 컴포넌트들이 상태를 공유하고 업데이트할 수 있다.

</details>

<details>
<summary>📅 2024.01.31</summary>

serializableCheck

- serialize : object 값을 string 값으로 변환 (JSON.stringify)
- deserialize : string 값을 object 값으로 변환 (JSON.parse)

action에 직렬화(serialize)가 불가능한 값 (non-serializable value)을 전달되면 에러가 나온다..!

- action이 디스패치하게 될 때 serialize 한 function이 들어가 있어서 에러가 나옴.
  - redux persist를 사용할 때 이러한 에러를 안보이게 하려면 serializableChekc를 false 하면 에러가 안나옴.

https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/e702770c-dc83-4ec0-945e-6d146491d95c)

</details>

<details>
<summary>📅 2024.02.01</summary>

<h1>회원가입 페이지 만들기</h1>

- tailwind css 처음 사용해서 적응하느라 힘들었다...😥 그래도 작성하고 VSCode에 작성한 css속성 에 hover하면 무슨 기능인지 나온다.

```jsx
const RegisterPage = () => {
  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">회원가입</h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-center"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
            />
          </div>
          ...
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200"
            >
              회원가입
            </button>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              이미 가입된 회원이신가요?
              <a href="/login" className="font-medium hover:underline">
                로그인
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
```

- `flex-col` : 아이템을 세로로 배치하는 Flexbox의 속성, 요소들을 세로(column)로 쌓는다
- `justify-center` : 부모 요소 내에서 자식 요소들을 수평 방향으로 가운데 정렬하는 Flexbox의 속성
- `text-center` : 텍스트를 수평 방향으로 가운데 정렬하는 CSS 속성, 텍스트를 가운데로 정렬
- `px` / `py` : `px`는 수평(padding-x) 방향의 안쪽 여백 지정하고 `py`는 수직(padding-y) 방향의 안쪽 여백 지정

<h2>React-Hook-Form</h2>

- 유효성 검사를 위한 React-Hook 사용
  [https://react-hook-form.com/get-started](https://react-hook-form.com/get-started)

- `npm install react-hook-form`

- RegisterPage/index.jsx

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm({ mode: "onChange" });
```

- `useForm` hook (register, handleSubmit, ,formState, reset 모두 useForm 훅에 있는 함수이다.)
  - `useForm` 은 폼을 초기화하는 `react-hook-form` 에서 제공된다.
  - `register` 함수는 입력 요소를 폼에 등록하고 유효성 검사를 가능하게 한다.

```jsx
const onSubmit = ({ email, password, name }) => {
  reset();
};
```

- `onSubmit` : 폼이 제출될 때 실행되는 함수로써 간단히 `reset` 함수를 호출하여 입력값을 초기화한다.

```jsx
const userEmail = {
  required: "이메일을 입력해주세요.",
};
const userName = {
  required: "이름을 입력해주세요.",
};
const userPassword = {
  required: "비밀번호를 입력해주세요.",
  minLength: {
    value: 6,
    message: "최소 6자입니다.",
  },
};
```

- 유효성 검사 규칙을 설정할 수 있다.

```jsx
<input
  type="email"
  id="email"
  className="w-full px-4 py-2 mt-2 bg-white border rounded-md"
  {...register("email", userEmail)}
/>
```

- 앞서 등록한 유효성 검사 함수인 `register` 로 입력 요소를 폼에 등록하고 해당 필드에 대한 유효성 검사를 한다.

```jsx
{
  errors?.email && (
    <div>
      <span className="text-red-500">{errors.email.message}</span>
    </div>
  );
}
```

- `errors` 객체를 통해 유효성 검사에서 발생한 에러를 확인하고 에러 메시지를 보낸다.

<h1>Axios Instance</h1>

- Axios : 브라우저, Node.js 를 위한 Promise API 를 활용하는 HTTP 비동기 통신 라이브러리.
  - 쉽게 말해 BE와 FE가 통신을 쉽게하기 위해 Ajax와 더불어 사용한다.

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/fcb39d7f-5ab5-4762-ba76-9838b11023e8)

<h2>Axios 사용방법</h2>

- `npm install axios --save`
- Axios를 사용할 때 중복된 설정을 피하기 위해 인스턴스를 생성하는 것이 일반적

  - 여러 요청에서 공통으로 사용할 설정 (baseURL)을 인스턴스에 정의
  - `localhost:4000/login?name="sujong"`
  - `localhost:4000/register?name="sujong"`

- utils/axios.js

```javascript
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:5000",
});

export default axiosInstance;
```

- `axios.create` : Axios 인스턴스를 생성한다.
- `import.meta.env.PROD`

  - `true` 인 경우는 배포 후 나오는 URL 설정
  - `false` 인 경우는 개발 환경 (서버의 로컬환경 URL 설정)

- axiosInstance 적용 예시

```jsx
import axiosInstance from "./utils/axios.js";

axiosInstance
  .get("/login", { params: { name: "sujong" } })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

- `/login` 엔드포인트로 `GET` 요청을 보내고 있으며, 필요에 따라 다양한 HTTP 메서드에 대한 요청을 설정할 수 있다.

<h1>회원가입 기능 생성</h1>

- store/thunkFunction.js

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/users/register`, body);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
```

- store/userSlice.js

```javascript
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
```

- Register/index.jsx

```jsx
const dispatch = useDispatch();

const onSubmit = ({ email, password, name }) => {
  const body = {
    email,
    password,
    name,
    image: `https://via.placeholder.com/600x400?text=no+user+image`,
  };

  dispatch(registerUser(body));

  reset();
};
```

<h1>react Toastify</h1>

[https://www.npmjs.com/package/react-toastify](https://www.npmjs.com/package/react-toastify)
[https://fkhadra.github.io/react-toastify/introduction/](https://fkhadra.github.io/react-toastify/introduction/)

- `npm install react-toastify`

```jsx
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
```

- App.jsx

```jsx
function Layout() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        theme="light"
        transition:Slide
      />
      <Navbar />
      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

- 사이트 참고해서 원하는 디자인으로 적용 가능하다.

- store/userSlice.js

```javascript
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        toast.info("회원가입을 성공했습니다.");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.info(state.payload);
      });
  },
});
```

https://github.com/JEONGSUJONG/readme-main/assets/142254876/28294404-55ca-4604-b40f-b4bd2bdc0cdf

</details>

<details>
<summary>📅 2024.02.07</summary>

<h1>유저 인증 여부 체크</h1>

- 로그인 한 유저가 올바른 토큰 (유효기간)을 가지고 있는 지 체크

- App.jsx : 유저가 로그인 상태인지 확인, 로그인 상태라면 서버에 유저의 인증 여부를 확인하는 요청을 보낸다.

```jsx
const dispatch = useDispatch();
const isAuth = useSelector((state) => state.user?.isAuth);
const { pathname } = useLocation();

useEffect(() => {
  if (isAuth) {
    dispatch(authUser());
  }
}, [isAuth, pathname, dispatch]);
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/8548fb02-a930-47f1-acd1-67d856ef24ff)

- Redux의 `useSelector` 훅을 사용하여 Redux store에서 유저의 인증 상태인 `isAuth` 를 가져온다.
- `useDispatch` 훅을 사용하여 Redux store에 action 을 dispatch 한다.
- `useEffect` 는 컴포넌트가 마운트될 경우 `isAuth` 와 `pathname`이 변경될 때마다 특정 작업을 수행하도록 설정

- thunkFunction.js : 서버에 유저의 인증 여부를 확인하는 요청을 보냄. (비동기)

```jsx
export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/users/auth`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
```

- `createAsyncThunk` 함수를 이용하여 비동기 작업을 처리한다.
- 이 함수는 서버로부터 유저의 인증 여부 확인하는 API를 호출하고 그 결과를 반환한다.

- axios.js : 모든 서버 요청에 토큰을 함께 보내준다.

```jsx
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/4f8e17b3-2252-4383-88f5-b54f098c8e23)

- 모든 HTTP 요청에 대해 Authorization 헤더에 유효한 토큰을 추가한다.
- 이를 통해 서버에 요청할 때마다 유저의 인증 상태를 확인할 수 있다.

- userSilce.js : `createSilce` 에서 액션인 `authUser` 에 대한 리듀서를 정의한다.

```javascript
// Auth
.addCase(authUser.pending, (state) => {
  state.isLoading = true;
})
.addCase(authUser.fulfilled, (state, action) => {
  state.isLoading = false;
  state.userData = action.payload;
  state.isAuth = true;
})
.addCase(authUser.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isAuth = false;
  localStorage.removeItem('aceessToken');
});
```

<h1>NotAuthRoutes/ProtectedRoutes</h1>

- 로그인이 되어있을 경우(`isAuth==true`) 로그인/회원가입 접근 안되게 해야함.
- 반대로 로그인을 안했을 경우 특정 페이지에 접근 불가하게 해야함

- `ProtectedRoutes` : 로그인 안한 유저가 해야하는 페이지로 이동
- `NotAuthRoutes` : 로그인을 한 유저가 회원가입 및 로그인으로 들어가려면 `'/'` 경로로 redirect 시켜준다.

  - `Outlet` : 부모 경로에서 하위 경로를 렌더링할 때 사용된다. 예를 들어 부모 경로에서 하위 경로의 컴포넌트를 보여주기 위해 사용된다,
  - `Navigate` : 특정 경로로 redirection 수행하는 컴포넌트이다. 사용자를 다른 경로로 이동시키고 싶을 때 사용. (`to` prop을 통해 이동하고자 하는 경로 설정)

- components/ProtectedRoutes.jsx

```jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
```

- `isAuth` prop은 현재 사용자가 인증 여부를 판단하고 인증이 되지 않은 경우 로그인 페이지(`/login`)로 redirection 한다.

- components/NotAuthRoutes.jsx

```jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NotAuthRoutes = ({ isAuth }) => {
  return isAuth ? <Navigate to={"/"} /> : <Outlet />;
};

export default NotAuthRoutes;
```


- App.jsx

```jsx
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LadingPage />} />

        {/* 로그인한 유저만 갈 수 있는 경로 */}
        <Route element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>

        {/* 로그인한 유저는 갈 수 없는 경로 */}
        <Route element={<NotAuthRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  );
```

- `Routes` 컴포넌트 내에서 `Route` 컴포넌트를 사용하여 각 경로에 대한 라우팅을 설정한다. `element` prop을 사용하여 해당 경로에 렌더링할 컴포넌트를 지정한다.


```jsx
const isAuth = useSelector(state => state.user?.isAuth);
```

- `useSelector` hook은 Redux store의 상태를 인자로 받아 특정 부분의 상태를 선택한다.
- `state.user?.isAuth` 는 Redux store 의 `user` 객체에서 `isAuth` 값을 선택한다. (`?.`는 옵셔널 체이닝(optional chaining) 연산자로 `user` 객체가 존재하지 않거나 `isAuth` 가 존재하지 않는 경우에도 안전하게 접근할 수 있도록 한다.)
- 즉, `isAuth` 는 Redux store 에서 가져온 사용자의 인증상태를 나타내는 값이다.


<h1>Navbar</h1>

```jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./Sections/NavItem";

const Navbar = () => {
  // 메뉴 상태를 관리하는 useState 훅을 사용하여 메뉴의 열림/닫힘 여부를 저장합니다.
  const [menu, setMenu] = useState(false);

  // 메뉴를 열고 닫는 함수입니다.
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    // 네비게이션 바를 감싸는 nav 요소입니다.
    <nav className="relative z-10 text-white bg-black">
      <div className="w-full">
        <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
          {/* 로고 섹션입니다. */}
          <div className="flex items-center text-4xl h-16">
            {/* 홈으로 이동할 수 있는 로고 링크입니다. */}
            <Link to="/">Logo</Link>
          </div>

          {/* 메뉴 버튼 섹션입니다. 작은 화면 크기에서만 표시됩니다. */}
          <div className="text-2xl sm:hidden">
            {/* 메뉴 버튼을 클릭하면 handleMenu 함수가 호출되어 메뉴가 열리거나 닫힙니다. */}
            <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
          </div>

          {/* 데스크톱 화면 크기에서 표시되는 네비게이션 메뉴 섹션입니다. */}
          <div className="hidden sm:block">
            {/* NavItem 컴포넌트를 사용하여 네비게이션 메뉴를 표시합니다. */}
            <NavItem />
          </div>
        </div>

        {/* 모바일 화면 크기에서 표시되는 네비게이션 메뉴 섹션입니다. */}
        <div className="block sm:hidden">
          {/* 메뉴가 열려있을 때에만 NavItem 컴포넌트를 표시합니다. */}
          {menu && <NavItem />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- 

</details>
