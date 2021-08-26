import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
    },
    aereaSearch:{
        marginTop:20,
        height: 65,
        width: 350,
        backgroundColor:'#FFF',
        justifyContent:'center',
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        

    },
    search:{
        width: 280
    },

    containerOrg:{
       marginTop: 20,
       justifyContent:'center',
       alignItems:'center',
    },
    titlesOrgs:{
        justifyContent:'center',
        alignItems:'center',
        margin:20
    },
    btnSave:{
        backgroundColor:'#2196f3',
        width: 200,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60,
        flexDirection:'row',
        marginLeft: 150,
        top: -20
    },
    textBtn:{
        color:'#FFF',
        fontSize: 16,
        marginEnd:20
    }
})

export default styles

