require('./check-versions')();

process.env.NODE_ENV = 'production';

const ora = require('ora');
const rimraf = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();

rimraf(
  path.join(config.build.assetsRoot, config.build.assetsSubDirectory),
  (err) => {
    if (err) {
      throw err;
    }
    webpack(webpackConfig, (webpackErr, stats) => {
      spinner.stop();
      if (webpackErr) {
        throw webpackErr;
      }
      process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })}\n\n`);

      console.log(chalk.cyan('Build complete.\n'));
      console.log(chalk.yellow(
        'Tip: built files are meant to be served o'
        + 'ver an HTTP server.\n'
        + 'Opening index.html over file:// won\'t work.\n',
      ));
    });
  },
);
