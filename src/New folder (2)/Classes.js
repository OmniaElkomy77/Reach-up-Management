import axios from "axios";
import React from "react"
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Modal,
    FlatList,
    TextInput
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { Spinner, NativeBaseProvider } from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-navigation";

const { width, height } = Dimensions.get('window');
export default class Classes extends React.Component {
    constructor() {
        super()
        this.state = {
            classes: [
                // {
                //     class_name: "الصف الاول ",
                //     class_group: [
                //         { group_name: "مجموعه الاولي " },
                //         { group_name: "مجموعه الثانيه" },
                //         { group_name: "المحموعه الثالثه" },
                //     ]
                // },
                // {
                //     class_name: "الصف الثاني",
                //     class_group: [
                //         { group_name: "مجموعه الاولي " },
                //         { group_name: "مجموعه الثانيه" },

                //     ]
                // },
            ],
            disabled: false,
            modalVisible:false,
            NameOfClass:"",
            emptyClassMessage:""
               
        }
    }
    componentDidMount() {
        this.getClassData()
    }

    getClassData() {
        this.setState({ disabled: true });
        axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_generations_and_collections.php').then((res) => {
            // alert(JSON.stringify(res.data))
            this.setState({ disabled: false });
            this.setState({ classes: res.data })

        })
    }

    add_Class(){

        let NameOfClass =this.state.NameOfClass

        if(NameOfClass !=""){


            let obj ={
                generation_name:NameOfClass.trim()
            }
            this.state.classes.push(obj)
            let DataToSend ={
                generation_name :NameOfClass.trim()
            }

            { /*////////////////////////////////////////// TO SERVER ////////////////////////////* */ }
            axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'insert_generation.php', DataToSend).then((res) => {
                if (res.status == 200) {
                    if (res.data == 'success') {
                        // alert(res.data)
                        // Alert.alert("تم اضافه الصف بنجاح");
                        ToastAndroid.showWithGravityAndOffset(
                            "Class Added Successfully",
                             ToastAndroid.SHORT,
                             ToastAndroid.BOTTOM,
                             25,
                             80,
                           );
                    } else {
                        // Alert("تمت الاضافه بنجاح")
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
                    // Alert.alert('أدمن', 'خطأ');
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
            this.setState({modalVisible:false})

        }
        else{
             this.setState({emptyClassMessage:"you must enter class name"})
        }
    }

    _renderClasse = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity

                    onPress={() => {
                        this.props.navigation.navigate("Groups", {
                            group: item.collections,
                            class_name: item.generation_name,
                            class_id: item.generation_id

                        })
                    }}

                    style={{
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginVertical: 15,
                        height: 100,
                        borderTopLeftRadius: 50,
                        borderBottomRightRadius: 50
                    }}
                >
                    <LinearGradient
                        colors={['#3c2365', '#9b8db1',]}
                        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                        style={{
                            width: '100%',
                            height: "100%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopLeftRadius: 50,
                            borderBottomRightRadius: 50
                        }}
                    >

                        <Text style={{ color: "#fff", fontSize: 18 }}>{item.generation_name}</Text>

                    </LinearGradient>
                </TouchableOpacity>
            </>
        )
    }
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={'#3c2365'}
                // translucent={true} barStyle='light-content'
                ></StatusBar>
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
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >قائمه الصفوف</Text>
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



                <ScrollView style={{ marginBottom: 50, marginTop: 20 }}>
                    {this.state.disabled == false ? (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.classes}
                            renderItem={this._renderClasse}
                            keyExtractor={(i, k) => k.toString()}

                        />
                    )
                        :

                        (
                            <NativeBaseProvider>
                                <Spinner color={"#f8bb08"} size={30} style={{ marginTop: 15 }} />
                            </NativeBaseProvider>
                        )
                    }




                </ScrollView>

                {/*////////////////////////////////////// Add Class Modal   ///////////////////////////////////////////////* */}



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
                            اضافه صف
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
                            placeholder="اسم الصف"
                            placeholderTextColor="#000"
                            onChangeText={NameOfClass => this.setState({ NameOfClass})}
                            value={this.state.NameOfClass}
                        />

                    </View>
                    <Text style={{ color: "#f00", alignSelf: "center" }}>{this.state.emptyClassMessage}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.add_Class();

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
                                    emptyClassMessage:""
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

}
)