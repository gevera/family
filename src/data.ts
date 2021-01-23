import { writable } from "svelte/store";

export const families = writable([
  {
    family: "Добровольский",
    members: [
      {
        name: "Николай Михайлович",
        dob: "1932-11-5",
        gender: 'm'
      },
      {
        name: "Мария Ивановна",
        dob: "1939-02-24",
        gender: 'f'
      },
    ],
  },
  {
    family: "Давиденко",
    members: [
      {
        name: "Владимир Иванович",
        dob: "1957-02-11",
        gender: 'm'
      },
      {
        name: "Людмила Николаевна",
        dob: "1957-04-27",
        gender: 'f'
      },
      {
        name: "Станислав Владимирович",
        dob: "1986-07-30",
        gender: 'm'
      },
      {
        name: "Ольга Викторовна",
        dob: "1987-12-19",
        gender: 'f'
      },
      {
        name: "Максим Станиславович",
        dob: "2008-01-23",
        gender: 'm'
      },
      {
        name: "Дарья Станиславовна",
        dob: "2015-07-03",
        gender: 'f'
      },
    ],
  },
  {
    family: "Донич",
    members: [
      {
        name: "Юрий Михайлович",
        dob: "1961-04-09",
        gender: 'm'
      },
      {
        name: "Татьяна Николаевна",
        dob: "1960-02-07",
        gender: 'f'
      },
      {
        name: "Денис Юрьевич",
        dob: "1987-01-07",
        gender: 'm'
      },
      {
        name: "Лейсан Фанзавиевна",
        dob: "1994-04-28",
        gender: 'f'
      },
      {
        name: "Олеся Юрьевна",
        dob: "1994-07-31",
        gender: 'f'
      },
      {
        name: "Алия Денисовна",
        dob: "2020-05-28",
        gender: 'f'
      },
    ],
  },
  {
    family: "Коваленко",
    members: [
      {
        name: "Павло Пантелеевич",
        dob: "1954-08-09",
        gender: 'm'
      },
      {
        name: "Галина Николаевна",
        dob: "1960-02-07",
        gender: 'f'
      },
      {
        name: "Сергей Павлович",
        dob: "1987-03-17",
        gender: 'm'
      },
      {
        name: "Жанна",
        dob: "1987-11-04",
        gender: 'f'
      },
      {
        name: "Давид Сергеевич",
        dob: "2013-04-19",
        gender: 'm'
      },
      {
        name: "Макар Сергеевич",
        dob: "2016-12-14",
        gender: 'm'
      },
    ],
  },
  {
    family: "Музыка",
    members: [
      {
        name: "Григорий",
        dob: "1974-04-25",
        gender: 'm'
      },
      {
        name: "Татьяна Павловна",
        dob: "1980-07-28",
        gender: 'f'
      },
      {
        name: "Максим Григорьевич",
        dob: "2009-04-22",
        gender: 'm'
      },
      {
        name: "Богдан Григорьевич",
        dob: "2011-08-12",
        gender: 'm'
      },
      {
        name: "Ульяна Григорьевна",
        dob: "2013-08-30",
        gender: 'f'
      },
    ],
  },
]);
