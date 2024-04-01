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
                        paddingTop: "20%",

                        // marginBottom:"20%"
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/*////////////////////////////////////////Teachers /////////////////////////////// */}
                    <View style={{ alignItems: "center", justifyContent: "center", paddingTop: "30%" }}>
                        <TouchableOpacity
                            // activeOpacity={0.5}
                            style={[styles.MainViewStyle]}
                            onPress={() => this.props.navigation.navigate('Teachers')}

                        >
                            <Text style={styles.TestStyle}>

                                All Teachers
                         </Text>


                            <Image
                                style={styles.ImageStyle}

                                source={require('../constants/images/Teacher.png')} />


                        </TouchableOpacity>

                        {/*////////////////////////////////////////QrCode_Scanner /////////////////////////////// */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.MiddleMainViewStyle]}
                            onPress={() => this.props.navigation.navigate('QrCode_Scanner')}

                        >

                            <Image
                                style={styles.ImageStyle}

                                source={require('../constants/images/qr-code.png')} />
                            <Text style={styles.TestStyle}>

                                Attendance
                            </Text>
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
        paddingLeft: "5%"


    },
    ImageStyle: {
        height: "100%",
        width: "40%",
        resizeMode: "contain",


    },
    TestStyle: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        marginRight: "5%"

    }


})