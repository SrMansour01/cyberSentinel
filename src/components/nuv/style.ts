import { Theme } from "@/global/theme";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    Cont: {
        height: 50,
        width: '90%',
        backgroundColor: Theme.colors.blue_800,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 5
    },
    V2: {
        height: 60,
        width: '75%',
        backgroundColor: Theme.colors.blue_800,
        borderBottomRightRadius: 60
    },
    V3: {
        height: 20,
        width: '60%',
        backgroundColor: Theme.colors.blue_800,
        borderBottomRightRadius: 20,
    }
})