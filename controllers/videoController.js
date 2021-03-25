import path from "path";
// import { db } from "../db";
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  //   let p = path.join("..", "views", "home.pug");
  //   res.render(p);
  try {
    const videos = (await Video.find({}).sort({ _id: -1 })) || [];
    console.log("videos : ", videos);
    res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    console.log("err : ", err);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (err) {
    console.log("err in search : ", err);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
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

export const videoDetail = async (req, res) => {
  console.log("videoDetail -req.params : ", req.params);
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    console.log("video : ", video);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (err) {
    console.log("Err in video Detail : ", err);
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (err) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {}
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (err) {}
  res.redirect(routes.home);
};
