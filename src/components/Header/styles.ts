import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:15,
    paddingHorizontal:20,
    marginTop: getStatusBarHeight() + 20,
  },
  input: {
    height: 40,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    backgroundColor: theme.colors.white,
    paddingLeft:10,
    width:'100%',
    maxWidth:294,
  },
  searchButton: {
    backgroundColor:theme.colors.primary,
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    paddingHorizontal:10,
  }

});