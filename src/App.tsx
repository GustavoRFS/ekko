import { createEffect } from "solid-js";
import Routes from "./routes";
import { setupDevices } from "./stores/PreferedDevicesStore";
import TitleBar from "./components/TitleBar";
import setupTray from "./misc/setupTray";
import CallDialog from "./components/CallDialog";

function App() {
  createEffect(() => {
    setupDevices();
    setupTray();
  });

  return (<div class="w-screen h-screen relative overflow-hidden bg-background select-none">
    <Routes />
    {/* <CallDialog /> */}
    <TitleBar />
  </div>
  );
}

export default App;
