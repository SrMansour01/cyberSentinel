import { Nuv } from "@/components/nuv/nuv";
import { NuvB } from "@/components/NuvBottom/NubBottom";
import { Theme } from "@/global/theme";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Pin () {
    return (
        <SafeAreaView style={Style.Cont} >
            <Nuv/>
            <View style={Style.Center}>
                <View style={Style.VCenter}>
                    <View style={Style.Header}>
                        <Text style={Style.Title}>Insira seu Pin</Text>
                        <Text style={Style.subTitle}>Para sua seguramas pedimos para nn compartilhar esse Pin com outras pessoas</Text>
                    </View>
                    <View style={Style.MCenter}>
                        <View style={Style.Pin}></View>
                        <View style={Style.Pin}></View>
                        <View style={Style.Pin}></View>
                        <View style={Style.Pin}></View>
                    </View>
                    <View style={Style.Esq}>
                        <Text style={Style.txtEsq}>Esqueceu o Pin</Text>
                        <Link href={"/Pin/Esque"}><Text>trocar Pin</Text></Link>
                    </View>
                </View>
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
    VCenter: {
        height: '60%',
        width: '70%',
        backgroundColor: "white",
        borderRadius: 20,
    },
    Header: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginTop: '5%'
    },
    Title: {
        fontSize: 25,
        fontWeight: '800',
        marginBottom: '5%'
    },
    subTitle: {
        textAlign: 'center',
    },
    MCenter: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: '10%',
        marginTop: '5%'
    },
    Pin: {
        height: 50,
        width: 50,
        backgroundColor: Theme.colors.gray_200,
        borderRadius: 10
    },
    Esq: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})