
import React from "react"
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView, Modal,
    TextInput,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    Alert,
    ToastAndroid
} from "react-native";
import { ActionSheet, Root, Container } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import ThemedDialog from "react-native-elements/dist/dialog/Dialog";
// var BUTTONS = [
//     { icon: 'ios-document', text: 'تعديل الامتحان', iconColor: '#080' },
//     { icon: 'ios-document', text: 'تقرير الطلاب', iconColor: '#2c8ef4' },
//     {icon: 'ios-document', text: 'تقرير الطلاب', iconColor: '#2c8ef4'}
// ]
const { width, height } = Dimensions.get('window');
export default class Groups extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            group: "",
            class_name: this.props.navigation.getParam("class_name"),
            class_id: this.props.navigation.getParam("class_id"),
            modalVisible: false,
            NameOfGroup: "",
            LimitOfStudents: "",
            TimesOfGroup: "",
            emptyGroupMessage: "",
            emptyLimitOfStudents: "",
            emptyTimesOfGroup: "",
            students: [],
            ChooseModal: false,
            group_id: "",
            group_name: "",
            updateModalVisible: false,
            deleteModalVisible: false

            // groups:[

            //     {
            //         group_name :"المجموعه الاولى"
            //     },
            //     {
            //         group_name:"المجموعه الثانيه"
            //     },
            //     {
            //         group_name:"المجموعه الثالثه"
            //     }
            // ]

        }
    }
    componentDidMount() {
        this.getGroup()
    }


    getGroup() {
        let group = this.props.navigation.getParam("group")
        this.setState({ group: group })
    }



    componentWillUnmount() {
        let refrish = this.props.navigation.getParam("refrish")
        refrish()
    }


    add_group() {


        let NameOfGroup = this.state.NameOfGroup
        let LimitOfStudents = this.state.LimitOfStudents
        let TimesOfGroup = this.state.TimesOfGroup



        if (NameOfGroup && TimesOfGroup && LimitOfStudents != "") {
            let obj = {
                generation_id: this.state.class_id.trim(),
                collection_name: this.state.NameOfGroup.trim(),
                collection_limit: this.state.LimitOfStudents.trim(),
                collection_time_table: this.state.TimesOfGroup.trim()



            }
            // this.state.group.push(obj)
            let DataToSend = {
                generation_id: this.state.class_id.trim(),
                collection_name: this.state.NameOfGroup.trim(),
                collection_limit: this.state.LimitOfStudents.trim(),
                collection_time_table: this.state.TimesOfGroup.trim()
            }

            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'insert_collection.php', DataToSend).then((res) => {
                if (res.status == 200) {
                    if (res.data * 0 == 0) {
                        // alert(res.data)

                        obj.collection_id = res.data
                        this.state.group.push(obj)
                        this.setState({
                            emptyGroupMessage: "",
                            emptyLimitOfStudents: "",
                            emptyTimesOfGroup: "",
                            NameOfGroup: "",
                            LimitOfStudents: "",
                            TimesOfGroup: ""
                        })
                        // Alert.alert("Group Added Successfully");
                        ToastAndroid.showWithGravityAndOffset(
                            "Group Added Successfully",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                            25,
                            80,
                        );
                    } else {
                        // Alert.alert("Added Successfully")
                        ToastAndroid.showWithGravityAndOffset(
                            "error",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                            25,
                            80,
                        );
                    }
                } else {
                    // alert("error")
                    // Alert.alert('Error');
                    ToastAndroid.showWithGravityAndOffset(
                        "error",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80,
                    );
                }
                // this.setState({ loading: false });
            });
            this.setState({ modalVisible: false })

        }


        else if (NameOfGroup || LimitOfStudents || TimesOfGroup == "") {
            if (NameOfGroup == "") {
                this.setState({ emptyGroupMessage: "Please enter Group Name" })

            } else {
                this.setState({ emptyGroupMessage: "" })
            } if (LimitOfStudents == "") {
                this.setState({ emptyLimitOfStudents: "Please enter Limit of student Allowed" })

            } else {
                this.setState({ emptyLimitOfStudents: "" })
            }

            if (TimesOfGroup == "") {
                this.setState({ emptyTimesOfGroup: "Please enter Group Dates" })
            } else {
                this.setState({ emptyTimesOfGroup: "" })
            }


        }
    }

    update_group() {

        let index = this.state.update_index
        let NameOfGroup = this.state.NameOfGroup
        let LimitOfStudents = this.state.LimitOfStudents
        let TimesOfGroup = this.state.TimesOfGroup



        if (NameOfGroup && TimesOfGroup && LimitOfStudents != "") {
            let obj = {
                collection_id: this.state.group_id.trim(),
                generation_id: this.state.class_id.trim(),
                collection_name: this.state.NameOfGroup.trim(),
                collection_limit: this.state.LimitOfStudents.trim(),
                collection_time_table: this.state.TimesOfGroup.trim()



            }
            // this.state.group.push(obj)
            let DataToSend = {
                collection_id: this.state.group_id.trim(),
                collection_name: this.state.NameOfGroup.trim(),
                collection_limit: this.state.LimitOfStudents.trim(),
                collection_time_table: this.state.TimesOfGroup.trim()
            }

            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'update_collection.php', DataToSend).then((res) => {
                if (res.status == 200) {
                    if (res.data == "success") {
                        // alert(res.data)


                        this.state.group[index] = obj
                        this.setState({
                            emptyGroupMessage: "",
                            emptyLimitOfStudents: "",
                            emptyTimesOfGroup: "",
                            NameOfGroup: "",
                            LimitOfStudents: "",
                            TimesOfGroup: ""
                        })
                        // Alert.alert("Group Updated Successfully");
                        ToastAndroid.showWithGravityAndOffset(
                            "Group Update Successfully",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                            25,
                            80,
                        );
                    } else {
                        // Alert.alert("Updated Successfully")
                        ToastAndroid.showWithGravityAndOffset(
                            "error",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                            25,
                            80,
                        );
                    }
                } else {
                    // alert("error")
                    // Alert.alert('Error');
                    ToastAndroid.showWithGravityAndOffset(
                        "error",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80,
                    );
                }
                // this.setState({ loading: false });
            });
            this.setState({ updateModalVisible: false })

        }


        else if (NameOfGroup || LimitOfStudents || TimesOfGroup == "") {
            if (NameOfGroup == "") {
                this.setState({ emptyGroupMessage: "Please enter Group Name" })

            } else {
                this.setState({ emptyGroupMessage: "" })
            } if (LimitOfStudents == "") {
                this.setState({ emptyLimitOfStudents: "Please enter Limit of student Allowed" })

            } else {
                this.setState({ emptyLimitOfStudents: "" })
            }

            if (TimesOfGroup == "") {
                this.setState({ emptyTimesOfGroup: "Please enter Group Dates" })
            } else {
                this.setState({ emptyTimesOfGroup: "" })
            }


        }
    }

    Delete_Group() {
        let DataToSend = {
            collection_id: this.state.group_id
        }
        axios.post("https://camp-coding.org/reachUpAcademy/admin/" + "delete_collection.php", DataToSend).then(res => {
            if (res.status == 200) {
                if (res.data == "success") {

                    ToastAndroid.showWithGravityAndOffset(
                        "You Delete Group",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                    // this.componentWillUnmount()
                    // this.props.navigation.goBack()
                    // this.getGroup()

                } else if (res.data == "fully_collection") {
                    ToastAndroid.showWithGravityAndOffset(
                        "You Can't Delete This Group,This is Full Group",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );

                } else {

                    ToastAndroid.showWithGravityAndOffset(
                        "try again,something error",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                }
            }
        })

    }



    render() {
        return (

            <View style={{ backgroundColor: '#fff', flex: 1 }}>
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
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Group List</Text>
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
                {/*///////////////////////////////////////////////////////// Contant /////////////////////////////////////////////////////// * */}
                <ScrollView style={{}}>

                    {this.state.group != "" ? <>


                        {
                            this.state.group.map((item, index) => {
                                return (
                                    <>

                                        {item != null ? (

                                            <>

                                                <TouchableOpacity style={{
                                                    width: '90%',
                                                    marginVertical: 15,
                                                    height: 150,
                                                    padding: 10,
                                                    borderWidth: 1,
                                                    borderColor: '#ddd',
                                                    borderRadius: 40,
                                                    flexDirection: 'row',
                                                    alignSelf: 'center'
                                                }}
                                                    onPress={() => {

                                                        this.setState({
                                                            ChooseModal: true,
                                                            group_id: item.collection_id,
                                                            group_name: item.collection_name,
                                                            NameOfGroup: item.collection_name,
                                                            LimitOfStudents: item.collection_limit,
                                                            TimesOfGroup: item.collection_time_table,
                                                            update_index: index

                                                        })
                                                        //         ActionSheet.show(
                                                        //         {
                                                        //             options: [
                                                        //                 'Buttom 1',
                                                        //                 'Buttom 2',
                                                        //                 'cancel'
                                                        //             ],
                                                        //             cancelButtonIndex: 2,


                                                        //         },
                                                        //         (buttonIndex) => {
                                                        //             if (buttonIndex == 0) {
                                                        //             this.props.navigation.navigate("Students", {
                                                        //                 group_id: item.collection_id,
                                                        //                 group_name: item.collection_name,
                                                        //                 class_name: this.state.class_name,
                                                        //                 class_id: this.state.class_id



                                                        //             });
                                                        //             }
                                                        //         },
                                                        //         (buttonIndex) => {
                                                        //             if (buttonIndex == 1) {
                                                        //             // this.props.navigation.navigate("Students", {
                                                        //             // group_id: item.collection_id,
                                                        //             // group_name: item.collection_name,
                                                        //             // class_name: this.state.class_name,
                                                        //             // class_id: this.state.class_id



                                                        //             // });
                                                        //         }
                                                        //         },

                                                        //     )


                                                    }



                                                    }
                                                >

                                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                                                        <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
                                                            {item.collection_name}


                                                            {/* Group 1 */}
                                                        </Text>
                                                    </View>
                                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                                                        <Image
                                                            source={require('../constants/images/Student.png')}
                                                            resizeMode='contain'
                                                            style={{ flex: 1, width: '100%', height: '100%' }}


                                                        />

                                                    </View>

                                                </TouchableOpacity>

                                            </>


                                        ) : (




                                            <Text
                                                style={{
                                                    flex: 1,
                                                    fontSize: 20,
                                                    fontWeight: "bold",
                                                    color: "#3c2365",
                                                    alignSelf: "center",
                                                    marginTop: "70%"
                                                }}> No Groups Available</Text>




                                        )}

                                    </>
                                )
                            })
                        }

                    </> : <>
                        <View style={{ alignSelf: "center", paddingTop: "70%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{
                                alignItems: "center",
                                alignSelf: "center",
                                color: "#3c2365",
                                fontWeight: "bold",

                                fontSize: 25
                            }}> No Groups Yet</Text>
                        </View>




                    </>}


                </ScrollView>
                {/*////////////////////////////////////// Add Group Modal   ///////////////////////////////////////////////* */}



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
                            Add Group
                        </Text>
                    </View>
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
                            multiline={true}
                            placeholder="Group Name"
                            placeholderTextColor="#000"
                            onChangeText={NameOfGroup => this.setState({ NameOfGroup })}
                            value={this.state.NameOfGroup}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyGroupMessage}</Text>



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
                            placeholder="Limit of Student allowed"
                            keyboardType={'number-pad'}
                            placeholderTextColor="#000"
                            onChangeText={LimitOfStudents => this.setState({ LimitOfStudents })}
                            value={this.state.LimitOfStudents}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyLimitOfStudents}</Text>

                    <View
                        style={styles.TextInputStyle}>

                        <TextInput
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                // height: 100,
                                width: '90%',
                                // paddingLeft: 5,
                            }}
                            color={"#000"}
                            multiline={true}
                            placeholder="Group Dates"
                            keyboardType={'default'}
                            placeholderTextColor="#000"
                            onChangeText={TimesOfGroup => this.setState({ TimesOfGroup })}
                            value={this.state.TimesOfGroup}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyTimesOfGroup}</Text>



                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.add_group();

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
                                    emptyGroupMessage: "",
                                    emptyLimitOfStudents: "",
                                    emptyTimesOfGroup: "",
                                    NameOfGroup: "",
                                    LimitOfStudents: "",
                                    TimesOfGroup: ""


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
                                Cancel
                            </Text>

                        </TouchableOpacity>
                    </View>





                </Modal>

                {/*////////////////////////////////////// Update Group Modal   ///////////////////////////////////////////////* */}



                <Modal
                    visible={this.state.updateModalVisible}
                    animationType="slide"
                    onRequestClose={() => {
                        this.setState({ updateModalVisible: false });
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
                            Update Group
                        </Text>
                    </View>
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
                            multiline={true}
                            placeholder="Group Name"
                            placeholderTextColor="#000"
                            onChangeText={NameOfGroup => this.setState({ NameOfGroup })}
                            value={this.state.NameOfGroup}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyGroupMessage}</Text>



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
                            placeholder="Limit of Student allowed"
                            keyboardType={'number-pad'}
                            placeholderTextColor="#000"
                            onChangeText={LimitOfStudents => this.setState({ LimitOfStudents })}
                            value={this.state.LimitOfStudents}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyLimitOfStudents}</Text>

                    <View
                        style={styles.TextInputStyle}>

                        <TextInput
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                // height: 100,
                                width: '90%',
                                // paddingLeft: 5,
                            }}
                            color={"#000"}
                            multiline={true}
                            placeholder="Group Dates"
                            keyboardType={'default'}
                            placeholderTextColor="#000"
                            onChangeText={TimesOfGroup => this.setState({ TimesOfGroup })}
                            value={this.state.TimesOfGroup}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyTimesOfGroup}</Text>



                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.update_group();

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
                                Update
                            </Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    updateModalVisible: false,
                                    emptyGroupMessage: "",
                                    emptyLimitOfStudents: "",
                                    emptyTimesOfGroup: "",
                                    NameOfGroup: "",
                                    LimitOfStudents: "",
                                    TimesOfGroup: ""


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
                                Cancel
                            </Text>

                        </TouchableOpacity>
                    </View>





                </Modal>
                {/*////////////////////////////////////////// Dialog for choosing ///////////////////////////////////////////////* */}


                <Modal

                    visible={this.state.ChooseModal}

                    onRequestClose={() => {
                        this.setState({
                            ChooseModal: false
                        });
                    }}
                    animationType='slide'
                    transparent={true}

                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ ChooseModal: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                        <View style={styles.ModalViewStyle}>
                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false,

                                            })
                                            this.props.navigation.navigate("Classvisit", {
                                                collection_id: this.state.group_id,
                                                class_id: this.state.class_id,
                                            })



                                        }
                                    }

                                >
                                    <View style={{ paddingRight: "10%" }}>
                                        <Image source={require('../constants/images/clipboard.png')}
                                            style={{
                                                height: 40,
                                                width: 40,
                                                paddingLeft: "10%"
                                            }}

                                        />
                                    </View>
                                    <Text style={{

                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Class Visit</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false,

                                            })
                                            this.props.navigation.navigate("AllActivetys", {
                                                collection_id: this.state.group_id,
                                                class_id: this.state.class_id,
                                            })



                                        }
                                    }

                                >
                                    <View style={{ paddingRight: "10%" }}>
                                        <Image source={require('../constants/images/clipboard.png')}
                                            style={{
                                                height: 40,
                                                width: 40,
                                                paddingLeft: "10%"
                                            }}

                                        />
                                    </View>
                                    <Text style={{

                                        // textAlign: "center",
                                        marginLeft: 20,
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Activity</Text>
                                </TouchableOpacity>

                            </View>



















                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false,
                                                updateModalVisible: true
                                            })


                                        }
                                    }

                                >
                                    <View style={{ paddingRight: "5%" }}><Image source={require('../constants/images/clipboard.png')}
                                        style={{
                                            height: 40,
                                            width: 40,
                                            paddingLeft: "10%"
                                        }}

                                    /></View>
                                    <Text style={{

                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Update Group</Text>
                                </TouchableOpacity>

                            </View>




                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false,
                                                // updateModalVisible: true
                                            })
                                            this.props.navigation.navigate("Classes_update", {
                                                collection_id: this.state.group_id
                                            })
                                            // alert(this.state.group_id)


                                        }
                                    }

                                >
                                    <View style={{ paddingRight: "5%" }}>
                                        <Image source={require('../constants/images/clipboard.png')}
                                            style={{
                                                height: 40,
                                                width: 40,
                                                paddingLeft: "10%"
                                            }}

                                        />
                                    </View>
                                    <Text style={{

                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Update level</Text>
                                </TouchableOpacity>

                            </View>



























                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false,
                                                deleteModalVisible: true
                                            })
                                            // this.props.navigation.navigate("Classes_update", {
                                            //     collection_id: this.state.group_id
                                            // })
                                            // alert(this.state.group_id)


                                        }
                                    }

                                >
                                    <View style={{ paddingRight: "5%" }}>
                                        <Image source={require('../constants/images/clipboard.png')}
                                            style={{
                                                height: 40,
                                                width: 40,
                                                paddingLeft: "10%"
                                            }}

                                        /></View>
                                    <Text style={{

                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Delete Group</Text>
                                </TouchableOpacity>

                            </View>



















                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}

                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false
                                            })
                                            this.props.navigation.navigate("Students", {
                                                group_id: this.state.group_id,
                                                group_name: this.state.group_name,
                                                class_name: this.state.class_name,
                                                class_id: this.state.class_id,


                                            }
                                            )
                                        }
                                    }

                                >


                                    <View style={{ paddingRight: "5%" }}><Image source={require('../constants/images/Allstudent.png')}
                                        style={{
                                            height: 40,
                                            width: 40,
                                            paddingLeft: "10%"
                                        }}

                                    /></View>
                                    <Text style={{

                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Students Profile </Text>
                                </TouchableOpacity>
                            </View>




                            <View style={{ height: 70, justifyContent: "center" }}>

                                <TouchableOpacity style={{
                                    height: 50,
                                    width: "80%",
                                    backgroundColor: "#fff",
                                    // elevation :20,
                                    elevation: 5,
                                    // marginRight: "20%",
                                    alignSelf: "center",
                                    borderRadius: 50,
                                    // justifyContent: "center",
                                    paddingLeft: "5%",
                                    flexDirection: "row",
                                    alignItems: "center"
                                }}
                                    onPress={
                                        () => {

                                            this.setState({
                                                ChooseModal: false
                                            })
                                            this.props.navigation.navigate("Group_Monthly_Report", {
                                                collection_id: this.state.group_id
                                            }
                                            )
                                        }
                                    }

                                >
                                    <View style={{ paddingRight: "5%" }}><Image source={require('../constants/images/clipboard.png')}
                                        style={{
                                            height: 40,
                                            width: 40,
                                            paddingLeft: "10%"
                                        }}

                                    /></View>
                                    <Text style={{

                                        textAlign: "center",
                                        fontSize: 20,
                                        fontWeight: "800",
                                        color: "#3c2365"


                                    }}>Group Reports</Text>
                                </TouchableOpacity>

                            </View>


                        </View>



                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ ChooseModal: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                    </View>
                </Modal>

                {/*///////////////////////////////deletemodal///////////////////////////////////////////////////////////*/}
                <Modal
                    visible={this.state.deleteModalVisible}
                    onRequestClose={
                        () => {
                            this.setState({ deleteModalVisible: false })
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
                                this.setState({ deleteModalVisible: false })
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
                                    <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15 }}>Are you sure you want to delete this Group?</Text>

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
                                            this.Delete_Group()
                                            this.setState({ deleteModalVisible: false })
                                        }}
                                        style={{
                                            height: 50,
                                            width: "40%",
                                            backgroundColor: '#3c2365',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            borderRadius: 25
                                        }}>
                                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ deleteModalVisible: false })
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
                                this.setState({ deleteModalVisible: false })
                            }} >
                            <View style={{
                                width: "100%",
                            }} />
                        </TouchableWithoutFeedback>
                    </View>



                </Modal>

























            </View>





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
    ModalViewStyle: {
        backgroundColor: "#fff",
        // height: "50%",
        width: "80%",
        justifyContent: "space-around",
        alignSelf: "center",
        elevation: 10,
        borderRadius: 20,


    },
}
)