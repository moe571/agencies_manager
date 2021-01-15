const express = require("express");
const router = express.Router();

// Agency Model
const Agency = require("../../models/Agency");

// @route   GET api/ageincies
// @desc    Fetch All agencies
// @access  Private

router.get("/", (req, res) => {
  Agency.find()
    .then((agencies) => res.json(agencies))
    .catch((err) => console.log(err));
});

// @route   POST api/agencies
// @desc    Post a new Agency
// @access  Private

router.post("/", (req, res) => {
  const newAgency = new Agency({
    name: req.body.name,
    address: req.body.address,
    wilaya: req.body.wilaya,
    commune: req.body.commune,
    phone: req.body.phone,
  });
  newAgency
    .save()
    .then((agency) => res.status(200).json(agency))
    .catch((err) => console.log(err));
});

// @route   DELETE api/agencies/:id
// @desc    Delete an Agency
// @access  Private

router.delete("/:id", (req, res) => {
  Agency.findById(req.params.id)
    .then((agency) => agency.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ success: false }));
});

module.exports = router;
