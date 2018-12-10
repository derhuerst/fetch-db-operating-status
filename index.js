'use strict'

const {fetch} = require('fetch-ponyfill')()

const endpoint = 'https://www.bahn.de/sonderkommunikation/json/apps/dbnavigator/index.shtml'

const fetchOperatingStatus = () => {
	// Async stack traces are not supported everywhere yet, so we create our own.
	const err = new Error()
	err.isServerError = true

	return fetch(endpoint, {
		headers: {
			'accept': 'application/json',
			'user-agent': 'derhuerst/fetch-db-operating-status'
		},
		mode: 'cors',
		redirect: 'follow'
	})
	.then((res) => {
		if (!res.ok) {
			err.message = res.statusText
			err.statusCode = res.status
			throw err
		}
		return res.json()
	})
	.then((data) => {
		const translations = Object.create(null)
		for (const language of Object.keys(data)) {
			if (language === 'id') continue
			const entry = data[language]
			translations[language] = {
				title: entry.title || null,
				message: entry.text || null,
				link: entry.link || null
			}
		}

		return {
			messageId: data.id,
			translations
		}
	})
}

module.exports = fetchOperatingStatus
