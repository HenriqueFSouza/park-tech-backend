import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Application´s running on port ${PORT}`);
});
