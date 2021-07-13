(async function () {
  try {
    const yargs = require('yargs');
    const { exec } = require('../utils');

    // Define required arguments, help section and get arguments
    const argv = yargs
      .usage(`Usage: $0 <environment> [options]`) // help "Usage" description
      .demandCommand(1) // requiring 1 argument to be passed
      // .option('verbose', {
      //   describe: 'View detailed logs',
      // })
      .help() // for --help and -h to work
      .argv;
    console.log("🚀 ~ file: migration.js ~ line 1522222 ~ argv", argv)

    const ENVIRONMENT = argv._[0];

    switch (ENVIRONMENT) {
      case 'dev':
        break;
      case 'stage':

        break;
      case 'prod':

        break;

      default:
        throw new Error(`ERROR: wrong env as first argument: ${ENVIRONMENT}`);
    }

    await exec('node main.js');
  } catch (error) {
    console.error(error);
  }
})();