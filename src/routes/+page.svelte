<script>
  import { onMount } from "svelte";
  import Cursor from "./cursor.svelte";

  let time = 25 * 60; // 25 minutes in seconds
  let timerRunning = false;

  let formattedTime;

  let intervalId;

  function startTimer() {
    timerRunning = true;
    intervalId = setInterval(() => {
      time = time - 1;
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalId);
    timerRunning = false;
  }

  function resetTimer() {
    clearInterval(intervalId);
    time = 25 * 60;
    timerRunning = false;
  }

  function getFormattedTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  $: {
    formattedTime = getFormattedTime(time);
  }
</script>

<Cursor />

<div
  class="flex flex-col h-screen justify-center items-center bg-gray-900 text-white"
>
  <h1 class="text-4xl font-bold mb-4">Pomodoro Timer</h1>
  <div class="time text-6xl font-bold mb-4">{formattedTime}</div>
  <div class="controls flex justify-center">
    <button
      class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md mr-4"
      on:click={startTimer}
      disabled={timerRunning}
    >
      Start
    </button>
    <button
      class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
      on:click={stopTimer}
      disabled={!timerRunning}
    >
      Stop
    </button>
  </div>
  <button
    class="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-md mt-4"
    on:click={resetTimer}
  >
    Reset
  </button>
</div>

<style>
  button:disabled {
    pointer-events: none;
  }

  :global(body) {
    cursor: none;
  }
</style>
