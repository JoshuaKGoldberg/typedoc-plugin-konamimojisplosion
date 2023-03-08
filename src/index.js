export function load(app) {
	app.renderer.hooks.on("head.end", () =>
		JSX.createElement("script", {
			async: true,
			src: "https://unpkg.com/konamimojisplosion/dist/global.js",
		})
	);
}
//# sourceMappingURL=index.js.map
