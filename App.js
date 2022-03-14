import React from "react";
import { Button, PermissionsAndroid, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

// // CALENDAR
// READ_CALENDAR: 'android.permission.READ_CALENDAR'
// WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR'

// // CAMERA
// CAMERA: 'android.permission.CAMERA'

// // CONTACTS
// READ_CONTACTS: 'android.permission.READ_CONTACTS'
// WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS'

// // LOCATION
// ACCESS_BACKGROUND_LOCATION: 'android.permission.ACCESS_BACKGROUND_LOCATION'

// // AUDIO
// RECORD_AUDIO: 'android.permission.RECORD_AUDIO'

// // CALL
// CALL_PHONE: 'android.permission.CALL_PHONE'

// // SMS
// SEND_SMS: 'android.permission.SEND_SMS'
// RECEIVE_SMS: 'android.permission.RECEIVE_SMS'
// READ_SMS: 'android.permission.READ_SMS'

// // STORAGE
// READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE'
// WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE'

const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "storage Permission",
        message:
          "App needs access to your storage " ,
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the storage");
    } else {
      console.log("storage permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestCalenderPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALENDAR,
      {
        title: "Calender Permission",
        message:
          "App needs access to your calender " ,
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the calender");
    } else {
      console.log("calender permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission",
        message:
          "App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestContactsPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        title: "App Contacts Permission",
        message:
          "App needs access to your Contacts ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the Contacts");
    } else {
      console.log("Contacts permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestAudioPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "App Audio Permission",
        message:
          "App needs access to your Audio ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the Audio");
    } else {
      console.log("Audio permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
      {
        title: "App Location Permission",
        message:
          "App needs access to your Location ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the Location");
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <ScrollView style={styles.scrollView}>
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Text style={styles.item}>Camera permission</Text>
    <Button title="request camera permissions" onPress={requestCameraPermission} />
    <Text style={styles.item}>Calender permission</Text>
    <Button title="request calender permissions" onPress={requestCalenderPermission} />
    <Text style={styles.item}>Contact permission</Text>
    <Button title="request contact permissions" onPress={requestContactsPermission} />
    <Text style={styles.item}>Location permission</Text>
    <Button title="request location permissions" onPress={requestLocationPermission} />
    <Text style={styles.item}>Audio permission</Text>
    <Button title="request audio permissions" onPress={requestAudioPermission} />
    <Text style={styles.item}>Storage permission</Text>
    <Button title="request storage permissions" onPress={requestStoragePermission} />
  </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  scrollView: {
    marginHorizontal: 20,
  }
});

export default App;