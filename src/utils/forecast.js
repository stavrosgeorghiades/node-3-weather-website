const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/39e707350f9c815b0dc854478b214476/${encodeURIComponent(lat)},${encodeURIComponent(long)}?units=si`
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unble to connect to weather service!', undefined);
            
        } else if (body.error){
            callback('Unable to find location', undefined);
            
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability * 100}% chance of rain. Todays high will be ${body.daily.data[0].temperatureHigh} and low ${body.daily.data[0].temperatureLow}`);  
        }
            
    })
}

module.exports = forecast