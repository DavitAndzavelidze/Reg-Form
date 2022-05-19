let nameError = document.querySelector(".name-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");
let subjectError = document.querySelector(".subject-error");
let submitError = document.querySelector(".submit-error");
let validateCheck = document.querySelector("#validateCheck");
let inputSuccess = document.querySelector(".input");

// -----------------Name Validation-----------------
const nameValidation = function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "სახელის ჩაწერა აუცილებელია";
    return false;
  }
  if (!name.match(/^[ა-ჰა-ჰ]*\s{1}[ა-ჰა-ჰ]*$/)) {
    nameError.innerHTML = "ჩაწერეთ სრულად";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check checkmark"></i>';
  return true;
};

// -----------------Phone Validation-----------------
const phoneValidation = function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "მობილურის ნომერი აუცილებელია";
    return false;
  }
  if (phone.length !== 9) {
    phoneError.innerHTML = "მობილურის ნომერი უნდა იყოს 9 ციფრი";
    return false;
  }
  if (!phone.match(/^[0-9]{9}$/)) {
    phoneError.innerHTML = "მხოლოდ რიცხვები";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check checkmark"></i>';
  return true;
};

// -----------------Email Validation-----------------
const emailValidation = function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "მეილი აუცილებელია";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "მეილი არასწორია";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check checkmark"></i>';
  return true;
};

// Check input if there are unfill fields appear message to fix

const checkValidate = validateCheck.addEventListener("click", function () {
  if (!nameValidation() || !phoneValidation() || !emailValidation()) {
    submitError.style.display = "block";
    submitError.innerHTML = "გთხოვთ გაასწორეთ შეცდომები";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
});
