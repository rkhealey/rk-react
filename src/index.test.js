import _ from 'lodash';
import initStoryshots from '@storybook/addon-storyshots';

import index from './';

initStoryshots();

describe('/index', () => {
  it('should export components', () => {
    expect(_.isFunction(index.Card)).toEqual(true);
  });
});
