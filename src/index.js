const port = 3100;
const app = require('./app');
app.listen(port, () => {
    console.log(`listener in port ${port}`);
});