import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        height: 150
    },
    card:{
        width: 370,
        height:'90%',
        backgroundColor:'#FFF',
        marginBottom: 20,
        borderRadius:10
    },
    cardText:{
        margin: 20
    },
    btnSave:{
        left:200,
        width: 140,
        height: 50,
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40,
        display:'flex',
        flexDirection:'row',
        
    }
})

export default styles;