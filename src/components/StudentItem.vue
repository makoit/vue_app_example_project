<template>
  <v-card class="mx-auto">
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">Student Details</div>
        <v-list-item-title class="headline mb-1" style="padding-bottom: 25px">
          {{ student.fullname }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <p>
            <b>Mail:</b>
            {{ student.email }}
          </p>
          <p>
            <b>Course of Study:</b>
            {{ student.course_of_study }}
          </p>
          <p>
            <b>Actuale year:</b>
            {{ student.year }}
          </p>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  computed: {},
  filters: {},
};
</script>

<style scoped></style>
