import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../components/Home'
import AddGame from '../components/AppComponenst/AddGame'
import ShowAll from '../components/AppComponenst/ShowAll'
const screens = {
    Hello: {
        screen: Home,
    },
    AddGame: {
        screen: AddGame,
        navigationOptions: {
            headerLeft: () => null
        }
    },
    ShowAll: {
        screen: ShowAll,
        navigationOptions: {
            headerLeft: () => null
        }
    }
    
}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);