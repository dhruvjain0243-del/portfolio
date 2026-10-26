from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    """Render the portfolio homepage."""
    return render_template("index.html")


if __name__ == "__main__":
    # Debug mode is useful while developing locally; production hosts should
    # start the app with their own production server instead.
    app.run(debug=True)
