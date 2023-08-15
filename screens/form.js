import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { globalStyles } from "../styles/globalstyles";

const ReviewSchema = Yup.object({
  title: Yup.string().required().min(4),
  Body: Yup.string().required().min(8),
  Rating: Yup.string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function Form({ onReview }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ title: "", Body: "", Rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          onReview(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {touched.title && errors.title && (
            <Text style={styles.errors}>{errors.title}</Text>
            )}
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review Body"
              onChangeText={handleChange("Body")}
              onBlur={handleBlur("Body")}
              value={values.Body}
            />
            {touched.Body && errors.Body && (
            <Text style={styles.errors}>{errors.Body}</Text>
            )}
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={handleChange("Rating")}
              onBlur={handleBlur("Rating")}
              value={values.Rating}
            />
            {touched.Rating && errors.Rating && (
            <Text style={styles.errors}>{errors.Rating}</Text>
            )}
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
    height: 800,
    marginTop: 30,
    //justifyContent: "center",
    //alignItem: "center",
  },

  errors: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: -6,
    textAlign: "center",
  },
});
