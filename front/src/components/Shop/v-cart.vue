<template>
  <v-container class="v-cart">
    <v-row class="justify-center">
      <h1>Cart</h1>
      <router-link :to="{ name: 'shop' }">
        <div class="v-cart__link_to_catalog">
          <v-icon>mdi-keyboard-backspace</v-icon>
        </div>
      </router-link>
    </v-row>
    <v-row>
      <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @delFromCart="delFromCart(index)"
      />
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green darken-1" dark v-bind="attrs" v-on="on">
            Buy({{cart_data.length}}) = $1000
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Order</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" validation>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal first name*"
                      hint="Обязательное поле"
                      v-model="firstName"
                      persistent-hint
                      required
                      :rules="firstNameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal last name*"
                      hint="Обязательное поле"
                      v-model="lastname"
                      persistent-hint
                      required
                      :rules="lastNameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal middle name"
                      v-model="middleName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email*"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Phone*"
                      type="text"
                      v-model="phone"
                      prepend-icon="mdi-phone"
                      :rules="phoneRules"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Delivery address*"
                      type="text"
                      v-model="address"
                      :rules="addressRules"
                      required
                      prepend-icon="mdi-map-marker"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      solo
                      name="message"
                      label="Message"
                      v-model="message"
                      hint="Опциональное поле"
                      persistent-hint
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="4">
                    <v-subheader>Total Price</v-subheader>
                  </v-col>
                  <v-col cols="8">
                    <v-text-field
                      disabled
                      label="Amount"
                      value="10.00"
                      prefix="$"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn
              color="blue darken-1"
              :disabled="!valid"
              text
              @click="dialog = false"
              >Buy</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  data: () => ({
    dialog: false,
    // форма заказа
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    valid: false,
    firstNameRules: [
      (v) => !!v || "Обязательное поле",
      (v) => v.length <= 30 || "Слишком длинное имя",
    ],
    lastNameRules: [
      (v) => !!v || "Обязательное поле",
      (v) => v.length <= 30 || "Слишком длинная фамилия",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    addressRules: [
      (v) => !!v || "Обязательное поле",
      (v) => v.length <= 50 || " ",
    ],
    phoneRules: [
      (v) => !!v || "Обязательное поле",
      (v) => v.length <= 12 || " ",
    ],
  }),
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {},
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),

    delFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="css">
.v-cart__link_to_catalog {
  position: absolute;
  top: 60px;
  left: 20px;
  padding: 5px;
  border: 1px solid #aeaeae;
}
</style>
