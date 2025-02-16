module.exports = {
  content: [
    "./src/index.html", // Target index.html inside the src folder
    "./src/**/*.html",  // This ensures any HTML files inside src are included
    "./src/css/**/*.css" // Make sure your CSS files inside src are considered too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
