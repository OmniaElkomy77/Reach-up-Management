import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  ToastAndroid,
} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const {width, height} = Dimensions.get('window');
export default class Reports_type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connection_Status: '',
      modalVisible1: false,
      // choose_date: false,
      date: '',
      showpickerdate1: false,
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

  getDaily_student(date) {
    let data_to_send = {
      date: date,
      monthly: 0,
    };

    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_student_attence_report.php',
        data_to_send,
      )
      .then(res => {
        if (res.status == 200) {
        //   alert(JSON.stringify(res.data))
          if (Array.isArray(res.data)) {
            this.props.navigation.navigate('Daily_student_absence', {
              students: res.data,
            });
          } else if (res.data == 'not_found') {
            ToastAndroid.showWithGravityAndOffset(
              'Invaild Date',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          } else {
            ToastAndroid.showWithGravityAndOffset(
              'something error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
        } else {
          ToastAndroid.showWithGravityAndOffset(
            'something error',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            80,
          );
        }
      });
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
                this.props.navigation.navigate('Monthly_Report');
              }}>
              <Text style={styles.TextStyle}>Monthly Reports</Text>
              <Image
                style={styles.ImgStyle1}
                source={require('../constants/images/monthly_report.png')}></Image>
            </TouchableOpacity>

            {/*/////////////////////////////////////////// Teachers /////////////////////////////////////////* */}
            <TouchableOpacity
              style={[styles.MainViewStyle]}
              onPress={() => {
                this.setState({modalVisible1: true});
                // this.props.navigation.navigate("Teacher_Services")
              }}>
              <Image
                style={styles.ImgStyle}
                source={require('../constants/images/daily_report.png')}
              />
              <Text style={styles.TextStyle}>Daily Reports</Text>
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

        <Modal
          visible={this.state.modalVisible1}
          onRequestClose={() => {
            this.setState({modalVisible1: false});
          }}
          animationType="slide"
          // presentationStyle="formSheet"s
          transparent={true}>
          <View
            style={{
              // opacity:0.7,
              backgroundColor: 'rgba(0,0,0,0.6)',
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <TouchableWithoutFeedback
              style={{flex: 1}}
              onPress={() => {
                this.setState({modalVisible1: false});
              }}>
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                }}
              />
            </TouchableWithoutFeedback>
            <View
              style={{
                height: height,
                // width: width,
                flex: 1,
                // alignContent: 'center',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  // height:height,
                  alignSelf: 'center',
                  justifyContent: 'space-around',
                  width: '90%',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  elevation: 5,
                  paddingVertical: 15,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    height: 50,
                    width: '100%',
                    // backgroundColor: '#525',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: '#000', fontWeight: 'bold', fontSize: 15}}>
                    Choose the Date
                  </Text>
                </View>

                {/* <View style={{ height: 70, width: "90%", backgroundColor: "#eee", borderRadius: 20, alignSelf: "center", padding: 10 }}>
                                    <TextInput style={{ height: "100%", width: "100%", color: "#000" }}
                                        multiline={true}
                                        placeholder="Enter password"
                                        placeholderTextColor={"#777"}
                                        keyboardType="number-pad"
                                    />
                                </View>  */}

                <View
                  style={{
                    height: 100,
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // backgroundColor: "#eee",
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        modalVisible1: false,
                        showpickerdate1: true,
                      });
                    }}
                    style={{
                      height: 50,
                      width: '40%',
                      backgroundColor: '#3c2365',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 25,
                    }}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                      Date
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({modalVisible1: false});
                    }}
                    style={{
                      height: 50,
                      width: '40%',
                      backgroundColor: '#f8bb08',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 25,
                    }}>
                    <Text
                      style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableWithoutFeedback
              style={{flex: 1}}
              onPress={() => {
                this.setState({modalVisible1: false});
              }}>
              <View
                style={{
                  width: '100%',
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        </Modal>

        {this.state.showpickerdate1 ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={value => {
              let d = new Date(value.nativeEvent.timestamp);
              if (d.toString() != 'Invalid Date') {
                let date =
                  d.getFullYear() +
                  '-' +
                  (d.getMonth() + 1) +
                  '-' +
                  d.getDate();

                this.getDaily_student(date);
                this.setState({showpickerdate1: false});
              } else {
                this.setState({showpickerdate1: false});
              }
            }}
            // colorRendering={"#525"}
          />
        ) : null}
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
