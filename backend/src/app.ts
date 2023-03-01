import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import todasRouters from "./routes/principalRouter";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    this.routers();
  }

  private middleware(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routers(): void {
    this.express.use("/api/v1", todasRouters);
  }
}

export default new App().express;
