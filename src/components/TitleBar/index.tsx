
import MinimizeIcon from "@/assets/minimize-icon.png"
import CloseIcon from "@/assets/close-icon.png"
import SettingsIcon from "@/assets/settings-icon.png"
import HelpIcon from "@/assets/help-icon.png"
import TitleBarButton from "./TitleBarButton"
import { getCurrentWindow } from '@tauri-apps/api/window';
import SettingsModal from "../SettingsModal"
import { createSignal } from "solid-js"
import "./styles.css"

export default function TitleBar() {
  const handleMinimizeClick = () => {
    const appWindow = getCurrentWindow()
    appWindow.minimize()
  }

  const handleCloseClick = () => {
    const appWindow = getCurrentWindow()
    appWindow.hide()
  }

  const [settingsModalVisible, setSettingsModalVisible] = createSignal(false)


  const toggleModal = () => {
    console.log(settingsModalVisible());

    setSettingsModalVisible(prev => !prev)
  }

  return (<div class="fixed w-full">
    <div data-tauri-drag-region class="h-0.5 bg-[#785a28]" />
    <header data-tauri-drag-region class="h-18 flex justify-end title-bar">
      <div data-tauri-drag-region class="flex flex-row py-1">
        <TitleBarButton img={HelpIcon} onClick={console.log} className="p-[1px] pt-[3px]" />
        <TitleBarButton img={MinimizeIcon} onClick={handleMinimizeClick} />
        <TitleBarButton img={SettingsIcon} onClick={toggleModal} />
        <TitleBarButton img={CloseIcon} onClick={handleCloseClick} />
      </div>
    </header>
    <SettingsModal visible={settingsModalVisible} toggleModal={toggleModal} />
  </div>)
}