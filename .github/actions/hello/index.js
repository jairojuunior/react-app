//npm install -D @zeit/ncc
//npx ncc build .github/actions/hello/index.js -o .github/actions/hello/dist
const core = require("@actions/core");
const github = require("@actions/github");

try {
  //throw( new Error("some error message"));
  const name = core.getInput("who-to-greet");

  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));

  //Allows to export a variable to another step
  core.exportVariable("VARIABLE_NAME", "value");

  //These logs will not make the action fail
  //but will appear in the log if enabled
  core.debug("Debug message");
  core.warning("Debug message");
  core.error("Debug message");
} catch (error) {
  core.setFailed(error.message);
}
