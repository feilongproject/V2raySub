const subItem = [
  "https://1",
  "https://2",
  "https://3",

]


async function handleRequest(request) {
  var sum=""
  for (i = 0; i < subItem.length; i++) {
    await fetch(subItem[i]).then(res => {
      return res.text()
    }).then(res=>{
      console.log(atob(res))
      sum+=atob(res)
    })
  }

  return new Response(btoa(sum))
}

addEventListener("fetch", (event) => {
  console.clear()
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});
