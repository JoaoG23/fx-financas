import multer from "multer";
import { extname } from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/usuarios");
  },
  filename: function (req, file, cb) {
    const id = req.params.id;
    const extensao = extname(file.originalname);

    cb(null, `${id}${extensao}`);
  },
});

export const uploads = multer({ storage: storage });
