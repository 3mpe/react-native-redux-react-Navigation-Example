import React, { Component } from "react";
import { Header, Item, Input, Icon, Button, Text } from 'native-base';
import PropTypes from 'prop-types';

class HeaderWithSearchBar extends Component {

    state = {
        searchInput: null
    };

    placeHolderText = () => {
        if (this.props.placeholder && this.props.placeholder !== null) {
            return <Input placeholder={this.props.placeholder}
                onChangeText={(data) => this.props.onChange(data)}
                value={this.props.value}
                editable={this.props.editable} />;
        } else {
            return <Input placeholder="..."
                onChangeText={(data) => this.props.onChange(data)}
                value={this.props.value}
                editable={this.props.editable} />;
        }
    };

    render() {
        return (
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    {this.placeHolderText()}
                    <Icon name="ios-people" />
                </Item>
                <Button transparent onPress={this.props.onPress}>
                    <Text>{this.props.rightText}</Text>
                </Button>
            </Header>
        );
    }

}


HeaderWithSearchBar.propTypes = {
    onChange: PropTypes.func,
    onPress: PropTypes.func,
    rightText: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    editable: PropTypes.boolean

};

export default HeaderWithSearchBar;