document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.textContent = "Please select a valid date.";
    result.classList.add("show");
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Date of birth cannot be in the future.";
    result.classList.add("show");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
  result.classList.add("show");
});
document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.textContent = "Please select a valid date.";
    result.classList.add("show");
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Date of birth cannot be in the future.";
    result.classList.add("show");
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
  result.classList.add("show");
});
