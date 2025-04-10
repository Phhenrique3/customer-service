const customExpress = require("./config/customExpress.js");

const app = customExpress();

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
