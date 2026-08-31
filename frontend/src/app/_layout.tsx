import "../global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Slot, useRouter, usePathname } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { TokenProvider } from "@Providers/TokenProvider";
import { ThemeProvider, useTheme } from "@Providers/ThemeProvider";

function ThemedApp() {
  const { themePreference } = useTheme();

  return (
    <GluestackUIProvider mode={themePreference}>
      <Provider store={store}>
        <TokenProvider>
          <Slot/>
        </TokenProvider>
      </Provider>
    </GluestackUIProvider>
  );
}

export default function Layout() {

  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
