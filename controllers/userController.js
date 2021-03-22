export const join = (req, res) => {
  res.render("join");
};
export const login = (req, res) => {
  res.render("login");
};
export const logout = (req, res) => {
  res.send("Logout");
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
