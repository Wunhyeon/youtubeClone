import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = (req, res) => {
  // res.send("postJoin");
  console.log("req.body : ", req.body);
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do : Register User
    // To Do : Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login");
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To Do : Process Log out
  res.redirect(routes.home);
};

/*users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
*/

export const users = (req, res) => {
  res.send("users");
};
export const userDetail = (req, res) => {
  res.render("userDetail");
};
export const editProfile = (req, res) => {
  res.render("editProfile");
};
export const changePassword = (req, res) => {
  res.render("changePassword");
};
