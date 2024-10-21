import express, { Request, Response, Application } from "express";
import { PORT as port, MOCK_API_URL } from "./config";
import axios from "axios";

const PORT = Number(port) || 8000;

const app: Application = express();

// middle ware untuk memparsing body, supaya dapat mengambil request.body dari sebuah request
// app.use(express.json());

// app.get("/api", (req: Request, res: Response) => {
//   res.status(200).send("This is express /api with GET method");
// });

// untuk mendapatkan semua data users
app.get("/api/users", async (req: Request, res: Response) => {
  // const { id } = req.params;
  const { data } = await axios.get(`${MOCK_API_URL}/users`);

  res.status(200).send({
    message: "Ini List Users",
    data,
  });
});

// untuk mendapatkan satu data users
app.get("/api/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = await axios.get(`${MOCK_API_URL}/users/${id}`);

  res.status(200).send({
    message: "Ini Data 1 User",
    data,
  });
});

// untuk menginsert atau mensubmit atau memasukan data user baru
app.post("/api/users", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Ini Create Data User",
  });
});

app.patch("/api/users/:id", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Ini Edit Data Users",
  });
});

app.listen(PORT, () => {
  console.log(`Server express started on port ${PORT}`);
});
