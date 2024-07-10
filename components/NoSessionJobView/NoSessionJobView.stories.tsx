/* global module */

import React from 'react';
import NoSessionJobView from './NoSessionJobView';
import data from './NoSessionJobView.data';

const NoSessionJobViewStory = {
    title: 'Components/NoSessionJobView',
    component: NoSessionJobView,
};
export default NoSessionJobViewStory;

export const NoSessionJobViewWithData = () => <NoSessionJobView {...data} />;
export const NoSessionJobViewWithoutData = () => <NoSessionJobView />;
