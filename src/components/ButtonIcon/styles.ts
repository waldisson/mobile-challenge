import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: 56,
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor:theme.colors.terciary,
    borderRadius:8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupButton: {

  },
  title: {
    color:theme.colors.primary,
    fontSize:18,
    fontWeight:'700'
  }

});