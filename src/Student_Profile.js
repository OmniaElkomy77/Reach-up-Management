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
    Linking,
    TouchableWithoutFeedback,
    ToastAndroid
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
            groups: [],
            student_name: this.props.navigation.getParam("student_name"),
            parent_phone: this.props.navigation.getParam("parent_phone"),
            Group_Name: this.props.navigation.getParam("Group_Name"),
            class_name: this.props.navigation.getParam("class_name"),
            student_id: this.props.navigation.getParam("student_id"),
            student_national_id: this.props.navigation.getParam("student_national_id"),
            gender: this.props.navigation.getParam("gender"),
            update_name_modal: false,
            newName: "",
            name_error: "",
            new_Phone_error: "",
            newPhone: "",
            editModal: false,
            generation_selected_value: "",
            generation_selected_id: "",
            collection_selected_value: "",
            collection_selected_id: "",
            // index:0
            DialogModal: false



        };
    }

    componentWillUnmount() {
        let ref = this.props.navigation.getParam("ref")
        ref()
    }
    componentDidMount() {

        this.getAllData()

    }

    getAllData() {
        axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_generations_and_collections.php').then((res) => {
            // alert(JSON.stringify(res.data))
            this.setState({ disabled: false });
            this.setState({ classes: res.data })

        })

    }



    onValueChange(value, index) {
        this.setState({
            generation_selected_id: this.state.classes[index].generation_id,
            generation_selected_value: value,
            groups: this.state.classes[index].collections

        });
        // let groups =
        // this.state.groups.push(groups)
        // alert(JSON.stringify(groups))
    }
    onValueChange2(value, index) {




        if (index >= 0) {
            // console.log(this.state.data2[index - 1].collection_id);
            this.setState({
                collection_selected_id: this.state.groups[index].collection_id,
                collection_selected_value: value,
            });
        } else {
            this.setState({
                collection_selected_value: value,
                collection_selected_id: 0,
            });
        }
    }
    UpdateStudentData() {
        let newPhone = this.state.newPhone
        if (this.state.newName.length <= 3 && this.state.newPhone.length <= 0) {

            this.setState({ new_Phone_error: 'الرجاء إدخال الرقم صحيحاً' })
            this.setState({ name_error: 'الرجاء إدخال الأسم صحيحاً' })


        } else if (this.state.newName == "" && this.state.newPhone != "") {


            if (
                (newPhone.startsWith('010') ||
                    newPhone.startsWith('011') ||
                    newPhone.startsWith('012') ||
                    newPhone.startsWith('015') ||
                    newPhone.startsWith('002') ||
                    newPhone.startsWith('+2')) &&
                newPhone.length >= 11 &&
                newPhone.length <= 14 &&
                newPhone * 0 == 0
            ) {
                let newPhone = this.state.newPhone
                let newName = this.state.student_name

                let DataToSend = {
                    student_id: this.state.student_id,
                    student_name: newName,
                    phone: newPhone
                }

                { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
                axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'update_student.php', DataToSend).then((res) => {
                    if (res.status == 200) {
                        if (res.data == 'success') {

                            // alert(res.data)
                            this.setState({
                                update_name_modal: false,
                                student_name: newName,
                                parent_phone: newPhone
                            })
                            // Alert.alert("Data has been updated successfully");
                            ToastAndroid.showWithGravityAndOffset(
                                "Data Updated Successfully",
                                 ToastAndroid.SHORT,
                                 ToastAndroid.BOTTOM,
                                 25,
                                 80,
                               );
                        } else {

                        }
                    } else {
                        // alert("error")
                        // Alert.alert('أدمن', 'خطأ');
                        ToastAndroid.showWithGravityAndOffset(
                            "error",
                             ToastAndroid.SHORT,
                             ToastAndroid.BOTTOM,
                             25,
                             80,
                           );
                    }

                });

            } else {
                this.setState({
                    new_Phone_error: "you must enter correct number"
                })
            }


        } else if (this.state.newName != "" && this.state.newPhone == "") {
            let newPhone = this.state.parent_phone
            let newName = this.state.newName

            let DataToSend = {
                student_id: this.state.student_id,
                student_name: newName,
                phone: newPhone
            }

            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'update_student.php', DataToSend).then((res) => {
                if (res.status == 200) {
                    if (res.data == 'success') {
                        this.getAllData()
                        // alert(res.data)
                        this.setState({
                            update_name_modal: false,
                            student_name: newName,
                            parent_phone: newPhone
                        })
                        // Alert.alert("تم تعديل البيانات بنجاح");
                        ToastAndroid.showWithGravityAndOffset(
                            "the data has been updated successfully",
                             ToastAndroid.SHORT,
                             ToastAndroid.BOTTOM,
                             25,
                             80,
                           );
                    } else {

                    }
                } else {
                    // alert("error")
                    // Alert.alert('أدمن', 'خطأ');
                    ToastAndroid.showWithGravityAndOffset(
                        "error",
                         ToastAndroid.SHORT,
                         ToastAndroid.BOTTOM,
                         25,
                         80,
                       );
                }

            });


        } else if (this.state.newName != "" && this.state.newPhone != "") {


            if (
                (newPhone.startsWith('010') ||
                    newPhone.startsWith('011') ||
                    newPhone.startsWith('012') ||
                    newPhone.startsWith('015') ||
                    newPhone.startsWith('002') ||
                    newPhone.startsWith('+2')) &&
                newPhone.length >= 11 &&
                newPhone.length <= 14 &&
                newPhone * 0 == 0
            ) {
                let newPhone = this.state.newPhone
                let newName = this.state.newName

                let DataToSend = {
                    student_id: this.state.student_id,
                    student_name: newName,
                    phone: newPhone
                }

                { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
                axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'update_student.php', DataToSend).then((res) => {
                    if (res.status == 200) {
                        if (res.data == 'success') {
                            this.getAllData()
                            // alert(res.data)
                            this.setState({
                                update_name_modal: false,
                                student_name: newName,
                                parent_phone: newPhone
                            })
                            // Alert.alert("تم تعديل البيانات بنجاح");
                            ToastAndroid.showWithGravityAndOffset(
                                "Data Updated Successfully",
                                 ToastAndroid.SHORT,
                                 ToastAndroid.BOTTOM,
                                 25,
                                 80,
                               );
                        } else {

                        }
                    } else {
                        // alert("error")
                        // Alert.alert('أدمن', 'خطأ');
                        ToastAndroid.showWithGravityAndOffset(
                            "error",
                             ToastAndroid.SHORT,
                             ToastAndroid.BOTTOM,
                             25,
                             80,
                           );



                    }

                });
            }
        }
    }

    Update_Gen_coll() {

        let student_id = this.state.student_id
        let generation_selected_id = this.state.generation_selected_id
        let collection_selected_id = this.state.collection_selected_id
        let generation_selected_value = this.state.generation_selected_value
        let collection_selected_value = this.state.collection_selected_value




        let DataToSend = {
            student_id: student_id,
            generation_id: generation_selected_id,
            collection_id: collection_selected_id


        }
        if (generation_selected_id && collection_selected_id != "") {
            // alert(JSON.stringify(DataToSend))


            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'update_student_gen_col.php', DataToSend).then((res) => {
                if (res.status == 200) {

                    if (res.data == 'success') {
                        // Alert.alert("Data Updated Successfully");
                        ToastAndroid.showWithGravityAndOffset(
                            "Data Updated Successfully",
                             ToastAndroid.SHORT,
                             ToastAndroid.BOTTOM,
                             25,
                             80,
                           );
                        this.setState({
                            editModal: false,
                            generation_id: generation_selected_id,
                            generation_name: generation_selected_value,
                            collection_id: collection_selected_id,
                            collection_name: collection_selected_value,
                            Group_Name: generation_selected_value,
                            class_name: collection_selected_value
                        })


                    }
                } else {
                    // alert("error")
                    // Alert.alert("Error");
                    ToastAndroid.showWithGravityAndOffset(
                        "error",
                         ToastAndroid.SHORT,
                         ToastAndroid.BOTTOM,
                         25,
                         80,
                       );
                }

            });


        }
        else {
            this.setState({ DialogModal: true })
        }

    }



    render() {
        return (
            <>


                <StatusBar backgroundColor={'#3c2365'}></StatusBar>

                <ScrollView>
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
                            <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Student Profile</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        </View>


                    </View>
                    {/*///////////////////////////////////////////////////////// Contant/////////////////////////////////////////////////////// * */}

                    <LinearGradient colors={['#3c2365', '#9b8db1']} style={{ flex: 1, padding: "10%" }}>

                        <View style={styles.GradientView}>


                            <View style={{ flexDirection: "row" }}>

                                <View style={{
                                    height: 40,
                                    width: 70,
                                    backgroundColor: "#108f91",
                                    borderRadius: 10,
                                    alignItems: "center",
                                    marginRight: "60%",
                                    justifyContent: "center"
                                }}>

                                    <Text
                                        selectable={true}
                                        style={{
                                            alignSelf: "center",
                                            color: "#fff",
                                            // fontWeight:"bold",

                                            fontSize: 20
                                        }}

                                    >{this.state.student_id}</Text>
                                </View>

                                <View style={{ width: "14%" }}>
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
                                    {/* {/* <Text style={{ alignSelf: "center", textAlign: "center", fontSize: 15 }}>تع/Text> */}

                                </View>

                            </View>
                            <View style={styles.innnerStyle}>



                                {this.state.gender== "male" ?


                                    <Image
                                        resizeMode={'contain'}
                                        style={{ height: 110, width: 110 }}

                                        source={require('../constants/images/boy.png')}
                                    >

                                    </Image>

                                    :
                                    <Image
                                    resizeMode={'contain'}
                                    style={{ height: 110, width: 110 }}
                                        source={require('../constants/images/girl.png')}
                                    />
                                }

                            </View>
                            {/* </View> */}

                            <View style={{

                                alignSelf: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: "2%", textAlign: "center" }}>
                                    {this.state.student_name}
                                </Text>
                            </View>
                            <View style={{

                                alignSelf: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{ fontSize: 17, marginBottom: "2%" }}>
                                    {this.state.student_national_id}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "center",


                            }}>
                                <FontAwesome5 name={"phone"} size={17}
                                    style={{
                                        marginTop: "2%",
                                        color: "#3c2365",
                                        marginRight: "1%"
                                    }} />


                                <Text selectable={true} style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    marginBottom: "10%",
                                    alignSelf: "center",
                                    color: "#3c2365",
                                    // marginTop:"6%",

                                }}>

                                    {this.state.parent_phone}
                                </Text>



                            </View>

                            <View style={{ flexDirection: "row", height: "20%" }}>

                                <View style={{
                                    height: "90%",
                                    width: "40%",
                                    backgroundColor: "#fff",
                                    elevation: 7,
                                    marginRight: "20%",
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={styles.TextStyle}>{this.state.Group_Name}</Text>
                                </View>
                                <View style={{
                                    height: "90%",
                                    width: "40%",
                                    backgroundColor: "#fff",
                                    elevation: 7,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={styles.TextStyle}>{this.state.class_name}</Text>
                                </View>
                            </View>
                            <TouchableOpacity

                                onPress={
                                    () => {
                                        this.props.navigation.navigate("Student_Mounthly_Reports", {
                                            student_id: this.state.student_id
                                        })
                                    }
                                }

                                style={{
                                    height: "15%",
                                    width: "40%",
                                    backgroundColor: "#f8bb08",
                                    elevation: 7,
                                    borderRadius: 20,
                                    alignSelf: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={styles.TextStyle2}>Student Report</Text>
                            </TouchableOpacity>

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
                                            this.setState({ update_name_modal: true })
                                        }
                                    }
                                >
                                    <Text style={styles.TextStyle2}> Update</Text>
                                </TouchableOpacity>
                                <TouchableOpacity

                                    onPress={
                                        () => {


                                            this.props.navigation.navigate("Accounts", {

                                                student_id: this.state.student_id
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
                                    <Text style={styles.TextStyle2}>finance</Text>
                                </TouchableOpacity>
                            </View>
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
                                    color={"#000"}
                                    placeholder='تغيير الاسم'
                                    label='تغيير الاسم'
                                    value={this.state.newName}
                                    onChangeText={(value) => {
                                        this.setState({
                                            newName: value,

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
                                    color={"#000"}
                                    keyboardType="phone-pad"
                                    placeholder='تغيير الرقم'
                                    label='تغيير الرقم'
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

                                        this.UpdateStudentData()
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
                                                Update
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
                                <Text style={{ alignSelf: "center", fontSize: 20, color: "#3c2365", fontWeight: "700" }}>Edit Student Class and Group</Text>
                                <View style={{ width: '90%' }}>
                                    <Picker
                                        selectedValue={this.state.generation_selected_value}
                                        onValueChange={this.onValueChange.bind(this)}>
                                        {this.state.classes.map((res) => (
                                            <Picker.Item
                                                label={res.generation_name}
                                                value={res.generation_name}
                                                id={res.generation_id}

                                            />
                                        ))
                                        }
                                    </Picker>
                                </View>
                                <View style={{ width: '90%' }}>
                                    <Picker

                                        enabled={this.state.generation_selected_id == 0 ? false : true}
                                        selectedValue={this.state.collection_selected_value}
                                        onValueChange={this.onValueChange2.bind(this)}>
                                        {this.state.groups.map((res) => (
                                            <Picker.Item
                                                label={res.collection_name}
                                                value={res.collection_name}
                                                id={res.collection_id}
                                            />

                                        ))}
                                    </Picker>
                                </View>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.Update_Gen_coll()
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
                                                Update
                                            </Text>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>


                {/*////////////////////////////////////////////////////Dialog ///////////////////////////////////////////////////////////////////////////*/}
                <Modal
                    animationType='slide'

                    visible={this.state.DialogModal}
                    style={{ justifyContent: "center" }}
                    transparent={true}>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setState({ DialogModal: false })
                        }}
                        style={{ flex: 1, width: '100%', height: '100%' }}>
                        <View style={{ flex: 1, width: '100%', height: '100%' }} />
                    </TouchableWithoutFeedback>
                    <View style={{
                        height: "20%",
                        width: "70%",
                        backgroundColor: "#fff",
                        alignSelf: "center",
                        alignItems: "center",
                        borderRadius: 50,
                        justifyContent: "center",
                        paddingTop: "10%",
                        // marginTop: "70%",
                        elevation: 10
                    }}>


                        <Text style={{
                            alignSelf: "center",
                            color: "#f00",
                            height: "80%",
                            width: "80%",
                            textAlign: "center",
                            fontSize: 17
                        }}>Please Choose data you want to Update To</Text>


                    </View>


                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setState({ DialogModal: false })
                        }}
                        style={{ flex: 1, width: '100%', height: '100%' }}>
                        <View style={{ flex: 1, width: '100%', height: '100%' }} />
                    </TouchableWithoutFeedback>
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
        height: height,
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
        fontWeight: "bold",
        textAlign: "center"

    },
    TextStyle2: {
        alignSelf: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"

    }


})
