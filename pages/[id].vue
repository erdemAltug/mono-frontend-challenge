<template>
  <v-app-bar :elevation="2">
    <v-img
      class="mx-2"
      src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
      max-height="60"
      max-width="60"
      contain
    ></v-img>
    <v-app-bar-title>Github Actions</v-app-bar-title>
  </v-app-bar>

  <v-container class="container">
    <v-card class="link-generate-card" elevation="12">
      <v-row class="selected-color">
        <v-col class="repo-name" cols="3">
          <span class="centered-span"> {{ repoData[0].name }} </span>
        </v-col>
        <v-col class="repo-name" cols="2">
          <img :src="selectedIcon.path" alt="" class="icon-img" />
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-col cols="10" class="mt-9">
          <v-text-field
            variant="solo"
            class="input-color"
            hide-details
            rounded
            readonly
          >
            <span class="font-weight-100">
              {{ repoData[0].description }}
            </span>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-col cols="6">
          <span class="input-text">Top Contrubiuters: </span>
        </v-col>

        <v-col class="d-flex" cols="4">
          <v-btn class="star-btn" @click="githubStore.updateStarring()">
            <v-icon> mdi-star </v-icon> Star
          </v-btn>
          <span class="btn-span">
            {{ repoData[0].stargazers_count }}
          </span>
        </v-col>
      </v-row>

      <v-row class="center-row">
        <v-card width="500" class="contributors-card">
          <v-row class="justify-center">
            <v-col class="d-flex mt-4" cols="5">
              <img
                class="img-icon mr-4"
                :src="repoData[0].owner.avatar_url"
                alt=""
              />
              <div>
                <span> {{ repoData[0].owner.login }}</span>
                <span class="d-block">
                  {{ contributor[0].contributions }} commits
                </span>
              </div>
            </v-col>

            <v-col class="d-flex mt-4" cols="5">
              <img
                class="img-icon mr-4"
                :src="repoData[0].owner.avatar_url"
                alt=""
              />
              <div>
                <span> {{ repoData[0].owner.login }}</span>
                <span class="d-block">
                  {{ contributor[0].contributions }} commits
                </span>
              </div>
            </v-col>
            <v-col cols="5"></v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-card>

    <div class="buttons-div">
      <v-btn @click="githubStore.updateStarring()" rounded class="link-btn" color="#1DA1F2">
        <v-icon right dark> mdi-twitter </v-icon>
        Share
      </v-btn>
      <v-btn @click="regenerateLink()" rounded class="link-btn" color="purple">
        <v-icon right dark> mdi-link </v-icon>
        Generate Your Own Link
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGithubStore } from "../store/store";
import { ref, onMounted } from "vue";

const githubStore = useGithubStore();
const { userName } = storeToRefs(githubStore);
const { repoName } = storeToRefs(githubStore);
const { contributor } = storeToRefs(githubStore);
const { selectedColor } = storeToRefs(githubStore);
const { repoData } = storeToRefs(githubStore);
const { selectedIcon } = storeToRefs(githubStore);
const router = useRouter()

function regenerateLink() {
router.go(-1);
}

</script>

<style scoped="scss">
.link-btn {
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
.v-col-6 {
  display: flex;
}
.star-btn {
  background-color: #fecf58;
  color: white;
}

.icon-img {
  width: 40px;
  height: 40px;
}
.contributors-card {
  justify-content: center;
  min-height: 5rem;
  border-radius: 16px;
  margin-left: 2rem;
  margin-right: 2rem;
}
.buttons-div {
  @media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
  margin-top: 1rem;
  display: flex;
}

.container {
  @media only screen and (max-width: 600px) {
    width: 500px;
  }

  @media only screen and (min-width: 1200px) {
    width: 600px;
  }
}

.input-text {
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-color {
  background-color: white !important;
  border-radius: 50px !important;
  border-style: none !important;
}
.link-generate-card {
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #f9f9f9;
  border-radius: 24px;
}

.selected-color {
  background-color: v-bind("selectedColor");
  height: 100px;
  justify-content: center;
}

.btn-span {
  vertical-align: middle !important;
  background-color: white;
  height: 36px !important;
  display: inline-flex;
  width: 36px;
  border-radius: 1px 12px 12px 1px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
}

.centered-span {
  background-color: white;
  height: 45px;
  width: 125px;
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #b7b7b7;
}
.center-row {
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.repo-name {
  display: flex;
  transform: translateY(65%);
  z-index: 99999;
}

.img-icon {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0 0 2px #888;
  width: 50px;
}
.radius-input {
  border-radius: 12px;
}
</style>
