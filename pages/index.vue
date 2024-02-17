<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Github Actions</v-app-bar-title>
  </v-app-bar>

  <div>
    <v-card class="link-generate-card" width="800" elevation="12">
      <v-row class="center-row">
        <v-col class="radius-input" cols="4">
          <v-text-field
            v-model="firstName"
            class="centered-input"
            solo
            rounded
            placeholder="GitHub Username"
            label="GitHub Username"
          ></v-text-field>
        </v-col>

        <v-col class="radius-input" cols="1">
          <v-text-field solo rounded readonly> / </v-text-field>
        </v-col>

        <v-col cols="4">
          <v-text-field solo rounded label="Label"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-col cols="6">
          <span class="input-text">Select a Template Color : </span>
        </v-col>

        <v-col cols="4">
          <v-select
            label="Select"
            rounded
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
          ></v-select>
        </v-col>
      </v-row>

      <v-row style="justify-content: flex-start; margin: 2rem">
        <v-col cols="5">
          <span class="input-text">Select an Icon : </span>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-card width="500" style="justify-content: center; min-height: 5rem">
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>

          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
          <v-btn class="ma-2" fab>
            <v-icon> mdi-account </v-icon>
          </v-btn>
        </v-card>
      </v-row>
    </v-card>

    <v-btn @click="submitLink()" rounded class="link-btn" color="purple">
      <v-icon right dark> mdi-link </v-icon>
      Generate Link
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const input = ref("bzzt");
const firstName = defineModel('firstName')
const uri = "https://api.github.com/users/";   


async function submitLink() {
    const {data : user}  = await useFetch(uri + firstName.value);
    console.log("user" , user);
}


</script>

<style scoped="scss">
.v-field__outline {
  display: none !important;
}

.link-btn {
  margin-top: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
}

.input-text {
  font-family: "Times New Roman", Times, serif;
  font-size: large;
  justify-content: center;
  vertical-align: center;
}
.link-generate-card {
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  min-height: 30rem;
  background-color: rgb(250, 250, 250);
  border-radius: 24px;
}

.center-row {
  justify-content: center;
  margin-top: 1rem;
}

.radius-input {
  border-radius: 12px;
}

h1 {
  color: black;
  background-color: black;
}
</style>
