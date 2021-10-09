<template>
  <v-card class="ma-6" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ user.firstName + " " + user.lastName }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <img
          src="https://p.kindpng.com/picc/s/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
          alt="avatar"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded @click="$emit('delete-user', user.id)" color="error"> Delete User </v-btn>

      <AddUser
        v-bind:user="user"
        v-bind:isEdit="true"
        v-on:edit-user="editUser"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import AddUser from "./AddUser.vue";
export default {
  components: { AddUser },
  name: "UserCard",
  props: ["user"],
  methods: {
    // Send up to parent
    editUser({ id, newUser }) {
      this.$emit("edit-user", { id, newUser });
    },
  },
};
</script>
