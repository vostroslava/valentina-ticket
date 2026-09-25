const TELEGRAM_USER = 'vostroslava';
const DENTIST_URL = 'https://superdent.by/vrachi/shherbakova-valentina-andreevna/';

const choices = {
  tea: { title: 'На чай со Славой', draft: 'Слава, как насчёт чая? 🍵' },
  coffee: { title: 'На кофе со Славой', draft: 'Слава, как насчёт кофе? ☕️' },
  cinema: { title: 'В кино со Славой', draft: 'Слава, как насчёт кино? 🎬' },
  skating: { title: 'На каток со Славой', draft: 'Слава, случайный выбор предлагает каток ⛸️ Как тебе идея?' },
  food: { title: 'Покушать со Славой', draft: 'Слава, случайный выбор предлагает пойти покушать 🍽️ Как тебе идея?' },
  walk: { title: 'На прогулку со Славой', draft: 'Слава, случайный выбор предлагает прогулку 🌿 Как тебе идея?' },
  exhibition: { title: 'На выставку со Славой', draft: 'Слава, случайный выбор предлагает выставку 🖼️ Как тебе идея?' },
  bowling: { title: 'В боулинг со Славой', draft: 'Слава, случайный выбор предлагает боулинг 🎳 Как тебе идея?' },
};
const surpriseChoices = ['skating', 'food', 'walk', 'exhibition', 'bowling'];

const telegramUrl = (draft) => `https://t.me/${TELEGRAM_USER}?text=${encodeURIComponent(draft)}`;

const dialog = document.getElementById('ticket-dialog');
const title = document.getElementById('ticket-title');
const telegramLink = document.getElementById('telegram-link');
const rerollButton = document.getElementById('reroll');

function showTicket(key, isSurprise = false) {
  const choice = choices[key];
  title.textContent = choice.title;
  telegramLink.href = telegramUrl(choice.draft);
  rerollButton.hidden = !isSurprise;
  if (!dialog.open) dialog.showModal();
}

function randomChoice() {
  const index = Math.floor(Math.random() * surpriseChoices.length);
  showTicket(surpriseChoices[index], true);
}

document.querySelectorAll('[data-choice]').forEach((button) => {
  button.addEventListener('click', () => showTicket(button.dataset.choice));
});
document.getElementById('surprise').addEventListener('click', randomChoice);
rerollButton.addEventListener('click', randomChoice);
document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('.official a').href = DENTIST_URL;
