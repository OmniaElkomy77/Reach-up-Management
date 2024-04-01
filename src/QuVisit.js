import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  ScrollView,
  Modal,
  Alert,
  AsyncStorage,
  ToastAndroid,
  UIManager, Platform, LayoutAnimation
} from 'react-native';
const { width, height } = Dimensions.get('window');
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class QuVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection_id: '',
      teacher_id: '',
      // Curriculum
      Course_plan: '',
      show_curriculum: false,
      // Activity Skills
      Grammer: '',
      Speaking: '',
      Writing: '',
      Reading: '',
      Listening: '',
      activity_kills: '',
      activity: false,

      // Class Mangement
      time_management: '',
      Kids: '',
      teacher_preformance: '',
      mangement: false,

      //  (Presentation)
      video_game: '',
      powerpoint: '',
      speak_presentation: '',
      Presentation: false,

      // Modeling
      modeling: '',
      modeling_show: false,

      // Attendence
      ins: '',
      ass: '',
      attendence: false,

      // Eval .kids
      eval_kids: '',
      aval: false,

      // note
      note: '',
      note_show: false,
      instarctor: '',

      question3: 'question3',
      question4: 'question4',

      question5: 'question5',
      ans5: '',
      text_wrong: '',
      connection_Status: '',
      modalconfirm: false,
      loadingbutt: false,
      arrques: []

    };
  }


  componentDidMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const unsubscripe = NetInfo.addEventListener(state => {
      this.setState({
        connection_Status: state.isConnected ? 'Online' : 'Offline',
      });
      if (!state.isConnected) {
      }
    });
    return unsubscripe;
  }

  sumbit_Assess() {
    if (
      this.state.Course_plan == '' ||
      this.state.Grammer == '' ||
      this.state.Speaking == '' ||
      this.state.Writing == '' ||
      this.state.Reading == '' ||
      this.state.Listening == '' ||
      this.state.time_management == '' ||
      this.state.Kids == '' ||
      this.state.teacher_preformance == '' ||
      this.state.video_game == '' ||
      this.state.powerpoint == '' ||
      this.state.speak_presentation == '' ||
      this.state.Kids == '' ||
      this.state.modeling == '' ||
      this.state.ins == '' ||
      this.state.ass == '' ||
      this.state.eval_kids == '' ||
      this.state.instarctor == ""

    ) {
      ToastAndroid.showWithGravityAndOffset(
        'You must Fill in All The Questions',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        20,
        20,
      );
    } else {

      this.setState({ loadingbutt: true })
      data_to_send = {
        group_id: 1,
        level_id: 1,
        Course_plan: this.state.Course_plan,
        Grammer: this.state.Grammer,
        Speaking: this.state.Speaking,
        Writing: this.state.Writing,
        Reading: this.state.Reading,
        Listening: this.state.Listening,
        time_management: this.state.time_management,
        Kids: this.state.Kids,
        teacher_preformance: this.state.teacher_preformance,
        video_game: this.state.video_game,
        powerpoint: this.state.powerpoint,
        speak_presentation: this.state.speak_presentation,
        modeling: this.state.modeling,
        ins: this.state.ins,
        ass: this.state.ass,
        eval_kids: this.state.eval_kids,
        note: this.state.note == '' ? "nothing" : this.state.note,
        instarctor: this.state.instarctor
      }
      axios.post("https://camp-coding.org/reachUpAcademy/teacher/insrertQuVisit.php", data_to_send).then(res => {
        if (res.status == 200) {

          if ((res.data) == "sucess_added") {


            this.setState({
              modalconfirm: true
            })

          }
          else {

            Alert.alert("something went wrong ... try agine later")


          }
        } else {

          Alert.alert("something went wrong ... try agine later")

        }

        this.setState({ loadingbutt: false })




      });

    }
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="#3c2365"
          barStyle="light-content"></StatusBar>
        <View style={{
          width: '100%',
          height: 60,
          backgroundColor: '#3c2365',
          alignItems: "center",
          justifyContent: 'center'

        }}>

          <Text
            style={{
              fontSize: 25,
              color: "#fff"
            }}
          >
            Visits
          </Text>


        </View>
        <ScrollView>

          {this.state.connection_Status == 'Offline' ? (
            <View
              style={{
                height: height,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
              }}>
              <Text style={{ color: '#777' }}>No Internet Connection</Text>
            </View>
          ) : (
            <>





              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.activity) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: true,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>

                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'instarctor'}
                  </Text>
                </TouchableOpacity>





                <View>

                  <TextInput
                    style={{
                      // height: 50,
                      backgroundColor: '#ddd',
                      width: '95%',
                      alignSelf: 'center',
                      borderRadius: 10,
                      color: '#000',

                      padding: 10,
                    }}
                    placeholder="Enter instarctor name"
                    multiline={true}
                    placeholderTextColor={'#999'}
                    value={this.state.instarctor}
                    onChangeText={(value) => {

                      this.setState({ instarctor: value });
                    }}>

                  </TextInput>


                </View>


              </View>

              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.show_curriculum) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: true,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);



                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.show_curriculum ? "chevron-down" : "chevron-right"}
                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Curriculum'}
                  </Text>
                </TouchableOpacity>


                {this.state.show_curriculum ? (


                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Course plan + Story + Activity plan'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Course_plan}
                      onChangeText={(value) => {

                        this.setState({ Course_plan: value });
                      }}>

                    </TextInput>




                  </View>
                ) : null}


              </View>










              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.activity) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: true,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.activity ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Activity Skills'}
                  </Text>
                </TouchableOpacity>


                {this.state.activity ? (


                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Grammer'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Grammer}
                      onChangeText={(value) => {

                        this.setState({ Grammer: value });
                      }}>

                    </TextInput>




                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Speaking'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Speaking}
                      onChangeText={(value) => {

                        this.setState({ Speaking: value });
                      }}>

                    </TextInput>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Writing'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Writing}
                      onChangeText={(value) => {

                        this.setState({ Writing: value });
                      }}>

                    </TextInput>



                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Reading'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Reading}
                      onChangeText={(value) => {

                        this.setState({ Reading: value });
                      }}>

                    </TextInput>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Listening'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Listening}
                      onChangeText={(value) => {

                        this.setState({ Listening: value });
                      }}>

                    </TextInput>


                  </View>

                ) : null}
              </View>



              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.mangement) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: true,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.mangement ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Class Mangement'}
                  </Text>
                </TouchableOpacity>



                {this.state.mangement ? (


                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Time Management'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.time_management}
                      onChangeText={(value) => {

                        this.setState({ time_management: value });
                      }}>

                    </TextInput>


                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Kids'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.Kids}
                      onChangeText={(value) => {

                        this.setState({ Kids: value });
                      }}>

                    </TextInput>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Teacher preformance'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.teacher_preformance}
                      onChangeText={(value) => {

                        this.setState({ teacher_preformance: value });
                      }}>

                    </TextInput>


                  </View>

                ) : null}
              </View>









              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.Presentation) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: true,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.Presentation ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Presentation'}
                  </Text>
                </TouchableOpacity>


                {this.state.Presentation ? (



                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Video/Game (Presentation)'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.video_game}
                      onChangeText={(value) => {

                        this.setState({ video_game: value });
                      }}>

                    </TextInput>


                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Powerpoint (Presentation)'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.powerpoint}
                      onChangeText={(value) => {

                        this.setState({ powerpoint: value });
                      }}>

                    </TextInput>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Speak'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.speak_presentation}
                      onChangeText={(value) => {

                        this.setState({ speak_presentation: value });
                      }}>

                    </TextInput>


                  </View>

                ) : null}
              </View>



              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.modeling_show) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: true,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.modeling_show ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Modeling'}
                  </Text>
                </TouchableOpacity>

                {this.state.modeling_show ? (




                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Modeling'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.modeling}
                      onChangeText={(value) => {
                        this.setState({ modeling: value });
                      }}>

                    </TextInput>




                  </View>

                ) : null}
              </View>


              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.attendence) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: true,
                        aval: false,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.attendence ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Attendence'}
                  </Text>
                </TouchableOpacity>



                {this.state.attendence ? (


                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Ins'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.ins}
                      onChangeText={(value) => {
                        this.setState({ ins: value });
                      }}>

                    </TextInput>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Ass'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.ass}
                      onChangeText={(value) => {
                        this.setState({ ass: value });
                      }}>

                    </TextInput>


                  </View>
                ) : null}

              </View>

              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.aval) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: true,
                        note_show: false,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.aval ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'Eval .kids'}
                  </Text>
                </TouchableOpacity>


                {this.state.aval ? (



                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' Eval .kids'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.eval_kids}
                      onChangeText={(value) => {
                        this.setState({ eval_kids: value });
                      }}>

                    </TextInput>




                  </View>
                ) : null}

              </View>

              <View
                style={{
                  // backgroundColor: '#eee',
                  padding: 5,
                  borderStyle: 'dashed',
                  width: '95%',
                  borderRadius: 12,
                  alignSelf: 'center',
                  padding: 10,
                  backgroundColor: '#fff',
                  marginVertical: 8,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                }}>
                <TouchableOpacity
                  onPress={() => {
                    if (this.state.note_show) {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: false,
                      })
                    } else {
                      this.setState({
                        show_curriculum: false,
                        activity: false,
                        mangement: false,
                        Presentation: false,
                        modeling_show: false,
                        attendence: false,
                        aval: false,
                        note_show: true,
                      })
                    }
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

                    // this.openinput()
                  }}
                  style={{
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    width: '90%',
                    alignSelf: "center",
                    borderBottomWidth: .5,
                    borderColor: '#bdb7b7',
                    marginBottom: 5
                  }}>
                  <View>
                    <Icon
                      name={this.state.note_show ? "chevron-down" : "chevron-right"}

                      size={20}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 25,
                    }}
                  >
                    {'note'}
                  </Text>
                </TouchableOpacity>


                {this.state.note_show ? (



                  <View>

                    <Text
                      style={{ color: '#000', fontSize: 15, marginVertical: 10 }}>
                      {' note'}
                    </Text>
                    <TextInput
                      style={{
                        // height: 50,
                        backgroundColor: '#ddd',
                        width: '95%',
                        alignSelf: 'center',
                        borderRadius: 10,
                        color: '#000',

                        padding: 10,
                      }}
                      placeholder="Enter Your Answer"
                      multiline={true}
                      placeholderTextColor={'#999'}
                      value={this.state.note}
                      onChangeText={(value) => {
                        this.setState({ note: value });
                      }}>

                    </TextInput>




                  </View>

                ) : null}
              </View>

            </>
          )}
          <TouchableOpacity
            onPress={() => {
              this.sumbit_Assess()
            }}
            style={{
              width: '90%',
              height: 50,
              backgroundColor: '#3c2365',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: 10,
              alignSelf: "center",
              marginTop: 5,
              marginBottom: 5,
              flexDirection: "row",

            }}>
            {this.state.loadingbutt ? (
              <ActivityIndicator
                size={30}
                color={"#fff"}
              />
            ) : (
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: '#fff',
                  fontFamily: 'Janna LT Bold',
                }}>
                Sumbit
              </Text>

            )}



          </TouchableOpacity>
        </ScrollView>


        <Modal
          visible={this.state.modalconfirm}
          onRequestClose={() => {
            this.setState({ modalconfirm: false });
          }}
          transparent={true}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                width: '90%',
                padding: 10,
                backgroundColor: '#fff',
                elevation: 22,
                borderRadius: 15,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',
                    color: "#000",
                    fontSize: 22,
                  }}>
                  {'ReachUp'}
                </Text>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd',
                }}
              />


              <View

                style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
                <Text
                  style={{
                    fontFamily: 'Janna LT Bold',
                    color: '#000',
                    fontSize: 17,
                    textAlign: 'center',
                  }}>
                  {'Question Visit Added Successfully'}
                </Text>
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  width: '90%',
                  borderWidth: 1.5,
                  borderColor: '#ddd'
                }}
              />

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 7,
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => {
                    this.setState({ modalconfirm: false });
                    this.props.navigation.goBack()

                  }}>
                  <Text
                    style={{
                      fontFamily: 'Janna LT Bold',
                      color: '#3c2365',
                      fontSize: 20,
                    }}>
                    Confirm
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>



      </View>
    );
  }
}
