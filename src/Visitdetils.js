import React from 'react';
import {
    View, Text, TouchableOpacity, Image, ScrollView, FlatList, StatusBar,

    StyleSheet, ActivityIndicator, UIManager, Platform, LayoutAnimation
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default class Visitdetils extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            worker: [

            ],
            total_payd: 0,
            loading: false
        }
    }

    componentDidMount() {

        this.get_deatils()
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }




    get_deatils = () => {
        this.setState({ loading: true });
        // this.props.route.params.alldata
        let data = this.props.route.params.alldata
        let month = this.props.route.params.month

        // console.log(JSON.stringify(data))

        let arr = []
        for (let i = 0; i < data.length; i++) {
            let mon_num = data[i].date.slice(0, 7)

            if (mon_num == month) {
                arr.push(data[i])
            }

        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].open = false
        }
        this.setState({ worker: arr })


        setTimeout(() => {
            this.setState({ loading: false });

        }, 500);



    }


    opendetils(index) {
        let new_in = this.state.worker
        if (new_in[index].open == true) {
            new_in[index].open = false
        } else {
            for (var i = 0; i < new_in.length; i++) {
                new_in[i].open = false
            }
            new_in[index].open = true

        }


        this.setState({ worker: new_in })
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    }


    renderworker(item, index) {
        return (
            <View

                style={{

                    width: '95%',
                    borderRadius: 10,
                    alignSelf: 'center',
                    paddingLeft: 15,
                    paddingRight: 16,
                    paddingTop: 20,
                    paddingBottom: 10,



                    backgroundColor: "#fff",
                    marginVertical: 2,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                    marginBottom: 10
                }}
                onPress={() => {
                }}>




                <View style={styles.orderAddress}>


                    <View style={styles.addressContainer}>

                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between',
                            borderBottomWidth: .5,
                            borderColor: '#ddd',
                            marginBottom: 5
                        }}>
                            <Text
                                style={{
                                    textAlign: 'auto',

                                    alignSelf: "center", fontSize: 15,
                                    color: "#9F9FA0"
                                }}>
                                {item.date.slice(0, 10)}
                            </Text>
                            <Text style={{
                                color: "#000", fontSize: 18,
                                marginBottom: 5
                            }}>
                                date
                            </Text>



                        </View>


                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                            borderColor: '#ddd',
                            marginBottom: 5
                        }}>
                            <Text
                                style={{
                                    textAlign: 'auto',

                                    alignSelf: "center", fontSize: 15,
                                    color: "#9F9FA0"
                                }}>
                                {item.group_id}
                            </Text>
                            <Text style={{
                                color: "#000", fontSize: 18,
                                marginBottom: 5
                            }}>
                                group
                            </Text>


                        </View>


                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                            borderColor: '#ddd',
                            marginBottom: 5
                        }}>
                            <Text
                                style={{
                                    textAlign: 'auto',

                                    alignSelf: "center", fontSize: 15,
                                    color: "#9F9FA0"
                                }}>
                                {item.level_id}
                            </Text>
                            <Text style={{
                                color: "#000", fontSize: 18,
                                marginBottom: 5
                            }}>
                                level
                            </Text>


                        </View>
                        <View style={{
                            flexDirection: "row", justifyContent: 'space-between', borderBottomWidth: .5,
                            borderColor: '#ddd',
                            marginBottom: 5
                        }}>
                            <Text
                                style={{
                                    textAlign: 'auto',

                                    alignSelf: "center", fontSize: 15,
                                    color: "#9F9FA0"
                                }}>
                                {item.instarctor}
                            </Text>
                            <Text style={{
                                color: "#000", fontSize: 18,
                                marginBottom: 5
                            }}>
                                instarctor
                            </Text>


                        </View>

                        {item.open ?

                            item.visits.map(data => (

                                <View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            flexWrap: "wrap",
                                            justifyContent: 'flex-end'
                                        }}
                                    >
                                        <Text style={{
                                            color: "#9F9FA0", fontSize: 18,
                                            marginBottom: 5
                                        }}>
                                            {" (" + data.main_content + " )"}

                                        </Text>
                                        <Text style={{
                                            color: "#000", fontSize: 18,
                                            marginBottom: 5,

                                        }}>
                                            {data.question}

                                        </Text>

                                    </View>

                                    <Text
                                        style={{

                                            fontSize: 15,
                                            color: "#9F9FA0",
                                            marginRight: 10

                                        }}>
                                        {data.answer}
                                    </Text>

                                </View>

                            )) : null}

                        <TouchableOpacity
                            onPress={() => {
                                this.opendetils(index)
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'auto',

                                    alignSelf: "center", fontSize: 15,
                                    color: "#9F9FA0",
                                    textDecorationLine: "underline"
                                }}>
                                {item.open ? 'close question' : 'show question'}
                            </Text>
                        </TouchableOpacity>











                        {/* </View> */}
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <>

                <StatusBar
                    backgroundColor={'#3c2365'}
                />
                <View style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#3c2365',
                    alignItems: "center",
                    justifyContent: 'space-between',
                    flexDirection: "row",

                }}>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()

                        }}
                        style={{


                            padding: 10,
                            borderRadius: 20,
                            marginLeft: 20
                        }}
                    >
                        <Icon
                            name='arrow-right'
                            size={20}
                            color="#fff"

                        />

                    </TouchableOpacity>

                    <Text
                        style={{
                            fontSize: 25,
                            marginRight: 20,
                            color: "#fff"

                        }}
                    >
                        Visit Deatils
                    </Text>




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
                        />
                    </View>
                ) : (
                    <>



                        <FlatList
                            data={this.state.worker}
                            numColumns={1}
                            renderItem={({ item, index }) => this.renderworker(item, index)} />

                    </>
                )}




























            </>
        )
    }
}



const styles = StyleSheet.create({
    connectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderContainer: {
        // height: height * 0.32,
        width: '100%',
        // backgroundColor: '#f00',
        marginTop: '1%',
        shadowColor: '#000',
        paddingVertical: '1%',
        paddingHorizontal: '1%',
        // marginVertical:"%",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 10,
    },
    orderIdConatiner: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '2%',
        // backgroundColor:"#f00"
    },
    timeStatus: {
        flex: 2,
        alignItems: 'flex-end',

        paddingRight: '4%',
        //  backgroundColor:"#f0f"
    },
    orderAddress: {
        // flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: '#f0f',
        marginTop: '2%',
    },
    pinIcon: {
        // flex: 1,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addressContainer: {
        flex: 1,
    },
});

