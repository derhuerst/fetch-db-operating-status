'use strict'

const a = require('assert')
const fetchOperatingStatus = require('.')

fetchOperatingStatus()
.then((data) => {
	a.ok(data)
	a.strictEqual(typeof data.messageId, 'number')

	a.ok(data.translations)
	a.ok(Object.keys(data.translations).length > 0)
	for (const [language, entry] of Object.entries(data.translations)) {
		a.ok(entry, language)

		if (entry.title !== null) {
			a.strictEqual(typeof entry.title, 'string', language + '.title')
			a.ok(entry.title, language + '.title')
		}
		if (entry.message !== null) {
			a.strictEqual(typeof entry.message, 'string', language + '.message')
			a.ok(entry.message, language + '.message')
		}
		if (entry.link !== null) {
			a.strictEqual(typeof entry.link, 'string', language + '.link')
			a.ok(entry.link, language + '.link')
		}
	}
})
.catch(console.error)
