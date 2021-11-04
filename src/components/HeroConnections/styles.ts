import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:20,
    marginBottom:10,
    marginTop:5,
  },
  title: {
    color:theme.colors.white,
    fontWeight: 'bold',
    fontSize:18,
    marginTop:10
  },
  workgroupInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:10,
    paddingTop:5,
    flexWrap:'wrap',
  },
  workGroup: {
    backgroundColor: theme.colors.white,
    marginTop:10,
    borderRadius:10,
    paddingVertical:10,
    marginBottom:15,
  },
  workText: {
    color:theme.colors.bluePower,
    paddingLeft:5,
    flex:1,
    marginLeft:5,
  }

});