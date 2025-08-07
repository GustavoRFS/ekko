import { TrayIcon, TrayIconOptions } from "@tauri-apps/api/tray";
import { defaultWindowIcon, getName } from "@tauri-apps/api/app";
import { exit } from "@tauri-apps/plugin-process";
import { Menu } from "@tauri-apps/api/menu";
import { getAllWindows } from "@tauri-apps/api/window";

let tray: TrayIcon;

export default async function setupTray() {
  if (tray) {
    return tray;
  }

  const menu = await Menu.new({
    items: [
      {
        id: "quit",
        text: "Sair",
        action: () => {
          exit(0);
        },
      },
    ],
  });

  const options: TrayIconOptions = {
    icon: await defaultWindowIcon(),
    menu,
    async action(event) {
      if (event.type == "DoubleClick") {
        const windows = await getAllWindows();
        const mainWindow = windows.find((window) => window.label === "main");

        mainWindow?.show();
      }
    },
    showMenuOnLeftClick: false,
    tooltip: await getName(),
  };

  tray = await TrayIcon.new(options);

  return tray;
}
