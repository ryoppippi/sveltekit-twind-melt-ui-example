import {preprocessMeltUI} from "@melt-ui/pp";
import sequence from "svelte-sequential-preprocessor";
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config}*/
const config = {
  preprocess: sequence([
    preprocessMeltUI()
  ]),
  kit: {
    adapter: adapter(),
  }
};
export default config;
