import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:20,
    marginTop:5,
  },
  title: {
    color:theme.colors.white,
    fontWeight: 'bold',
    fontSize:18,
    marginTop:10
  },
  bioTitle: {
    fontSize:16,
  },
  description: {
    color:theme.colors.grey,
    margin:7
  },
  groupDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:10
  },
  biogroupInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:10,
    paddingTop:5,
    flexWrap:'wrap',
  },
  bioGroup: {
    backgroundColor: theme.colors.white,
    marginTop:10,
    borderRadius:10,
    paddingVertical:10,
    marginBottom:15,
  },
  bioText: {
    color:theme.colors.bluePower,
    paddingLeft:5,
    flex:1,
    marginLeft:5,
    textAlign:'justify',
    marginRight:20,
  }

});