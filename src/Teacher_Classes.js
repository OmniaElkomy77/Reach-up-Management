import axios from "axios";
import React from "react"
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    StyleSheet,
    Modal,
    FlatList,
    TextInput,
    ToastAndroid
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import { Spinner, NativeBaseProvider } from 'native-base'
import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-navigation";
// import CheckBox from '@react-native-community/checkbox'
import { Checkbox } from 'react-native-paper';
import { omitUndefined } from "native-base/lib/typescript/theme/tools";

const { width, height } = Dimensions.get('window');
export default class Classes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: [],
            disabled: false,
            modalVisible: false,
            NameOfClass: "",
            emptyClassMessage: "",
            Teacher_classes: [],
            Teacher_id: this.props.navigation.getParam("teacher_id"),
            CheckBoxValue: false,
            CheckMainBoxValue: false,
            ModalVi:false,
            ModalViError:false





        }
    }
componentDidMount(){
    // console.log(this.state.Teacher_classes)
    this.getDataFromServer()
}

getDataFromServer(){

    let Teacher_id =this.state.Teacher_id

    let DataToSend ={
           teacher_id :Teacher_id
    }
    axios.post('https://camp-coding.org/reachUpAcademy/admin/' + 'select_teacher_groups.php', DataToSend).then((res) => {

        if (res.status == 200) {
            this.setState({
                Teacher_classes :res.data
            })
        

            } else {
                // Alert.alert("Error");
                ToastAndroid.showWithGravityAndOffset(
                    "error",
                     ToastAndroid.SHORT,
                     ToastAndroid.BOTTOM,
                     25,
                     80,
                   );
              
            }
        
    })
}

    OnCheckChange(Outerindex, Innerindex) {

        let generations = this.state.Teacher_classes[Outerindex]
        let collections = generations.collections[Innerindex]
        //   alert(JSON.stringify(collections))
        let checkValue = collections.check
        // alert(checkValue)
        if (checkValue == 'yes') {

            collections.check = 'no'

        } else if (checkValue == 'no') {
            collections.check = 'yes'
        }

        this.setState({
            checkValue: collections.check

        })


    }

    UpdateTeacherClasses() {

        let generations = this.state.Teacher_classes
        let groups_data = ""
        // alert(JSON.stringify(generations[0].collections))

        for (var i = 0; i < generations.length; i++) {

            for (var j = 0; j < generations[i].collections.length; j++) {

                if (generations[i].collections[j].check == 'yes') {

                    groups_data += generations[i].collections[j].collection_id + '//camp//'

                }


            }
        }
        if (groups_data.length > 0) {
            groups_data = groups_data.substring(0, groups_data.length - 8)
        }


        let DataToSend = {

            teacher_id: this.state.Teacher_id,
            groups_data: groups_data

        }
        // alert(JSON.stringify(DataToSend))
        axios
            .post('https://camp-coding.org/reachUpAcademy/admin/' + 'save_teacher_groups.php', DataToSend)
            .then((res) => {
                if (res.status == 200) {
                    // alert(JSON.stringify(res.data))
                    this.setState({
                        ModalVi: true
                    })

                    if (res.data != 'error') {

                    } else {
                        // Alert.alert("Error");
                        ToastAndroid.showWithGravityAndOffset(
                            "error",
                             ToastAndroid.SHORT,
                             ToastAndroid.BOTTOM,
                             25,
                             80,
                           );
                        this.setState({
                            ModalViError: true
                        })
                    }
                }

            });

    }





    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={'#3c2365'}
                // translucent={true} barStyle='light-content'
                ></StatusBar>
                {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
                <View style={styles.HeaderView} >
                    <View style={{ width: '70%', flexDirection: "row" }}>
                        <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                            this.props.navigation.goBack();


                        }}>

                            <FontAwesome5
                                name="angle-right"
                                size={35}
                                style={{ color: '#fff', marginRight: 50 }}
                            />

                        </TouchableOpacity>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >Classes List</Text>
                        </View>
                    </View>

                </View>



                <ScrollView style={{}}>
                    {this.state.disabled == false ? (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.Teacher_classes}
                            renderItem={({ item, index }) => (

                                <>
                               
                           
                                         <View
                                            style={{
                                                width: width,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#f8bb08",
                                                // marginBottom:"5%",
                                                padding: "10%"


                                            }}

                                        >
                                            <View style={{ width: "50%", flexDirection: "row" }}> 
                                                {/* <CheckBox

                                                    value={this.state.CheckMainBoxValue}
                                                // onValueChange={
                                                //     () => this.OnCheckChange()
                                                // }


                                                // />  */}

                                                 <Text
                                                    // onPress={()=>alert(index)}
                                                    style={{
                                                        fontSize: 20,
                                                        color: "#3c2365",
                                                        fontWeight: 'bold',
                                                        marginBottom: "5%"
                                                    }}> {item.generation_name} </Text>



                                            </View> 



                                            {
                                                item.collections.map((innerItem, innerIndex) => (
                                                    < View style={{

                                                        width: width * 0.3,
                                                        flexDirection: "row",
                                                        paddingLeft: "2%"

                                                    }}>


                                                        <Checkbox
                                                            status={innerItem.check == "yes" ? 'checked' : 'unchecked'}
                                                            onPress={() => {
                                                                // setChecked(!checked);

                                                                // alert(innerIndex)
                                                                // this.setState({
                                                                //     checkStatus :innerItem.check
                                                                // })

                                                                this.OnCheckChange(index, innerIndex)
                                                            }}
                                                        />



                                                        <Text style={{ fontSize: 17 }}>{innerItem.collection_name}</Text>
                                                    </View>

                                                ))
                                            } 
                   


                                        </View>





                                </>


                            )}

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

                <TouchableOpacity

                    style={{

                        height: "7%",
                        width: "40%",
                        borderRadius: 20,
                        backgroundColor: "#00B859",
                    //  backgroundColor: "#f00",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center"

                    }}

                    onPress={
                        () => {
                            this.UpdateTeacherClasses()
                        }
                    }

                >

                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>Confirm</Text>
                </TouchableOpacity>

                {/*//////////////////////////////// Succes Modal ///////////////////////* */}

                <Modal

                    visible={this.state.ModalVi}

                    onRequestClose={() => {
                        this.setState({
                            ModalVi: false
                        });
                    }}

                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ModalVi: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                        <View style={styles.ModalViewStyle}>

                            <View style={{ height: "50%",alignSelf:"center",alignContent:"center",justifyContent:"center" }} >
                               <Text style={{
                                   alignSelf:"center",
                                   fontSize:20,
                                   fontWeight:"bold",
                                   color:"#00B859"}}> Data Updates Successfully</Text>
                            </View>


                            <View style={{ flexDirection: "row", height: "50%", padding: "2%", justifyContent: "center" }}>

                                
                          
                            </View>


                        </View>



                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ ModalVi: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                    </View>



                </Modal>
                
                {/*//////////////////////////////// Error Modal ///////////////////////* */}

                <Modal

                    visible={this.state.ModalViError}

                    onRequestClose={() => {
                        this.setState({
                            ModalVi: false
                        });
                    }}

                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ModalViError: false })
                            }}
                            style={{ flex: 1, width: '100%', height: '100%' }}>
                            <View style={{ flex: 1, width: '100%', height: '100%' }} />
                        </TouchableWithoutFeedback>
                        <View style={styles.ModalViewStyle}>

                            <View style={{ height: "50%",alignSelf:"center",alignContent:"center",justifyContent:"center" }} >
                               <Text style={{
                                   alignSelf:"center",
                                   fontSize:20,
                                   fontWeight:"bold",
                                   color:"#f00"}}> حدث خطأ ما </Text>
                            </View>


                            <View style={{ flexDirection: "row", height: "50%", padding: "2%", justifyContent: "center" }}>

                                
                          
                            </View>


                        </View>



                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ ModalViError: false })
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

    },ModalViewStyle:{
        backgroundColor: "#fff",
        height: "20%",
        width: "80%",
        alignSelf: "center",
        elevation: 10,
        borderRadius: 20,
        // padding: "5%",
        // paddingLeft: "10%",
        alignItems:"center",
        justifyContent:"center",
        paddingTop:"10%"

    }

}
)