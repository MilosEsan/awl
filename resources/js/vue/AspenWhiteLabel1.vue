<template>
  <div class="container">
    <h1 class="title">
    {{title}}
    </h1>
      <form enctype=multipart/form-data action="/step-1" method="POST" role="form">
      <div class="row form-group">
        <label for="email" class="col-md-2">       
            Business Name:      
        </label>
        <div class="col-md-4">
         <input type="text" name="business" id="business" placeholder="Enter Client's name (Ex. Pinnacle)" class="form-control" v-model="post.business">
        </div>
      </div>
      <div class="row form-group">
        <label for="logo" class="col-md-2">     
           Business Logo:
        </label>
        <div class="col-md-3">
         <input type="file" name="logo" id="logo" @change="processFile($event)">
        <label class="upload" for="logo">Upload Logo</label>
        </div>
      </div>
      <div class="row form-group">
        <label for="icon" class="col-md-2">       
          App Icon:
        </label>
        <div class="col-md-3">
         <input type="file" name="icon" @change="processFile($event)" id="icon">
        <label class="upload" for="icon">Upload App Icon</label>
        </div>
      </div>
      <div class="row form-group">
        <div  class="col-md-4">
           <label class="white-box"></label>
          <label for="color1">
            Main App Colour: 
         <input type="color" name="color1" id="color1" v-model="post.color1">
        </label>
        </div>
        <div  class="col-md-4">
          <label for="color2">
            Secondary App Colour: 
         <input type="color" name="color2" id="color2" v-model="post.color2">
        </label>
        </div>
        <div  class="col-md-4">
          <label for="color3">
           Email Header / Footer Colour: 
         <input type="color" name="color3" id="color3" v-model="post.color3">
        </label>
        </div>
      </div>
     <div class="row form-group">
        <div  class="col-md-4">
          <label for="font">
            Primary App font: 
        </label>
        </div>
        <div  class="col-md-4">
       <select name="font" 
       v-model="post.selectedFont"  
       class="form-select form-select-sm" 
       aria-label="Default select example" >
        <option selected>Open this select menu</option>
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
      <p v-bind:style="{ fontFamily: post.selectedFont }">FONT EXAMPLE</p>
       </div>
      </div>
     <div class="row form-group">
        <label for="appUrl" class="col-md-2">   
            Web App Url:
        </label>
        <div class="col-md-4">
         <input type="url" name="appUrl" id="appUrl" placeholder="(Ex. https://service.pinnacle.com)" v-model="post.url" class="form-control" required>
        </div>
      </div>
    <button type="submit">CONTINUE</button>
    </form>
  </div>
</template>
<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          title:'Client Information',
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

  processFile(event) {
    this.logo = event.target.files[0]
    this.icon = event.target.files[1]
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

  .white-box {
    height: 15px !important;
    width: 15px;
    background-color: yellowgreen;
  }
}


</style>