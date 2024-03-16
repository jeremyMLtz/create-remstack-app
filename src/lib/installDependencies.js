const path = require("path");
const { exec } = require("child_process");

const installDependencies = (packageJsonPath) => {
  const { dependencies } = require(packageJsonPath);

  if (dependencies) {
    const depsToInstall = Object.keys(dependencies).join(" ");
    console.log("Installing dependencies...");
    exec(
      `cd ${path.dirname(packageJsonPath)} && npm install ${depsToInstall}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error installing dependencies:", error);
          return;
        }
        console.log(stdout);
        console.error(stderr);
        console.log("Dependencies installed successfully!");
      }
    );
  }
};

module.exports = installDependencies;
