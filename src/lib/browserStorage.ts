/**
 * This function is designed to retrieve the value of a cookie by its name from the document object.
 * 
 * If the cookie with the specified name is not found, the function will return undefined.
 * 
 * TODO:
 *      Import into app.
 *      Handle scenarios where cookies may have special characters or are URL encoded.
 */
function getCookieValue(name: String) {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(name + "="))
        ?.split("=")[1];
}