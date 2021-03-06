var link = document.querySelector(".modal-open"),
    popup = document.querySelector(".modal"),
    close = popup.querySelector(".modal-close"),
    form = popup.querySelector("form"),
    user = popup.querySelector("[name=user-name]"),
    email = popup.querySelector("[name=email]"),
    storage = localStorage.getItem("user"),
    form = popup.querySelector("form");
link.addEventListener("click", function(e) {
    e.preventDefault(), popup.classList.add("modal-show"), storage ? (user.value = storage, email.focus()) : user.focus()
}), close.addEventListener("click", function(e) {
    e.preventDefault(), popup.classList.remove("modal-show"), popup.classList.remove("modal-error")
}), form.addEventListener("submit", function(e) {
    user.value && email.value ? localStorage.setItem("user-name", user.value) : (e.preventDefault(), popup.classList.add("modal-error"))
}), window.addEventListener("keydown", function(e) {
    27 === e.keyCode && popup.classList.contains("modal-show") && (popup.classList.remove("modal-show"), popup.classList.remove("modal-error"))
});