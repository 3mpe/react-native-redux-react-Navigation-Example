import React from "react";
import { Header, Body, Title, Text, Button, Left } from 'native-base';
import PropTypes from 'prop-types';


class ModalHeader extends React.Component {

    render() {
        return (
            <Header {...this.props.header}>
                <Left>
                    <Button transparent
                        {...this.props.button}
                        onPress={this.props.onPress}>
                        <Text>Vazgec</Text>
                    </Button>
                </Left>
                <Body {...this.props.body}>

                    {this.props.children}
                </Body>
            </Header>
        );
    }
}



ModalHeader.propTypes = {
    header: PropTypes.object,
    body: PropTypes.object,
    button: PropTypes.object,
    onPress: PropTypes.object,
    title: PropTypes.string.isRequired,
};

export default ModalHeader;