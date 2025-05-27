const express = require('express');
const router = express.Router();
const db = require("../database/connection");

// router.post('/models', async (req, res) => {
//   //   const { data } = req.body;
//   const data = [
//     "Maserati Spyder",
//     "Maserati 4200",
//     "Maserati Grecale",
//     "Maserati MC12",
//     "Maserati Quattroporte",
//     "Maserati GranTurismo",
//     "Maserati Other",
//     "Maserati GranSport",
//     "Maxus D90",
//     "Maxus Other",
//     "Maxus V80",
//     "Maxus G10",
//     "Maxus T60",
//     "Maxus G20",
//     "Maybach 57",
//     "Maybach Other",
//     "Maybach 62",
//     "Mazda 626",
//     "Mazda CX-7",
//     "Mazda RX-7",
//     "Mazda 2",
//     "Mazda Pickup",
//     "Mazda BT-50",
//     "Mazda MX-6",
//     "Mazda Tribute",
//     "Mazda 323",
//     "Mazda CX-90",
//     "Mazda Other",
//     "Mazda MX-5",
//     "Mazda 929",
//     "Mazda B-Series",
//     "Mazda 6",
//     "Mazda CX-5",
//     "Mazda RX-8",
//     "Mazda Navajo",
//     "Mazda CX-3",
//     "Mazda Protege",
//     "Mazda MPV",
//     "Mazda CX-60",
//     "Mazda CX-30",
//     "Mazda 3 Hatchback",
//     "Mazda 3",
//     "Mazda CX-9",
//     "McLaren Other",
//     "McLaren P1",
//     "McLaren 675LT",
//     "McLaren GT",
//     "McLaren 650S",
//     "McLaren Elva",
//     "McLaren Speedtail",
//     "McLaren 600LT",
//     "McLaren Artura",
//     "McLaren MP4-12C",
//     "McLaren 570S",
//     "McLaren 540C",
//     "McLaren F1",
//     "McLaren 765LT",
//     "McLaren 750S",
//     "McLaren 720S",
//     "McLaren 570GT",
//     "McLaren SLR",
//     "McLaren Senna",
//     "Mercedes-Benz GLC 63",
//     "Mercedes-Benz R-Class",
//     "Mercedes-Benz X Class",
//     "Mercedes-Benz E-Class",
//     "Mercedes-Benz SEC-Class",
//     "Mercedes-Benz B-Class",
//     "Mercedes-Benz Sprinter",
//     "Mercedes-Benz SLC",
//     "Mercedes-Benz C 43 AMG",
//     "Mercedes-Benz Vito Panel Vans",
//     "Mercedes-Benz 190",
//     "Mercedes-Benz GLE-Class",
//     "Mercedes-Benz GLC",
//     "Mercedes-Benz AMG",
//     "Mercedes-Benz A-Class",
//     "Mercedes-Benz CLC",
//     "Mercedes-Benz 400/420",
//     "Mercedes-Benz Vito Tourer",
//     "Mercedes-Benz GL-Class",
//     "Mercedes-Benz CLE-Class",
//     "Mercedes-Benz SLS",
//     "Mercedes-Benz 300/350/380",
//     "Mercedes-Benz Other",
//     "Mercedes-Benz 220 SE",
//     "Mercedes-Benz V-Class",
//     "Mercedes-Benz Viano",
//     "Mercedes-Benz EQA",
//     "Mercedes-Benz SLK-Class",
//     "Mercedes-Benz SLR",
//     "Mercedes-Benz GLK-Class",
//     "Mercedes-Benz C-Class",
//     "Mercedes-Benz G-Class",
//     "Mercedes-Benz C 63 AMG",
//     "Mercedes-Benz G-Class Brabus",
//     "Mercedes-Benz CLS-Class",
//     "Mercedes-Benz EQC",
//     "Mercedes-Benz Vito",
//     "Mercedes-Benz EQE",
//     "Mercedes-Benz SEL-Class",
//     "Mercedes-Benz CL-Class",
//     "Mercedes-Benz CLA",
//     "Mercedes-Benz CLK-Class",
//     "Mercedes-Benz 500/560",
//     "Mercedes-Benz S-Class",
//     "Mercedes-Benz M-Class",
//     "Mercedes-Benz GLS-Class",
//     "Mercedes-Benz GLB",
//     "Mercedes-Benz EQV",
//     "Mercedes-Benz S580e",
//     "Mercedes-Benz GLE Coupe",
//     "Mercedes-Benz GLA",
//     "Mercedes-Benz SL-Class",
//     "Mercedes-Benz 240/260/280",
//     "Mercedes-Benz EQG",
//     "Mercedes-Benz GLC Coupe",
//     "Mercedes-Benz EQB",
//     "Mercedes-Benz EQS",
//     "Mercedes-Maybach GLS-Class",
//     "Mercedes-Maybach S-Class",
//     "Mercedes-Maybach Other",
//     "Mercedes Onyx G7X",
//     "Mercedes Onyx G7",
//     "Mercedes Onyx G8",
//     "Mercedes Onyx Other",
//     "Mercedes Onyx G6",
//     "Mercedes Onyx G9X",
//     "Mercury Milan",
//     "Mercury Montego",
//     "Mercury Grand Marquis",
//     "Mercury Mariner",
//     "Mercury Mountaineer",
//     "Mercury Other",
//     "MG MG5",
//     "MG MGB",
//     "MG 360",
//     "MG MG350",
//     "MG HS",
//     "MG MG750",
//     "MG 6",
//     "MG RX8",
//     "MG B",
//     "MG RX5",
//     "MG Other",
//     "MG A",
//     "MG One",
//     "MG Whale",
//     "MG T60",
//     "MG MG 7",
//     "MG MG3",
//     "MG GS",
//     "MG MG550",
//     "MG RX9",
//     "MG ZST",
//     "MG MG6",
//     "MG ZS",
//     "MG GT",
//     "Milan Red",
//     "MINI Roadster",
//     "MINI Cooper Clubman",
//     "MINI Cooper",
//     "MINI Aceman",
//     "MINI Countryman",
//     "MINI Coupe",
//     "MINI Mayfair",
//     "MINI Clubman",
//     "MINI Paceman",
//     "MINI Other",
//     "Mitsubishi Colt",
//     "Mitsubishi Van",
//     "Mitsubishi Mirage",
//     "Mitsubishi Xpander",
//     "Mitsubishi Pajero",
//     "Mitsubishi Outlander",
//     "Mitsubishi Montero Sport",
//     "Mitsubishi Xpander Cross",
//     "Mitsubishi Nativa",
//     "Mitsubishi Galant",
//     "Mitsubishi ASX",
//     "Mitsubishi Evolution",
//     "Mitsubishi Pajero Sport",
//     "Mitsubishi Other",
//     "Mitsubishi Fortis",
//     "Mitsubishi Triton",
//     "Mitsubishi L200",
//     "Mitsubishi Canter",
//     "Mitsubishi Diamonte",
//     "Mitsubishi Lancer",
//     "Mitsubishi Montero",
//     "Mitsubishi Attrage",
//     "Mitsubishi Lancer EX",
//     "Mitsubishi EclipseCross",
//     "Mitsubishi Grandis",
//     "Mitsubishi 3000GT",
//     "Mitsubishi Pickup",
//     "Mitsubishi Eclipse",
//     "Mitsubishi Magna",
//     "Morgan Aero Supersport",
//     "Morgan Aero 8",
//     "Morgan Plus 6",
//     "Morgan 4 Seater",
//     "Morgan Plus 4",
//     "Morgan Plus 8",
//     "Morgan Roadster",
//     "Morgan 4/4",
//     "Morgan Aero Coupe",
//     "Morgan 3 Wheeler",
//     "Morris Minor",
//     "Neta Other",
//     "Neta Aya",
//     "Nio ES8",
//     "Nio ES6",
//     "Nio ES7",
//     "Nissan Skyline",
//     "Nissan Terrano",
//     "Nissan Patrol Safari",
//     "Nissan Titan",
//     "Nissan Maxima",
//     "Nissan GT-R",
//     "Nissan Pathfinder",
//     "Nissan Tiida",
//     "Nissan Rogue",
//     "Nissan 370z",
//     "Nissan Silvia",
//     "Nissan Navara",
//     "Nissan S130",
//     "Nissan Ariya",
//     "Nissan Urvan",
//     "Nissan Micra",
//     "Nissan X-Trail",
//     "Nissan 280ZX",
//     "Nissan Altima",
//     "Nissan Sunny",
//     "Nissan Van",
//     "Nissan Armada",
//     "Nissan Other",
//     "Nissan 400Z",
//     "Nissan Patrol",
//     "Nissan Quest",
//     "Nissan Sylphy",
//     "Nissan Leaf",
//     "Nissan Xterra",
//     "Nissan Magnite",
//     "Nissan Kicks",
//     "Nissan Z",
//     "Nissan Primera",
//     "Nissan Juke",
//     "Nissan 350Z",
//     "Nissan Versa",
//     "Nissan Patrol Pickup",
//     "Nissan Qashqai",
//     "Nissan Pickup",
//     "Nissan Gloria",
//     "Nissan Murano",
//     "Nissan 300ZX",
//     "Nissan Sentra",
//     "Nissan Teana",
//     "Noble M600",
//     "Oldsmobile Delta 88",
//     "OMODA OMODA C5",
//     "Opel Vita",
//     "Opel Vivaro",
//     "Opel Zafira Life",
//     "Opel Crossland X",
//     "Opel Zafira",
//     "Opel Vectra",
//     "Opel Mokka",
//     "Opel Antara",
//     "Opel Cascada",
//     "Opel Meriva",
//     "Opel Insignia",
//     "Opel Grandland X",
//     "Opel Omega",
//     "Opel Kadett",
//     "Opel Astra",
//     "Opel Signum",
//     "Opel Other",
//     "Opel Corsa",
//     "Other Make Other Minivan",
//     "Other Make Other Pickup",
//     "Other Make Heavy Vehicles",
//     "Other Make Other Car",
//     "Other Make Other 4x4",
//     "Other Make F1",
//     "Other Make Other Utility",
//     "Oullim Other",
//     "Oullim SPIRRA",
//     "Pagani Zonda",
//     "Pagani Huayra",
//     "PAL-V Pioneer Limited Edition",
//     "PAL-V Sport Edition",
//     "Peugeot 407",
//     "Peugeot RCZ",
//     "Peugeot iOn",
//     "Peugeot Boxer",
//     "Peugeot e-208",
//     "Peugeot 208",
//     "Peugeot RC7",
//     "Peugeot Expert",
//     "Peugeot 307",
//     "Peugeot 301",
//     "Peugeot Traveller",
//     "Peugeot 3008",
//     "Peugeot e-2008",
//     "Peugeot 607",
//     "Peugeot Partner",
//     "Peugeot 508",
//     "Peugeot 5008",
//     "Peugeot 504/5",
//     "Peugeot 2008",
//     "Peugeot Landtrek",
//     "Peugeot 207",
//     "Peugeot 206",
//     "Peugeot Other",
//     "Peugeot Rifter",
//     "Peugeot 408",
//     "Peugeot 308",
//     "PGO Speedster",
//     "Plymouth Other",
//     "Plymouth GTX",
//     "Polestar Other",
//     "Polestar 6",
//     "Polestar 3",
//     "Polestar 1",
//     "Polestar 4",
//     "Polestar 2",
//     "Pontiac Firebird",
//     "Pontiac Catalina",
//     "Pontiac Trans Am",
//     "Pontiac GTO",
//     "Pontiac Other",
//     "Porsche 918 Spyder",
//     "Porsche Carrera / 911",
//     "Porsche Taycan",
//     "Porsche 968",
//     "Porsche Panamera",
//     "Porsche Boxster",
//     "Porsche 718 Spyder",
//     "Porsche Cayenne",
//     "Porsche 928",
//     "Porsche 944",
//     "Porsche Other",
//     "Porsche Cayman",
//     "Porsche Macan",
//     "Proton Other",
//     "Proton Savvy",
//     "Proton Wira",
//     "Proton Waja",
//     "Proton Saga",
//     "Qiantu K50",
//     "Rabdan One",
//     "RAM Other",
//     "RAM 1500 TRX",
//     "RAM Warlock",
//     "RAM 2500",
//     "RAM 1500",
//     "Renault Duster",
//     "Renault Talisman",
//     "Renault Captur",
//     "Renault Sandero",
//     "Renault Scenic",
//     "Renault Laguna",
//     "Renault Koleos",
//     "Renault Master",
//     "Renault Zoe",
//     "Renault Dokker",
//     "Renault Twizy",
//     "Renault Espace",
//     "Renault Logan",
//     "Renault Trafic",
//     "Renault Fluence",
//     "Renault Express Van",
//     "Renault Safrane",
//     "Renault Twingo",
//     "Renault Arkana",
//     "Renault Other",
//     "Renault Megane",
//     "Renault Samsung",
//     "Renault Clio",
//     "Renault Symbol",
//     "Riddara RD6",
//     "Rivian R1T",
//     "Rivian R1S",
//     "Roewe RX5",
//     "Roewe i5",
//     "Roewe RX8",
//     "Rolls-Royce Silver Shadow",
//     "Rolls-Royce Phantom",
//     "Rolls-Royce Silver Spur",
//     "Rolls-Royce Ghost",
//     "Rolls-Royce Cullinan",
//     "Rolls-Royce Other",
//     "Rolls-Royce Wraith",
//     "Rolls-Royce Spectre",
//     "Rolls-Royce Silver Seraph",
//     "Rolls-Royce Dawn",
//     "Rolls-Royce Onyx Other",
//     "Rolls-Royce Onyx Cullinan",
//     "Rolls-Royce Onyx Dawn",
//     "Rolls-Royce Onyx Wraith",
//     "Rover Other",
//     "Rover 75",
//     "Rox 01",
//     "Rox Other",
//     "Saab 9-7x",
//     "Saab 9000",
//     "Saab 9-3",
//     "Saab 9-5",
//     "Saab Other",
//     "Saab 9-2x",
//     "Saab 900",
//     "Seat Cordoba",
//     "Seat Alhambra",
//     "Seat Other",
//     "Seat Altea",
//     "Seat Ibiza",
//     "Seat Toledo",
//     "Seat Leon",
//     "Seat Exeo",
//     "Seres 5",
//     "Seres 3",
//     "Seres Other",
//     "Shenlong/Sunlong SLK 6120",
//     "Shenlong/Sunlong SLK 6112",
//     "Skoda Roomster",
//     "Skoda Karoq",
//     "Skoda Kamiq",
//     "Skoda Superb",
//     "Skoda Scala",
//     "Skoda Kodiaq",
//     "Skoda Yeti",
//     "Skoda Kushaq",
//     "Skoda Octavia",
//     "Skoda Fabia",
//     "Skoda Other",
//     "Skoda Rapid",
//     "Skywell ET5",
//     "Smart #1",
//     "Smart #3",
//     "Smart Other",
//     "Smart Forfour",
//     "Smart Fortwo",
//     "Soueast DX7",
//     "Soueast DX8",
//     "Soueast DX3",
//     "Soueast DX5",
//     "Soueast S06",
//     "Soueast S09",
//     "Soueast S07",
//     "Speranza Other",
//     "Spyker C8 Preliator",
//     "SsangYong Other",
//     "SsangYong Rexton",
//     "SsangYong Korando",
//     "SsangYong Tivoli",
//     "SsangYong Kyron",
//     "SsangYong Rodius",
//     "SsangYong Musso",
//     "Stelato S9",
//     "Studebaker President",
//     "Subaru XV",
//     "Subaru Outback",
//     "Subaru Legacy",
//     "Subaru Forester",
//     "Subaru Crosstrek",
//     "Subaru Impreza",
//     "Subaru Other",
//     "Subaru WRX",
//     "Subaru Tribeca",
//     "Subaru BRZ",
//     "Suzuki Ignis",
//     "Suzuki Other",
//     "Suzuki Ertiga",
//     "Suzuki Fronx",
//     "Suzuki Celerio",
//     "Suzuki Alto",
//     "Suzuki Carry",
//     "Suzuki Baleno",
//     "Suzuki XL7",
//     "Suzuki SX4",
//     "Suzuki Kizashi",
//     "Suzuki Dzire",
//     "Suzuki S-PRESSO",
//     "Suzuki Liana",
//     "Suzuki Ciaz",
//     "Suzuki Jimny",
//     "Suzuki Eeco",
//     "Suzuki Vitara",
//     "Suzuki APV Van",
//     "Suzuki Swift",
//     "Suzuki Grand Vitara",
//     "TANK 500",
//     "TANK 300",
//     "TATA Van",
//     "TATA Zenon",
//     "TATA Indigo",
//     "TATA Other",
//     "TATA Delivery Truck",
//     "TATA Pickup",
//     "Tesla Cybertruck",
//     "Tesla Model 3",
//     "Tesla Model X",
//     "Tesla Tesla Roadster",
//     "Tesla Model S",
//     "Tesla Model Y",
//     "Tesla Other",
//     "Togg T10X",
//     "Togg T10F",
//     "Tova J14",
//     "Toyota Supra",
//     "Toyota GR86",
//     "Toyota Celica",
//     "Toyota 4Runner",
//     "Toyota Vitz",
//     "Toyota Veloz",
//     "Toyota Tundra",
//     "Toyota Sienna",
//     "Toyota Sequoia",
//     "Toyota Yaris",
//     "Toyota Venza",
//     "Toyota Scion",
//     "Toyota Other",
//     "Toyota Levin",
//     "Toyota Fortuner",
//     "Toyota Prius",
//     "Toyota Zelas",
//     "Toyota Land Cruiser 70",
//     "Toyota iA",
//     "Toyota Mirai",
//     "Toyota Tacoma",
//     "Toyota Avalon",
//     "Toyota bZ3",
//     "Toyota Tercel",
//     "Toyota Land Cruiser 79 series",
//     "Toyota Previa",
//     "Toyota Innova",
//     "Toyota Hilux",
//     "Toyota Wigo",
//     "Toyota Echo",
//     "Toyota Corona",
//     "Toyota 86",
//     "Toyota Raize",
//     "Toyota Frontlander",
//     "Toyota Rumion",
//     "Toyota Land Cruiser",
//     "Toyota Highlander",
//     "Toyota Camry",
//     "Toyota Crown",
//     "Toyota Urban Cruiser",
//     "Toyota Land Cruiser 76 series",
//     "Toyota C-HR",
//     "Toyota FJ Cruiser",
//     "Toyota Pickup",
//     "Toyota XA",
//     "Toyota Aurion",
//     "Toyota Land Cruiser 71",
//     "Toyota Corolla",
//     "Toyota BZ4X",
//     "Toyota MR2",
//     "Toyota Rush",
//     "Toyota Alphard",
//     "Toyota Prado",
//     "Toyota Corolla Cross",
//     "Toyota Avensis",
//     "Toyota Coaster",
//     "Toyota Wish",
//     "Toyota MR2 Spyder",
//     "Toyota IQ",
//     "Toyota Hiace",
//     "Toyota Avanza",
//     "Toyota Cressida",
//     "Toyota Granvia",
//     "Toyota Rav 4",
//     "Triumph TR3",
//     "Triumph Other",
//     "Triumph TR4A",
//     "UAZ New Patriot",
//     "UAZ Commercial",
//     "UAZ Hunter",
//     "UAZ Cargo",
//     "UAZ New Pickup",
//     "VGV U70 PRO",
//     "VGV Other",
//     "VGV U70 PLUS",
//     "VGV U75 PLUS",
//     "VGV VX7",
//     "VGV Bolden",
//     "Victory Other",
//     "Victory V2",
//     "Victory V1",
//     "Volkswagen Arteon",
//     "Volkswagen Eos",
//     "Volkswagen Atlas",
//     "Volkswagen Sharan",
//     "Volkswagen Eurovan",
//     "Volkswagen Bora",
//     "Volkswagen Polo",
//     "Volkswagen Crafter",
//     "Volkswagen T-Roc",
//     "Volkswagen Touareg",
//     "Volkswagen ID.6",
//     "Volkswagen Teramont",
//     "Volkswagen ID.7",
//     "Volkswagen Amarok",
//     "Volkswagen Vento",
//     "Volkswagen ID.4",
//     "Volkswagen Other",
//     "Volkswagen Passat",
//     "Volkswagen Transporter",
//     "Volkswagen Viloran",
//     "Volkswagen Beetle",
//     "Volkswagen Multivan",
//     "Volkswagen CC",
//     "Volkswagen Phaeton",
//     "Volkswagen TAYRON",
//     "Volkswagen Taos",
//     "Volkswagen E-Lavida",
//     "Volkswagen Routan",
//     "Volkswagen Golf",
//     "Volkswagen Scirocco",
//     "Volkswagen ID.3",
//     "Volkswagen Jetta",
//     "Volkswagen Tiguan",
//     "Volkswagen Touran",
//     "Volkswagen Caddy",
//     "Volvo EX30",
//     "Volvo XC40",
//     "Volvo V-Class",
//     "Volvo S80",
//     "Volvo C-Class",
//     "Volvo S40",
//     "Volvo XC90",
//     "Volvo XC60",
//     "Volvo V90",
//     "Volvo S70",
//     "Volvo XC40 Recharge",
//     "Volvo S90",
//     "Volvo C40",
//     "Volvo XC70",
//     "Volvo Other",
//     "Volvo S60",
//     "Voyah Free",
//     "Voyah Dreamer",
//     "Westfield Sportscars Sport 250",
//     "Westfield Sportscars Special Edition",
//     "Westfield Sportscars Track",
//     "Westfield Sportscars Classic",
//     "Wiesmann Other",
//     "Wiesmann MF5",
//     "Wiesmann MF4",
//     "Wiesmann MF3",
//     "W Motors Fenyr Hypersport",
//     "W Motors Lykan Hypersport",
//     "Wuling Bingo",
//     "Wuling Air EV",
//     "Wuling Other",
//     "XEV Other",
//     "XEV Yoyo",
//     "Xiaomi Other",
//     "Xiaomi SU7",
//     "XPeng Other",
//     "XPeng G9",
//     "XPeng P7",
//     "YangWang Other",
//     "YangWang U8",
//     "Zeekr Other",
//     "Zeekr X",
//     "Zeekr 001 FR",
//     "Zeekr 009",
//     "Zeekr 007",
//     "Zeekr 9",
//     "Zeekr 001",
//     "Zenvo Aurora",
//     "Zenvo TSR-S",
//     "Zhongxing Terralord",
//     "ZNA Yumsun",
//     "ZNA Rich",
//     "ZNA Oting",
//     "Zotye E200",
//     "Zotye T600 Sport",
//     "Zotye T300",
//     "Zotye T600",
//     "Zotye T700",
//     "Zotye Z100",
//     "ZXAUTO Other",
//     "ZXAUTO Grandlion",
//     "ZXAUTO Terralord"
//   ];

//   data.map(
//     (obj) => {
//       try {
//         db.query('INSERT INTO models (make) VALUES (?)', obj, (err, result) => {
//           if (err) return res.status(500).json({ message: err });
//         });
//       } catch (err) {
//         console.error('Error inserting into database:', err);
//         res.status(500).json({ error: 'Database error.' });
//       }
//     }
//   )
//   res.json({ "message": "Added Successfully" });
// });

router.get('/models', async (req, res) => {
  try {
    db.query('SELECT * FROM models', (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.length == 0) return res.json([]);
      res.json(results);
    });
  } catch (err) {
    console.error('Error fetching from database:', err);
    res.status(500).json({ error: 'Database error.' });
  }
});

router.get('/trims/:model', (req, res) => {
  const { model } = req.params;

  if (!model) {
    return res.status(400).json({ error: 'Model name is required' });
  }

  db.query('SELECT id FROM models WHERE make = ?', [model], (err, modelResults) => {
    if (err) return res.status(500).json({ error: err.message });

    if (modelResults.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }
    const modelId = modelResults[0].id;
    db.query('SELECT * FROM trims WHERE model_id = ?', [modelId], (err, trimResults) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(trimResults);
    });
  });
});

router.post('/trims', (req, res) => {
  const { trim, model_id } = req.body;
  console.log(req.body)
  const insertQuery = `
      INSERT INTO trims (model_id, trim) 
      VALUES (?, ?)
    `;
  db.query(insertQuery, [model_id, trim], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({message: "Trim Added"})
  });
});


router.put('/trim/:id', (req, res) => {
  const { id } = req.params;
  const { trim, model_id } = req.body;
  console.log(req.body)

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Valid trim ID is required' });
  }

  if (!trim || !model_id) {
    return res.status(400).json({ error: 'Name and model_id are required' });
  }

  if (isNaN(model_id)) {
    return res.status(400).json({ error: 'model_id must be a valid number' });
  }

  db.query('SELECT id FROM trims WHERE id = ?', [id], (err, trimResults) => {
    if (err) return res.status(500).json({ error: err.message });

    if (trimResults.length === 0) {
      return res.status(404).json({ error: 'Trim not found' });
    }

    db.query('SELECT id FROM models WHERE id = ?', [model_id], (err, modelResults) => {
      if (err) return res.status(500).json({ error: err.message });

      if (modelResults.length === 0) {
        return res.status(404).json({ error: 'Model not found' });
      }

      const updateQuery = `
        UPDATE trims 
        SET trim= ?, model_id = ?
        WHERE id = ?
      `;

      db.query(updateQuery, [trim, model_id, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
      });
    });
  });
});

router.delete('/trim/:id', (req, res) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Valid trim ID is required' });
  }

  db.query('SELECT * FROM trims WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(404).json({ error: 'Trim not found' });
    }

    const trimToDelete = results[0];
    db.query('DELETE FROM trims WHERE id = ?', [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        message: 'Trim deleted successfully',
        deleted_trim: trimToDelete
      });
    });
  });
});

router.get('/models', (req, res) => {

  db.query('SELECT * FROM models', (err, modelResults) => {
    if (err) return res.status(500).json({ error: err.message });

    if (modelResults.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }
    return json({ "models": result });
  });
});

router.delete('/models/:id', (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM models WHERE id = ?', [id], (err, modelResults) => {
    if (err) return res.status(500).json({ error: err.message });

    if (modelResults.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }

    db.query('DELETE FROM models WHERE id = ?', [id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      return res.json({
        message: 'Model deleted successfully',
        deletedModel: modelResults[0]
      });
    });
  });
});

router.put('/models/:id', (req, res) => {
  const { id } = req.params;
  const { make } = req.body;

  db.query('SELECT * FROM models WHERE id = ?', [id], (err, modelResults) => {
    if (err) return res.status(500).json({ error: err.message });

    if (modelResults.length === 0) {
      return res.status(404).json({ error: 'Model not found' });
    }
    const query = `UPDATE models SET make=? WHERE id = ?`;

    db.query(query, [make, id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      db.query('SELECT * FROM models WHERE id = ?', [id], (err, modelResults) => {
        if (err) return res.status(500).json({ error: err.message });

        return res.json({
          message: 'Model updated successfully',
          model: modelResults[0]
        });
      });
    });
  });
});

router.post('/models', (req, res) => {
  const { make } = req.body;

  if (!make) {
    return res.status(400).json({ error: 'Name id required' });
  }

  const query = 'INSERT INTO models (make) VALUES (?)';

  db.query(query, [make], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    db.query('SELECT * FROM models WHERE id = ?', [result.insertId], (err, modelResults) => {
      if (err) return res.status(500).json({ error: err.message });

      return res.status(201).json({
        message: 'Model created successfully',
        model: modelResults[0]
      });
    });
  });
});

module.exports = router;
