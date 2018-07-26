import React, { Component } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
// import  { View } from "native-base"


class BackgroundImage extends Component {


    render() {
        const window = Dimensions.get('window');
        const height = parseInt(this.props.height || window.height);
        const width = parseInt(window.width);
        return (
            <ImageBackground
                style={[this.props.styles, styles.container]}
                opacity={this.props.opacity}
                source={this.props.uri ? { uri: this.props.uri } : this.props.source}>
                {/* <View style={styles.content}> */}
                {this.props.children}
                {/* </View> */}
            </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height,
        width: '100%'
    },
    content: {
        width: "100%",
        backgroundColor: 'rgba(255,255,255,.7)',
        padding: 12,
    }
});


export default BackgroundImage;