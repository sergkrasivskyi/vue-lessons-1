<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Card from "./components/Card/Card.vue";
import Foo from "./components/Foo/Foo.vue";
import { ref, onMounted } from "vue";
import { useCssModule } from "vue";
useCssModule("classes");
let isToggle = ref(true);
let newComponent = ref("");
function isToggled() {
  if (isToggle) {
    newComponent = "Foo";
  } else {
    newComponent = "Card";
  }
  isToggle = !isToggle;
}
</script>
<script>
export default {
  name: "App",
  data() {
    return {
      flatName: "df",
      flatPrice: "df",
      flatImg: null,
      imgUrl: null,
      message: "Список квартир",
      flats: [
        { name: "1k", price: "15", img: null, urlImg: "" },
        // { name: "2к", price: "20"},
        // { name: "3к", price: "30"},
        // { name: "", price: ""},
      ],
    };
  },
  methods: {
    addFlat() {
      const flat = {
        name: this.flatName,
        price: this.flatPrice,
        img: this.flatImg,
        urlImg: this.imgUrl,
      };
      this.flats.push(flat);
    },
    deleteFlat(removingFlat) {
      // let flat = { name: this.flatName, price: this.flatPrice };
      this.flats = this.flats.filter((el) => el != removingFlat);
    },
    addImg() {
      this.flatImg = this.$refs.file.files[0];
      this.imgUrl = URL.createObjectURL(this.flatImg);
    },
  },
  computed: {
    description() {
      return `${this.flatName} квартира вартує ${this.flatPrice} тисяч доларів
			більше фото:`;
    },
  },
};
// ! замість v-on:keydown.enter="add" можна писати @keydown.enter="add"
// ! тобто v-on замінюємо @
// також
//  замість v-bind:key="cs" пишемо просто :key="cs"
// тобто v-bind видаляємо та залишаємо :
</script>

<template>
  <div class="component-cover">
    <form action="">
      <ul class="flats-list">
        <li>
          <input class="logo" v-model="flatName" type="text" />
        </li>
        <li>
          <input class="logo" v-model="flatPrice" type="text" />
        </li>
        <li>
          <input
            type="file"
            name="flatImg"
            id="flatimage"
            ref="file"
            @change="addImg"
          />
        </li>
        <!-- <p :class="classes.title">Im styling from Foo</p> -->
        <li>
          <!-- <input class="logo" :value="description" type="text" /> -->
        </li>

        <li class="logo vue" v-for="flat in flats" :key="flat">
          {{ `${flat.name} квартира вартує ${flat.price} тисяч доларів` }}
          <br />
          <!-- {{ description }} -->
          <img :src="flat.urlImg" alt="" width="300" />
          <br />
          <button type="button" @click="deleteFlat(flat)">Del</button>
        </li>
      </ul>
      <!-- <p>{{ flatName }}</p> -->
      <!-- <p>{{ flatPrice }}</p> -->
      <button class="logo vue add-button" type="button" @click="addFlat">
        Press to Add
      </button>
    </form>
		<p>{{ newComponent }}</p>

    <button class="logo vue" type="button" @click="isToggle = !isToggle">
      Press ME to Toggle
    </button>
    <component :is="isToggle ? Foo : Card"></component>
    <!-- <component :is="Foo1"></component> -->
    <!-- <Foo /> -->
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
.logo {
  padding: 0.5em;
  border: 2px solid #646cffaa;
  border-radius: 1em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  border: 2px solid #42b883aa;
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
