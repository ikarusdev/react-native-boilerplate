import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 20,
  },

  footer: {
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#000",
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
  },

  inputView: {
    borderColor: "#000",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    height: 45,
    marginBottom: 20,
    width: "90%",
  },

  oauthView: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 20,
    width: "90%",
  },

  primaryButton: {
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 5,
    color: "#ffffff",
    height: 50,
    justifyContent: "center",
    marginTop: 40,
    width: "90%",
  },

  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  secondaryButton: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
  },

  secondaryButtonText: {
    color: "#000",
    fontWeight: "bold",
  },

  textInput: {
    flex: 1,
    height: 50,
    marginLeft: 20,
    padding: 10,
  },

  titleText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
})
