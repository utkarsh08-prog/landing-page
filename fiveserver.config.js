// fiveserver.config.js
// Cross-platform configuration for Five Server. Detects OS and sets the PHP binary path accordingly.
// Update the Windows path below to your XAMPP/WAMP/MAMP installation if needed.

const path = require('path');

function defaultPhpPath() {
  const platform = process.platform;
  if (platform === 'win32') {
    // Example XAMPP path on Windows — change this to your installed php.exe path
    return 'C:\\xampp\\php\\php.exe';
  }
  // macOS / Linux example
  return '/usr/bin/php';
}

module.exports = {
  // Use the environment variable FIVESERVER_PHP if you want to override without editing this file
  php: process.env.FIVESERVER_PHP || defaultPhpPath(),
  // You can add more overrides here, for example:
  // host: '0.0.0.0',
  // port: 8080,
};
