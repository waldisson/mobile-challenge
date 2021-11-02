import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.heading,
  },
  imageDetails: {
    width:'100%',
    height:234
  },
  imageContent: {
    flex:1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginBottom:30,
  },
  title: {
    fontSize:26,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize:20,
    color: theme.colors.grey,
    fontWeight: '400',
  }
});