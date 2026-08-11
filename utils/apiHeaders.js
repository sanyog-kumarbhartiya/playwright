require('dotenv').config();

function getApiHeaders() {

    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.API_TOKEN}`
    };

}

module.exports = {
    getApiHeaders
};