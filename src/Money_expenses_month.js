
import React from "react"
import {
    View, Text, StatusBar, TouchableOpacity, Dimensions,
    StyleSheet, ScrollView, FlatList, Image, Modal, TouchableWithoutFeedback, TextInput,
    ToastAndroid
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import { BackgroundImage } from "react-native-elements/dist/config";
import ModalHome from 'react-native-modalbox';
const { width, height } = Dimensions.get('window');
import moment from 'moment';
export default class Monthly_expenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student_id: "",
            Reports: [
                {
                    // month_name: "2022-01",
                    // "days": [
                    //     {
                    //         "date": "2022-01-02",
                    //         "attendance": "yes",
                    //         "report": {
                    //             "follow_up_id": "1",
                    //             "student_id": "2000", "h_w": "7", "dic": "8", "r_sh": "7", "bo": "N", "participate": "8", "points": "4", "unit": "6", "note": "", "qs_1_grammer": "111111", "qs_2_dictation": "22222222", "qs_3_homework": "33333333", "date": "2022-01-02", "teacher_id": "4555"
                    //         }
                    //     },
                    //     { "date": "2022-01-03", "attendance": "no", "report": "" },
                    //     { "date": "2022-01-05", "attendance": "no", "report": "" },
                    //     {
                    //         "date": "2022-01-06", "attendance": "yes",
                    //         "report":
                    //             { "follow_up_id": "6", "student_id": "2000", "h_w": "0", "dic": "0", "r_sh": "0", "bo": "", "participate": "0", "points": "0", "unit": "", "note": "", "qs_1_grammer": "", "qs_2_dictation": "", "qs_3_homework": "", "date": "2022-01-06", "teacher_id": "4555" }
                    //     }, {
                    //         "date": "2022-01-07", "attendance": "yes", "report":
                    //             { "follow_up_id": "9", "student_id": "2000", "h_w": "3", "dic": "2", "r_sh": "2", "bo": "Y", "participate": "2", "points": "6", "unit": "2", "note": "Eryuu", "qs_1_grammer": "Sfghhh", "qs_2_dictation": "Dtyuu", "qs_3_homework": "Cvvhddc", "date": "2022-01-07", "teacher_id": "4555" }
                    //     }]
                }
            ],
            // modalVisible: false,
            // modalVisible1: false,
            loading: true,
            month_name: ""

        }
    }


    componentDidMount() {

        this.getMonth()
    }

    getMonth() {
        axios.get("https://camp-coding.org/reachUpAcademy/admin/" + "select_dates.php").then(res => {
            if (res.status == 200) {
                if (Array.isArray(res.data)) {
                    this.setState({ Reports: res.data, loading: false })
                } else {
                    ToastAndroid.showWithGravityAndOffset(
                        "something error",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                    this.setState({ loading: false })
                }
            } else {
                ToastAndroid.showWithGravityAndOffset(
                    "try again,something error",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    80
                );
            }
        })
    }











    _renderMounthlyexpenses = (item, index) => {

        return (
            <>

                <View style={styles.MainView}>


                    <TouchableOpacity style={styles.ContentView}

                        onPress={
                            () => {
                                // this.setState({
                                //     // modalVisible: true,
                                //     month_name: item.item.month_name
                                // })
                                this.props.navigation.navigate('money_expenses', {
                                    month_name: item.item.month_name
                                })
                            }

                        }


                    >
                        <View style={{ width: 70 }}>
                            <BackgroundImage
                                source={require("../constants/images/month_after_edit.png")}
                                style={styles.ImageStyle}
                            >
                                <View style={{
                                    height: 35,
                                    width: 35,
                                    backgroundColor: "#e9eef2",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    marginTop: 5,
                                    alignContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text
                                        style={{ alignSelf: "center", fontSize: 20, color: "#6a7073", fontWeight: "500" }}

                                    >{moment(item.item.month_name).format('MMM')}</Text>
                                </View>
                            </BackgroundImage>
                        </View>

                        <View style={{ width: "50%", alignSelf: "center", }}>
                            <Text style={{ fontSize: 25, alignSelf: "center" }}> {item.item.month_name}</Text>
                        </View>

                    </TouchableOpacity>



                </View>

            </>
        )

    }

    render() {
        return (
            <>

                {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
                <View style={styles.HeaderView} >

                    {/* <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                        this.props.navigation.goBack()
                    }}>

                        <FontAwesome5
                            name="angle-right"
                            size={35}
                            style={{ color: '#fff', marginRight: 20 }}
                        />

                    </TouchableOpacity> */}

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }}>payments</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                {/*////////////////////////////////////////////////////////Contetnt /////////////////////////////////////* */}


                <FlatList
                    data={this.state.Reports}
                    renderItem={this._renderMounthlyexpenses}
                />


                {/*///////////////////////////////////////////////////*/}







            </>
        )


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
    MainView: {
        flex: 1,
        // paddingLeft: "2%",
        // paddingTop: "5%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ff0",
        flexDirection: "row"
    },
    ContentView: {
        height: 70,
        width: "90%",
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "space-around",
        alignItems: "center",
        // alignSelf:"center",
        marginVertical: 15,
        elevation: 4,
        // paddingRight: "10%",
        flexDirection: "row",
        // paddingLeft: "5%"

    },
    ImageStyle: {
        height: "90%",
        width: "90%",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center"
    }

})