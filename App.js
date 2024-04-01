import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions,
  Animated,
  Easing,
  Modal,
  ToastAndroid,
  NativeModules,
  ActivityIndicator,
  ImagePickerIOS,
  ImagePropTypes
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import  ContactUs from './src/ContactUs'
// import Setting from './src/Settings'
// import TermsAndConditions from './src/TermsAndConditions';
import Test from './src/Test'
import Home from './src/Home';
import Classes from './src/Classes';
import Groups from './src/Groups';
import Student_Service from './src/Student_Service';
import Students from './src/Students';
import Student_Profile from './src/Student_Profile';
import Accounts from './src/Accounts';
import Notice from './src/Notice';
import Student_Report from './src/Student_Report'
import Student_Mounthly_Reports from './src/Student_Mounthly_Reports'
import Student_Daily_Reports from './src/Student_Daily_Reports'
import Teachers from './src/Teachers'
import Teacher_Profile from './src/Teacher_Profile'
import Teacher_Classes from './src/Teacher_Classes'
import Teacher_Accounts from './src/Teacher_Accounts'
import Teacher_Work_Hours from './src/Teacher_Work_Hours'
import money_expenses from './src/money_expenses'
import Accounting_Services from './src/Accounting_Services'
import Student_expenses from './src/Student_expenses'
import Teacher_expenses from './src/Teacher_expenses'
import Group_Monthly_Report from './src/Group_Monthly_Report'
import Group_daily_Report from './src/Group_daily_Report'
import Group_Report from './src/Group_Report'
import AllStudents from './src/AllStudents'
import AllStudent_profile from './src/AllStudent_profile'
import Teacher_Services from './src/Teacher_Services'
import QrCode_Scanner from './src/QrCode_Scanner'
import AttendenceHistory from './src/AttenedenceHistory';
import Classes_updata from './src/Classes_update';
// import Teacher_Services from './src/Teacher_Services';
import Reports_Services from "./src/Reports_Services";
import Reports_type from "./src/Reports_type"
import Monthly_Report from "./src/Monthly_Report"
import Monthly_student_absence from "./src/Monthly_student_absence"
import Daily_student_absence from "./src/Daily_student_absence"
import Total_Report from "./src/Total_Report"
import Monthly_Total_Report from "./src/Monthly_Total_Report"
import Month_for_total_reports from "./src/Month_for_total_reports"
import Daily_Total_Report from "./src/Daily_Total_Report"
import Teacher_permassion from "./src/Teacher_permassion"
// import Total_student_absence from "./src/Total_student_absence"
import Monthly_expenses from "./src/Monthly_expenses"
import Book_expenses from "./src/Book_expenses"
import Month_student_expenses from "./src/Month_student_expenses"
import Another_Expenses from "./src/Another_Expenses"
import Months_for_permissions from "./src/Months_for_permissions"
import All_teacher_permissons from "./src/All_teacher_permissons"
import Daily_Teacher_Permission from "./src/Daily_Teacher_Permission"
import Unpaid_expenses from "./src/Unpaid_expenses"
import { createStackNavigator } from 'react-navigation-stack';
import Student_absence_profile from "./src/Student_absence_profile"
import Attendance_Reports from "./src/Attendance_Reports"
import Teacher_payment_month from "./src/Teacher_payment_month"
import Money_expenses_month from "./src/Money_expenses_month"
import Classvisit from "./src/Classvisit"
import QuVisit from "./src/QuVisit"
import Visitdetils from "./src/Visitdetils"
import AllActivetys from "./src/AllActivetys"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      <>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
        {/* <ContactUs/> */}
        {/* <Setting/> */}
        {/* <TermsAndConditions/> */}
        {/*////////////////////////////////////////* */}
        {/* <Admin/> */}
        {/* <Students/> */}
        {/* <Student_Profile/> */}
        {/* <Home_Page/> */}
      </>

    )
  }

}


const HomePages = createStackNavigator(
  {
    Home: {
      screen: Home
    },

    Student_Service: {
      screen: Student_Service,
    },
    Classes: {
      screen: Classes,
    },
    Groups: {
      screen: Groups
    },
    Students: {
      screen: Students,
    },
    Student_Profile: {

      screen: Student_Profile
    },
    Accounts: {
      screen: Accounts
    },
    Notice: {
      screen: Notice
    },
    Student_Report: {
      screen: Student_Report
    },
    Student_Mounthly_Reports: {
      screen: Student_Mounthly_Reports
    },
    Student_Daily_Reports: {
      screen: Student_Daily_Reports
    },
    money_expenses: {
      screen: money_expenses
    },
    Accounting_Services: {
      screen: Accounting_Services
    },
    Student_expenses: {
      screen: Student_expenses
    },
    Teacher_expenses: {
      screen: Teacher_expenses
    },
    AllStudents: {
      screen: AllStudents
    },
    AllStudent_profile: {
      screen: AllStudent_profile
    },




    //////////////////////////////////////////

    Teachers: {
      screen: Teachers
    },
    Teacher_Profile: {
      screen: Teacher_Profile
    }, Teacher_Classes: {
      screen: Teacher_Classes
    },
    Teacher_Accounts: {
      screen: Teacher_Accounts
    },
    Test: {
      screen: Test
    },
    Teacher_Work_Hours: {
      screen: Teacher_Work_Hours
    },
    Group_Monthly_Report: {
      screen: Group_Monthly_Report
    },
    Group_daily_Report: {
      screen: Group_daily_Report
    },
    Group_Report: {
      screen: Group_Report
    },
    Teacher_Services: {
      screen: Teacher_Services
    },
    QrCode_Scanner: {
      screen: QrCode_Scanner
    },
    AttendenceHistory: {
      screen: AttendenceHistory
    },
    Classes_update: {
      screen: Classes_updata
    },
    Reports_Services: {
      screen: Reports_Services
    },
    Reports_type: {
      screen: Reports_type
    },
    Monthly_Report: {
      screen: Monthly_Report
    },
    Monthly_student_absence: {
      screen: Monthly_student_absence
    },
    Daily_student_absence: {
      screen: Daily_student_absence
    },
    Total_Report: {
      screen: Total_Report
    },
    Monthly_expenses: {
      screen: Monthly_expenses
    },
    Book_expenses: {
      screen: Book_expenses
    },
    Month_student_expenses: {
      screen: Month_student_expenses
    },
    Another_Expenses: {
      screen: Another_Expenses
    },
    Monthly_Total_Report: {
      screen: Monthly_Total_Report
    },
    Month_for_total_reports: {
      screen: Month_for_total_reports
    },
    Daily_Total_Report: {
      screen: Daily_Total_Report
    },
    Teacher_permassion: {
      screen: Teacher_permassion
    },
    Months_for_permissions: {
      screen: Months_for_permissions
    },
    All_teacher_permissons: {
      screen: All_teacher_permissons
    },
    Daily_Teacher_Permission: {
      screen: Daily_Teacher_Permission
    },
    Student_absence_profile: {
      screen: Student_absence_profile
    },
    Unpaid_expenses: {
      screen: Unpaid_expenses
    },
    Attendance_Reports: {
      screen: Attendance_Reports
    },
    Teacher_payment_month: {
      screen: Teacher_payment_month
    },
    Money_expenses_month: {
      screen: Money_expenses_month
    },
    Classvisit: {
      screen: Classvisit
    },
    QuVisit: {
      screen: QuVisit
    },
    Visitdetils: {
      screen: Visitdetils
    }
    ,
    AllActivetys: {
      screen: AllActivetys
    }







  },
  { headerMode: 'none' },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // App: SummaryList,
      App: Home,

      HomePages: HomePages,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

