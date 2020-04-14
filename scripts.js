/* validation for contact form inputs */
function validate() {
    var zip = $("#zip").val();
    if (zip.length != 5) {
        alert("Zip code is invalid or not in a valid format.");
        return false;
    }
    var phone = $("#phone").val();
    if (phone.length != 10 || isNaN(phone)) {
        alert("Phone number is invalid or not in a valid format. ");
        return false;
    }
}
