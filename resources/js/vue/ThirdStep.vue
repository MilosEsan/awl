<template>
  <div class="container">
      <h1 class="title">
    {{title}}
    </h1>

      <form @submit.prevent="submit()" method="POST" role="form">
      <div class="row form-group mb-5">
        <label for="email" class="col-md-6">        
            What is the email for the main contact person for the white label:     
        </label>
        <div class="col-md-6">
         <input type="email" name="email1" id="email1" placeholder="Enter Email Adress" v-model="email1" class="form-control"  required>
        </div>
      </div>
      <div class="row form-group mb-5">
        <label for="email" class="col-md-6">
            What is the email of the person in charge of the system administrator for the company?
        </label>
        <div class="col-md-6">
         <input type="email" name="email2" id="email2" placeholder="Enter Email Adress" v-model="email2" class="form-control"  required>
        </div>
      </div>
      <div class="row form-group mb-5">
        <label for="create" class="col-md-5">        
           Does the client understand it will take one working week before the solution is ready to launch?
        </label>
        <div class="col-md-3">
           <label class="check-wrapper">
                 <input type="checkbox" name="verify" id="verify" v-model="verify">
               <span class="checkmark"></span>
          </label>
            <small v-if="this.verifyCheck == true" class="text-danger position-absolute mt-5">
            ALERT! This is required.
            </small>
       </div>
      </div>
    <button type="submit">CREATE WHITE LABEL</button>
    </form>
   </div>
</template>
<script>


export default {

  computed: {
                email1: {
                get() {
                    return this.$store.state.email1
                },
                set(value) {
                    this.$store.commit('setEmail1', value)
                }
            },
            email2: {
                get() {
                    return this.$store.state.email2
                },
                set(value) {
                    this.$store.commit('setEmail2', value)
                }
            },
            verify: {
                get() {
                    return this.$store.state.verify
                },
                set(value) {
                    this.$store.commit('setVerify', value)
                }
            },
  },

  data() {
      return {
          title:"Final Touches",
          verifyCheck: false,
      }
  },

  methods: {

    submit() {
    if (this.$store.state.verify === false) {
      this.verifyCheck = true;
    } else {
      axios.post('/user/store', {
          business: this.$store.state.business,
          logo: this.$store.state.logo,
          icon: this.$store.state.icon,
          color1: this.$store.state.color1,
          color2: this.$store.state.color2,
          color3: this.$store.state.color3,
          font: this.$store.state.font,
          appUrl: this.$store.state.appUrl,
          amenity: this.$store.state.amenity,
          tsa: this.$store.state.adminRolles.tsa,
          operationsManager: this.$store.state.adminRolles.operationsManager,
          pm: this.$store.state.adminRolles.pm,
          booking: this.$store.state.nfcFunctionality.booking,
          covid19: this.$store.state.nfcFunctionality.covid19,
          hid: this.$store.state.nfcFunctionality.hid,
          bill: this.$store.state.bill,
          price: this.$store.state.price,
          email1: this.$store.state.email1,
          email2: this.$store.state.email2,
          verify: this.$store.state.verify,
     }).then(res => {
          console.log(res.data)
     })
       .catch(error => {
          console.log(error.response) 
    });
    }
  },
  }
};
</script>

<style lang="scss" scoped>

</style>
