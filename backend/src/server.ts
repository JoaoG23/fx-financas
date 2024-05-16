import app from "./app";

const port = process.env.PORT_SERVER || 3000;

app.listen(port, async () => {
  console.info(`API Fx-finances rodando na porta : ${process.env.PORT_SERVER}`);
});
