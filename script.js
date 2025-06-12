
document.getElementById("menuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const menu = document.querySelector('input[name="menu"]:checked');
    if (!menu) {
        alert("Veuillez sélectionner un menu.");
        return;
    }

    const entry = { name: name, menu: menu.value };
    const choices = JSON.parse(localStorage.getItem("menuChoices") || "[]");
    choices.push(entry);
    localStorage.setItem("menuChoices", JSON.stringify(choices));

    document.getElementById("confirmation").textContent = "Votre choix a été enregistré. Merci !";
    document.getElementById("menuForm").reset();
});
