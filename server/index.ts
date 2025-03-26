import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./src/lib/dbConnect";
import { compilerRouter } from "./src/routes/compilerRoter";

config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

app.use("/compiler", compilerRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("OK");
});

// Connect to the database
dbConnect()
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.error("Database connection failed:", err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    if (process.env.MONGO_URL) {
        console.log(`Connected to MongoDB at: ${process.env.MONGO_URL}`);
    } else {
        console.warn("Warning: MONGO_URL is not defined in environment variables.");
    }
    console.log(`Server is running on http://localhost:${PORT}`);
});
