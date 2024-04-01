import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native"
export default class Daily_Teacher_Permisson extends React.Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.HeaderView} >



                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#F5FCFF', fontSize: 17, fontWeight: 'bold' }}>permissions</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    </View>


                </View>
                <View style={{
                    // height: 100,
                    padding: 10,
                    width: "95%",
                    backgroundColor: "#eee",
                    alignSelf: "center",
                    marginVertical: 10,
                    borderRadius: 10,
                    elevation: 4,
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
                    <View style={{
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "#585"
                    }}>
                        <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>20-2-2022</Text>
                    </View>
                    <View style={{
                        // height: 50,
                        padding: 10,
                        // alignItems: "center",
                        // justifyContent: "space-around",
                        // backgroundColor: "#255"
                    }}>
                        <Text style={{ color: "#666", fontSize: 15,textAlign:"justify"}}> تم الاستأذان بواسطه المدرس في ذلك اليوم  و ذلك لاسباب خاصه </Text>
                    </View>










                </View>

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
        // elevation: 22,
        // alignContent: "center",
        // alignItems:"center",
        // justifyContent: "center"

    },
}
)