export function showMessageLoginGoogle(message, type = "success") {

    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: type === "success" ? "green" : "red",
            borderRadius: "25px",
            fontWeight: "100",
            fontSize: "15px",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        onClick: function () { }
    }).showToast();
}   