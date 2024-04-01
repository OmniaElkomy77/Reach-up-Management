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
    Animated,



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
import DateTimePicker from '@react-native-community/datetimepicker';
const { width, height } = Dimensions.get('window');
export default class AttendenceHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [

            ],
            data: [


            ],
            class_id: this.props.navigation.getParam('class_id'),
            searchQuery: '',
            modalVisible: false,
            NameOfStudent: "",
            parent_phone: "",
            studentNaId: "",
            StudentMessage: "",
            parent_phone_Message: "",
            Student_naId_Message: "",
            DeleteModalVisible: false,
            group_id: this.props.navigation.getParam('group_id'),
            class_name: this.props.navigation.getParam('class_name'),
            group_name: this.props.navigation.getParam('group_name'),
            delIndex: "",
            student_naId: "",
            Student_naId_Message: "",
            idCount: 0,
            count: 0,
            disabled: false,
            showDatePicker: false


        }
    }

    componentDidMount() {

        this.get_Students(this.getCurrentDate())



    }

    getCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        let d = year + '-' + month + '-' + date;

        this.setState({ date: d })
        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return d;//format: dd-mm-yyyy;
    }

    get_Students = (date) => {

        this.setState({ disable: true });

        // alert(JSON.stringify(group_name))
        // this.setState({
        //     // group_id: group_id,
        //     group_name: group_name,
        //     class_name: class_name,
        //     class_id: class_id

        // });


        let data_to_send = {
            date: date

        };
        // alert(JSON.stringify(data_to_send))
        axios
            .post('https://camp-coding.org/reachUpAcademy/admin/' + 'select_daily_attence.php', data_to_send)
            .then((res) => {
                if (res.status == 200) {
                    // alert(JSON.stringify(res.data))

                    if (res.data != 'error' && res.data != 'not_found') {
                        // let arr = []
                        this.setState({
                            students: res.data,
                            data: res.data
                        });

                    } else {
                        this.setState({
                            students: [],
                            data: []
                        });
                        // Alert.alert("Errorr");
                    }
                }
                this.setState({ disable: false });
            });

        // alert("loading")
    };



    renderStudents = ({ item, index }) => {
        return (
            <>
                {/*///////////////////////////////////////////////////////// Students /////////////////////////////////////////////////////// * */}



                <TouchableOpacity
                    style={styles.StudentView}
                    disabled={true}
                    onPress={
                        () => {
                        }
                    }

                >
                    <View
                        style={{
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginBottom: 10,
                        }}>
                        {/* <TouchableOpacity style=
                                {{
                                    height: 25,
                                    width: 25,
                                    backgroundColor: "#f00",
                                    borderRadius: 20,
                                    alignContent: "center",
                                    justifyContent: "center"
                                }}>
                                <FontAwesome5
                                    name={"times-circle"}
                                    size={26}
                                    color={"#fff"}
                                    style={{ alignSelf: "center" }}


                                    onPress={
                                        () => {
                                            this.setState({ DeleteModalVisible: true, delIndex: index })

                                        }
                                    }

                                />
                            </TouchableOpacity> */}
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                marginLeft: 20,
                                marginRight: 20,
                                borderRadius: 5,
                            }}
                            source={require('../constants/images/Teacher_logo.png')}
                        />
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                    fontSize: 18,
                                    fontWeight: '600',
                                    marginTop: 5,
                                }}>
                                {item.teacher_name}
                                {/* روان محمد الصاوي */}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 17,
                                    // fontWeight: '300',
                                    marginTop: 5,
                                }}>
                                from:   {item.day_start_time}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 17,
                                    // fontWeight: '300',
                                    marginTop: 5,
                                }}>
                                to:        {item.day_end_time}
                            </Text>

                        </View>
                    </View>


                </TouchableOpacity>




            </>
        )


    }
    render() {

        const header = (
            <TouchableOpacity
                onPress={() => {
                    this.setState({ showDatePicker: true })
                }}
                style={{
                    width: "90%",
                    height: 50,
                    backgroundColor: "#ddd",
                    alignSelf: "center",
                    marginTop: 10,
                    borderRadius: 10,
                    flexDirection: 'row-reverse',
                    alignItems: "center",
                    paddingHorizontal: 15
                }}
            >
                <FontAwesome5
                    name={"calendar-alt"}
                    size={26}
                    color={"#222"}
                    style={{ marginLeft: 10 }}

                />

                <Text
                    style={{
                        fontSize: 18,
                        color: "#222"
                    }}>{this.state.date}</Text>
            </TouchableOpacity>
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
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Student List</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        onPress={
                            () => {
                                this.setState({ modalVisible: true })
                            }
                        }

                    >



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

                    {this.state.showDatePicker ? (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            mode={"date"}
                            // is24Hour={true}
                            display="default"
                            onChange={(event, selectedDate)=>{

                                let d = selectedDate.getFullYear()+"-"+(selectedDate.getMonth()+1)+"-"+selectedDate.getDate()
                                this.setState({date: d, showDatePicker: false})
                                this.get_Students(d)
                                // alert()
                            }}
                        />
                    ) : null}
                    {/* {this.state.data.length != 0  ?
                     <>
                        {this.state.disable == false ?
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                renderItem={this.renderStudents}


                            />

                            :
                            <NativeBaseProvider>
                                <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 15 }} />
                            </NativeBaseProvider>
                        }
                    </> : <>
                    
                    <View style={{alignSelf:"center",paddingTop:"50%",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{
                            alignItems:"center",
                            alignSelf:"center",
                            color:"#3c2365",
                            fontWeight:"bold",

                            fontSize:25
                        }}>لا يوجد طلاب بعد</Text>
                    </View>
                    
                    </>} */}

                    {this.state.disable ?
                        <View
                            style={{
                                alignSelf: "center", paddingTop: "50%",
                                justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <NativeBaseProvider>
                                <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 15 }} />
                            </NativeBaseProvider>
                        </View>

                        :
                        this.state.data.length == 0 ? (
                            <View style={{
                                alignSelf: "center", paddingTop: "50%",
                                justifyContent: "center", alignItems: "center"
                            }}>
                                <Text style={{
                                    alignItems: "center",
                                    alignSelf: "center",
                                    color: "#3c2365",
                                    fontWeight: "bold",

                                    fontSize: 25
                                }}>No Attendence Yet</Text>
                            </View>
                        ) : (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                renderItem={this.renderStudents}


                            />
                        )


                    }

                </Headroom>


                {/*/////////////////////////////////////////////  Add Student ////////////////////////////////////////////////////////////// */}



                <Modal
                    visible={
                        this.state.modalVisible

                    }
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
                            Add Student
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
                            placeholder="Student Name"
                            placeholderTextColor="#000"
                            onChangeText={NameOfStudent => this.setState({ NameOfStudent })}
                            value={this.state.NameOfStudent}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.StudentMessage}</Text>
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
                            placeholder="Parent Phone Number"
                            placeholderTextColor="#000"
                            color={"#000"}
                            onChangeText={parent_phone => this.setState({ parent_phone })}
                            value={this.state.parent_phone}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.parent_phone_Message}</Text>
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
                            placeholder="Student National ID"
                            placeholderTextColor="#000"

                            onChangeText={studentNaId => this.setState({ studentNaId })}
                            value={this.state.studentNaId}
                        />

                    </View>

                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.Student_naId_Message}</Text>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.add_Student();

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
                                    NameOfStudent: "",
                                    parent_phone: "",
                                    Student_naId_Message: "",
                                    StudentMessage: "",
                                    parent_phone_Message: "",
                                    GroupMessage: ""
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


                <Modal

                    visible={this.state.DeleteModalVisible}

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
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "#000",
                                        fontWeight: 'bold',
                                        paddingBottom: "5%"

                                    }}>هل  تريد حذف الطالب؟</Text>
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
                                            let index = this.state.delIndex
                                            this.deleteStudent(index);
                                            this.setState({ DeleteModalVisible: false })
                                        }
                                    }
                                >
                                    <Text style={styles.TextStyle2}> تأكيد</Text>
                                </TouchableOpacity>
                                <TouchableOpacity

                                    onPress={
                                        () => {

                                            this.setState({ DeleteModalVisible: false })
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
                                    <Text style={styles.TextStyle2}>الغاء</Text>
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

    }
    ,
    ConnectionView: {
        width: '100%',
        height: 20,
        position: 'absolute',
        zIndex: 222,
        // backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },


})