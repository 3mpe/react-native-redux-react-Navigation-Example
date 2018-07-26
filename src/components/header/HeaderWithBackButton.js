import React  from "react";
import { Header, Body, Title, Left, Icon, Button } from 'native-base';
import PropTypes from 'prop-types';


 class HeaderWithBackButton extends React.Component {

    render() {
        return (
            <Header {...this.props.header}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body {...this.props.body}>
                    <Title>{this.props.title}</Title>
                    {this.props.children}
                </Body>
            </Header>
        );
    }
}



HeaderWithBackButton.propTypes = {
    header: PropTypes.object,
    body: PropTypes.object,
    title: PropTypes.string,
};

export default HeaderWithBackButton;