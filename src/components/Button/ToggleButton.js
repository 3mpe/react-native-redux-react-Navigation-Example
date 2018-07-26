import React, { Component } from 'react';
import { Item, Body, Text, Right, Switch } from "native-base"
import PropTypes from 'prop-types';

class ToggleButton extends Component {
    render() {
        return (
            <Item style={{ marginBottom: 12, paddingTop: 12, paddingBottom: 24 }}>
                <Body>
                    <Text>{this.props.title}</Text>
                </Body>
                <Right>
                    <Switch
                        value={this.props.switchValue ? this.props.switchValue : false}
                        onValueChange={this.props.onValueChange.bind(this)} />
                </Right>
            </Item>
        )
    }
}

ToggleButton.PropTypes = {
    title: PropTypes.string.isRequired,
    switchValue: PropTypes.bool,
};

export default ToggleButton;