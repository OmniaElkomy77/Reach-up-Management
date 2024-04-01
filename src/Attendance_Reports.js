import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default class Attendance_Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month_name: this.props.navigation.getParam('month_name'),
      teacher_id: this.props.navigation.getParam('teacher_id'),
      attendance: [],
      loading: true,
    };
  }
  componentDidMount() {
    // alert(this.state.teacher_id)
    this.Attendance_Reports();
  }

  Attendance_Reports() {
  let data_to_send = {
      // date: this.state.month_name,
      // teacher_id:this.state.teacher_id
      collection_id: -1,
      generation_id: -1,
    };
    axios
      .post(
        'https://camp-coding.org/reachUpAcademy/admin/' +
          'select_monthly_attendance_report.php',
        data_to_send,
      )
      .then(res => {
        // alert(JSON.stringify(res.data))
        if (res.status == 200) {
          if (Array.isArray(res.data)) {
            this.setState({attendance: res.data, loading: false});
          } else {
            ToastAndroid.showWithGravityAndOffset(
              'something error',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              80,
            );
          }
          // if(res
        }
      });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.HeaderView}>
          <View
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#F5FCFF', fontSize: 17, fontWeight: 'bold'}}>
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
        {
                    this.state.loading == false ? this.state.attendance.length == 0 ?
                        <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{color:"#000",fontSize:25}}>No Reports Yet</Text>
                        </View> :
        <ScrollView>
          {this.state.attendance.map((item, index) => (
          <View
            style={{
              // height: 100,
              padding: 10,
              width: '95%',
              backgroundColor: '#eee',
              alignSelf: 'center',
              marginVertical: 10,
              borderRadius: 10,
              elevation: 4,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: "#585"
              }}>
              <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
                {item.date}
              </Text>
            </View>
            <View
              style={{
                // height: 50,
                padding: 10,
                // alignItems: "center",
                // justifyContent: "space-around",
                // backgroundColor: "#255"
              }}>
              <Text style={{color: '#666', fontSize: 15, textAlign: 'justify'}}>
                Student Attendance : {item.total_number}
              </Text>
            </View>

            {/* <View style={{
                                        // height: 50,
                                        padding: 10,
                                        // alignItems: "center",
                                        // justifyContent: "space-around",
                                        // backgroundColor: "#255"
                                    }}>
                                        <Text style={{ color: "#f00", fontSize: 15, textAlign: "justify" }}>{item.type}</Text>
                                    </View> */}
          </View>

          ))} 
        </ScrollView>

               :
                        <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                         <ActivityIndicator size={40} color={'#3c2365'} />
                        </View>
                 } 
      </View>
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
    // alignItems:"center",
    // justifyContent: "center"
  },
});
