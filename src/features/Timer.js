import { View, Text, StyleSheet, Vibration } from 'react-native'
import React, { useState } from 'react'
import { Countdown } from '../components/Countdown'
import { RoundedButton } from '../components/RoundedButton'
import { Spacing } from '../utils/sizes'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ProgressBar } from 'react-native-paper'
import Timing from './Timing'
import { useKeepAwake } from 'expo-keep-awake'

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
]

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
    useKeepAwake();
    const [isStarted, setIsStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.2)

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN)
        setIsStarted(false)
        setProgress(1)
        reset();
        onTimerEnd(focusSubject)
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd} />
                <View style={{ paddingTop: Spacing.xxl }}>
                    <Text style={styles.title}>Focusing On:</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{ paddingTop: Spacing.sm }}>
                <ProgressBar progress={progress} color={Colors.progressBar} style={{ height: Spacing.sm }} />
            </View>
            <View style={styles.timingWrapper}>
                <Timing onChangeTime={setMinutes} />
            </View>
            <View style={styles.buttonWrapper}>
                {
                    !isStarted && <RoundedButton title="start" onPress={() => setIsStarted(true)} />
                }
                {
                    isStarted && <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
                }

            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton size={50} title='-' onPress={clearSubject} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        marginTop: 20
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.md
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    timingWrapper: {
        flex: 0.1,
        paddingTop: Spacing.xxl,
        flexDirection: 'row'
    },
    title: {
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    task: {
        color: Colors.white,
        textAlign: 'center'
    }
})

export default Timer