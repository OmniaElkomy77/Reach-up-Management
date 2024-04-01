import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Linking,
    StatusBar,
    Modal,
    TouchableWithoutFeedback


} from 'react-native';
import { RadioButton } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalVisible: false,
            AppLanguage:"English" , // will be -->> this.props.navigation.getParam('App_Language')
            AppVersion:"+1.0" // Will be -->> required.AppVersion
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
                    <Text style={styles.SettingText}> Setting </Text>



                </View>



                <View
                    style={{
                        paddingLeft: "5%",
                        flex: 1,
                        paddingTop: "10%"
                    }}>

                    <View
                        style={{
                            flexDirection: "row",
                            marginBottom: "10%"
                        }}>

                        <FontAwesome5
                            name={'gitter'}
                            size={20}
                            style={{ color: '#99999', alignSelf: "center" }}
                        />

                        {/**    ////////////////////////////////  Terms and condition //////////// */}
                        <TouchableOpacity style={styles.TouchableStyle}>
                            <Text style={styles.FontStyle}>
                                Terms And Conditions </Text>

                            <Text style={{ width: "80%" }}>
                                Terms and conditions for using shahnapp delivery services</Text>
                        </TouchableOpacity>
                    </View>

                    {/**    ////////////////////////////////  Help & Support   //////////// */}

                    <View style={{ flexDirection: "row", marginBottom: "10%" }}>
                        <FontAwesome5
                            name={'question-circle'}
                            size={20}
                            style={styles.IconStyle}
                        />

                        <TouchableOpacity style={styles.TouchableStyle}>
                            <Text style={styles.FontStyle}>Help & Support </Text>
                            <Text style={{ width: "80%" }}>
                                Contact us if you are facing any issue</Text>
                        </TouchableOpacity>

                    </View>
                    {/**    //////////////////////////////// Rate App   //////////// */}

                    <View style={{ flexDirection: "row", marginBottom: "10%" }}>
                        <FontAwesome5
                            name={'star'}
                            size={20}
                            style={styles.IconStyle}
                        />

                        <TouchableOpacity

                            style={styles.TouchableStyle}
                            onPress={() => {
                                {/** Link of  App in Google Play will be -->> AppRequired.ShahnAppGooglePlayLink */}
                                Linking.openURL(`https://play.google.com/store`);
                            }}

                        >
                            <Text style={styles.FontStyle}
                            >Rate App
                            </Text>
                            <Text style={{ width: "80%" }}>
                                Provide us your feedback about app on playstore
                            </Text>
                        </TouchableOpacity>

                    </View>

                    {/**    //////////////////////////////// App Language    //////////// */}

                    <View style={{ flexDirection: "row", marginBottom: "10%" }}>
                        <FontAwesome5
                            name={'globe'}
                            size={20}
                            style={styles.IconStyle}
                        />

                        <TouchableOpacity style={styles.TouchableStyle}

                            onPress={
                                () => { this.setState({ ModalVisible: true }) }
                            }


                        >
                            <Text style={styles.FontStyle}>App Language</Text>
                        
                            <Text style={{ width: "80%" }}>{this.state.AppLanguage}</Text>
                        </TouchableOpacity>

                    </View>
                    {/**    //////////////////////////////// App Version   //////////// */}


                    <View style={{ flexDirection: "row", marginBottom: "10%" }}>
                        <FontAwesome5
                            name={'sort-numeric-up-alt'}
                            size={20}
                            style={styles.IconStyle}
                        />

                        <View style={styles.TouchableStyle}  >
                            <Text style={styles.FontStyle}>App Version</Text>
                            <Text style={{ width: "80%" }}>{this.state.AppVersion}</Text>
                        </View>

                    </View>


                </View>


            
                <Modal
                    visible={this.state.ModalVisible}
                    onRequestClose={() => {
                        this.setState({
                            ModalVisible: false
                        });
                    }}
                    transparent={true}>
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

                            <View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "#000",
                                        fontWeight: 'bold',
                                        paddingBottom: "5%"

                                    }}>Change Language</Text>
                            </View>


                            <RadioButton.Group
                                onValueChange={(value) => {
                                      this.setState({AppLanguage: value});
                                }}
                                value={this.state.AppLanguage}>
                                <View
                                    style={{

                                        width: "50%",


                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: 10,
                                        }}>
                                        <RadioButton value="0" />
                                        {/** {First Language} */}
                                        <Text style={styles.LanguageStyle}>
                                            English
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: 10,
                                        }}>
                                        <RadioButton value="1" />
                                        {/** {Second Language} */}
                                        <Text style={styles.LanguageStyle}>Arabic</Text>
                                    </View>
                                </View>
                            </RadioButton.Group>
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
    HeaderStyle: {
        height: '8%',
        backgroundColor: "#fbe470",
        flexDirection: 'row',
        paddingTop: "5%",
        paddingLeft: "5%",
        elevation: 7,
       
    },
    FontStyle: {
        fontSize: 18,
        color: "#000",

    },
    SettingText: {
        fontSize: 20,
        color: "#000",
        marginLeft: "2%"
    },
    IconStyle: {
        color: '#99999',
        marginTop: "1%",
        alignSelf: "center"
    },
    TouchableStyle: {

        paddingLeft: "5%"
    },
    ModalViewStyle: {
        backgroundColor: "#fff",
        height: "30%",
        width: "80%",
        alignSelf: "center",
        elevation: 10,
        borderRadius: 20,
        padding: "5%"

    },
    LanguageStyle:{
        fontSize:20
    }



})