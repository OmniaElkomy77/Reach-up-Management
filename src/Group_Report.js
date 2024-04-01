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
            Report: []

        }
    }
    componentDidMount() {
        let report = this.props.navigation.getParam("Report")
        // alert(JSON.stringify(report))
        let all_report = this.state.Report
        all_report.push(report)
        this.setState({ Report: all_report })

    }




    render() {



        return (
            <>
                <View style={{ backgroundColor: "#eee", flex: 1 }}>
                    <ScrollView>
                        {/* <StatusBar
                            backgroundColor='#3c23خ5' barStyle='light-content'></StatusBar> */}
                        {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}


                        <View style={styles.HeaderView} >
                            <View style={{ width: "60%", flexDirection: "row", paddingLeft: "7%" }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                                    this.props.navigation.goBack()
                                }}>

                                    <FontAwesome5
                                        name="angle-right"
                                        size={35}
                                        style={{ color: '#fff', marginRight: "30%" }}
                                    />

                                </TouchableOpacity>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Group Report</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                            </View>
                            <View style={{ width: "40%", flexDirection: "row", paddingTop: "2%" }}>

                            </View>

                        </View>


                        {/*/////////////////////////////////////////////////////////////////////////////////////////////////////* */}


                        {this.state.Report.map((item, index) => (
                            <>

                                <View style={{
                                    height: 40,
                                    width: "100%",
                                    backgroundColor: "#f8bb08",
                                    borderRadius: 10,
                                    alignItems: "center",
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

                                    >{item.date}</Text>
                                </View>









                                <View style={{

                                    // backgroundColor: '#fff',

                                    backgroundColor: "#eee",

                                }}>

                                    <View style={{
                                        backgroundColor: '#eee', padding: 15, justifyContent: 'center',
                                        alignItems: 'center', borderStyle: "dashed", borderBottomWidth: 1
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 15, marginVertical: 10 }}>
                                            Teacher Name
                                        </Text>


                                        <View
                                            style={{
                                                backgroundColor: '#fff',
                                                alignSelf: 'center',
                                                alignContent: "center",
                                                borderRadius: 10,
                                                color: "#000",
                                                padding: 10,
                                                justifyContent: "center",
                                                width: "95%"
                                            }}>
                                            <Text style={{ color: "#000", alignSelf: "center" }}>{item.teacher_name}</Text>
                                        </View>



                                    </View>



                                </View>

                                <View style={{

                                    // backgroundColor: '#fff',

                                    backgroundColor: "#eee",

                                }}>

                                    <View style={{
                                        backgroundColor: '#eee', padding: 15, justifyContent: 'center',
                                        alignItems: 'center', borderStyle: "dashed", borderBottomWidth: 1
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 15, marginVertical: 10 }}>
                                            Group Grammer
                                        </Text>


                                        <View
                                            style={{
                                                backgroundColor: '#fff',
                                                alignSelf: 'center',
                                                alignContent: "center",
                                                borderRadius: 10,
                                                color: "#000",
                                                padding: 10,
                                                justifyContent: "center",
                                                width: "95%"
                                            }}>
                                            <Text style={{ color: "#000", alignSelf: "center" }}>{item.qs_1_grammer}</Text>
                                        </View>



                                    </View>



                                </View>




                                <View style={{

                                    // backgroundColor: '#fff',

                                    backgroundColor: "#eee",

                                }}>

                                    <View style={{
                                        backgroundColor: '#eee', padding: 15, justifyContent: 'center',
                                        alignItems: 'center', borderStyle: "dashed", borderBottomWidth: 1
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 15, marginVertical: 10 }}>
                                            Group Dictation
                                        </Text>


                                        <View
                                            style={{
                                                backgroundColor: '#fff',
                                                alignSelf: 'center',
                                                alignContent: "center",
                                                borderRadius: 10,
                                                color: "#000",
                                                padding: 10,
                                                justifyContent: "center",
                                                width: "95%"
                                            }}>
                                            <Text style={{ color: "#000", alignSelf: "center" }}>{item.qs_2_dictation}</Text>
                                        </View>



                                    </View>



                                </View>

                                <View style={{

                                    // backgroundColor: '#fff',

                                    backgroundColor: "#eee",

                                }}>

                                    <View style={{
                                        backgroundColor: '#eee', padding: 15, justifyContent: 'center',
                                        alignItems: 'center', borderStyle: "dashed", borderBottomWidth: 1
                                    }}>
                                        <Text style={{ color: "#000", fontSize: 15, marginVertical: 10 }}>
                                            Group HomeWork
                                        </Text>


                                        <View
                                            style={{
                                                backgroundColor: '#fff',
                                                alignSelf: 'center',
                                                alignContent: "center",
                                                borderRadius: 10,
                                                color: "#000",
                                                padding: 10,
                                                justifyContent: "center",
                                                width: "95%"
                                            }}>
                                            <Text style={{ color: "#000", alignSelf: "center" }}>{item.qs_3_homework}</Text>
                                        </View>



                                    </View>
















                                </View>
                            </>

                        ))}

















                    </ScrollView>


                </View>


            </>
        )
    }
}

const styles = StyleSheet.create({
    HeaderView: {
        // width: '100%',
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#3c2365',
        elevation: 22,


    },

})