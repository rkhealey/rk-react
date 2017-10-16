import _ from 'lodash';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../src', true, /.js$/);

function loadStories() {
  _.forEach(req.keys(), req);
}

setOptions({
  name: 'rk-react',
  // url: 'https://ahm.com.au',
  // goFullScreen: true,
  // showLeftPanel: true,
  showDownPanel: false,
  // showSearchBox: true,
  // downPanelInRight: true,
});

configure(loadStories, module);
