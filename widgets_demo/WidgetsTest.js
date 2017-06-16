import React from 'react';
import {Text, View, StyleSheet} from 'react-native';




export default class WidgetsTest extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.container1}>
                    <Text style={{flex:2, textAlign:'center',textAlignVertical:'center', backgroundColor:'#00ff00'}}>测1试</Text>
                    <Text style={{flex:2, textAlign:'center',textAlignVertical:'center', backgroundColor:'#0000ff'}}>测1试</Text>
                </View>
                <View style={styles.container2}>
                    <Text>测2试</Text>
                </View>
                <View style={styles.container3}>
                    <Text>测1试</Text>
                </View>
                <View style={styles.container4}>
                    <Text>测2试</Text>
                </View>
            </View>
        );
    }

}



let styles = StyleSheet.create({
    root: {
        backgroundColor: '#f4f4f4',
        flexDirection: 'column'
    },
    container1: {
        backgroundColor: '#cccccc',
        width: 100,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    container2: {

        marginTop: 30,
        backgroundColor: '#cccccc',
        width: 100,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    container3: {
        position:'absolute',
        right:0,
        backgroundColor: '#cccccc',
        width: 100,
        height: 100,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    container4: {
        position:'absolute',
        marginTop:130,
        right:0,
        backgroundColor: '#cccccc',
        width: 100,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text: {
        backgroundColor: '#abcdef',
        color:'#f00'
    }
});