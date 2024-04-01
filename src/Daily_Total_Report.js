import React from "react";
import { View, Text, ScrollView, ToastAndroid, StyleSheet, ActivityIndicator } from "react-native"
import axios from "axios";
export default class Monthly_Total_Report extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            month_name: this.props.navigation.getParam("month_name"),
            data: [],
            loading: true
        }
    }
    componentDidMount() {
        let data = this.props.navigation.getParam("data")
        this.setState({ data: data, loading: false })
    }





    render() {
        return (
            < View style={{ backgroundColor: "#fff", flex: 1 }}>
                <View style={styles.HeaderView} >



                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }}>Daily Reports</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                {this.state.loading ?
                    <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size={40} color={'#3c2365'} />
                    </View>
                    :
                    <ScrollView>
                        {this.state.data.student != null ?
                            <View style={{
                                padding: 10,
                                width: "90%",
                                backgroundColor: "#fff",
                                alignSelf: "center",
                                elevation: 4,
                                marginVertical: 10,
                                borderRadius: 10
                            }}>
                                <View style={{
                                    alignItems: "center", justifyContent: "center",
                                    paddingBottom: 5
                                }}>
                                    <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>student Payments</Text>
                                </View>


                                <View>
                                    <Text style={{ fontSize: 15, color: "#000" }}>
                                        Book Payments
                                    </Text>
                                </View>

                                {this.state.data.student.Books.money_earned != null ?
                                    <View style={{ padding: 10, width: "100%", borderBottomColor: "#777", borderBottomWidth: 1 }}>
                                        <Text style={{ color: "#f00" }}>{this.state.data.student.Books.money_earned}</Text>

                                    </View>
                                    :
                                    <View style={{ padding: 10, width: "100%", borderBottomColor: "#777", borderBottomWidth: 1 }}>
                                        <Text style={{ color: "#f00" }}>There are No Payments for Books</Text>

                                    </View>
                                }

                                <View>
                                    <Text style={{ fontSize: 15, color: "#000" }}>
                                        Month Payments
                                    </Text>
                                </View>
                                {this.state.data.student.Mounthly_Expenses != null ?
                                    <View style={{ padding: 10, width: "100%", }}>
                                        <Text style={{ color: "#f00" }}>{this.state.data.student.Mounthly_Expenses.money_earned}</Text>

                                    </View>
                                    :
                                    <View style={{ padding: 10, width: "100%", }}>
                                        <Text style={{ color: "#f00" }}>There are No Payments for Books</Text>

                                    </View>



                                }

                                <View>
                                    <Text style={{ fontSize: 15, color: "#000" }}>
                                        Another Payments
                                    </Text>
                                </View>


                                {this.state.data.student.Another_payment != null ?
                                    <View style={{ padding: 10, width: "100%", }}>
                                        <Text style={{ color: "#f00" }}>{this.state.data.student.Another_payment.money_earned}</Text>

                                    </View>
                                    :
                                    <View style={{ padding: 10, width: "100%", }}>
                                        <Text style={{ color: "#f00" }}>There are No Payments other</Text>

                                    </View>

                                }




                            </View>


                            :
                            null
                        }


                        <View style={{
                            // height: 70,
                            padding: 10,
                            width: "90%",
                            backgroundColor: "#fff",
                            alignSelf: "center",
                            elevation: 4,
                            marginVertical: 10,
                            borderRadius: 10
                        }}>
                            <View style={{
                                alignItems: "center", justifyContent: "center",
                                //  backgroundColor: "#784"
                                paddingBottom: 5
                            }}>
                                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>Expenses</Text>
                            </View>


                            {/* <View>
                        <Text style={{fontSize:15,color:"#000"}}>
                Book Payments
                        </Text>
                    </View>

                    <View style={{padding:10,width:"100%",borderBottomColor:"#777",borderBottomWidth:1}}>
                        <Text style={{color:"#666"}}>لا يوجد مدفوعات كتب </Text>

                    </View> */}


                            <View>
                                <Text style={{ fontSize: 15, color: "#000" }}>
                                    Teacher Payments
                                </Text>
                            </View>


                            {this.state.data.teacher_payment != null ?
                                <View style={{ padding: 10, width: "100%", borderBottomColor: "#777", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#f00" }}>{this.state.data.teacher_payment}</Text>

                                </View>
                                :

                                <View style={{ padding: 10, width: "100%", borderBottomColor: "#777", borderBottomWidth: 1 }}>
                                    <Text style={{ color: "#f00" }}>There are No Payments for Teachers</Text>

                                </View>
                            }



                            <View>
                                <Text style={{ fontSize: 15, color: "#000" }}>
                                    Academic Payments
                                </Text>
                            </View>
                            {this.state.data.academy_expenses != null ?
                                <View style={{ padding: 10, width: "100%", }}>
                                    <Text style={{ color: "#f00" }}>{this.state.data.academy_expenses}</Text>

                                </View>
                                :
                                <View style={{ padding: 10, width: "100%", }}>
                                    <Text style={{ color: "#f00" }}>There are No Payments for Academic</Text>

                                </View>

                            }

                        </View>

                    </ScrollView>
                }

            </View>
        )
    }
}
const styles = StyleSheet.create({
    HeaderView: {
        // width: '100%',
        height: 60,
        // flexDirection: 'row',
        backgroundColor: '#3c2365',


    },
})