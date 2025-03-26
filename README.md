# DevPlayground


## Express + TypeScript Backend

This is a backend service built using **Express.js** and **TypeScript**, with MongoDB as the database. It includes a compiler router and follows best practices for error handling and environment configuration.

## 🚀 Features
- Express.js with TypeScript
- MongoDB integration
- Environment variable configuration with `dotenv`
- CORS enabled for cross-origin requests
- Modular route handling
- Graceful error handling

## 🛠 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```sh
PORT=4000
MONGO_URL=your_mongodb_connection_string
```

### 4️⃣ Start the Server
```sh
npm run dev
```

## 📁 Project Structure
```
.
├── src
│   ├── lib
│   │   ├── dbConnect.ts  # MongoDB connection
│   ├── routes
│   │   ├── compilerRouter.ts  # Compiler-related routes
│   ├── index.ts  # Main server file
├── package.json
├── tsconfig.json
├── .env  # Environment variables
├── README.md
```

## 🔌 API Endpoints
### 1️⃣ **Health Check**
**GET /**
```sh
Response: "OK"
```

### 2️⃣ **Compiler API**
**POST /compiler**
```json
{
  "code": "console.log('Hello, World!');",
  "language": "javascript"
}
```
**Response:**
```json
{
  "output": "Hello, World!\n"
}
```

## 🏗 Build and Run for Production
```sh
npm run build
npm start
```


