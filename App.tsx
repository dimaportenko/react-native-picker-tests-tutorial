import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, Platform, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  const [modalVisible, setModalVisible] = useState(false);


  const renderPicker = () => (
        <Picker
          placeholder="Select a language"
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Ruby" value="ruby" />
        </Picker>
  )

  const renderPickerContainer = () => {
    if (Platform.OS === "android") {
      return (
        <View style={{minWidth: '50%'}}>
          {renderPicker()}
        </View>
      );
    } else {
      return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              {renderPicker()}
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderPickerContainer()}
      {Platform.OS === "ios" && (
        <>
          <Button title="Open Picker" onPress={() => setModalVisible(true)} />
          <Text style={styles.label}>{selectedValue}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    width: "80%",
  },
});
