import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    const textmsg = "I am Hello World Component";
    console.log(textmsg);
    return {
      textmsg
    };
  }
});
