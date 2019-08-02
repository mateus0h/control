import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Dashboard from '../../src/screens/Dashboard';
import Settings from '../../src/screens/Settings';

export default createStackNavigator({
    Dashboard,
    Settings,
}, {
    initialRouteName: 'Dashboard',
});
