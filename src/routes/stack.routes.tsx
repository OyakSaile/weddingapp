import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeelingPage } from "../screens/feelingpage/FeelingPage";

const { Screen, Navigator } = createNativeStackNavigator();
import { Home } from "../screens/home/Home";
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="homePage"
        component={Home}
        options={{
          title: "Home Page",
        }}
      />

      <Screen name="feelingPage" component={Home} />
    </Navigator>
  );
}
