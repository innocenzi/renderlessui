import { App as Application, Plugin } from "vue";
import * as components from "./components/index";
import { setVueInstance } from "./utils/config/index";

const install: Exclude<Plugin["install"], undefined> = (
  instance: Application
) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance.use((components as any)[componentKey]);
  }
};

export default install;

export * from "./components";
