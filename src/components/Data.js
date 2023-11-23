const quizData = [
  {
    id: 0,
    question: `Hva er hovedstaden i Algerie? `,
    options: [`Alger`, `Tripoli`, `Aba`, `Djelfa`],
    answer: `Alger`,
  },

  {
    id: 1,
    question: `Hva er hovedstaden i Angola? `,
    options: [`Addis Abeba`, `Luanda`, `Abuja`, `Lusaka`],
    answer: `Luanda`,
  },

  {
    id: 2,
    question: `Hva er hovedstaden i Benin? `,
    options: [`Abomey-Calavi`, `Cotonou`, `Port-Louis`, `Porto-Novo`],
    answer: `Porto-Novo`,
  },

  {
    id: 3,
    question: `Hva er hovedstaden i Botswana? `,
    options: [`Francistown`, `Gaborone`, `Libreville`, `Freetown`],
    answer: `Gaborone`,
  },

  {
    id: 4,
    question: `Hva er hovedstaden i Burundi? `,
    options: [`Maputo`, `Harare`, `Bujumbura`, `Gitega`],
    answer: `Gitega`,
  },

  {
    id: 5,
    question: `Hva er hovedstaden i Djibouti? `,
    options: [`Djibouti`, `Tadjoura	`, `Asmara`, `Juba`],
    answer: `Djibouti`,
  },

  {
    id: 6,
    question: `Hva er hovedstaden i Den sentralafrikanske republikk? `,
    options: [`Bangui`, `Basse-Kotto`, `Mbabane`, `Kinshasa`],
    answer: `Bangui`,
  },

  {
    id: 7,
    question: `Hva er hovedstaden i Egypt? `,
    options: [`Nairobi`, `Alexandria`, `Kairo`, `Giza`],
    answer: `Kairo`,
  },

  {
    id: 8,
    question: `Hva er hovedstaden i Ekvatorial Guinea? `,
    options: [`Maputo`, `Makurdi`, `Malabo`, `Mogadishu`],
    answer: `Malabo`,
  },

  {
    id: 9,
    question: `Hva er hovedstaden i Elfenbenkysten? `,
    options: [`Libreville`, `Lilongwe`, `Abudja`, `Abidjan`],
    answer: `Abidjan`,
  },

  {
    id: 10,
    question: `Hva er hovedstaden i Eritrea? `,
    options: [`Addis Abeba `, `Asmara`, `Aba`, `Assab`],
    answer: `Asmara`,
  },

  {
    id: 11,
    question: `Hva er hovedstaden i Etiopia? `,
    options: [`Dire Dawa`, `Aba`, `Asmara`, `Addis Abeba`],
    answer: `Addis Abeba`,
  },

  {
    id: 12,
    question: `Hva er hovedstaden i Gabon? `,
    options: [`Gabon`, `Mandji`, `Libreville`, `Gaborone`],
    answer: `Libreville`,
  },

  {
    id: 13,
    question: `Hva er hovedstaden i Gambia? `,
    options: [`Gaborone`, `Banjul`, `Nema Kunku`, `Gambia`],
    answer: `Banjul`,
  },

  {
    id: 14,
    question: `Hva er hovedstaden i Ghana? `,
    options: [`Kumasi`, `Accra`, `Abidjan`, `Bangui`],
    answer: `Accra`,
  },

  {
    id: 15,
    question: `Hva er hovedstaden i Guinea? `,
    options: [`Malabo`, `Boké`, `Aba`, `Conakry`],
    answer: `Conakry`,
  },

  {
    id: 16,
    question: `Hva er hovedstaden i Guinea-Bissau? `,
    options: [`Bissau`, `Brazzaville`, `Guinea`, `Goma`],
    answer: `Bissau`,
  },

  {
    id: 17,
    question: `Hva er hovedstaden i Kamerun? `,
    options: [`Singa`, `Soweto`, `Dakar`, `Yaoundé`],
    answer: `Yaoundé`,
  },

  {
    id: 18,
    question: `Hva er hovedstaden i Kapp Verde? `,
    options: [`Kigali`, `Mindelo`, `Praia`, `Dodoma`],
    answer: `Praia`,
  },

  {
    id: 19,
    question: `Hva er hovedstaden i Kenya? `,
    options: [`Nakuru`, `Mwanza`, `Mombasa`, `Nairobi`],
    answer: `Nairobi`,
  },

  {
    id: 20,
    question: `Hva er hovedstaden i Komorene? `,
    options: [`Comoré`, `Moroni`, `Monoro`, `Mayotte`],
    answer: `Moroni`,
  },

  {
    id: 21,
    question: `Hva er hovedstaden i Republikken Kongo? `,
    options: [`Matadi`, `Brazzaville`, `Kinashasa`, `Bangui`],
    answer: `Brazzaville`,
  },

  {
    id: 22,
    question: `Hva er hovedstaden i Den dominikanske republikken Kongo? `,
    options: [`Kinashasa`, `Abuja`, `Bangui`, `Onisha`],
    answer: `Bangui`,
  },

  {
    id: 23,
    question: `Hva er hovedstaden i Lesotho? `,
    options: [`Maseru`, `Leostho`, `Teyateyaneng`, `Lilongwe`],
    answer: `Maseru`,
  },

  {
    id: 24,
    question: `Hva er hovedstaden i Liberia? `,
    options: [`Tripoli`, `Misurata`, `Monrovia`, `Dodoma`],
    answer: `Monrovia`,
  },

  {
    id: 25,
    question: `Hva er hovedstaden i Libya? `,
    options: [`Tripoli`, `Lusaka`, `Tajoura`, `Gharyan`],
    answer: `Tripoli`,
  },

  {
    id: 26,
    question: `Hva er hovedstaden i Madagaskar? `,
    options: [`Antananarivo`, `Abuja`, `Antsirabe`, `Toamasina`],
    answer: `Antananarivo`,
  },

  {
    id: 27,
    question: `Hva er hovedstaden i Malawi? `,
    options: [`Bulawayo`, `Lilongwe`, `Mzuzu`, `Quelimane`],
    answer: `Lilongwe`,
  },

  {
    id: 28,
    question: `Hva er hovedstaden i Mali? `,
    options: [`Sikasso`, `Bakamo`, `Mopti`, `Maputo`],
    answer: `Bakamo`,
  },

  {
    id: 29,
    question: `Hva er hovedstaden i Marokko? `,
    options: [`Tanger`, `Marrakech`, `Casablanca`, `Rabat`],
    answer: `Rabat`,
  },

  {
    id: 30,
    question: `Hva er hovedstaden i Mauritania? `,
    options: [`Nouakchott`, `Lichinga`, `Nouâdhibou`, `Mbabane`],
    answer: `Nouakchott`,
  },

  {
    id: 31,
    question: `Hva er hovedstaden i Mauritius? `,
    options: [`M'Tsangamouji`, `Saint-Pierre`, `Port-Louis`, `Pointe Au Sel`],
    answer: `Port-Louis`,
  },

  {
    id: 32,
    question: `Hva er hovedstaden i Mosambik? `,
    options: [`Mosambik`, `Maputo`, `Matola`, `Mbabane`],
    answer: `Maputo`,
  },

  {
    id: 33,
    question: `Hva er hovedstaden i Namibia? `,
    options: [`Rundu`, `Windhoek`, `Victoria`, `Port Nolloth`],
    answer: `Windhoek`,
  },

  {
    id: 34,
    question: `Hva er hovedstaden i Niger? `,
    options: [`Niamey`, `Maradi`, `Lagos`, `N'Djamena`],
    answer: `Niamey`,
  },

  {
    id: 35,
    question: `Hva er hovedstaden i Nigeria? `,
    options: [`Ibadan`, `Accra`, `Abuja`, `Lagos`],
    answer: `Lagos`,
  },

  {
    id: 36,
    question: `Hva er hovedstaden i Rwanda? `,
    options: [`Goma`, `Kigali`, `Rwamagana`, `Gitega`],
    answer: `Kigali`,
  },

  {
    id: 37,
    question: `Hva er hovedstaden i São Tomé og Príncipe? `,
    options: [`Lomé`, `Nouakchott`, `Lilongwe`, `São Tomé`],
    answer: `São Tomé`,
  },

  {
    id: 38,
    question: `Hva er hovedstaden i Senegal? `,
    options: [`Saly`, `Bamako`, `Dakar`, `Ziguinchor`],
    answer: `Dakar`,
  },

  {
    id: 39,
    question: `Hva er hovedstaden i Seychellene? `,
    options: [`Victoria`, `Praia`, `Port-Louis`, `Mahé`],
    answer: `Victoria`,
  },

  {
    id: 40,
    question: `Hva er hovedstaden i Sierra Leone? `,
    options: [`Freetown`, `Libreville`, `Brazzaville`, `Lomé`],
    answer: `Freetown`,
  },

  {
    id: 41,
    question: `Hva er hovedstaden i Somalia? `,
    options: [`Mogadishu`, `Warsheikh`, `Hargeisa`, `Mombasa`],
    answer: `Mogadishu`,
  },

  {
    id: 42,
    question: `Hva er hovedstaden i Sudan? `,
    options: [`Atbara`, `Kassala`, `Juba`, `Khartoum`],
    answer: `Khartoum`,
  },

  {
    id: 43,
    question: `Hva er hovedstaden i Eswatini (Swaziland)? `,
    options: [`Maseru`, `Mbazwana`, `Nsoko`, `Mbabane`],
    answer: `Mbabane`,
  },

  {
    id: 44,
    question: `Hva er hovedstaden i Sør-Afrika? `,
    options: [`Johannesburg`, `Pretoria`, `Port Elizabeth`, `Durban`],
    answer: `Pretoria`,
  },

  {
    id: 45,
    question: `Hva er hovedstaden i Sør-Sudan? `,
    options: [`Juba`, `Malakal`, `Wau`, `Aweil`],
    answer: `Juba`,
  },

  {
    id: 46,
    question: `Hva er hovedstaden i Tanzania? `,
    options: [`Morogoro`, `Dodoma`, `Dar-es-Salaam`, `Tabora`],
    answer: `Dodoma`,
  },

  {
    id: 47,
    question: `Hva er hovedstaden i Togo? `,
    options: [`Thies`, `Lomé`, `Toamasina`, `Tlemcen`],
    answer: `Lomé`,
  },

  {
    id: 48,
    question: `Hva er hovedstaden i Tsjad? `,
    options: [`N'Djamena`, `Mondou`, `Deleima`, `Pala`],
    answer: `N'Djamena`,
  },

  {
    id: 49,
    question: `Hva er hovedstaden i Tunisia? `,
    options: [`Karthago`, `Sfax`, `Monastir`, `Tunis`],
    answer: `Tunis`,
  },

  {
    id: 50,
    question: `Hva er hovedstaden i Uganda? `,
    options: [`Lusaka`, `Ubombo`, `Gulu`, `Kampala`],
    answer: `Kampala`,
  },

  {
    id: 51,
    question: `Hva er hovedstaden i Zambia? `,
    options: [`Ndola`, `Lusaka`, `Kabwe`, `Nakambala`],
    answer: `Lusaka`,
  },

  {
    id: 52,
    question: `Hva er hovedstaden i Zimbabwe? `,
    options: [`Hwange`, `Bulawayo`, `Lupane`, `Harare`],
    answer: `Harare`,
  },

  {
    id: 53,
    question: `Hva er hovedstaden i Burkina Faso? `,
    options: [`Ouagadougou`, `Koudougou`, `Kongoussi`, `Bobo-Dioulasso`],
    answer: `Ouagadougou`,
  },
];

export default quizData;
