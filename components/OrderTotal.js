import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class OrderTotal extends Component {
    render() {
        return (
            <View>
                <Button
                    title="CheckOut"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

export default OrderTotal;