import React from "react";
import { Formik, useField } from "formik";
import { TextInput, View, Button, StyleSheet } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";
import { loginValidationSchena } from "../validationSchemas/login";
import { NativeRouter } from 'react-router-native';
const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -5
    },
})

const FormikInputValue = ({ names, ...props }) => {
    const [field, meta, helpers] = useField(names)
    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}></StyledTextInput>
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>
    )
}


export default function LOgInPage() {
    return <Formik validationSchema={loginValidationSchena} initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({ handleSubmit }) => {
            return (
                <View style={styles.form}>
                    <FormikInputValue
                        names='email'
                        placeholder="E-mail"
                    ></FormikInputValue>
                    <FormikInputValue
                        secureTextEntry
                        names='password'
                        placeholder="Password"
                    ></FormikInputValue>
                    <Button onPress={handleSubmit} title='Login'></Button>
                </View>
            )
        }}
    </Formik>
}