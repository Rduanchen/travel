// f1
function chooseTrip(type) {
  var result = document.getElementById("trip-result");
  var link = document.getElementById("trip-link");

  if (type === "city") {
    result.textContent = "從愛丁堡開始吧！這是我很喜歡的城市，可以讀讀城堡、山丘與河邊散步的故事。";
    link.textContent = "閱讀愛丁堡遊記 →";
    link.href = "overseas.html#edinburgh";
  } else {
    result.textContent = "從眠月線開始吧！跟著鐵道走進森林，看看我和朋友遇見的霧氣、星空與清晨。";
    link.textContent = "閱讀眠月線遊記 →";
    link.href = "taiwan.html#sleeping-moon";
  }
}

// f2
function calculateBudget() {
  var days = Number(document.getElementById("days").value);
  var room = Number(document.getElementById("room").value);
  var food = Number(document.getElementById("food").value);
  var transport = Number(document.getElementById("transport").value);
  var result = document.getElementById("budget-result");

  // HTML 會檢查空白和範圍，這裡再檢查數字與天數是否合理。
  if (!Number.isFinite(days) || !Number.isFinite(room) ||
      !Number.isFinite(food) || !Number.isFinite(transport) ||
      days < 1 || days > 365 || days !== Math.floor(days) ||
      room < 0 || food < 0 || transport < 0) {
    result.textContent = "請填入 1 到 365 的整數天數，金額不可為負數。";
    return;
  }

  var nights = days - 1;
  var total = nights * room + days * food + transport;
  result.textContent = days + " 天 " + nights + " 夜，每人預估合計 NT$ " +
    total.toLocaleString("zh-TW", { maximumFractionDigits: 2 }) +
    "。包含住宿、餐費與交通；其他花費請另外預留。";
}

// f3
function updateChecklist() {
  var items = document.getElementsByName("hiking-gear");
  var prepared = 0;
  var result = document.getElementById("checklist-result");

  for (var i = 0; i < items.length; i++) {
    if (items[i].checked) {
      prepared = prepared + 1;
    }
  }

  if (prepared === items.length) {
    result.textContent = "已準備 " + prepared + " / " + items.length +
      " 項，清單已全數勾選！出發前再確認路線需要的其他裝備。";
  } else {
    result.textContent = "已準備 " + prepared + " / " + items.length +
      " 項，還有 " + (items.length - prepared) + " 項待確認。";
  }
}

// 取消每個核取方塊的勾選，再更新統計文字。
function resetChecklist() {
  var items = document.getElementsByName("hiking-gear");

  for (var i = 0; i < items.length; i++) {
    items[i].checked = false;
  }

  updateChecklist();
}
