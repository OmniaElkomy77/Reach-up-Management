
import React from "react"
import { View, Text, StatusBar, TouchableOpacity, Dimensions, StyleSheet, ScrollView, FlatList, Image, Alert,
ToastAndroid } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
const { width, height } = Dimensions.get('window');
export default class Groups extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student_id: "",
            days: this.props.navigation.getParam("days")


        }
    }
    componentDidMount() {
        // alert(JSON.stringify(this.state.days))
    }

    _renderDailyReports = (item, index) => {

        return (
            <>

                {/* {alert(JSON.stringify(item.item.attendance))} */}
                {item.item.attendance == "no" ?
                    <View style={styles.MainView}>

                        <View
                            style={styles.ContentView}
                        >

                            <View style={{

                                backgroundColor: "#f00",
                                width: "2%",
                                borderTopLeftRadius: 20,
                                marginRight: "5%"


                            }}>
                            </View>
                            <Text
                                style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
                                {item.item.date}</Text>
                        </View>

                    </View>

                    :



                    <TouchableOpacity style={styles.MainView}

                        onPress={
                            () => {

                                if (item.item.report) {

                                    this.props.navigation.navigate("Student_Report", {


                                        Report: item.item.report

                                    })
                                } else {
                                    ToastAndroid.showWithGravityAndOffset(
                                        "the student is present but there is no report for today",
                                         ToastAndroid.SHORT,
                                         ToastAndroid.BOTTOM,
                                         25,
                                         80,
                                       );
                                    // Alert.alert("Reach Up Academy", "الطالب حاضر لكن لايوجد تقرير لهذا اليوم")
                                }

                                // alert(JSON.stringify(item.item.report))
                            }


                        }

                    >

                        <View
                            style={styles.ContentView}
                        >

                            <View style={{

                                backgroundColor: "#0f0",
                                width: "2%",
                                borderTopLeftRadius: 20,
                                marginRight: "5%"


                            }}>
                            </View>
                            <Text
                                style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
                                {item.item.date}</Text>
                        </View>

                    </TouchableOpacity>
                }


            </>
        )

    }

    render() {
        return (
            <>

                {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
                <View style={styles.HeaderView} >

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                        this.props.navigation.goBack()
                    }}>

                        <FontAwesome5
                            name="angle-right"
                            size={35}
                            style={{ color: '#fff', marginRight: 20 }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Student Report</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                {/*////////////////////////////////////////////////////////Contetnt /////////////////////////////////////* */}

                {this.state.days != "" ?

                    <FlatList
                        data={this.state.days}
                        renderItem={this._renderDailyReports}
                    />
                    :
                   
                    <Text
                    style={{
                        flex: 1,
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#3c2365",
                        alignSelf: "center",
                        marginTop: "70%"
                    }}>No Report Yet</Text>

                 }






            </>
        )


    }
}
const styles = StyleSheet.create({
    HeaderView: {
        // width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#3c2365',
        elevation: 22,
        alignContent: "center",
        justifyContent: "center"

    },
    MainView: {
        flex: 1,
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingTop: "5%",
        overflow:"hidden"
        // backgroundColor: "#ff0",
        // flexDirection: "row"
    },
    ContentView: {
        height: 50,
        width: "100%",
        overflow:"hidden",
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingRight: "10%",
        flexDirection: "row"

    },
    ImageStyle: {
        height: "100%",
        width: "100%"
    }

})