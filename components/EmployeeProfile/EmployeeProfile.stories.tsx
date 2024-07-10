/* global module */

import React from 'react';
import EmployeeProfile from './EmployeeProfile';
import data from './EmployeeProfile.data';

const EmployeeProfileStory = {
    title: 'Components/EmployeeProfile',
    component: EmployeeProfile,
};
export default EmployeeProfileStory;

export const EmployeeProfileWithData = () => <EmployeeProfile {...data} />;
export const EmployeeProfileWithoutData = () => <EmployeeProfile />;
