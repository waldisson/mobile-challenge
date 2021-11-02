import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  glossary: {
    marginTop:-20,
    backgroundColor: theme.colors.primary,
    width:50,
    height:40,
    margin:6,
    borderRadius:5
  },
  glossaryTitle: {
    textAlign: 'center',
    color: theme.colors.white
  },
  glossaryValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.white
  }
});