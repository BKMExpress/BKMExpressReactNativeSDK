import React from 'react';
import {Button, SafeAreaView, View,} from 'react-native';
import BkmExpressReactNativeSdk from "bkm-express-react-native-sdk";

const App: () => Node = () => {
    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%", justifyContent: "center"}}>
            <View style={{height: "30%", justifyContent: "space-between",}}>
                <Button title={"Ödeme Yap"} onPress={onPaymentClicked} style={{marginBottom: 10}}/>
                <Button title={"Kart Eşleştir"} onPress={onSubmitConsumerClicked} style={{marginVertical: 50}}/>
                <Button title={"Kart Değiştir"} onPress={onResubmitConsumerClicked} style={{marginVertical: 50}}/>
            </View>
        </SafeAreaView>
    );
};

function onPaymentClicked() {
    BkmExpressReactNativeSdk.startBexPayment("Token will be given by BKM after the merchant integration",
        (posResult) => {
            console.log("Payment Success - token: " + posResult.token)
        },
        (errorId, errorMsg) => {
            console.log("Failure - errorId: " + errorId + " errorMsg: " + errorMsg)
        }
    );
}

function onSubmitConsumerClicked() {
    BkmExpressReactNativeSdk.submitConsumer("Token will be given by BKM after the merchant integration",
        (first6, last2) => {
            console.log("Payment Success - first6: " + first6 + " last2: " + last2)
        },
        (errorId, errorMsg) => {
            console.log("Failure - errorId: " + errorId + " errorMsg: " + errorMsg)
        }
    );
}

function onResubmitConsumerClicked() {
    BkmExpressReactNativeSdk.resubmitConsumer("Ticket will be given by BKM after the merchant integration",
        (first6, last2) => {
            console.log("Payment Success - first6: " + first6 + " last2: " + last2)
        },
        (errorId, errorMsg) => {
            console.log("Failure - errorId: " + errorId + " errorMsg: " + errorMsg)
        }
    );
}

export default App;
