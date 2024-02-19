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

  <v-container fluid class="fill-height justify-center">
    <div>
      <div class="mb-4">
        <h1 class="title">Github Card</h1>
        <h5 class="subtitle">Make Shareable Github Cars</h5>
      </div>
      <v-card class="link-generate-card" elevation="12">
        <v-card-item>
          <v-row class="center-row ma-1">
            <v-col class="radius-input" lg="5" md="4" xs="3">
              <v-text-field
                v-model="userName"
                rounded
                variant="solo"
                placeholder="GitHub Username"
                label="GitHub Username"
              ></v-text-field>
            </v-col>
            <pre class="slash">/</pre>
            <v-col lg="5" md="4" xs="3">
              <v-text-field
                v-model="repoName"
                rounded
                variant="solo"
                label="Repo"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="center-row">
            <v-col lg="5" md="4" xs="3">
              <span class="input-text mt-4">Select a Template Color : </span>
            </v-col>

            <v-col class="d-flex" lg="6" md="4" xs="3">
              <pre class="selected-color"></pre>
              <v-select
                hide-details
                label="Select a Color"
                variant="solo"
                item-title="name"
                v-model="selectedColor"
                :items="colors"
                :item-text="'name'"
                :item-value="'value'"
              ></v-select>
            </v-col>
          </v-row>

          <v-row class="center-row">
            <v-col lg="10" md="8" xs="4">
              <span class="input-text">Select an Icon : </span>
            </v-col>
          </v-row>

          <v-row class="center-row">
            <v-card class="icon-card">
              <div v-for="item in icons" :key="item.value" class="d-flex ma-1">
                <v-btn-toggle>
                  <v-btn @click="selectIcon(item)" class="ma-2" fab>
                    <img width="30" :src="item.path" alt="" />
                  </v-btn>
                </v-btn-toggle>
              </div>
            </v-card>
          </v-row>
        </v-card-item>
      </v-card>

      <div class="buttons-div">
        <v-btn
          v-if="selectedLink"
          @click="generateLink()"
          class="link-btn"
          color="#1DA1F2"
        >
          <v-icon right dark> mdi-twitter </v-icon>
          Tweet Your Link
        </v-btn>
        <v-btn
          v-if="selectedLink"
          @click="generateLink()"
          class="link-btn"
          color="purple"
        >
          <v-icon right dark> mdi-link </v-icon>
          Regenerate
        </v-btn>
        <v-btn
          v-if="!selectedLink"
          @click="generateLink()"
          class="link-btn"
          color="purple"
          :disabled="!repoName"
        >
          <v-icon right dark> mdi-link </v-icon>
          Generate Link
        </v-btn>
        <v-btn
          v-if="selectedLink"
          :to="selectedLink"
          nuxt
          class="link-btn"
          color="purple"
        >
          <v-icon v-if="selectedLink" right dark> mdi-open-in-new </v-icon>
          Open
        </v-btn>
      </div>

      <div v-if="selectedLink" class="buttons-div">
        <v-text-field readonly variant="solo">
          {{ base }}{{ selectedLink }}</v-text-field
        >
      </div>
    </div>
    <v-snackbar :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGithubStore } from "../store/store";
import { ref } from "vue";
import { useDisplay } from "vuetify";

const githubStore = useGithubStore();
const { userName } = storeToRefs(githubStore);
const { repoName } = storeToRefs(githubStore);
const { selectedLink } = storeToRefs(githubStore);
const { colors } = storeToRefs(githubStore);
const { icons } = storeToRefs(githubStore);
const { selectedColor } = storeToRefs(githubStore);
const { selectedIcon } = storeToRefs(githubStore);
const base = useRequestURL().origin;
const snackbar = ref({ color: "", show: false, message: "" });
const toggle = ref(0);

function selectIcon(selectIcon: any) {
  toggle.value = selectIcon.value;
  selectedIcon.value = selectIcon;
}

watch(selectedLink, (newX) => {
  if (newX) {
    snackbar.value.show = true;
    snackbar.value.message = "Repo Found";
    snackbar.value.color = "success";
  }
});

function generateLink() {
  if (userName.value && repoName.value) {
    githubStore.findGithubRepo().catch((error) => {
      snackbar.value.show = true;
      snackbar.value.message = "Repo Not Found";
      snackbar.value.color = "error";
    });
  } else if (userName) {
    githubStore.findGithubUser();
  } else {
    return { message: "Please fill the inputs" };
  }
}
</script>

<style scoped="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.link-btn {
  margin-right: auto;
  margin-left: auto;
  display: flex;
}
.v-col-6 {
  display: flex;
}

.centered-text-field {
  margin-left: 1rem;
  margin-right: 1rem;
}
.selected-color {
  background-color: v-bind("selectedColor");
  border-radius: 12px 1px 1px 12px;
  width: 5rem;
}
.title {
  font-family: Montserrat;
}
.subtitle {
  color: gray;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 15px;
}
.buttons-div {
  @media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;
  }
  margin-top: 1rem;
  display: flex;
}
.input-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.active {
  border: 1px solid #0071c5;
}
.link-generate-card {
  @media only screen and (min-width: 1200px) {
    width: 600px;
  }
  background-color: #f9f9f9;
  border-radius: 24px;
}
.center-row {
  @media only screen and (max-width: 600px) {
    display: block;
  }
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.slash {
  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
}
.icon-card {
  @media only screen and (max-width: 600px) {
    display: grid;
  }
  justify-content: center;
  min-height: 4rem;
  display: flex;
  border-radius: 24px;
}
.radius-input {
  border-radius: 12px;
}
</style>
