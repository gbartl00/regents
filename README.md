# Regents

A simple responsive web page using Bootstrap 5.3.8. Bootstrap CSS and JavaScript are included locally, so the page needs no external requests or package installation.

## Develop

From the repository root, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Edit `index.html` and refresh your browser. No build step is required.

## Check

With the server running, request the page and its local assets:

```sh
curl --fail http://127.0.0.1:8000/
curl --fail --output /dev/null http://127.0.0.1:8000/assets/vendor/bootstrap/bootstrap.min.css
curl --fail --output /dev/null http://127.0.0.1:8000/assets/vendor/bootstrap/bootstrap.bundle.min.js
```

Bootstrap is MIT licensed; its license is included under `assets/vendor/bootstrap/`.
