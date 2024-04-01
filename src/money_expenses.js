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
    ToastAndroid



} from 'react-native';
import {
    NativeBaseProvider,
    Spinner,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window');
import moment from 'moment';
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
            show: false,
            minimumDate: new Date(),
            maxmumDate: new Date(),
            date: new Date(),
            today_date: '',
            modalVisible1: false,
            payment_id: "",
            password: "",
            month_name: this.props.navigation.getParam("month_name")


        }
    }

    componentDidMount() {
        // this.getMoneyExpenses()
        this.get_money_by_month()
    }
    // componentDidUpdate(){

    // }


    Delete_fun() {
        let data_to_send = {
            password: this.state.password,
            payment_id: this.state.payment_id
        }
        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "delete_payment_Expenses.php", data_to_send).then(res => {
            if (res.status == 200) {
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
        })

    }




    // getMoneyExpenses() {

    //     let date = new Date()
    //     let FormatedDate = moment(date).format('MM-YYYY');

    //     // alert(FormatedDate)
    //     axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_expenses.php').then((res) => {

    //         if (res.status == 200) {

    //             if (Array.isArray(res.data)) {
    //                 // alert(JSON.stringify(res.data))
    //                 this.setState({
    //                     money_expenses: res.data,
    //                     disable: false

    //                 })

    //             } else {
    //                 alert("error")

    //             }
    //         }

    //     })
    // }
    get_money_by_month() {
        let obj = {
            date: this.state.month_name
        }
        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "select_expenses_by_month.php", obj).then((res) => {
            if (res.status == 200) {
                if (Array.isArray(res.data)) {
                    this.setState({ money_expenses: res.data, disable: false })
                } else {
                    alert("error")
                }
            }
        })

    }






















    AddMoney() {

        let title = this.state.payment_title;

        let paid = this.state.money_paid;
        let note = this.state.payment_note



        if (title != "" && paid != "") {
            // alert(paid +" "+ title +" " + this.state.payment_note)
            let DataToSend = {
                money_paid: paid.trim(),
                payment_title: title.trim(),
                payment_note: this.state.payment_note.trim(),

            }
            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/add_expense.php', DataToSend).then((res) => {

                // alert(res.data)
                if (res.data == 'success') {
                    this.getMoneyExpenses()
                    this.setState({
                        modalVisible: false
                    })

                    // Alert.alert("Expense Added Successfully");
                    ToastAndroid.showWithGravityAndOffset(
                        "Expenses Added successfully",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80,
                    );
                } else {
                    Alert("Error")
                }


            });

        } else if (title == "" || paid == "") {
            if (title == "") {
                this.setState({
                    payment_title_Message: "Plese enter Expense title"
                })
            } else {

                this.setState({
                    payment_title_Message: ""
                })
            }
            if (paid == "") {
                this.setState({
                    money_paid__Message: "Please enter Paid Value"
                })
            } else {

                this.setState({
                    money_paid__Message: ""
                })
            }


        }


    }



    formatDate(date) {
        let FormatedDate = moment(date).format('DD MMM YYYY');

        return FormatedDate;
    }

    onChange(date, value) {
        let date1 = value + '';
        let carrent_date = date1.slice(4, 15);
        let format_date = moment(carrent_date).format('YYYY/MM/DD');

        // alert(format_date)
        this.setState({ today_date: format_date, show: false })
    }




















    render() {
        return (
            <>
                {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
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
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Expenses</Text>
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


                {/*///////////////////////////////////////////////////////// Content /////////////////////////////////////////////////////// * */}
                {/* <View style={{ flex: 1 }}> */}

                {/* {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={'date'}
              is24Hour={false}
              maximumDate={this.state.maxmumDate}
              display="default"
              onChange={(date, value) => {
                //  alert(JSON.stringify(date))
                this.onChange(date, value);
              }}
              // onChange={this.onChange}
            />
          )}

                <View
                  style={{
                    alignSelf: 'center',
                    width: '90%',
                    borderRadius: 8,
                    backgroundColor: '#FFFFFF',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                    marginBottom: 16,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    borderBottomEndRadius: 20,
                    borderTopRightRadius: 20,
                    marginTop: 3,
                    alignItems: 'center',
                  }}>
                  <TextInput
                    placeholder={
                      this.state.today_date
                        ? (this.state.today_date + '').substr(0, 21)
                        : 'date not set yet'
                    }
                    editable={false}
                    style={{
                      width: '80%',
                      marginLeft: 20,
                      fontSize: 14,
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      fontFamily: 'Metropolis',
                      color: '#9B9B9B',
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#2fcc70',
                      width: 36,
                      height: 36,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      this.setState({
                        show: true,
                      });
                    }}>
                    <FontAwesome5 name={'plus'} color={'#FFFFFF'} size={15} />
                  </TouchableOpacity>
                </View> */}
















                {this.state.disable == false ? this.state.money_expenses == "" ?
                    <Text style={{
                        alignSelf: 'center',
                        color: "#3c2365",
                        fontSize: 25,
                        fontWeight: "bold",
                        marginTop: "50%"
                    }} >
                        No Expenses Yet
                    </Text>
                    :
                    <FlatList

                        showsVerticalScrollIndicator={true}
                        data={this.state.money_expenses}
                        renderItem={({ item, index }) => (

                            <>

                                <TouchableOpacity

                                    onPress={() => {
                                        this.setState({
                                            modalVisible1: true,
                                            payment_id: item.payment_id
                                        })
                                    }}

                                    style={{
                                        height: height * 0.15,
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
                                    <View style={{ flexDirection: "row", flex: 1 }}>

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

                                                        <Text style={{ color: "#f00" }}>  No Notes</Text>
                                                    </View>

                                                ) :
                                                    (
                                                        <Text style={{ fontWeight: "bold" }} >Notes:{item.notes}</Text>

                                                    )}

                                            </View>



                                        </View>

                                        <View style={{ height: "100%", width: "50%", alignItems: "center" }} >
                                            <View style={{ flexDirection: "row", marginTop: "2%" }}>

                                                <Text style={{ fontSize: 16, fontWeight: "400", marginTop: "2%" }}>
                                                    Paid Value:

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

                                                {this.formatDate(item.date)}
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
                            Add Expense</Text>
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
                                placeholder="Payment title"
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
                            color={"#000"}
                            // multiline={true}
                            keyboardType="number-pad"
                            placeholder="Payment Value"
                            placeholderTextColor="#000"

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
                            color={"#000"}
                            // multiline={true}
                            keyboardType="default"
                            placeholder="Notes"
                            placeholderTextColor="#000"

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
                                Add
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
                                cancel
                            </Text>

                        </TouchableOpacity>
                    </View>

                </Modal>
                {/*/////////////////////////////////////*/}


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
