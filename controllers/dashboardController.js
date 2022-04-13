const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const dashboardView = (req, res) => {
  User.find({}, function(err,users){
    res.render("dashboard", {
      user: users
    });
    });
    if(req.user.statu == "Block")
    {
      res.redirect("/login");
    }
  };
  const deleteuser = (req, res) =>{
    const id = req.params.id;
    id.split(',').forEach( function(e){
    User.deleteOne({_id: e},function(err) {
    if(err) return console.log(err);
  });
  
}); res.redirect("/dashboard");};

  const blockuser = (req, res) =>{
  const id = req.params.id;
  id.split(',').forEach( function(e){
  User.updateOne({_id: e},{$set: {statu : "Block"}},function(err) {
    if(err) return console.log(err);
  });
  });
  res.redirect("/dashboard");};

  const unblockuser = (req, res) =>{
    const id = req.params.id;
    id.split(',').forEach( function(e){
    User.updateOne({_id: e},{$set: {statu : "Active"}},function(err) {
      if(err) return console.log(err);
    })
    });res.redirect("/dashboard");};
  module.exports = {
    dashboardView,
    deleteuser,
    blockuser,
    unblockuser,
  };