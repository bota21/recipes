const recipes = {
  ciabatta: {
    title: "Домашняя чиабатта",
    category: "Выпечка",
    image: "img/ciabatta.jpg",
    fallback:
      "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=1400&q=85",
    description:
      "Хлеб с тонкой хрустящей корочкой, влажным мякишем и крупными воздушными порами. Для хорошей структуры тесту нужно время — не торопите расстойку.",
    time: "Около 4–6 часов",
    portions: "2 небольшие чиабатты",
    ingredients: [
      "500 г пшеничной муки",
      "450 мл воды комнатной температуры",
      "1 ст.л. соли",
      "1 ст.л. сахара",
      "7 г сухих быстродействующих дрожжей",
      "1 ст. л. оливкового масла — по желанию",
    ],
    steps: [
      "Смешайте муку, соль, сахар и дрожжи. Влейте почти всю воду и перемешайте до увлажнения всей муки. Накройте и оставьте на 60 минут. Тесто будет очень мягким и липким — не добавляйте много муки.",
      "Оставьте тесто на 2–2,5 часа при комнатной температуре. Каждые 30 минут смоченными руками сделайте складывание: потяните край теста и сложите к центру, повторите с четырёх сторон.",
      "Когда тесто увеличится примерно в 1,5–2 раза и станет пузырчатым, осторожно выложите его на хорошо присыпанную мукой поверхность. Разделите на две части, не выдавливая воздух. Сверните каждую с четырех сторон как конверт.",
      "Переложите заготовки на пергамент, слегка присыпьте мукой и оставьте на 60 минут.",
      "Разогрейте духовку заранее до 240°C, режим «верх + низ». Поставьте хлеб на средний уровень. Выпекайте 10 минут с паром",
      "Снизьте температуру до 220°C. Допекайте ещё 15–20 минут до румяной корочки.",
      "После выпечки оставь хлеб на решётке минимум на 45–60 минут. Если разрезать горячую чиабатту, влажный мякиш может слипнуться и казаться тяжёлым.",
    ],
    tip: "Главный секрет воздушной чиабатты — высокая влажность теста, складывания вместо долгого интенсивного вымешивания и бережное обращение с пузырьками при формовке. Время расстойки зависит от температуры в комнате.",
  },
  potatoes: {
    title: "Запечённые картофельные дольки",
    category: "Гарниры",
    image: "images/potatoes.jpg",
    fallback:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1400&q=85",
    description:
      "Мягкие внутри и румяные снаружи картофельные дольки. Подходят как самостоятельная закуска или гарнир.",
    time: "Подготовка: 10 мин",
    total: "35–45 минут",
    portions: "3–4 порции",
    ingredients: [
      "800 г картофеля",
      "2–3 ст. л. растительного или оливкового масла",
      "1 ч. л. паприки",
      "½ ч. л. сушёного чеснока",
      "Соль и чёрный перец по вкусу",
      "Сушёные травы — по желанию",
    ],
    steps: [
      "Разогрейте духовку до 220 °C в режиме верх-низ. Картофель тщательно вымойте; очистите, если хотите, и нарежьте одинаковыми дольками.",
      "Для более мягкой серединки проварите дольки 5–7 минут в слегка подсоленной воде. Слейте воду и дайте пару испариться.",
      "Смешайте картофель с маслом, паприкой, чесноком, солью, перцем и травами. Хорошо перемешайте, чтобы специи распределились равномерно.",
      "Разложите одним слоем на противне с пергаментом, оставляя между дольками немного места.",
      "Запекайте 25–35 минут, один раз перевернув. Для более выраженной корочки в конце включите конвекцию на 5–8 минут и следите, чтобы картофель не пересох.",
    ],
    tip: "Не укладывайте дольки слишком плотно: если противень переполнен, картофель будет скорее тушиться, чем подрумяниваться. Если используете пар, оставьте его только на начальном этапе, а затем выпекайте без пара для корочки.",
  },
  tea: {
    title: "Домашний чай с фруктами",
    category: "Напитки",
    image: "images/tea.jpg",
    fallback:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=85",
    description:
      "Ароматный чай с цитрусами, яблоком и ягодами. Фрукты можно менять по сезону, а сладость регулировать мёдом или сиропом.",
    time: "Подготовка: 5 мин",
    total: "15–20 минут",
    portions: "2–3 чашки",
    ingredients: [
      "600 мл воды",
      "1–2 ч. л. чёрного или зелёного чая либо 2 пакетика",
      "½ яблока",
      "2–3 кружочка апельсина или лимона",
      "Горсть ягод (свежих или замороженных)",
      "Мёд или сахар по вкусу",
      "Мята или палочка корицы — по желанию",
    ],
    steps: [
      "Нарежьте яблоко тонкими ломтиками, цитрус — кружочками. Если используете лимон с кожурой, удалите косточки.",
      "Залейте чай горячей водой подходящей температуры: для чёрного — около 90–100 °C, для зелёного — около 75–85 °C.",
      "Добавьте фрукты и ягоды. Накройте чайник и настаивайте 5–10 минут, ориентируясь на выбранный чай.",
      "Попробуйте напиток. При желании добавьте мяту, корицу или немного мёда. Мёд лучше добавлять, когда чай немного остынет.",
      "Подавайте горячим, положив немного фруктов в каждую чашку.",
    ],
    tip: "Не настаивайте зелёный чай слишком долго — он может стать горьким. Для более яркого фруктового вкуса прогрейте кусочки яблока и ягоды в воде 3–5 минут, а затем добавьте заварку.",
  },
};

const list = document.getElementById("recipe-list");
const detail = document.getElementById("recipe-detail");
const detailContent = document.getElementById("detail-content");
const recipeSection = document.querySelector(".recipe-section");
const search = document.getElementById("search");
const tabs = [...document.querySelectorAll(".tab")];
let activeCategory = "all";

function updateList() {
  const query = search.value.trim().toLocaleLowerCase("ru");
  let shown = 0;
  document.querySelectorAll(".recipe-card").forEach((card) => {
    const recipe = recipes[card.dataset.recipe];
    const matchesCategory =
      activeCategory === "all" || card.dataset.category === activeCategory;
    const matchesSearch =
      recipe.title.toLocaleLowerCase("ru").includes(query) ||
      recipe.category.toLocaleLowerCase("ru").includes(query) ||
      recipe.description.toLocaleLowerCase("ru").includes(query);
    const visible = matchesCategory && matchesSearch;
    card.hidden = !visible;
    if (visible) shown++;
  });
  document.getElementById("empty-state").hidden = shown !== 0;
  document.getElementById("recipe-count").textContent =
    `${shown} ${shown === 1 ? "рецепт" : shown < 5 ? "рецепта" : "рецептов"}`;
  document.getElementById("list-title").textContent =
    activeCategory === "all"
      ? "Все рецепты"
      : { bakery: "Выпечка", main: "Гарниры", drinks: "Напитки" }[
          activeCategory
        ];
}
tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    detail.hidden = true;
    recipeSection.hidden = false;
    updateList();
  }),
);
search.addEventListener("input", updateList);

function openRecipe(key) {
  const r = recipes[key];
  if (!r) return;
  detailContent.innerHTML = `
    <div class="detail-hero">
      <img src="${r.image}" alt="${r.title}" onerror="this.onerror=null;this.src='${r.fallback}'">
      <div class="detail-intro">
        <p class="eyebrow">${r.category.toUpperCase()}</p>
        <h1>${r.title}</h1>
        <p>${r.description}</p>
        <div class="meta-row"><span class="meta-pill">◷ ${r.time}</span><span class="meta-pill">♧ ${r.portions}</span></div>
      </div>
    </div>
    <div class="detail-grid">
      <section class="panel">
        <h2>Ингредиенты</h2>
        <ul class="ingredient-list">${r.ingredients.map((ingredient, i) => `<li><input type="checkbox" id="ingredient-${key}-${i}"><label for="ingredient-${key}-${i}">${ingredient}</label></li>`).join("")}</ul>
        <div class="tip"><strong>На заметку</strong>${r.tip}</div>
      </section>
      <section class="panel">
        <h2>Приготовление</h2>
        <ol class="step-list">${r.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      </section>
    </div>`;
  recipeSection.hidden = true;
  detail.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", `#${key}`);
}
document.querySelectorAll(".recipe-card").forEach((card) => {
  card.addEventListener("click", () => openRecipe(card.dataset.recipe));
});
document.getElementById("back-button").addEventListener("click", () => {
  detail.hidden = true;
  recipeSection.hidden = false;
  history.replaceState(null, "", location.pathname + location.search);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const initial = location.hash.slice(1);
if (recipes[initial]) openRecipe(initial);
updateList();
