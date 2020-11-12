var https = require('https');

const options = {
	hostname: '192.168.1.1',
	port: 443,
	path: '/update.result',
	method: 'GET',
	rejectUnauthorized: false, 
	requestCert: true, 
	agent: false
}

const req = https.request(options, res => {
	res.on('data', d => {
		lines_array = String(d).split("\n")
		flash(lines_array[lines_array.length - 2])
	})
})

req.on('error', error => {
	console.error(error)
})

req.end()
