import { Theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    V1: {
        height: 20,
        width: '60%',
        backgroundColor: Theme.colors.blue_800,
        borderTopLeftRadius: 20,
    },
    Cont: {
        width: '100%',
        alignItems: 'flex-end',
    },
    V2: {
        height: 60,
        width: '75%',
        backgroundColor: Theme.colors.blue_800,
        borderTopLeftRadius: 60
    },
    V3: {
        height: 50,
        width: '90%',
        backgroundColor: Theme.colors.blue_800,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 5
    }
})