/*
we will export all of the components used in this file as a
giant object to later be used in mdx files

*/

import React from 'react';
import Title from './title';
import Subtitle from './subtitle';
export default {
  h1: (props) => <Title {...props} />,
  h2: (props) => <Subtitle {...props} />,
};
