
const productOnChange = () =>{
    console.log(document.querySelector("#productSelection"))
    document.querySelector("#subtotal").innerHTML = `${document.querySelector("#productSelection").value}`

    document.querySelector("#productTotal").innerHTML = `${document.querySelector("#productSelection").value}`
    document.querySelector("#productName").innerHTML = `${document.querySelector("#productSelection").options[document.querySelector("#productSelection").selectedIndex].innerHTML}`
}

const placeOrder = () =>{
    let invalid_fields = document.querySelectorAll("form :invalid");

    if(invalid_fields.length == 0){
        show("success", "Product ordered successfully!<br>Please check your email for the updates!<br> We will redirect you back to the home page in 5 seconds.", 5000, "light");
    setTimeout(()=>{
        window.location.href = "./"

    },[3000])

}else{
    show("error", "Some fields are not filled out!", 5000, "light");


}
}

const show = (type, title, destroyAfter, theme) => {
    const toast = document.createElement("div");
    // toast.classList.add("animate__animated", this.animateIn);
    const container = document.createElement("div");
    container.appendChild(toast);
    container.classList.add(
      "toast__container",
      `toast__container--${"top-center"}`
    );
  
    document.body.appendChild(container);
    console.log(document.body);
    hide(toast, container, destroyAfter);
  
    switch (type) {
      case "success":
        toast.classList.add("toast__toast__success");
        toast.innerHTML = `<i class="fa-solid fa-check"></i>${title}`;
        break;
      case "error":
        toast.classList.add("toast__toast__error");
  
        toast.innerHTML = `<i class="fa-solid fa-xmark"></i>${title}`;
        break;
      case "warn":
        toast.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>${title}`;
        break;
      case "loading":
        toast.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>${title}`;
        break;
      default:
        toast.textContent = title;
        break;
    }
  
    switch (theme) {
      case "light":
        toast.classList.add("toast", "toast__toast--light");
        break;
      case "dark":
        toast.classList.add("toast", "toast__toast--dark");
        break;
      default:
        break;
    }
  };
  
  const hide = (toast, container, destroyAfter) => {
    setTimeout(() => {
      // toast.classList.replace(this.animateIn, this.animateOut);
      // toast.addEventListener("animationend", () => {
      //   this.container.removeChild(toast);
      // });
      container.removeChild(toast);
    }, destroyAfter);
  };