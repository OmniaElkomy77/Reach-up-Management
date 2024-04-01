import React, {Component} from 'react';
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
} from 'react-native';
import {Button, NativeBaseProvider, Spinner} from 'native-base';
import {RadioButton} from 'react-native-paper';
import {SearchBar, Avatar, Badge, withBadge} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FlatList} from 'react-native-gesture-handler';
import Headroom from 'react-native-headroom';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import axios from 'axios';

const {width, height} = Dimensions.get('window');
export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Report: this.props.navigation.getParam('Report'),
    };
  }

  render() {
    return (
      <>
        <View style={{backgroundColor: '#eee', flex: 1}}>
          <ScrollView>
            {/* <StatusBar
                            backgroundColor='#3c2365' barStyle='light-content'></StatusBar> */}
            {/*///////////////////////////////////////////////////////// Header /////////////////////////////////////////////////////// * */}
            <View style={styles.HeaderView}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.navigation.goBack();
                }}>
                <FontAwesome5
                  name="angle-right"
                  size={35}
                  style={{color: '#fff', marginRight: 20}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{color: '#F5FCFF', fontSize: 17, fontWeight: 'bold'}}>
                  Student Report
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </View>
            {/*/////////////////////////////////////////////////////////////////////////////////////////////////////* */}

            {this.state.Report == '' ? (
              <>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#3c2365',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginTop: '50%',
                  }}>
                  No Reports Yet
                </Text>
              </>
            ) : (
              <>
                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 80,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderColor: '#000',
                    borderStyle: 'dashed',
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',

                      height: 70,
                      width: 140,
                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Revision sheet</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.r_sh == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ___
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.r_sh}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: 70,
                      width: 140,
                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Dictation</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.dic == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ____
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.dic}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: 70,
                      width: 140,

                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Homework</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.h_w == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ____
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.h_w}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 80,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderColor: '#000',
                    borderStyle: 'dashed',
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: 70,
                      width: 140,
                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Points</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.points == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ____
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.points}
                        </Text>
                      )}
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: 70,
                      width: 140,
                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Participate</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.participate == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ____
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.participate}
                        </Text>
                      )}
                    </View>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: 70,
                      width: 140,
                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Booklet</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.bo == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ___
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.bo}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: '#eee',
                    height: 80,
                    // flexDirection: 'row',
                    alignItems: 'flex-end',
                    // justifyContent: "flex-end",
                    marginTop: 10,
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderColor: '#000',
                    borderStyle: 'dashed',
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      height: 70,
                      width: 140,
                      // backgroundColor: "#857"
                    }}>
                    <Text style={{color: '#000'}}>Units</Text>
                    <View
                      style={{
                        height: 50,
                        backgroundColor: '#fff',
                        width: 100,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {this.state.Report.unit == '' ? (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          ____
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#3c2365',
                          }}>
                          {this.state.Report.unit}
                        </Text>
                      )}
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    // backgroundColor: '#fff',

                    backgroundColor: '#eee',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      padding: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderStyle: 'dashed',
                      borderBottomWidth: 1,
                    }}>
                    <Text
                      style={{color: '#000', fontSize: 15, marginVertical: 10}}>
                      Student Notes
                    </Text>

                    <View
                      style={{
                        backgroundColor: '#fff',
                        alignSelf: 'center',
                        alignContent: 'center',
                        borderRadius: 10,
                        color: '#000',
                        padding: 10,
                        justifyContent: 'center',
                        width: '95%',
                      }}>
                      <Text style={{color: '#000', alignSelf: 'center'}}>
                        {this.state.Report.note}
                      </Text>
                    </View>
                  </View>
                </View>



                <View
                  style={{
                    // backgroundColor: '#fff',

                    backgroundColor: '#eee',
                  }}>
                  <View
                    style={{
                      backgroundColor: '#eee',
                      padding: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderStyle: 'dashed',
                      borderBottomWidth: 1,
                    }}>
                    <Text
                      style={{color: '#000', fontSize: 15, marginVertical: 10}}>
                      Student Test
                    </Text>

                    <View
                      style={{
                        backgroundColor: '#fff',
                        alignSelf: 'center',
                        alignContent: 'center',
                        borderRadius: 10,
                        color: '#000',
                        padding: 10,
                        justifyContent: 'center',
                        width: '95%',
                      }}>
                      <Text style={{color: '#000', alignSelf: 'center'}}>
                        {this.state.Report.test}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            )}
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  HeaderView: {
    // width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#3c2365',
    elevation: 22,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
