const router = require("./routes/index");
const express = require("express");
const app = express();
app.use(router);
const port = 1245;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

export default app;
module.exports = app;
