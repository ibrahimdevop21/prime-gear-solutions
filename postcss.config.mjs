/** @type {import('postcss-load-config').Config} */
// PostCSS configuration file
const config = {
  plugins: {
    // Include the Tailwind CSS plugin
    tailwindcss: {},
    // Include the autoprefixer plugin for vendor prefixing
    autoprefixer: {}
  }
};
// Export the configuration
export default config;
