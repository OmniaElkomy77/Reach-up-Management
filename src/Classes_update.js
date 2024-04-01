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
    TextInput,
    TouchableWithoutFeedback,
    ToastAndroid
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { Spinner, NativeBaseProvider } from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-navigation";

const { width, height } = Dimensions.get('window');
export default class Classes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: [],
            collection_id: this.props.navigation.getParam("collection_id"),
            disabled: false,
            modalVisible: false,
            NameOfClass: "",
            emptyClassMessage: "",
            generation_id: "",
            modalVisible1: false

        }
    }
    componentDidMount() {
        this.getClassData()
        // alert(this.state.collection_id)
    }

    getClassData() {
        this.setState({ disabled: true });
        axios.get('https://camp-coding.org/reachUpAcademy/admin/' + 'select_generations.php').then((res) => {
            if (res.status == 200) {
                if (Array.isArray(res.data)) {

                    this.setState({ disabled: false });
                    this.setState({ classes: res.data })
                    console.log(JSON.stringify(this.state.classes))
                } else {

                }

            }

        })
    }


    updateClass() {
        let DataToSend = {
            generation_id: this.state.generation_id,
            collection_id: this.state.collection_id
        }
    // alert(DataToSend.collection_id)

        axios.post('https://camp-coding.org/reachUpAcademy/admin/' + "update_collection_gen.php", DataToSend).then(res => {
            if (res.status == 200) {
                if (res.data == "success") {
                    this.getClassData()
                    ToastAndroid.showWithGravityAndOffset(
                        "you update level",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                } else {
                    ToastAndroid.showWithGravityAndOffset(
                        "try again,something error",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        80
                    );
                }
            }
        })
    }








    _renderClasse = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity

                    onPress={() => {
                        this.setState({
                            generation_id: item.generation_id,
                            modalVisible1: true
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


                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} > Update Classes</Text>
                    </View>


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



                {/*///////////////////////////////////////////////////////////////////////////update modal/////////////////////////////////////////////////////////// */}
                <Modal
                    visible={this.state.modalVisible1}
                    onRequestClose={
                        () => {
                            this.setState({ modalVisible1: false })
                        }
                    }
                    animationType="slide"
                    // presentationStyle="formSheet"s
                    transparent={true}

                >
                    <View style={{
                        // opacity:0.7,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        flex: 1,
                        justifyContent: "flex-end"
                    }}>
                        <TouchableWithoutFeedback
                            style={{ flex: 1 }}
                            onPress={() => {
                                this.setState({ modalVisible1: false })
                            }} >
                            <View style={{
                                position: "absolute",
                                height: '100%',
                                width: "100%"
                            }} />
                        </TouchableWithoutFeedback>
                        <View
                            style={{
                                height: height,
                                // width: width,
                                flex: 1,
                                // alignContent: 'center',
                                justifyContent: 'space-around',

                            }}>
                            <View
                                style={{
                                    // height:height,
                                    alignSelf: 'center',
                                    justifyContent: 'space-around',
                                    width: '90%',
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    elevation: 5,
                                    paddingVertical: 15,
                                    marginBottom: 10,

                                }}>

                                <View style={{
                                    height: 50, width: "100%",
                                    // backgroundColor: '#525',
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <Text style={{ color: "#000", fontWeight: 'bold', fontSize: 15 }}>Are you sure you want to update this level?</Text>

                                </View>

                                <View style={{
                                    height: 100,
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: "space-around",
                                    // backgroundColor: "#eee",
                                    alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.updateClass()
                                            this.setState({ modalVisible1: false })
                                        }}
                                        style={{
                                            height: 50,
                                            width: "40%",
                                            backgroundColor: '#3c2365',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            borderRadius: 25
                                        }}>
                                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }}>Update</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({ modalVisible1: false })
                                        }}
                                        style={{
                                            height: 50,
                                            width: "40%",
                                            backgroundColor: "#f8bb08",
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            borderRadius: 25
                                        }}>
                                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 18 }}>Cancel</Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        </View>
                        <TouchableWithoutFeedback
                            style={{ flex: 1 }}
                            onPress={() => {
                                this.setState({ modalVisible1: false })
                            }} >
                            <View style={{
                                width: "100%",
                            }} />
                        </TouchableWithoutFeedback>
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