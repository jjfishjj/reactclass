<script>
const birthdayButton = document.getElementById("birthdayButton");

if (birthdayButton) {
    birthdayButton.addEventListener("click", updateName);
}

function updateName() {
    let name = prompt("輸入你的生日");
    birthdayButton.textContent = "你的生日: " + name;
}
</script>
