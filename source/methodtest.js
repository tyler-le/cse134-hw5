export function doPost() {
    const formData = new FormData(document.querySelector("form"));
    const response = document.getElementById("response");

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let formattedData = JSON.stringify(data, null, 2);
            response.innerHTML = `<pre>${formattedData}</pre>`;
        })
        .catch((error) => console.error(error));
}

// TODO: Need to pass in data to GET request
export function doGet() {
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

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let formattedData = JSON.stringify(data, null, 2);
            response.innerHTML = `<pre>${formattedData}</pre>`;
        })
        .catch((error) => console.error(error));
}

export function doPut() {
    const formData = new FormData(document.querySelector("form"));
    const response = document.getElementById("response");

    fetch("https://httpbin.org/put", {
        method: "PUT",
        body: formData,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let formattedData = JSON.stringify(data, null, 2);
            response.innerHTML = `<pre>${formattedData}</pre>`;
        })
        .catch((error) => console.error(error));
}

export function doDelete() {
    const response = document.getElementById("response");
    const id = document.getElementById("id").value;

    const url = new URL("https://httpbin.org/delete");
    url.searchParams.append("id", id);

    fetch(url, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let formattedData = JSON.stringify(data, null, 2);
            response.innerHTML = `<pre>${formattedData}</pre>`;
        })
        .catch((error) => console.error(error));
}
