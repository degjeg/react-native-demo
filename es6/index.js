import React from 'react';
import {StackNavigator} from 'react-navigation';

import array_api from './array_api';
import string_api from './string_api';
import {ScrollView, Text, View, TouchableOpacity} from "react-native";


let screenList = {
    array_api: {
        screen: array_api
    },
    string_api: {
        screen: string_api
    }
};


class Tl extends React.Component {

    constructor({navigation}) {
        super();
        this.navigator = navigation;
    }

    render() {
        return (
            <ScrollView>
                {
                    Object.keys(screenList).map((k, i) => {
                        return (<TouchableOpacity
                            style={{height: 55}}
                            onPress={() => {
                                this.navigator.navigate(k, {});
                            }}
                            key={i}>
                            <Text style={{flex: 1, textAlignVertical: 'center', paddingLeft: 16}}>{k}</Text>
                        </TouchableOpacity>);
                    })
                }
            </ScrollView>
        );

    }
}
let P = StackNavigator(
    {...screenList, Tl: {screen: Tl}},

    {
        initialRouteName: 'Tl',
        headerMode: 'none',

        /*
         * Use modal on iOS because the card mode comes from the right,
         * which conflicts with the drawer example gesture
         */
        // mode: Platform.OS === 'ios' ? 'modal' : 'card',
    });
export default class extends React.Component {
    someEvent() {
        // call navigate for AppNavigator here:
        this.navigator && this.navigator.dispatch({type: 'Navigate', routeName, params});
    }

    render() {
        return (
            <P ref={nav => {
                this.navigator = nav;
            }}/>
        );
    }
}
