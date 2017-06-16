import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Animated,
    Easing,
} from 'react-native';

import {PULL_STATUS_IDLE} from 'react-native-pull/Pullable'
import {PULL_STATUS_PULLUP_TO_REFRESH} from 'react-native-pull/Pullable'
import {PULL_STATUS_RELEASE_TO_REFRESH}  from 'react-native-pull/Pullable'
import {PULL_STATUS_REFRESHING}  from 'react-native-pull/Pullable'

export default class PtrHeader extends Component {

    constructor() {
        super();
        this.degree = new Animated.Value(0);
        this.duration = 200;
    }

    setPullingStatus(status) {

        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            this.textPullToRefresh && this.textPullToRefresh.setNativeProps((status === PULL_STATUS_PULLUP_TO_REFRESH || status === PULL_STATUS_IDLE) ? {style: show} : {style: hide});
            this.textReleaseToRefresh && this.textReleaseToRefresh.setNativeProps(status === PULL_STATUS_RELEASE_TO_REFRESH ? {style: show} : {style: hide});
            this.textRefreshing && this.textRefreshing.setNativeProps((status === PULL_STATUS_REFRESHING ) ? {style: show} : {style: hide});

            this.prog && this.prog.setNativeProps((status === PULL_STATUS_REFRESHING) ? {style: show} : {style: hide});
            this.imgArrow && this.imgArrow.setNativeProps((status === PULL_STATUS_PULLUP_TO_REFRESH || status === PULL_STATUS_RELEASE_TO_REFRESH) ? {style: show} : {style: hide});
        }, 1);

        if (status === PULL_STATUS_IDLE) {

        } else if (status === PULL_STATUS_PULLUP_TO_REFRESH) {
            Animated.timing(this.degree, {
                toValue: 0,
                easing: Easing.linear,
                duration: this.duration
            }).start();

        } else if (status === PULL_STATUS_RELEASE_TO_REFRESH) {
            Animated.timing(this.degree, {
                toValue: 180,
                easing: Easing.linear,
                duration: this.duration
            }).start();
        } else if (status === PULL_STATUS_REFRESHING) {

        }
    }

    render() {
        return (
            <Animated.View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60
            }}
            >
                <ActivityIndicator size="small" color="gray" ref={
                    (v) => {
                        this.prog = v;
                    }
                }/>
                <Animated.Image
                    ref={
                        (v) => {
                            this.imgArrow = v;
                        }
                    }
                    source={require('./ic_pulltorefresh_arrow.png')}
                    style={[{
                        transform: [   // Array order matters
                            {
                                rotate: this.degree.interpolate({
                                    inputRange: [0, 360],
                                    outputRange: [
                                        '0deg', '360deg' // 'deg' or 'rad'
                                    ],
                                })
                            },
                        ]
                    }, {
                        width: 46,
                        height: 46,
                        resizeMode: 'center'
                    }
                    ]}
                />

                <Text ref={(c) => {
                    this.textPullToRefresh = c;
                }} style={styles.pullingText}
                >下拉刷新</Text>

                <Text ref={(c) => {
                    this.textReleaseToRefresh = c;
                }} style={styles.pullingText}
                >松开刷新</Text>

                <Text ref={(c) => {
                    this.textRefreshing = c;
                }} style={styles.pullingText}
                >正在刷新</Text>

            </Animated.View>
        );
    }
}

styles = StyleSheet.create({
    pullingText: {
        fontSize: 30,
        color: '#00f'
    }
});