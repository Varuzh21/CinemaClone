import { useEffect, useCallback } from 'react';
import { View, ScrollView, Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, } from 'react-native';
import { getUserRequest } from '../../store/actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { storage } from '../../utils/storage';
import { EditActive, Premium, ProfileActive, RightActive } from '../../assets/icons/active/index';
import { Secret, Badge, Language, Flag, Delete, Secure, Help, About } from '../../assets/icons/index'
import { Button, AccountButton } from '../../components/index';

const ProfileScreen = (onLogout) => {
    const dispatch = useDispatch();
    // const navigation = useNavigation();
    const userToken = storage.getString('userToken');

    useEffect(() => {
        dispatch(getUserRequest(userToken));
    }, [userToken]);

    const handleLogout = useCallback(async () => {
        storage.removeItem('userToken');

    }, [])

    const userSelector = useSelector(state => state.getUserReducer.user) || [];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.row}>
                        <Image
                            source={{ uri: userSelector.image }}
                            width={54}
                            height={54}
                        />
                        <View style={{ gap: 8 }}>
                            <Text style={styles.userName}>{userSelector.username}</Text>
                            <Text style={styles.userEmail}>{userSelector.email}</Text>
                        </View>
                        <TouchableOpacity>
                            <EditActive />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.headerArticle}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={styles.editBtn}>
                            <Premium fill="white" />
                        </TouchableOpacity>
                        <View style={{ width: '75%' }}>
                            <Text style={styles.premiumTitle}>Premium Member</Text>
                            <Text style={styles.premiumDow}>New movies are coming for you, {'\n'}Download Now!</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.account}>
                    <Text style={styles.accountTitle}>Account</Text>
                    <View style={styles.accountContainer}>
                        <AccountButton
                            icon={ProfileActive}
                            rightIcon={RightActive}
                            label="Member"
                        />
                        <View style={styles.borderContainer}>
                            <View style={styles.border} />
                        </View>
                        <AccountButton
                            icon={Secret}
                            rightIcon={RightActive}
                            label="Change Password"
                        />
                    </View>
                </View>

                <View style={styles.general}>
                    <Text style={styles.accountTitle}>General</Text>
                    <View style={styles.accountContainer}>
                        <AccountButton
                            icon={Badge}
                            rightIcon={RightActive}
                            label="Notification"
                        />
                        <View style={styles.borderContainer}>
                            <View style={styles.border} />
                        </View>
                        <AccountButton
                            icon={Language}
                            rightIcon={RightActive}
                            label="Language"
                        />
                        <View style={styles.borderContainer}>
                            <View style={styles.border} />
                        </View>
                        <AccountButton
                            icon={Flag}
                            rightIcon={RightActive}
                            label="Country"
                        />
                        <View style={styles.borderContainer}>
                            <View style={styles.border} />
                        </View>
                        <AccountButton
                            icon={Delete}
                            rightIcon={RightActive}
                            label="Clear Cache"
                        />
                    </View>
                </View>

                <View style={styles.more}>
                    <Text style={styles.accountTitle}>More</Text>
                    <View style={styles.accountContainer}>
                        <AccountButton
                            icon={Secure}
                            rightIcon={RightActive}
                            label="Legal and Policies"
                        />
                        <View style={styles.borderContainer}>
                            <View style={styles.border} />
                        </View>

                        <AccountButton
                            icon={Help}
                            rightIcon={RightActive}
                            label="Help & Feedback"
                        />
                        <View style={styles.borderContainer}>
                            <View style={styles.border} />
                        </View>

                        <AccountButton
                            icon={About}
                            rightIcon={RightActive}
                            label="About Us"
                        />
                    </View>
                </View>

                <View style={{ paddingTop: 40 }}>
                    <Button title="Log Out" handlerClick={handleLogout} />
                </View>
            </ScrollView>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(31, 29, 43)',
        paddingHorizontal: 16,
    },
    header: {
        width: '100%',
        height: 86,
        borderWidth: 1,
        borderColor: 'rgb(37, 40, 54)',
        borderRadius: 16,
        marginTop: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userName: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 16,
        // fontWeight: 600,
        lineHeight: 20,
        letterSpacing: 0.12,
    },
    userEmail: {
        color: 'rgb(177, 177, 177)',
        fontFamily: 'Montserrat',
        fontSize: 14,
        // fontWeight: 500,
        lineHeight: 17,
    },
    editBtn: {
        width: '15%',
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgb(255, 255, 255)',
        opacity: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerArticle: {
        width: '100%',
        height: 110,
        borderRadius: 16,
        backgroundColor: 'rgb(255, 135, 0)',
        paddingHorizontal: 24,
        paddingVertical: 24,
        marginTop: 24,
        flexDirection: 'row',
    },
    premiumTitle: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 16,
        // fontWeight: 600,
        lineHeight: 20,
        letterSpacing: 0.12
    },
    premiumDow: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 14,
        // fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0.12,
        opacity: 0.8
    },
    account: {
        width: '100%',
        height: 188,
        borderWidth: 1,
        borderColor: 'rgb(37, 40, 54)',
        borderRadius: 16,
        marginTop: 24,
        paddingVertical: 23,
        paddingHorizontal: 18
    },
    accountTitle: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 18,
        // fontWeight: 600,
        lineHeight: 22,
        letterSpacing: 0.12
    },
    accountContainer: {
        gap: 15,
        paddingTop: 24
    },
    borderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        width: '85%',
        borderWidth: 1,
        borderColor: 'rgb(37, 40, 54)',
    },
    accountButton: {
        paddingTop: 24
    },
    accountButtonText: {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Montserrat',
        fontSize: 14,
        // fontWeight: 500,
        lineHeight: 17,
        letterSpacing: 0.12
    },
    general: {
        width: '100%',
        height: 322,
        borderWidth: 1,
        borderColor: 'rgb(37, 40, 54)',
        borderRadius: 16,
        marginTop: 24,
        paddingVertical: 23,
        paddingHorizontal: 18
    },
    more: {
        width: '100%',
        height: 259,
        borderWidth: 1,
        borderColor: 'rgb(37, 40, 54)',
        borderRadius: 16,
        marginTop: 24,
        paddingVertical: 23,
        paddingHorizontal: 18
    }
})
