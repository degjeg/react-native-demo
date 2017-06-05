/**
 * @flow
 */

import React from 'react';
import {Button, Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';

import SampleText from './SampleText';
import iconSet from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as MetIcon from 'react-native-vector-icons/MaterialIcons';

const MyNavScreen = ({navigation, banner}) => (
    <ScrollView style={styles.container}>
        <SampleText>{banner}</SampleText>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Icon.Button style={{margin: 0, backgroundColor: '#ffffff00'}}
                         name="home"
                         color='#ff0000'
                         size={135}
                         onPress={() => navigation.navigate('Home')}
                         title="Go to home tab"
            >

            </Icon.Button>
            <Text style={{fontFamily: 'Arial', fontSize: 22}}>Go to home tab</Text>
        </View>

        <Icon.Button style={{marginTop: 30}}
                     name="home"
                     size={35}
                     onPress={() => navigation.navigate('Home')}
                     title="Go to home tab"
        >
            <Text style={{fontFamily: 'Arial', fontSize: 22}}>Go to home tab</Text>
        </Icon.Button>
        <MetIcon.Button
            style={{margin: 110, backgroundColor: '#ff0000'}}
            name="settings"
            size={200}
            onPress={() => navigation.navigate('settings')}
            title="Go to settings tab"
        >Go to settings tab</MetIcon.Button>
        <Icon.Button name="step-backward" onPress={() => navigation.goBack(null)} title="Go back">Go back</Icon.Button>

        <Icon.Button style={{margin: 50}}
                     name="facebook" backgroundColor="#3b5998"
                     size={122}
                     color="#44f000">
            Icon.Button Login with Facebook
        </Icon.Button>

        <iconSet.Button name="facebook-square" backgroundColor="#3b5998">
            Login with Facebook
        </iconSet.Button>

        <Text style={{fontFamily: 'Arial', fontSize: 22, marginTop: 100}}>Go to home tab</Text>

    </ScrollView>
);

const MyHomeScreen = ({navigation}) => (
    <MyNavScreen banner="Home Tab" navigation={navigation}/>
);

MyHomeScreen.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{color: tintColor}}
        />
    ),
};

const MyPeopleScreen = ({navigation}) => (
    <MyNavScreen banner="People Tab" navigation={navigation}/>
);

MyPeopleScreen.navigationOptions = {
    tabBarLabel: 'People',
    tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
            name={focused ? 'ios-people' : 'ios-people-outline'}
            size={26}
            style={{color: tintColor}}
        />
    ),
};

const MyChatScreen = ({navigation}) => (
    <MyNavScreen banner="Chat Tab" navigation={navigation}/>
);

MyChatScreen.navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
            size={26}
            style={{color: tintColor}}
        />
    ),
};

const MySettingsScreen = ({navigation}) => (
    <MyNavScreen banner="Settings Tab" navigation={navigation}/>
);

MySettingsScreen.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{color: tintColor}}
        />
    ),
};

const SimpleTabs = TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            path: '',
        },
        People: {
            screen: MyPeopleScreen,
            path: 'cart',
        },
        Chat: {
            screen: MyChatScreen,
            path: 'chat',
        },
        Settings: {
            screen: MySettingsScreen,
            path: 'settings',
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        },
    }
);

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: '#f8f8f8'
    },
});

export default SimpleTabs;
