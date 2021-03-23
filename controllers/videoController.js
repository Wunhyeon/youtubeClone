import path from "path";
// import { db } from "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  //   let p = path.join("..", "views", "home.pug");
  //   res.render(p);
  try {
    const videos = (await Video.find({})) || [];
    console.log("videos : ", videos);
    res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    console.log("err : ", err);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos: db });
};

export const videos = (req, res) => {
  res.send("videos");
};

export const getUpload = (req, res) => {
  res.render("upload");
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  console.log(req.file);
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log("new Video : ", newVideo);
  //To Do : Upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) => {
  res.render("videoDetail");
};

export const editVideo = (req, res) => {
  res.render("editVideo");
};

export const deleteVideo = (req, res) => {
  res.send("delete Video");
};
