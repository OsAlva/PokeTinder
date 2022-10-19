const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3002;


// ℹ️ Starts the server on the port set in the environment variable PORT or 3000 if that's not available.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
