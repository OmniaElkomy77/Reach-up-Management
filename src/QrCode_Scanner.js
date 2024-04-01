import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
// import {Button, NativeBaseProvider, Spinner} from 'native-base';
import { RadioButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import QRCode from 'react-native-qrcode-svg';
import LinearGradient from 'react-native-linear-gradient';
// import {now} from 'moment';
import axios from 'axios';
const { width, height } = Dimensions.get('window');
export default class Info extends Component {
  constructor(props) {
    super(props);

    var a = new Date();

    var b = new Date(0, 0, 0, 0, 0, 0, 0);
    var d = a - b;

    this.state = {
      qr_data: d + '',
      qr_type: '',
      ShowCode: false,
    };
  }

  componentDidMount() {
    // this.getQrCode()
  }
  getQrCode() {
    // let qr_data = this.state.qr_data
    var a = new Date();

    var b = new Date(0, 0, 0, 0, 0, 0, 0);
    var d = a - b;
    // alert(d)
    this.setState({ qr_data: d });
    // alert(this.state.qr_data)

    return d;
  }

  getQrCodeType() {
    let qr_type = this.state.qr_type;

    let DataToSend = {
      qr_type: qr_type,
    };

    {
      /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
    }
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' + 'select_daily_qr.php',
        DataToSend,
      )
      .then(res => {
        if (res.status == 200) {
          // alert(res.data)
          if (res.data == 'not_found') {
            this.insertQrCode();
          } else if (res.data != 'error') {
            this.setState({ qr_data: res.data });
          } else {
            // Alert.alert("Error", "Admin")
            ToastAndroid.showWithGravityAndOffset(
              'error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
        }
      });

    this.setState({ ShowCode: true });
  }
  insertQrCode() {
    // var a = new Date()

    // var b = new Date(0, 0, 0, 0, 0, 0, 0)
    // var d = (a - b)

    let qr_data = this.state.qr_data;
    let qr_type = this.state.qr_type;

    // if (qr_type != "")
    let DataToSent = {
      qr_data: qr_data,
      qr_type: qr_type,
    };

    {
      /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
    }
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' + 'insert_qr.php',
        DataToSent,
      )
      .then(res => {
        if (res.status == 200) {
          if (res.data == 'success') {
            // Alert.alert("Admin", "New Code has been created Succesfully!!")
            ToastAndroid.showWithGravityAndOffset(
              'New code has been created Successfully',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          } else if (res.data == 'found') {
            // Alert.alert("تم تسجيل الحضور من قبل ")
            ToastAndroid.showWithGravityAndOffset(
              'Attendance has already been registered',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          } else {
            // Alert.alert("حدث خطأ ما", "Admin")
            ToastAndroid.showWithGravityAndOffset(
              'error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
        }
      });

    // return d+""
  }
  render() {
    return (
      <>
        {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
        <View style={styles.HeaderView}>
          <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesome5
              name="angle-right"
              size={35}
              style={{ color: '#fff', marginRight: 20 }}
            />
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }}>
              Attendance
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
        </View>
        {/*///////////////////////////////////////////////////////// Contant/////////////////////////////////////////////////////// * */}

        { }
        {/* <NativeBaseProvider>
                    <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 15 }} />
                </NativeBaseProvider> */}

        <LinearGradient colors={['#3c2365', '#9b8db1']} style={{ flex: 1 }}>
          <View
            style={{
              height: '70%',
              width: '80%',
              backgroundColor: '#fff',
              alignSelf: 'center',
              // justifyContent: "center",
              alignItems: 'center',
              marginTop: '35%',
              borderRadius: 30,
            }}>
            <View style={{ paddingTop: '5%', paddingBottom: '5%' }}>
              <RadioButton.Group
                onValueChange={value => {
                  this.setState({ qr_type: value });
                }}
                value={this.state.qr_type}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <Text style={{ fontSize: 20 }}>Attendance</Text>
                    <RadioButton value={'0'} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <Text style={{ fontSize: 18 }}>Leave</Text>
                    <RadioButton value={'1'} />
                  </View>
                </View>
              </RadioButton.Group>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '90%',
              }}>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: 120,
                  borderRadius: 10,
                  marginBottom: '10%',
                  backgroundColor: '#f8bb08',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  if (this.state.qr_type != '') {
                    this.getQrCodeType();
                  } else {
                    // Alert.alert("Admin", "Please Choose Code Type")
                    ToastAndroid.showWithGravityAndOffset(
                      'please choose code type ',
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM,
                      25,
                      80,
                    );
                  }
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Generate
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height: 60,
                  width: 120,
                  borderRadius: 10,
                  marginBottom: '10%',
                  backgroundColor: '#00B859',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('AttendenceHistory');
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  History
                </Text>
              </TouchableOpacity>
            </View>

            {this.state.ShowCode == true ? (
              <>
                <QRCode size={250} value={this.state.qr_data} />
              </>
            ) : (
              <></>
            )}
          </View>
        </LinearGradient>
      </>
    );
  }
}

const styles = StyleSheet.create({
  HeaderView: {
    // width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#3c2365',
    elevation: 22,
    alignContent: 'center',
    justifyContent: 'center',
  },
  GradientView: {
    height: height * 0.9,
    backgroundColor: '#fff',
    width: width * 0.87,
    alignSelf: 'center',
    // justifyContent:"center",
    borderRadius: 20,
    padding: '10%',
  },
});
