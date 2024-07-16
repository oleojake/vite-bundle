# Laboratorio de Bundling
## Vite

Se ha elaborado un bundle haciendo uso de Vite. Se han realizado diferentes configuraciones para que sea capaz de: 

- Soportar TypeScript
- Soportar React

[**vite.config.ts**](./vite.config.ts)
````TypeScript
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [checker({ typescript: true }), react()],
	// camelCase for CSS Modules
	css: {
		modules: {
			localsConvention: "camelCase",
		},
	},
});
````

También se han añadido variables de entorno, maquetación con sass y configuración de Node Modules CSS.

