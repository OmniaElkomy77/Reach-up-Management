import axios from 'axios';
import React, { Component } from 'react';
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
    ToastAndroid
} from 'react-native';
import {

    Button,
    NativeBaseProvider,
    Spinner,

} from 'native-base';
import { RadioButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window');
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money_expenses: [],
            disable: true,
            modalVisible: false,
            money_paid: "",
            payment_title: "",
            payment_note: "",
            money_paid__Message: "",
            payment_note_Message: "",
            payment_title_Message: "",
            password: "",
            payment_id: "",
            modalVisible1: false,
            month_name: this.props.navigation.getParam("month_name")


        }
    }

    componentDidMount() {
        // this.getMoneyExpenses()
        this.getMoneyExpenses_by_month()

    }

    Delete_fun() {
        let data_to_send = {
            password: this.state.password,
            payment_id: this.state.payment_id
        }
        // alert(data_to_send.payment_id)
        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "delete_payment_teacher.php", data_to_send).then(res => {
            if (res.status == 200) {
                // alert(res.data)
                if (res.data == "success") {
                    this.getMoneyExpenses()
                    this.setState({ password: "" })
                } else {
                    ToastAndroid.showWithGravityAndOffset(
                        "something error",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                }
            } else {
                ToastAndroid.showWithGravityAndOffset(
                    "something error",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    80
                );
            }


            this.setState({ password: "" })
        })

    }
    //  getMoneyExpenses() {


    //         axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_teachers_payments.php').then((res) => {

    //             if (res.status == 200) {

    //                 if (res.data != 'error') {
    //                     // alert(JSON.stringify(res.data))
    //                     this.setState({
    //                         money_expenses: res.data,
    //                         disable: false

    //                     })

    //                 } else {
    //                     alert("error")
    //                     this.setState({ disable: false })

    //                 }
    //             }

    //         })



    //     }
    getMoneyExpenses_by_month() {
        let obj = {
            date: this.state.month_name
        }
        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "select_teachers_payments_by_month.php", obj).then((res) => {
            if (res.status == 200) {

                if (Array.isArray(res.data)) {
                    this.setState({
                        money_expenses: res.data,
                        disable: false

                    })

                } else {
                    alert("error")
                    this.setState({ disable: false })

                }
            }
        })
    }



    render() {
        return (
            <>
                {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
                <View style={styles.HeaderView} >

                    <View style={{ width: "75%", flexDirection: "row" }}>
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
                            <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Teacher Payments</Text>
                        </View>
                    </View>

                </View>


                {/*///////////////////////////////////////////////////////// Content /////////////////////////////////////////////////////// * */}
                {/* <View style={{ flex: 1 }}> */}


                {this.state.disable == false ? this.state.money_expenses == "" ?
                    <Text style={{
                        alignSelf: 'center',
                        color: "#3c2365",
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: "50%"
                    }} >
                        No Payments Yet
                    </Text>
                    :
                    <FlatList

                        showsVerticalScrollIndicator={true}
                        data={this.state.money_expenses}
                        renderItem={({ item, index }) => (

                            <>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ modalVisible1: true, payment_id: item.payment_id })
                                    }}

                                    style={{
                                        // height: height * 0.15,
                                        //  borderTopWidth:3,
                                        //  borderTopColor:"#999",
                                        borderBottomColor: "#999",
                                        borderBottomWidth: 1,
                                        elevation: 2,
                                        padding: 15,
                                        paddingRight: "5%",




                                        width: width,
                                        alignSelf: "center",
                                        backgroundColor: 'white',


                                    }}


                                >
                                    <Text
                                        style={{

                                            fontSize: 18,
                                            fontWeight: '600',
                                            marginTop: 5,
                                            alignSelf: "center",
                                            color: "#3c2365"

                                        }}>
                                        {item.teacher_name}

                                    </Text>
                                    <View style={{ flexDirection: "row", flex: 1 }}>




                                        <View style={{ height: "100%", width: "50%", alignItems: "center" }}>

                                            <Text
                                                style={{

                                                    fontSize: 18,
                                                    fontWeight: '600',
                                                    marginTop: 5,
                                                }}>
                                                {item.payment_title}

                                            </Text>
                                            <View style={{
                                                height: "70%",
                                                // width:"100%",
                                                // backgroundColor: "#ff0",
                                                justifyContent: "center"
                                            }}>
                                                {item.notes == "" ? (
                                                    <View style={{ flexDirection: "row" }}>

                                                        <Text style={{ color: "#f00" }}>  لا يوجد ملاحظات</Text>
                                                    </View>

                                                ) :
                                                    (
                                                        <Text style={{ fontWeight: "bold" }} > ملاحظه :{item.notes}</Text>

                                                    )}

                                            </View>



                                        </View>

                                        <View style={{ height: "100%", width: "50%", alignItems: "center" }} >
                                            <View style={{ flexDirection: "row", marginTop: "2%" }}>

                                                <Text style={{ fontSize: 16, fontWeight: "400", marginTop: "2%" }}>
                                                    قيمه الدفع :

                                                </Text>
                                                <Text style={{
                                                    fontSize: 19,
                                                    color: "#f8bb08",
                                                    fontWeight: "bold",
                                                    alignSelf: "center"
                                                }}>
                                                    {item.money_paid + " "}

                                                </Text>

                                            </View>
                                            <Text style={{ marginTop: "2%" }}>
                                                {item.date}
                                            </Text>

                                        </View>
                                    </View>




                                </TouchableOpacity>
                            </>
                        )}
                        keyExtractor={(i, k) => k.toString()}

                    />
                    :
                    <NativeBaseProvider>
                        <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 10 }}></Spinner>
                    </NativeBaseProvider>
                }

                {/*////////////////////////////////////////////////////////Add Money /////////////////////////////////////////* */}




                <Modal visible={

                    this.state.modalVisible
                    // true
                }

                    onRequestClose={
                        () => { this.setState({ modalVisible: false }) }
                    }
                    animationType="slide"
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
                            اضافه مصروفات
                        </Text>
                    </View>



                    <View>
                        <View
                            style={styles.TextInputStyle}>
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
                                color={"#000"}
                                placeholder="عنوان الدفع"
                                placeholderTextColor="#000"

                                onChangeText={payment_title => this.setState({ payment_title })}
                                value={this.state.payment_title}
                            />

                        </View>



                    </View>





                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.payment_title_Message}</Text>
                    <View
                        style={styles.TextInputStyle}>
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
                            color={"#000"}
                            onChangeText={money_paid => this.setState({ money_paid })}
                            value={this.state.money_paid}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.money_paid__Message}</Text>
                    <View
                        style={styles.TextInputStyle}>
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
                            color={"#000"}
                            onChangeText={payment_note => this.setState({ payment_note })}
                            value={this.state.payment_note}
                        />

                    </View>

                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.payment_note_Message}</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
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
                                    payment_title: "",
                                    payment_title_Message: "",
                                    payment_note: "",
                                    payment_note_Message: "",
                                    money_paid: "",
                                    money_paid__Message: ""
                                })

                            }}

                            style={{
                                width: '40%',
                                backgroundColor: '#f8bb08',
                                justifyContent: 'center',
                                marginTop: 20,
                                alignSelf: 'center',
                                borderRadius: 20,
                                marginLeft: "5%"
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
                                    <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15 }}>Enter password to Delete </Text>

                                </View>


                                <View style={{ height: 70, width: "90%", backgroundColor: "#eee", borderRadius: 20, alignSelf: "center", padding: 10 }}>
                                    <TextInput style={{ height: "100%", width: "100%", color: "#000" }}
                                        multiline={true}
                                        placeholder="Enter password"
                                        placeholderTextColor={"#777"}
                                        // keyboardType="number-pad"
                                        value={this.state.password}
                                        onChangeText={(value) => {
                                            this.setState({ password: value })
                                        }}
                                    />
                                </View>

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

                                            this.setState({ modalVisible1: false })
                                            this.Delete_fun()
                                        }}
                                        style={{
                                            height: 50,
                                            width: "40%",
                                            backgroundColor: '#3c2365',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            borderRadius: 25
                                        }}>
                                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }}>Confirm</Text>
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























            </>
        )

    }
}
const styles = StyleSheet.create({
    HeaderView: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#3c2365',
        elevation: 22
    }, TextInputStyle: {
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
