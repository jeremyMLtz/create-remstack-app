const fs = require("fs-extra");
const path = require("path");

const scaffoldProject = async (templateDir, projectDir) => {
  fs.copySync(templateDir, projectDir);
  fs.renameSync(
    path.join(projectDir, "_gitignore"),
    path.join(projectDir, ".gitignore")
  );
};

module.exports = scaffoldProject;
