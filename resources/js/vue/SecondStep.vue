<template>
  <div class="container">
     <h1 class="title">
    {{title}}
    </h1>
    <form @submit.prevent="navigateNext()" method="POST" role="form">
    <div class="row form-group mb-5">
        <label for="amenity" name="amenity" class="col-md-3">
          Amenity Functionality:
        </label>
        <div class="col-md-2">
          <label class="check-wrapper">
         <input type="checkbox" value="Amenity" id="amenity" name="amenity" v-model="amenity">
        <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="row form-group mb-5">
        <label for="adminRolles" name="adminRolles" class="col-md-3">        
          Admin Roles:
        </label>
        <div class="col-md-2 d-flex align-items-center">
          <small class="text-center">TSA</small>
           <label class="check-wrapper">
       <input type="checkbox" id="tsa" value="TSA" name="tsa" v-model="tsa">
        <span class="checkmark"></span>
          </label>
        </div>
        <div class="col-md-2 d-flex align-items-center">
          <small class="text-center">Operations <br> Manager</small>
           <label class="check-wrapper">
      <input type="checkbox" id="operationsManager" value="Operations Manager" name="operationsManager" v-model="operationsManager">
     <span class="checkmark"></span>
          </label>
         </div>
        <div class="col-md-2 d-flex align-items-center">
          <small class="text-center">Assistant <br> PM</small>
          <label class="check-wrapper">
              <input type="checkbox" id="pm" name="pm" value="Assistant PM" v-model="pm">
     <span class="checkmark"></span>
          </label>
       </div>
       <small v-if="this.validInput_1 == true" class="text-danger">Nothing selected</small>
      </div>
      <div class="row form-group mb-5">
        <label for="nfc" name="nfc" class="col-md-3">        
          NFC Functionality:
        </label>
        <div class="col-md-2 d-flex align-items-center">
          <small class="text-center">Tablet <br> Booking</small>
           <label class="check-wrapper">
               <input type="checkbox" id="booking" name="booking" value="Tablet Booking" v-model="booking">
              <span class="checkmark"></span>
          </label>
       </div>
        <div class="col-md-2 d-flex align-items-center">
          <small class="text-center">COVID19 <br> Waiver</small>
          <label class="check-wrapper">
                  <input type="checkbox" id="covid19" value="Covid-19 Waiver" name="covid19" v-model="covid19">
               <span class="checkmark"></span>
          </label>
       </div>
        <div class="col-md-2 text-muted d-flex align-items-center">
          <small class="text-center">HID Door <br> Access</small>
           <label class="check-wrapper">
              <input type="checkbox" id="hid" value="hid" name="hid" v-model="hid" disabled>
               <span class="checkmark"></span>
          </label>
       <small class="comming-soon text-center">(Coming Soon)</small>
        </div>
        <small v-if="this.validInput_2 == true" class="text-danger">Nothing selected</small>
      </div>
      <h1>Billing By Aspen</h1>
        <div class="row form-group mb-5">
        <div  class="col-md-6">
          <label for="font">
            How often whill the custommer be billed for the white label: 
        </label>
        </div>
        <div  class="col-md-6">
       <select name="bill" id="bill" v-model="bill"
       class="form-select form-select-sm" 
       aria-label="Default select example" required>
       >
  <option
            v-for="(period, index) in periods"
            v-bind:key="index"
            :value="period"
          >{{period}}</option>
</select>
        </div>
      </div>
     <div class="row form-group mb-5">
        <label for="appUrl" class="col-md-2">   
            What is the cost during this pay period:
        </label>
        <div class="col-md-4">
         <input type="number" name="price" id="price" placeholder="Enter Amount (Ex. 4500$)" v-model="price" required> <br>
         <small>Yearly Total Revenue: $54.000</small>
        </div>
      </div>
      <button @click="navigateNext()">CONTINUE</button>
      </form>
  </div>
</template>

<script>
import buttons from "./Buttons.vue"


export default {

components: {
            Buttons: buttons
        },

  computed: {
            amenity: {
                get() {
                    return this.$store.state.amenity
                },
                set(value) {
                    this.$store.commit('setAmenity', value)
                }
            },
            tsa: {
                get() {
                    return this.$store.state.adminRolles.tsa
                },
                set(value) {
                    this.$store.commit('setTSA', value)
                }
            },
            operationsManager: {
                get() {
                    return this.$store.state.adminRolles.operationsManager
                },
                set(value) {
                    this.$store.commit('setOperationsManager', value)
                }
            },
            pm: {
                get() {
                    return this.$store.state.adminRolles.pm
                },
                set(value) {
                    this.$store.commit('setPM', value)
                }
            },
            booking: {
                get() {
                    return this.$store.state.nfcFunctionality.booking
                },
                set(value) {
                    this.$store.commit('setBooking', value)
                }
            },
            covid19: {
                get() {
                    return this.$store.state.nfcFunctionality.covid19
                },
                set(value) {
                    this.$store.commit('setCovid19', value)
                }
            },
              hid: {
                get() {
                    return this.$store.state.nfcFunctionality.hid
                },
                set(value) {
                    this.$store.commit('setHID', value)
                }
            },   
              bill: {
                get() {
                    return this.$store.state.bill
                },
                set(value) {
                    this.$store.commit('setBill', value)
                }
            },
             price: {
                get() {
                    return this.$store.state.price
                },
                set(value) {
                    this.$store.commit('setPrice', value)
                }
            },
  },

  data() {
      return {
          title: "Functionality",
          periods: ["MONTHLY", "QUARTERLY", "YEARLY"],
          validInput_1: false,
          validInput_2: false,
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

  navigateNext() {
  const findTrue = Object.keys(this.$store.state.adminRolles).find(key => 
    this.$store.state.adminRolles[key] == true);

    if(!findTrue) {
      this.validInput_1 = true;
    } else if (findTrue) {
      this.validInput_1 = false
    }

  const findTrue_1 = Object.keys(this.$store.state.nfcFunctionality).find(key => 
    this.$store.state.nfcFunctionality[key] == true);

    if(findTrue_1) {
      if(findTrue) {
      this.$router.push('/third-step/');
      }
    } 
    if (findTrue_1) {
        this.validInput_2 = false;
      }
     else {
      this.validInput_2 = true;
    }
    if (this.$store.state.bill == null){
        this.$router.push('/second-step/')
        }

    else if (this.$store.state.price == null) {
        this.$router.push('/second-step/')
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