import app from "./app";
import { PrismaConexao } from "./configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();
const port = process.env.PORT_SERVER || 3000;

app.listen(port, async () => {
  console.info(`API Fx-finances rodando na porta : ${process.env.PORT_SERVER}`);
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  console.log("Shutdown complete.");
  process.exit(0);
});
