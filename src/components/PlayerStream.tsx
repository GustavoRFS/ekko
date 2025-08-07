import StreamController from "@/controllers/StreamController";

type PlayerCallProps = {
  stream: MediaStream
}

export default function PlayerStream({ stream }: PlayerCallProps) {

  let { audioRef } = StreamController(stream)

  return (<div>
    <div class="rounded-full bg-red-200">
      <img src="https://ddragon.leagueoflegends.com/cdn/15.14.1/img/champion/Nunu.png" class="rounded-full" />
    </div>
  </div>)
}