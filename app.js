import express from "express";
import cors from "cors";
import "dotenv/config";

import ExpensesRouter from "./routes/expenses.routes.js";
import UsersRouter from "./routes/users.routes.js";
import SavingsRouter from "./routes/savings.routes.js";
import BillsRouter from "./routes/bills.routes.js"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use("/expenses", ExpensesRouter);
app.use("/users", UsersRouter);
app.use("/savings", SavingsRouter);
app.use("/bills", BillsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
