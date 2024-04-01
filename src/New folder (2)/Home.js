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
    Animated,


} from 'react-native';
import {

    Button,
    NativeBaseProvider,

} from 'native-base';
import { RadioButton } from 'react-native-paper';
import NetInfo from '@react-native-community/netinfo';
import { SearchBar, Avatar, Badge, withBadge } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList } from 'react-native-gesture-handler';
import Headroom from 'react-native-headroom'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const { width, height } = Dimensions.get('window');
export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connection_Status: '',
        }
    }
    componentDidMount() {

        const unsubscripe = NetInfo.addEventListener(state => {
            this.setState({
                connection_Status: state.isConnected ? "Online" : "Offline"
            })


        })
        return unsubscripe
    }

    render() {

        return (
            <>
                <StatusBar backgroundColor={'#3c2365'}></StatusBar>
                {this.state.connection_Status == "Online" ? (


                    <View style={{ flex: 1, paddingTop: "10%" }}>

                        <Image style={styles.LogoStyle}
                            source={require('../constants/images/AppLogoPurple.png')}></Image>
                        <ScrollView style={{ flex: 1 }}>

                        {/*/////////////////////////////////////////// Students /////////////////////////////////////////* */}

                        <TouchableOpacity style={[styles.MainViewStyle]}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("Student_Service")
                                }
                            }
                        >

                            <Text style={styles.TextStyle}>

                                خدمات الطلاب
                        </Text>
                            <Image
                                style={styles.ImgStyle1}
                                source={require('../constants/images/Student.png')}></Image>
                        </TouchableOpacity>


                        {/*/////////////////////////////////////////// Teachers /////////////////////////////////////////* */}
                        <TouchableOpacity style={[styles.MainViewStyle]}

                            onPress={
                                () => {
                                    this.props.navigation.navigate("Teachers")
                                }
                            }
                        >

                            <Image
                                style={styles.ImgStyle}
                                source={require('../constants/images/Teacher.png')} />
                            <Text style={styles.TextStyle}>
                                خدمات المعلمين
                        </Text>
                        </TouchableOpacity>


                        {/*////////////////////////////////////////money /////////////////////////////// */}
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.MiddleMainViewStyle]}
                            onPress={() => this.props.navigation.navigate('Accounting_Services')}

                        >


                            <Text style={styles.TextStyle}>

                                الحسابات

                            </Text>
                            <Image
                                style={{
                                    height: "100%",
                                    width: "60%",
                                    resizeMode: "contain",

                                }}

                                source={require('../constants/images/money.png')} />
                        </TouchableOpacity>
                        </ScrollView>
                    </View> 
             

        ):
        <View style={{
            height: height,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: "center",
            width: width

        }}>

            <Text style={{ color: "#777" }}>
                No Internet Connection
                            </Text>


        </View>

    }

            </>
        )
    }

}

const styles = StyleSheet.create({

    LogoStyle: {

        height: "15%",
        width: "100%",
        alignSelf: "center",
        marginBottom: "10%",
        resizeMode: "contain",
        // backgroundColor:"#ff0"


    },
    MainViewStyle: {
        height: height * 0.2,
        width: width * 0.9,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignSelf: "center",
        elevation: 5,
        flexDirection: "row",
        marginBottom: "10%",
        justifyContent: "center",
        alignItems: "center",


    },
    ImgStyle1: {
        resizeMode: "contain",
        height: "100%",
        width: "50%",
        marginLeft: "6%"

    },
    ImgStyle: {
        resizeMode: "contain",
        height: "100%",
        width: "50%",
        marginRight: "5%"

    },
    TextStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',

    }, ConnectionView: {
        width: '100%',
        height: 20,
        position: 'absolute',
        zIndex: 222,
        backgroundColor: "#FF0",
        justifyContent: 'center',
        alignItems: 'center',
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

}
)