/* eslint-disable no-console */
process.env.NODE_ENV = 'production';


const webpack = require('webpack');
const config = require('../webpack.config.prod');

function build() {
  console.log('Creating an optimized production build...');
  webpack(config).run((err) => {
    if (err) {
      console.error('Failed to create a production build. Reason:');
      console.error(err.message || err);
      process.exit(1);
    }
  });
}

build();
