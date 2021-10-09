<template>
  <v-main>
    <v-container class="mt-10">
      <v-row class="text-center d-flex justify-space-between">
        <div v-bind:key="user.id" v-for="user in users">
          <UserCard
            v-on:delete-user="$emit('delete-user', user.id)"
            v-on:edit-user="editUser"
            v-bind:user="user"
          />
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import UserCard from "./UserCard.vue";
export default {
  components: { UserCard },
  name: "UserList",

  props: ["users"],

  methods: {
    // Send up to parent
    editUser({ id, newUser }) {
      this.$emit("edit-user", { id, newUser });
    },
  },
};
</script>
