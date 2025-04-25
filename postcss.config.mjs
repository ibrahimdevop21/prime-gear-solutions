/** @type {import('postcss-load-config').Config} */
// PostCSS configuration file
const config = {
  plugins: {
    // Include the @tailwindcss/postcss plugin for Tailwind CSS support
    "@tailwindcss/postcss": {},
     // Include the autoprefixer plugin for vendor prefixing
    autoprefixer: {}
  }
};
// Export the configuration
export default config;
