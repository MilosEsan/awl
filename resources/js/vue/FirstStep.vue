<template>
  <div class="container">
    <h1 class="title">
    {{title}}
    </h1>
      <form @submit.prevent="navigateNext()" method="POST" role="form">
      <div class="row form-group mb-5">
        <label for="email" class="col-md-2">       
            Business Name:      
        </label>  <div class="col-md-4">
         <input type="text" 
         name="business" 
         id="business" 
         placeholder="Enter Client's name (Ex. Pinnacle)" 
         class="form-control" 
         v-model="business"
         required>
         <small v-if="this.validateLength == true" class="text-danger"> Minimum length is 4 and maximum length is 13 characters!</small>
         <small v-if="this.validInput == true" class="text-danger"> 
           ALERT! Only letters, spaces, numbers and "&", "_" and "." symbols are allowed.</small>
           <small v-if="this.checkName == true" class="text-danger">Name unavailable!</small>
         
        </div>
      </div>
      <div class="row form-group mb-5">
        <label for="logo" class="col-md-2">     
           Business Logo:
        </label>
        <div class="col-md-3">
         <input type="file" name="logo" id="logo" @change="processFile1($event)">
        <label class="upload" for="logo">Upload Logo</label>
        </div>
      </div>
      <div class="row form-group mb-5">
        <label for="icon" class="col-md-2">       
          App Icon:
        </label>
        <div class="col-md-3">
         <input type="file" name="icon" @change="processFile2($event)" id="icon">
        <label class="upload" for="icon">Upload App Icon</label>
        </div>
      </div>
      <div class="row form-group mb-5">
        <div  class="col-md-4">
          <label for="color1">
            Main App Colour: 
         <input type="color" 
         name="color1" 
         id="color1" 
         v-model="color1"
         required>
        </label>
        </div>
        <div  class="col-md-4">
          <label for="color2">
            Secondary App Colour: 
         <input 
         type="color" 
         name="color2" 
         id="color2" v-model="color2"
         required>
        </label>
        </div>
        <div  class="col-md-4">
          <label for="color3">
           Email Header / Footer Colour: 
         <input type="color" 
         name="color3" 
         id="color3" 
         v-model="color3"
         required>
        </label>
        </div>
      </div>
     <div class="row form-group mb-5">
        <div  class="col-md-4">
          <label for="font">
            Primary App font: 
        </label>
        </div>
        <div  class="col-md-4">
       <select name="font" 
       required
       v-model="font"  
       class="form-select form-select-sm" 
       aria-label="Default select example" >
  <option   
            v-for="(font, index) in fonts"
            v-bind:key="index"
            :value="font.family"
            selected
          >{{font.family}}
          </option>
</select>
        </div>
        <div class="col-md-4">
      <p v-bind:style="{ fontFamily: font }">FONT EXAMPLE</p>
       </div>
      </div>
     <div class="row form-group mb-5">
        <label for="appUrl" class="col-md-2">   
            Web App Url:
        </label>
        <div class="col-md-4">
         <input type="url" name="appUrl" id="appUrl" 
         placeholder="(Ex. https://service.pinnacle.com)" 
         v-model="appUrl" 
         class="form-control" required>
        </div>
      </div>
    <button @click="navigateNext()">CONTINUE</button>
    </form>
  </div>
</template>
<script>


export default {

computed: {
            business: {
                get() {
                    return this.$store.state.business
                },
                set(value) {
                    this.$store.commit('setBusiness', value)
                    
                    if (this.$store.state.business.length < 4 ||
                    this.$store.state.business.length > 13) {

                    this.validateLength = true
                  }

                   else if (!/^[a-zA-Z &_.]+$/.test(this.$store.state.business) ||
                   this.$store.state.business == false) {
                    this.validInput = true
                    this.validateLength = false
                  } 

                  else {
                    this.validInput = false
                    this.validateLength = false
                    }
                  }                
            },
            logo: {
                get() {
                    return this.$store.state.logo
                },
                set(value) {
                    this.$store.commit('setLogo', value)
                }
            },
            icon: {
                get() {
                    return this.$store.state.icon
                },
                set(value) {
                    this.$store.commit('setIcon', value)
                }
            },
            color1: {
                get() {
                    return this.$store.state.color1
                },
                set(value) {
                    this.$store.commit('setColor1', value)
                }
            },
            color2: {
                get() {
                    return this.$store.state.color2
                },
                set(value) {
                    this.$store.commit('setColor2', value)
                }
            },
            color3: {
                get() {
                    return this.$store.state.color3
                },
                set(value) {
                    this.$store.commit('setColor3', value)
                }
            },
            font: {
                get() {
                    return this.$store.state.font
                },
                set(value) {
                    this.$store.commit('setFont', value)
                }
            },

            appUrl: {
                get() {
                    return this.$store.state.appUrl
                },
                set(value) {
                    this.$store.commit('setAppUrl', value)
                }
            },
},

  data() {
      return {
          title:'Client Information',
          validateLength: false,
          validInput: false,
          checkName: false,
          fonts: null,
          post: {
            selectedFont: null,
            bussines: null,
            url: null,
            logo: null,
            icon: null,
            color1: "#9c0404",
            color2: "#00727c",
            color3: "#000e0d",
          }
      }
  },

  methods : {

  validateBusiness() {},

  navigateNext() {
    if (this.$store.state.business &&
        this.$store.state.business !== null) {
            this.$router.push('/second-step/')
    } 
  },

  processFile1(event) {
    this.$store.state.logo = event.target.files[0]
  },

  processFile2(event) {
    this.store.state.icon = event.target.files[0]
  },

    submit() {

 fetch("/white-label-1", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify(
                "    BUSSINES NAME:     " +
              this.post.bussines + '' +
                "    APP URL:     " +
              this.post.url     + '' +
              "LOGO:     "  +
              this.post.logo     + '' +
              "COLOR 1:     "  +
              this.post.color1      + '' + 
              "COLOR 2:     "  +
              this.post.color2      + '' + 
              "COLOR 3:     "  +
              this.post.color3     /*  + '' +  */
            )
        })
        .then(r => r.text())
        .then(t => alert(t));
      }
  },

  mounted () {
    axios
      .get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDmqDd0IHlDwBvULs63knzYQSLL3EloM1c')
      .then(response => (this.fonts = response.data.items))

  }
};

</script>

<style lang="scss" scoped>

input[type="file"] {
  visibility: hidden;
}


input[type="color"] {
    width: 2.5rem;
    height: 2.5rem;
    padding: .5rem;
    background-color: #ffffff;
    border-color: black;
    border: 0;
}

input[type="url"], input[type="text"] {
  color: #92a2a7;
  background-color: #f3f2f2;
  border-width: 0rem;
}

.upload {
  margin-top: -30px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#948000;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
}


</style>