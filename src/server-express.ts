import express, { Request, Response, Application } from "express";
import { PORT as port } from "./config";

const PORT = Number(port) || 8000;

const app: Application = express();

// middle ware untuk memparsing body, supaya dapat mengambil request.body dari sebuah request
// app.use(express.json());

// app.get("/api", (req: Request, res: Response) => {
//   res.status(200).send("This is express /api with GET method");
// });

// untuk mendapatkan semua data users
app.get("/api/users", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Ini List Users",
  });
});

// untuk mendapatkan satu data users
app.get("/api/users/:id", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Ini Data 1 User",
  });
});

// untuk menginsert atau mensubmit atau memasukan data user baru
app.post("/api/users", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Ini Create Data User",
  });
});

app.patch("/api/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).send({
    message: "Ini Edit Data Users",
    data: id,
  });
});

app.listen(PORT, () => {
  console.log(`Server express started on port ${PORT}`);
});
