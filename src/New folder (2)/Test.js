import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    Linking,
    StatusBar,
    Modal,
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,



} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
export default class Students extends Component {
// Simple usage, defaults for all but the value
render() {
  return (
    <QRCode
      size={100}
      value="http://awesome.link.qr"
    />
  );
}
}