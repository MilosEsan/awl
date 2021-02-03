<template>
  <div class="container">
     <h1 class="title">
    {{title}}
    </h1>
    <form @submit.once="checkBoxInspect" action="/step-2" method="POST" role="form">
    <div class="row form-group">
        <label for="amenity" name="amenity" class="col-md-3">
          Amenity Functionality:
        </label>
        <div class="col-md-2">
         <input type="checkbox" value="Amenity" id="amenity" name="amenity" v-model="post.amenity">
        </div>
      </div>
      <div class="row form-group">
        <label for="adminRolles" name="adminRolles" class="col-md-3">        
          Admin Roles:
        </label>
        <div class="col-md-2">
          <small>TSA</small>
         <input type="checkbox" id="tsa" value="TSA" name="tsa" v-model="post.adminRolles">
        </div>
        <div class="col-md-2">
          <small>Operations <br> Manager</small>
         <input type="checkbox" id="operationsManager" value="Operations Manager" name="operationsManager" v-model="post.adminRolles">
        </div>
        <div class="col-md-2">
          <small>Assistant <br> PM</small>
         <input type="checkbox" id="pm" name="pm" value="Assistant PM" v-model="post.adminRolles">
        </div>
      </div>
      <div class="row form-group">
        <label for="nfc" name="nfc" class="col-md-3">        
          NFC Functionality:
        </label>
        <div class="col-md-2">
          <small>Tablet <br> Booking</small>
         <input type="checkbox" id="booking" name="booking" value="Tablet Booking" v-model="post.nfcFunctionality">
        </div>
        <div class="col-md-2">
          <small>COVID19 <br> Waiver</small>
         <input type="checkbox" id="covid19" value="Covid-19 Waiver" name="covid19" v-model="post.nfcFunctionality">
        </div>
        <div class="col-md-2 text-muted">
          <small>HID Door <br> Access</small>
         <input type="checkbox" id="hid" value="hid" name="hid" v-model="post.nfcFunctionality" disabled>
        <small>(Coming Soon)</small>
        </div>
      </div>
      <h1>Billing By Aspen</h1>
        <div class="row form-group">
        <div  class="col-md-6">
          <label for="font">
            How often whill the custommer be billed for the white label: 
        </label>
        </div>
        <div  class="col-md-6">
       <select name="bill" id="bill" v-model="post.bill"
       class="form-select form-select-sm" 
       aria-label="Default select example" >
       >
  <option
            v-for="(period, index) in periods"
            v-bind:key="index"
            value="1"
          >{{period}}</option>
</select>
        </div>
      </div>
     <div class="row form-group">
        <label for="appUrl" class="col-md-2">   
            What is the cost during this pay period:
        </label>
        <div class="col-md-4">
         <input type="number" name="price" id="price" placeholder="Enter Amount (Ex. 4500$)" v-model="post.amount" required> <br>
         <small>Yearly Total Revenue: $54.000</small>
        </div>
      </div>
      <button type="submit">CONTINUE</button>
      </form>
                  <div class="modal" id="myModal" v-if="showModel" @close="showModel = false" style="display: block;">

              <div class="modal-dialog">

                <div class="modal-content">

                  <!-- Modal Header -->

                  <div class="modal-header">

                    <h4 class="modal-title">STEP 2 summary (optional functionalities)</h4>

                    <button type="button" class="close" @click="showModel = false" data-dismiss="modal">×</button>

                  </div>

                  <!-- Modal body -->

                  <div class="modal-body">

                    <h5>
                      Amenity:
                    </h5>
                      <small class="mb-5" v-if="post.amenity != null">
                        ENABLED
                      </small>
                      <small class="mb-5" v-else>
                        DISABLED
                      </small>
                    <h5>
                      Admin Rolles:
                    </h5>
                   <small v-if="this.post.adminRolles" class="mb-5">
                     {{showOpts(this.post.adminRolles)}}
                     </small>
                     <ul v-for="(opt, i) in this.post.adminRolles" :key="'x' + i">
                     <li>{{opt}}</li>
                     </ul>
                    <h5>
                      NFC Functionalities:
                    </h5>
                    <small v-if="this.post.nfcFunctionality" class="mb-5">
                     {{showOpts(this.post.nfcFunctionality)}}
                     </small>
                     <ul v-for="(opt, i) in this.post.nfcFunctionality" :key="'y' + i">
                     <li>{{opt}}</li>
                     </ul>

                  </div>

                  <!-- Modal footer -->

                  <div class="modal-footer">

                    <button type="button" @click="showModel = false" class="btn btn-danger" data-dismiss="modal">close</button>

                  </div>

                </div>

              </div>

            </div>

  </div>
</template>

<script>
const default_layout = "default";


export default {
  computed: {

  },
  data() {
      return {
          title: "Functionality",
          periods: ["MONTHLY", "QUARTERLY", "YEARLY"],
          post: {
            amenity: null,
            adminRolles: [],
            nfcFunctionality: [],
            amount: null,
            bill: null
          },

          showModel: false    
      }
  },

  methods: {

 showOpts(arr) {
    if (arr.length === 0) {
      return "NOTHING SELECTED";
    }
},

checkBoxInspect(e) {
 e.preventDefault()
/* figure out the condition */
if (!this.post.adminRolles[length] || 
!this.post.nfcFunctionality[length]) {
  this.showModel = true;
 }

 if (!this.post.adminRolles[length] <= 3 || 
!this.post.nfcFunctionality[length] <= 3) {
  this.showModel = true;
 }
},
  
    submit() {

 fetch("/white-label-2", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify(
                "    CHECKED BOXES:     " +
              this.post.checkedOps + '' +
                "    AMOUNT:     " +
              this.post.amount     + '' +
              "BILLING:     " +
              this.post.bill   /*  + '' +  */
            )
        })
        .then(r => r.text())
        .then(t => alert(t));
      }
  },
};
</script>

<style lang="scss" scoped>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>