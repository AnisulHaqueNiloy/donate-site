// Common Functions

function geteelement(id) {
  const value = document.getElementById(id);
  return value;
}

function convertToNumber(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}
// Common Functions

// getting the input value for donation

document.getElementById("blogbtn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
let main_balance = geteelement("main-balance");
// card1
const button = document.getElementById("donate-button");
button.addEventListener("click", function () {
  const donate_input = convertToNumber("donate-amount");

  const card_balance = geteelement("card-donate");
  const card_amount = parseFloat(card_balance.innerText);

  const main = parseFloat(main_balance.innerText);

  if (isNaN(donate_input) || donate_input <= 0) {
    window.alert("insert a valid amount");
    return;
  }

  if (donate_input > main) {
    window.alert("dont have enough money");
    return;
  }

  let add = card_amount + donate_input;
  let minus = main - donate_input;
  main_balance.innerText = minus;

  const modal = geteelement("my_modal_1");
  modal.showModal();
  card_balance.innerText = add;

  // history

  // create history
  const title = document.getElementById("title_donate").innerText;
  const trans = document.createElement("div");
  trans.className = "rounded-2xl border-2 p-8 space-y-2";
  trans.innerHTML = ` <h1 class="font-lexend text-xl text-primary_text">
              ${donate_input} Taka is donated ${title}
            </h1>
            <h1 class="font-lexend text-lg text-second_text">
              Date:${Date()}
            </h1>
  `;
  const card = geteelement("history_tab");
  card.insertBefore(trans, card.firstChild);
});
// card1

// card2
const button2 = document.getElementById("donate-button2");
button2.addEventListener("click", function () {
  const donate_input = convertToNumber("donate-amount2");

  const card_balance = geteelement("card-donate2");
  const card_amount = parseFloat(card_balance.innerText);

  const main = parseFloat(main_balance.innerText);

  if (isNaN(donate_input) || donate_input <= 0) {
    window.alert("insert a valid amount");
    return;
  }

  if (donate_input > main) {
    window.alert("dont have enough money");
    return;
  }

  let add = card_amount + donate_input;
  let minus = main - donate_input;
  main_balance.innerText = minus;

  const modal = geteelement("my_modal_1");
  modal.showModal();
  card_balance.innerText = add;

  // history

  // create history
  const title = geteelement("title_donate2").innerText;
  const trans = document.createElement("div");
  trans.className = "rounded-2xl border-2 p-8 space-y-2";
  trans.innerHTML = ` <h1 class="font-lexend text-xl text-primary_text">
              ${donate_input} Taka is donated ${title}
            </h1>
            <h1 class="font-lexend text-lg text-second_text">
              Date:${Date()}
            </h1>
  `;
  const card = geteelement("history_tab");
  card.insertBefore(trans, card.firstChild);
});
// card2

// card3
const button3 = document.getElementById("donate-button3");
button3.addEventListener("click", function () {
  const donate_input = convertToNumber("donate-amount3");

  const card_balance = geteelement("card-donate3");
  const card_amount = parseFloat(card_balance.innerText);

  const main = parseFloat(main_balance.innerText);

  if (isNaN(donate_input) || donate_input <= 0) {
    window.alert("insert a valid amount");
    return;
  }

  if (donate_input > main) {
    window.alert("dont have enough money");
    return;
  }

  let add = card_amount + donate_input;
  let minus = main - donate_input;
  main_balance.innerText = minus;

  const modal = geteelement("my_modal_1");
  modal.showModal();
  card_balance.innerText = add;

  // history
  const history = document.getElementById;

  // create history
  const title = geteelement("title_donate3").innerText;
  const trans = document.createElement("div");
  trans.className = "rounded-2xl border-2 p-8 space-y-2";
  trans.innerHTML = ` <h1 class="font-lexend text-xl text-primary_text">
              ${donate_input} Taka is donated ${title}
            </h1>
            <h1 class="font-lexend text-lg text-second_text">
              Date:${Date()}
            </h1>
  `;
  const card = geteelement("history_tab");
  card.insertBefore(trans, card.firstChild);
});
// card3

// const modal = document.getElementById("my_modal_1");
// modal.showModal();

const history = document.getElementById("history_btn");
history.addEventListener("click", function () {
  const tab = document.getElementById("history_tab");
  tab.classList.remove("hidden");
  history.classList.add("bg-primary");

  const dtab = document.getElementById("dontation_tab");
  dtab.classList.add("hidden");
  donation.classList.remove("bg-primary");
});

const donation = document.getElementById("donate_btn");
donation.addEventListener("click", function () {
  const dtab = document.getElementById("dontation_tab");
  dtab.classList.remove("hidden");
  donation.classList.add("bg-primary");

  const tab = document.getElementById("history_tab");
  tab.classList.add("hidden");
  history.classList.remove("bg-primary");
});
