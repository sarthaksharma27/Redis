const client = require('./client')

async function init() {
    // await client.set("msg:1", "Hey from Nodejs")
    // await client.expire("msg:1", 10)
    const result = await client.get("msg:1")
    console.log(result);
}    

init();