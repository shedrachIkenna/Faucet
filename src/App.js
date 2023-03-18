import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import HomePage from "./components/HomePage";

const alchemyId = process.env.REACT_APP_ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Dapp",
    alchemyId,
  }),
);

const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <HomePage />
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default App