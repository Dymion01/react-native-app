import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import TodoListScreen from '../screens/TodoList';
import Info from '../screens/Info';

import Colors from '../constans/Colors';
const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors.darkgrey,
                activeBackgroundColor: Colors.red,
                inactiveTintColor: Colors.peach,
                inactiveBackgroundColor: Colors.darkgrey
                
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="TodoListScreen"
                component={TodoListScreen}
                options={{
                    tabBarLabel: 'TodoList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Info"
                component = {Info}
                options = {{
                    tabBarLabel: 'Info',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="information" color={color} size={size} />
                    )
                }}
            />    
        </Tab.Navigator>
    );
};

export default BottomTabs;