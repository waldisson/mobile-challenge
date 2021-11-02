import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:104,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingTop: getStatusBarHeight(),
    paddingHorizontal:15,
  },
  title: {
    flex: 1,
    textAlign:'center',
    fontSize: 20,
    color: theme.colors.white
  }
});