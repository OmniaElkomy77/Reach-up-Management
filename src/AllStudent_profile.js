import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
  Modal,
  Linking,
  ToastAndroid
} from 'react-native';
import {
  Container,
  Form,
  Header,
  Left,
  Toast,
  Body,
  Right,
  Title,
  Spinner,
  Root,
} from 'native-base';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import {Hoshi} from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import axios from 'axios';
const {width, height} = Dimensions.get('window');

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      groups: [],
      student_name: this.props.navigation.getParam('student_name'),
      parent_phone: this.props.navigation.getParam('parent_phone'),
      Group_Name: this.props.navigation.getParam('Group_Name'),
      class_name: this.props.navigation.getParam('class_name'),
      student_id: this.props.navigation.getParam('student_id'),
      student_national_id: this.props.navigation.getParam(
        'student_national_id',
      ),
      gender: this.props.navigation.getParam('gender'),
      update_name_modal: false,
      newName: '',
      name_error: '',
      new_Phone_error: '',
      newPhone: '',
      editModal: false,
      generation_selected_value: '',
      generation_selected_id: '',
      collection_selected_value: '',
      collection_selected_id: '',
      // index:0
    };
  }
  componentDidMount() {
    // alert(this.state.class_name)
    this.getAllData();
  }

  getAllData() {
    axios
      .get(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_generations_and_collections.php',
      )
      .then(res => {
        // alert(JSON.stringify(res.data))
        this.setState({disabled: false});
        this.setState({classes: res.data});
      });
  }

  onValueChange(value, index) {
    this.setState({
      generation_selected_id: this.state.classes[index].generation_id,
      generation_selected_value: value,
      groups: this.state.classes[index].collections,
    });
    // let groups =
    // this.state.groups.push(groups)
    // alert(JSON.stringify(groups))
  }
  onValueChange2(value, index) {
    if (index >= 0) {
      // console.log(this.state.data2[index - 1].collection_id);
      this.setState({
        collection_selected_id: this.state.groups[index].collection_id,
        collection_selected_value: value,
      });
    } else {
      this.setState({
        collection_selected_value: value,
        collection_selected_id: 0,
      });
    }
  }
  UpdateStudentData() {
    let newPhone = this.state.newPhone;
    if (this.state.newName.length <= 3 && this.state.newPhone.length <= 0) {
      this.setState({new_Phone_error: 'Please enter correct number'});
      this.setState({name_error: 'Please enter correct name'});
    } else if (this.state.newName == '' && this.state.newPhone != '') {
      if (
        (newPhone.startsWith('010') ||
          newPhone.startsWith('011') ||
          newPhone.startsWith('012') ||
          newPhone.startsWith('015') ||
          newPhone.startsWith('002') ||
          newPhone.startsWith('+2')) &&
        newPhone.length >= 11 &&
        newPhone.length <= 14 &&
        newPhone * 0 == 0
      ) {
        let newPhone = this.state.newPhone;
        let newName = this.state.student_name;

        let DataToSend = {
          student_id: this.state.student_id,
          student_name: newName,
          phone: newPhone,
        };
        this.setState({
          loading_up: true,
        });

        {
          /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
        }
        axios
          .post(
            'https://camp-coding.org/reachUpAcademy/admin/' +
              'update_student.php',
            DataToSend,
          )
          .then(res => {
            if (res.status == 200) {
              if (res.data == 'success') {
                // alert(res.data)
                this.setState({
                  update_name_modal: false,
                  student_name: newName,
                  parent_phone: newPhone,
                });
                // Alert.alert("Data Updated Successfully");
                ToastAndroid.showWithGravityAndOffset(
                  'Data Updated Successfully',
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  25,
                  80,
                );
              } else {
              }
            } else {
              // alert("error")
              // Alert.alert('Error');
              ToastAndroid.showWithGravityAndOffset(
                'something error',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                80,
              );
            }
          })
          .finally(() => {
            this.setState({
              loading_up: false,
            });
          });
      } else {
        this.setState({
          new_Phone_error: 'Please enter correct number',
        });
      }
    } else if (this.state.newName != '' && this.state.newPhone == '') {
      let newPhone = this.state.parent_phone;
      let newName = this.state.newName;

      let DataToSend = {
        student_id: this.state.student_id,
        student_name: newName,
        phone: newPhone,
      };

      {
        /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
      }
      axios
        .post(
          'https://camp-coding.org/reachUpAcademy/admin/' +
            'update_student.php',
          DataToSend,
        )
        .then(res => {
          if (res.status == 200) {
            if (res.data == 'success') {
              this.getAllData();
              // alert(res.data)
              this.setState({
                update_name_modal: false,
                student_name: newName,
                parent_phone: newPhone,
              });
              // Alert.alert("Data Updated Seuccessfully!!");
              ToastAndroid.showWithGravityAndOffset(
                'Data Updated Successfully',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                80,
              );
            } else {
            }
          } else {
            // alert("error")
            // Alert.alert('Error');
            ToastAndroid.showWithGravityAndOffset(
              'error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
        });
    } else if (this.state.newName != '' && this.state.newPhone != '') {
      if (
        (newPhone.startsWith('010') ||
          newPhone.startsWith('011') ||
          newPhone.startsWith('012') ||
          newPhone.startsWith('015') ||
          newPhone.startsWith('002') ||
          newPhone.startsWith('+2')) &&
        newPhone.length >= 11 &&
        newPhone.length <= 14 &&
        newPhone * 0 == 0
      ) {
        let newPhone = this.state.newPhone;
        let newName = this.state.newName;

        let DataToSend = {
          student_id: this.state.student_id,
          student_name: newName,
          phone: newPhone,
        };

        {
          /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
        }
        axios
          .post(
            'https://camp-coding.org/reachUpAcademy/admin/' +
              'update_student.php',
            DataToSend,
          )
          .then(res => {
            if (res.status == 200) {
              if (res.data == 'success') {
                this.getAllData();
                // alert(res.data)
                this.setState({
                  update_name_modal: false,
                  student_name: newName,
                  parent_phone: newPhone,
                });
                // Alert.alert("Data Updated Seuccessfully!!");
                ToastAndroid.showWithGravityAndOffset(
                  'Data Updated Successfully',
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  25,
                  80,
                );
              } else {
              }
            } else {
              // alert("error")
              // Alert.alert('Error');
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
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#3c2365'}></StatusBar>
        <View style={{backgroundColor: '#fff', flex: 1}}>
          <ScrollView>
            {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
            <View style={styles.HeaderView}>
              {/* <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                            this.props.navigation.goBack()
                        }}>

                            <FontAwesome5
                                name="angle-right"
                                size={35}
                                style={{ color: '#fff', marginRight: 20 }}
                            />

                        </TouchableOpacity> */}
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: '#F5FCFF', fontSize: 17, fontWeight: 'bold'}}>
                  Student Profile
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

            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                alignSelf: 'center',
                marginVertical: 20,
              }}>
              <View style={styles.GradientView}>
                {/* <View style={{ flexDirection: "row" }}> */}
                {/* <View style={{ width: "14%", marginRight: "13%" }}>
                                <TouchableOpacity

                                    onPress={() => {
                                        this.setState({
                                            editModal: true,
                                        });
                                    }}>
                                    <FontAwesome5
                                        name="user-edit"
                                        size={30}
                                        style={{ color: '#8A3982', alignSelf: "center" }}
                                    />
                                </TouchableOpacity>
                                {/* <Text style={{ alignSelf: "center", textAlign: "center", fontSize: 15 }}>تع/Text> */}

                {/* </View>  */}
                <View
                  style={{
                    height: 40,
                    width: 70,
                    backgroundColor: '#108f91',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    selectable={true}
                    style={{
                      alignSelf: 'center',
                      color: '#fff',
                      // fontWeight:"bold",

                      fontSize: 20,
                    }}>
                    {this.state.student_id}
                  </Text>
                </View>
                <View style={styles.innnerStyle}>
                  {this.state.gender == 'male' ? (
                    <Image
                      resizeMode={'contain'}
                      style={{height: 110, width: 110}}
                      source={require('../constants/images/boy.png')}></Image>
                  ) : (
                    <Image
                      resizeMode={'contain'}
                      style={{height: 110, width: 110}}
                      source={require('../constants/images/girl.png')}
                    />
                  )}
                </View>
                {/* </View> */}

                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: '2%',
                      color: '#fff',
                    }}>
                    {this.state.student_name}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{fontSize: 17, marginBottom: '2%', color: '#fff'}}>
                    {this.state.student_national_id}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('tel:' + this.state.parent_phone);
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <FontAwesome5
                    name={'phone'}
                    size={17}
                    style={{
                      marginTop: '2%',
                      color: '#3c2',
                      marginRight: '1%',
                    }}
                  />

                  <Text
                    selectable={true}
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      marginBottom: '10%',
                      alignSelf: 'center',
                      color: '#fff',
                      // marginTop:"6%",
                    }}>
                    {this.state.parent_phone}
                  </Text>
                </TouchableOpacity>
                <View style={{justifyContent: 'space-around', height: '55%'}}>
                  <View style={{height: 70}}>
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#fff',
                        // elevation: 7,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.TextStyle}>
                        {this.state.class_name}
                      </Text>
                    </View>
                  </View>
                  <View style={{height: 70}}>
                    <View
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#fff',
                        // elevation: 7,
                        // marginRight: "20%",
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.TextStyle}>
                        {this.state.Group_Name}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate(
                        'Student_Mounthly_Reports',
                        {
                          student_id: this.state.student_id,
                        },
                      );
                    }}
                    style={{
                      height: 70,
                      width: '100%',
                      backgroundColor: '#f8bb08',
                      // elevation: 7,
                      borderRadius: 10,
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.TextStyle2}>Student Report</Text>
                  </TouchableOpacity>

                  <View style={{height: 70, justifyContent: 'center'}}>
                    <TouchableOpacity
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#00B859',
                        // elevation: 7,
                        // marginRight: "20%",
                        alignSelf: 'center',
                        borderRadius: 10,
                        justifyContent: 'center',
                      }}
                      onPress={() => {
                        this.setState({update_name_modal: true});
                      }}>
                      <Text style={styles.TextStyle2}> Update</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{height: 70, justifyContent: 'center'}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('Accounts', {
                          student_id: this.state.student_id,
                        });
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: '#B82700',
                        // elevation: 7,
                        borderRadius: 10,
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.TextStyle2}>Payments</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/*////////////////////////////////////////////////////// Update Data //////////////////////////////////////////////////////* */}

            <Modal
              visible={this.state.update_name_modal}
              onRequestClose={() => {
                this.setState({
                  update_name_modal: false,
                });
              }}
              animationType="slide"
              transparent={true}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <View
                  style={{
                    width: width * 0.9,
                    // height: height * 0.25,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    alignSelf: 'center',
                    // marginTop: 15,
                    // alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <View style={{padding: 10}}>
                    <TouchableOpacity
                      style={{width: '10%', marginLeft: 5}}
                      onPress={() => {
                        this.setState({
                          update_name_modal: false,
                        });
                      }}>
                      <FontAwesome5 name="times" size={30} />
                    </TouchableOpacity>
                  </View>
                  {/*888888888888888888888888888888888888 Edit Name 88888888888888888888888888888888* */}
                  <TextInput
                    mode="outlined"
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                    }}
                    color={'#000'}
                    placeholder="Change Name"
                    label="Change Name"
                    value={this.state.newName}
                    onChangeText={value => {
                      this.setState({
                        newName: value,
                        name_error: '',
                      });
                    }}
                  />
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'red',
                      fontWeight: 'bold',
                    }}>
                    {this.state.name_error}
                  </Text>

                  {/*888888888888888888888888888888888888 Edit Phone 88888888888888888888888888888888* */}
                  <TextInput
                    mode="outlined"
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                    }}
                    color={'#000'}
                    keyboardType="phone-pad"
                    placeholder="Change Number"
                    label="Change Number"
                    value={this.state.newPhone}
                    onChangeText={value => {
                      this.setState({
                        newPhone: value,
                        // loading_up:true
                        // loading:true
                        new_Phone_error: '',
                      });
                    }}
                  />
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'red',
                      fontWeight: 'bold',
                    }}>
                    {this.state.new_Phone_error}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      this.UpdateStudentData();
                    }}
                    style={{width: '40%', alignSelf: 'center'}}
                    disabled={this.state.loading_up}>
                    <View
                      style={{
                        width: '95%',
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#00B859',
                        // alignSelf: 'center',
                        borderRadius: 5,
                        marginBottom: 20,
                        marginTop: 15,
                      }}>
                      {this.state.loading_up ? (
                        <Spinner
                          color="#fff"
                          size={26}
                          style={{
                            alignSelf: 'center',
                            padding: 0,
                            marginTop: 0,
                          }}
                        />
                      ) : (
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontFamily: 'Metropolis',
                            fontStyle: 'normal',
                          }}>
                          Update
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            {/*//////////////////////////////////////////////////////////////Edit MOdal ///////////////////////////////////* */}
            <Modal visible={this.state.editModal} transparent={true}>
              <View
                style={{
                  width: width,
                  height: height - 10,
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 56,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <View
                  style={{
                    width: width * 0.9,
                    // height: height * 0.25,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    alignSelf: 'center',
                    // marginTop: 15,
                    // alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    shadowOpacity: 0.37,
                    shadowRadius: 7.49,
                    elevation: 12,
                  }}>
                  <View style={{padding: 10}}>
                    <TouchableOpacity
                      style={{width: '10%', marginLeft: 5}}
                      onPress={() => {
                        this.setState({
                          editModal: false,
                        });
                      }}>
                      <FontAwesome5 name="times" size={30} />
                    </TouchableOpacity>
                  </View>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 17,
                      color: '#3c2365',
                      fontWeight: '700',
                    }}>
                    تعديل صف و مجموعه الطالب
                  </Text>
                  <View style={{width: '90%'}}>
                    <Picker
                      selectedValue={this.state.generation_selected_value}
                      onValueChange={this.onValueChange.bind(this)}>
                      {this.state.classes.map(res => (
                        <Picker.Item
                          label={res.generation_name}
                          value={res.generation_name}
                          id={res.generation_id}
                        />
                      ))}
                    </Picker>
                  </View>
                  <View style={{width: '90%'}}>
                    <Picker
                      enabled={
                        this.state.generation_selected_id == 0 ? false : true
                      }
                      selectedValue={this.state.collection_selected_value}
                      onValueChange={this.onValueChange2.bind(this)}>
                      {this.state.groups.map(res => (
                        <Picker.Item
                          label={res.collection_name}
                          value={res.collection_name}
                          id={res.collection_id}
                        />
                      ))}
                    </Picker>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      // this.update();
                    }}
                    style={{width: '40%', alignSelf: 'center'}}
                    disabled={this.state.loading_up}>
                    <View
                      style={{
                        width: '95%',
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: '#00B859',
                        // alignSelf: 'center',
                        borderRadius: 5,
                        marginBottom: 20,
                        marginTop: 20,
                        // shadowColor: '#000',
                        // shadowOffset: {
                        //   width: 0,
                        //   height: 4,
                        // },
                        // shadowOpacity: 0.32,
                        // shadowRadius: 5.46,
                        // alignSelf: 'center',
                        // elevation: 9,
                      }}>
                      {this.state.loading_up ? (
                        <Spinner
                          color="#fff"
                          size={26}
                          style={{
                            alignSelf: 'center',
                            padding: 0,
                            marginTop: 0,
                          }}
                        />
                      ) : (
                        <Text
                          style={{
                            fontSize: 16,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            fontFamily: 'Metropolis',
                            fontStyle: 'normal',
                          }}>
                          Update
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  HeaderView: {
    // width: '100%',
    height: 60,
    // flexDirection: 'row',
    backgroundColor: '#3c2365',
    // elevation: 22,
    // alignContent: "center",
    // justifyContent: "center"
  },
  GradientView: {
    height: height,
    backgroundColor: '#3c2365',
    width: width * 0.87,
    alignSelf: 'center',
    // justifyContent:"center",
    borderRadius: 20,
    padding: '10%',
  },
  innnerStyle: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginBottom: '5%',
  },
  TextStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#3c2365',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextStyle2: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
