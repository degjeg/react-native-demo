import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Animated,
    ListView,
} from 'react-native';

import {PullList} from 'react-native-pull';
import PtrHeader from './PtrHeader';

export default class extends Component {

    constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);


        // this.loadMore();
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 5000);
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray"/>
                <Text ref={(c) => {
                    this.txtPulling = c;
                }}>当前PullList状态: pulling...</Text>
                <Text ref={(c) => {
                    this.txtPullok = c;
                }}>当前PullList状态: pullok......</Text>
                <Text ref={(c) => {
                    this.txtPullrelease = c;
                }}>当前PullList状态: pullrelease......</Text>
            </View>
        );
    }

    /**
     使用setNativeProps解决卡顿问题
     make changes directly to a component without using state/props to trigger a re-render of the entire subtree
     */
    myTopIndicatorRender = (pulling, pullok, pullrelease, gesturePosition) => {
        console.log("myTopIndicatorRender:,pulling:" + pulling + ",pullok:" + pullok + ",pullrelease:" + pullrelease + ",gesturePosition:" + gesturePosition)
        setTimeout(() => {
            // if (pulling) {
            //     this.txtPulling && this.txtPulling.setNativeProps({style: styles.show});
            //     this.txtPullok && this.txtPullok.setNativeProps({style: styles.hide});
            //     this.txtPullrelease && this.txtPullrelease.setNativeProps({style: styles.hide});
            // } else if (pullok) {
            //     this.txtPulling && this.txtPulling.setNativeProps({style: styles.hide});
            //     this.txtPullok && this.txtPullok.setNativeProps({style: styles.show});
            //     this.txtPullrelease && this.txtPullrelease.setNativeProps({style: styles.hide});
            // } else if (pullrelease) {
            //     this.txtPulling && this.txtPulling.setNativeProps({style: styles.hide});
            //     this.txtPullok && this.txtPullok.setNativeProps({style: styles.hide});
            //     this.txtPullrelease && this.txtPullrelease.setNativeProps({style: styles.show});
            // }
        }, 1);
        return (
            <PtrHeader
                ref={
                    (v) => {
                        this.ptrListView && (this.ptrListView.ptrHeader = v);
                    }
                }/>
        );
    };


    render() {
        return (
            <View style={styles.container}>
                <PullList
                    style={{}}
                    renderTopIndicator={this.myTopIndicatorRender}
                    onPullRelease={this.onPullRelease} topIndicatorRender={this.myTopIndicatorRender}
                    topIndicatorHeight={60}
                    renderHeader={this.renderHeader}
                    dataSource={this.state.list}
                    ptrHeaderComponent={PtrHeader}
                    pageSize={5}
                    initialListSize={5}
                    renderRow={this.renderRow}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                    ref={
                        (v) => {
                            this.ptrListView = v;
                        }
                    }
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={{height: 350, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>This is header</Text>
            </View>
        );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
        return (
            <View style={{height: 50, backgroundColor: '#fafafa', alignItems: 'center', justifyContent: 'center'}}>
                <Text>{item.title}</Text>
            </View>
        );
    }

    renderFooter() {
        if (this.state.nomore) {
            return null;
        }
        return (
            <View style={{height: 110, backgroundColor: '#abcdef'}}>
                <ActivityIndicator />
            </View>
        );
    }

    loadMore() {
        this.dataSource.push({
            id: 0,
            title: `begin to create data ...`,
        });
        for (var i = 0; i < 15; i++) {
            this.dataSource.push({
                id: i + 1,
                title: `this is ${i}`,
            })
        }
        this.dataSource.push({
            id: 6,
            title: `finish create data ...`,
        });
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
});
