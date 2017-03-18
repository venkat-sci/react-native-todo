
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './todo';
class Todo extends Component {
  state = {
    noteArray:[],
    noteText:'',
  }
  render() {
    let notes = this.state.noteArray.map((val,key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key) } />
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext} >ToDo App</Text>
        </View>
        <ScrollView style={styles.ScrollContainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer} >
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}> + </Text>
          </TouchableOpacity>
          <TextInput style={styles.textinput} onChangeText={(noteText) => this.setState({noteText}) }
          value={this.state.noteText}
          placeholder="> Note"></TextInput>
        </View>
      </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(),'note':this.state.noteText});
      this.setState({noteArray:this.state.noteArray});
      this.setState({'noteText':''});
    }
  }
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headertext: {
    color: '#333333',
    fontSize:18,
    padding:20,
  },
  ScrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    alignItems:'center',
    bottom:0,
    left:0,
    right:0,
  },
  addButton:{
    backgroundColor:'#E92E64',
    width:90,
    height:90,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-45,
    zIndex:10,
  },
  addButtonText:{
    color:'#fff',
    fontSize:24,
  },
  textinput:{
    alignSelf:'stretch',
    color:'#fff',
    padding:15,
    paddingTop:56,
    backgroundColor:'#252525',
    borderTopWidth:22,
    borderTopColor:'#ededed',
  }
});

export default Todo;
