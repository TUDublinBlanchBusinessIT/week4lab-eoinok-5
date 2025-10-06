import { SafeAreaView, Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': .75, 'B': 3, 'B+': 3.5,  'A': 4 };
  var totalGradeScores = 0;
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  
  var gpa=0;
  var credits=5;
  var sswdgpa=20;
  var totalPossibleCredits = 10;
  
  function clickMe(){
    //alert("this is the click me button"); //alert for web
    Alert.alert("this is the click me button"); //alert for phone
    //get the studnet's gradePointsfor SSWD, multiply it by the credits 
    //sswdgpa = gradePoints[{sswd}]*credits;
    
    alert("hello");
    //add the result to totalGradeScores - as an accumulator variable
    totalGradeScores = totalGradescores + (gradePoints[sswd]*credits);
    //get the studnet's gradePointsfor Ob, multiply it by the credits
    //add the result to totalGradeScores - as an accumulator variable
    totalGradeScores = totalGradescores + (gradePoints[ob]*credits);
    
    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
    gpa = totalGradeScores/10;

    //Output the calculated GPA result to the user using an alert
    alert("GPA is ");

  }

  const styles = StyleSheet.create({
    container: {
      justifyContent: "row",
      flex: 1,
    },
    label:{
      marginLeft: "5%",
      marginTop: "2%",
      textAlign: "right",
      flex: 1

    },
    textinput: {
      flex: 1,
      marginLeft: "2%",
      marginRight: "5%",
      padding: "2%",
      borderRadius: "5px",
      border: "1px solid black",
      minWidth: "25%",
      backgroundColor: "aliceblue"
    },
    row: {  
      flexDirection: "row",
      marginBottom: "0%",
      marginTop: "2%",
    }
    });

  return (
    <SafeAreaView styles={styles.container}>
      <Text>SSWD GPA = {sswdgpa}</Text>
      <View style={styles.row} >
        <Text style={styles.label}>SSWD</Text>
        <TextInput style={styles.textinput} placeholder="Grade" onChangeText={setSswd}/>
      </View>
      <View style={styles.row} >
      <Text style={styles.label}>Organisational Behaviour</Text>
      <TextInput style={styles.textinput} placeholder="Grade" onChangeText={(val) => setOB(val)}/>
      </View>
      <Button title="submit" onPress={clickMe}/>
    </SafeAreaView>
  );
}

