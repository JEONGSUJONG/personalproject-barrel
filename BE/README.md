<details>
<summary>📅 2024.01.31</summary>

<h1>npm 초기화 및 Express 설치</h1>

- `npm init`

  - package.json : 프로젝트의 정보와 프로젝트에서 사용 중인 패키지의 의존성을 관리하는 곳

- `npm install express`

  - express : Node.js 의 API를 단순화하고 유용한 기능들을 더 추가 시켜 Node.js 를 더 편리하고 유용하게 사용할 수 있게 해주는 모듈

- index.js 파일 생성
  - Node.js 에서 진입점이 되는 파일

<h2>라우팅 및 서버 구동</h2>

```javascript
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
```

`node index.js`

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/5dfa5b4c-a604-4889-b148-3f7ea4371fb2)

- `npm install -D nodemon` : nodemon 은 Node.js 애플리케이션의 코드 변경을 감지하고 자동으로 서버를 다시 시작해주는 도구

- package.json

```json
  "scripts": {
    "dev": "nodemon src/index.js",      // 추가
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

`npm run dev`

<h1>BE Folder Structure</h1>

```
├─node_modules
├─src
    ├─middleware
    │   └─auth.js
    ├─models
    │   └─User.js
    ├─routes
    │   └─users.js
    └─index.js
├─public
    └─//static 파일
├─.env
├─.gitignore
├─package-lock.json
└─package.json
```

<h1>필요한 package 설치</h1>

- `npm install bcryptjs` : `bcryptjs` 비밀번호를 해싱을 수행하기 위한 라이브러리
- `npm install jsonwebtoken` : `jsonwebtoken` JSON 형식의 토큰을 생성하고 검증하기 위한 라이브러리. 주로 (Authentication) 을 구현할 때 사용되며 특히, 웹 토큰 (JSON Web Token)을 생성하여 사용자의 세션 상태를 유지하거나 검증할 수 있게 한다.
- `npm install cors` : Express 애플리케이션에서 클라이언트와 서버 간의 HTTP 요청에 응답하고 자원 요청을 허용하는 미들웨어
- `npm install mongoose` : MongoDB와 상호 작용하기 위한 Node.js 라이브러리.

<h1>express.static()</h1>

- express.static : 이미지, CSS 파일 및 Javascript 파일과 같은 정적 파일을 제공하려면 Express의 express.static 내장 미들웨어 기능을 사용할 수 있다.

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/8aa45f1e-9deb-40cb-9783-219769a685bc)

- index.js

```javascript
const path = require("path");

// public 폴더 안의 정적 파일 가져오기
app.use(express.static(path.join(__dirname, "../public")));
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/32c17f29-8f63-4044-9c41-84bd03e88bc8)

- `__dirname` : 현재 파일이 위치한 디렉토리를 의미
  - `path.join` 을 사용하여 정적 파일이 위치한 디렉토리 경로를 지정합니다.
- `"../public"` 은 정적 파일들이 위치한 디렉토리

`app.use("가상경로", express.static("public"));` : 가상경로로 사용할 수 있지만 노드 프로세스를 시작하는 디렉토리는 상대적이기에 위의 예시인 절대 경로로 사용하는 것을 권장.

<h1>Cors</h1>

- Server와 Client 간 Port가 다르거나 도메인이 다르면 즉, Origin이 다르면 Request 를 보낼 수 없다.
  - Why? 보안을 위한 Same Origin Policy 정책 때문 (동일 출처 정책)
- Cross-Origin Resource Sharing 를 사용하면 된다.
- `app.use(cors())`

<h1>Express.json</h1>

`app.use(express.json())`

```javascript
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
```

https://github.com/JEONGSUJONG/readme-main/assets/142254876/bb725cbd-f045-490d-8385-216f9922e008

<h1>mongoose</h1>

- Mongoose : 데이터를 만들고 관리하기 위해서 먼저 Schema 를 만들고 그 스키마로 모델을 만든다. 몽구스는 MongoDB 를 쓸 때 사용해도 되고 안 써도 되는 선택사항

1. 스키마를 생성한다
2. 스키마를 이용하여 모델을 만든다
3. 모델을 이용하여 데이터를 CRUD 할 수 있다.

```javascript
const mongoose = require("mongoose");

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
  price: {
    type: Number
  }
  ...
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
```

- 애플리케이션 계층에서 특정 스키마를 적용

  - 모델 유효성 검사
  - MongoDB 작업을 쉽게 하기 위한 기타 기능

- Schema : Mongoose 스키마는 문서 (Document)의 구조, 기본값, 유효성 검사를 정의 (default: 0, required: true/false)
- Model : Mongoose 모델은 레코드 생성,쿼리,업데이트,삭제 등을 위한 데이터 베이스 인터페이스 제공

<h2>MongoDB Atlas Cloud Service</h2>

https://www.mongodb.com/ko-kr

로그인 -> new project -> database -> Build a Database

-> DatabaseAccess (username, password) 기억하기

```javascript
const mongoose = require("mongoose");

// mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
```

- URL : Atlas -> Deployment/Database -> Connect -> Drivers -> `Add your connection string into your application code` URL 복사 후 .env 파일에 넣기 -> URL 에 `<username>:<password>` 에 DatabaseAccess 설정한 username과 password 넣어주기

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/a6d204e6-46ca-481e-90c8-93ef31eed596)
정상적으로 연결되었다..!

- MongoDB Compass 에서도 동일한 URL 적용

<h2>User Schema 생성</h2>

- models/User.js

```javascript
const mongoose = required("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true, // 문자열 양 끝 공백 제거
    unique: 1, // 중복된 값 허용 x
  },
  password: {
    type: String,
    minLength: 5,
    required: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

<h1>Express 에러 처리</h1>

- 기본 라우트에서 에러 발생시키기
```javascript
app.get("/", (req, res) => {
  throw new Error("This is Error");
});
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/3400c926-ca16-40a1-b059-e38ee3b36ec5)

- 실행하면 바로 서버가 다운(Crash) 된다 (에러 처리 미들웨어 필요)

```javascript
app.get("/", (req, res) => {
  throw new Error("This is Error");
});

// 에러 처리기
app.use((error, req, res, next) => {
  res.send(error.message);
});
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/ff8d7f0c-ce29-45af-9497-da541b62231d)

- 위와같으면 서버가 다운 되지 않고 에러 메시지를 보여준다.
- 하지만, 비동기 요청으로 인한 에러는 에러 처리기에서 못 받는다.

```javascript
app.get("/", (req, res) => {
  setImmediate(() => {
    throw new Error("This is Error");
  });
});

app.use((error, req, res, next) => {
  res.send(error.message);
});
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/6c16141e-8d2c-4fa9-89ba-c326681568d2)


<h2>How to solve?</h2>

- next 이용하기

```javascript
app.get("/", (req, res, next) => {
  setImmediate(() => {
    next(new Error("This is Error"));
  });
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message || 'Internal Server Error');
});
```

</details>


<details>
<summary>📅 2024.02.01</summary>

<h1>RegisterRouter생성</h1>

- "회원가입" 을 클릭하면 client가 thunkFunction 내에서 비동기 요청을 보냄

```javascript
const response = await axiosInstance.post(`/users/register`, body);
return response.data;
```

- 서버에서 이 비동기 요청을 처리해주어야함.

- routes/user.js
```javascript
const express = require("express");
const router = express.Router();

router.post("/users/register", (req, res) => {
  // User 데이터를 저장해야함.
});


module.exports = router;
```

- index.js
```javascript
const UserRouter = require("./routes/user-router");
app.use('/api/v1/users', UserRouter);
```

- `api/v1` 으로 받으니 FE - axios.js 수정해줘야함

```javascript
baseURL: import.meta.env.PROD ? "" : "http://localhost:5000/api/v1",
```


- req.body 받기

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/9499ab40-1524-413d-aa28-44f4db7d81f1)

```javascript
router.post("/users/register", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (error) {
    next(error)
  }
});
```

- req.body 안에 존재하는 `email` `image` `name` `password` 를 받아온다.

https://github.com/JEONGSUJONG/readme-main/assets/142254876/02c49e16-d122-44e1-8a5e-00db24e9d982


<h1>비밀번호 암호화</h1>

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/b442d43e-184d-4837-aa61-c81d7d5b6220)

위의 DB에서는 password가 노출되어 해커가 db를 열게되면 쉽게 user의 password을 알 수 있게된다.

- bcryptjs
  - `npm install bcryptjs --save`


<h2>비밀번호 저장 방법</h2>

1. 원본 비밀번호 저장 (최악)
2. 비밀번호를 암호화 키 (Encryption Key)와 함께 암호화 (양방향)
  - 어떠한 암호를 이용해서 비밀번호를 암호화 하고 그 암호를 이용하여 복호화 가능.
    - "1234" -> 암호화(알고리즘+암호화 키) -> "qUuFwnAdNnDs"
    - "qUuFwnAdNnDs" -> 복호화 -> "1234"
  - 암호화 키가 노출되면 알고리즘은 대부분 오픈되어있어 위험함.
3. SHA256 해시(Hash)해서 저장(단방향)
  - https://emn178.github.io/online-tools/sha256
    - "1234" -> 해시 -> "qUuFwnAdNnDs"
    - "qUuFwnAdNnDs" -> 복호화 불가능!
  - 단, "1234" 와 같은 비밀번호는 "qUuFwnAdNnDs" 와 같이 암호화 되므로 레인보우 테이블(함호화 전과 후를 갖고있는 테이블)을 비교하여 찾아낼 수 있다.
4. 솔트(salt) + 비밀번호(plain pw) 를 해시로 암호화해서 저장
  - "1234" -> salt + "1234" -> 암호화된 값
  - "1234" -> salt + "1234" -> 다른 암호화된 값

- bcrypt는 salt를 사용하는 암호화 알고리즘으로 그 값을 DB에 저장하게 된다
  
<h3>UserSchema</h3>

`userSchema.pre()` : 스키마를 저장하기 전에 먼저 호출되어 해시화를 진행해준다.

- user-schema.js
```javascript
const bcrypt = require("bcryptjs");
...
userSchema.pre('save', async function (next) {
  let user = this;    // user의 data 들어감 (email, name ...)
  if (user.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  }
  next();
})
// mogoose 하기 전에 작성해줘야함!
const User = mongoose.model("User", userSchema);
```

https://github.com/JEONGSUJONG/readme-main/assets/142254876/32c6a1a9-0cc9-4956-b36d-802beda0b619

</details>

<details>
<summary>📅 2024.02.02</summary>

<h1>인증 절차가 필요한 이유</h1>

- 만약 client와 server 간의 첫 번째 요청에서 자신이 "123"이라고 말해도 그 후 서버에게 다시 물어보면 서버는 내가 누군지 모른다.
- HTTP 는 stateless 하기 때문이다.
  - 상태 비저장 프로토콜은 서버가 여러 요청 기간 동안 각 사용자에 대한 정보나 상태를 유지할 필요가 없다.
    - 성능(performance) 저하 문제 : 각 요청에 대한 연결을 재설정하는 데 소요되는 시간/대역폭을 최소화하기 위한 것
    - 만약, 요청 하나하나에 사용자의 status 와 info를 포함하면 server는 누군지는 알지만 많은 트래픽으로 성능 저하의 원인이 된다.
    - 그래서 인증 절차가 필요하다.

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/00573708-7999-4676-a8ea-2a4f25600798)
 
- (2) Token 안에 유저의 정보를 포함하는 토큰을 생성한다.
- (3) 응답을 보낼 때 HTTP header 에 Token과 같이 보낸다.
- (5) 요청을 보낼 때 역시 Token을 같이 보내준다.
- (6) server에서는 Token을 복호화해서 갖고 있는 유저 정보를 알 수 있다. (stateless -> statefull)

<h2>JWT</h2>

- JWT (JSON Web Token) : 당사자간에 정보를 JSON 개체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준 (RFC 7519) 이다. 
- 정보를 안전하게 전할 때 혹은 유저의 권한 같은 것을 체크 하기 위해서 사용되는 모듈

<h3>JWT 구조</h3>

[https://jwt.io/](https://jwt.io/)

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/fdb509bc-a3c4-466b-bdba-c07a3014ff69)

- Header(red) : Token에 대한 메타 데이터 포함 (타입, 해싱 알고리즘)
- Payload(purple) : 유저 정보(issuer), 만료 기간(expiration time), 주제(subject) 등등 ..
- Verify Signature(blue) : Token이 보낸 사람에 의해 서명되었으며 어떤 식으로도 변경되지 않았는지 확인하는 데 사용되는 서명
  - 서명은 헤더 및 페이로드 세그먼트, 서명 알고리즘, 비밀 / 공개 키를 사용하여 생성됨.

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/b04d0b49-9d7f-4377-993a-58355ae17503)

1. Admin 유저가 보고자 할 경우 (관리자 권한 페이지)
2. 요청을 보낼 때 Token을 Header에 넣어서 같이 보냄
3. 서버에서는 JWT를 이용하여 Token을 다시 생성한 후 두 개를 비교
  - 서버에서 요청에서 같이 온 Header랑 payload를 가져오고 서버안에 있는 Secret 을 이용하여 Signature 부분을 다시 생성
  - Client에서 온 Headers + Client에서 온 Payload + Server에서 갖고 있는 Secret Text
4. 일치하면 Admin 유저가 원하는 글을 볼 수 있다.


<h1>Login Router 생성</h1>

- FE 

```jsx
const response = await axiosInstance.post(`/users/login`, body);
```

- 현재 post 요청을 받아올 API 가 필요하다

- users-router.js

```javascript
// Login
UserRouter.post("/login", async (req, res, next) => {
  // req.body : email , password
  try {
    // 존재하는 유저인지 체크

    // 비밀번호가 올바른지 체크 (comparePassword 함수)

    // JWT 토큰생성

    // 토큰 생성 후 유저와 토큰 데이터 응답으로 보내주기
  } catch (error) {
    
  }
})
```

- comparePassword 함수는 user-shema 에서 정의한다.

```javascript
userSchema.methods.comparePassword = async function (plainPassword) {
  let user = this;

  const isMatch = await bcrypt.compare(plainPassword, user.password);
  return isMatch;
};
```

- 기능은 사용자의 비밀번호 비교를 수행한다.
- `plainPassword` 를 해시된 비밀번호와 비교하여 일치 여부를 return 한다.

- users-router.js

```javascript
// Login
UserRouter.post("/login", async (req, res, next) => {
  // req.body : email , password(plainText)
  try {
    // 존재하는 유저인지 체크
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Auth failed, email not found");
    }
    // 비밀번호가 올바른지 체크
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(400).send("Wrong password");
    }
    const payload = {
      userId: user._id.toHexString(), // Obj Id 이기 때문에 String으로 변환
    }
    // JWT Token 생성
    const accessToken = JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    // 토큰 생성 후 유저와 토큰 데이터 응답으로 보내주기
    return res.json({ user, accessToken });
  } catch (error) {
    next(error);
  }
})
```

- `userSchema` 에서 받아온 `isMatch` 로 평문과 암호화된 비밀번호를 비교한 값으로 판단한다.
- `payload` 는 토큰에 담기는 정보를 정의하고 여기선userId가 들어가있다.
- `JWT.sign` 메소드는 `payload` 와 Secret Key로 JWT 토큰을 생성한다.

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/0704814d-5c12-407b-94d2-aa7c6cf75186)

- `return res.json({ user, accessToken })` 에서 user 데이터를 반환하면 보안적 측면에서 위험하지 않을까?
  - Client와 Server간의 통신에서 인증 정보를 주고 받을 때 일반적으로 db에 저장된 회원 객체에서 Access Token은 필요한 정보만 추출하여 따로 저장하게 된다.
  - 또한, user 데이터를 반환하면 클라이언트에서 해당 정보를 사용하여 로그인한 사용자의 상태를 지속적으로 유지할 수 있다.
    - 로그인 한 번 하고나면 토큰을 이용하여 인증 정보를 검증할 때마다 모든 인증과정을 반복할 필요가 없이 로그인 상태가 유지된다.


</details>


<details>
<summary>📅 2024.02.07</summary>

<h1>Auth By </h1>

FE 페이지 링크 올리기

- users-router.js

```javascript
// Auth by Token
UserRouter.post("/auth", auth, async (req, res, next) => {
  return res.json({
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});
```

- "/auth" 엔드 포인트에 대한 Post 요청을 처리한다.
- 요청이 들어오면 `auth` 미들웨어를 실행하여 토큰의 유효성 검사 후 사용자 인증을 한다.
- JSON 형식으로 반환

- auth.js : 이 미들웨어는 클라이언트에서 HTTP 요청으로 받아온 Token을 헤더에서 가져와 분석한다.

```javascript
const jwt = require('jsonwebtoken');
const User = require("../models/user-schema");

let auth = async (req, res, next) => {
    // Token을 request headers 에서 가져오기
    const authHeader = req.headers['authorization'];

    // Bearer ---.---.---
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return res.sendStatus(401);

    try {
        // Token이 유효한지 확인
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decode.userId });

        if (!user) {
            return res.status(400).send("사용자를 찾을 수 없습니다.");
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = auth;
```

![image](https://github.com/JEONGSUJONG/readme-main/assets/142254876/20fd7eda-760a-4dfb-93e0-111b63621021)

- `Bearer ---.---.---` 형식의 토큰을 `" "` 로 구분하여 헤더 중 토큰 부분만 가져온다.
- jwt decode 를 이용하여 유효한지 검사한다.

</details>