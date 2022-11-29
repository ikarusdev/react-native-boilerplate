import * as React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo"
import { log } from "../../logger"
import { RootStackScreenProps } from "../../types"
import { colors } from "../theme"

export default function SafeMyProfileScreen(props: RootStackScreenProps<"MyProfile">) {
  return (
    <>
      <SignedIn>
        <MyProfileScreen {...props} />
      </SignedIn>
      <SignedOut>
        <View style={styles.container}>
          <Text>Unauthorized</Text>
        </View>
      </SignedOut>
    </>
  )
}

function MyProfileScreen(_props: RootStackScreenProps<"MyProfile">) {
  const { getToken, signOut } = useAuth()
  const { user } = useUser()

  const [sessionToken, setSessionToken] = React.useState("")

  const onSignOutPress = async () => {
    try {
      await signOut()
    } catch (err) {
      // @ts-ignore
      log("Error:> " + (err.errors ? err.errors[0].message : err))
    }
  }

  React.useEffect(() => {
    const scheduler = setInterval(async () => {
      const token = await getToken()
      setSessionToken(token)
    }, 1000)

    return () => clearInterval(scheduler)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {user?.firstName}</Text>
      <TouchableOpacity onPress={onSignOutPress} style={styles.link}>
        <Text style={styles.linkText}>Sign out</Text>
      </TouchableOpacity>
      <Text style={styles.token}>{sessionToken}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: colors.text,
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  token: {
    fontSize: 15,
    marginTop: 15,
    paddingVertical: 15,
  },
})
