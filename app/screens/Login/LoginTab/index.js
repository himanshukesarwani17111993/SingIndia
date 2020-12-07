import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import config from 'app/config/styles';
import styles from '../styles';
import { Icon, CheckBox, Button } from 'react-native-elements';

class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
      userNameError: null,
      passwordError: null,
    };
  }
  onLoginPress = () => {
    if (this.validateUsername() || this.validatePassword()) {
      return;
    }
  };

  validateUsername = () => {
    if (!this.state.username) {
      this.setState({ userNameError: 'Username is required' });
      return true;
    } else {
      this.setState({ userNameError: null });
      return false;
    }
  };
  validatePassword = () => {
    if (!this.state.password) {
      this.setState({ passwordError: 'Password is required' });
      return true;
    } else if (this.state.password.length < 8) {
      this.setState({
        passwordError: `Password Can't be less than 8`,
      });
      return true;
    } else {
      this.setState({ passwordError: null });
      return false;
    }
  };
  render() {
    return (
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="user"
            size={20}
            style={styles.inputLogo}
            // color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.username}
            placeholder="Username"
            onChangeText={text => this.setState({ username: text })}
            style={styles.input}
            onEndEditing={this.validateUsername}
          />
        </View>

        {this.state.userNameError && (
          <Text style={styles.error}>{this.state.userNameError}</Text>
        )}
        <View style={styles.inputContainer}>
          <Icon
            type="antdesign"
            name="lock"
            size={20}
            style={styles.inputLogo}
            // color={config.color.COLOR_PRIMARY_ICON}
          />
          <TextInput
            value={this.state.password}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            style={styles.input}
            onEndEditing={this.validatePassword}
            secureTextEntry
          />
        </View>
        {this.state.passwordError && (
          <Text style={styles.error}>{this.state.passwordError}</Text>
        )}
        <CheckBox
          title="Remember me"
          containerStyle={styles.checkContainer}
          textStyle={styles.checkTitle}
          checked={this.state.rememberMe}
          onPress={() =>
            this.setState(prevState => ({
              rememberMe: !prevState.rememberMe,
            }))
          }
          // checkedColor={config.color.COLOR_PRIMARY_LABEL}
        />
        <Text style={styles.agreeText}>
          By pressing "submit" you agree to our {'\n'}
          <Text style={styles.underline}>terms & conditions</Text>
        </Text>

        <Button
          title="Login"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          titleStyle={styles.btnTitle}
          onPress={this.onLoginPress}
        />
      </View>
    );
  }
}

export default LoginTab;
