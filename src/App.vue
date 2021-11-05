<template>
  <v-app>
    <v-app-bar app color="primary" dark class="mb-2">
      <div class="d-flex align-center mr-10">
        <h1>Users List</h1>
      </div>
      <v-spacer> </v-spacer>
      <v-text-field v-model="search" label="Search"></v-text-field>
      <AddUser v-on:add-user="addUser" />
    </v-app-bar>
    <UserList
      v-on:delete-user="deleteUser"
      v-on:edit-user="editUser"
      v-bind:users="filtred(users, search)"
    />
  </v-app>
</template>

<script>
import AddUser from "./components/AddUser.vue";
import UserList from "./components/UserList.vue";
import usersData from "./data/usersData";

export default {
  name: "App",
  components: {
    UserList,
    AddUser,
  },
  data() {
    return {
      users: usersData,
      search: "",
    };
  },

  methods: {

    //Adding user to fake database
    addUser(newUser) {
      this.users = [...this.users, newUser];
    },

    //Deleting user by ID
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },

    //Edit user by ID and updating new object 
    editUser({ id, newUser }) {
      this.users = this.users.map((user) => (user.id === id ? newUser : user));
    },

    // Filter list of users by any key (firstName, lastName,email)
    filtred(usersList, searchInput) {
      return usersList.filter(
        (el) =>
          el.firstName
            .toUpperCase()
            .includes(searchInput.toUpperCase().trim()) ||
          el.lastName
            .toUpperCase()
            .includes(searchInput.toUpperCase().trim()) ||
          el.email.toUpperCase().includes(searchInput.toUpperCase().trim())
      );
    },
  },
};
</script>

