function sendAjaxRequest(heroClass) {
    sendAjaxArmorRequest(heroClass);
    sendAjaxWeaponRequest(heroClass);
}

function sendAjaxArmorRequest(heroClass) {
    fetch(`http://localhost:8080/charClassToArmor`, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            data.forEach(e => {
                let firstSelect = document.getElementById('selectArmor' + e);
                firstSelect.className = 'disabled';
            });
            const response = await fetch(`http://localhost:8080/charClassToArmor/` + heroClass);
            const result = await response.json();
            console.log(result);
            result.forEach(elem => {
                let chainedSelect = document.getElementById('selectArmor' + elem);
                chainedSelect.disabled = false;
                chainedSelect.className = 'selection selection-primary armorImg';
            });
        });
}

function sendAjaxWeaponRequest(heroClass) {
    fetch(`http://localhost:8080/charClassToWeapon`, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            data.forEach(e => {
                let firstSelect = document.getElementById('selectWeapon' + e);
                firstSelect.className = 'disabled';
            });
            const response = await fetch(`http://localhost:8080/charClassToWeapon/` + heroClass);
            const result = await response.json();
            console.log(result);
            result.forEach(elem => {
                let chainedSelect = document.getElementById('selectWeapon' + elem);
                chainedSelect.disabled = false;
                chainedSelect.className = 'selection selection-primary weaponImg';
            });
        });
}

function selectArmor(armorName) {
    fetch(`http://localhost:8080/charClassToArmor`, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            data.forEach(e => {
                let firstSelect = document.getElementById('selectArmor' + e);
                firstSelect.className = 'disabled';
            });
            let firstSelect = document.getElementById('selectArmor' + armorName);
            firstSelect.className = 'selection selection-success armorImg';
        });
}

function selectWeapon(weaponName) {
    fetch(`http://localhost:8080/charClassToWeapon`, {
            method: 'get'
        })
        .then(function (response) {
            return response.json();
        }).then(async function (data) {
            data.forEach(e => {
                let firstSelect = document.getElementById('selectWeapon' + e);
                firstSelect.className = 'disabled';
            });
            let firstSelect = document.getElementById('selectWeapon' + weaponName);
            firstSelect.className = 'selection selection-success weaponImg';
        });
}