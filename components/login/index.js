import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native';
import styles from './styles';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Login
            </Text>
            <View>
                <TextInput  placeholder='E-mail' autoComplete='email' autoCapitalize='none' style={styles.loginE}></TextInput>
                <TextInput  placeholder='Senha' secureTextEntry={true} style={styles.loginS}></TextInput>
                
            <View style={styles.buttons}>
                <TouchableOpacity onPress={Button} style={styles.submit}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.submit}>
                    <Text>Cadastro</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}