import { StyleSheet } from "react-native";
import { theme } from "../../themes/global";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.backgroundGrey,
    position: "relative",
  },

  contentArea: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    marginVertical: 30,
  },
  subtitle: {
    color: "white",
    maxWidth: "90%",
    lineHeight: 24,
  },

  button: {
    position: "absolute",
    bottom: 75,
    right: 75,
  },

  textButton: {
    color: theme.primary,
    fontSize: 24,
  },
});

export default styles;
