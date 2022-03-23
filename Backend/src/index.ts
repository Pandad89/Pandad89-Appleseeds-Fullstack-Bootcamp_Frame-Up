import { app } from "./app";
// import { connect } from "mongoose";

// const URI = `mongodb://127.0.0.1:27017/FrameUp`;
// connect(URI);

const PORT = process.env.PORT || 8080;

const SERVER_MESSAGE = `server is up and running on port ${PORT}`;

app.listen(PORT, () => console.log(SERVER_MESSAGE));
