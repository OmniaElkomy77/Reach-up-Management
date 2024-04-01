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
    // ActivityIndicator,
    ToastAndroid


} from 'react-native';
import {

    // Button,
    NativeBaseProvider,
    Spinner,

} from 'native-base';
// import { RadioButton } from 'react-native-paper';
import { SearchBar, Avatar, Badge, withBadge } from 'react-native-elements';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';
// import Headroom from 'react-native-headroom'
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import axios from 'axios'

const { width, height } = Dimensions.get('window');
export default class Monthly_student_absence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [

            ],
            data: [


            ],
            // class_id: this.props.navigation.getParam('class_id'),
            searchQuery: '',
            modalVisible: false,
            NameOfStudent: "",
            parent_phone: "",
            studentNaId: "",
            StudentMessage: "",
            parent_phone_Message: "",
            Student_naId_Message: "",
            DeleteModalVisible: false,
            // group_id: this.props.navigation.getParam('group_id'),
            // class_name:  this.props.navigation.getParam('class_name'),
            // group_name: this.props.navigation.getParam('group_name'),
            delIndex: "",
            student_naId: "",
            Student_naId_Message: "",
            idCount: 0,
            count: 0,
            disabled: false,
            disable:false


        }
    }

    componentDidMount() {

        this.get_Students()



    }
    get_Students = () => {
        this.setState({ disable: true });


        let data_to_send = {
            collection_id: this.state.group_id

        };
        // alert(JSON.stringify(data_to_send))
        axios
            .post('https://camp-coding.org/reachUpAcademy/admin/' + 'select_all_students.php', data_to_send)
            .then((res) => {
                if (res.status == 200) {
                    // alert(JSON.stringify(res.data))

                    if (res.data != 'error') {
                        // let arr = []
                        this.setState({
                            students: res.data,
                            data: res.data
                        });

                    } else {
                        // Alert.alert("Errorr");
                    }
                }
                this.setState({ disable: false });
            });
    };

 
      
       
        
    

    renderStudents = ({ item, index }) => {
        return (
            <>
                {/*///////////////////////////////////////////////////////// Students /////////////////////////////////////////////////////// * */}



                <TouchableOpacity
                    style={styles.StudentView}
                    onPress={

                        () => {
                            // alert()
                            this.props.navigation.navigate('AllStudent_profile', {

                                // students: item.data,
                                class_name: item.collection_data.collection_name,
                                Group_Name: item.generation.generation_name,
                                student_name: item.student_name,
                                student_id: item.student_id,
                                student_national_id: item.student_national_id,
                                parent_phone: item.parent_phone,



                            })
                        }
                    }

                >
                    <View
                        style={{
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginBottom: 10,
                        }}>
                       
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                marginLeft: 20,
                                marginRight: 20,
                                borderRadius: 5,
                            }}
                            source={require('../constants/images/students_Vector.png')}
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
                                {item.student_name}
                                {/* روان محمد الصاوي */}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                    marginTop: 5,
                                }}>
                                {item.generation.generation_name}
                                {/* Kg1 */}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: '300',
                                    marginTop: 5,
                                }}>
                                {item.collection_data.collection_name}
                                {/* Group2 */}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: '300',
                                    marginTop: 5,
                                    color:"#f00"
                                }}>
                               Total Absence : 3
                             
                            </Text>

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
                placeholder="Student Name"
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

                   
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Students List</Text>
                    </View>
        

                </View>



               
                

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
                                }}>No Student Yet</Text>
                            </View>
                        ) : (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.state.data}
                                renderItem={this.renderStudents}


                            />
                        )


                    }

               


               



        


           



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
        height: 150,
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