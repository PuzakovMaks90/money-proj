let balance = 1000;
let execute = true;

while (execute) {
    let choice = prompt('1. Снять деньги; 2. Баланс; 3. Внести деньги; 4. Выход');
    if (choice == '1') {
        getMoney();
        getBalance();
    } else if (choice == '2') {
        getBalance();
    } else if (choice == '3') {
        contributeMoney();
        getBalance();
    } else if (choice == '4') {
        execute = false;
        userExit();
    }
}


function getMoney() {
    let summ = Number(prompt('Введите сумму для снятия'));
    balance = balance - summ;
}
function getBalance() {
    alert('Баланс ' + balance);
}

function contributeMoney() {
    let summ = Number(prompt('Введите сумму для внесения'));
    balance = balance + summ;
    alert('Спасибо на внесенные деньги!');
}

function userExit() {
    alert('Выполнение программы завершено!');
}