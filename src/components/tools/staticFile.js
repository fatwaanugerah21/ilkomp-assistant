export const days = [
   {
      value: "Senin",
   },
   {
      value: "Selasa",
   },
   {
      value: "Rabu",
   },
   {
      value: "Kamis",
   },
   {
      value: "Jum'at",
   },
   {
      value: "Sabtu",
   },
   {
      value: "Minggu",
   },
];

export const hours = () => {
   var hourList = [];
   for (let index = 1; index < 24; index++) {
      hourList.push(index < 10 ? `0${index}` : `${index}`);
   }

   return hourList;
};

export const minutes = () => {
   var minutesList = [];
   for (let index = 1; index < 60; index++) {
      minutesList.push(index < 10 ? `0${index}` : `${index}`);
   }
   return minutesList;
};
