import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  divider: {
    width:'100%',
    height:1,
    backgroundColor: theme.colors.terciary,
    alignSelf: 'flex-end'
  }
});