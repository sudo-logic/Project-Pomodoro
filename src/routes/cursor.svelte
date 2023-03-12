<script>
  import { spring } from "svelte/motion";

  let coords1 = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.05,
      damping: 0.25,
    }
  );

  let coords2 = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.1,
      damping: 0.35,
    }
  );

  let size = spring(0);
</script>

<svelte:body
  on:mousemove={(e) => {
    coords1.set({ x: e.clientX, y: e.clientY });
    coords2.set({ x: e.clientX, y: e.clientY });
  }}
  on:mousedown={(e) => {
    size.set(20);
  }}
  on:mouseup={(e) => {
    size.set(10);
  }}
  on:mouseenter={(e) => {
    size.set(10);
  }}
  on:mouseleave={(e) => {
    size.set(0);
  }}
/>

<svg class="w-full h-full">
  <circle
    cx={$coords1.x}
    cy={$coords1.y}
    r={$size}
    stroke="lightgray"
    stroke-width="1"
    fill-opacity="0"
  />
  <circle cx={$coords2.x} cy={$coords2.y} r={$size / 4} fill="darkgray" />
</svg>

<style>
  svg {
    position: absolute;
    pointer-events: none;
  }
</style>
