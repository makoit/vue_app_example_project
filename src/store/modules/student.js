import DbService from "@/services/DatabaseService.js";

export default {
  state: {
    students: [],
  },
  mutations: {
    SET_STUDENTS(state, data) {
      state.students = data;
    },
  },
  actions: {
    fetchStudents({ commit }) {
        DbService.getStudents()
        .then(({ data }) => commit("SET_STUDENTS", data))
        .catch((Error) => console.log(Error));
    },
  },
  getters: {
    getActualStudents: (state) => {
      return state.students;
    },
  },
};
