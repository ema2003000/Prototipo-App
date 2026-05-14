const foodImages = {
  carbs: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=300&q=80",
  rice: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=300&q=80",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
  protein: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=300&q=80",
  fish: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=300&q=80",
  eggs: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80",
  vegetables: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
  fruit: "https://images.unsplash.com/photo-1619566636858-adf3ef4640b3?auto=format&fit=crop&w=300&q=80",
  dairy: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80",
  legumes: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=300&q=80",
  nuts: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=300&q=80",
  oil: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
};

const products = [
  { id: "pasta", name: "Pasta integrale", category: "Carboidrati", baseGrams: 85, kcalPer100: 350, proteinPer100: 13, aliases: ["pasta", "spaghetti", "penne", "fusilli"], image: foodImages.carbs },
  { id: "white_pasta", name: "Pasta di semola", category: "Carboidrati", baseGrams: 90, kcalPer100: 356, proteinPer100: 12, aliases: ["pasta bianca", "maccheroni"], image: foodImages.carbs },
  { id: "rice", name: "Riso basmati", category: "Carboidrati", baseGrams: 80, kcalPer100: 345, proteinPer100: 7, aliases: ["riso", "basmati"], image: foodImages.rice },
  { id: "brown_rice", name: "Riso integrale", category: "Carboidrati", baseGrams: 85, kcalPer100: 360, proteinPer100: 8, aliases: ["riso", "integrale"], image: foodImages.rice },
  { id: "couscous", name: "Cous cous", category: "Carboidrati", baseGrams: 80, kcalPer100: 376, proteinPer100: 13, aliases: ["couscous"], image: foodImages.carbs },
  { id: "quinoa", name: "Quinoa", category: "Carboidrati", baseGrams: 75, kcalPer100: 368, proteinPer100: 14, aliases: ["quinua"], image: foodImages.carbs },
  { id: "oats", name: "Fiocchi di avena", category: "Carboidrati", baseGrams: 55, kcalPer100: 389, proteinPer100: 17, aliases: ["avena", "porridge"], image: foodImages.carbs },
  { id: "bread", name: "Pane integrale", category: "Carboidrati", baseGrams: 80, kcalPer100: 247, proteinPer100: 13, aliases: ["pane", "panino"], image: foodImages.bread },
  { id: "potatoes", name: "Patate", category: "Carboidrati", baseGrams: 240, kcalPer100: 77, proteinPer100: 2, aliases: ["patata"], image: foodImages.vegetables },
  { id: "sweet_potatoes", name: "Patate dolci", category: "Carboidrati", baseGrams: 220, kcalPer100: 86, proteinPer100: 1.6, aliases: ["batata"], image: foodImages.vegetables },
  { id: "chicken", name: "Petto di pollo", category: "Proteine", baseGrams: 150, kcalPer100: 165, proteinPer100: 31, aliases: ["pollo", "petto"], image: foodImages.protein },
  { id: "turkey", name: "Fesa di tacchino", category: "Proteine", baseGrams: 150, kcalPer100: 135, proteinPer100: 29, aliases: ["tacchino", "fesa"], image: foodImages.protein },
  { id: "beef", name: "Manzo magro", category: "Proteine", baseGrams: 140, kcalPer100: 217, proteinPer100: 26, aliases: ["manzo", "bovino", "carne rossa"], image: foodImages.protein },
  { id: "pork", name: "Lonza di maiale", category: "Proteine", baseGrams: 140, kcalPer100: 180, proteinPer100: 27, aliases: ["maiale", "lonza"], image: foodImages.protein },
  { id: "ham", name: "Prosciutto cotto", category: "Proteine", baseGrams: 80, kcalPer100: 145, proteinPer100: 20, aliases: ["prosciutto"], image: foodImages.protein },
  { id: "eggs", name: "Uova", category: "Proteine", baseGrams: 110, kcalPer100: 155, proteinPer100: 13, aliases: ["uovo"], image: foodImages.eggs },
  { id: "salmon", name: "Salmone fresco", category: "Proteine", baseGrams: 140, kcalPer100: 208, proteinPer100: 20, aliases: ["salmone", "pesce"], image: foodImages.fish },
  { id: "tuna", name: "Tonno al naturale", category: "Proteine", baseGrams: 120, kcalPer100: 116, proteinPer100: 26, aliases: ["tonno", "pesce"], image: foodImages.fish },
  { id: "cod", name: "Merluzzo", category: "Proteine", baseGrams: 160, kcalPer100: 82, proteinPer100: 18, aliases: ["merluzzo", "pesce bianco"], image: foodImages.fish },
  { id: "shrimp", name: "Gamberi", category: "Proteine", baseGrams: 150, kcalPer100: 99, proteinPer100: 24, aliases: ["gamberetti", "crostacei"], image: foodImages.fish },
  { id: "tofu", name: "Tofu", category: "Proteine vegetali", baseGrams: 160, kcalPer100: 144, proteinPer100: 17, aliases: ["soia"], image: foodImages.legumes },
  { id: "tempeh", name: "Tempeh", category: "Proteine vegetali", baseGrams: 140, kcalPer100: 193, proteinPer100: 19, aliases: ["soia fermentata"], image: foodImages.legumes },
  { id: "lentils", name: "Lenticchie", category: "Legumi", baseGrams: 180, kcalPer100: 116, proteinPer100: 9, aliases: ["legumi", "lenticchia"], image: foodImages.legumes },
  { id: "chickpeas", name: "Ceci", category: "Legumi", baseGrams: 180, kcalPer100: 164, proteinPer100: 9, aliases: ["ceci", "hummus"], image: foodImages.legumes },
  { id: "beans", name: "Fagioli", category: "Legumi", baseGrams: 180, kcalPer100: 127, proteinPer100: 9, aliases: ["borlotti", "cannellini"], image: foodImages.legumes },
  { id: "peas", name: "Piselli", category: "Legumi", baseGrams: 160, kcalPer100: 81, proteinPer100: 5, aliases: ["piselli"], image: foodImages.legumes },
  { id: "zucchini", name: "Zucchine", category: "Verdura", baseGrams: 220, kcalPer100: 17, proteinPer100: 1.2, aliases: ["zucchina"], image: foodImages.vegetables },
  { id: "tomatoes", name: "Pomodori", category: "Verdura", baseGrams: 180, kcalPer100: 18, proteinPer100: 0.9, aliases: ["pomodoro", "ciliegino"], image: foodImages.vegetables },
  { id: "lettuce", name: "Lattuga", category: "Verdura", baseGrams: 100, kcalPer100: 15, proteinPer100: 1.4, aliases: ["insalata"], image: foodImages.vegetables },
  { id: "spinach", name: "Spinaci", category: "Verdura", baseGrams: 180, kcalPer100: 23, proteinPer100: 2.9, aliases: ["spinacio"], image: foodImages.vegetables },
  { id: "broccoli", name: "Broccoli", category: "Verdura", baseGrams: 200, kcalPer100: 34, proteinPer100: 2.8, aliases: ["broccolo"], image: foodImages.vegetables },
  { id: "carrots", name: "Carote", category: "Verdura", baseGrams: 160, kcalPer100: 41, proteinPer100: 0.9, aliases: ["carota"], image: foodImages.vegetables },
  { id: "peppers", name: "Peperoni", category: "Verdura", baseGrams: 180, kcalPer100: 31, proteinPer100: 1, aliases: ["peperone"], image: foodImages.vegetables },
  { id: "eggplant", name: "Melanzane", category: "Verdura", baseGrams: 200, kcalPer100: 25, proteinPer100: 1, aliases: ["melanzana"], image: foodImages.vegetables },
  { id: "onions", name: "Cipolle", category: "Verdura", baseGrams: 80, kcalPer100: 40, proteinPer100: 1.1, aliases: ["cipolla"], image: foodImages.vegetables },
  { id: "mushrooms", name: "Funghi", category: "Verdura", baseGrams: 180, kcalPer100: 22, proteinPer100: 3.1, aliases: ["champignon"], image: foodImages.vegetables },
  { id: "apples", name: "Mele", category: "Frutta", baseGrams: 180, kcalPer100: 52, proteinPer100: 0.3, aliases: ["mela"], image: foodImages.fruit },
  { id: "bananas", name: "Banane", category: "Frutta", baseGrams: 120, kcalPer100: 89, proteinPer100: 1.1, aliases: ["banana"], image: foodImages.fruit },
  { id: "oranges", name: "Arance", category: "Frutta", baseGrams: 180, kcalPer100: 47, proteinPer100: 0.9, aliases: ["arancia"], image: foodImages.fruit },
  { id: "pears", name: "Pere", category: "Frutta", baseGrams: 180, kcalPer100: 57, proteinPer100: 0.4, aliases: ["pera"], image: foodImages.fruit },
  { id: "strawberries", name: "Fragole", category: "Frutta", baseGrams: 180, kcalPer100: 32, proteinPer100: 0.7, aliases: ["fragola"], image: foodImages.fruit },
  { id: "blueberries", name: "Mirtilli", category: "Frutta", baseGrams: 130, kcalPer100: 57, proteinPer100: 0.7, aliases: ["mirtillo"], image: foodImages.fruit },
  { id: "kiwi", name: "Kiwi", category: "Frutta", baseGrams: 150, kcalPer100: 61, proteinPer100: 1.1, aliases: ["kiwi"], image: foodImages.fruit },
  { id: "grapes", name: "Uva", category: "Frutta", baseGrams: 150, kcalPer100: 69, proteinPer100: 0.7, aliases: ["uva"], image: foodImages.fruit },
  { id: "avocado", name: "Avocado", category: "Grassi buoni", baseGrams: 80, kcalPer100: 160, proteinPer100: 2, aliases: ["avocado"], image: foodImages.fruit },
  { id: "yogurt", name: "Yogurt greco", category: "Latticini", baseGrams: 170, kcalPer100: 97, proteinPer100: 9, aliases: ["yogurt", "greco"], image: foodImages.dairy },
  { id: "milk", name: "Latte parzialmente scremato", category: "Latticini", baseGrams: 200, kcalPer100: 46, proteinPer100: 3.4, aliases: ["latte"], image: foodImages.dairy },
  { id: "mozzarella", name: "Mozzarella", category: "Latticini", baseGrams: 100, kcalPer100: 253, proteinPer100: 18, aliases: ["mozzarella", "formaggio"], image: foodImages.dairy },
  { id: "ricotta", name: "Ricotta", category: "Latticini", baseGrams: 120, kcalPer100: 174, proteinPer100: 11, aliases: ["ricotta", "formaggio"], image: foodImages.dairy },
  { id: "parmesan", name: "Parmigiano", category: "Latticini", baseGrams: 30, kcalPer100: 431, proteinPer100: 38, aliases: ["grana", "parmigiano reggiano"], image: foodImages.dairy },
  { id: "almonds", name: "Mandorle", category: "Frutta secca", baseGrams: 30, kcalPer100: 579, proteinPer100: 21, aliases: ["mandorla"], image: foodImages.nuts },
  { id: "walnuts", name: "Noci", category: "Frutta secca", baseGrams: 30, kcalPer100: 654, proteinPer100: 15, aliases: ["noce"], image: foodImages.nuts },
  { id: "hazelnuts", name: "Nocciole", category: "Frutta secca", baseGrams: 30, kcalPer100: 628, proteinPer100: 15, aliases: ["nocciola"], image: foodImages.nuts },
  { id: "peanut_butter", name: "Burro di arachidi", category: "Frutta secca", baseGrams: 25, kcalPer100: 588, proteinPer100: 25, aliases: ["arachidi", "burro arachidi"], image: foodImages.nuts },
  { id: "olive_oil", name: "Olio extravergine di oliva", category: "Condimenti", baseGrams: 15, kcalPer100: 884, proteinPer100: 0, aliases: ["olio", "evo"], image: foodImages.oil },
  { id: "butter", name: "Burro", category: "Condimenti", baseGrams: 10, kcalPer100: 717, proteinPer100: 0.9, aliases: ["burro"], image: foodImages.dairy },
  { id: "honey", name: "Miele", category: "Dolcificanti", baseGrams: 20, kcalPer100: 304, proteinPer100: 0.3, aliases: ["miele"], image: foodImages.carbs },
  { id: "dark_chocolate", name: "Cioccolato fondente", category: "Extra", baseGrams: 25, kcalPer100: 546, proteinPer100: 4.9, aliases: ["cioccolato", "fondente"], image: foodImages.carbs },
  { id: "coffee", name: "Caffe", category: "Bevande", baseGrams: 8, kcalPer100: 2, proteinPer100: 0.1, aliases: ["caffe", "espresso"], image: foodImages.carbs },
];

const markets = [
  {
    name: "Conad City",
    distanceKm: 0.7,
    address: "Via Roma 18",
    inventory: {
      pasta: { price: 1.89, available: 18, note: "Marca integrale bio" },
      rice: { price: 2.29, available: 12, note: "Confezione 1 kg" },
      chicken: { price: 8.9, available: 7, note: "Banco frigo" },
      zucchini: { price: 2.35, available: 25, note: "Origine Italia" },
      yogurt: { price: 1.35, available: 30, note: "170 g" },
    },
  },
  {
    name: "Coop Superstore",
    distanceKm: 1.4,
    address: "Viale Europa 44",
    inventory: {
      pasta: { price: 1.69, available: 24, note: "Sconto fedelta" },
      salmon: { price: 19.8, available: 5, note: "Trancio fresco" },
      eggs: { price: 2.8, available: 16, note: "6 uova allevate a terra" },
      apples: { price: 2.1, available: 40, note: "Golden sfuse" },
      yogurt: { price: 1.45, available: 20, note: "Senza zuccheri aggiunti" },
    },
  },
  {
    name: "Lidl",
    distanceKm: 2.1,
    address: "Strada Provinciale 9",
    inventory: {
      rice: { price: 1.79, available: 20, note: "Basmati 1 kg" },
      chicken: { price: 7.75, available: 9, note: "Family pack" },
      eggs: { price: 2.25, available: 22, note: "10 uova" },
      zucchini: { price: 1.95, available: 18, note: "Vassoio 500 g" },
      apples: { price: 1.85, available: 35, note: "Sacchetto 1 kg" },
    },
  },
];

const state = {
  profile: {
    name: "",
    sex: "female",
    age: 35,
    weight: 70,
    height: 170,
    activity: 1.55,
    goal: "maintain",
    people: 1,
  },
  items: [
    { id: "pasta", meal: "lunch" },
    { id: "chicken", meal: "lunch" },
    { id: "zucchini", meal: "dinner" },
  ],
  selectedProductId: "pasta",
  searchQuery: "",
  marketSort: "recommended",
  user: null,
  displayName: "",
  avatarImage: "",
  avatarColor: "#1e7c57",
  hasDiet: false,
  locationBoost: 0,
};

const els = {
  profileInputs: {
    name: document.querySelector("#name"),
    sex: document.querySelector("#sex"),
    age: document.querySelector("#age"),
    weight: document.querySelector("#weight"),
    height: document.querySelector("#height"),
    activity: document.querySelector("#activity"),
    goal: document.querySelector("#goal"),
    people: document.querySelector("#people"),
  },
  ingredientSearch: document.querySelector("#ingredientSearch"),
  gramsInput: document.querySelector("#gramsInput"),
  mealSelect: document.querySelector("#mealSelect"),
  addItemForm: document.querySelector("#addItemForm"),
  shoppingList: document.querySelector("#shoppingList"),
  markets: document.querySelector("#markets"),
  marketSort: document.querySelector("#marketSort"),
  recommendations: document.querySelector("#recommendations"),
  caloriesMetric: document.querySelector("#caloriesMetric"),
  gramsMetric: document.querySelector("#gramsMetric"),
  priceMetric: document.querySelector("#priceMetric"),
  clearButton: document.querySelector("#clearButton"),
  locationButton: document.querySelector("#locationButton"),
  locationStatus: document.querySelector("#locationStatus"),
  dietFile: document.querySelector("#dietFile"),
  dietFileButton: document.querySelector("#dietFileButton"),
  dietFileName: document.querySelector("#dietFileName"),
  uploadProgress: document.querySelector("#uploadProgress"),
  uploadLabel: document.querySelector("#uploadLabel"),
  dietSummary: document.querySelector("#dietSummary"),
  loginButton: document.querySelector("#loginButton"),
  accountMenu: document.querySelector("#accountMenu"),
  avatarButton: document.querySelector("#avatarButton"),
  avatarInitials: document.querySelector("#avatarInitials"),
  avatarImage: document.querySelector("#avatarImage"),
  accountDropdown: document.querySelector("#accountDropdown"),
  dropdownInitials: document.querySelector("#dropdownInitials"),
  dropdownAvatarImage: document.querySelector("#dropdownAvatarImage"),
  accountName: document.querySelector("#accountName"),
  accountEmail: document.querySelector("#accountEmail"),
  settingsButton: document.querySelector("#settingsButton"),
  logoutButton: document.querySelector("#logoutButton"),
  openProfileSettings: document.querySelector("#openProfileSettings"),
  loginDialog: document.querySelector("#loginDialog"),
  loginForm: document.querySelector("#loginForm"),
  email: document.querySelector("#email"),
  profileStatus: document.querySelector("#profileStatus"),
  settingsDialog: document.querySelector("#settingsDialog"),
  settingsForm: document.querySelector("#settingsForm"),
  displayName: document.querySelector("#displayName"),
  avatarFile: document.querySelector("#avatarFile"),
  avatarFileButton: document.querySelector("#avatarFileButton"),
  avatarFileName: document.querySelector("#avatarFileName"),
  avatarUploadLabel: document.querySelector("#avatarUploadLabel"),
  avatarUploadProgress: document.querySelector(".mini-upload-progress"),
  avatarColor: document.querySelector("#avatarColor"),
};

function init() {
  els.addItemForm.addEventListener("submit", addItem);
  els.ingredientSearch.addEventListener("input", updateSearch);
  els.mealSelect.addEventListener("change", syncSuggestedGrams);
  els.marketSort.addEventListener("change", updateMarketSort);
  els.clearButton.addEventListener("click", () => {
    state.items = [];
    render();
  });
  els.locationButton.addEventListener("click", useLocation);
  els.dietFileButton.addEventListener("click", () => els.dietFile.click());
  els.dietFile.addEventListener("change", importDiet);
  els.loginButton.addEventListener("click", () => els.loginDialog.showModal());
  els.avatarButton.addEventListener("click", toggleAccountDropdown);
  els.settingsButton.addEventListener("click", openSettings);
  els.openProfileSettings.addEventListener("click", openSettings);
  els.logoutButton.addEventListener("click", logout);
  els.loginForm.addEventListener("submit", saveLogin);
  els.settingsForm.addEventListener("submit", saveSettings);
  els.avatarFileButton.addEventListener("click", () => els.avatarFile.click());
  els.avatarFile.addEventListener("change", updateAvatarFileName);
  document.addEventListener("click", closeDropdownOnOutsideClick);

  restore();
  render();
}

function updateProfileFromSettings() {
  state.profile = {
    name: els.profileInputs.name.value || "",
    sex: els.profileInputs.sex.value,
    age: Number(els.profileInputs.age.value) || 35,
    weight: Number(els.profileInputs.weight.value) || 70,
    height: Number(els.profileInputs.height.value) || 170,
    activity: Number(els.profileInputs.activity.value) || 1.55,
    goal: els.profileInputs.goal.value,
    people: Number(els.profileInputs.people.value) || 1,
  };
}

function updateSearch() {
  state.searchQuery = els.ingredientSearch.value;
  syncSuggestedGrams();
}

function updateMarketSort() {
  state.marketSort = els.marketSort.value;
  renderMarkets();
}

function addItem(event) {
  event.preventDefault();
  const product = selectedProduct();
  if (!product) return;
  const manualGrams = Number(els.gramsInput.value);
  state.items.push({
    id: product.id,
    meal: els.mealSelect.value,
    grams: manualGrams || undefined,
  });
  els.ingredientSearch.value = "";
  els.gramsInput.value = "";
  els.gramsInput.placeholder = "Auto";
  state.searchQuery = "";
  save();
  render();
}

function calculateBmr() {
  const { sex, age, weight, height } = state.profile;
  const sexOffset = sex === "male" ? 5 : sex === "female" ? -161 : -78;
  return 10 * weight + 6.25 * height - 5 * age + sexOffset;
}

function targetCalories() {
  const goalOffset = { loss: -350, maintain: 0, gain: 300 }[state.profile.goal];
  return Math.max(1200, calculateBmr() * state.profile.activity + goalOffset);
}

function quantityFor(product, meal) {
  const mealFactor = { breakfast: 0.72, lunch: 1, dinner: 0.92, snack: 0.45 }[meal];
  const calorieFactor = targetCalories() / 2200;
  const dietFactor = state.hasDiet ? 0.95 : 1;
  const grams = product.baseGrams * mealFactor * calorieFactor * state.profile.people * dietFactor;
  return Math.max(25, Math.round(grams / 5) * 5);
}

function itemDetails(item) {
  const product = products.find((entry) => entry.id === item.id);
  const grams = item.grams || quantityFor(product, item.meal);
  return {
    ...item,
    product,
    grams,
    kcal: Math.round((grams * product.kcalPer100) / 100),
    protein: Math.round((grams * product.proteinPer100) / 100),
  };
}

function render() {
  renderProfileStatus();
  renderShoppingList();
  renderMarkets();
  renderInsights();
  save();
}

function renderProfileStatus() {
  const name = state.profile.name || state.displayName || (state.user ? state.user.split("@")[0] : "");
  els.profileStatus.textContent = state.hasDiet ? "Dieta importata" : name ? `Profilo di ${name}` : "Profilo base";
  els.loginButton.hidden = Boolean(state.user);
  els.accountMenu.hidden = !state.user;
  if (!state.user) return;

  const initials = getInitials(state.displayName || state.profile.name || state.user);
  els.avatarInitials.textContent = initials;
  els.dropdownInitials.textContent = initials;
  els.accountName.textContent = state.displayName || state.profile.name || "Profilo";
  els.accountEmail.textContent = state.user;
  els.avatarButton.style.setProperty("--avatar-color", state.avatarColor);
  document.querySelector(".mini-avatar").style.setProperty("--avatar-color", state.avatarColor);

  const hasImage = Boolean(state.avatarImage);
  els.avatarImage.hidden = !hasImage;
  els.dropdownAvatarImage.hidden = !hasImage;
  els.avatarInitials.hidden = hasImage;
  els.dropdownInitials.hidden = hasImage;
  if (hasImage) {
    els.avatarImage.src = state.avatarImage;
    els.dropdownAvatarImage.src = state.avatarImage;
  }
}

function renderShoppingList() {
  els.shoppingList.innerHTML = "";
  if (!state.items.length) {
    els.shoppingList.innerHTML = '<p class="muted">Aggiungi un alimento per calcolare grammi, kcal e supermercati.</p>';
    return;
  }

  state.items.map(itemDetails).forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "shopping-item";
    row.innerHTML = `
      <img class="product-image" src="${item.product.image}" alt="${item.product.name}" />
      <div>
        <h3>${item.product.name}</h3>
        <p>${labelMeal(item.meal)} - ${item.product.category} - ${item.kcal} kcal - ${item.protein} g proteine</p>
      </div>
      <div class="quantity">
        <label>
          Grammi
          <input class="grams-edit" type="number" min="25" max="5000" step="5" value="${item.grams}" data-index="${index}" />
        </label>
        <button class="remove-button" type="button" data-index="${index}">Rimuovi</button>
      </div>
    `;
    els.shoppingList.append(row);
  });

  document.querySelectorAll(".remove-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.items.splice(Number(button.dataset.index), 1);
      render();
    });
  });
  document.querySelectorAll(".grams-edit").forEach((input) => {
    input.addEventListener("change", () => {
      state.items[Number(input.dataset.index)].grams = Number(input.value) || undefined;
      render();
    });
  });
}

function renderMarkets() {
  const details = state.items.map(itemDetails);
  const sortedMarkets = markets
    .map((market) => {
      const matches = details.filter((item) => marketProductData(market, item.product));
      const total = matches.reduce((sum, item) => {
        const data = marketProductData(market, item.product);
        return sum + (data.price * item.grams) / 1000;
      }, 0);
      const distance = Math.max(0.1, market.distanceKm - state.locationBoost);
      const availableUnits = matches.reduce((sum, item) => sum + marketProductData(market, item.product).available, 0);
      return { ...market, matches, total, distance, availableUnits, score: matches.length * 10 - distance };
    })
    .sort(sortMarkets);

  els.markets.innerHTML = "";
  sortedMarkets.forEach((market) => {
    const card = document.createElement("article");
    card.className = "market-card";
    const availability = market.matches.length
      ? market.matches
          .map((item) => {
            const data = marketProductData(market, item.product);
            const itemCost = (data.price * item.grams) / 1000;
            return `${item.product.name}: ${item.grams} g, ${formatPrice(itemCost)}, ${data.available} disponibili, ${data.note}`;
          })
          .join("<br />")
      : "Nessun prodotto della lista nei dati demo.";
    card.innerHTML = `
      <div>
        <h3>${market.name}</h3>
        <p>${market.address} - ${market.distanceKm.toFixed(1)} km - ${market.matches.length}/${details.length || 0} prodotti trovati</p>
        <p>${availability}</p>
      </div>
      <strong>${market.total ? formatPrice(market.total) : "N/D"}</strong>
    `;
    els.markets.append(card);
  });
}

function sortMarkets(a, b) {
  if (state.marketSort === "price") return (a.total || Infinity) - (b.total || Infinity);
  if (state.marketSort === "availability") return b.availableUnits - a.availableUnits;
  if (state.marketSort === "distance") return a.distance - b.distance;
  return b.score - a.score;
}

function renderInsights() {
  const details = state.items.map(itemDetails);
  const calories = details.reduce((sum, item) => sum + item.kcal, 0);
  const grams = details.reduce((sum, item) => sum + item.grams, 0);
  const bestPrice = markets
    .map((market) =>
      details.reduce((sum, item) => {
        const data = marketProductData(market, item.product);
        return data ? sum + (data.price * item.grams) / 1000 : sum;
      }, 0),
    )
    .filter(Boolean)
    .sort((a, b) => a - b)[0];

  els.caloriesMetric.textContent = calories.toLocaleString("it-IT");
  els.gramsMetric.textContent = `${grams.toLocaleString("it-IT")} g`;
  els.priceMetric.textContent = bestPrice ? formatPrice(bestPrice) : "N/D";

  const protein = details.reduce((sum, item) => sum + item.protein, 0);
  const target = Math.round(targetCalories());
  els.recommendations.innerHTML = `
    <article class="recommendation">
      <p>Fabbisogno giornaliero stimato: <strong>${target.toLocaleString("it-IT")} kcal</strong>. Le porzioni sono adattate a sesso, eta, peso, altezza, attivita, obiettivo e numero di persone.</p>
    </article>
    <article class="recommendation">
      <p>Proteine nella lista: <strong>${protein} g</strong>. Per una versione clinica servirebbe validazione di un nutrizionista e gestione allergeni/intolleranze.</p>
    </article>
  `;
}

function useLocation() {
  if (!navigator.geolocation) {
    els.locationStatus.textContent = "Geolocalizzazione non supportata da questo browser.";
    return;
  }
  els.locationStatus.textContent = "Richiesta posizione in corso...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.locationBoost = Math.min(0.5, Math.abs(position.coords.latitude % 1) / 2);
      els.locationStatus.textContent = `Posizione rilevata. Accuratezza circa ${Math.round(position.coords.accuracy)} m.`;
      render();
    },
    () => {
      els.locationStatus.textContent = "Permesso posizione negato. Mostro comunque supermercati demo ordinati per distanza.";
    },
  );
}

function importDiet() {
  const file = els.dietFile.files[0];
  if (!file) return;
  els.dietFileName.textContent = file.name;
  setUploadProgress(8, "Upload");
  const reader = new FileReader();
  reader.onprogress = (event) => {
    if (!event.lengthComputable) return;
    const percent = Math.max(12, Math.min(92, Math.round((event.loaded / event.total) * 100)));
    setUploadProgress(percent, `${percent}%`);
  };
  reader.onload = () => {
    setUploadProgress(100, "Completato");
    const text = String(reader.result || "");
    const matchedProducts = products.filter((product) => searchableProductText(product).split(" ").some((token) => token.length > 3 && text.toLowerCase().includes(token)));
    if (matchedProducts.length) {
      state.items = matchedProducts.map((product) => ({ id: product.id, meal: "lunch", grams: quantityFor(product, "lunch") }));
    }
    state.hasDiet = true;
    els.dietSummary.textContent = `${file.name} importato. ${matchedProducts.length || "Nessun"} alimento riconosciuto automaticamente.`;
    render();
    window.setTimeout(() => setUploadProgress(0, "Upload"), 1400);
  };
  reader.onerror = () => {
    setUploadProgress(0, "Riprova");
    els.dietSummary.textContent = "Non sono riuscito a leggere il file. Prova con un formato testo, CSV o JSON.";
  };
  reader.readAsText(file);
}

function saveLogin(event) {
  event.preventDefault();
  state.user = els.email.value;
  state.displayName = state.displayName || els.email.value.split("@")[0];
  els.loginDialog.close();
  render();
}

function toggleAccountDropdown(event) {
  event.stopPropagation();
  els.accountDropdown.hidden = !els.accountDropdown.hidden;
}

function closeDropdownOnOutsideClick(event) {
  if (els.accountMenu.hidden || els.accountMenu.contains(event.target)) return;
  els.accountDropdown.hidden = true;
}

function openSettings() {
  els.accountDropdown.hidden = true;
  els.displayName.value = state.displayName || state.profile.name || "";
  els.avatarColor.value = state.avatarColor;
  syncProfileInputs();
  els.settingsDialog.showModal();
}

function saveSettings(event) {
  event.preventDefault();
  updateProfileFromSettings();
  state.displayName = els.displayName.value.trim() || state.displayName;
  state.avatarColor = els.avatarColor.value;
  const file = els.avatarFile.files[0];

  if (!file) {
    els.settingsDialog.close();
    render();
    return;
  }

  const reader = new FileReader();
  setAvatarUploadProgress(12, "Upload");
  reader.onprogress = (event) => {
    if (!event.lengthComputable) return;
    const percent = Math.max(15, Math.min(92, Math.round((event.loaded / event.total) * 100)));
    setAvatarUploadProgress(percent, `${percent}%`);
  };
  reader.onload = () => {
    setAvatarUploadProgress(100, "Completato");
    state.avatarImage = String(reader.result || "");
    els.avatarFile.value = "";
    els.avatarFileName.textContent = "Nessun file selezionato";
    els.settingsDialog.close();
    render();
    window.setTimeout(() => setAvatarUploadProgress(0, "Upload avatar"), 1000);
  };
  reader.onerror = () => setAvatarUploadProgress(0, "Riprova");
  reader.readAsDataURL(file);
}

function updateAvatarFileName() {
  const file = els.avatarFile.files[0];
  els.avatarFileName.textContent = file ? file.name : "Nessun file selezionato";
}

function logout() {
  state.user = null;
  state.displayName = "";
  state.avatarImage = "";
  els.accountDropdown.hidden = true;
  render();
}

function syncProfileInputs() {
  Object.entries(state.profile).forEach(([key, value]) => {
    if (els.profileInputs[key]) els.profileInputs[key].value = value;
  });
}

function labelMeal(meal) {
  return { breakfast: "Colazione", lunch: "Pranzo", dinner: "Cena", snack: "Spuntino" }[meal];
}

function formatPrice(value) {
  return `EUR ${value.toFixed(2).replace(".", ",")}`;
}

function selectedProduct() {
  const query = normalizeText(els.ingredientSearch.value);
  const exact = products.find((product) => normalizeText(product.name) === query);
  if (exact) return exact;
  const partial = products.find((product) => searchableProductText(product).includes(query));
  if (query && partial) return partial;
  return products.find((product) => product.id === state.selectedProductId) || products[0];
}

function syncSuggestedGrams() {
  const product = selectedProduct();
  state.selectedProductId = product.id;
  els.gramsInput.placeholder = `${quantityFor(product, els.mealSelect.value)} g consigliati`;
}

function normalizeText(value) {
  return String(value).trim().toLowerCase();
}

function searchableProductText(product) {
  return normalizeText(`${product.name} ${product.category} ${(product.aliases || []).join(" ")}`);
}

function marketProductData(market, product) {
  if (market.inventory[product.id]) return market.inventory[product.id];
  const basePrice = categoryBasePrice(product.category);
  const marketFactor = { "Conad City": 1.04, "Coop Superstore": 1.0, Lidl: 0.92 }[market.name] || 1;
  const productFactor = 1 + ((hashCode(product.id + market.name) % 17) - 8) / 100;
  return {
    price: roundPrice(basePrice * marketFactor * productFactor),
    available: 5 + (hashCode(`${market.name}-${product.id}`) % 34),
    note: "Prezzo stimato demo",
  };
}

function categoryBasePrice(category) {
  if (category.includes("Proteine")) return 10.5;
  if (category.includes("Legumi")) return 3.2;
  if (category.includes("Verdura")) return 2.4;
  if (category.includes("Frutta")) return 2.8;
  if (category.includes("Latticini")) return 6.4;
  if (category.includes("Carboidrati")) return 2.1;
  if (category.includes("Condimenti")) return 8.8;
  if (category.includes("Bevande")) return 12;
  return 4.5;
}

function roundPrice(value) {
  return Math.round(value * 100) / 100;
}

function hashCode(value) {
  return Math.abs(
    String(value)
      .split("")
      .reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) | 0, 0),
  );
}

function setUploadProgress(percent, label) {
  els.uploadProgress.style.width = `${percent}%`;
  els.uploadLabel.textContent = label;
}

function setAvatarUploadProgress(percent, label) {
  els.avatarUploadProgress.style.width = `${percent}%`;
  els.avatarUploadLabel.textContent = label;
}

function getInitials(value) {
  return String(value)
    .split(/[\s.@_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function save() {
  localStorage.setItem("grammableState", JSON.stringify(state));
}

function restore() {
  const raw = localStorage.getItem("grammableState") || localStorage.getItem("perMammaState");
  if (!raw) return;
  try {
    const restored = JSON.parse(raw);
    Object.assign(state, restored);
    els.marketSort.value = state.marketSort || "recommended";
    syncProfileInputs();
  } catch {
    localStorage.removeItem("perMammaState");
  }
}

init();
