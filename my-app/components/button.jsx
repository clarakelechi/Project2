import { TouchableOpacity, Text } from "react-native";






const Button= () =>{
    return(
            
        <TouchableOpacity style={{backgroundColor:'purple', height:50, borderRadius:12, justifyContent:'center' }}>

            <Text style={{alignSelf:'center'}}>Click me</Text>
        
        </TouchableOpacity>
    )
}



export default Button;