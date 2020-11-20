import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    msg: String
  },

  render() {
    return h("button", "I'm a button");
  }
});
