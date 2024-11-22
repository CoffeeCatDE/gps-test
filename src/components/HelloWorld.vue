<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounterStore } from '../mainstore'
import '../style.css'

// access the `store` variable anywhere in the component ✨
const store = useCounterStore();

onMounted(() => {
  console.log('Component is mounted!')
  // Example: Initialize something in the store when the component mounts
  store.countLengthOfWord();  // Assuming you have a method to initialize the store
})

</script>

<template>

  <div class="container">
    <h1 class="title">Vue Formular</h1>
    <div class="input-group">
      <input type="text" v-model="store.name" id="nameInput" @input="store.countLengthOfWord()" placeholder="Gib deinen Namen ein">
      <button @click="store.clearInputField()">Clear</button>
    </div>
    <h2 class="output">{{ store.name.toUpperCase() }} ({{ store.count }})</h2>
  </div>
  
</template>

<style scoped>
/* Global reset and body styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background: #f7f7f7;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 16px;
}

/* Container for centering the form */
.container {
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease;
}

/* Title styling */
.title {
  font-size: 2rem;
  color: #4CAF50;
  margin-bottom: 1.5rem;
}

/* Input field styling */
.input-group {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

input {
  padding: 10px;
  width: 250px;
  font-size: 1rem;
  border-radius: 25px;
  border: 2px solid #ccc;
  margin-right: 10px;
  outline: none;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #4CAF50;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}

/* Output (name and word count) styling */
.output {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-top: 1rem;
  transition: transform 0.3s ease;
}

/* Add a little "hover effect" to the container */
.container:hover {
  transform: translateY(-5px);
}

/* Label for the button */
label {
  display: block;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #777;
}


</style>