import { Platform, StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    headerDescription: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 30,
    },
    title: {
        fontSize: 56,
        fontFamily: theme.fonts.title700,
        color: "#FFFFFF",
    },
    groupButtons: {
        width: '100%',
        height: 500,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.highlight,
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    registration: {
        marginTop: 20,
        color: "#4d5156",
    },
    linkSubscribe: {
        color: "#1877f2",
        fontSize: 14,
        paddingLeft: 10,
    },
    buttonLogin: {
        width: '80%',
        height: 60,
        backgroundColor: theme.colors.primary,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: 8,

        marginTop: 30,
    },
    textButtonLogin: {
        fontFamily: theme.fonts.title700,
        color: "#FFFFFF",
        fontSize: 18,
    },
})

export default styles