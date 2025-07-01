const obj = {
  name: "田中太郎",
  age: 25,
  hobbies: ["旅行", "読書", "ゲーム"],
  isStudent: true,
  address: {
    prefecture: "東京都",
    city: "渋谷区",
  },
};

console.log(obj);

const name = obj.name;
const birthday = obj.birthday;
const birthdayYear = obj?.birthday?.year;
// undefined.year;

// {birthday: {year: 1990}}