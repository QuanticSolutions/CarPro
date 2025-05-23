const express = require('express');
const router = express.Router();
const db = require("../database/connection");

router.post('/models', async (req, res) => {
//   const { data } = req.body;
     const data = [
        "Maserati Spyder",
        "Maserati 4200",
        "Maserati Grecale",
        "Maserati MC12",
        "Maserati Quattroporte",
        "Maserati GranTurismo",
        "Maserati Other",
        "Maserati GranSport",
        "Maxus D90",
        "Maxus Other",
        "Maxus V80",
        "Maxus G10",
        "Maxus T60",
        "Maxus G20",
        "Maybach 57",
        "Maybach Other",
        "Maybach 62",
        "Mazda 626",
        "Mazda CX-7",
        "Mazda RX-7",
        "Mazda 2",
        "Mazda Pickup",
        "Mazda BT-50",
        "Mazda MX-6",
        "Mazda Tribute",
        "Mazda 323",
        "Mazda CX-90",
        "Mazda Other",
        "Mazda MX-5",
        "Mazda 929",
        "Mazda B-Series",
        "Mazda 6",
        "Mazda CX-5",
        "Mazda RX-8",
        "Mazda Navajo",
        "Mazda CX-3",
        "Mazda Protege",
        "Mazda MPV",
        "Mazda CX-60",
        "Mazda CX-30",
        "Mazda 3 Hatchback",
        "Mazda 3",
        "Mazda CX-9",
        "McLaren Other",
        "McLaren P1",
        "McLaren 675LT",
        "McLaren GT",
        "McLaren 650S",
        "McLaren Elva",
        "McLaren Speedtail",
        "McLaren 600LT",
        "McLaren Artura",
        "McLaren MP4-12C",
        "McLaren 570S",
        "McLaren 540C",
        "McLaren F1",
        "McLaren 765LT",
        "McLaren 750S",
        "McLaren 720S",
        "McLaren 570GT",
        "McLaren SLR",
        "McLaren Senna",
        "Mercedes-Benz GLC 63",
        "Mercedes-Benz R-Class",
        "Mercedes-Benz X Class",
        "Mercedes-Benz E-Class",
        "Mercedes-Benz SEC-Class",
        "Mercedes-Benz B-Class",
        "Mercedes-Benz Sprinter",
        "Mercedes-Benz SLC",
        "Mercedes-Benz C 43 AMG",
        "Mercedes-Benz Vito Panel Vans",
        "Mercedes-Benz 190",
        "Mercedes-Benz GLE-Class",
        "Mercedes-Benz GLC",
        "Mercedes-Benz AMG",
        "Mercedes-Benz A-Class",
        "Mercedes-Benz CLC",
        "Mercedes-Benz 400/420",
        "Mercedes-Benz Vito Tourer",
        "Mercedes-Benz GL-Class",
        "Mercedes-Benz CLE-Class",
        "Mercedes-Benz SLS",
        "Mercedes-Benz 300/350/380",
        "Mercedes-Benz Other",
        "Mercedes-Benz 220 SE",
        "Mercedes-Benz V-Class",
        "Mercedes-Benz Viano",
        "Mercedes-Benz EQA",
        "Mercedes-Benz SLK-Class",
        "Mercedes-Benz SLR",
        "Mercedes-Benz GLK-Class",
        "Mercedes-Benz C-Class",
        "Mercedes-Benz G-Class",
        "Mercedes-Benz C 63 AMG",
        "Mercedes-Benz G-Class Brabus",
        "Mercedes-Benz CLS-Class",
        "Mercedes-Benz EQC",
        "Mercedes-Benz Vito",
        "Mercedes-Benz EQE",
        "Mercedes-Benz SEL-Class",
        "Mercedes-Benz CL-Class",
        "Mercedes-Benz CLA",
        "Mercedes-Benz CLK-Class",
        "Mercedes-Benz 500/560",
        "Mercedes-Benz S-Class",
        "Mercedes-Benz M-Class",
        "Mercedes-Benz GLS-Class",
        "Mercedes-Benz GLB",
        "Mercedes-Benz EQV",
        "Mercedes-Benz S580e",
        "Mercedes-Benz GLE Coupe",
        "Mercedes-Benz GLA",
        "Mercedes-Benz SL-Class",
        "Mercedes-Benz 240/260/280",
        "Mercedes-Benz EQG",
        "Mercedes-Benz GLC Coupe",
        "Mercedes-Benz EQB",
        "Mercedes-Benz EQS",
        "Mercedes-Maybach GLS-Class",
        "Mercedes-Maybach S-Class",
        "Mercedes-Maybach Other",
        "Mercedes Onyx G7X",
        "Mercedes Onyx G7",
        "Mercedes Onyx G8",
        "Mercedes Onyx Other",
        "Mercedes Onyx G6",
        "Mercedes Onyx G9X",
        "Mercury Milan",
        "Mercury Montego",
        "Mercury Grand Marquis",
        "Mercury Mariner",
        "Mercury Mountaineer",
        "Mercury Other",
        "MG MG5",
        "MG MGB",
        "MG 360",
        "MG MG350",
        "MG HS",
        "MG MG750",
        "MG 6",
        "MG RX8",
        "MG B",
        "MG RX5",
        "MG Other",
        "MG A",
        "MG One",
        "MG Whale",
        "MG T60",
        "MG MG 7",
        "MG MG3",
        "MG GS",
        "MG MG550",
        "MG RX9",
        "MG ZST",
        "MG MG6",
        "MG ZS",
        "MG GT",
        "Milan Red",
        "MINI Roadster",
        "MINI Cooper Clubman",
        "MINI Cooper",
        "MINI Aceman",
        "MINI Countryman",
        "MINI Coupe",
        "MINI Mayfair",
        "MINI Clubman",
        "MINI Paceman",
        "MINI Other",
        "Mitsubishi Colt",
        "Mitsubishi Van",
        "Mitsubishi Mirage",
        "Mitsubishi Xpander",
        "Mitsubishi Pajero",
        "Mitsubishi Outlander",
        "Mitsubishi Montero Sport",
        "Mitsubishi Xpander Cross",
        "Mitsubishi Nativa",
        "Mitsubishi Galant",
        "Mitsubishi ASX",
        "Mitsubishi Evolution",
        "Mitsubishi Pajero Sport",
        "Mitsubishi Other",
        "Mitsubishi Fortis",
        "Mitsubishi Triton",
        "Mitsubishi L200",
        "Mitsubishi Canter",
        "Mitsubishi Diamonte",
        "Mitsubishi Lancer",
        "Mitsubishi Montero",
        "Mitsubishi Attrage",
        "Mitsubishi Lancer EX",
        "Mitsubishi EclipseCross",
        "Mitsubishi Grandis",
        "Mitsubishi 3000GT",
        "Mitsubishi Pickup",
        "Mitsubishi Eclipse",
        "Mitsubishi Magna",
        "Morgan Aero Supersport",
        "Morgan Aero 8",
        "Morgan Plus 6",
        "Morgan 4 Seater",
        "Morgan Plus 4",
        "Morgan Plus 8",
        "Morgan Roadster",
        "Morgan 4/4",
        "Morgan Aero Coupe",
        "Morgan 3 Wheeler",
        "Morris Minor",
        "Neta Other",
        "Neta Aya",
        "Nio ES8",
        "Nio ES6",
        "Nio ES7",
        "Nissan Skyline",
        "Nissan Terrano",
        "Nissan Patrol Safari",
        "Nissan Titan",
        "Nissan Maxima",
        "Nissan GT-R",
        "Nissan Pathfinder",
        "Nissan Tiida",
        "Nissan Rogue",
        "Nissan 370z",
        "Nissan Silvia",
        "Nissan Navara",
        "Nissan S130",
        "Nissan Ariya",
        "Nissan Urvan",
        "Nissan Micra",
        "Nissan X-Trail",
        "Nissan 280ZX",
        "Nissan Altima",
        "Nissan Sunny",
        "Nissan Van",
        "Nissan Armada",
        "Nissan Other",
        "Nissan 400Z",
        "Nissan Patrol",
        "Nissan Quest",
        "Nissan Sylphy",
        "Nissan Leaf",
        "Nissan Xterra",
        "Nissan Magnite",
        "Nissan Kicks",
        "Nissan Z",
        "Nissan Primera",
        "Nissan Juke",
        "Nissan 350Z",
        "Nissan Versa",
        "Nissan Patrol Pickup",
        "Nissan Qashqai",
        "Nissan Pickup",
        "Nissan Gloria",
        "Nissan Murano",
        "Nissan 300ZX",
        "Nissan Sentra",
        "Nissan Teana",
        "Noble M600",
        "Oldsmobile Delta 88",
        "OMODA OMODA C5",
        "Opel Vita",
        "Opel Vivaro",
        "Opel Zafira Life",
        "Opel Crossland X",
        "Opel Zafira",
        "Opel Vectra",
        "Opel Mokka",
        "Opel Antara",
        "Opel Cascada",
        "Opel Meriva",
        "Opel Insignia",
        "Opel Grandland X",
        "Opel Omega",
        "Opel Kadett",
        "Opel Astra",
        "Opel Signum",
        "Opel Other",
        "Opel Corsa",
        "Other Make Other Minivan",
        "Other Make Other Pickup",
        "Other Make Heavy Vehicles",
        "Other Make Other Car",
        "Other Make Other 4x4",
        "Other Make F1",
        "Other Make Other Utility",
        "Oullim Other",
        "Oullim SPIRRA",
        "Pagani Zonda",
        "Pagani Huayra",
        "PAL-V Pioneer Limited Edition",
        "PAL-V Sport Edition",
        "Peugeot 407",
        "Peugeot RCZ",
        "Peugeot iOn",
        "Peugeot Boxer",
        "Peugeot e-208",
        "Peugeot 208",
        "Peugeot RC7",
        "Peugeot Expert",
        "Peugeot 307",
        "Peugeot 301",
        "Peugeot Traveller",
        "Peugeot 3008",
        "Peugeot e-2008",
        "Peugeot 607",
        "Peugeot Partner",
        "Peugeot 508",
        "Peugeot 5008",
        "Peugeot 504/5",
        "Peugeot 2008",
        "Peugeot Landtrek",
        "Peugeot 207",
        "Peugeot 206",
        "Peugeot Other",
        "Peugeot Rifter",
        "Peugeot 408",
        "Peugeot 308",
        "PGO Speedster",
        "Plymouth Other",
        "Plymouth GTX",
        "Polestar Other",
        "Polestar 6",
        "Polestar 3",
        "Polestar 1",
        "Polestar 4",
        "Polestar 2",
        "Pontiac Firebird",
        "Pontiac Catalina",
        "Pontiac Trans Am",
        "Pontiac GTO",
        "Pontiac Other",
        "Porsche 918 Spyder",
        "Porsche Carrera / 911",
        "Porsche Taycan",
        "Porsche 968",
        "Porsche Panamera",
        "Porsche Boxster",
        "Porsche 718 Spyder",
        "Porsche Cayenne",
        "Porsche 928",
        "Porsche 944",
        "Porsche Other",
        "Porsche Cayman",
        "Porsche Macan",
        "Proton Other",
        "Proton Savvy",
        "Proton Wira",
        "Proton Waja",
        "Proton Saga",
        "Qiantu K50",
        "Rabdan One",
        "RAM Other",
        "RAM 1500 TRX",
        "RAM Warlock",
        "RAM 2500",
        "RAM 1500",
        "Renault Duster",
        "Renault Talisman",
        "Renault Captur",
        "Renault Sandero",
        "Renault Scenic",
        "Renault Laguna",
        "Renault Koleos",
        "Renault Master",
        "Renault Zoe",
        "Renault Dokker",
        "Renault Twizy",
        "Renault Espace",
        "Renault Logan",
        "Renault Trafic",
        "Renault Fluence",
        "Renault Express Van",
        "Renault Safrane",
        "Renault Twingo",
        "Renault Arkana",
        "Renault Other",
        "Renault Megane",
        "Renault Samsung",
        "Renault Clio",
        "Renault Symbol",
        "Riddara RD6",
        "Rivian R1T",
        "Rivian R1S",
        "Roewe RX5",
        "Roewe i5",
        "Roewe RX8",
        "Rolls-Royce Silver Shadow",
        "Rolls-Royce Phantom",
        "Rolls-Royce Silver Spur",
        "Rolls-Royce Ghost",
        "Rolls-Royce Cullinan",
        "Rolls-Royce Other",
        "Rolls-Royce Wraith",
        "Rolls-Royce Spectre",
        "Rolls-Royce Silver Seraph",
        "Rolls-Royce Dawn",
        "Rolls-Royce Onyx Other",
        "Rolls-Royce Onyx Cullinan",
        "Rolls-Royce Onyx Dawn",
        "Rolls-Royce Onyx Wraith",
        "Rover Other",
        "Rover 75",
        "Rox 01",
        "Rox Other",
        "Saab 9-7x",
        "Saab 9000",
        "Saab 9-3",
        "Saab 9-5",
        "Saab Other",
        "Saab 9-2x",
        "Saab 900",
        "Seat Cordoba",
        "Seat Alhambra",
        "Seat Other",
        "Seat Altea",
        "Seat Ibiza",
        "Seat Toledo",
        "Seat Leon",
        "Seat Exeo",
        "Seres 5",
        "Seres 3",
        "Seres Other",
        "Shenlong/Sunlong SLK 6120",
        "Shenlong/Sunlong SLK 6112",
        "Skoda Roomster",
        "Skoda Karoq",
        "Skoda Kamiq",
        "Skoda Superb",
        "Skoda Scala",
        "Skoda Kodiaq",
        "Skoda Yeti",
        "Skoda Kushaq",
        "Skoda Octavia",
        "Skoda Fabia",
        "Skoda Other",
        "Skoda Rapid",
        "Skywell ET5",
        "Smart #1",
        "Smart #3",
        "Smart Other",
        "Smart Forfour",
        "Smart Fortwo",
        "Soueast DX7",
        "Soueast DX8",
        "Soueast DX3",
        "Soueast DX5",
        "Soueast S06",
        "Soueast S09",
        "Soueast S07",
        "Speranza Other",
        "Spyker C8 Preliator",
        "SsangYong Other",
        "SsangYong Rexton",
        "SsangYong Korando",
        "SsangYong Tivoli",
        "SsangYong Kyron",
        "SsangYong Rodius",
        "SsangYong Musso",
        "Stelato S9",
        "Studebaker President",
        "Subaru XV",
        "Subaru Outback",
        "Subaru Legacy",
        "Subaru Forester",
        "Subaru Crosstrek",
        "Subaru Impreza",
        "Subaru Other",
        "Subaru WRX",
        "Subaru Tribeca",
        "Subaru BRZ",
        "Suzuki Ignis",
        "Suzuki Other",
        "Suzuki Ertiga",
        "Suzuki Fronx",
        "Suzuki Celerio",
        "Suzuki Alto",
        "Suzuki Carry",
        "Suzuki Baleno",
        "Suzuki XL7",
        "Suzuki SX4",
        "Suzuki Kizashi",
        "Suzuki Dzire",
        "Suzuki S-PRESSO",
        "Suzuki Liana",
        "Suzuki Ciaz",
        "Suzuki Jimny",
        "Suzuki Eeco",
        "Suzuki Vitara",
        "Suzuki APV Van",
        "Suzuki Swift",
        "Suzuki Grand Vitara",
        "TANK 500",
        "TANK 300",
        "TATA Van",
        "TATA Zenon",
        "TATA Indigo",
        "TATA Other",
        "TATA Delivery Truck",
        "TATA Pickup",
        "Tesla Cybertruck",
        "Tesla Model 3",
        "Tesla Model X",
        "Tesla Tesla Roadster",
        "Tesla Model S",
        "Tesla Model Y",
        "Tesla Other",
        "Togg T10X",
        "Togg T10F",
        "Tova J14",
        "Toyota Supra",
        "Toyota GR86",
        "Toyota Celica",
        "Toyota 4Runner",
        "Toyota Vitz",
        "Toyota Veloz",
        "Toyota Tundra",
        "Toyota Sienna",
        "Toyota Sequoia",
        "Toyota Yaris",
        "Toyota Venza",
        "Toyota Scion",
        "Toyota Other",
        "Toyota Levin",
        "Toyota Fortuner",
        "Toyota Prius",
        "Toyota Zelas",
        "Toyota Land Cruiser 70",
        "Toyota iA",
        "Toyota Mirai",
        "Toyota Tacoma",
        "Toyota Avalon",
        "Toyota bZ3",
        "Toyota Tercel",
        "Toyota Land Cruiser 79 series",
        "Toyota Previa",
        "Toyota Innova",
        "Toyota Hilux",
        "Toyota Wigo",
        "Toyota Echo",
        "Toyota Corona",
        "Toyota 86",
        "Toyota Raize",
        "Toyota Frontlander",
        "Toyota Rumion",
        "Toyota Land Cruiser",
        "Toyota Highlander",
        "Toyota Camry",
        "Toyota Crown",
        "Toyota Urban Cruiser",
        "Toyota Land Cruiser 76 series",
        "Toyota C-HR",
        "Toyota FJ Cruiser",
        "Toyota Pickup",
        "Toyota XA",
        "Toyota Aurion",
        "Toyota Land Cruiser 71",
        "Toyota Corolla",
        "Toyota BZ4X",
        "Toyota MR2",
        "Toyota Rush",
        "Toyota Alphard",
        "Toyota Prado",
        "Toyota Corolla Cross",
        "Toyota Avensis",
        "Toyota Coaster",
        "Toyota Wish",
        "Toyota MR2 Spyder",
        "Toyota IQ",
        "Toyota Hiace",
        "Toyota Avanza",
        "Toyota Cressida",
        "Toyota Granvia",
        "Toyota Rav 4",
        "Triumph TR3",
        "Triumph Other",
        "Triumph TR4A",
        "UAZ New Patriot",
        "UAZ Commercial",
        "UAZ Hunter",
        "UAZ Cargo",
        "UAZ New Pickup",
        "VGV U70 PRO",
        "VGV Other",
        "VGV U70 PLUS",
        "VGV U75 PLUS",
        "VGV VX7",
        "VGV Bolden",
        "Victory Other",
        "Victory V2",
        "Victory V1",
        "Volkswagen Arteon",
        "Volkswagen Eos",
        "Volkswagen Atlas",
        "Volkswagen Sharan",
        "Volkswagen Eurovan",
        "Volkswagen Bora",
        "Volkswagen Polo",
        "Volkswagen Crafter",
        "Volkswagen T-Roc",
        "Volkswagen Touareg",
        "Volkswagen ID.6",
        "Volkswagen Teramont",
        "Volkswagen ID.7",
        "Volkswagen Amarok",
        "Volkswagen Vento",
        "Volkswagen ID.4",
        "Volkswagen Other",
        "Volkswagen Passat",
        "Volkswagen Transporter",
        "Volkswagen Viloran",
        "Volkswagen Beetle",
        "Volkswagen Multivan",
        "Volkswagen CC",
        "Volkswagen Phaeton",
        "Volkswagen TAYRON",
        "Volkswagen Taos",
        "Volkswagen E-Lavida",
        "Volkswagen Routan",
        "Volkswagen Golf",
        "Volkswagen Scirocco",
        "Volkswagen ID.3",
        "Volkswagen Jetta",
        "Volkswagen Tiguan",
        "Volkswagen Touran",
        "Volkswagen Caddy",
        "Volvo EX30",
        "Volvo XC40",
        "Volvo V-Class",
        "Volvo S80",
        "Volvo C-Class",
        "Volvo S40",
        "Volvo XC90",
        "Volvo XC60",
        "Volvo V90",
        "Volvo S70",
        "Volvo XC40 Recharge",
        "Volvo S90",
        "Volvo C40",
        "Volvo XC70",
        "Volvo Other",
        "Volvo S60",
        "Voyah Free",
        "Voyah Dreamer",
        "Westfield Sportscars Sport 250",
        "Westfield Sportscars Special Edition",
        "Westfield Sportscars Track",
        "Westfield Sportscars Classic",
        "Wiesmann Other",
        "Wiesmann MF5",
        "Wiesmann MF4",
        "Wiesmann MF3",
        "W Motors Fenyr Hypersport",
        "W Motors Lykan Hypersport",
        "Wuling Bingo",
        "Wuling Air EV",
        "Wuling Other",
        "XEV Other",
        "XEV Yoyo",
        "Xiaomi Other",
        "Xiaomi SU7",
        "XPeng Other",
        "XPeng G9",
        "XPeng P7",
        "YangWang Other",
        "YangWang U8",
        "Zeekr Other",
        "Zeekr X",
        "Zeekr 001 FR",
        "Zeekr 009",
        "Zeekr 007",
        "Zeekr 9",
        "Zeekr 001",
        "Zenvo Aurora",
        "Zenvo TSR-S",
        "Zhongxing Terralord",
        "ZNA Yumsun",
        "ZNA Rich",
        "ZNA Oting",
        "Zotye E200",
        "Zotye T600 Sport",
        "Zotye T300",
        "Zotye T600",
        "Zotye T700",
        "Zotye Z100",
        "ZXAUTO Other",
        "ZXAUTO Grandlion",
        "ZXAUTO Terralord"
    ];

  data.map(
    (obj) => {
        try {
          db.query('INSERT INTO models (make) VALUES (?)', obj, (err, result)=>{
              if (err) return res.status(500).json({ message: err });
          });
        } catch (err) {
          console.error('Error inserting into database:', err);
          res.status(500).json({ error: 'Database error.' });
        }
    }
  )
  res.json({ "message": "Added Successfully"});
});

router.get('/models', async (req, res) => {
  try {
    db.query('SELECT * FROM models', (err, results)=>{
        if (err) return res.status(500).json({ message: err });
        if(results.length == 0) return res.json([]);
        res.json(results);
    });
  } catch (err) {
    console.error('Error fetching from database:', err);
    res.status(500).json({ error: 'Database error.' });
  }
});

router.post('/trims', (req, res) => {
  const data = 
[
  {
    "id": 815,
    "model": "Kaiyi E5",
    "trims": ["Other"]
  },
  {
    "id": 816,
    "model": "Kaiyi X3",
    "trims": ["Flagship", "Luxury", "Other"]
  },
  {
    "id": 817,
    "model": "Kaiyi X7",
    "trims": ["Other"]
  },
  {
    "id": 818,
    "model": "Kia Cadenza",
    "trims": ["BAE", "Base", "DLX", "EX", "FOP", "GDi Mid", "GDi Top", "LX", "Mid", "MPI Base", "MPI Top", "STD", "Theta", "Top", "Other"]
  },
  {
    "id": 819,
    "model": "Kia Telluride",
    "trims": ["EX", "GT Line", "GX", "LX", "S", "SX", "Telluride", "Other"]
  },
  {
    "id": 820,
    "model": "Kia K3",
    "trims": ["Other"]
  },
  {
    "id": 821,
    "model": "Kia Spectra",
    "trims": ["EX", "LX", "Other"]
  },
  {
    "id": 822,
    "model": "Kia Cerato",
    "trims": ["Base", "EX", "GT-Line", "L", "LX", "LX Hatchback", "MPI Base", "MPI Top", "SX", "Other"]
  },
  {
    "id": 823,
    "model": "Kia Sonet",
    "trims": ["Base", "EX", "EX1", "EX2", "GDI", "LX", "Mid", "Other"]
  },
  {
    "id": 824,
    "model": "Kia Shuma",
    "trims": ["Other"]
  },
  {
    "id": 825,
    "model": "Kia K5",
    "trims": ["Base", "GDI", "GDI EX", "GDT STD", "GT-Line", "LX", "LXS", "STD", "Other"]
  },
  {
    "id": 826,
    "model": "Kia Soul",
    "trims": ["EX", "EX 2.0", "EX DLX", "EX FOP", "LX", "MPI", "S", "SX", "Other"]
  },
  {
    "id": 827,
    "model": "Kia Carnival",
    "trims": ["Base", "EX", "EX FOB", "GDI EX", "GDI L", "Grand Carnival", "LX", "Other"]
  },
  {
    "id": 828,
    "model": "Kia Other",
    "trims": ["Other"]
  },
  {
    "id": 829,
    "model": "Kia Sephia",
    "trims": ["Other"]
  },
  {
    "id": 830,
    "model": "Kia K900",
    "trims": ["GDI V6", "GDI V8", "Other"]
  },
  {
    "id": 831,
    "model": "Kia Seltos",
    "trims": ["1.4T", "Base", "EX", "GT Line", "LX", "S", "SX", "Other"]
  },
  {
    "id": 832,
    "model": "Kia Stinger",
    "trims": ["EX (2.0 L)", "GT (2.0 L)", "GT (3.3 L)", "GT-Line", "Other"]
  },
  {
    "id": 833,
    "model": "Kia EV6",
    "trims": ["GT Line", "Other"]
  },
  {
    "id": 834,
    "model": "Kia Picanto",
    "trims": ["Base", "EX", "EX FOP", "EX Plus", "GT", "LX", "Other"]
  },
  {
    "id": 835,
    "model": "Kia K5 HEV",
    "trims": ["Other"]
  },
  {
    "id": 836,
    "model": "Kia Bongo",
    "trims": ["2700", "4000", "Other"]
  },
  {
    "id": 837,
    "model": "Kia K9",
    "trims": ["Other"]
  },
  {
    "id": 838,
    "model": "Kia EV9",
    "trims": ["Air", "Earth", "GT-Line", "Land", "Light", "Light Long Range", "Wind"]
  },
  {
    "id": 839,
    "model": "Kia Koup",
    "trims": ["SX", "SX FOP", "SX SO", "Other"]
  },
  {
    "id": 840,
    "model": "Kia Optima",
    "trims": ["GTL", "Turbo", "T-GDI", "SX", "Sport", "Special Edition", "S", "LX DLX", "LX", "Base", "GDI Si", "GDI", "EX Top", "EX Premium", "EX Mid", "EX FOP", "EX DLX", "EX", "Other"]
  },
  {
    "id": 841,
    "model": "Kia EV5",
    "trims": ["Air", "Earth", "GT-Line", "Land", "Light", "Wind", "Other"]
  },
  {
    "id": 842,
    "model": "Kia Niro",
    "trims": ["EX", "HEV", "LX", "Other"]
  },
  {
    "id": 843,
    "model": "Kia Forte",
    "trims": ["GT", "Other"]
  },
  {
    "id": 844,
    "model": "Kia Sportage",
    "trims": ["Other"]
  },
  {
    "id": 845,
    "model": "Kia Mohave",
    "trims": ["4.6L", "Base", "EX", "EX MID", "EX TOP", "LX", "Other"]
  },
  {
    "id": 846,
    "model": "Kia Carens",
    "trims": ["1.4T", "Base", "EX", "EX DLX", "LX", "LX M", "SX", "Other"]
  },
  {
    "id": 847,
    "model": "Kia Pegas",
    "trims": ["EX", "LX", "MPI", "MPI Top", "STD", "Other"]
  },
  {
    "id": 848,
    "model": "Kia KX1",
    "trims": ["Other"]
  },
  {
    "id": 849,
    "model": "Kia Rio",
    "trims": ["Base", "EX", "EX FOP", "EX MID", "EX TOP", "LX", "MPI", "MPI EX", "Sport", "Other"]
  },
  {
    "id": 850,
    "model": "Kia Sorento",
    "trims": ["Base", "DLX", "DLX AWD", "EX", "EX DLX", "EX FOP", "EX STD", "EX STD AWD", "EX TOP", "LX", "SX", "Other"]
  },
  {
    "id": 851,
    "model": "Kia Oprius",
    "trims": ["GL", "Other"]
  },
  {
    "id": 852,
    "model": "Kia Quoris",
    "trims": ["GLS", "GLS Plus", "TOP", "Other"]
  },
  {
    "id": 853,
    "model": "Kia Ray",
    "trims": ["1.0 gasoline", "EV", "EV Van"]
  },
  {
    "id": 854,
    "model": "Kia Morning",
    "trims": ["Other"]
  },
  {
    "id": 855,
    "model": "Kia K8",
    "trims": ["GDI", "GDI LX", "LX", "Other"]
  },
  {
    "id": 856,
    "model": "Kia Sedona",
    "trims": ["EX", "EX FOB", "Grand Carnival", "LX", "Other"]
  },
  {
    "id": 857,
    "model": "King Long Other",
    "trims": ["Other"]
  },
  {
    "id": 858,
    "model": "King Long Medium Luxury Coach",
    "trims": ["Other"]
  },
  {
    "id": 859,
    "model": "King Long Large Luxury Coach",
    "trims": ["Other"]
  },
  {
    "id": 860,
    "model": "King Long Coach",
    "trims": ["Other"]
  },
  {
    "id": 861,
    "model": "King Long China Mini Van",
    "trims": ["China Mini Van", "Other"]
  },
  {
    "id": 862,
    "model": "King Long Luxury Coach",
    "trims": ["53 Seater", "Other"]
  },
  {
    "id": 863,
    "model": "King Long Small Luxury Coach",
    "trims": ["33 Seater", "Other"]
  },
  {
    "id": 864,
    "model": "Koenigsegg Agera",
    "trims": ["R", "RS", "S", "Standard", "Other"]
  },
  {
    "id": 865,
    "model": "Koenigsegg Jesko",
    "trims": ["Other"]
  },
  {
    "id": 866,
    "model": "Koenigsegg CC8S",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 867,
    "model": "Koenigsegg CCR",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 868,
    "model": "Koenigsegg CCGT",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 869,
    "model": "Koenigsegg CCXR",
    "trims": ["Edition", "Special Edition", "Standard", "Trevita", "Other"]
  },
  {
    "id": 870,
    "model": "Koenigsegg CCX",
    "trims": ["Edition", "Standard", "Other"]
  },
  {
    "id": 871,
    "model": "Koenigsegg Regera",
    "trims": ["Other"]
  },
  {
    "id": 872,
    "model": "Koenigsegg CC Prototype",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 873,
    "model": "Koenigsegg ONE:1",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 874,
    "model": "KTM X-Bow",
    "trims": ["Other"]
  },
  {
    "id": 875,
    "model": "Lada Other",
    "trims": ["Other"]
  },
  {
    "id": 876,
    "model": "Lamborghini Sián",
    "trims": ["FKP 37", "Roadster"]
  },
  {
    "id": 877,
    "model": "Lamborghini Revuelto",
    "trims": ["Other"]
  },
  {
    "id": 878,
    "model": "Lamborghini Gallardo",
    "trims": ["LP 570-4 Squadra Corse", "Lp550-2", "Lp550-2 Bicolore", "Lp550-2 Spyder", "Lp550-2 Valentino Balboni", "Lp560-4", "Lp560-4 Spyder", "Lp570-4 Spyder Performante", "Lp570-4 Super Trofeo Stradale", "Lp570-4 Superleggera", "Spyder", "Standard", "Other"]
  },
  {
    "id": 879,
    "model": "Lamborghini Murcielago",
    "trims": ["Lp640", "Lp640 Roadster", "Lp650-4 Roadster", "Lp670-4 Superveloce", "Other"]
  },
  {
    "id": 880,
    "model": "Lamborghini Urus",
    "trims": ["Performante", "Standard", "Other"]
  },
  {
    "id": 881,
    "model": "Lamborghini Aventador S",
    "trims": ["Coupe", "Roadster"]
  },
  {
    "id": 882,
    "model": "Lamborghini Diablo",
    "trims": ["Other"]
  },
  {
    "id": 883,
    "model": "Lamborghini Centenario",
    "trims": ["Roadster"]
  },
  {
    "id": 884,
    "model": "Lamborghini Aventador",
    "trims": ["Dreamliner Edition", "J", "LP 700-4", "LP 700-4 Pirelli Edition", "LP 700-4 Roadster", "LP 720-4 50 Anniversario", "LP 750-4 Superveloce", "LP 750-4 Superveloce Roadster", "LP 770-4 Superveloce Jota", "LP 770-4 Superveloce Jota Roadster", "LP 780-4 Roadster", "LP 780-4 Ultimae", "Standard", "Other"]
  },
  {
    "id": 885,
    "model": "Lamborghini Other",
    "trims": ["Other"]
  },
  {
    "id": 886,
    "model": "Lamborghini Countach",
    "trims": ["Other"]
  },
  {
    "id": 887,
    "model": "Lamborghini 350 GT",
    "trims": ["Other"]
  },
  {
    "id": 888,
    "model": "Lamborghini Huracan",
    "trims": ["Avio", "Coupe", "EVO Coupe", "EVO Spyder", "LP 580-2", "LP 580-2 Spyder", "LP 610-4", "LP 610-4 Spyder", "LP 620-2 Super Trofeo", "LP 680-4 Oakley Design", "Sterrato", "Tecnica", "Other"]
  },
  {
    "id": 889,
    "model": "Lamborghini Onyx Other",
    "trims": ["Other"]
  },
  {
    "id": 890,
    "model": "Lamborghini Onyx SX",
    "trims": ["Other"]
  },
  {
    "id": 891,
    "model": "Lancia Thesis",
    "trims": ["Other"]
  },
  {
    "id": 892,
    "model": "Lancia FX-Series",
    "trims": ["Other"]
  },
  {
    "id": 893,
    "model": "Lancia Phedra",
    "trims": ["Other"]
  },
  {
    "id": 894,
    "model": "Lancia Other",
    "trims": ["Other"]
  },
  {
    "id": 895,
    "model": "Lancia Stratos",
    "trims": ["Other"]
  },
  {
    "id": 896,
    "model": "Lancia Musa",
    "trims": ["Other"]
  },
  {
    "id": 897,
    "model": "Lancia Delta",
    "trims": ["Other"]
  },
  {
    "id": 898,
    "model": "Lancia Ypsilon",
    "trims": ["Other"]
  },
  {
    "id": 899,
    "model": "Land Rover Other",
    "trims": ["Other"]
  },
  {
    "id": 900,
    "model": "Land Rover LR3",
    "trims": ["Base", "HSE", "SE", "Other"]
  },
  {
    "id": 901,
    "model": "Land Rover Range Rover",
    "trims": ["SE Dynamic", "Vogue Supercharged", "Vogue SE Supercharged", "Vogue SE", "Vogue LE Supercharged", "Vogue LE", "Vogue HSE", "Vogue First Edition", "Vogue", "UAE Edition", "SV Autobiography", "SV", "Supercharged", "Autobiography", "SE", "HSE V8", "HSE TOP", "HSE Royal", "HSE MID", "HSE LE", "HSE", "First Edition", "Fifty", "Autobiography Ultimate Edition", "Other"]
  },
  {
    "id": 902,
    "model": "Land Rover Range Rover Evoque",
    "trims": ["Autobiography", "Dynamic", "Dynamic HSE", "Dynamic Plus", "Dynamic SE", "HSE", "Landmark Edition", "Prestige", "PURE", "R-Dynamic", "R-Dynamic HSE", "R-Dynamic SE", "S", "SE", "SE Plus", "Other"]
  },
  {
    "id": 903,
    "model": "Land Rover LR2",
    "trims": ["HSE", "SE", "Other"]
  },
  {
    "id": 904,
    "model": "Land Rover Discovery",
    "trims": ["First Edition", "HSE", "HSE Luxury", "R-Dynamic HSE", "S", "SC HSE Luxury", "SE", "Other"]
  },
  {
    "id": 905,
    "model": "Land Rover LR4",
    "trims": ["HSE", "Landmark", "LE", "Limited Edition LR4 Pursuit", "SE", "Other"]
  },
  {
    "id": 906,
    "model": "Land Rover Freelander",
    "trims": ["HSE", "SE", "Other"]
  },
  {
    "id": 907,
    "model": "Land Rover Defender",
    "trims": ["Other"]
  },
  {
    "id": 908,
    "model": "Land Rover Discovery Sport",
    "trims": ["HSE", "HSE Luxury", "Pure", "R-Dynamic SE", "S", "SE", "Other"]
  },
  {
    "id": 909,
    "model": "Land Rover Range Rover Velar",
    "trims": ["Base", "Dynamic SE", "First Edition", "HSE", "P250 S", "P380 S", "R-Dynamic", "R-Dynamic HSE", "R-Dynamic S", "R-Dynamic SE", "S", "SE", "Other"]
  },
  {
    "id": 910,
    "model": "Land Rover Range Rover Sport",
    "trims": ["Other"]
  },
  {
    "id": 911,
    "model": "Leapmotor C01",
    "trims": ["EREV", "EV", "Pro+ Performance", "Other"]
  },
  {
    "id": 912,
    "model": "Leapmotor S01",
    "trims": ["Other"]
  },
  {
    "id": 913,
    "model": "Leapmotor C16",
    "trims": ["EREV", "EV", "Other"]
  },
  {
    "id": 914,
    "model": "Leapmotor C10",
    "trims": ["EREV", "EV", "Other"]
  },
  {
    "id": 915,
    "model": "Leapmotor T03",
    "trims": ["Other"]
  },
  {
    "id": 916,
    "model": "Leapmotor Other",
    "trims": ["Other"]
  },
  {
    "id": 917,
    "model": "Leapmotor C11",
    "trims": ["EREV", "EV", "EV 4WD", "Other"]
  },
  {
    "id": 918,
    "model": "LEVC TX5",
    "trims": ["Vista", "Vista Comfort", "Vista Plus", "Other"]
  },
  {
    "id": 919,
    "model": "Lexus LM 300",
    "trims": ["Other"]
  },
  {
    "id": 920,
    "model": "Lexus GS-Series",
    "trims": ["Base", "Classic", "Exclusive", "F-sport", "Full Option", "GS F", "Navigation TOP", "Platinum", "Premier", "Prestige", "Titanium", "TOP", "Other"]
  },
  {
    "id": 921,
    "model": "Lexus LFA",
    "trims": ["F-sport", "Other"]
  },
  {
    "id": 922,
    "model": "Lexus NX-Series",
    "trims": ["NX 200", "NX 450H", "NX 350H", "NX 350 Premier", "NX 350", "NX 300 Premier", "NX 300 Platinum", "NX 300 F Sport", "NX 300", "NX 250", "NX 200t Premier", "NX 200t Platinum", "NX 200t F Sport Prestige", "NX 200t F Sport Platinum", "NX 200t", "350H Platinum", "Other"]
  },
  {
    "id": 923,
    "model": "Lexus RC",
    "trims": ["200t", "200t F Sport Prestige", "300", "350 F Sport", "350 F Sport Platinum", "350 F Sport Prestige", "350 Platinum", "350 Premier", "Other"]
  },
  {
    "id": 924,
    "model": "Lexus UX 200",
    "trims": ["F Sport Platinum", "F Sport Prestige", "Premier", "Other"]
  },
  {
    "id": 925,
    "model": "Lexus LX600",
    "trims": ["F Sport"]
  },
  {
    "id": 926,
    "model": "Lexus TX",
    "trims": ["350", "Other"]
  },
  {
    "id": 927,
    "model": "Lexus LM 350h",
    "trims": ["Sports Luxury", "Takumi", "Other"]
  },
  {
    "id": 928,
    "model": "Lexus IS-Series",
    "trims": ["F Sport", "Standard", "Sport", "Prestige", "Premier", "Platinum", "ISF KIT", "F Sport Prestige", "F Sport Platinum", "200t", "Exclusive", "Classic", "350 F Sport Platinum", "350", "300 Prestige", "300 Platinum", "300 F Sport", "300", "Other"]
  },
  {
    "id": 929,
    "model": "Lexus GX 460",
    "trims": ["Luxury", "Off Road Edition", "Platinum", "Premier", "Premium", "Premium Plus", "Prestige", "Standard", "Other"]
  },
  {
    "id": 930,
    "model": "Lexus RC F",
    "trims": ["Carbon", "F", "Platinum", "Sport", "Other"]
  },
  {
    "id": 931,
    "model": "Lexus LX-Series",
    "trims": ["Platinum", "TOP", "Titanium", "Sport Titanium", "Sport Platinum", "Prestige-interpid", "Prestige", "Premier-interpid", "Premier", "Platinum-interpid", "570 Navigation Sport", "Navigation", "Full Option", "700h Signature", "700h Others", "700h F-Sport", "600 Ash Wood Edition", "570 Platinum Signature", "Other"]
  },
  {
    "id": 932,
    "model": "Lexus UX-Series",
    "trims": ["UX 250", "UX 250 F Sport", "Other"]
  },
  {
    "id": 933,
    "model": "Lexus CT-Series",
    "trims": ["Base", "F Sport", "Platinum", "Premier", "Prestige", "Other"]
  },
  {
    "id": 934,
    "model": "Lexus LX570",
    "trims": ["Platinum", "Premier", "Premier Plus", "Prestige", "Signature", "Signature Black Edition", "Other"]
  },
  {
    "id": 935,
    "model": "Lexus ES-Series",
    "trims": ["250", "250 Classic", "250 Platinum", "250 Premier", "300 h", "350 F SPORT", "Exclusive", "Full Option", "Platinum", "Premier", "Premier Plus", "Prestige", "Sport", "Standard", "Titanium", "Other"]
  },
  {
    "id": 936,
    "model": "Lexus GX 550",
    "trims": ["Luxury", "Luxury Plus", "Other", "Overtrail", "Overtrail Plus", "Premium", "Premium Plus"]
  },
  {
    "id": 937,
    "model": "Lexus LC 500",
    "trims": ["Carbon", "Hybrid", "Other", "Platinum", "Titanium"]
  },
  {
    "id": 938,
    "model": "Lexus Other",
    "trims": ["Other"]
  },
  {
    "id": 939,
    "model": "Lexus RX-Series",
    "trims": ["Limited", "TOP", "Titanium", "Prestige Limited", "Prestige", "Premier Plus", "Premier", "Platinum", "450 h", "Full Option", "F Sport", "Black Edition", "Base", "450H Prestige", "450H Platinum", "450H F Sport", "Other"]
  },
  {
    "id": 940,
    "model": "Lexus SC-Series",
    "trims": ["SC 430", "Standard", "Other"]
  },
  {
    "id": 941,
    "model": "Lexus LS-Series",
    "trims": ["Other"]
  },
  {
    "id": 942,
    "model": "Lexus GX 470",
    "trims": ["Other"]
  },
  {
    "id": 943,
    "model": "Lexus RZ",
    "trims": ["300e", "300e Luxury", "300e Premium", "450e", "450e Luxury", "450e Premium"]
  },
  {
    "id": 944,
    "model": "Li Auto L6",
    "trims": ["Other"]
  },
  {
    "id": 945,
    "model": "Li Auto Other",
    "trims": ["Other"]
  },
  {
    "id": 946,
    "model": "Li Auto Mega",
    "trims": ["Other"]
  },
  {
    "id": 947,
    "model": "Li Auto L8",
    "trims": ["Other"]
  },
  {
    "id": 948,
    "model": "Li Auto L7",
    "trims": ["Other"]
  },
  {
    "id": 949,
    "model": "Li Auto L9",
    "trims": ["Max", "Other"]
  },
  {
    "id": 950,
    "model": "Lincoln MKT",
    "trims": ["Ecoboost", "Standard", "Other"]
  },
  {
    "id": 951,
    "model": "Lincoln MKX",
    "trims": ["Luxury", "Premiere", "Reserve", "Select", "Standard", "Other"]
  },
  {
    "id": 952,
    "model": "Lincoln MKS",
    "trims": ["AWD Ecoboost", "Ecoboost", "FWD V6", "Standard", "Other"]
  },
  {
    "id": 953,
    "model": "Lincoln MKZ",
    "trims": ["Premiere", "Reserve", "Select", "Standard", "Other"]
  },
  {
    "id": 954,
    "model": "Lincoln MKC",
    "trims": ["Premiere", "Reserve", "Select", "Other"]
  },
  {
    "id": 955,
    "model": "Lincoln Continental",
    "trims": ["Premiere", "Presidential", "Reserve", "Select", "Other"]
  },
  {
    "id": 956,
    "model": "Lincoln Town Car",
    "trims": ["Cartier", "Cartier L", "Designer", "Executive", "Signature", "Signature L", "Signature Limited", "Ultimate", "Ultimate L", "Other"]
  },
  {
    "id": 957,
    "model": "Lincoln Navigator",
    "trims": ["Black Label", "EL", "L", "L AWD", "Presidential", "Reserve", "Reserve AWD", "Select", "Select AWD", "Standard", "Standard AWD", "Other"]
  },
  {
    "id": 958,
    "model": "Lincoln Aviator",
    "trims": ["Base", "Luxury", "Premium", "Presidential", "Reserve", "Reserve II", "Standard", "Other"]
  },
  {
    "id": 959,
    "model": "Lincoln Corsair",
    "trims": ["Base", "Premier", "Reserve", "Other"]
  },
  {
    "id": 960,
    "model": "Lincoln Nautilus",
    "trims": ["Premier", "Presidential", "Reserve", "Reserve I", "Reserve II", "Reserve III", "Select", "Standard", "Other"]
  },
  {
    "id": 961,
    "model": "Lincoln LS",
    "trims": ["Other"]
  },
  {
    "id": 962,
    "model": "Lincoln Other",
    "trims": ["Other"]
  },
  {
    "id": 963,
    "model": "Livan X3 Pro",
    "trims": ["Other"]
  },
  {
    "id": 964,
    "model": "Lixiang L8",
    "trims": ["Other", "Ultra"]
  },
  {
    "id": 965,
    "model": "Lotus Eletre",
    "trims": ["R", "S", "Standard", "Other"]
  },
  {
    "id": 966,
    "model": "Lotus Evora",
    "trims": ["400", "Base", "GT", "GT410", "GT430", "S", "S Sport", "Sport", "Other"]
  },
  {
    "id": 967,
    "model": "Lotus Other",
    "trims": ["Other"]
  },
  {
    "id": 968,
    "model": "Lotus Emeya",
    "trims": ["Other"]
  },
  {
    "id": 969,
    "model": "Lotus Exige",
    "trims": ["Base", "Cup 430", "Roadster", "S", "S Roadster", "Sport", "Sport 350", "Sport 410", "Standard", "Other"]
  },
  {
    "id": 970,
    "model": "Lotus Emira",
    "trims": ["Base Edition", "First Edition", "Launch Edition", "Other"]
  },
  {
    "id": 971,
    "model": "Lotus Esprit",
    "trims": ["Base", "Other"]
  },
  {
    "id": 972,
    "model": "Lotus Elan",
    "trims": ["Other"]
  },
  {
    "id": 973,
    "model": "Lotus Elise",
    "trims": ["Base", "R", "S", "SC", "Sport", "Other"]
  },
  {
    "id": 974,
    "model": "Lucid Air",
    "trims": ["Dream Edition", "Grand Touring", "Pure", "Sapphire", "Touring", "Other"]
  },
  {
    "id": 975,
    "model": "Luxgen S5",
    "trims": ["Standard", "Top", "Other"]
  },
  {
    "id": 976,
    "model": "Luxgen U7 Turbo",
    "trims": ["Other"]
  },
  {
    "id": 977,
    "model": "Luxgen U6",
    "trims": ["Standard", "Top", "Other"]
  },
  {
    "id": 978,
    "model": "Luxgen 7 MPV",
    "trims": ["M/L", "P/L", "Other"]
  },
  {
    "id": 979,
    "model": "Luxgen Other",
    "trims": ["Other"]
  },
  {
    "id": 980,
    "model": "Luxgen 7 SUV",
    "trims": ["M/L", "P/L", "Other"]
  },
  {
    "id": 981,
    "model": "Lynk & Co 05",
    "trims": ["Other"]
  },
  {
    "id": 982,
    "model": "Lynk & Co 01",
    "trims": ["Other"]
  },
  {
    "id": 983,
    "model": "Lynk & Co Others",
    "trims": ["Other"]
  },
  {
    "id": 984,
    "model": "Lynk & Co 09",
    "trims": ["Other"]
  },
  {
    "id": 985,
    "model": "Lynk & Co Z10",
    "trims": ["EV", "Other", "PHEV"]
  },
  {
    "id": 986,
    "model": "Lynk & Co Z20",
    "trims": ["Other", "Standard"]
  },
  {
    "id": 987,
    "model": "Neta Other",
    "trims": ["Other"]
  },
  {
    "id": 988,
    "model": "Neta Aya",
    "trims": ["401 Lite", "Other"]
  },
  {
    "id": 989,
    "model": "Nio ES7",
    "trims": ["Other"]
  },
  {
    "id": 990,
    "model": "Nio ES6",
    "trims": ["Other"]
  },
  {
    "id": 991,
    "model": "Nio ES8",
    "trims": ["Other"]
  },
  {
    "id": 992,
    "model": "Nissan Murano",
    "trims": ["Base", "LE", "S", "SE", "SL", "Standard", "SV", "Other"]
  },
  {
    "id": 993,
    "model": "Nissan Patrol Pickup",
    "trims": ["SGL AT", "SGL MT", "Other"]
  },
  {
    "id": 994,
    "model": "Nissan Gloria",
    "trims": ["Other"]
  },
  {
    "id": 995,
    "model": "Nissan Ariya",
    "trims": ["Empower+", "Engage", "Engage e-4orce", "Evolve+ e-4orce", "Long-Range", "Platinum+", "Platinum+ e-4orce", "Short-Range", "Other"]
  },
  {
    "id": 996,
    "model": "Nissan Pathfinder",
    "trims": ["SE MID", "XE", "SV", "Standard", "SL", "Silver Edition", "SE TOP", "SE T2", "SE T1", "SE Offroad", "Base", "SE Base", "SE", "S 4WD", "S", "Platinum", "Midnight Edition", "LE", "Other"]
  },
  {
    "id": 997,
    "model": "Nissan Terrano",
    "trims": ["Other"]
  },
  {
    "id": 998,
    "model": "Nissan 300ZX",
    "trims": ["Other"]
  },
  {
    "id": 999,
    "model": "Nissan Skyline",
    "trims": ["Other"]
  },
  {
    "id": 1000,
    "model": "Nissan Kicks",
    "trims": ["S", "SL", "SR", "SR Plus", "SV", "SV Plus", "Other"]
  },
  {
    "id": 1001,
    "model": "Nissan Xterra",
    "trims": ["Platinum", "S", "S Off-road", "S Off Road Pack", "SE", "SE Offroad", "Titanium", "X", "Other"]
  },
  {
    "id": 1002,
    "model": "Nissan Micra",
    "trims": ["S", "SL", "SL Plus", "SL Premium", "SV", "Other"]
  },
  {
    "id": 1003,
    "model": "Nissan Frontier",
    "trims": ["PRO", "PRO-4X", "S", "SL", "SV"]
  },
  {
    "id": 1004,
    "model": "Nissan 370z",
    "trims": ["Coupe", "GT", "Nismo", "Nismo Tech", "Roadster", "Sport", "Sport Tech", "Standard", "TOP", "Touring", "Touring Sport", "Other"]
  },
  {
    "id": 1005,
    "model": "Nissan Tiida",
    "trims": ["LE", "S", "S Plus", "SE", "SL", "SL Plus", "SV", "Other"]
  },
  {
    "id": 1006,
    "model": "Nissan Z",
    "trims": ["Nismo", "Performance", "Sport", "Standard", "Other"]
  },
  {
    "id": 1007,
    "model": "Nissan Primera",
    "trims": ["Other"]
  },
  {
    "id": 1008,
    "model": "Nissan 280ZX",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 1009,
    "model": "Nissan Patrol Safari",
    "trims": ["GL", "Safari Falcon AT", "Safari Falcon MT", "Safari Gazelle AT", "Safari Gazelle MT", "Safari Gazelle X AT", "Safari Gazelle X MT"]
  },
  {
    "id": 1010,
    "model": "Nissan Patrol",
    "trims": ["Other"]
  },
  {
    "id": 1011,
    "model": "Nissan Sunny",
    "trims": ["Base", "EX", "EX Saloon", "EX Super Saloon", "PE", "S", "SE", "SG", "SL", "SV", "SV Comfort", "Other"]
  },
  {
    "id": 1012,
    "model": "Nissan Teana",
    "trims": ["Other"]
  },
  {
    "id": 1013,
    "model": "Nissan Van",
    "trims": ["Standard", "VX", "Other"]
  },
  {
    "id": 1014,
    "model": "Nissan Versa",
    "trims": ["S", "SR", "SV", "Other"]
  },
  {
    "id": 1015,
    "model": "Nissan S130",
    "trims": ["Other"]
  },
  {
    "id": 1016,
    "model": "Nissan Maxima",
    "trims": ["Platinum", "S", "SE", "SL", "SR", "SR 1", "SR 2", "SV", "Other"]
  },
  {
    "id": 1017,
    "model": "Nissan Pickup",
    "trims": ["Double Cab", "Single Cab", "Other"]
  },
  {
    "id": 1018,
    "model": "Nissan Silvia",
    "trims": ["180SX", "200SX", "240SX", "Other"]
  },
  {
    "id": 1019,
    "model": "Nissan Sylphy",
    "trims": ["Other"]
  },
  {
    "id": 1020,
    "model": "Nissan Sentra",
    "trims": ["SL Premium", "XE", "SV Sport T2", "SV Sport T1", "SV Sport", "SV FE Plus", "SV", "Standard", "SR", "GXE", "SL", "SE-R V", "SE-R", "S FE Plus", "S", "LE", "Other"]
  },
  {
    "id": 1021,
    "model": "Nissan Qashqai",
    "trims": ["LE", "S", "SE", "Other"]
  },
  {
    "id": 1022,
    "model": "Nissan 350Z",
    "trims": ["Base", "Enthusiast", "Nismo", "Performance", "Other"]
  },
  {
    "id": 1023,
    "model": "Nissan Leaf",
    "trims": ["Other"]
  },
  {
    "id": 1024,
    "model": "Nissan Other",
    "trims": ["Other"]
  },
  {
    "id": 1025,
    "model": "Nissan Navara",
    "trims": ["AF", "ASF", "CPF", "CSD", "CSF", "CSF 4WD", "CSF AT", "CSPF", "CSPF AR", "LE", "SE", "SR", "XE", "Other"]
  },
  {
    "id": 1026,
    "model": "Nissan Altima",
    "trims": ["S", "SE", "Se-r", "SL", "Sport", "SR", "SV", "Other"]
  },
  {
    "id": 1027,
    "model": "Nissan Rogue",
    "trims": ["Midnight", "Platinum", "S", "SL", "Sport", "Standard", "SV", "Other"]
  },
  {
    "id": 1028,
    "model": "Nissan Juke",
    "trims": ["Nismo", "Nismo RS", "S", "SL", "SL T2", "SL Turbo", "SL Turbo Plus", "Standard", "SV", "Other"]
  },
  {
    "id": 1029,
    "model": "Nissan X-Trail",
    "trims": ["4WD", "S", "S 4WD", "SE", "SL", "SL Plus", "Standard", "SV", "SV X-Treamer", "SV1", "SV4", "XE", "Other"]
  },
  {
    "id": 1030,
    "model": "Nissan Titan",
    "trims": ["Base", "LE", "Pro-4x", "S", "SE", "SL", "SV", "XE", "Other"]
  },
  {
    "id": 1031,
    "model": "Nissan GT-R",
    "trims": ["50th Anniversary", "Base", "Black Edition", "Nismo", "Premium", "SpecV", "Track Edition", "VVIP", "Other"]
  },
  {
    "id": 1032,
    "model": "Nissan Quest",
    "trims": ["Platinum", "S", "SL", "SV", "Other"]
  },
  {
    "id": 1033,
    "model": "Nissan Urvan",
    "trims": ["Standard", "Other"]
  },
  {
    "id": 1034,
    "model": "Nissan Magnite",
    "trims": ["S", "SL", "SV"]
  },
  {
    "id": 1035,
    "model": "Nissan Armada",
    "trims": ["LE", "Platinum", "SE", "SE Offroad", "SL", "SV", "Titanium", "Other"]
  },
  {
    "id": 1036,
    "model": "Nissan 400Z",
    "trims": ["Other"]
  },
  {
    "id": 1037,
    "model": "Noble M600",
    "trims": ["Other"]
  },
  {
    "id": 1038,
    "model": "Oldsmobile Delta 88",
    "trims": ["Royale", "Other"]
  },
  {
    "id": 1039,
    "model": "OMODA OMODA C5",
    "trims": ["Comfort", "Luxury", "Sport"]
  },
  {
    "id": 1040,
    "model": "Opel Astra",
    "trims": ["Other"]
  },
  {
    "id": 1041,
    "model": "Opel Grandland X",
    "trims": ["Enjoy", "Innovation", "Innovation Plus", "Other"]
  },
  {
    "id": 1042,
    "model": "Opel Zafira Life",
    "trims": ["Business Innovation"]
  },
  {
    "id": 1043,
    "model": "Opel Vita",
    "trims": ["Other"]
  },
  {
    "id": 1044,
    "model": "Opel Other",
    "trims": ["Other"]
  }
];

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Expected an array of objects' });
  }

  let insertCount = 0;
  let toInsert = 0;

  data.forEach(item => {
    if (!item.model || !Array.isArray(item.trims)) return;

    db.query('SELECT id FROM models WHERE make = ?', [item.model], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });

      if (results.length === 0) {
        console.warn(`Model not found: ${item.model}`);
        return;
      }

      const modelId = results[0].id;
      toInsert += item.trims.length;

      item.trims.forEach(trim => {
        db.query('INSERT INTO trims (model_id, trim) VALUES (?, ?)', [modelId, trim], (err) => {
          if (err) console.error(`Failed to insert trim "${trim}" for model "${item.model}": ${err.message}`);
          insertCount++;

          if (insertCount === toInsert) {
            res.status(200).json({ message: 'All trims processed.' });
          }
        });
      });
    });
  });

  if (data.length === 0) {
    return res.status(200).json({ message: 'No data received.' });
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


module.exports = router;
