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
  Alert,
  Animated,
  ActivityIndicator,
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
      students: [],
      data: [],
      // class_id: this.props.navigation.getParam('class_id'),
      searchQuery: '',
      modalVisible: false,
      NameOfStudent: '',
      parent_phone: '',
      studentNaId: '',
      StudentMessage: '',
      parent_phone_Message: '',
      Student_naId_Message: '',
      DeleteModalVisible: false,
      // group_id: this.props.navigation.getParam('group_id'),
      // class_name:  this.props.navigation.getParam('class_name'),
      // group_name: this.props.navigation.getParam('group_name'),
      delIndex: '',
      student_naId: '',
      Student_naId_Message: '',
      idCount: 0,
      count: 0,
      disabled: false,
    };
  }

  componentDidMount() {
    this.get_Students();
  }
  get_Students = () => {
    this.setState({disable: true});

    let data_to_send = {
      collection_id: this.state.group_id,
    };
    // alert(JSON.stringify(data_to_send))
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_all_students.php',
        data_to_send,
      )
      .then(res => {
        if (res.status == 200) {
          if (res.data != 'error') {
            // let arr = []
            this.setState({
              students: res.data,
              data: res.data,
            });

            // console.log(res.data)
            // alert(res.data.length)
          } else {
            // Alert.alert("Errorr");
          }
        }
        this.setState({disable: false});
      });
  };

  add_Student() {
    let Student = this.state.NameOfStudent;
    let student_naId1 = this.state.studentNaId;
    let parent_phone = this.state.parent_phone;

    if (
      (parent_phone.startsWith('010') ||
        parent_phone.startsWith('011') ||
        parent_phone.startsWith('012') ||
        parent_phone.startsWith('015') ||
        parent_phone.startsWith('002') ||
        parent_phone.startsWith('+2')) &&
      parent_phone.length >= 11 &&
      parent_phone.length <= 14 &&
      parent_phone * 0 == 0
    ) {
      this.setState({count: 0});
    } else {
      this.setState({
        parent_phone_Message: 'Please enter Correct Number',
        count: 1,
      });
    }

    if (student_naId1.startsWith('3') || student_naId1.length == 14) {
      this.setState({idCount: 0});
    } else {
      this.setState({
        Student_naId_Message: 'Please enter Correct National ID',
        idCount: 1,
      });
    }

    if (
      Student &&
      student_naId1 &&
      parent_phone != '' &&
      this.state.count == 0 &&
      this.state.idCount == 0
    ) {
      let obj = {
        student_name: this.state.NameOfStudent.trim(),
        parent_phone: this.state.parent_phone.trim(),
        student_national_id: this.state.studentNaId.trim(),
        student_generation_id: this.state.class_id,
        student_collection_id: this.state.group_id,
      };
      this.state.data.push(obj);

      let DataToSend = {
        student_name: this.state.NameOfStudent.trim(),
        parent_phone: this.state.parent_phone.trim(),
        student_national_id: this.state.studentNaId.trim(),
        student_generation_id: this.state.class_id,
        student_collection_id: this.state.group_id,
      };

      alert(JSON.stringify(DataToSend));
      {
        /*////////////////////////////////////////// TO SERVER ////////////////////////////* */
      }
      axios
        .post(
          'https://camp-coding.org/reachUpAcademy/admin/' + 'add_student.php',
          DataToSend,
        )
        .then(res => {
          if (res.status == 200) {
            if (res.data == 'success') {
              this.get_Students();
              // Alert.alert("تم اضافه الطالب بنجاح");
              ToastAndroid.showWithGravityAndOffset(
                'you added student successfully',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                80,
              );
            } else {
              // Alert("تمت الاضافه بنجاح")
              ToastAndroid.showWithGravityAndOffset(
                'you added  successfully',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                80,
              );
            }
          } else {
            ToastAndroid.showWithGravityAndOffset(
              'error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
          this.setState({loading: false});
        });

      this.setState({modalVisible: false});
      this.setState({
        NameOfStudent: '',
        parent_phone: '',
        StudentMessage: '',
        studentNaId: '',
        parent_phone_Message: '',
        Student_naId_Message: '',
      });
    } else if (Student == '' || student_naId1 == '' || parent_phone == '') {
      if (Student == '') {
        this.setState({StudentMessage: 'you must enter student Name'});
      } else {
        this.setState({StudentMessage: ''});
      }

      if (parent_phone == '') {
        this.setState({parent_phone_Message: "you must enter father's phone"});
      } else {
        this.setState({parent_phone_Message: ''});
      }
      if (student_naId1 == '') {
        this.setState({Student_naId_Message: 'you must enter national id'});
      } else {
        this.setState({Student_naId_Message: ''});
      }
    }
  }
  deleteStudent() {
    this.setState({deleteLoading: true});
    let index = this.state.delIndex;
    let list = this.state.data;

    let DataToSend = {
      student_id: list[index].student_id,
    };

    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' + 'delete_student.php',
        DataToSend,
      )
      .then(res => {
        if (res.status == 200) {
          // alert(JSON.stringify(res.data))

          if (res.data == 'success') {
            // let arr = []
            list.splice(index, 1);
            this.setState({
              data: list,
            });

            ToastAndroid.showWithGravityAndOffset(
              'Deleted Successfuly',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              20,
              20,
            );
          } else {
            ToastAndroid.showWithGravityAndOffset(
              'حدث خطأ ما ',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              20,
              20,
            );
          }
        }
        this.setState({
          delIndex: '',
          DeleteModalVisible: false,
          deleteLoading: false,
        });
      });
  }

  onChangeSearch = searchQuery => {
    // let searchQuery = this.state.searchQuery;

    let list = this.state.students;
    let data = [];
    for (let i = 0; i < list.length; i++) {
      // console.log(list[i].student_name.startsWith(searchQuery))
      // console.log(searchQuery)
      if (
        list[i].student_name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        data.push(list[i]);
      }
    }

    this.setState({data: data});
  };

  renderStudents = ({item, index}) => {
    return (
      <>
        {/*///////////////////////////////////////////////////////// Students /////////////////////////////////////////////////////// * */}

        <TouchableOpacity
          style={styles.StudentView}
          onPress={() => {
            this.props.navigation.navigate('AllStudent_profile', {
              // students: item.data,
              class_name: item.collection_data.collection_name,
              Group_Name: item.generation.generation_name,
              student_name: item.student_name,
              student_id: item.student_id,
              student_national_id: item.student_national_id,
              parent_phone: item.parent_phone,
              gender: item.gender,
              // ??? تمم ولا اي هاتي كد الكراس تاني
            });
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({DeleteModalVisible: true, delIndex: index});
              }}
              style={{
                height: 25,
                width: 25,
                backgroundColor: '#f00',
                borderRadius: 15,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name={'times-circle'}
                size={30}
                color={'#fff'}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>
            {item.gender == 'male' ? (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 20,
                  marginRight: 20,
                  borderRadius: 5,
                }}
                source={require('../constants/images/boy.png')}
              />
            ) : (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginLeft: 20,
                  marginRight: 20,
                  borderRadius: 5,
                }}
                source={require('../constants/images/girl.png')}
              />
            )}
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item.student_name}
                {/* روان محمد الصاوي */}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '300',
                  marginTop: 5,
                }}>
                {item.generation.generation_name}
                {/* Kg1 */}
              </Text>

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '300',
                  marginTop: 5,
                }}>
                {item.collection_data
                  ? item.collection_data.collection_name
                  : ''}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  render() {
    const header = (
      <SearchBar
        lightTheme
        placeholder="Student Name"
        onChangeText={query => {
          this.setState({searchQuery: query});
          this.onChangeSearch(query);
        }}
        value={this.state.searchQuery}
        style={{flex: 1}}
      />
    );

    return (
      <>
        <StatusBar backgroundColor={'#3c2365'}></StatusBar>
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
              Students List
            </Text>
          </View>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              this.setState({modalVisible: true});
            }}>
            {/* <View style={{ height: 35, width: 35, backgroundColor: "#f8bb08", borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                            <FontAwesome5
                                name={'plus'}
                                size={20}
                                style={{
                                    alignSelf: "center",
                                    alignItems: "center",
                                    color: "#fff",
                                    elevation: 10
                                }}

                            />
                        </View> */}
          </TouchableOpacity>
        </View>

        <Headroom
          style={[styles.container,{width:"100%"}]}
        //   style={{width: '100%'}}
          headerComponent={header}
          ScrollableComponent={ScrollView}
          headerHeight={80}
          scrollEventThrottle={80}>
          {/* {this.state.data.length != 0  ?
                     <>
                        {this.state.disable == false ?
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                renderItem={this.renderStudents}


                            />

                            :
                            <NativeBaseProvider>
                                <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 15 }} />
                            </NativeBaseProvider>
                        }
                    </> : <>
                    
                    <View style={{alignSelf:"center",paddingTop:"50%",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{
                            alignItems:"center",
                            alignSelf:"center",
                            color:"#3c2365",
                            fontWeight:"bold",

                            fontSize:25
                        }}>لا يوجد طلاب بعد</Text>
                    </View>
                    
                    </>} */}

          {this.state.disable ? (
            <View
              style={{
                alignSelf: 'center',
                paddingTop: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <NativeBaseProvider>
                <Spinner color={'#f8bb08'} size={30} style={{marginTop: 15}} />
              </NativeBaseProvider>
            </View>
          ) : (
            <FlatList
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={true}
              data={this.state.data}
              renderItem={this.renderStudents}
              ListEmptyComponent={() => {
                return (
                  <View
                    style={{
                      alignSelf: 'center',
                      paddingTop: '50%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        alignSelf: 'center',
                        color: '#3c2365',
                        fontWeight: 'bold',

                        fontSize: 25,
                      }}>
                      No Student Yet
                    </Text>
                  </View>
                );
              }}
            />
          )}
        </Headroom>

        {/*/////////////////////////////////////////////  Add Student ////////////////////////////////////////////////////////////// */}

        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
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
              اضافه طالب
            </Text>
          </View>
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
              color={'#000'}
              multiline={true}
              placeholder="اسم الطالب"
              placeholderTextColor="#000"
              onChangeText={NameOfStudent => this.setState({NameOfStudent})}
              value={this.state.NameOfStudent}
            />
          </View>
          <Text style={{color: '#f00', alignSelf: 'center'}}>
            {this.state.StudentMessage}
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
              color={'#000'}
              // multiline={true}
              keyboardType="number-pad"
              placeholder="هاتف ولي الأمر"
              placeholderTextColor="#000"
              onChangeText={parent_phone => this.setState({parent_phone})}
              value={this.state.parent_phone}
            />
          </View>
          <Text style={{color: '#f00', alignSelf: 'center'}}>
            {this.state.parent_phone_Message}
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
              color={'#000'}
              // multiline={true}
              keyboardType="number-pad"
              placeholder="الرقم القومي للطالب"
              placeholderTextColor="#000"
              onChangeText={studentNaId => this.setState({studentNaId})}
              value={this.state.studentNaId}
            />
          </View>

          <Text style={{color: '#f00', alignSelf: 'center'}}>
            {this.state.Student_naId_Message}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.add_Student();
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
                  NameOfStudent: '',
                  parent_phone: '',
                  Student_naId_Message: '',
                  StudentMessage: '',
                  parent_phone_Message: '',
                  GroupMessage: '',
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
          visible={this.state.DeleteModalVisible}
          onRequestClose={() => {
            this.setState({
              DeleteModalVisible: false,
            });
          }}
          transparent={true}>
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
              <View style={{height: '50%'}}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#000',
                    fontWeight: 'bold',
                    paddingBottom: '5%',
                    alignSelf: 'center',
                  }}>
                  Are you sure?
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  height: '50%',
                  padding: '1%',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: '40%',
                    backgroundColor: '#00B859',
                    elevation: 7,
                    marginRight: '20%',
                    alignSelf: 'center',
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.deleteStudent();
                  }}>
                  {this.state.deleteLoading ? (
                    <ActivityIndicator size={26} color={'#fff'} />
                  ) : (
                    <Text style={styles.TextStyle2}>Sure</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({DeleteModalVisible: false});
                  }}
                  style={{
                    height: 50,
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
  HeaderView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#3c2365',
    elevation: 22,
  },
  StudentView: {
    marginTop: 20,
    width: width * 0.9,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
  AlertView: {
    height: height * 0.3,
    width: '80%',
  },
  ModalViewStyle: {
    backgroundColor: '#fff',
    height: 150,
    width: '80%',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 20,
    padding: '5%',
    paddingLeft: '10%',
  },
  TextStyle2: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  ConnectionView: {
    width: '100%',
    height: 20,
    position: 'absolute',
    zIndex: 222,
    // backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
