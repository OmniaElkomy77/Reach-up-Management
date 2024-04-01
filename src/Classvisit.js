
import React, { useState, useEffect } from 'react'
import {
    View, Text, StatusBar, TouchableOpacity, ScrollView, TextInput, Alert,
    Modal, Image, Pressable, ActivityIndicator, UIManager, Platform, LayoutAnimation, FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import moment from "moment";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


export default class Classvisit extends React.Component {




    constructor() {
        super()
        this.state = {
            months: [

            ],
            alldata: [],
            name: {},
            count: 0,
            loading: false,

            id: -1,
            loadingbutt: [false],
            modalconfirm: false,
            activity_id: -1,
            currentindex: -1

        }
    }

    componentDidMount() {
        this.getdata()

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }



    getdata() {
        this.setState({ loading: true })
        data_to_send = {
            group_id: this.props.navigation.getParam("collection_id"),
            level_id: this.props.navigation.getParam("class_id")
        }
        axios.post("https://camp-coding.org/reachUpAcademy/teacher/select_class_visit_data.php", data_to_send).then(res => {
            if (res.status == 200) {
                // console.log(JSON.stringify(res.data))
                if ((res.data) != "error") {
                    if (res.data.length > 0) {

                        this.getMon(res.data)

                        this.setState({
                            alldata: res.data,
                        });

                    }

                }
                else {

                    Alert.alert("something went wrong ... try agine later")

                }
            } else {

                Alert.alert("something went wrong ... try agine later")

            }

            this.setState({ loading: false })




        });
    }

    getMon(dataRes) {

        let data = dataRes
        let months = []

        for (let i = 0; i < data.length; i++) {
            let mon_num = data[i].date.slice(0, 7)
            let opj = {
                months_num: mon_num
            }
            if (months.length == 0) {
                months.push(opj)
                continue
            }

            var found = false
            for (let z = 0; z < months.length; z++) {
                if (months[z].months_num === mon_num) {
                    found = true
                    break;
                }
            }

            if (found) {
                continue;
            }
            months.push(opj)

        }
        // console.log(months)
        this.setState({ months })

    }





    renderdates(item, index) {
        return (
            <TouchableOpacity



                style={{

                    width: '95%',
                    borderRadius: 12,
                    alignSelf: 'center',
                    padding: 10,



                    backgroundColor: '#fff',
                    marginVertical: 8,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}
                onPress={() => {
                    this.props.navigation.navigate("Visitdetils", {
                        alldata: this.state.alldata,
                        month: item.months_num
                    })


                }}>
                <View style={{}}>
                    <View
                        style={{
                            borderWidth: 1,
                            padding: 5,
                            borderColor: "#ddd",
                            borderRadius: 10

                        }}>

                        <View>
                            <Text
                                style={{
                                    color: "#778684",
                                    textAlign: 'right'
                                }}>
                                {moment(item.months_num).format("MMMM YYYY")}
                            </Text>
                        </View>

                    </View>


                </View>




            </TouchableOpacity >
        )
    }





    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={'#3c2365'}
                />
                <View
                    style={{
                        flex: 1,

                    }}
                >

                    <View style={{
                        width: '100%',
                        height: 60,
                        backgroundColor: '#3c2365',
                        alignItems: "center",
                        justifyContent: 'space-around',
                        flexDirection: "row",

                    }}>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('QuVisit')
                            }}
                            style={{
                                backgroundColor: "#f8bb08",

                                padding: 10,
                                borderRadius: 20,
                                marginLeft: 20
                            }}
                        >
                            <Icon
                                name='plus'
                                size={20}
                                color="#fff"

                            />

                        </TouchableOpacity>
                        <View style={{ width: "85%", alignItems: "center", justifyContent: "center" }}>
                            <Text
                                style={{
                                    fontSize: 25,
                                    marginRight: 30,

                                    color: "#fff"

                                }}
                            >
                                Visits
                            </Text>


                        </View>

                    </View>



                    {this.state.loading ? (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <ActivityIndicator
                                size={40}
                                color={'#3c2365'}
                            />
                        </View>
                    ) : (
                        <FlatList
                            data={this.state.months}
                            numColumns={1}
                            renderItem={({ item, index }) => this.renderdates(item, index)} />

                    )}





                </View>


                {/*  */}















            </>

        )
    }
}
