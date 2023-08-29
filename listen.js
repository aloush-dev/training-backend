const app = require("./app");

app.listen(1066, (err) => {
  if (err) throw err;
  console.log("server listening");
});
