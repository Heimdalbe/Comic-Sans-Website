<template>
  <section class="my-12 mx-5 flex-row justify-items-center">
    <h2 class="text-3xl mb-4">Games you can play</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-around">
      <CardComponent title="Boardgames" :list="boardGames" />
      <CardComponent title="Gameroom" :list-with-titles="consoleGames" />
      <CardComponent title="Arcade games" :list="arcadeGames" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardComponent from '../generic/CardComponent.vue';

const boardGames = [
  "Chess",
  "Uno",
  "Exploding Kittens",
  "Cards against humanity",
  "Catan",
  "Ticket to ride",
  "Codenames",
  "Many more..."
]

const consoleGames = [
  {
    "key": "XBox Series X",
    "value": [
      "Mortal Kombat",
      "Overcooked",
      "More..."
    ]
  },
  {
    "key": "Nintendo Switch",
    "value": [
      "Mario Kart",
      "Super Smash Bros.",
      "More..."
    ]
  },
  {
    "key": "Guitar Hero",
    "value": [
      "Aerosmith",
      "Metallica",
      "More..."
    ]
  },
]

const arcadeGames = [
  "Pinball machines",
  "Pacman table",
  "Pool",
  "Pong",
  "Aliens Armageddon",
  "Candy Machine",
  "Foosball table"
]
</script>