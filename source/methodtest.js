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

export function doGet() {
    const response = document.getElementById("response");

    fetch("https://httpbin.org/get")
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

    fetch("https://httpbin.org/delete", {
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