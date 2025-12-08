import express from "express";
import cors from "cors";
import "dotenv/config";

import ExpensesRouter from "./routes/expenses.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use("/expenses", ExpensesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
