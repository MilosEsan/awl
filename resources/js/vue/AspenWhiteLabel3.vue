<template>
  <div class="container">
      <h1 class="title">
    {{title}}
    </h1>

      <form action="/step-3" method="POST" role="form">
      <div class="row form-group">
        <label for="email" class="col-md-6">        
            What is the email for the main contact person for the white label:     
        </label>
        <div class="col-md-6">
         <input type="email" name="email" id="email" placeholder="Enter Email Adress" v-model="post.email1" class="form-control"  required>
        </div>
      </div>
      <div class="row form-group">
        <label for="email" class="col-md-6">
            What is the email of the person in charge of the system administrator for the company?
        </label>
        <div class="col-md-6">
         <input type="email" name="email" id="email" placeholder="Enter Email Adress" v-model="post.email2" class="form-control"  required>
        </div>
      </div>
      <div class="row form-group">
        <label for="create" class="col-md-5">        
           Does the client understand it will take one working week before the solution is ready to launch?
        </label>
        <div class="col-md-3">
         <input type="checkbox" name="create" id="create" value="verify" v-model="post.verify" required>
        </div>
      </div>
    <button type="submit">CREATE WHITE LABEL</button>
    </form>
   </div>
</template>
<script>
const default_layout = "default";


export default {
  computed: {},
  data() {
      return {
          title:"Final Touches",
          post: {
            email1: null,
            email2: null,
            verify: null
          }
      }
  },

  methods: {
    submit() {

 fetch("/white-label-3", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify(
                "    EMAIL 1:     " +
              this.post.email1 + '' +
                "    EMAIL 2:     " +
              this.post.email2     + '' +
              "     VERIFY:     " +
              this.post.verify   /*  + '' +  */
            )
        })
        .then(r => r.text())
        .then(t => alert(t));
      }
  }
};
</script>

<style lang="scss" scoped>

</style>