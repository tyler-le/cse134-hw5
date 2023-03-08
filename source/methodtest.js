export async function doPost() {
        const formData = new FormData(document.querySelector("form"));
        const response = document.getElementById("response");

        const fetchResponse = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: formData,
        });
        
        if (!fetchResponse.ok) { throw new Error("Cannot get response"); }

        const data = await fetchResponse.json();
        console.log(data);

        let formattedData = JSON.stringify(data, null, 2);
        response.innerHTML = `<pre>${formattedData}</pre>`;
}

export async function doGet() {
    const response = document.getElementById("response");
    const id = document.getElementById("id").value;
    const articleName = document.getElementById("article_name").value;
    const articleBody = document.getElementById("article_body").value;
    const date = document.getElementById("date").value;

    const url = new URL("https://httpbin.org/get");
    url.searchParams.append("id", id);
    url.searchParams.append("article_name", articleName);
    url.searchParams.append("article_body", articleBody);
    url.searchParams.append("date", date);

    const fetchResponse = await fetch(url);
    if (!fetchResponse.ok) { throw new Error("Cannot get response"); }

    const data = await fetchResponse.json();
    let formattedData = JSON.stringify(data, null, 2);
    response.innerHTML = `<pre>${formattedData}</pre>`;
}

export async function doPut() {
    
    const formData = new FormData(document.querySelector("form"));
    const response = document.getElementById("response");

    const fetchResponse = await fetch("https://httpbin.org/put", {
        method: "PUT",
        body: formData,
    });

    const data = await fetchResponse.json();
    if (!fetchResponse.ok) { throw new Error("Cannot get response"); }

    let formattedData = JSON.stringify(data, null, 2);
    response.innerHTML = `<pre>${formattedData}</pre>`;
    
}

export async function doDelete() {
    const response = document.getElementById("response");
    const id = document.getElementById("id").value;

    const url = new URL("https://httpbin.org/delete");
    url.searchParams.append("id", id);

    const fetchResponse = await fetch(url, {
        method: "DELETE",
    });

    const data = await fetchResponse.json();
    if (!fetchResponse.ok) { throw new Error("Cannot get response"); }

    let formattedData = JSON.stringify(data, null, 2);
    response.innerHTML = `<pre>${formattedData}</pre>`;
    
}
