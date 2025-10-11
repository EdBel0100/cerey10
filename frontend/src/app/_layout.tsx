import "../global.css";
import "@/src/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { TokenProvider } from "@Providers/TokenProvider";


export default function Layout() {
  return (
  <GluestackUIProvider mode="light">
      <Provider store={store}>
        <TokenProvider>
         <Slot />
        </TokenProvider>
        </Provider>
    </GluestackUIProvider>
  )
}
