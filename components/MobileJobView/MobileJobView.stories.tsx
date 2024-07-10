/* global module */

import React from 'react';
import MobileJobView from './MobileJobView';
import data from './MobileJobView.data';

const MobileJobViewStory = {
    title: 'Components/MobileJobView',
    component: MobileJobView,
};
export default MobileJobViewStory;

export const MobileJobViewWithData = () => <MobileJobView {...data} />;
export const MobileJobViewWithoutData = () => <MobileJobView />;
