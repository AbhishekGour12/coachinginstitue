import express from "express";
import { addVideo, getAllVideos, getVideosByClass, updateVideo, deleteVideo } from "../controllers/VideoController.js";

const router = express.Router();

router.post("/", addVideo);
router.get("/", getAllVideos);
router.get("/class/:classId", getVideosByClass);
router.put("/:id", updateVideo);
router.delete("/:id", deleteVideo);

export default router;
