const core = require('@actions/core');

async function run() {
  try {
    // Get the inputs from the workflow file: https://github.com/actions/toolkit/tree/master/packages/core#inputsoutputs
    const theInput = core.getInput('the_input', { required: true});

    core.setOutput('the_output', theInput);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
