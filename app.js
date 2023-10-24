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
        province:"Québec",
        postalCode: "J8S 9S6",
      },

      hobbies: ["Sport", "Lecture", "Jeux vidéos", "Dessin", "Cuisine"],
      imgUser:"https://randomuser.me/api/portraits/lego/6.jpg",
      websiteUser:"https://www.nintendo.com/en-ca/",
      colorTR:"colorTR",
      colorOther:"colorOther"
    };
  },
  methods:{
    changeName(){
        let newFirstName= prompt("Entrez un prénom");
        this.firstName = newFirstName;
        let newLastName= prompt("Entrez un nom de famille");
        this.lastName = newLastName;

    },

    changeCity(){
        let newCity = prompt("Entrez le nom de la ville");
        this.address.city = newCity;

    },

    changeHobbies(){
        let newHobbie1 = prompt("Entrez un hobbie");
        let newHobbie2 = prompt("Entrez un hobbie");
        this.hobbies[0] = newHobbie1;
        this.hobbies[1] = newHobbie2;

    },

    changeUserImg(){
      this.imgUser = "https://randomuser.me/api/portraits/lego/2.jpg"
    },

    goUserWebsite(){
      this.websiteUser= "https://www.nintendo.com/en-ca/"
    }
  },
  
  computed:{
    colorCity(){
      return{
        city : this.newCity != Trois-Rivière
      }
    }
  }
});
app.mount("#app");
