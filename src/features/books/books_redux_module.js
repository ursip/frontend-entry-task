const initialState = [
  "Малыш и Карлсон",
  "По ком звонит колокол",
  "Братья Карамазовы",
  "Война и мир",
  "Дом без хозяина",
  "Поправки",
  "Приключения Тома Сойера",
  "Ветхий завет",
  "Над пропастью во ржи",
  "Убить пересмешника",
  "Руслан и Людмила",
  "Мцыри",
  "Отцы и дети",
  "Горе от ума",
  "Евгений Онегин",
  "Вишневый сад",
  "Старик и море",
  "1984",
  "Фауст",
  "Возвращение Шерлока Холмса"
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bookReducer;