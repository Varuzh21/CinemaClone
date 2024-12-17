import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AccountButton = ({ icon: Icon, rightIcon: RightIcon, label = 'Member', onPress }) => {
    return (
        <TouchableOpacity style={styles.accountButton} onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconBackground}>
                        {Icon && <Icon width={20} height={20} />}
                    </View>
                    <Text style={styles.accountButtonText}>{label}</Text>
                </View>
                <View style={styles.rightIconContainer}>
                    {RightIcon && <RightIcon />}
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default AccountButton;

const styles = StyleSheet.create({
    accountButton: {
        borderRadius: 8,
        backgroundColor: 'rgb(31, 29, 43)',
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    iconBackground: {
        width: 32,
        height: 32,
        borderRadius: 27,
        backgroundColor: 'rgb(37, 40, 54)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountButtonText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 14,
        // fontWeight: 500,
        lineHeight: 17,
        letterSpacing: 0.12
    },
    rightIconContainer: {
        width: 32,
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(31, 29, 43)',
        borderRadius: 27,
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: { width: 0, height: 17 },
        shadowOpacity: 0.16,
        shadowRadius: 55,
        elevation: 10,
    }
});
