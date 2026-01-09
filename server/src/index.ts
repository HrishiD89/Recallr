import express from "express";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import mongoConnect from "./config/db.js";

const app = express();

app.post("/api/v1/signup", (req, res) => {});

app.post("/api/v1/signip", (req, res) => {});

app.post("/api/v1/content", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

const PORT: number = Number(process.env.PORT) || 8080;

app.listen(PORT, async (): Promise<void> => {
  try {
    await mongoConnect();
    console.log("Server is running at PORT", PORT);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Mongo connection failed:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
    process.exit(1);
  }
});
