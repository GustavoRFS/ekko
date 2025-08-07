import { createWithSignal } from "solid-zustand";

interface PreferedDeviceStoreType {
  inputDevices: MediaDeviceInfo[];
  outputDevices: MediaDeviceInfo[];
  preferedInput: MediaDeviceInfo | undefined;
  preferedOutput: MediaDeviceInfo | undefined;
  selectDevice: (type: "Input" | "Output") => any;
  setDeviceList: (type: "inputDevices" | "outputDevices") => any;
}

const preferedDeviceStore = createWithSignal<PreferedDeviceStoreType>(
  (set) => ({
    inputDevices: [],
    outputDevices: [],
    preferedInput: undefined,
    preferedOutput: undefined,
    selectDevice: (type) => set((state) => ({ [`prefered${type}`]: state })),
    setDeviceList: (type) => set((state) => ({ [type]: state })),
  })
);

const setupDevices = () => {
  const getDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();

    let filteredInputDevices: MediaDeviceInfo[] = [];
    let filteredOutputDevices: MediaDeviceInfo[] = [];

    devices.forEach((device) => {
      if (device.kind === "audioinput") {
        filteredInputDevices.push(device);
      } else if (device.kind === "audiooutput") {
        filteredOutputDevices.push(device);
      }
    });

    const { setDeviceList } = preferedDeviceStore.getState();

    setDeviceList("inputDevices")(filteredInputDevices);
    setDeviceList("outputDevices")(filteredOutputDevices);
  };

  getDevices();

  navigator.mediaDevices.addEventListener("devicechange", () => {
    getDevices();
  });
};

export { setupDevices };

export default preferedDeviceStore;
