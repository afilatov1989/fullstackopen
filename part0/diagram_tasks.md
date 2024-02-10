## Task 0.4: New note diagram

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server

    Note right of browser: The browser sends POST request with the note data to the server.

    server-->>browser: "302 Found" redirect response with a header "Location: /exampleapp/notes"
    deactivate server

    Note left of server: The server stores the note data and instructs the browser to reload the page /exampleapp/notes by sending the redirect response with location header pointing to this page.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (or "304 Not Modified" header if cache is enabled)
    deactivate server

    Note right of browser: The browser loads the document, all static assets and JSON data with notes exactly as during the first page load.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
```



