<template>
  <div id="main">
  <nav class="navbar">
            <div class="logo mt-3 mb-3" href="#">
                <a>
                    <img :src="logo">
                </a>
            </div>         
            <div id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Analytics</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/projects">Billing</a>
                    </li>
                </ul>
            </div>
        <img width="42" height="32" class="rounded-circle" :src="profileAvatar">
    </nav>
    <nav class="bullets" aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#"></a>
      <label class="mt1">STEP 1</label>
    </li>
    <li class="page-item"><a class="page-link" href="#"></a>
    <label class="mt1">STEP 2</label>
    </li>
    <li class="page-item"><a class="page-link" href="#"></a>
    <label class="mt1 position-absolute">STEP 3</label>
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
  data(){
    return {
      logo: logo,
      profileAvatar: profileAvatar
    }
  },

   methods: {

  },
};
</script>

<style lang="scss">
* {
  .title {
    margin-top: -40px;
  }

  input[type=checkbox] {
  height: 20px;
  width: 20px;
  background-color: #eee;
  margin-left: 0.5rem;
  border-radius: 0px !important;
}

input[type="checkbox"]:cheched {
    background-color: #948000;
  }

  button {
    background-color: #948000;
    color:#ffffff;
    border-width: 0rem;
    border-radius: 5%;
    padding: 0.5em 1em;
  }

  select {
  color: #f3f2f2 !important;
  background-color: #94a3a8 !important;
  /* max-width: 3rem; */
}
}

.logo {
  display: flex;
  justify-content: center;
  flex: 2;

  img{
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
    border-top: 2px solid black;
    margin-top: 15px;
 }
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
  border: 2px solid black;
  margin-top: -13px;
  line-height: 475px;
  text-align: center;
  border-radius: 50%;
}

/* .page-link:visited {

} */


.page-item:nth-child(1), .page-item:nth-child(2) {
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
    margin-left:20px;
}

.nav-link {
  color: #ffffff;
  &:hover{
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

.logo, #navbarResponsive {
  flex: 1;
}

.page-item:nth-child(1), .page-item:nth-child(2) {
  margin-right: 40px;
}

.page-item:nth-child(1), .page-item:nth-child(2) {
  margin-right: 20px;
}


}

@media (min-width: 250px) and (max-width: 1242px) {

.title {
    margin-top: 35px;
  }

}

</style>