import React from 'react'

export default class BaseComponent extends React.Component {
    constructor({navigation}) {
        super();
        this.navigation = navigation;
    }

}