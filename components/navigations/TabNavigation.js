import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Home from '../home/Home'
import Search from '../home/Search'
import Profile from '../home/Profile'
import Notification from '../home/Notification'


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={({route})=> ({
            tabBarIcon:({focused, color, size}) => {
                let iconName;
                if(route.name === "Home"){
                    iconName = focused ? "home" : "home-outline"
                }
                else if(route.name === 'Search'){
                    iconName = focused ? "md-search-sharp" : "md-search-outline"
                }
                else if(route.name === 'Notification'){
                    iconName = focused ? "notifications-sharp" : "notifications-outline"
                }
                else if(route.name === 'Profile'){
                    iconName = focused ? "user" : "user-o"

                    return <FontAwesome name={iconName} size={size} color={color} />;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'white',
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                height:70,
                borderRadius:20,
                marginHorizontal:10,
                elevation:0,
            }
        })}>
            <Tab.Screen name="Home" component={Home} options={{headerShown:false }}/>
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default TabNavigation

