const router = require("express").Router();
const { handphone } = require("../controllers");

// GET localhost:8080/handphone => Ambil data semua informasi handphone
router.get("/handphone/", handphone.getDataHandphone);

// GET localhost:8080/handphone/2 => Ambil data semua informasi handphone berdasarkan id
router.post("/handphone/:id", handphone.getDataHandphoneByID);

//POST localhost:8080/handphone/add => Tambah data informasi handphone ke database
router.post("/handphone/add", handphone.addDataHandphone);

//POST localhost:8080/handphone/2 => Edit data informasi handphone
router.post("/handphone/edit", handphone.editDataHanphone);

//POST localhost:8080/handphone/delete => Delete data handphone
router.post("/handphone/delete/", handphone.deleteDataHandphone);

module.exports = router;
