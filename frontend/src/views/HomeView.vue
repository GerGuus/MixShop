<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
// import { onMounted} from "vue";
import axios from "axios";

// onMounted(async () =>{
//     const data = await axios.get("/api/user");
//     console.log(data);
// })
export default {
  name: 'HomeView',
    created() {
     const data = axios.get("/api/user");
     console.log(data);
    }
}
</script>
