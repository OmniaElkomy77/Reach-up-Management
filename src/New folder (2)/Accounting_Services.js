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
    ScrollView


} from 'react-native';
import { RadioButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {




        }
    }
    render() {
        return (
            <>
                {/** All Colors Used will be -->> colors.ColorName */}
                <StatusBar backgroundColor={'#3c2365'}></StatusBar>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        flex: 1,
                        // paddingTop: "20%",

                        // marginBottom:"20%"
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/*//////////////////////////////////////// /////////////////////////////// */}
                    <View style={{ alignItems: "center", justifyContent: "center", paddingTop: "30%" }}>
                        <TouchableOpacity
                            // activeOpacity={0.5}
                            style={[styles.MainViewStyle]}
                            onPress={() => this.props.navigation.navigate('money_expenses')}

                        >
                            <Text style={styles.TestStyle}>

                                المصروفات
                         </Text>


                            <Image
                                style={styles.ImageStyle}

                                source={require('../constants/images/money.png')} />


                        </TouchableOpacity>

                        {/*////////////////////////////////////////Class /////////////////////////////// */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.MiddleMainViewStyle]}
                            onPress={() => this.props.navigation.navigate('Student_expenses')}

                        >

                            <Image
                                style={{
                                    height: "70%",
                                    width: "50%",
                                    resizeMode: "contain",
                                    
                                    
                                }}

                                source={require('../constants/images/Student.png')} />
                            <Text style={{

                                fontSize: 30,
                                color: '#000',
                                fontWeight: 'bold',
                                paddingRight:"10%",
                                height: 100,
                                width: 150,
                            }}>

                                حسابات الطلبه

                            </Text>
                        </TouchableOpacity>
                        {/*////////////////////////////////////////Teacher Accounting/////////////////////////////// */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.MiddleMainViewStyle]}
                            onPress={() => this.props.navigation.navigate('Teacher_expenses')}

                        >
                            <Text style={{

                                fontSize: 30,
                                color: '#000',
                                fontWeight: 'bold',
                                height: 100,
                                width: 110,



                            }}>

                                حسابات المعلمين

                       </Text>

                            <Image
                                style={styles.ImageStyle}

                                source={require('../constants/images/Teacher.png')} />

                        </TouchableOpacity>


                    </View>


                </ScrollView>

            </>

        )
    }

}
const styles = StyleSheet.create({

    MainViewStyle: {
        height: height * 0.2,
        width: width * 0.9,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignSelf: "center",
        elevation: 5,
        flexDirection: "row",
        marginBottom: "10%",
        justifyContent: "center",
        alignItems: "center"


    },
    MiddleMainViewStyle: {
        height: height * 0.2,
        width: width * 0.9,
        backgroundColor: "#fff",
        borderRadius: 30,
        alignSelf: "center",
        elevation: 5,
        flexDirection: "row",
        marginBottom: "10%",
        alignItems: "center",
        paddingLeft: "7%",



    },
    ImageStyle: {
        height: "100%",
        width: "50%",
        resizeMode: "contain"

    },
    TestStyle: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold'
    }


})