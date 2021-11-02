const router = require("express").Router();
const TextCtrl = require("../controllers/words");

router.post("/create", TextCtrl.create);

// router.patch("/update/:id", TextCtrl.update);

router.get("/fetchMany", TextCtrl.fetchMany);

// router.get("/fetchOne/:id", TextCtrl.fetchOne);

// router.delete("/delete/:id", TextCtrl.delete);

module.exports = router;
