import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width:'100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 10,
    position: 'absolute',
    bottom:0,
    width:'100%',
    height:220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  title: {
    color: theme.colors.white,
    marginTop:20,
    textAlign: 'center',
    fontSize: 28,
    fontWeight:'700',
  },
  botaoEntrar: {
    backgroundColor: theme.colors.background
  },

});
