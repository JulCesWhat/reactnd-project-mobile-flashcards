import { AsyncStorage } from "react-native";
import { Notifications } from "expo";

import * as Permissions from "expo-permissions";
import { primary } from "./colors";

const STORAGE_KEY = "NOTIFICATION";
const NOTIFICATION_CHANNEL_ID = "QUICK_REMAINDERS";

export function clearLocalNotification() {
    return AsyncStorage.removeItem(STORAGE_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
}

function createNotification() {
    return {
        title: "Flashcards",
        body: "👋 Forgot to study? here's a quick remainder",
        ios: {
            sound: true,
        },
        android: {
            channelId: NOTIFICATION_CHANNEL_ID,
            sticky: false,
            color: primary,
        },
    };
}

export function createLocalNotification() {
    AsyncStorage.getItem(STORAGE_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status === "granted") {
                        Notifications.cancelAllScheduledNotificationsAsync();

                        const tomorrow = new Date();

                        tomorrow.setDate(tomorrow.getDate() + 1);
                        tomorrow.setHours(20);
                        tomorrow.setMinutes(0);

                        Notifications.scheduleLocalNotificationAsync(
                            createNotification(),
                            {
                                time: tomorrow,
                                repeat: "day",
                            }
                        );

                        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(true));
                    }
                });
            }
        });
}
