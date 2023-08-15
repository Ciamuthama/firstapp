import React from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/globalstyles";

export default function Form() {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", Body: "", rating: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review Body"
              onChangeText={handleChange("Body")}
              onBlur={handleBlur("Body")}
              value={values.Body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Review Review"
              onChangeText={handleChange("Review")}
              onBlur={handleBlur("Review")}
              value={values.Review}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 900,
    marginBottom: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItem: "center",
  },
});
