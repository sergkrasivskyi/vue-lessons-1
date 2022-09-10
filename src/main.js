// імпортуємо функцію createApp - створення застосунку (Application)
import { createApp } from "vue";

import "./style.scss";
// імпортуємо застосунок з відповідного файлу компоненту *.vue
import App from "./App.vue";
import Card from "./components/Card/Card.vue";
import Foo from './components/Foo/Foo.vue'

// підв'язуємо наш компонент до розмітки в index.html файлі
// у даному випадку з id="#app"
createApp(App).mount("#app");
// createApp(Card).mount('#card');

// створюємо екземпляр застосунку у якусь змінну
const myApp = createApp(Card);
// у дужках передаємо об'єкт, а у даному випадку беремо його із створеного SFC
// адле можемо і писати самостійно.
// Якщо:
console.log(myApp);
// то:
// Object { _uid: 1, _component: {…}, _props: null, _container: null, _context: {…}, _instance: null, version: "3.2.38", config: Getter & Setter, use: use(plugin, options), mixin: mixin(mixin), … }
// Тобто в консолі ми побачимо наш екземпляр

// 
myApp.mount("#card");
// Можна зробити налаштування за допомогою  об'єкту .config
// нашого застосунку myApp, наприлад, оброблювач помилок
// він перехоплює помилки компонентів нашого застосунка
myApp.config.errorHandler = (err) => {
console.log('Помилка застосунку myApp')
}
// За допомогою методу .component ми реєструємо ще компоненти у нашому застосунку та 
// можемо викоритовувати їх будь-де у нашому затосунку
myApp.component('Foo', Foo);
//  Потрібно застосовувати всі кофігурації до монтажу застосутнку mounted
myApp.provide('message', "Slava Ukraini!")
