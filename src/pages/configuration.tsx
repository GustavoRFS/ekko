
import Button from '@/components/Button';
import { open } from '@tauri-apps/plugin-dialog';
import { readTextFile } from "@tauri-apps/plugin-fs"
import { fetch } from "@tauri-apps/plugin-http"

export default function Configuration() {
  return (<div class="w-full h-full">
    <Button />
    <h1>Cofiguração inicial:</h1>
    <p>Para seguirmos em frente, é necessário configurar as seguintes opções</p>

    <Button on:click={async () => {
      const filePath = await open({
        multiple: false,
        title: "League of Legends Client",
        filters: [{
          extensions: ["exe"],
          name: "LeagueClient.exe"
        }]
      })

      const pathArray = filePath?.split("\\")

      if (pathArray?.at(-1) !== "LeagueClient.exe") {
        //Erro
      }

      pathArray?.pop()

      console.log(pathArray?.join("\\") + "\\lockfile")

      const leagueClientData = await readTextFile(pathArray?.join("\\") + "\\lockfile")

      const connectionArray = leagueClientData.split(":")

      console.log(connectionArray);

      const connection = {
        port: connectionArray[2],
        protocol: connectionArray[4],
        user: "riot",
        password: connectionArray[3],
      }


      const encodedCredentials = btoa(`${connection.user}:${connection.password}`)

      console.log(`Basic ${encodedCredentials}`)

      const response = await fetch(`${connection.protocol}://127.0.0.1:${connection.port}/lol-summoner/v1/current-summoner`, {
        method: "GET", headers: { Authorization: `Basic ${encodedCredentials}` }, mode: "no-cors", keepalive: true, credentials: "same-origin",
        danger: { acceptInvalidCerts: true, acceptInvalidHostnames: false },

      })

      console.log(await response.json())

    }}>Selecione o cliente do seu League of Legends</Button>

  </div>)
}