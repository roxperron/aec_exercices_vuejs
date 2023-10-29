const app = Vue.createApp({
  /*   template: "<h1>TEST</h1>", */
  data() {
    return {
      firstName: "Pierre",
      lastName: "Laroche",
      email: "pierrelaroche@gmail.com",
      phoneNumber: "819-965-7410",

      address: {
        civicNumber: 1585,
        streetName: "Rue des Pins",
        city: "Trois-Rivières",
        province: "Québec",
        provinceQc: "/quebec.png",
        postalCode: "J8S 9S6",
      },

      hobbies: ["Sport", "Lecture"],
      userImg: "https://randomuser.me/api/portraits/lego/6.jpg",
      userWebsite: "https://www.nintendo.com/fr-ca/",
      colorNewCity:"newCity",
      colorCity: "colorCity"

    };
  },
  methods: {
    changeName() {
      let newFirstName = prompt("Entrez un prénom");
      this.firstName = newFirstName;
      let newLastName = prompt("Entrez un nom de famille");
      this.lastName = newLastName;
    },

    changeCity() {
      let newCity = prompt("Entrez le nom de la ville");
      this.address.city = newCity;
    },

    changeProvince(){
      let newProvince = prompt("Entrez votre province");
      this.address.province = newProvince;
    },

    addHobbie() {
      let newHobbie = prompt("Entrez un nouveau hobbie");
      this.hobbies.push(newHobbie)
    },

    removeHobbie(){
      this.hobbies.pop();
    },

    changeUserImg() {
      this.userImg = "https://randomuser.me/api/portraits/lego/2.jpg";
    },
  },
});
app.mount("#app");
