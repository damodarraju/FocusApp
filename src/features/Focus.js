import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { colors } from '../utils/colors'
import { RoundedButton } from '../components/RoundedButton'
import { Spacing } from '../utils/sizes'

const Focus = ({ addSubject }) => {

    const [subject, setSubject] = useState(null)

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} onChangeText={setSubject} label={"What would you like to focus on?"} />
                <View style={styles.button}>
                    <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    textInput: {
        flex: 1,
        marginRight: Spacing.sm
    },
    button: {
        justifyContent: 'center'
    },
    inputContainer: {
        padding: Spacing.lg,
        justifyContent: 'top',
        flexDirection: 'row'
    },
})

export default Focus