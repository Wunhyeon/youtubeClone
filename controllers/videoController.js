import path from "path";

export const home = (req, res) => {
  //   let p = path.join("..", "views", "home.pug");
  //   res.render(p);
  res.render("home", { pageTitle: "Home" });
};

export const search = (req, res) => {
  // const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const videos = (req, res) => {
  res.send("videos");
};

export const upload = (req, res) => {
  res.render("upload");
};

export const videoDetail = (req, res) => {
  res.send("video Detail");
};

export const editVideo = (req, res) => {
  res.render("editVideo");
};

export const deleteVideo = (req, res) => {
  res.send("delete Video");
};
