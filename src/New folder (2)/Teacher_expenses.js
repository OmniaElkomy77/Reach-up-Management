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
            payment_title_Message: ""



        }
    }

    componentDidMount() {
        this.getMoneyExpenses()
    }


    getMoneyExpenses() {

        axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_teachers_payments.php').then((res) => {

            if (res.status == 200) {

                if (res.data != 'error') {
                    // alert(JSON.stringify(res.data))
                    this.setState({
                        money_expenses: res.data,
                        disable: false

                    })

                } else {
                    alert("error")

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
                            <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >حسابات المعلمين</Text>
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
                        لا يوجد حسابات بعد
                    </Text>
                    :
                    <FlatList

                        showsVerticalScrollIndicator={true}
                        data={this.state.money_expenses}
                        renderItem={({ item, index }) => (

                            <>

                                <View style={{
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
                                            alignSelf:"center",
                                            color:"#3c2365"

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




                                </View>
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
