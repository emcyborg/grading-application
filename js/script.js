let form = document.querySelector("#grading-form");
form.addEventListener("submit", (event) => {
  submitForm(event);
});

function submitForm(e) {
  e.preventDefault();
  let total = 0;
  const onlyInputs = document.querySelectorAll("#grading-form input");
  try {
    onlyInputs.forEach((input) => {
      if (!input.value || +input.value < 0) {
        alert("Please enter a valid input.");
        throw BreakException;
      }
      total += +input.value;
    });
  } catch (error) {
    console.error(error);
  }

  document.getElementById("result").innerHTML = `${(total / 400) * 100}`;
}
