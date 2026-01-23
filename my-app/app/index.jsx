import { SafeAreaView, Text, TouchableOpacity , TextInput, Pressable} from "react-native";
import Button from "../components/button";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        backgroundColor:'white',
        flex:1
        
      }}
    >
      <Text style={{color:'red', fontWeight:900, alignSelf:'center', height:300}}>Hello World hi!</Text>
      <TextInput placeholderTextColor={'black'} placeholder="Name" style={{ backgroundColor:'green', borderRadius:10, height:50, marginTop:10,paddingRight:20, fontFamily:'Arial',paddingLeft:20}}/>

      <TouchableOpacity>
        <Text style={{backgroundColor:'red', color:'white', borderRadius:10, height:50, alignItems:'center',marginTop:10, padding:10}}> Stign In</Text>
      </TouchableOpacity>

    
    <Button/>

    </SafeAreaView>
  );
}
