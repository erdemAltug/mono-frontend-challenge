<template>
  <v-app-bar :elevation="2">
    <v-app-bar-title>Github Actions</v-app-bar-title>
  </v-app-bar>

  <div>
    <v-card class="link-generate-card" width="800" elevation="12">
      <v-row class="center-row">
        <v-col class="radius-input" cols="5">
          <v-text-field
            v-model="userName"
            class="centered-input"
            variant="solo"
            placeholder="GitHub Username"
            label="GitHub Username"
          ></v-text-field>
        </v-col>

        <v-col class="radius-input" cols="1">
          <v-text-field variant="solo" readonly> / </v-text-field>
        </v-col>

        <v-col cols="5">
          <v-text-field
            v-model="repoName"
            variant="solo"
            label="Repo"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-col cols="6">
          <span class="input-text">Select a Template Color : </span>
        </v-col>

        <v-col cols="5">
          <v-select
            label="Select"
            variant="solo"
            :items="['red', 'green', 'blue', 'black', 'white', 'purple']"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-col cols="11">
          <span class="input-text">Select an Icon : </span>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-card width="500" style="justify-content: center; min-height: 5rem">
          <div class="ma-2">
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
          </div>
        </v-card>
      </v-row>
    </v-card>

    <div class="buttons-div">
      <v-btn v-if="generatedLink" @click="generateLink()" rounded class="link-btn" color="purple">
      <v-icon right dark> mdi-link </v-icon>
      Generate Link
    </v-btn>
    <v-btn v-if="generatedLink" @click="generateLink()" rounded class="link-btn" color="purple">
      <v-icon right dark> mdi-link </v-icon>
      Generate Link
    </v-btn>
    <v-btn @click="generateLink()" rounded class="link-btn" color="purple">
      <v-icon right dark> mdi-link </v-icon>
      Generate Link
    </v-btn>
    </div>


    <!-- <snackbar :snackbar="snackbarValue"></snackbar> -->
  </div>

  <p v-if="users">Page visits: {{ users.name }}</p>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGithubStore } from "../store/store";
import { ref, onMounted } from "vue";

const githubStore = useGithubStore();
const { userName } = storeToRefs(githubStore);
const { repoName } = storeToRefs(githubStore);
const { users }: any = storeToRefs(githubStore);
const snackBar = ref(false);
const generatedLink = ref("");

function generateLink() {
  if (userName.value && repoName.value) {
    githubStore.findGithubRepo();
  } else if (userName) {
    githubStore.findGithubUser();
  } else {
    return { message: "Please fill the inputs" };
  }
}
</script>

<style scoped="scss">
.link-btn {
  margin-top: 2rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
.v-col-6 {
  display: flex;
}

.buttons-div {
  display: flex;
  margin-left: 25%;
  margin-right: 25%;
}
.input-text {
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link-generate-card {
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(250, 250, 250);
  border-radius: 24px;
}

.center-row {
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.radius-input {
  border-radius: 12px;
}

h1 {
  color: black;
  background-color: black;
}
</style>
