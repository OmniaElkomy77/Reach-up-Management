import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
    Image,
    Dimensions,
    StatusBar,
    Modal,
    Linking
} from 'react-native';
import {
    Container,
    Form,
    Header,
    Left,
    Toast,
    Body,
    Right,
    Title,
    Spinner,
    Root,
} from 'native-base';
import { TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import { Hoshi } from 'react-native-textinput-effects';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import axios from 'axios'
const { width, height } = Dimensions.get('window');



export default class UpdateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: [],
            teacher_name: this.props.navigation.getParam("teacher_name"),
            pay_type: this.props.navigation.getParam("pay_type"),
            teacher_id: this.props.navigation.getParam("teacher_id"),
            teacher_pass: this.props.navigation.getParam("teacher_pass"),
            Teacher_classes: this.props.navigation.getParam("Teacher_classes"),
            update_name_modal: false,
            newName: "",
            name_error: "",
            new_Phone_error: "",
            editModal: false,
            generation_selected_value: "المستوى الاول"



        };
    }
    componentDidMount() {

        // alert(JSON.stringify(this.state.Teacher_classes))
        // this.getAllData()
        // alert(JSON.stringify(this.state.Teacher_classes))


    }

    // getAllData() {
    //     axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_generations_and_collections.php').then((res) => {
    //         // alert(JSON.stringify(res.data))
    //         this.setState({ disabled: false });
    //         this.setState({ classes: res.data })

    //     })

    // }

    form() {
        return (

            <Form>
                <Picker
                    selectedValue={this.state.generation_selected_value}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({ generation_selected_value: itemValue })
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

            </Form>
        )

    }


    render() {
        return (
            <>


                <StatusBar backgroundColor={'#3c2365'}></StatusBar>
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
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >الصفحه الشخصيه</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                {/*///////////////////////////////////////////////////////// Contant/////////////////////////////////////////////////////// * */}

                <LinearGradient colors={['#3c2365', '#9b8db1']} style={{ flex: 1, padding: "10%" }}>

                    <View style={styles.GradientView}>
                        {/* <View style={{ flexDirection: "row" }}> */}
                        {/* <View style={{ width: "14%", marginRight: "13%" }}>
                                <TouchableOpacity

                                    onPress={() => {
                                        this.setState({
                                            editModal: true,
                                        });
                                    }}>
                                    <FontAwesome5
                                        name="user-edit"
                                        size={30}
                                        style={{ color: '#8A3982', alignSelf: "center" }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ alignSelf: "center", textAlign: "center", fontSize: 15 }}>تعديل</Text>

                            </View> */}

                        <View style={styles.innnerStyle}>



                            <Image
                                resizeMode={'contain'}
                                style={{ height: 110, width: 110 }}
                                source={require("../constants/images/Teacher_logo.png")}></Image>
                        </View>
                        {/* </View> */}

                        <View style={{

                            alignSelf: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: "2%" }}>
                                {this.state.teacher_name}
                            </Text>
                        </View>

                        <Text selectable={true} style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            // marginBottom: "5%",
                            color: '#3c2365',
                            alignSelf: "center",
                            // marginTop:"6%",

                        }}>

                            {this.state.teacher_id}
                        </Text>
                        <View style={{ flexDirection: "row", height: "10%", alignSelf: "center", alignContent: "center" }}>


                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold'

                            }}>Pass :{this.state.teacher_pass}</Text>

                        </View>

                        <View style={{

                            alignSelf: "center",
                            justifyContent: "center"
                        }}>
                            {
                                this.state.pay_type == 'hours' ? (
                                    <>
                                        <Image style={styles.imgStyle} source={require('../constants/images/hour.png')} />
                                    </>
                                ) :
                                    (
                                        <>
                                            <Image style={styles.imgStyle} source={require('../constants/images/month.png')} />
                                        </>
                                    )
                            }
                        </View>






                        <View style={{ flexDirection: "row", height: "20%", padding: "2%", justifyContent: "center" }}>

                            <TouchableOpacity style={{
                                height: "70%",
                                width: "40%",
                                backgroundColor: "#00B859",
                                elevation: 7,
                                marginRight: "20%",
                                alignSelf: "center",
                                borderRadius: 20,
                                justifyContent: "center"
                            }}

                                onPress={
                                    () => {
                                        this.props.navigation.navigate("Teacher_Classes", {
                                            // Teacher_classes: this.state.Teacher_classes,
                                            teacher_id: this.state.teacher_id


                                            // student_id: this.state.student_id
                                        })
                                        // alert(JSON.stringify(this.props.navigation.getParam("Teacher_classes")))
                                    }
                                }
                            >
                                <Text style={styles.TextStyle2}>صفوف المعلم</Text>
                            </TouchableOpacity>
                            <TouchableOpacity

                                onPress={
                                    () => {

                                        this.props.navigation.navigate('Teacher_Accounts', {
                                            teacher_id: this.state.teacher_id
                                        })
                                    }
                                }
                                style={{
                                    height: "70%",
                                    width: "40%",
                                    backgroundColor: "#B82700",
                                    elevation: 7,
                                    borderRadius: 20,
                                    alignSelf: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={styles.TextStyle2}>الحسابات</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.pay_type == 'hours' ?
                         <TouchableOpacity

                            onPress={
                                () => {

                                    this.props.navigation.navigate('Teacher_Work_Hours', {
                                        teacher_id: this.state.teacher_id
                                    })
                                }
                            }
                            style={{
                                height: "10%",
                                width: "40%",
                                backgroundColor: "#f8bb08",
                                elevation: 7,
                                borderRadius: 20,
                                alignSelf: "center",
                                justifyContent: "center"
                            }}>
                            <Text style={styles.TextStyle2}>ساعات العمل</Text>
                        </TouchableOpacity> 
                        :
                        null
                        }


                    </View>
                </LinearGradient>
                {/*////////////////////////////////////////////////////// Update Data //////////////////////////////////////////////////////* */}

                <Modal
                    visible={this.state.update_name_modal}
                    onRequestClose={() => {
                        this.setState({
                            update_name_modal: false
                        })
                    }}
                    animationType='slide'
                    transparent={true}
                >

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>



                        <View
                            style={{
                                width: width * 0.9,
                                // height: height * 0.25,
                                backgroundColor: '#fff',
                                borderRadius: 25,
                                alignSelf: 'center',
                                // marginTop: 15,
                                // alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.37,
                                shadowRadius: 7.49,
                                elevation: 12,
                            }}>


                            <View style={{ padding: 10 }}>
                                <TouchableOpacity
                                    style={{ width: '10%', marginLeft: 5 }}
                                    onPress={() => {
                                        this.setState({
                                            update_name_modal: false
                                        });
                                    }}>
                                    <FontAwesome5 name="times" size={30} />
                                </TouchableOpacity>
                            </View>
                            {/*888888888888888888888888888888888888 Edit Name 88888888888888888888888888888888* */}
                            <TextInput
                                mode='outlined'
                                style={{
                                    width: '90%',
                                    alignSelf: 'center'
                                }}
                                placeholder='تغيير الاسم'
                                label='تغيير الاسم'
                                color={"#000"}
                                value={this.state.newName}
                                onChangeText={(value) => {
                                    this.setState({
                                        newName: value,
                                        // loading_up:true
                                        // loading:true
                                    })

                                }}


                            />
                            <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold' }} >
                                {this.state.name_error}
                            </Text>

                            {/*888888888888888888888888888888888888 Edit Phone 88888888888888888888888888888888* */}
                            <TextInput
                                mode='outlined'
                                style={{
                                    width: '90%',
                                    alignSelf: 'center'
                                }}
                                keyboardType="phone-pad"
                                placeholder='تغيير الرقم'
                                label='تغيير الرقم'
                                color={"#000"}
                                value={this.state.newPhone}
                                onChangeText={(value) => {
                                    this.setState({
                                        newPhone: value,
                                        // loading_up:true
                                        // loading:true
                                    })

                                }}


                            />
                            <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold' }} >
                                {this.state.new_Phone_error}
                            </Text>



                            <TouchableOpacity
                                onPress={() => {
                                    if (this.state.newName.length >= 3 && this.state.newPhone.length >= 0) {


                                    } else {
                                        this.setState({ new_Phone_error: 'الرجاء إدخال الرقم صحيحاً' })
                                        this.setState({ name_error: 'الرجاء إدخال الأسم صحيحاً' })
                                    }
                                }}
                                style={{ width: '40%', alignSelf: 'center' }}
                                disabled={this.state.loading_up}>
                                <View
                                    style={{
                                        width: '95%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: '#00B859',
                                        // alignSelf: 'center',
                                        borderRadius: 5,
                                        marginBottom: 20,
                                        marginTop: 15,
                                        // shadowColor: '#000',
                                        // shadowOffset: {
                                        //   width: 0,
                                        //   height: 4,
                                        // },
                                        // shadowOpacity: 0.32,
                                        // shadowRadius: 5.46,
                                        // alignSelf: 'center',
                                        // elevation: 9,
                                    }}>
                                    {this.state.loading_up ? (
                                        <Spinner
                                            color="#fff"
                                            size={26}
                                            style={{
                                                alignSelf: 'center',
                                                padding: 0,
                                                marginTop: 0,
                                            }}
                                        />
                                    ) : (
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    color: '#FFFFFF',
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Metropolis',
                                                    fontStyle: 'normal',
                                                }}>
                                                تعديل
                                            </Text>
                                        )}
                                </View>
                            </TouchableOpacity>


                        </View>


                    </View>
                </Modal>

                {/*//////////////////////////////////////////////////////////////Edit MOdal ///////////////////////////////////* */}
                <Modal visible={this.state.editModal} transparent={true}>
                    <View
                        style={{
                            width: width,
                            height: height - 10,
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 56,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}>
                        <View
                            style={{
                                width: width * 0.9,
                                // height: height * 0.25,
                                backgroundColor: '#fff',
                                borderRadius: 25,
                                alignSelf: 'center',
                                // marginTop: 15,
                                // alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.37,
                                shadowRadius: 7.49,
                                elevation: 12,
                            }}>
                            <View style={{ padding: 10 }}>
                                <TouchableOpacity
                                    style={{ width: '10%', marginLeft: 5 }}
                                    onPress={() => {
                                        this.setState({
                                            editModal: false,
                                        });
                                    }}>
                                    <FontAwesome5 name="times" size={30} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '90%' }}>
                                <Form>
                                    <Picker
                                        selectedValue={this.state.generation_selected_value}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({ generation_selected_value: itemValue })
                                        }>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>

                                </Form>
                            </View>

                            <TouchableOpacity
                                onPress={() => {
                                    // this.update();
                                }}
                                style={{ width: '40%', alignSelf: 'center' }}
                                disabled={this.state.loading_up}>
                                <View
                                    style={{
                                        width: '95%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        backgroundColor: '#00B859',
                                        // alignSelf: 'center',
                                        borderRadius: 5,
                                        marginBottom: 20,
                                        marginTop: 20,
                                        // shadowColor: '#000',
                                        // shadowOffset: {
                                        //   width: 0,
                                        //   height: 4,
                                        // },
                                        // shadowOpacity: 0.32,
                                        // shadowRadius: 5.46,
                                        // alignSelf: 'center',
                                        // elevation: 9,
                                    }}>
                                    {this.state.loading_up ? (
                                        <Spinner
                                            color="#fff"
                                            size={26}
                                            style={{
                                                alignSelf: 'center',
                                                padding: 0,
                                                marginTop: 0,
                                            }}
                                        />
                                    ) : (
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    color: '#FFFFFF',
                                                    fontWeight: 'bold',
                                                    fontFamily: 'Metropolis',
                                                    fontStyle: 'normal',
                                                }}>
                                                تعديل
                                            </Text>
                                        )}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </>
        );
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
    GradientView: {
        height: height * 0.7,
        backgroundColor: "#fff",
        width: width * 0.87,
        alignSelf: "center",
        // justifyContent:"center",
        borderRadius: 20,
        padding: "10%",



    },
    innnerStyle: {
        height: 150,
        width: 150,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff9",
        borderRadius: 100,
        marginBottom: "5%"

    },
    TextStyle: {
        alignSelf: "center",
        fontSize: 20,
        color: "#3c2365",
        fontWeight: "bold"

    },
    TextStyle2: {
        alignSelf: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"

    },
    imgStyle: {
        height: 70,
        width: 70
    }


})

