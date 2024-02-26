import React from "react";
import { TouchableOpacity, ToastAndroid, View } from "react-native";
import * as Sharing from 'expo-sharing';
import { Feather } from '@expo/vector-icons';

export default function ShareBtn() {
    const shareScannedImage = async (shareUrl: any) => {
        if ( await Sharing.isAvailableAsync() ) {
            Sharing.shareAsync(shareUrl, {
                dialogTitle: 'Share this File'
                // mimeType: 
            });
            ToastAndroid.show('Sharing file', ToastAndroid.SHORT)
        } else {
            ToastAndroid.show('Sharing not available in this device', ToastAndroid.SHORT)
        }
    }
    return(
        <TouchableOpacity>
            <Feather name="share-2" size={24} color="black" />
        </TouchableOpacity>
    )
}
