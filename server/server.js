import express from 'express';
import "dotenv/config";
import cors from 'cors';
import completionRouter from './routes/completion.route.js';
const app = express();
const PORT = process.env.PORT;
app.use(express.json()); 
app.use(cors())

app.use("/", completionRouter)
app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));

