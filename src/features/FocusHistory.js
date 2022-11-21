import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { fontSizes, Spacing } from '../utils/sizes';

const FocusHistory = ({ history }) => {

    if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

    const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thing we've focused on:</Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: Spacing.md,
        flex: 1
    },
    item: {
        fontSize: fontSizes.md,
        color: colors.white,
        paddingTop: Spacing.sm
    },
    title: {
        color: colors.white,
        fontSize: fontSizes.md,
        padding: Spacing.sm,
        fontWeight: 'bold'
    }
})

export default FocusHistory