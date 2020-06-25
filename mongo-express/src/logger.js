import bunyan from 'bunyan'

const log = bunyan.createLogger({
    name: 'waisal jenius',
    streams: [{
        level: 'info',
        stream: process.stdout
    }, {
        level: 'error',
        path: './myapp-error.log'
    }]
})

export default log