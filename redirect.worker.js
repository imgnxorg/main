addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let url = new URL(request.url);
  if (url.hostname === "imgnx.org") {
    url.hostname = "www.imgnx.org";
    return Response.redirect(url.toString(), 301);
  }
  return fetch(request);
}
