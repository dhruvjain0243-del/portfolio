# Dhruv Jain — Personal Portfolio

A responsive personal portfolio built with Python 3, Flask, HTML, CSS, and a small amount of vanilla JavaScript. It uses Flask's standard `templates/` and `static/` folders and does not need a database or a frontend build step.

## Requirements

- Python 3.9 or newer
- Internet access when loading Google Fonts and Font Awesome icons

## Run locally on Windows

The portfolio source files are in the project folder. If you are creating a fresh copy, create and open a folder in PowerShell, then place the supplied files and folders inside it while preserving their names:

```powershell
mkdir "$HOME\Desktop\dhruv-portfolio"
Set-Location "$HOME\Desktop\dhruv-portfolio"
code .
```

If `code .` is not recognized, open Visual Studio Code, choose **File → Open Folder**, and select the project folder. If you already have this project open in VS Code, skip this step.

In VS Code, open **Terminal → New Terminal** and run:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

If PowerShell blocks virtual-environment activation, allow it for the current terminal session and activate again:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1
```

You can also activate the environment from Command Prompt:

```bat
.venv\Scripts\activate.bat
```

When Flask reports that it is running, open **http://127.0.0.1:5000/** in Chrome. Keep the terminal running while you use the site. Press **Ctrl+C** in that terminal to stop Flask; run `python app.py` again to restart it.

## Add your certificates

Copy your original certificate files into `static/certificates/` and use these exact filenames:

| File | Certificate |
| --- | --- |
| `sih.jpg` | Smart India Hackathon 2026 |
| `genai.pdf` | Generative AI Foundations |
| `powerbi.pdf` | Power BI for Beginners |
| `python.pdf` | Python Libraries for Data Science |

The portfolio buttons already link to these paths. The certificate directory is intentionally empty until you add your own genuine files; no sample or replacement certificates are included.

## Add a profile photo

Replace `static/images/profile-placeholder.svg` with your photo, save it as `profile.jpg` in `static/images/`, and change the image filename in `templates/index.html` from `images/profile-placeholder.svg` to `images/profile.jpg`. Use a square, reasonably sized image for the best result.

## Customize the portfolio

- **Text and links:** Edit the corresponding section in `templates/index.html`.
- **Colors, fonts, and layout:** Edit the CSS variables near the top of `static/css/style.css`, then adjust the relevant component styles.
- **Sections:** The page sections are in `templates/index.html`; their navigation links use matching section IDs.
- **Mobile menu and reveal effects:** `static/js/script.js` contains the small amount of JavaScript used for these interactions.

Save a file and refresh the browser to see changes. Flask's local debug server normally reloads after Python edits; if it does not, stop it with **Ctrl+C** and run `python app.py` again.

## Publish online

One beginner-friendly option is [Render](https://render.com/), which can run a Flask app from a GitHub repository:

1. Create a GitHub repository and push this project to it. Do not upload your virtual environment.
2. Sign in to Render and create a **Web Service** connected to the repository.
3. Set the **Build Command** to `pip install -r requirements.txt && pip install gunicorn`.
4. Set the **Start Command** to `gunicorn app:app`.
5. Deploy and open the URL Render provides.

Render needs a production WSGI server for that start command. The build command installs Gunicorn for the Linux-hosted deployment without adding it to your local Windows setup (Gunicorn is not supported on Windows). Never use Flask's `debug=True` development server as a public production server. Add your genuine certificate files to the repository only if you are comfortable making them publicly downloadable.
