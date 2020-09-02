module.exports = {
    api: {
        port: process.env.API_PORT || 9090
    },
    mongo: {
        host: 'mongodb+srv',
        user: 'mduarte',
        password: 'Mduarte352',
        database: 'settle'        
    },
    fixer: {
        url: 'http://data.fixer.io/api/latest',
        access_key: 'ffcc344a3f31700c0020d166fd17ea96',
        symbols: 'USD,ARS,BRL,EUR'
    }
}