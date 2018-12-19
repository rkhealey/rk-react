import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tab from './tab';
import TabPanel from './tab-panel';

const TabList = styled.ul`
  display: flex;
  justify-content: center;
`;


const TabGroup = ({ input, options }) => (
  <div>
    <TabList role="tablist">
      {_.map(options, ({ value, text }) => (
        <Tab
          id={value}
          isActive={value === input.value}
          key={value}
          onClick={input.onChange}
        >
          {text}
        </Tab>),
      )}
    </TabList>
    {_.map(options, ({ panel, value }) => (
      <TabPanel id={value} isActive={value === input.value} key={value}>
        {panel}
      </TabPanel>),
    )}
  </div>
);

TabGroup.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      panel: PropTypes.node.isRequired,
      text: PropTypes.node.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TabGroup;
