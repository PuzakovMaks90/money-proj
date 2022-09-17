let balance = 1000;
let execute = true;

while (execute) {
    let choice = prompt('1. Снять деньги; 2. Баланс; 3. Выход');
    if (choice == '1') {
        getMoney();
        getBalance();
    } else if (choice == '2') {
        getBalance();
    } else if (choice == '3') {
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
function userExit() {
    alert('Выполнение программы завершено!');
}
