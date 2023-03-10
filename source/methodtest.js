function getReqType() {
    const form = document.querySelector('form');
    const xhrRadio = form.querySelector('#xhr');
    return xhrRadio.checked ? "xhr" : "fetch";
}

export async function doPost() {
    const formData = new FormData(document.querySelector("form"));
    const response = document.getElementById("response");
    let formattedData, data;

    if (getReqType() === 'fetch') {
        const fetchResponse = await fetch("https://httpbin.org/post", {
            method: "POST",
            body: formData,
        });
        if (!fetchResponse.ok) { throw new Error("Cannot get response"); }
        data = await fetchResponse.json();
        formattedData = JSON.stringify(data, null, 2);
        response.innerHTML = `<pre>${formattedData}</pre>`;
    }
    
    else {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    data = JSON.parse(xhr.responseText);
                    formattedData = JSON.stringify(data, null, 2);
                    response.innerHTML = `<pre>${formattedData}</pre>`;
                } else {
                    console.log('Error:', xhr.statusText);
                }
            }
        };
        xhr.open('POST', 'https://httpbin.org/post', true);
        xhr.send(formData);
    }
}

export async function doGet() {
    const response = document.getElementById("response");
    const id = document.getElementById("id").value;
    const articleName = document.getElementById("article_name").value;
    const articleBody = document.getElementById("article_body").value;
    const date = document.getElementById("date").value;

    const url = new URL("https://httpbin.org/get");
    
    if (getReqType() === 'fetch') {
        url.searchParams.append("id", id);
        url.searchParams.append("article_name", articleName);
        url.searchParams.append("article_body", articleBody);
        url.searchParams.append("date", date);

        const fetchResponse = await fetch(url);
        if (!fetchResponse.ok) {throw new Error("Cannot get response");}

        const data = await fetchResponse.json();
        const formattedData = JSON.stringify(data, null, 2);
        response.innerHTML = `<pre>${formattedData}</pre>`;
    }
    
    else {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const formattedData = JSON.stringify(data, null, 2);
                    response.innerHTML = `<pre>${formattedData}</pre>`;
                } else {
                    console.log('Error:', xhr.statusText);
                }
            }
        };

        xhr.open('GET', `https://httpbin.org/get?id=${id}&article_name=${articleName}&article_body=${articleBody}&date=${date}`, true);
        xhr.send();
    }
}

export async function doPut() {
    
    const formData = new FormData(document.querySelector("form"));
    const response = document.getElementById("response");

    if (getReqType() === 'fetch') {

        const fetchResponse = await fetch("https://httpbin.org/put", {
            method: "PUT",
            body: formData,
        });

        const data = await fetchResponse.json();
        if (!fetchResponse.ok) {
            throw new Error("Cannot get response");
        }

        const formattedData = JSON.stringify(data, null, 2);
        response.innerHTML = `<pre>${formattedData}</pre>`;
    }
    
    else {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const formattedData = JSON.stringify(data, null, 2);
                    response.innerHTML = `<pre>${formattedData}</pre>`;
                } else {
                    console.log('Error:', xhr.statusText);
                }
            }
        };
        xhr.open('PUT', 'https://httpbin.org/put', true);
        xhr.send(formData);
    }
}

export async function doDelete() {
    const response = document.getElementById("response");
    const id = document.getElementById("id").value;

    if (getReqType() === 'fetch') {
        const url = new URL("https://httpbin.org/delete");
        url.searchParams.append("id", id);

        const fetchResponse = await fetch(url, {
            method: "DELETE",
        });

        const data = await fetchResponse.json();
        if (!fetchResponse.ok) {
            throw new Error("Cannot get response");
        }

        let formattedData = JSON.stringify(data, null, 2);
        response.innerHTML = `<pre>${formattedData}</pre>`;
    }
    
    else {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    const formattedData = JSON.stringify(data, null, 2);
                    response.innerHTML = `<pre>${formattedData}</pre>`;
                } else {
                    console.log('Error:', xhr.statusText);
                }
            }
        };
        xhr.open('DELETE', 'https://httpbin.org/delete', true);
        xhr.send(`id=${id}`);

    }
}
