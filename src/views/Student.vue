<template>
  <div>
    <h1>Students from database.</h1>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col>
          <StudentItem
            v-for="student in actualStudents()"
            :key="student.id"
            v-bind:student="student"
          />
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-container>
  </div>
</template>

<script>
import StudentItem from "@/components/StudentItem";

export default {
  name: "Student",
  components: { StudentItem },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("fetchStudents");
  },
  methods: {
    actualStudents() {
      return this.$store.getters.getActualStudents;
    },
  },
  computed: {},
};
</script>

<style scoped></style>
