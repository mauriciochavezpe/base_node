const app = require('./src/app');
const port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log("Listener from " + port)
})
