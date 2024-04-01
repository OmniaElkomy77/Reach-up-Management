import React, {Component} from 'react';
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
  Animated,
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const {width, height} = Dimensions.get('window');
export default class Reports_Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connection_Status: '',
      modalVisible1: false,
    };
  }
  componentDidMount() {
    const unsubscripe = NetInfo.addEventListener(state => {
      this.setState({
        connection_Status: state.isConnected ? 'Online' : 'Offline',
      });
    });
    return unsubscripe;
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#3c2365'}></StatusBar>
        {this.state.connection_Status == 'Online' ? (
          <View
            style={{
              backgroundColor: '#fff',
              paddingTop: 25,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/*/////////////////////////////////////////// Students /////////////////////////////////////////* */}

            <TouchableOpacity
              style={[styles.MainViewStyle]}
              onPress={() => {
                this.props.navigation.navigate('Reports_type');
              }}>
              <Text style={styles.TextStyle}>Absence Reports</Text>
              <Image
                style={styles.ImgStyle1}
                source={require('../constants/images/Absence_report.png')}></Image>
            </TouchableOpacity>

            {/*/////////////////////////////////////////// Teachers /////////////////////////////////////////* */}
            <TouchableOpacity
              style={[styles.MainViewStyle]}
              onPress={() => {
                this.props.navigation.navigate('Total_Report');
              }}>
              <Image
                style={styles.ImgStyle}
                source={require('../constants/images/Total_report.png')}
              />
              <Text style={styles.TextStyle}>Total Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.MainViewStyle]}
              onPress={() => {
                this.props.navigation.navigate('Attendance_Reports');
              }}>
              <Image
                style={styles.ImgStyle}
                source={require('../constants/images/Attendance_report.png')}
              />
              <Text style={styles.TextStyle}>Attendance Reports</Text>
            </TouchableOpacity>

            {/*////////////////////////////////////////money /////////////////////////////// */}
          </View>
        ) : (
          <View
            style={{
              height: height,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              width: width,
            }}>
            <Text style={{color: '#777'}}>No Internet Connection</Text>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  LogoStyle: {
    height: 150,
    width: '95%',
    alignSelf: 'center',
    marginBottom: '10%',
    resizeMode: 'contain',
    // backgroundColor:"#ff0"
  },
  MainViewStyle: {
    height: 170,
    width: width * 0.9,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignSelf: 'center',
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgStyle1: {
    resizeMode: 'contain',
    height: '100%',
    width: '50%',
    marginLeft: '6%',
  },
  ImgStyle: {
    resizeMode: 'contain',
    height: '100%',
    width: '50%',
    marginRight: '5%',
  },
  TextStyle: {
    fontSize: 20,
    color: '#000',
    // height:60,
    width: 120,
    textAlign: 'center',

    fontWeight: 'bold',
  },
  ConnectionView: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 222,
    backgroundColor: '#FF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MiddleMainViewStyle: {
    height: 170,
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignSelf: 'center',
    elevation: 5,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    paddingLeft: '5%',
  },
});
