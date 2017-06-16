import React from 'react'

import AppNavigator from './react-navigation-demo/NavigationPlayground/js/App'
import BaseComponent from './base/components/BaseComponent'
import {
    Text,
    Platform,
    ScrollView,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import WidgetsTest from './widgets_demo/WidgetsTest'
import Game2048 from './widgets_demo/Game2048'
import TicTacToeApp from './widgets_demo/TicTacToeApp'
import MoviesApp from './widgets_demo/movies/MoviesApp.android'
import RNTesterApp from './widgets_demo/js/RNTesterApp.android'
import GiftedListViewAdvancedDemo from './widgets_demo/pull_to_refresh/react-native-gifted-listview/example_advanced'
import GiftedListViewSimpledDemo from './widgets_demo/pull_to_refresh/react-native-gifted-listview/example_advanced'
// import RefresherBasicPtr from './widgets_demo/pull_to_refresh/react-native-refresher/RefresherBasicPtr'
// import RefresherAdvanced from './widgets_demo/pull_to_refresh/react-native-refresher/RefresherAdvanced'
import Ptr58Test from './widgets_demo/pull_to_refresh/react-native_pull/Ptr58Test'

screens = {
    AppNavigator: {
        // name: "NavigatorTest",
        screen: AppNavigator
    },
    WidgetsTest: {
        // name: "WidgetsTest",
        screen: WidgetsTest
    },
    Game2048: {
        // name: "Game2048",
        screen: Game2048
    },
    TicTacToeApp: {
        // name: "TicTacToeApp",
        screen: TicTacToeApp
    },
    RNTesterApp: {
        // name: "RNTesterApp",
        screen: RNTesterApp
    },
    GiftedListViewAdvancedDemo: {
        // name: "RNTesterApp",
        screen: GiftedListViewAdvancedDemo
    },
    GiftedListViewSimpledDemo: {
        // name: "RNTesterApp",//
        screen: GiftedListViewSimpledDemo
    },
    Ptr58Test: {
        // name: "RNTesterApp",
        screen: Ptr58Test
    }
};


class MainPage extends BaseComponent {
    constructor({navigation}) {
        super({navigation});
        this.navigation = navigation;
    }

    render() {
        return (<ScrollView >
                {
                    Object.keys(screens).map((k, i) => (
                        <TouchableOpacity key={i}
                                          style={styles.listItem}
                                          onPress={() => {
                                              // ToastAndroid.show(JSON.stringify(this.navigation), ToastAndroid.SHORT);
                                              this.navigation.navigate(k, {});
                                          }}><Text


                        >{k}</Text>
                        </TouchableOpacity>))
                }
                {
                    [1, 2, 3].map((item, position) => {
                        return (<TouchableOpacity key={position + 100000}
                                                  style={styles.listItem}><Text >{item}</Text></TouchableOpacity>);
                    })

                }
            </ScrollView>
        );
    }
}

styles = StyleSheet.create({
    listItem: {
        paddingLeft: 12,
        height: 44,
        justifyContent: 'center',

    }
});
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

