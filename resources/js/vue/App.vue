<template>
    <div id="main">
        <nav class="navbar">
            <div class="logo mt-3 mb-3" href="#">
                <a>
                    <img :src="logo" />
                </a>
            </div>
            <div id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Analytics</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Billing</a>
                    </li>
                </ul>
            </div>
                <div class="profile-image mr-3">
                    <img
                       width="42"
                       height="32"
                       class="rounded-circle"
                       :src="profileAvatar"
                      />
                </div>
        </nav>
        <nav class="bullets" aria-label="...">
            <ul class="pagination">
                {{
                    pagination()
                }}
                <li class="page-item">
                    <div class="page-link" href="#" v-bind:class="{ activeBorder: firstNav }"></div>
                    <label class="mt1" v-bind:class="{ active: firstNav }">
                        STEP 1</label
                    >
                </li>
                <li class="page-item">
                    <div class="page-link" href="#" v-bind:class="{ activeBorder: secNav }"></div>
                    <label class="mt1" v-bind:class="{ active: secNav }">
                        STEP 2
                    </label>
                </li>
                <li class="page-item">
                    <div class="page-link" href="#" v-bind:class="{ activeBorder: thirdNav }"></div>
                    <label
                        class="mt1 position-absolute"
                        v-bind:class="{ active: thirdNav }"
                    >
                        STEP 3
                    </label>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import logo from "./assets/logo.svg";
import profileAvatar from "./assets/profile-avatar.jpg";

export default {
    name: "App",
    components: {},
    data() {
        return {
            logo: logo,
            profileAvatar: profileAvatar,

            firstNav: false,
            secNav: false,
            thirdNav: false
        };
    },

    methods: {
        pagination() {
            if (this.$route.name == "firstStep") {
                this.firstNav = true;
                this.secNav = false;
                this.thirdNav = false;
            } else if (this.$route.name == "secondStep") {
                this.secNav = true;
                this.firstNav = false;
                this.thirdNav = false;
            } else {
                this.thirdNav = true;
                this.firstNav = false;
                this.secNav = false;
            }
        }
    }
};
</script>

<style lang="scss">
* {
    .title {
        margin-top: -40px;
    }

    .active {
        
            color: #000000 !important;
    }

    .activeBorder {
      border: 2px solid #000000 !important;
    }

    .check-wrapper {
        position: relative;
        margin: 0 0 1em 1em;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .check-wrapper input {
        display: none;
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border: 2px solid #000000;
    }

    .check-wrapper:hover input ~ .checkmark {
        background-color: #ccc;
    }

    .check-wrapper input:checked ~ .checkmark {
        background-color: #948000;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    .check-wrapper input:checked ~ .checkmark:after {
        display: block;
    }

    .check-wrapper .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    button {
        background-color: #948000;
        color: #ffffff;
        border-width: 0rem;
        border-radius: 5%;
        padding: 0.5em 1em;
    }
}

.profile-image {
    flex: 0.2;
}

.logo {
    display: flex;
    justify-content: center;
    flex: 2;

    img {
        height: 70px;
    }
}

.navbar {
    background-color: #000000;
    display: flex;
    flex-wrap: wrap;
}
.bullets {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .pagination {
        display: flex;
        justify-content: space-between;
        border-top: 2px solid #000000;
        margin-top: 15px;
    }
}

.page-item label {
  color: #878787;
}

.position-absolute {
    position: absolute;
}

.page-link {
    height: 27px;
    width: 20px;
    border-radius: 50% !important;
    background-color: #ffffff;
    font-weight: bold;
    border: 2px solid #878787;
    margin-top: -13px;
    line-height: 475px;
    text-align: center;
    border-radius: 50%;

    &:hover {
        background-color: #ffffff !important;
        border: 2px solid #878787;
    }
}

/* .page-link:visited {

} */

.page-item:nth-child(1),
.page-item:nth-child(2) {
    margin-right: 80px;
}

#navbarResponsive {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex: 3;
    justify-content: flex-start;
}

.navbar-nav {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
}

.nav-link {
    color: #ffffff;
    &:hover {
        color: #92a2a7;
    }
    &:nth-child(1) {
        margin-right: 50px;
    }
}

@media (min-width: 250px) and (max-width: 500px) {
    .title {
        font-size: 30px;
    }

    .pagination {
        max-width: 190px !important;
    }

    .page-link {
        height: 17px;
        width: 5px;
        margin-top: -9px;
    }

    .page-item label {
        font-size: 12px;
        position: absolute;
        margin-right: 15px;
    }

    .logo {
        img {
            height: 35px;
        }
    }

    .logo,
    #navbarResponsive {
        flex: 1;
    }

    .page-item:nth-child(1),
    .page-item:nth-child(2) {
        margin-right: 40px;
    }

    .page-item:nth-child(1),
    .page-item:nth-child(2) {
        margin-right: 20px;
    }
}

@media (min-width: 250px) and (max-width: 1242px) {
    .title {
        margin-top: 35px;
    }
}
</style>
