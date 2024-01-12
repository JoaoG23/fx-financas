import multer from "multer";
import { extname } from "path";
import { gerarIndiceRandomico } from "../indices/gerarIndiceRandomico/gerarIndiceRandomico";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/usuarios");
  },
  filename: function (req, file, cb) {
    const extensao = extname(file.originalname);

    cb(null, `${gerarIndiceRandomico()}${extensao}`);
  },
});

export const uploads = multer({ storage: storage });
