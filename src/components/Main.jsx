import React from "react";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Switch, Redirect } from "react-router-native"
import { Route, Routes, Navigate } from "react-router-dom"
import LOgInPage from "../pages/Login";

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' element={<LOgInPage></LOgInPage>} />
                <Route exact path="/repo" element={<RepositoryList />} />
                <Route path="/test" element={<Text>muy pronto!!!</Text>} />

                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </View>

    )
}
export default Main