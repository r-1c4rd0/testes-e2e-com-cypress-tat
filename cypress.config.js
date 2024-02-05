const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		chromeWebSecurity: false,
		defaultCommandTimeout: 25000,
		baseUrl: 'https://notes-serverless-app.com',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
