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
    TouchableWithoutFeedback,
    ScrollView,
    TextInput,
    Alert,
    ToastAndroid


} from 'react-native';
import {

    Button,
    NativeBaseProvider,
    Spinner,

} from 'native-base';
import { RadioButton } from 'react-native-paper';
import { SearchBar, Avatar, Badge, withBadge } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';
import Headroom from 'react-native-headroom'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import axios from 'axios'

const { width, height } = Dimensions.get('window');
export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Teachers: [],
            data: [],
            searchQuery: '',
            disabled: false,
            modalVisible: false,
            DeleteModalVisible: false,
            pay_type: "",
            NameOfTeacher: "",
            TeacherMessage: "",
            TeacherPass: "",
            TeacherPassMessage: "",
            PayTypeMessage: "",
            count: 0,
            status: "",
            teacher_id: "",
            DiasbleModalVisible: false,
            modalVisible1: false,
            Teacher_type: "",
            Teacher_type_Message: ""

        }
    }

    componentDidMount() {

        this.get_Teachers()


    }

    add_Teacher() {
        let NameOfTeacher = this.state.NameOfTeacher
        let TeacherPass = this.state.TeacherPass
        let pay_type = this.state.pay_type
        let PayToSend = ""
        let Teacher_type = this.state.Teacher_type
        let Teach_typeTosend = ""

        if (pay_type == 1) {
            PayToSend = 'hours'

        } else if (pay_type == 0) {
            PayToSend = 'month'
        }


        if (Teacher_type == 1) {
            Teach_typeTosend = 'female'

        } else if (Teacher_type == 0) {
            Teach_typeTosend = 'male'
        }





        let zero = 0


        if ((TeacherPass && NameOfTeacher && pay_type != "" && Teacher_type != "")) {



            let DataToSend = {

                teacher_name: NameOfTeacher,
                teacher_pass: TeacherPass,
                pay_type: PayToSend,
                gender: Teach_typeTosend
            }

            // alert(JSON.stringify(DataToSend))

            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'add_teacher.php', DataToSend).then((res) => {
                if (res.status == 200) {
                    if (res.data * 0 == 0) {
                        // alert(res.data)
                        ToastAndroid.showWithGravityAndOffset(
                            "You Added teacher",
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                            25,
                            80
                        );
                        // Alert.alert("Teacher Added Successfully");
                        this.get_Teachers()
                        this.setState({ Teacher_type: "" })
                    } else {
                        // Alert("تمت الاضافه بنجاح")
                    }
                } else {
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

            this.setState({
                modalVisible: false,
                NameOfTeacher: "",
                TeacherPass: "",
                pay_type: "",
                TeacherMessage: "",
                TeacherPassMessage: "",
                PayTypeMessage: "",
                Teacher_type_Message: ""
            })


        }

        else if (NameOfTeacher == "" || TeacherPass == "" || pay_type == "" || Teacher_type == "") {
            if (NameOfTeacher == "") {
                this.setState({ TeacherMessage: "Please Enter Teacher Name" })
            } else {
                this.setState({ TeacherMessage: "" })
            }

            if (TeacherPass == "") {
                this.setState({ TeacherPassMessage: "Please Enter Teacher Password" })
            } else {
                this.setState({ TeacherPassMessage: "" })
            }
            if (pay_type == "") {
                this.setState({ PayTypeMessage: "Please Choose Payment Type" })
            } else {
                this.setState({ PayTypeMessage: "" })

            } if (Teacher_type == "") {
                this.setState({ Teacher_type_Message: "Please Choose Teacher gender" })
            } else {
                this.setState({ Teacher_type_Message: "" })
            }

        }
    }

    ChangeStatus = (teacher_id, status) => {

        let DataToSend = {
            teacher_id: teacher_id,

            status: status == 'able' ? "disable" : "able"
        }
        axios
            .post('https://camp-coding.org/reachUpAcademy/admin/' + 'disable_teacher.php', DataToSend)
            .then((res) => {
                if (res.data == 'success') {

                    this.get_Teachers()

                    this.setState({
                        DiasbleModalVisible: false
                    })
                } else {
                    // Alert.alert('Error');
                    ToastAndroid.showWithGravityAndOffset(
                        "error",
                         ToastAndroid.SHORT,
                         ToastAndroid.BOTTOM,
                         25,
                         80,
                       );
                }

            }
            )


    }






    get_Teachers = () => {

        this.setState({ disabled: true });
        axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_teachers.php').then((res) => {
            // alert(JSON.stringify(res.data))

            if (res.status == 200) {
                if (res.data != 'error') {

                    this.setState({
                        Teachers: res.data,
                        data: res.data
                    })
                    // alert(JSON.stringify(this.state.data))
                    this.setState({ disabled: false });
                    //  console.log(JSON.stringify(this.state.Teachers))
                }
            }
            else {
                // Alert.alert("Error")
                ToastAndroid.showWithGravityAndOffset(
                    "error",
                     ToastAndroid.SHORT,
                     ToastAndroid.BOTTOM,
                     25,
                     80,
                   );
            }

        })
    };





    Delete_Teacher() {
        let DataToSend = {
            teacher_id: this.state.teacher_id
        }
        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "delete_instractor.php", DataToSend).then(res => {
            // alert(res.status)
            if (res.status == 200) {
                // alert(res.data)
                if (res.data == "success") {
                    this.get_Teachers()
                    ToastAndroid.showWithGravityAndOffset(
                        "You Deleted Teacher",
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
                    // this.setState({ modalVisible1: false })
                }
                // ToastAndroid.showWithGravityAndOffset(
                //     "try again,something error",
                //     ToastAndroid.SHORT,
                //     ToastAndroid.BOTTOM,
                //     25,
                //     80
                // );

            }


        })

        // this.setState({modalVisible1:false})
    }










    onChangeSearch = searchQuery => {
        // let searchQuery = this.state.searchQuery;

        let list = this.state.Teachers;
        let data = [];
        for (let i = 0; i < list.length; i++) {

            if (
                list[i].teacher_name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                data.push(list[i]);
            }
        }

        this.setState({ data: data });
    };

    renderTeachers = ({ item, index }) => {
        return (
            <>
                {/*///////////////////////////////////////////////////////// Teachers /////////////////////////////////////////////////////// * */}



                <TouchableOpacity
                    style={styles.StudentView}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Teacher_Profile', {

                                // students: item.data,
                                teacher_name: item.teacher_name,
                                teacher_id: item.teacher_id,
                                teacher_pass: item.teacher_pass,
                                pay_type: item.pay_type,
                                Teacher_classes: item,
                                gender: item.gender



                            })


                        }
                    }

                >

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ modalVisible1: true,
                            teacher_id:item.teacher_id })
                            // alert(this.state.teacher_id)
                        }}
                        style={{
                            height: 30, width: 30, backgroundColor: "#f00", borderRadius: 25, alignItems: 'center',
                            justifyContent: "center"
                        }}>
                        <FontAwesome5 name="times" style={{ color: "#fff", fontSize: 18 }} />
                    </TouchableOpacity>

                    <View
                        style={{
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginBottom: 10,
                            // backgroundColor: "#f50",
                        }}>
                        <TouchableOpacity style=
                            {{
                                height: 40,
                                width: 40,
                                // backgroundColor: "#f00",
                                borderRadius: 50,
                                alignContent: "center",
                                justifyContent: "center"
                            }}

                            onPress={
                                () => {

                                    this.setState({
                                        DiasbleModalVisible: true,
                                        teacher_id: item.teacher_id,
                                        status: item.status,
                                        // modalVisible1:true
                                    })
                              
                                }
                            }

                        >

                            {item.status == 'able' ? (
                                <>
                                    <Image style={{
                                        resizeMode: "contain",
                                        height: "80%",
                                        width: "80%",
                                        alignSelf: "center"
                                    }}
                                        source={require('../constants/images/closed.png')}


                                    />
                                </>
                            ) :
                                (
                                    <>
                                        <Image
                                            style={{
                                                resizeMode: "contain",
                                                height: "80%",
                                                width: "80%",
                                                alignSelf: "center"
                                            }}
                                            source={require('../constants/images/open.png')}
                                        />
                                    </>
                                )}
                        </TouchableOpacity>
                        {item.gender == "male" ?
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginLeft: 10,
                                    marginRight: 20,
                                    borderRadius: 5,
                                }}
                                source={require('../constants/images/Teacher_logo.png')}
                            />

                            :
                            <Image
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginLeft: 10,
                                    marginRight: 20,
                                    borderRadius: 5,
                                }}
                                source={require('../constants/images/teacher_girl.png')}
                            />
                        }

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                    fontSize: 20,
                                    fontWeight: '600',
                                    marginTop: 5,
                                }}>
                                {item.teacher_name}
                                {/* روان محمد الصاوي */}
                            </Text>


                            <View
                                style={{
                                    // fontSize: 17,
                                    // fontWeight: '300',
                                    // marginTop: 5,
                                }}>
                                {item.pay_type == 'hours' ? (
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

                        </View>
                    </View>


                </TouchableOpacity>




            </>
        )


    }
    render() {

        const header = (
            <SearchBar
                lightTheme
                placeholder="Teacher Name"
                onChangeText={query => {
                    this.setState({ searchQuery: query });
                    this.onChangeSearch(query);
                }}
                value={this.state.searchQuery}
                style={{ flex: 1 }}
            />
        )



        return (
            <>

                <StatusBar backgroundColor={'#3c2365'}></StatusBar>
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
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Teachers List</Text>
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



                <Headroom
                    style={[styles.container,{width:"100%"}]}
                    // style={{ width: '100%' }}
                    headerComponent={header}
                    ScrollableComponent={ScrollView}
                    headerHeight={80}
                    scrollEventThrottle={80}

                >
                    {this.state.disabled == false ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={this.renderTeachers}


                        />

                        :
                        <NativeBaseProvider>
                            <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 15 }} />
                        </NativeBaseProvider>
                    }


                </Headroom>


                {/*/////////////////////////////////////////////  Add Teacher   ////////////////////////////////////////////////////////////// */}



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
                            Add Teacher
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
                            placeholder="Teacher Name"
                            placeholderTextColor="#000"
                            onChangeText={NameOfTeacher => this.setState({ NameOfTeacher })}
                            value={this.state.NameOfTeacher}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.TeacherMessage}</Text>
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
                            placeholder="Teacher Password"
                            placeholderTextColor="#000"

                            onChangeText={TeacherPass => this.setState({ TeacherPass })}
                            value={this.state.TeacherPass}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.TeacherPassMessage}</Text>

                    {/*//////////////////////////////////////////////////////////////////*/}

                    <View style={{ paddingRight: "7%" }}><Text style={{ fontSize: 18, color: "#000", fontWeight: 'bold' }}>Teacher gender</Text></View>
                    <RadioButton.Group
                        onValueChange={(value) => {
                            this.setState({ Teacher_type: value });
                        }}

                        value={this.state.Teacher_type}>
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
                                    Male
                                </Text>
                                <RadioButton value="0" />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                }}>


                                <Text style={{ fontSize: 18 }}>Female</Text>
                                <RadioButton value="1" />
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.Teacher_type_Message}</Text>








                    {/*//////////////////////////////////////////////*/}









                    <View style={{ paddingRight: "7%" }}><Text style={{ fontSize: 18, color: "#000", fontWeight: 'bold' }}>Teacher Payment Type</Text></View>
                    <RadioButton.Group
                        onValueChange={(value) => {
                            this.setState({ pay_type: value });
                        }}

                        value={this.state.pay_type}>
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
                                    Monthly
                                </Text>
                                <RadioButton value="0" />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                }}>


                                <Text style={{ fontSize: 18 }}>Hours</Text>
                                <RadioButton value="1" />
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.PayTypeMessage}</Text>

                    <View style={{
                        flexDirection: "row", alignItems: "center", justifyContent: "space-around",
                        width: "90%",
                        // backgroundColor: "#454",
                        alignSelf: "center",
                        marginTop: 10
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.add_Teacher();

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
                                    TeacherMessage: "",
                                    TeacherPass: "",
                                    TeacherPassMessage: "",
                                    NameOfTeacher: "",
                                    pay_type: "",
                                    PayTypeMessage: ""
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

                {/*////////////////////////////////////////////////////// Disable & Enable ///////////////////////////////////* */}
                <Modal

                    visible={this.state.DiasbleModalVisible}

                    onRequestClose={() => {
                        this.setState({
                            DeleteModalVisible: false
                        });
                    }}

                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ ModalVisible: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                        <View style={styles.ModalViewStyle}>

                            <View style={{ height: "50%" }} >
                                {this.state.status == 'able' ? (
                                    <>
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                color: "#000",
                                                fontWeight: 'bold',
                                                paddingBottom: "5%"

                                            }}>Disable Teacher </Text>
                                    </>
                                ) : (
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: "#000",
                                            fontWeight: 'bold',
                                            paddingBottom: "5%"

                                        }}>Enable Teacher</Text>
                                )}

                            </View>


                            <View style={{ flexDirection: "row", height: "50%", padding: "2%", justifyContent: "center" }}>

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

                                            this.ChangeStatus(this.state.teacher_id, this.state.status)
                                        }
                                    }
                                >
                                    <Text style={styles.TextStyle2}> Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity

                                    onPress={
                                        () => {

                                            this.setState({ DiasbleModalVisible: false })
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
                                    <Text style={styles.TextStyle2}>Cancel</Text>
                                </TouchableOpacity>
                            </View>


                        </View>



                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ ModalVisible: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                    </View>



                </Modal>

                {/*/////////////////////////////////////////////////////////////modaldelet//////////////////////////////////////////*/}
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
                                    <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15 }}>Are you sure you want to delete this teacher?</Text>

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
                                            this.Delete_Teacher()
                                            this.setState({ modalVisible1: false })
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
    },
    StudentView: {

        marginTop: 20,
        width: width * 0.9,
        alignSelf: "center",
        backgroundColor: 'white',
        borderTopEndRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 10,

    },
    header: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
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
    AlertView: {
        height: height * 0.3,
        width: "80%"
    },
    ModalViewStyle: {
        backgroundColor: "#fff",
        height: "30%",
        width: "80%",
        alignSelf: "center",
        elevation: 10,
        borderRadius: 20,
        padding: "5%",
        paddingLeft: "10%"

    },
    TextStyle2: {
        alignSelf: "center",
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"

    },
    imgStyle: {
        height: 50,
        width: 50,
        marginTop: "5%"
    }


})