/** @format */

let accountName = document.querySelector('#register-name');
let initialDeposit = document.querySelector('#register-initial');
let registerBtn = document.querySelector('#registerbtn');
let accounts = document.querySelector('#accounts');
//! right part
let depositWithdraw = document.querySelector('#transact-amount');
let transactBtn = document.querySelector('#transactbtn');
let accountBalance = document.querySelector('#current-balance');
let transactionHistory = document.querySelector('#history');
// li element
// classList.add("account-List","highlight")
registerBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	// Account Name
	if (accountName.value !== '') {
		let listItem = document.createElement('li');
		listItem.innerText = accountName.value;
		accounts.appendChild(listItem);
		accountName.value = '';
	}
	// let classAdding = document.querySelectorAll("#accounts li");
	// console.log(classAdding);
	// for (let i = 0; i < classAdding.length; i++) {
	//   classAdding[i].classList.add("account-list", "highlight");
	//   classAdding[i - 1].classList.remove("highlight");
	// }
	// console.log(classAdding);
	if (initialDeposit.value == '') {
		accountBalance.value = NaN;
	} else {
		accountBalance.value = initialDeposit.value;
	}
	// Initial Deposit
	initialDeposit.value = '';
	depositWithdraw.value = '';
	let removeNeed = document.querySelectorAll('#history li');
	for (let i = 0; i < removeNeed.length; i++) {
		removeNeed[i].remove();
	}
});
transactBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	let listItem = document.createElement('li');
	listItem.innerText = depositWithdraw.value;
	transactionHistory.appendChild(listItem);
	accountName.value = '';
	accountBalance.value =
		Number(accountBalance.value) + Number(depositWithdraw.value);
	depositWithdraw.value = '';
});
