import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //STEP 1
        business: "",
        logo: null,
        icon: null,
        color1: "#9c0404",
        color2: "#00727c",
        color3: "#000e0d",
        font: "Helvetica",
        appUrl: null,

        //STEP 2
        amenity: "DISABLED",

        adminRolles: {
            tsa: null,
            operationsManager: null,
            pm: null,
        },
        nfcFunctionality: {
            booking: null,
            covid19: null,
            hid: null,
        },

        bill: null,
        price: null,

        //STEP 3
        email1: null,
        email2: null,
        verify: false,
    },
    mutations: {

        setBusiness(state, value) {
            if (value.length >= 4 && value.length <= 13) {
                state.business = value

                if (!/^[a-zA-Z &_.]+$/.test(value)) {
                    // for better UX then state.business = false
                    state.business = "    ";
                }
            } else {
                state.business = "";
            }
        },
        setLogo(state, value) {
            state.logo = value
        },
        setIcon(state, value) {
            state.Icon = value
        },
        setColor1(state, value) {
            state.color1 = value
        },
        setColor2(state, value) {
            state.color2 = value
        },
        setColor3(state, value) {
            state.color3 = value
        },
        setFont(state, value) {
            state.font = value
        },
        setAppUrl(state, value) {
            state.appUrl = value
        },
        setAmenity(state, value) {
            state.amenity = value
        },
        setTSA(state, value) {
            state.adminRolles.tsa = value
        },
        setOperationsManager(state, value) {
            state.adminRolles.operationsManager = value
        },
        setPM(state, value) {
            state.adminRolles.pm = value
        },
        setBooking(state, value) {
            state.nfcFunctionality.booking = value
        },
        setCovid19(state, value) {
            state.nfcFunctionality.covid19 = value
        },
        setHID(state, value) {
            state.nfcFunctionality.hid = value
        },
        setBill(state, value) {
            state.bill = value
        },
        setPrice(state, value) {
            state.price = value;
        },
        setEmail1(state, value) {
            state.email1 = value
        },

        setEmail2(state, value) {
            state.email2 = value
        },

        setVerify(state, value) {
            state.verify = value
        },
    }
})