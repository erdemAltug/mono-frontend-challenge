import { defineStore } from "pinia";

export const useGithubStore = defineStore({
  id: "github-store",
  state: () => {
    return {
      userName: "",
      repoName: "",
      generatedId: "",
      contributor: [] as any,
      repoData: [] as any,
      selectedLink: "",
      selectedIcon: { path: "", value: 0 },
      colors: [
        { name: "rgb(40,203,164)", value: "rgb(40,203,164)" },
        { name: "rgb(255, 51, 0)", value: "rgb(255, 51, 0)" },
        { name: "rgb(0, 102, 255)", value: "rgb(0, 102, 255)" },
        { name: "rgb(204, 51, 153)", value: "rgb(204, 51, 153)" },
        { name: "rgb(153, 153, 102)", value: "rgb(153, 153, 102)" },
      ],
      selectedColor: "rgb(40,203,164)",
      icons: [
        {
          path: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
          value: 1,
        },

        {
          path: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
          value: 2,
        },
        {
          path: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
          value: 3,
        },

        {
          path: "https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
          value: 4,
        },
        {
          path: "data:image/png;base64,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",
          value: 5,
        },
      ],
    };
  },

  actions: {
    async findGithubUser() {
      const response: any = await $fetch(
        `https://api.github.com/users/${this.userName}`,
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      var val = Math.floor(1000000 + Math.random() * 9000000);
      var uniqueName = response.login + val;
      this.generatedId = uniqueName;
      this.selectedLink = `/${this.generatedId}`;
    },

    async findGithubRepo() {
      const response: any = await $fetch(
        `https://api.github.com/repos/${this.userName}/${this.repoName}`,
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      this.contributor = await this.findContributors();
      this.repoData.push(response);
      var val = Math.floor(1000000 + Math.random() * 9000000);
      var uniqueName = response.owner.login + val;
      this.generatedId = uniqueName;
      this.selectedLink = `/${this.generatedId}`;
    },

    async findContributors() {
      const response: any = await $fetch(
        `https://api.github.com/repos/${this.userName}/${this.repoName}/contributors`,
        {
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      return response;
    },

    async updateStarring() {
      const response: any = await $fetch(
        `https://api.github.com/user/starred/${this.userName}/${this.repoName}`,
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "put",
        }
      );
      return response;
    },
  },
});
