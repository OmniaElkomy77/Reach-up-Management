import axios from 'axios';
import {NativeBaseProvider, Spinner} from 'native-base';
import React, {Component} from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NoticeModal: false,
      student_id: '',
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
      Notice: '',
      disable: false,
      EmptyMessage: '',
      modalVisible: false,
      payment_title: '',
      payment_title_Message: '',
      payment_note: '',
      payment_note_Message: '',
      money_paid: '',
      money_paid__Message: '',
      other_title: '',
    };
  }
  componentDidMount() {
    this.getPayments();
  }
  getPayments() {
    this.setState({disable: true});
    let student_id = this.props.navigation.getParam('student_id');
    this.setState({student_id: student_id});
    let DataToSend = {
      student_id: student_id,
    };
    // alert(JSON.stringify(DataToSend.student_id))
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_student_payments.php',
        DataToSend,
      )
      .then(res => {
        if (res.status == 200) {
          // console.log(JSON.stringify(res.data))
          if (Array.isArray(res.data)) {
            this.setState({
              Payment_History: res.data,
              disable: false,
            });
            // console.log(this.state.Payment_History)

            // if (this.state.Payment_History.length <= 0) {
            // this.setState({ EmptyMessage: "None", disable: false })
            // }
            // } else {
            //     Alert.alert('Error');
            //     this.setState({ disable: false })
            // }
          } else {
            ToastAndroid.showWithGravityAndOffset(
              'something error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
        }
        this.setState({disable: false});
      });
  }
  add_Payment() {
    let title = this.state.payment_title;
    let other_title = this.state.other_title;

    // if(title =='1' && other_title !=''){
    //    title =other_title
    //    this.setState({payment_title:title})
    // }

    let paid = this.state.money_paid;
    let note = this.state.payment_note;

    if (
      (title != '1' && title != '' && paid != '') ||
      (title == '1' && other_title != '' && paid != '')
    ) {
      if (title != '1' && title != '' && paid != '') {
        let DataToSend = {
          student_id: this.state.student_id,
          money_paid: this.state.money_paid.trim(),
          payment_title: title.trim(),
          payment_note: this.state.payment_note.trim(),
        };
        {
          /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
        }
        axios
          .post(
            'https://camp-coding.org/reachUpAcademy/admin/' +
              'add_student_payment.php',
            DataToSend,
          )
          .then(res => {
            if (res.status == 200) {
              this.getPayments();
              if (res.data == 'success') {
                Alert.alert('Payment Added Successfully');
                // let obj ={
                //     student_id: this.state.student_id,
                //     money_paid: this.state.money_paid.trim(),
                //     payment_title: other_title.trim(),
                //     payment_note: this.state.payment_note.trim(),
                // }
                // this.state.Payment_History.push(obj)
                // this.getPayments()
              } else {
                Alert('Added Successfully');
              }
            } else {
              // alert("error")
              // Alert.alert('أدمن', 'خطأ');
            }
            this.setState({loading: false});
          });
      }
      if (title == '1' && other_title != '' && paid != '') {
        let DataToSend = {
          student_id: this.state.student_id,
          money_paid: this.state.money_paid.trim(),
          payment_title: other_title.trim(),
          payment_note: this.state.payment_note.trim(),
        };
        {
          /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
        }
        axios
          .post(
            'https://camp-coding.org/reachUpAcademy/admin/' +
              'add_student_payment.php',
            DataToSend,
          )
          .then(res => {
            if (res.status == 200) {
              this.getPayments();

              if (res.data == 'success') {
                // Alert.alert('Payment Added Successfully');
                ToastAndroid.showWithGravityAndOffset(
                  'Payment Added Successfully',
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
              // alert('error');
              // Alert.alert('أدمن', 'خطأ');
              ToastAndroid.showWithGravityAndOffset(
                'something error',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                80,
              );
            }
            this.setState({loading: false});
          });
      }

      this.setState({modalVisible: false});

      this.setState({
        payment_title: '',
        payment_title_Message: '',
        payment_note: '',
        payment_note_Message: '',
        money_paid: '',
        money_paid__Message: '',
      });
    } else if (
      title == '' ||
      paid == '' ||
      (title == '1' && other_title == '')
    ) {
      if (title == '' || title == '1') {
        this.setState({payment_title_Message: 'please enter payment title'});
      } else if (title == '1' && other_title == '') {
        this.setState({payment_title_Message: 'please enter payment title'});
      }
      if (paid == '') {
        this.setState({money_paid__Message: 'Please enter payment value'});
      } else {
        this.setState({money_paid__Message: ''});
      }
    }
  }
  renderPayment = ({item, index}) => {
    return (
      <>
        <View
          style={{
            height: height * 0.15,
            //  borderTopWidth:3,
            //  borderTopColor:"#999",
            borderBottomColor: '#999',
            borderBottomWidth: 1,
            elevation: 2,
            padding: 15,
            paddingRight: '5%',

            width: width,
            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row', flex: 1}}>
            {/* <View style={{
                            height: "100%",
                            width: "50%",
                            alignContent: "center",
                            justifyContent: "center"
                        }}>

                            <TouchableOpacity style={{
                                height: "80%",
                                width: "60%",
                                backgroundColor: "#00B859",
                                elevation: 7,
                                marginRight: "20%",
                                alignSelf: "center",
                                borderRadius: 20,
                                justifyContent: "center",
                                marginLeft: "2%"

                            }}

                                onPress={
                                    () => {
                                        this.setState({
                                            NoticeModal: true,

                                            Notice: item.notes
                                        })
                                    }
                                }

                            >
                                <Text style={styles.TextStyle2}> ملاحظات</Text>
                            </TouchableOpacity>

                        </View> */}

            <View style={{height: '100%', width: '50%', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item.payment_title}
              </Text>
              <View
                style={{
                  height: '70%',
                  // width:"100%",
                  // backgroundColor: "#ff0",
                  justifyContent: 'center',
                }}>
                {item.notes == '' ? (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#f00'}}> No Notes </Text>
                  </View>
                ) : (
                  <Text style={{fontWeight: 'bold'}}>Note:{item.notes}</Text>
                )}
              </View>
            </View>

            <View style={{height: '100%', width: '50%', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', marginTop: '2%'}}>
                <Text
                  style={{fontSize: 16, fontWeight: '400', marginTop: '2%'}}>
                  Payment Value :
                </Text>
                <Text
                  style={{
                    fontSize: 19,
                    color: '#f8bb08',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  {item.money_paid + ' '}
                </Text>
              </View>
              <Text style={{marginTop: '2%'}}>{item.date}</Text>
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
          <TouchableOpacity
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesome5
              name="angle-right"
              size={35}
              style={{color: '#fff', marginRight: 20}}
            />
          </TouchableOpacity>
          <View
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#F5FCFF', fontSize: 17, fontWeight: 'bold'}}>
              Payments
            </Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              this.setState({modalVisible: true});
            }}>
            <View
              style={{
                height: 35,
                width: 35,
                backgroundColor: '#f8bb08',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name={'plus'}
                size={20}
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  elevation: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/*///////////////////////////////////////////////////////// Content /////////////////////////////////////////////////////// * */}
        {/* <View style={{ flex: 1 }}> */}

        {this.state.disable == false ? (
          this.state.Payment_History.length == 0 ? (
            <View
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                flex: 1,
                // backgroundColor: "#f0f",
                // paddingRight: '40%',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',

                  color: '#3c2365',
                  fontSize: 25,
                  fontWeight: 'bold',
                  // marginTop: "50%",
                  textAlign: 'center',
                  // backgroundColor: "#ff0",
                  width: '100%',
                }}>
                No Payments Yet{' '}
              </Text>
            </View>
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

        {/*////////////////////////////////////////////////////////Add Payment /////////////////////////////////////////* */}

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
              //   paddingRight: '20%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                // margin: 10,
                // marginBottom: 10,
                // marginTop: 10,
                fontSize: 22,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Add Expenses{' '}
            </Text>
          </View>

          <View>
            <RadioButton.Group
              onValueChange={value => {
                this.setState({payment_title: value});
              }}
              value={this.state.payment_title}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  // backgroundColor:"#ff0",
                  alignSelf: 'center',
                  alignItems: 'center',
                  paddingLeft: '5%',
                  justifyContent: 'space-around',
                  // alignContent:"center"
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor: "#ff0"
                    // padding: 5,
                  }}>
                  <Text style={{fontSize: 20}}>Books Expenses</Text>
                  <RadioButton value="Books" />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // padding: 5,
                  }}>
                  <Text style={{fontSize: 18}}>Monthly</Text>
                  <RadioButton value="Monthly Expenses" />
                  {/* Monthly Expenses */}
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  //   alignSelf:"flex-end",
                  width: '88%',
                  marginLeft: 30,
                  //   backgroundColor: '#854',
                }}>
                <Text style={{fontSize: 18}}>other</Text>
                <RadioButton value="1" />
              </View>
            </RadioButton.Group>

            {this.state.payment_title == '1' ? (
              <>
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
                    multiline={true}
                    placeholder="Payment title"
                    color={'#000'}
                    placeholderTextColor="#000"
                    onChangeText={other_title => this.setState({other_title})}
                    value={this.state.other_title}
                  />
                </View>
              </>
            ) : (
              <></>
            )}
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
              placeholder="Payment Value"
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
              placeholder="Notes"
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
                this.add_Payment();
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
                Add
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
                Cancel
              </Text>
            </TouchableOpacity>
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
    flexDirection: 'row',
    backgroundColor: '#3c2365',
    elevation: 22,
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
