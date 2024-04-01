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
  ToastAndroid,
} from 'react-native';
import {Button, NativeBaseProvider, Spinner} from 'native-base';
import {RadioButton} from 'react-native-paper';
import {SearchBar, Avatar, Badge, withBadge} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlatList} from 'react-native-gesture-handler';
import Headroom from 'react-native-headroom';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import axios from 'axios';

const {width, height} = Dimensions.get('window');
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NoticeModal: false,
      teacher_id: '',
      Payment_History: [
        // {
        //     Month: "January",
        //     Amount: 5000,
        //     Notice: "تم سداد المبلغ المطلوب مع العلم بخصم 10% من كل المبلغ",
        // },
        // {
        //     Month: "Fabrauray",
        //     Amount: 4500,
        //     Notice: ""
        // },
      ],

      disable: false,
      NewTime: '',
      work_hours_in_min: '',
      work_hour_id: 0,
      EditWorkModal: false,
      EmptyMessage: '',
    };
  }
  componentDidMount() {
    this.getWorkHours();
  }

  getHours(value) {
    let num = value;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    return rhours + ' h, ' + rminutes + ' min';
  }
  Total_hours() {
    let data = this.state.Payment_History;
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += parseInt(data[i].work_hours_in_minutes);
      //  console.log(sum)
    }

    let num = sum;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    // console.log(rhours + ' : ' + rminutes )
    return rhours + ' : ' + rminutes;
  }

  getWorkHours() {
    this.setState({disable: true});
    let teacher_id = this.props.navigation.getParam('teacher_id');
    this.setState({teacher_id: teacher_id});
    let DataToSend = {
      teacher_id: teacher_id,
    };
    //  alert(JSON.stringify(student_id))
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_month_work_hours.php',
        DataToSend,
      )
      .then(res => {
        if (res.status == 200) {
          // alert(JSON.stringify(res.data))
          if (Array.isArray(res.data)) {
            this.setState({
              Payment_History: res.data,
            });
            this.Total_hours();
          } else {
            // Alert.alert('Error');
            ToastAndroid.showWithGravityAndOffset(
              'error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
        } else {
          // Alert.alert('Error');
          ToastAndroid.showWithGravityAndOffset(
            'error',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            80,
          );
        }
        this.setState({disable: false});
      });
  }

  UpdateHours() {
    let work_hour_id = this.state.work_hour_id;

    let NewTime = this.state.NewTime;
    if (NewTime != '') {
      let DataToSend = {
        work_hour_id: work_hour_id.trim(),
        work_hours_in_min: parseInt(NewTime),
      };

      axios
        .post(
          'https://camp-coding.org/reachUpAcademy/admin/' +
            'save_work_hours.php',
          DataToSend,
        )
        .then(res => {
          if (res.status == 200) {
            if (res.data != 'error') {
              // alert("succes")
              this.setState({
                EditWorkModal: false,
                NewTime: '',
              });

              this.getWorkHours();
            }
          } else {
            alert('Error');
          }
        });
    } else {
      this.setState({
        EmptyMessage: 'Please Enter Value',
      });
    }
  }

  renderPayment = ({item, index}) => {
    return (
      <>
        <View
          style={{
            height: 120,
            //  borderTopWidth:3,
            //  borderTopColor:"#999",
            // borderBottomColor: '#8A3980',
            // borderStartColor: '#8A3980',
            // borderStartWidth: 5,
            // borderBottomWidth: 1,
            // paddingTop: "10%",
            elevation: 2,
            // padding: 15,
            // paddingRight: "5%",
            marginVertical: 10,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View
              style={{
                // height: '100%',
                width: '30%',
                //  backgroundColor: "#00B859",
              }}>
              <TouchableOpacity
                style={{
                  // height: '80%',
                  // width: '60%',
                  // backgroundColor: "#00B859",

                  // marginRight: '20%',
                  alignSelf: 'center',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginLeft: "2%"
                }}
                onPress={() => {
                  this.setState({
                    EditWorkModal: true,
                    work_hour_id: item.Teacher_work_hour_id,
                  });
                }}>
                <Image
                  style={{height: 100, width: 100}}
                  source={require('../constants/images/Time.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{height: '50%', width: '50%', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  // marginBottom: '5%',
                }}>
                {item.payment_title}
              </Text>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#3c2365'}}>
                {item.date}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#f8bb08',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  {' '}
                  {this.getHours(item.work_hours_in_minutes)}
                </Text>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Work Hours:
                </Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };

  render() {
    return (
      <>
        {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
        <View style={styles.HeaderView}>
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              // backgroundColor: '#463',
              alignItems: 'center',
              justifyContent: 'space-around',
              alignSelf:"flex-end",

            }}>
            <View
              style={{
                // flex: 2,
                // alignItems: 'center',
                // justifyContent: 'center',
                // backgroundColor: '#747',
              }}>
              <Text
                style={{color: '#F5FCFF', fontSize: 17, fontWeight: 'bold',marginLeft:70}}>
                Work Hours
              </Text>
            </View>
            <View
              style={{
                width: 90,
                padding:10,
                backgroundColor: '#eee',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: '#666'}}>{this.Total_hours()}</Text>
            </View>
          </View>
        </View>

        {/*///////////////////////////////////////////////////////// Content /////////////////////////////////////////////////////// * */}
        {/* <View style={{ flex: 1 }}> */}

        {this.state.disable == false ? (
          this.state.Payment_History == '' ? (
            <Text
              style={{
                alignSelf: 'center',
                color: '#3c2365',
                fontSize: 25,
                fontWeight: 'bold',
                marginTop: '50%',
              }}>
              No Work Hours Yet
            </Text>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={true}
              data={this.state.Payment_History}
              renderItem={this.renderPayment}
              keyExtractor={(i, k) => k.toString()}
            />
          )
        ) : (
          <NativeBaseProvider>
            <Spinner
              color={'#f8bb08'}
              size={30}
              style={{marginTop: 10}}></Spinner>
          </NativeBaseProvider>
        )}

        {/* </View> */}

        {/*///////////////////////////////////////////// Edit Work Hours //////////////////////////////* */}

        <Modal transparent={true} visible={this.state.EditWorkModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({ModalVisible: false});
              }}
              style={{flex: 1, width: '100%', height: '100%'}}>
              <View style={{flex: 1, width: '100%', height: '100%'}} />
            </TouchableWithoutFeedback>
            <View style={styles.ModalViewStyle}>
              <View style={{height: '30%'}}>
                <>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#000',
                      fontWeight: 'bold',
                      paddingBottom: '5%',
                    }}>
                    Edit Work Hours
                  </Text>
                </>
              </View>
              <View style={{borderWidth: 1}}>
                <TextInput
                  mode="outlined"
                  keyboardType={'number-pad'}
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                  }}
                  color={'#000'}
                  placeholder="Work Hours in Minutes"
                  label="Work Hours in Minutes"
                  value={this.state.NewTime}
                  onChangeText={value => {
                    this.setState({
                      NewTime: value,
                      // loading_up:true
                      // loading:true
                    });
                  }}
                />
              </View>
              <Text style={{color: '#f00', alignSelf: 'center'}}>
                {this.state.EmptyMessage}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  height: '50%',
                  padding: '2%',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: '70%',
                    width: '40%',
                    backgroundColor: '#00B859',
                    elevation: 7,
                    marginRight: '20%',
                    alignSelf: 'center',
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.UpdateHours();
                  }}>
                  <Text style={styles.TextStyle2}> Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({EditWorkModal: false});
                  }}
                  style={{
                    height: '70%',
                    width: '40%',
                    backgroundColor: '#B82700',
                    elevation: 7,
                    borderRadius: 20,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.TextStyle2}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableWithoutFeedback
              onPress={() => {
                this.setState({ModalVisible: false});
              }}
              style={{flex: 1, width: '100%', height: '100%'}}>
              <View style={{flex: 1, width: '100%', height: '100%'}} />
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  AccountsStyle: {
    height: '50%',
    //  borderTopWidth:3,
    //  borderTopColor:"#999",
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    elevation: 2,
    padding: 15,
  },
  TextStyle2: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  HeaderView: {
    width: '100%',
    height: 60,
    // flexDirection: 'row',
    backgroundColor: '#3c2365',
    // elevation: 22,
    justifyContent:"center",
    alignItems:"center"
  },
  TextInputStyle: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    width: '90%',
    marginBottom: '3%',
  },
  ImageStyle: {
    height: '100%',
    width: '100%',
  },
  ModalViewStyle: {
    backgroundColor: '#fff',
    height: height * 0.33,
    width: '80%',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 20,
    padding: '5%',
    // paddingLeft: "10%"
  },
});
