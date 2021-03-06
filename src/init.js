import "regenerator-runtime";
import "dotenv/config"; // can load .env file
import "./db"; // mongodb import
import "./models/Video"; // data model import
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 4000; // heroku가 주는 PORT있으면 그걸로, 없으면 내 컴퓨터 PORT로

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}`); // handler 정의

app.listen(PORT, handleListening); // start server listening / port 번호와 서버가 시작될 때 작동하는 함수를 전달