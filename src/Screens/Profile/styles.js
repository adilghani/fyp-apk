import { StyleSheet } from "react-native";
import { maintitle, WhiteColor } from "../../Utils/ColorScheme/Colors";
import { Medium } from "../../Utils/FontFamily/Fonfamily";

const styles=StyleSheet.create({
    main:{
        flex:1,backgroundColor:WhiteColor
    },
    title:{
        fontSize:18,fontFamily:Medium,color:maintitle,marginTop:10
    },
    cardcon:{
        marginHorizontal:20,
        marginTop:30
    },
    persolacon:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",marginBottom:30

    },
    persolaltitle:{
        fontSize:18,fontFamily:Medium,color:maintitle
    }
})
export default styles