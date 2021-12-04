const subItem = [
  "https://1",
  "https://2",
  "https://3",

]


async function handleRequest(request) {

  for (i = 0; i < subItem.length; i++) {
    await fetch(subItem[i]).then(res => {
      return res.text()
    }).then(res=>{
      console.log(res)
    })
  }

  return new Response("ok")
}

addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});
