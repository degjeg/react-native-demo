import React from 'react'

import AppNavigator from './react-navigation-demo/NavigationPlayground/js/App'
import BaseComponent from './base/components/BaseComponent'
import {
    Text,
    Platform,
    ScrollView,

    ToastAndroid,
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import WidgetsTest from './widgets_demo/WidgetsTest'

screens = {
    AppNavigator: {
        name: "NavigatorTest",
        screen: AppNavigator
    },
    WidgetsTest: {
        name: "WidgetsTest",
        screen: WidgetsTest
    }
};


class MainPage extends BaseComponent {
    constructor({navigation}) {
        super({navigation});
        this.navigation = navigation;    }

    render() {
        return (<ScrollView>
                {
                    Object.keys(screens).map((k, i) => (<Text
                        key={i}
                        onPress={() => {
                            // ToastAndroid.show(JSON.stringify(this.navigation), ToastAndroid.SHORT);
                            this.navigation.navigate(k, {});
                        }}
                    >{screens[k].name}</Text>))
                }


                <Text>1</Text>

                <Text>1</Text>
                <Text>1</Text>
                <Text>1</Text>
                <Text>1</Text>
                <Text>1</Text>
                <Text>1</Text>
            </ScrollView>
        );
    }
}

TestList = StackNavigator(
    {
        ...screens,
        MainPage: {
            screen: MainPage,
        },
    },
    {
        initialRouteName: 'MainPage',
        headerMode: 'none',

        /*
         * Use modal on iOS because the card mode comes from the right,
         * which conflicts with the drawer example gesture
         */
        // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);

export default class Main extends React.Component {
    someEvent() {
        // call navigate for AppNavigator here:
        this.navigator && this.navigator.dispatch({type: 'Navigate', routeName, params});
    }

    render() {
        return (
            <TestList ref={nav => {
                this.navigator = nav;
            }}/>
        );
    }
}

