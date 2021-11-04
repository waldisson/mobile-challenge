import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop:10,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    width:'100%',
    borderRadius:10,
  },
  body: {
    width:'75%',
    borderLeftColor:theme.colors.grey,
    borderLeftWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photo: {
    width: 64,
    height: 64,
    borderRadius:8,
    marginRight:10,
    marginLeft:10,
    margin: 5,
  },
  info: {
    justifyContent: 'center',
    width:'75%',
  },
  title: {
    marginLeft:10,
    fontSize:18,
    color: theme.colors.primary
  },
  subtitle: {
    marginLeft:10,
    color: theme.colors.heading,

  },
  arrow: {
    width: '18%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.grey,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  }
});