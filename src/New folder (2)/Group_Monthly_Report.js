
import React from "react"
import { View, Text, StatusBar, TouchableOpacity, Dimensions, StyleSheet, ScrollView, FlatList, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios'
import { BackgroundImage } from "react-native-elements/dist/config";
const { width, height } = Dimensions.get('window');
import moment from 'moment';
export default class Groups extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student_id: "",
            Reports: [
            ]


        }
    }
    componentDidMount() {
        this.getGroupReport();

    }

    getGroupReport() {

        let collection_id = this.props.navigation.getParam("collection_id")

        this.setState({ collection_id: collection_id })

        let DataToSend = {
            collection_id: collection_id
        }



        axios
            .post('https://camp-coding.org/reachUpAcademy/admin/' + 'select_group_reports.php', DataToSend)
            .then((res) => {
                if (res.status == 200) {

                    // alert(JSON.stringify(res.data))
                    if (res.data != 'error') {


                        this.setState({
                            Reports: res.data
                        });
                        // console.log(JSON.stringify(this.state.Reports))

                    }
                }

                this.setState({ disable: false })
            });




    }


    _renderMounthlyReports = (item, index) => {

        return (
            <>

                <View style={styles.MainView}>


                    <TouchableOpacity style={styles.ContentView}

                        onPress={
                            () => {
                                this.props.navigation.navigate("Group_daily_Report", {
                                    days: item.item.days
                                }

                                )
                            }
                        }

                    >
                        <View style={{ width: "25%", alignItems: "center", paddingTop: "2%" }}>
                            <BackgroundImage
                                source={require("../constants/images/month_after_edit.png")}
                                style={styles.ImageStyle}
                            >
                                <View style={{
                                    height: 35,
                                    width: 35,
                                    backgroundColor: "#e9eef2",
                                    alignSelf: "center",
                                    borderRadius: 20,
                                    marginTop: 5,
                                    alignContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text
                                        style={{ alignSelf: "center", fontSize: 20, color: "#6a7073", fontWeight: "500" }}

                                    >{moment(item.item.month_name).format('MMM')}</Text>
                                </View>
                            </BackgroundImage>
                        </View>

                        <View style={{ width: "80%", alignSelf: "center" }}>
                            <Text style={{ fontSize: 25, alignSelf: "center" }}> {item.item.month_name}</Text>
                        </View>

                    </TouchableOpacity>



                </View>

            </>
        )

    }

    render() {
        return (
            <>

                {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
                <View style={styles.HeaderView} >

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                        this.props.navigation.goBack()
                    }}>

                        <FontAwesome5
                            name="angle-right"
                            size={35}
                            style={{ color: '#fff', marginRight: 20 }}
                        />

                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }} >تقارير المجموعه</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                {/*////////////////////////////////////////////////////////Contetnt /////////////////////////////////////* */}


                <FlatList
                    data={this.state.Reports}
                    renderItem={this._renderMounthlyReports}
                />

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
        alignContent: "center",
        justifyContent: "center"

    },
    MainView: {
        flex: 1,
        paddingLeft: "2%",
        paddingTop: "5%",
        // backgroundColor: "#ff0",
        flexDirection: "row"
    },
    ContentView: {
        height: height * 0.1,
        width: "95%",
        borderRadius: 50,
        backgroundColor: "#fff",
        // justifyContent: "center",
        paddingRight: "10%",
        flexDirection: "row",
        paddingLeft: "5%"

    },
    ImageStyle: {
        height: "90%",
        width: "90%",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center"
    }

})