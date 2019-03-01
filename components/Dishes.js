import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createDishes} from "../store/actions/orderAction";
import {connect} from "react-redux";

class Dishes extends Component {
    componentDidMount() {
        this.props.createDishes()
    }

    render() {
        const dishesArray = Object.keys(this.props.dishes).map(name => {
            return {...this.props.dishes[name]}
        });
        let dishesForMap = dishesArray.map((dish, key) => {
            return (
                <TouchableOpacity onPress={this.onPress} style={styles.dishes} key={key}>
                    <View style={styles.box}><Image
                        style={{width: 66, height: 58}}
                        source={{uri: dish.image}}
                    /></View>
                    <View style={styles.box}><Text>{dish.price}</Text></View>
                    <View style={styles.box}><Text>{dish.title}</Text></View>
                </TouchableOpacity>
            )
        });

        return (
            <View>{dishesForMap}</View>
        )

    }
}

const mapStateToProps =  state => ({
    dishes:state.dishes.dishes

});

const mapDispatchToProps = dispatch => ({
    createDishes: () => dispatch(createDishes())
});

const styles = StyleSheet.create({
    dishes: {
        flex: 1,
        width:"100%",
        height:'100%',
        backgroundColor:'red',
        flexDirection:'row',
        borderWidth: 1,
        padding: 40,
        marginTop:2,
        justifyContent:'space-between'
    },


});

export default connect(mapStateToProps, mapDispatchToProps) (Dishes);