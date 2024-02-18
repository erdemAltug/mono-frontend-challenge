<script setup lang="ts">
const props = defineProps({
  snackbar: {
    type: Boolean,
    required: true,
  },
});

var { snackbar } = props;

function openSnackbar () {
    snackbar = true;
}
</script>

<template>
    <div class="text-center ma-2">
      <v-snackbar
        v-model="snackbar"
      >
       Test
  
        <template v-slot:actions>
          <v-btn
            color="pink"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>