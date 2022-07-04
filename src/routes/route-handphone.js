const router = require("express").Router();
const { sql6503915 } = require("../controllers");

// GET localhost:8080/handphone => Ambil data semua informasi handphone
router.get("/handphone/", sql6503915.getDataHandphone);

// GET localhost:8080/handphone/2 => Ambil data semua informasi handphone berdasarkan id
router.get("/handphone/:id", sql6503915.getDataHandphoneByID);

//POST localhost:8080/handphone/add => Tambah data informasi handphone ke database
router.post("/handphone/add", sql6503915.addDataHandphone);

//POST localhost:8080/handphone/2 => Edit data informasi handphone
router.post("/handphone/edit", sql6503915.editDataHanphone);

//POST localhost:8080/handphone/delete => Delete data handphone
router.post("/handphone/delete/", sql6503915.deleteDataHandphone);

module.exports = router;
