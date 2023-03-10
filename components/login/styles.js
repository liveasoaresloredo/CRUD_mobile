import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    texto1:{
        fontSize: 25,
        padding: '10px',
    },
    loginE:{
        fontSize: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,  
        marginBottom: '5px',  
    },
    loginS:{
        fontSize: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,   
        marginBottom: '5px', 
    },
    buttons:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        padding:'10px',
    },
    submit:{
        width:'60px',
        backgroundColor:'gray',
        borderWidth:2,
        textAlign: 'center',
        fontSize: 25,
        borderRadius: '5px',
        marginLeft:'4px'
    },

})

export default styles