import Vue, {VueConstructor} from 'vue'
import { Button, Table,TableColumn } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './winter-sweet-ui.vue';
// @ts-ignore
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
Vue.use(Table)
Vue.use(TableColumn)
new Vue({
  el: '#app',
  render: h => h(App)
});
/**
 * @FYI https://www.yuque.com/docs/share/a72a1b84-c0e4-4bd5-853f-6711cb08a507
 */
declare module '@lichongbing/winter-sweet-ui' {
  class VueComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type WinterSweetUiData = {}

  type WinterSweetUiMethods = {}

  type WinterSweetUiComputed = {}

  type WinterSweetUiProps = {}

  type WinterSweetUi = Combined<
    WinterSweetUiData,
    WinterSweetUiMethods,
    WinterSweetUiComputed,
    WinterSweetUiProps
  >

  export interface WinterSweetUiType extends VueComponent, WinterSweetUi {}

  const WinterSweetUiConstruction: ExtendedVue<
    Vue,
    WinterSweetUiData,
    WinterSweetUiMethods,
    WinterSweetUiComputed,
    WinterSweetUiProps
  >

  export default WinterSweetUiConstruction
}
