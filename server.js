import express from "express";
import morgan from "morgan";
import webpush from "web-push";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve("./my-app/build")));

const VAPID_KEYS = {
  publicKey:
    "BGoJtbfsETv4VF8rDvCriirfThmrGrL_233BpNOf9gPicU2Wtri4rr6uRUhDDLkNuxYfe00Vlggyny096PgobnY",
  privateKey: "WNNSEsFvDyorITYdsQtKrh4xl9qgQtUhnCxcZzY7xpg",
};
webpush.setVapidDetails(
  "mailto:an@test.com",
  VAPID_KEYS.publicKey,
  VAPID_KEYS.privateKey
);
app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: "Push Test" });
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});

const port = 5000;
app.listen(port, () => {
  console.log(`serving is running in a port ${port}`);
});
