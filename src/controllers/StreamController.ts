import { createEffect, createSignal } from "solid-js";

const StreamController = (stream: MediaStream) => {
  let audioRef!: HTMLAudioElement;

  createEffect(() => {
    audioRef.srcObject = stream;
    audioRef.play();
  });

  return { audioRef };
};

export default StreamController;
