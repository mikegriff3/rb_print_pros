const router = require("express").Router();

router.use("/rbpp", require("./rbRouter"));
// export
module.exports = router;
