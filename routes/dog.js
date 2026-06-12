import https from "https";

const url = "https://dog.ceo/api/breeds/image/random";

https.get(url, (res) => {
    let body = '';
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);
  
    res.on("data", function (d) {
      body += d;
    });
    
    res.on('end', function () {
      console.log(body);
    })
})
.on("error", (e) => {
    console.error(e);
});
