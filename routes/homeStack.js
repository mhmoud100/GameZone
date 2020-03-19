import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";

const screens = {
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);