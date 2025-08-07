import { Accessor, Show } from "solid-js";
import Button from "./Button"
import CheckBox from "./CheckBox";

type SettingsModalProps = {
  visible: Accessor<boolean>
  toggleModal: () => any
}

export default function SettingsModal({ visible, toggleModal }: SettingsModalProps) {
  console.log(visible())
  return (
    <Show when={visible()}>
      <div class="fixed w-screen h-screen bg-[#000a] top-0 z-50 flex justify-center items-center ">
        <div class="border-2 w-9/12 flex justify-center flex-col items-center bg-[#010a13]">
          <div class="py-10">
            <div class="flex-row">
              <input class="border-1 px-2 py-[5px] text-border" disabled placeholder="LeagueClient.exe" />
              <Button>Selecionar Cliente</Button>
            </div>
            <CheckBox title="Habilitar sons" />
          </div>
          <Button onClick={toggleModal} class="-mb-[1px]">PRONTO</Button>
        </div>
      </div>
    </Show>)
}