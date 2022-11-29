// This is the entry point if you run `yarn expo:start`
// If you run `yarn ios` or `yarn android`, it'll use ./index.js instead.
import App from "./app/App.tsx"
import React from "react"
import { registerRootComponent } from "expo"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

function G2EApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

registerRootComponent(G2EApp)
export default G2EApp
