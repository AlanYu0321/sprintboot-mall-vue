<!--<script setup>-->
<!--import { ref } from 'vue'-->

<!--defineProps({-->
<!--  msg: String,-->
<!--})-->

<!--const count = ref(0)-->
<!--</script>-->

<!--<template>-->
<!--  <h1>{{ msg }}</h1>-->

<!--  <div class="card">-->
<!--    <button type="button" @click="count++">count is {{ count }}</button>-->
<!--    <p>-->
<!--      Edit-->
<!--      <code>components/HelloWorld.vue</code> to test HMR-->
<!--    </p>-->
<!--  </div>-->

<!--  <p>-->
<!--    Check out-->
<!--    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"-->
<!--      >create-vue</a-->
<!--    >, the official Vue + Vite starter-->
<!--  </p>-->
<!--  <p>-->
<!--    Learn more about IDE Support for Vue in the-->
<!--    <a-->
<!--      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"-->
<!--      target="_blank"-->
<!--      >Vue Docs Scaling up Guide</a-->
<!--    >.-->
<!--  </p>-->
<!--  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
<!--</template>-->

<!--<style scoped>-->
<!--.read-the-docs {-->
<!--  color: #888;-->
<!--}-->
<!--</style>-->
<template>
  <div>
    <h1>{{ serverResponse }}</h1>
    <input type="text" v-model="product.productId" placeholder="Enter your message"/>
    <button @click="submitData">Submit</button>

    <h1>{{ helloWorldResponse }}</h1>
    <input v-model="message" placeholder="Enter your message"/>
    <button @click="submitHelloWorld">Submit</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      product: {
        productId: null
      },
      serverResponse: '', // 後端的回應
      message: '', // 用戶輸入的訊息
      helloWorldResponse: ''
    };
  },
  methods: {
    submitData() {
      // 發送 POST 請求，將 message 發送至後端
      axios.post('http://localhost:8080/products', this.product)
      .then(response => {
        // 接收後端的回應
        this.serverResponse = response.data.reply;
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
    },
    submitHelloWorld() {
      // 發送 POST 請求，將 message 發送至後端
      axios.post('http://localhost:8080/helloWorld',
          {
            message: this.message // 傳遞的資料
          }
      )
      .then(response => {
        // 接收後端的回應
        this.helloWorldResponse = response.data.reply;
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
    }
  }
}
</script>
