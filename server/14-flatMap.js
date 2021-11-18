//Es una combinación entre un flat y un map, es decir lo va transformando a medida que lo va aplanando 
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const attributesMapAndFlad = users.map(item => item.attributes).flat()
console.log('Usando map y flat: ',attributesMapAndFlad);

const attributesFatMAp = users.flatMap(item => item.attributes)
console.log('Usando flatMap: ',attributesFatMAp);

//Ejemplo. Necesitamos un array solo con las startDate
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

  const arryStartDate = Object.values(calendars).flatMap(item => item.map(item2 => item2.startDate))

  console.log(arryStartDate);