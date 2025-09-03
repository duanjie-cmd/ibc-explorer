import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './theme/index.less';
import './assets/icon/iconfont';
import './assets/icon/iconfont.css';
import { createPinia } from 'pinia';
import { imgLoadingDirectiveInstall } from '@/directive/imageLoading';
// import 'default-passive-events';

const app = createApp(App);
imgLoadingDirectiveInstall(app);
app.use(router).use(createPinia()).mount('#app');
