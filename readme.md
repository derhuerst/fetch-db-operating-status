# fetch-db-operating-status

**Fetch alerts about the operating status of Deutsche Bahn.**

[![npm version](https://img.shields.io/npm/v/fetch-db-operating-status.svg)](https://www.npmjs.com/package/fetch-db-operating-status)
[![build status](https://api.travis-ci.org/derhuerst/fetch-db-operating-status.svg?branch=master)](https://travis-ci.org/derhuerst/fetch-db-operating-status)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/fetch-db-operating-status.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install fetch-db-operating-status
```


## Usage

```js
const fetchOperatingStatus = require('.')

fetchOperatingStatus()
.then(console.log)
.catch(console.error)
```

```js
{
	messageId: 9086315,
	translations: {
		en: {
			title: 'Strike is over',
			message: 'Minor disruption to rail services can still occur.',
			link: 'https://www.bahn.de/p/view/service/aktuell/index.shtml'
		},
		de: {
			title: 'Nach Streikende: Bahnverkehr stabilisiert sich weiter.',
			message: 'Für Dienstag, 11.12. regulärer Zugverkehr erwartet. ',
			link: 'https://www.bahn.de/p/view/service/aktuell/index.shtml?dbkanal_007=L01_S01_D001_KIN0001_blitzbox-bahndeaktuell-021218_LZ01'
		}
	}
}
```


## Contributing

If you have a question or need support using `fetch-db-operating-status`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/fetch-db-operating-status/issues).
