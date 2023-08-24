var express = require('express');
const FlycamModel = require('../models/FlycamModel');
var router = express.Router();

router.get("/", async (req, res) => {
    var flycam = await FlycamModel.find();
    res.render("toy/flycam/index", { flycam: flycam });
});
router.get("/edit/:id", async (req, res) => {
    var id = req.params.id;
    var flycam = await FlycamModel.findById(id);
    res.render("toy/flycam/edit", { flycam: flycam });
  });
  
  router.post("/edit/:id", async (req, res) => {
    var id = req.params.id;
    var updatedFlycam = req.body;
  
    var originalFlycam = await FlycamModel.findById(id);
  
    Object.keys(updatedFlycam).forEach((key) => {
      if (updatedFlycam[key] !== "" && updatedFlycam[key] !== undefined) {
        updatedFlycam[key] = updatedFlycam[key];
      }
    });
    await originalFlycam.save();
    res.redirect("/toy/flycam");
  });

  router.get("/add", (req, res) => {
    res.render("toy/flycam/add");
  });
  
  router.post("/add", async (req, res) => {
    var flycam = req.body;
    await FlycamModel.create(flycam);
    res.redirect("/toy/flycam");
  });

  router.get("/delete/:id", async (req, res) => {
    var id = req.params.id;
    await FlycamModel.findByIdAndDelete(id)
      .then(() => console.log("Delete successfully"))
      .catch((error) => console.log("Delete failed"));
    res.redirect("/toy/flycam");
  });
  
  router.get("/deleteall", async (req, res) => {
    await FlycamModel.deleteMany()
      .then(() => console.log("Delete successfully"))
      .catch((error) => console.log("Delete failed"));
    res.redirect("/toy/flycam");
  });

module.exports = router;