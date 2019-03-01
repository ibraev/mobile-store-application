import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text styles={styles.text}>MAN</Text>
                </View>
                <View style={styles.dishes}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    dishes: {
        flex: 4,
        borderColor:'black',
        paddingHorizontal: 20
    }
});

export default Header;