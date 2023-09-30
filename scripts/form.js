const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

const signIn = () => {
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password1").value;

  const isValid = pwdCheck()
  if(isValid){
  
    fetch(
      "https://f4-digitec-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
    )
      .then((res) => res.json())
      .then((users) => {
        let usersArr  = []
        for(let i = 0;i<Object.values(users).length;i++){
          usersArr.push(Object.values(users)[i]);
        }
  
       
        let loginUser = usersArr.find((user)=>user.username===username)
     
      if(loginUser){
        show("error", "Username exists! Please use a different username.", 3000, "light");

      }else{
        fetch(
          "https://f4-digitec-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
          {
            method: "POST",
            body: `{"username" : "${username}", "email" : "${email}","password":"${password}"}`,
          }
        )
          .then((res) => res.json())
          .then((msg) => {
            if (msg?.name) {
              show("success", "Registered successfully!", 3000, "light");
              toggleForm();
            } else {
              show("error", "Registration failed!", 3000, "light");
            }
          });
      }
      });
 
  // fetch("https://f4-digitec-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
  // .then(res=>res.json())
  // .then(users=>console.log(users))
  }else{
    show("error", "Passwords do not match!", 3000, "light");

  }
 
};
const login = () => {

  const loginUsername = document.querySelector("#loginUsername").value;
  const loginPwd = document.querySelector("#loginPwd").value;
// console.log(loginUsername)
  let usersArr = [];
  fetch(
    "https://f4-digitec-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
  )
    .then((res) => res.json())
    .then((users) => {
      for(let i = 0;i<Object.values(users).length;i++){
        usersArr.push(Object.values(users)[i]);
      }

     
      let loginUser = usersArr.find((user)=>user.username===loginUsername&&user.password===loginPwd)
   
    if(loginUser){
      show("success", "Logged in successfully!", 5000, "light");
      setTimeout(()=>{
        window.location.href="./order.html"

      },[2000])
    }else{
      show("error", "Invalid criteria!", 3000, "light");

    }
    });

  
};

const show = (type, title, destroyAfter, theme) => {
  const toast = document.createElement("div");
  // toast.classList.add("animate__animated", this.animateIn);
  const container = document.createElement("div");
  container.appendChild(toast);
  container.classList.add(
    "toast__container",
    `toast__container--${"bottom-center"}`
  );

  document.body.appendChild(container);
  // console.log(document.body);
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

// const element = document.querySelector("#bottom-center");
// element.addEventListener("click",()=>show("success","Registered successfully!",3000,"light"));

var pwdCheck = function() {
  if (document.getElementById('password1').value ==
    document.getElementById('password2').value) {
      return true;

  } else {
    return false;

  }
}