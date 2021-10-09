<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded color="info" dark v-bind="attrs" v-on="on">
          {{ title }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="first name*"
                  v-model="firstName"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="last name*"
                  v-model="lastName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="action"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddUser",
  props: ["user", "isEdit"],
  data() {
    return {
      title: this.isEdit ? "Edit User" : "Add New User",
      dialog: false,
      id: this.isEdit ? this.user.id : Math.random(),
      firstName: this.isEdit ? this.user.firstName : "",
      lastName: this.isEdit ? this.user.lastName : "",
      email: this.isEdit ? this.user.email : "",
    };
  },

  methods: {
    //Adding/Editing user depending on passed props
    action() {
      const newUser = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      };

      if (this.firstName && this.lastName && this.email) {
        if (this.isEdit) {
          this.$emit("edit-user", { id: this.id, newUser });
        } else {
          this.$emit("add-user", newUser);
          this.id = "";
          this.firstName = "";
          this.lastName = "";
          this.email = "";
        }
      }

      this.dialog = false;
    },
  },
};
</script>
