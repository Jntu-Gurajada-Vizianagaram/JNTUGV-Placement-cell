const studentsPlacedData = [
    {
      sno: 1,
      name: "KANKATALA NAGA SOWMYA",
      rollnumber: "14VV1A0501",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Bosch",
    },
    {
      sno: 2,
      name: "GORUGANTHU SAI NAGA HARIKA",
      rollnumber: "14VV1A0504",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Amazon"
    },
    {
      sno: 3,
      name: "DHAWAL SIRIKONDA",
      rollnumber: "14VV1A0505",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Zebi"
    },
    {
      sno: 4,
      name: "PEDIREDLA JNANA GAYATRI",
      rollnumber: "14VV1A0506",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 5,
      name: "MATHE DIVYA RUPA MARIA",
      rollnumber: "14VV1A0507",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 6,
      name: "KALAPALA SAROJA",
      rollnumber: "14VV1A0512",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "State Bank of India"
    },
    {
      sno: 7,
      name: "VALLURU SRESHTA",
      rollnumber: "14VV1A0514",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 8,
      name: "PATNALA VARA LAKSHMI",
      rollnumber: "14VV1A0515",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "GreyCampus"
    },
    {
      sno: 9,
      name: "INDUKURI MANI VARMA",
      rollnumber: "14VV1A0516",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "TeamF1 networks"
    },
    {
      sno: 10,
      name: "VELLA SRIDEVI",
      rollnumber: "14VV1A0517",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 11,
      name: "P. SAI PRASANNA LAKSHMI",
      rollnumber: "14VV1A0518",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "OTSi"
    },
    {
      sno: 12,
      name: "MEGAVATH BHEEM SEN NAYAK",
      rollnumber: "14VV1A0521",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 13,
      name: "MEDICHARLA CHIRANJEEVI",
      rollnumber: "14VV1A0523",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "GreyCampus"
    },
    {
      sno: 14,
      name: "KOTHAPALLI SAI SUMANTH",
      rollnumber: "14VV1A0525",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 15,
      name: "KRAPA SIRISHA",
      rollnumber: "14VV1A0529",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "PSB's Bank"
    },
    {
      sno: 16,
      name: "G. VENKATA BHAVYA SRI HARIKA",
      rollnumber: "14VV1A0531",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 17,
      name: "IPPAGUNTA RAMANI",
      rollnumber: "14VV1A0536",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 18,
      name: "IPPAGUNTA SRI RAMANI",
      rollnumber: "14VV1A0536",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 19,
      name: "SOMISETTY AVINASH",
      rollnumber: "14VV1A0538",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Apps Associates Pvt.Ltd"
    },
    {
      sno: 20,
      name: "MUMMANENI RAJESH",
      rollnumber: "14VV1A0539",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Collegedunia"
    },
    {
      sno: 21,
      name: "JAGGAVARAPU SONIA",
      rollnumber: "14VV1A0542",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 22,
      name: "MATTA PRAVALLIKA",
      rollnumber: "14VV1A0543",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 23,
      name: "SHAIK SHAHINA",
      rollnumber: "14VV1A0550",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "IBM India Pvt.Ltd"
    },
    {
      sno: 24,
      name: "VAPPADA SAIRAMYA SREE",
      rollnumber: "14VV1A0555",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 25,
      name: "NELATURI LAVANYA RANI",
      rollnumber: "15VV1A0562",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Cognizant Technology Solutions"
    },
    {
      sno: 26,
      name: "RAGURI PREMA JYOTHI",
      rollnumber: "15VV5A0563",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Schoolezy"
    },
    {
      sno: 27,
      name: "EEDUPUGANTI RAVINDRA",
      rollnumber: "15VV5A0564",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Virtusa"
    },
    {
      sno: 28,
      name: "NETTIMI NUTHANA",
      rollnumber: "15VV5A0567",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 29,
      name: "BOMMANA NEEHARIKA",
      rollnumber: "15VV5A0570",
      branch: "CSE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Easy Design Systems"
    },
    {
      sno: 30,
      name: "KARUMURI PURNA CHANDRIKA",
      rollnumber: "14VV1A1217",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 31,
      name: "KOKERLA TULASI",
      rollnumber: "14VV1A1224",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Wipro"
    },
    {
      sno: 32,
      name: "BALANTRAPU NAGA RAJA PHANI SAI",
      rollnumber: "14VV1A1227",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Efftronics"
    },
    {
      sno: 33,
      name: "KONDAVEETI KRISHNA HARSHA",
      rollnumber: "14VV1A1209",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 34,
      name: "GUNDAPANEEDI KASI VISWANATH",
      rollnumber: "14VV1A1256",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 35,
      name: "GANDI YAMINI",
      rollnumber: "14VV1A1234",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 36,
      name: "SAMBANGI SUPRIYA",
      rollnumber: "14VV1A1202",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 37,
      name: "CHEKURI HARSHINI",
      rollnumber: "14VV1A1223",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 38,
      name: "AMBATI SAI SANTOSH",
      rollnumber: "14VV1A1241",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 39,
      name: "SHAIK SAI HARSHAD",
      rollnumber: "14VV1A1247",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Miracle Software Systems"
    },
    {
      sno: 40,
      name: "BALANTRAPU NAGA RAJA PHANI SAI",
      rollnumber: "14VV1A1227",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 41,
      name: "ADDEPALLI S.S.VASAVI",
      rollnumber: "14VV1A1219",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Capgemini"
    },
    {
      sno: 42,
      name: "KESANAKURTHI Y.N.RUPINI",
      rollnumber: "14VV1A1222",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Bluelite"
    },
    {
      sno: 43,
      name: "MUPPARAJU SAI SOWNYA",
      rollnumber: "14VV1A1220",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Syntel"
    },
    {
      sno: 44,
      name: "TAMMA TARUN BHUSHAN",
      rollnumber: "14VV1A1226",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions"
    },
    {
      sno: 45,
      name: "CHINTALAPUDI VENU GOPAL",
      rollnumber: "14VV1A1249",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions",
    },
    {
      sno: 46,
      name: "A.V.V.S. PREETHI",
      rollnumber: "14VV1A1205",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions",
    },
    {
      sno: 47,
      name: "KRISHNA HARSHA .K",
      rollnumber: "14VV1A1209",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 48,
      name: "B. SAIRAM KALYAN",
      rollnumber: "14VV1A1216",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Apoorva IT Solutions Pvt.Ltd",
    },
    {
      sno: 49,
      name: "K.PURNA CHANDRIKA",
      rollnumber: "14VV1A1217",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Wipro",
    },
    {
      sno: 50,
      name: "A .VASAVI",
      rollnumber: "14VV1A1219",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Wipro",
    },
    {
      sno: 51,
      name: "M.SOWMYA",
      rollnumber: "14VV1A1220",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Infosys",
    },
    {
      sno: 52,
      name: "L.BHAVANI",
      rollnumber: "14VV1A1221",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Infosys",
    },
    {
      sno: 53,
      name: "K.RUPINI",
      rollnumber: "14VV1A1222",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Apoorva IT Solutions Pvt.Ltd",
    },
    {
      sno: 54,
      name: "K.TULASI",
      rollnumber: "14VV1A1224",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Dell",
    },
    {
      sno: 55,
      name: "DEVI SATYA PRIYA",
      rollnumber: "14VV1A1225",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Infosys",
    },
    {
      sno: 56,
      name: "T.TARUN",
      rollnumber: "14VV1A1226",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Sails Software Solutions",
    },
    {
      sno: 57,
      name: "B. PHANI SAI",
      rollnumber: "14VV1A1227",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions",
    },
    {
      sno: 58,
      name: "B.VENU MADHURI",
      rollnumber: "14VV1A1230",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Capgemini",
    },
    {
      sno: 59,
      name: "B.SIVA SANKAR",
      rollnumber: "14VV1A1244",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "GreyCampus",
    },
    {
      sno: 60,
      name: "G.KASI",
      rollnumber: "14VV1A1256",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Infosys",
    },
    {
      sno: 61,
      name: "L.HARISH",
      rollnumber: "15VV5A1266",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 62,
      name: "G.PARWATEESWAR",
      rollnumber: "14VV1A1237",
      branch: "IT",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services"
    },
    {
      sno: 63,
      name: "KOMMISETTY SAI DURGA POOJITHA",
      rollnumber: "14VV1A0401",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 64,
      name: "ALLU SRIKANTH",
      rollnumber: "14VV1A0402",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 65,
      name: "VELUGUBANTLA PRIYANKA",
      rollnumber: "14VV1A0403",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "SoCtronics Pvt. Ltd",
    },
    {
      sno: 66,
      name: "GORIPARTHI RAMALAKSHMI",
      rollnumber: "14VV1A0407",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Invecas Pvt. Ltd",
    },
    {
      sno: 67,
      name: "THOLETI DURGA PRASAD",
      rollnumber: "14VV1A0411",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Invecas Pvt. Ltd",
    },
    {
      sno: 68,
      name: "KEERTHI VENKAT REDDY MOKKA",
      rollnumber: "14VV1A0413",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 69,
      name: "ANUGULA VENKATA GOVARDHAN",
      rollnumber: "14VV1A0416",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Invecas Pvt. Ltd",
    },
    
    {
      sno: 70,
      name: "KRISHNAM LALITHA SONALIKA",
      rollnumber: "14VV1A0418",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Invecas Pvt. Ltd",
    },
    {
      sno: 71,
      name: "DUVVADA SAI KUMAR",
      rollnumber: "14VV1A0406",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 72,
      name: "MOHAMMED KARISHMA SULTANA",
      rollnumber: "14VV1A0419",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 73,
      name: "NANDURI VENKATA KAUSHIK",
      rollnumber: "14VV1A0420",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 74,
      name: "KANCHI VASANTHI",
      rollnumber: "14VV1A0421",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 75,
      name: "PYDALA SRI LAKSHMI",
      rollnumber: "14VV1A0422",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Invecas Pvt. Ltd",
    },
    {
      sno: 76,
      name: "THOTA SREE VANI",
      rollnumber: "14VV1A0423",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 77,
      name: "ANNAPARTHI RAMA SARMA",
      rollnumber: "14VV1A0426",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Richardson Texas,GRE",
    },
    {
      sno: 78,
      name: "G SAI SRAVYA",
      rollnumber: "14VV1A0429",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Capgemini",
    },
    {
      sno: 79,
      name: "MD INZAMAM-UL-HAQ",
      rollnumber: "14VV1A0436",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 80,
      name: "R SRI POOJA",
      rollnumber: "14VV1A0437",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Nalsoft Pvt. Ltd",
    },
    {
      sno: 81,
      name: "S VINOOTHNA",
      rollnumber: "14VV1A0438",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 82,
      name: "A BHAGYA REKHA",
      rollnumber: "14VV1A0445",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 83,
      name: "A SAI RAM",
      rollnumber: "14VV1A0450",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Invecas Pvt. Ltd",
    },
    {
      sno: 84,
      name: "CH BHARATH",
      rollnumber: "15VV5A0461",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Cerium Systems",
    },
    {
      sno: 85,
      name: "GEDELA JASWANTH",
      rollnumber: "14VV1A0417",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 86,
      name: "TETALA BHARGAVI",
      rollnumber: "14VV1A0433",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 87,
      name: "T L K RAVIKANTH",
      rollnumber: "15VV5A0465",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 88,
      name: "PORAPU PAVAN",
      rollnumber: "15VV5A0462",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Cerium Systems",
    },
    {
      sno: 89,
      name: "NANDIGAM NAGA SAI JHARI",
      rollnumber: "14VV1A0432",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 90,
      name: "SHAIK FATHIMA",
      rollnumber: "15VV5A0469",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Cerium Systems",
    },
    {
      sno: 91,
      name: "K VIJAY VARDHAN REDDY",
      rollnumber: "14VV1A0444",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Nalsoft",
    },
    {
      sno: 92,
      name: "T SUBHASH",
      rollnumber: "14VV1A0442",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "SWR",
    },
    {
      sno: 93,
      name: "G K SRI HARSHA",
      rollnumber: "14VV1A0441",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Research Assosiate",
    },
    {
      sno: 94,
      name: "S HARITHA",
      rollnumber: "15VV5A0467",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "L&T",
    },
    {
      sno: 95,
      name: "G SUNANDA",
      rollnumber: "15VV5A0468",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "SBI",
    },
    {
      sno: 96,
      name: "B VIJAYA SAI",
      rollnumber: "15VV5A0463",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Fervid Mart",
    },
    {
      sno: 97,
      name: "D BHAVANA",
      rollnumber: "14VV1A0427",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Junior Associate",
    },
    {
      sno: 98,
      name: "K ASHARANI",
      rollnumber: "14VV1A0446",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Flextronic",
    },
    {
      sno: 99,
      name: "M SRIHARI",
      rollnumber: "14VV1A0439",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Panchaythi Raj",
    },
    {
      sno: 100,
      name: "CHANDRASEKKHAR GANGIREDDY",
      rollnumber: "14VV1A0454",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 101,
      name: "M RAGAVI",
      rollnumber: "14VV1A0405",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Nalsoft",
    },
    {
      sno: 102,
      name: "P MOUNIKA",
      rollnumber: "14VV1A0431",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 103,
      name: "P G NIRMALA JYOTHI",
      rollnumber: "14VV1A0453",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Soctronics Pvt. Ltd",
    },
    {
      sno: 104,
      name: "LINGETI LOVA KUMARI",
      rollnumber: "14VV1A0449",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Panchaythi Raj",
    },
    {
      sno: 105,
      name: "KOSURU JAGANMOHAN RAO",
      rollnumber: "14VV1A0408",
      branch: "ECE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Navy",
    },
    {
      sno: 106,
      name: "NALLA PARVATEESAM",
      rollnumber: "14VV1A0203",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Bank SBI",
    },
    {
      sno: 107,
      name: "BALAKA RAKESH",
      rollnumber: "14VV1A0208",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Postal Dpt.",
    },
    {
      sno: 108,
      name: "KHANDAPU HARIKRISHNA",
      rollnumber: "14VV1A0216",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Andhra Bank",
    },
    {
      sno: 109,
      name: "VADALA RAMYA",
      rollnumber: "14VV1A0221",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Food Corporation of India",
    },
    {
      sno: 110,
      name: "CHAVALA TRIVENI",
      rollnumber: "14VV1A0226",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "APEPDCL",
    },
    {
      sno: 111,
      name: "LANDA VISHESH",
      rollnumber: "14VV1A0238",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Infosys",
    },
    {
      sno: 112,
      name: "GEDALA NAGA SAI SREE",
      rollnumber: "14VV1A0240",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 113,
      name: "NANDAM VENKATESH",
      rollnumber: "14VV1A0241",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Byjus",
    },
    {
      sno: 114,
      name: "BOBBADI SATYANARAYANA",
      rollnumber: "15VV5A0265",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "L&T",
    },
    {
      sno: 115,
      name: "PUSPANAND",
      rollnumber: "15VV5A0266",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "Medha Servo Pvt ltd.",
    },
    {
      sno: 116,
      name: "SODABATHINA THANUSHA",
      rollnumber: "15VV5A0268",
      branch: "EEE",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Ap Sachivalayam",
    },
    {
      sno: 117,
      name: "NUKAPEYYI RATNABHARATHI",
      rollnumber: "14VV1A0113",
      branch: "CIVIL",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "AP Govt",
    },
    {
      sno: 118,
      name: "LOKAVARAPU SAI",
      rollnumber: "14VV1A0128",
      branch: "CIVIL",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Indian Railways",
    },
    {
      sno: 119,
      name: "MAJJI LOKESH KUMAR",
      rollnumber: "14VV1A0115",
      branch: "CIVIL",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Indian Railways",
    },
    {
      sno: 120,
      name: "BHASKARARAO MULA",
      rollnumber: "14VV1A0118",
      branch: "CIVIL",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Grama Sachivalayam",
    },
    {
      sno: 121,
      name: "JANA VISWARAMATEJA",
      rollnumber: "14VV1A0122",
      branch: "CIVIL",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Indian Railways",
    },
    {
      sno: 122,
      name: "SHAIK AZAHAR",
      rollnumber: "14VV1A0307",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Welfare & Education Assistant, Panchayat Raj",
    },
    {
      sno: 123,
      name: "NALLURI SAI PRAVEEN",
      rollnumber: "14VV1A0308",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "MS: Northeastern university college of engineering",
    },
    {
      sno: 124,
      name: "SIREESHA REDDI",
      rollnumber: "14VV1A0310",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engg. Assistant",
    },
    {
      sno: 125,
      name: "SHEIK SHAILA BHANU",
      rollnumber: "14VV1A0312",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Bank Clerk, Canara Bank",
    },
    {
      sno: 126,
      name: "SHAIK MUNEER",
      rollnumber: "14VV1A0320",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Canara bank Probationary Single window operator ‘A’",
    },
    {
      sno: 127,
      name: "DAVULURI GAYATRI",
      rollnumber: "14VV1A0324",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 128,
      name: "NAMBALLA SAILAJA",
      rollnumber: "14VV1A0327",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Ward Amenities secretary",
    },
    {
      sno: 129,
      name: "SUNKARI JAGADEESWARA RAO",
      rollnumber: "14VV1A0332",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Cognizant, Engineer Trainee",
    },
    {
      sno: 130,
      name: "MANDAPATI S R L SUKEERTHI",
      rollnumber: "14VV1A0333",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Infosys, Systems Engineer",
    },
    {
      sno: 131,
      name: "BEVARA DIVAKAR BABU NAIDU",
      rollnumber: "14VV1A0334",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 132,
      name: "GODABHA ARUNAPRIYA",
      rollnumber: "14VV1A0350",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engineer Assistant",
    },
    {
      sno: 133,
      name: "SANDHI SARAT SRI KRISHNA",
      rollnumber: "14VV1A0351",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engineer Assistant",
    },
    {
      sno: 134,
      name: "SHAIK FEROZ",
      rollnumber: "14VV1A0352",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 135,
      name: "KUNTHURU SANDHYA RANI",
      rollnumber: "14VV1A0353",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engineer Assistant",
    },
    {
      sno: 136,
      name: "UTUKURI VENKATA NARASAMMA",
      rollnumber: "14VV1A0355",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Executive: HRD.NO.2050/Rec.Executive/Sr.no.78",
    },
    {
      sno: 137,
      name: "MIRIYALA DILLESH KUMAR",
      rollnumber: "14VV1A0358",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Tata Consultancy Services",
    },
    {
      sno: 138,
      name: "LEKKALA ASWINI SRIVANI",
      rollnumber: "15VV5A0361",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engineering Assistant &Gate Score: 380",
    },
    {
      sno: 139,
      name: "GEDELA KALYAN",
      rollnumber: "15VV5A0362",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engineer Assistant",
    },
    {
      sno: 140,
      name: "KORUKONDA VARA PRASAD",
      rollnumber: "15VV5A0365",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Vizag Steel Plant, Junior Trainee",
    },
    {
      sno: 141,
      name: "ARJILLI MAHESWARI",
      rollnumber: "15VV5A0368",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Ward secretary",
    },
    {
      sno: 142,
      name: "KARRI LEELA MANI KANTA",
      rollnumber: "15VV5A0369",
      branch: "MECH",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Engineer Assistant",
    },
    {
      sno: 143,
      name: "DORA HEMANTH KUMAR",
      rollnumber: "14VV1A3101",
      branch: "MET",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "Sails Software Solutions",
    },
    {
      sno: 144,
      name: "THALLAPUDI DHAMODAR NAIDU",
      rollnumber: "14VV1A3123",
      branch: "MET",
      passingyear: "2017-2018",
      campus: "Off Campus",
      company: "RINL-Vskp",
    },
    {
      sno: 145,
      name: "SHAIK KHAJA RIZWAN ALAM",
      rollnumber: "14VV1A3124",
      branch: "MET",
      passingyear: "2017-2018",
      campus: "On Campus",
      company: "BMM Ispat Ltd.",
    },
    
  ];
  
  export default studentsPlacedData;
  