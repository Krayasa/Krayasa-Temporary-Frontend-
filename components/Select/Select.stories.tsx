/* global module */

import React from 'react';
// import Select from './Select';
import data from './Select.data';
import { Select } from './Select';

const SelectStory = {
    title: 'Components/Select',
    component: Select,
};
export default SelectStory;

export const SelectWithData = () => <Select {...data} />;
export const SelectWithoutData = () => <Select />;
