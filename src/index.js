const { Command } = require("commander");
const path = require("path");
const scaffoldProject = require("./lib/scaffoldProject");
const installDependencies = require("./lib/installDependencies");

const program = new Command();

program
  .arguments("<directory>")
  .description("Create a RemStack app in the specified directory")
  .action(async (directory) => {
    const templateDir = path.join(__dirname, "template");
    const destinationDir = path.resolve(directory);

    try {
      await scaffoldProject(templateDir, destinationDir);
      console.log("Created Boiler Plate!");
      installDependencies(path.join(destinationDir, "package.json"));
    } catch (err) {
      console.error("Error creating RemStack app:", err);
    }
  });

program.parse(process.argv);
