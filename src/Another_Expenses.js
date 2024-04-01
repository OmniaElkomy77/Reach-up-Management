import axios from 'axios';
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
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Button, NativeBaseProvider, Spinner} from 'native-base';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');
export default class Another_Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      money_expenses: [],
      disable: true,
      modalVisible: false,
      money_paid: '',
      payment_title: '',
      payment_note: '',
      money_paid__Message: '',
      payment_note_Message: '',
      payment_title_Message: '',
      modalVisible1: false,
      payment_id: '',
      password: '',
      month_name: this.props.navigation.getParam('month_name'),
      secure: true,
    };
  }

  componentDidMount() {
    this.getMoneyExpenses();
  }

  getMoneyExpenses() {
    let data_to_send = {
      date: this.state.month_name,
    };
    // alert(data_to_send.date)

    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_students_payments.php',
        data_to_send,
      )
      .then(res => {
        if (res.status == 200) {
          // alert(JSON.stringify(res.data[res.data.length-1].payment_title))
          if (Array.isArray(res.data)) {
            let money_expenses = [];

            for (let i = 0; i < res.data.length; i++) {
              if (
                res.data[i].payment_title != 'Books' &&
                res.data[i].payment_title != 'Monthly Expenses'
              ) {
                money_expenses.push(res.data[i]);
              } else {
                continue;
              }
            }
            // console.log(JSON.stringify(res.data))
            this.setState({
              money_expenses: money_expenses,
              disable: false,
            });

            // console.log(this.state.money_expenses[this.state.money_expenses.length-1].payment_title)
          } else {
            // alert("error")
            ToastAndroid.showWithGravityAndOffset(
              'something error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
            this.setState({disable: false});
          }
        }
      });
  }

  Delete_fun() {
    let data_to_send = {
      password: this.state.password,
      payment_id: this.state.payment_id,
    };
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'delete_payment_student.php',
        data_to_send,
      )
      .then(res => {
        if (res.status == 200) {
          if (res.data == 'success') {
            this.getMoneyExpenses();
            this.setState({password: ''});
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
        {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
        <View style={styles.HeaderView}>
          {/* <View style={{ width: "75%", }}> */}
          {/* <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                            this.props.navigation.goBack();


                        }}>

                            <FontAwesome5
                                name="angle-right"
                                size={35}
                                style={{ color: '#fff', marginRight: 20 }}
                            />

                        </TouchableOpacity> */}
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#F5FCFF', fontSize: 17, fontWeight: 'bold'}}>
              {' '}
              Another Payment
            </Text>
          </View>
          {/* </View> */}
        </View>

        {/*///////////////////////////////////////////////////////// Content /////////////////////////////////////////////////////// * */}
        {/* <View style={{ flex: 1 }}> */}

        {this.state.disable == false ? (
          this.state.money_expenses.length == 0 ? (
            <View
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                flex: 1,
                // paddingRight: '25%',
                // backgroundColor: "#ff0"
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#3c2365',
                  fontSize: 25,
                  fontWeight: 'bold',
                  // marginTop: "50%"
                }}>
                No Payments Yet{' '}
              </Text>
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={true}
              data={this.state.money_expenses}
              renderItem={({item, index}) => (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        modalVisible1: true,
                        payment_id: item.payment_id,
                      });
                    }}
                    style={{
                      elevation: 2,
                      padding: 10,
                      width: '95%',
                      borderRadius: 20,
                      alignSelf: 'center',
                      backgroundColor: 'white',
                      marginVertical: 15,
                      justifyContent: 'space-around',
                    }}>
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          // marginTop: 5,
                          alignSelf: 'center',
                          color: '#3c2365',
                        }}>
                        {item.student_name}
                      </Text>

                      <Text style={{color: '#777'}}>{item.date}</Text>
                    </View>

                    <View
                      style={
                        {
                          // flex: 1,
                          // backgroundColor: "#eee",
                          // alignItems: 'flex-end'
                        }
                      }>
                      <View
                        style={{
                          alignItems: 'center',
                          // justifyContent: "space-around",
                          // height: 70,
                          // backgroundColor: "#858",
                          // padding:10,
                          // flexDirection: "row"
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            //  backgroundColor: "#858"
                          }}>
                          <Text style={{fontSize: 18, fontWeight: '400'}}>
                            Payment Value
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              color: '#f8bb08',
                              // fontWeight: "bold",
                              // alignSelf: "center"
                            }}>
                            {item.money_paid + ' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        // backgroundColor: "#747",
                        width: '100%',
                        padding: 10,
                      }}>
                      <Text style={{textAlign: 'justify', color: '#000'}}>
                        {item.notes}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </>
              )}
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

        {/*////////////////////////////////////////////////////////Add Money /////////////////////////////////////////* */}

        <Modal
          visible={
            this.state.modalVisible
            // true
          }
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}
          animationType="slide">
          <View
            style={{
              marginBottom: 20,
              marginTop: 40,
            }}>
            <Text
              style={{
                margin: 24,
                marginBottom: 10,
                marginTop: 10,
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              اضافه مصروفات
            </Text>
          </View>

          <View>
            <View style={styles.TextInputStyle}>
              <TextInput
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  height: 50,
                  width: '90%',
                  // paddingLeft: 5,
                }}
                // multiline={true}
                color={'#000'}
                placeholder="عنوان الدفع"
                placeholderTextColor="#000"
                onChangeText={payment_title => this.setState({payment_title})}
                value={this.state.payment_title}
              />
            </View>
          </View>

          <Text style={{color: '#f00', alignSelf: 'center'}}>
            {this.state.payment_title_Message}
          </Text>
          <View style={styles.TextInputStyle}>
            <TextInput
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 50,
                width: '90%',
                // paddingLeft: 5,
              }}
              // multiline={true}
              keyboardType="number-pad"
              placeholder="قيمه الدفع"
              placeholderTextColor="#000"
              color={'#000'}
              onChangeText={money_paid => this.setState({money_paid})}
              value={this.state.money_paid}
            />
          </View>
          <Text style={{color: '#f00', alignSelf: 'center'}}>
            {this.state.money_paid__Message}
          </Text>
          <View style={styles.TextInputStyle}>
            <TextInput
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 50,
                width: '90%',
                // paddingLeft: 5,
              }}
              // multiline={true}
              keyboardType="default"
              placeholder="ملاحظات"
              placeholderTextColor="#000"
              color={'#000'}
              onChangeText={payment_note => this.setState({payment_note})}
              value={this.state.payment_note}
            />
          </View>

          <Text style={{color: '#f00', alignSelf: 'center'}}>
            {this.state.payment_note_Message}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.AddMoney();
              }}
              style={{
                width: '40%',
                backgroundColor: '#3c2365',
                justifyContent: 'center',
                marginTop: 20,
                alignSelf: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: '#FFF',
                }}>
                اضافة
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  modalVisible: false,
                  payment_title: '',
                  payment_title_Message: '',
                  payment_note: '',
                  payment_note_Message: '',
                  money_paid: '',
                  money_paid__Message: '',
                });
              }}
              style={{
                width: '40%',
                backgroundColor: '#f8bb08',
                justifyContent: 'center',
                marginTop: 20,
                alignSelf: 'center',
                borderRadius: 20,
                marginLeft: '5%',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: '#FFF',
                }}>
                الغاء
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

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
                    Enter password to Delete{' '}
                  </Text>
                </View>

                <View
                  style={{
                    height: 70,
                    width: '95%',
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    alignSelf: 'center',
                    padding: 10,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (this.state.secure == true) {
                        this.setState({secure: false});
                      } else {
                        this.setState({secure: true});
                      }
                    }}
                    style={{
                      height: 70,
                      width: '10%',
                      //   backgroundColor: '#785',
                      borderRadius: 20,
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {this.state.secure == false ? (
                      <Icon name="eye" size={18} color={'#777'} />
                    ) : (
                      <Icon name="eye-slash" size={18} color={'#777'} />
                    )}
                  </TouchableOpacity>
                  <View
                    style={{
                      height: 70,
                      width: '90%',
                      backgroundColor: '#eee',
                      borderRadius: 20,
                      //   alignSelf: 'center',
                      //   padding: 10,
                      //   flexDirection: 'row',
                    }}>
                    <TextInput
                      style={{height: '100%', width: '100%', color: '#000'}}
                      // multiline={true}
                      placeholder="Enter password"
                      placeholderTextColor={'#777'}
                      secureTextEntry={this.state.secure} // keyboardType=""
                      value={this.state.password}
                      onChangeText={value => {
                        this.setState({password: value});
                      }}
                    />
                  </View>
                </View>

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
                      this.setState({modalVisible1: false});
                      this.Delete_fun();
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
                      Confirm
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
      </>
    );
  }
}
const styles = StyleSheet.create({
  HeaderView: {
    width: '100%',
    height: 60,
    // flexDirection: 'row',
    backgroundColor: '#3c2365',
    // elevation: 22
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
});
