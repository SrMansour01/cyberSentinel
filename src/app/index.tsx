import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";

import { Nuv } from "@/components/nuv/nuv";
import { Theme } from "@/global/theme";
import "expo-dev-client"
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { NuvB } from "@/components/NuvBottom/NubBottom";
import { Link } from "expo-router";

export default function Splash () {

    const [ Info, setInfo ] = React.useState(false)

    const [seconds, setSeconds] = React.useState(10);

    React.useEffect(() => {
      // Função para iniciar o temporizador quando o componente for montado
      const startTimer = () => {
        const timer = setInterval(() => {
          setSeconds(prevSeconds => {
            if (prevSeconds <= 1) {
              clearInterval(timer);
              console.log("autenticado")
              setInfo(true)
              return 0; // Para garantir que o tempo não vá abaixo de 0
            }
            return prevSeconds - 1;
          });
        }, 1000);
      };
  
      // Inicia o temporizador assim que o componente é montado
      startTimer();
    }, []);

    return (
        <SafeAreaView style={Style.Cont}>

            <Modal
                transparent
                animationType="fade"
                visible={Info}
            >
                <View style={Style.Modal}>
                    <View style={Style.ViewM}>
                        <View style={Style.MHeader}>
                            <Text style={Style.MTxtHeader}>CyberSentinel</Text>
                            <Text style={Style.MAviso}>Aviso</Text>
                        </View>
                        <View style={Style.MIcon}>
                            <Ionicons name="speedometer-outline" size={100} color={'Black'}/>
                        </View>
                        <View style={Style.Info}>
                            <Text style={Style.txtInfo}>Percebemos que você está em movimento. Você é um passageiro?</Text>
                            <Text style={Style.txtInfo}>Obrigado!</Text>
                        </View>
                        <View style={Style.VButton}>
                            <Link push replace href={"/Pin"}  style={Style.BtnProg} >
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
                                    <Text style={Style.BTxtProg}>Sou um passageiro</Text>
                                </View>
                            </Link>
                        </View>
                    </View>
                </View>
            </Modal>

            <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent />
            <Nuv/>
            <View style={Style.Center}>
                <Text style={Style.TxtCenter}>Loading...</Text>
                <AntDesign name="loading1" size={40} color={"white"}/>
            </View>
            <NuvB/>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    Cont: {
        flex: 1,
        backgroundColor: Theme.colors.blue_600
    },
    Center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TxtCenter: {
        fontSize: 30,
        color: "white",
        marginBottom: 40
    },
    Modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 10,
    },
    ViewM: {
        height: '50%',
        width: '80%',
        backgroundColor: "white",
        borderRadius: 30,
    },
    MHeader: {
        height: '25%',
        width: '100%',
        backgroundColor: Theme.colors.blue_800,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MTxtHeader: {
        fontSize: 20,
        color: 'white'
    },
    MAviso: {
        color: 'white',
        opacity: 0.7,
        marginTop: 5
    },
    MIcon: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },
    txtInfo: {
        textAlign: 'center',
        marginTop: '5%'
    },
    Info: {
        height: '25%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    VButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    BtnProg: {
        height: '90%',
        width: '90%',
        backgroundColor: Theme.colors.green_700,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    BTxtProg: {
        color: "white",
        textAlign: 'center'
    }
})