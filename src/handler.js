export function handle_request(requestDetails){
    console.log('Redirecting: ${requestDetails.url}');
    if (requestDetails.url === targetUrl){
        return;
    }
    return{
        redirectURL: targetUrl,

    };
}

browser.webRequest.onBeforeRequest.addListener(
    handle_request,
    {urls: [pattern], types: ["image"]},
    ["blocking"],
)

