import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import { Link } from "@react-navigation/native";
import styles from "./styles";

export default function RegisterPage()
{
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/imagens/logo.png')} style={styles.imgLogo}/>
            <TextInput placeholder= "Email" style={styles.input}/>
            <TextInput placeholder= "Username" style={styles.input}/>
            <TextInput placeholder= "Senha" style={styles.input}/>
            <TouchableOpacity style={styles.btnLogin}>
                <Text>Registrar</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
            <Link to={{screen: "LoginPage"}}>Voltar para o Login</Link>
            <Link to={{screen: "ForgetPassword"}}>Esqueceu a senha?</Link>
        </View>
    </View>
    )
}