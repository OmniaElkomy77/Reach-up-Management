import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
    Modal,
    TouchableWithoutFeedback,
    TextInput,
    ToastAndroid


} from 'react-native';

import NetInfo from '@react-native-community/netinfo';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
const { width, height } = Dimensions.get('window');
export default class Teacher_permassion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connection_Status: '',
            modalVisible1: false,
            teacher_id: this.props.navigation.getParam("teacher_id"),
            date: "",
            showpickerdate1: false,
            modalVisible: false,
            permission_type: "",
            note: ""
        }
    }
    componentDidMount() {

        const unsubscripe = NetInfo.addEventListener(state => {
            this.setState({
                connection_Status: state.isConnected ? "Online" : "Offline"
            })


        })
        return unsubscripe

        // alert(this.state.teacher_id)
    }


    add_permission() {
        let note = this.state.note
        let type = this.state.permission_type
        let type_permision = ""
        if (type == 1) {
            type_permision = "absense"
        } else if (type == 0) {
            type_permision = "permission"
        }
        let data_to_send = {
            teacher_id: this.state.teacher_id,
            note: note,
            type: type_permision

        }
        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "sign_teacher_holiday.php", data_to_send).then(res => {
            if (res.status == 200) {
                if (res.data == "success") {
                    ToastAndroid.showWithGravityAndOffset(
                        "you added permision ",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                } else {
                    ToastAndroid.showWithGravityAndOffset(
                        "Something Error Try Again",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                }
            } else {
                ToastAndroid.showWithGravityAndOffset(
                    "Something Error Try Again",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    80
                );
            }
            this.setState({ modalVisible: false })
        })
        // sign_teacher_holiday.php
        // data_to_send = { 
        // teacher_id, 
        // note , 
        // type ==> اجازة (غياب) ولا اذن
        // }

        // res==>
        // success
        // error










    }
















    render() {

        return (
            <>
                <StatusBar backgroundColor={'#3c2365'}></StatusBar>


                <View style={styles.HeaderView} >

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                        this.props.navigation.goBack();


                    }}>

                        <FontAwesome5
                            name="angle-right"
                            size={35}
                            style={{ color: '#fff', marginRight: 20 }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Teachers Permissions</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        onPress={
                            () => {
                                this.setState({ modalVisible: true })
                            }
                        }

                    >
                        <View style={{ height: 35, width: 35, backgroundColor: "#f8bb08", borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
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
                        </View>


                    </TouchableOpacity>

                </View>






                {this.state.connection_Status == "Online" ? (


                    <View style={{ backgroundColor: "#fff", paddingTop: 25, height: "100%", alignItems: "center" }}>






                        <TouchableOpacity style={[styles.MainViewStyle]}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("Months_for_permissions",
                                    {
                                        teacher_id:this.state.teacher_id
                                    })
                                    // alert(this.state.teacher_id)
                                }
                            }
                        >

                            <Text style={styles.TextStyle}>

                                Monthly Permissions
                            </Text>
                            <Image
                                style={styles.ImgStyle1}
                                source={require('../constants/images/monthly_report.png')}></Image>
                        </TouchableOpacity>



                        {/* <TouchableOpacity style={[styles.MainViewStyle]}

                            onPress={
                                () => {
                                    this.setState({ modalVisible1: true })
                                    // this.props.navigation.navigate("Teacher_Services")
                                }
                            }
                        >

                            <Image
                                style={styles.ImgStyle}
                                source={require('../constants/images/daily_report.png')} />
                            <Text style={styles.TextStyle}>
                                Daily Permissions
                            </Text>
                        </TouchableOpacity> */}









                    </View>

                ) :
                    <View style={{
                        height: height,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: "center",
                        width: width

                    }}>

                        <Text style={{ color: "#777" }}>
                            No Internet Connection
                        </Text>


                    </View>

                }


                <Modal
                    visible={this.state.modalVisible1}
                    onRequestClose={
                        () => {
                            this.setState({ modalVisible1: false })
                        }
                    }
                    animationType="slide"
                    // presentationStyle="formSheet"s
                    transparent={true}

                >
                    <View style={{
                        // opacity:0.7,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        flex: 1,
                        justifyContent: "flex-end"
                    }}>
                        <TouchableWithoutFeedback
                            style={{ flex: 1 }}
                            onPress={() => {
                                this.setState({ modalVisible1: false })
                            }} >
                            <View style={{
                                position: "absolute",
                                height: '100%',
                                width: "100%"
                            }} />
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

                                <View style={{
                                    height: 50, width: "100%",
                                    // backgroundColor: '#525',
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15 }}>Choose the Date</Text>

                                </View>


                                {/* <View style={{ height: 70, width: "90%", backgroundColor: "#eee", borderRadius: 20, alignSelf: "center", padding: 10 }}>
                                    <TextInput style={{ height: "100%", width: "100%", color: "#000" }}
                                        multiline={true}
                                        placeholder="Enter password"
                                        placeholderTextColor={"#777"}
                                        keyboardType="number-pad"
                                    />
                                </View>  */}

                                <View style={{
                                    height: 100,
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: "space-around",
                                    // backgroundColor: "#eee",
                                    alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {

                                            this.setState({ modalVisible1: false, showpickerdate1: true })
                                        }}
                                        style={{
                                            height: 50,
                                            width: "40%",
                                            backgroundColor: '#3c2365',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            borderRadius: 25
                                        }}>
                                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }}>Date</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ modalVisible1: false })

                                        }}
                                        style={{
                                            height: 50,
                                            width: "40%",
                                            backgroundColor: "#f8bb08",
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            borderRadius: 25
                                        }}>
                                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }}>Cancel</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                        <TouchableWithoutFeedback
                            style={{ flex: 1 }}
                            onPress={() => {
                                this.setState({ modalVisible1: false })
                            }} >
                            <View style={{
                                width: "100%",
                            }} />
                        </TouchableWithoutFeedback>
                    </View>



                </Modal>




                {
                    this.state.showpickerdate1 ? (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            // colors={"#525"}

                            onChange={(value) => {
                                let d = new Date(value.nativeEvent.timestamp);
                                if (d.toString() != "Invalid Date") {
                                    this.setState({ date: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(), showpickerdate1: false })
                                } else {
                                    this.setState({ showpickerdate1: false })
                                }
                            }}
                        // colorRendering={"#525"}
                        />
                    ) : (null)
                }


                {/*///////////////////////////////////////////Add permission//////////////////////////////////////////////////////////////////////*/}
                <Modal
                    visible={this.state.modalVisible}
                    animationType="slide"
                    onRequestClose={() => {
                        this.setState({ modalVisible: false });
                    }}
                >

                    <View
                        style={{
                            marginBottom: 20,
                            marginTop: 40,
                        }}><Text
                            style={{
                                margin: 24,
                                marginBottom: 10,
                                marginTop: 10,
                                fontSize: 22,
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                            Add Permission
                        </Text>
                    </View>
                    <View
                        style={styles.TextInputStyle}>

                        <TextInput
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                // height: 50,
                                padding: 10,
                                width: '90%',
                                // paddingLeft: 5,
                                color: "#000"
                            }}
                            // color={"#000"}
                            multiline={true}
                            placeholder="Note"
                            placeholderTextColor="#777"
                            value={this.state.note}
                            onChangeText={(value) => {
                                this.setState({ note: value })
                            }}

                        />

                    </View>


                    {/*//////////////////////////////////////////////////////////////////*/}

                    <View style={{ paddingRight: "7%" }}><Text style={{ fontSize: 18, color: "#000", fontWeight: 'bold' }}>permission Type</Text></View>
                    <RadioButton.Group
                        onValueChange={(value) => {
                            this.setState({ permission_type: value });
                        }}

                        value={this.state.permission_type}>
                        <View
                            style={{

                                width: "90%",
                                flexDirection: "row",
                                alignSelf: "center",
                                alignItems: "center",
                                justifyContent: "space-around",
                                // backgroundColor:"#ff0",



                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                }}>


                                <Text style={{ fontSize: 20 }}>
                                    permission
                                </Text>
                                <RadioButton value="0" />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                }}>


                                <Text style={{ fontSize: 18 }}>Absence</Text>
                                <RadioButton value="1" />
                            </View>
                        </View>
                    </RadioButton.Group>









                    {/*//////////////////////////////////////////////*/}











                    <View style={{
                        flexDirection: "row", alignItems: "center", justifyContent: "space-around",
                        width: "90%",
                        // backgroundColor: "#454",
                        alignSelf: "center",
                        marginTop: 10
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.add_permission();


                            }}

                            style={{
                                width: '45%',
                                backgroundColor: '#3c2365',
                                justifyContent: 'center',
                                // marginTop: 20,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                borderRadius: 20,

                            }}>
                            <Text
                                style={{
                                    fontSize: 20,

                                    // textAlign: 'center',
                                    color: '#FFF',

                                }}>
                                Add
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    modalVisible: false,

                                })

                            }}

                            style={{
                                width: '45%',
                                backgroundColor: '#f8bb08',
                                justifyContent: 'center',
                                // marginTop: 20,
                                alignItems: 'center',
                                height: 50,
                                alignSelf: 'center',
                                borderRadius: 20,
                                // marginLeft: "5%"
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    // justifyContent: 'center',

                                    // textAlign: 'center',
                                    color: '#FFF',
                                }}>
                                Cancel
                            </Text>

                        </TouchableOpacity>
                    </View>





                </Modal>










            </>
        )
    }

}

const styles = StyleSheet.create({

    LogoStyle: {

        height: 150,
        width: "95%",
        alignSelf: "center",
        marginBottom: "10%",
        resizeMode: "contain",
        // backgroundColor:"#ff0"


    },
    MainViewStyle: {
        height: 170,
        width: width * 0.9,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignSelf: "center",
        elevation: 5,
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",


    },
    ImgStyle1: {
        resizeMode: "contain",
        height: "100%",
        width: "50%",
        marginLeft: "6%"

    },
    ImgStyle: {
        resizeMode: "contain",
        height: "100%",
        width: "50%",
        marginRight: "5%"

    },
    TextStyle: {
        fontSize: 18,
        color: '#000',
        // height:60,
        width: 120,
        textAlign: "center",

        fontWeight: 'bold',

    }, ConnectionView: {
        width: '100%',
        height: 20,
        position: 'absolute',
        zIndex: 222,
        backgroundColor: "#FF0",
        justifyContent: 'center',
        alignItems: 'center',
    },
    MiddleMainViewStyle: {
        height: 170,
        width: width * 0.9,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignSelf: "center",
        elevation: 5,
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
        paddingLeft: "5%"


    },
    HeaderView: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#3c2365',
        elevation: 22
    },
    TextInputStyle: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        width: '90%',
        marginBottom: "3%"

    },






}
)
