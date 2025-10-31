"use strict";

let balance = 10000;

while(true){
    const menu = `
    Добро пожаловать в банкомат!
    Ваш выбор!
    1. Показать баланс
    2. Снять средства
    3. Пополнить счёт
    4. Выход
    `;

    const choise = prompt(menu);

    switch(choise){
        case '1':
            alert(`Ваш баланс : ${balance} `);
            break;
        case '2':
            const amountToWithdraw = Number(prompt('введите сумму для снятия: '));
            if(isNan(amountToWithdraw) || amountToWithdraw <= 0){
                alert("Ошибка : введена некорректая сумма");
            } else if(amountToWithdraw > balance){
                alert("Ошибка : недостаточно средств на карте");
            } else {
                balance -= amountToWithdraw;
                alert(`Снятие успешно. Ваш баланс: ${balance}`);
            }
            break;
        case '3':
            const amountToDeposit = Number(prompt("Введите сумму для снятия: "));
            if(isNaN(amountToDeposit) || amountToDeposit <= 0){
                alert("Ошибка: введена некорректная сумма. ")
            } else{
                balance += amountToDeposit;
                alert(`Счёт пополнен. Ваш баланс : ${balance} ₽`);
            }
            break;
    }
}