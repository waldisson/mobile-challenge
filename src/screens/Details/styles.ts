import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.heading,
  },
  imageDetails: {
    width:'100%',
    height:300
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
    backgroundColor: theme.colors.blackLight,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    paddingLeft:10
  },
  subTitle: {
    fontSize:20,
    color: theme.colors.grey,
    fontWeight: '400',
    backgroundColor: theme.colors.blackLight,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    paddingLeft:10
  }
});