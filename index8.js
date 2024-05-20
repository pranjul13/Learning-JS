// Modules - Global and non-global.
// Modules that we have to import are non-global modules.
// Global modules are in the environment by default and don't have to be imported.

const fs = require('fs');   // File system has to be imported in the script.
fs.writeFileSync("Hello.text", "Sample files, created by the filesystem.")  // Creates the file with the specified name and write the specifed content in the file.

console.log(__dirname); // Prints the name of the directory we are working in.  (Two underscore, followed by dirname/filename, etc.)
console.log("-->", __filename);

// To import a specific function of a particular module, we can use the dot notation.
const fs1 = require('fs').writeFileSync;
fs1('abc.text', "abc");