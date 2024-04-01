import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking,
    StatusBar,

} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state={
            AppEmail:"campCoding@gmail.com", //  will be --> required.AppEmail
            AppMessengerPage:"campcoding" //will be --> required.MessengerPage
        }
    }
    render() {
        return (
            <>
               {/** All Colors Used will be -->> colors.ColorName */}
                <StatusBar backgroundColor={'#fbe470'}></StatusBar>
                <View style={styles.HeaderStyle}>
                    <TouchableOpacity style={{ marginTop: "1%" }}>
                        <FontAwesome5
                            name={'arrow-left'}
                            size={20}
                            style={{ color: '#99999' }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 20,
                            color: "#000",
                            marginLeft: "2%"
                        }}>  Contact Us </Text>


                </View>


                <View style={{ height: "20%" }}>
                      {/** App Logo Image from Images.AppLogo */}
                    <Image source={require('../src/Logo.png')} style={styles.LogoImageDesign} />
                </View>


                <View style={styles.CenterView}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.WhiteViewStyle}
                        onPress={() => {
                            Linking.openURL(`mailto:${this.state.AppEmail}`);
                        }}
                    >

                        <FontAwesome5
                            name={'envelope-open-text'}
                            size={27}
                            style={{ color: '#000' }}
                        />
                        <Text style={styles.TextStyle}> EMAIL</Text>
                    </TouchableOpacity>


                    <TouchableOpacity activeOpacity={0.7} style={styles.WhiteViewStyle}
                        onPress={() => {
                            Linking.openURL(`http://m.me/${this.state.AppMessengerPage}`);
                        }}
                    >
                        <FontAwesome5
                            name={'facebook-messenger'}
                            size={27}
                            style={{ color: '#000' }}
                        />
                        <Text style={styles.TextStyle}> MESSENGER</Text>
                    </TouchableOpacity>
                </View>




            </>

        )
    }

}
const styles = StyleSheet.create({

    HeaderStyle: {
        height: '8%',
        backgroundColor: "#fbe470",
        flexDirection: 'row',
        paddingTop: "5%",
        paddingLeft: "5%",
        elevation: 7,
       

    },
    CenterView: {
        backgroundColor: "#fbe470",
        alignSelf: "center",
        height: "40%",
        width: "80%",
        // marginTop:"5%",
        borderRadius: 20,
        alignItems: "center",
        paddingTop: "20%",
        elevation: 5

    },
    LogoImageDesign: {
        height: "50%",
        width: "20%",
        // backgroundColor:"#f00",
        alignSelf: "center",
        marginTop: "7%"
    },
    WhiteViewStyle: {
        backgroundColor: "#fff",
        width: "90%",
        height: "25%",
        borderRadius: 20,
        paddingTop: "5%",
        paddingLeft: "10%",
        marginBottom: "10%",
        flexDirection: "row",
        elevation: 5,




    },
    TextStyle: {
        fontSize: 20,
        color: "#000",
        marginLeft: "7%"
    }

})