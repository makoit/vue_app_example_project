import Vue from "vue";
import Vuex from "vuex";
import student from "@/store/modules/student.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { student },
});
