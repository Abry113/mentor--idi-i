function selectMentor(mentorName) {
    // Zobrazí zprávu, že mentor byl vybrán
    document.getElementById('confirmation').innerHTML = `Vybrali jste mentora: ${mentorName}.`;
}

function startTraining() {
    var selectedMentor = document.getElementById('confirmation').innerText;
    var trainingScenario = document.getElementById('training-scenario').value;

    if (!selectedMentor) {
        document.getElementById('confirmation').innerHTML = "Prosím, vyberte mentora, než začnete trénink.";
        return;
    }

    // Ukáže potvrzení o zahájení tréninku
    document.getElementById('confirmation').innerHTML = `Trénink s mentorem zahájen! Trénujete: ${trainingScenario}.`;
}
