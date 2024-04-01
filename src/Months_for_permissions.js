
import React from "react"
import {
    View, Text, StatusBar, TouchableOpacity, Dimensions, StyleSheet,
    ScrollView, FlatList, 
    ToastAndroid
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import { BackgroundImage } from "react-native-elements/dist/config";
const { width, height } = Dimensions.get('window');
import moment from 'moment';
export default class Months_for_permissions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student_id: "",
            Months_for_permissions: [],
            teacher_id:this.props.navigation.getParam("teacher_id")


        }
    }


    componentDidMount() {

        this.getMonth()
    }

    getMonth() {
        axios.get("https://camp-coding.org/reachUpAcademy/admin/" + "select_dates.php").then(res => {
            if (res.status == 200) {
                if (Array.isArray(res.data)) {
                    this.setState({ Months_for_permissions: res.data, loading: false })
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















    _renderMonths_for_permissions = (item, index) => {

        return (
            <>

                <View style={styles.MainView}>


                    <TouchableOpacity style={styles.ContentView}

                        onPress={
                            () => {
                                this.props.navigation.navigate("All_teacher_permissons",
                                {
                                    month_name:item.item.month_name,
                                    teacher_id:this.state.teacher_id
                                })
                                // alert(this.state.teacher_id)
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



                    <View style={{
                        height:60,
                        marginBottom:15,
                        alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }}> Months for permissions</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                {/*////////////////////////////////////////////////////////Contetnt /////////////////////////////////////* */}


                <FlatList
                    data={this.state.Months_for_permissions}
                    renderItem={this._renderMonths_for_permissions}
                />

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