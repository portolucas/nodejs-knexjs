const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://user:30101966@cluster0-dusnj.mongodb.net/test?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}

