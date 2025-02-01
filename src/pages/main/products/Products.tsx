import React from "react";

import style from "../main.module.css";
import Card from "../../../componets/card/Card";

interface Iproducts {
  id: number;
  image: string[];
  title: string;
  description: string;
  material: string;
  type_jewelery: string;
  weigth: number;
  price: number;
}

const Products = () => {
  const products: Iproducts[] = [
    {
      id: 1,
      image: [
        "https://pmdn.sokolov.io/pics/D5/5C/9C1FBDF3DD7BA27F459F9B75C169.jpg",
        "https://pmdn.sokolov.io/pics/9B/BC/D1E803E59811689B327AA64C687E.jpg",
        "https://pmdn.sokolov.io/pics/9C/BF/638A35A3F9EA304E5788B6CF16AA.jpg",
      ],
      title: "Кольцо из золота",
      description:
        "Классическое золотое кольцо – воплощение элегантности и роскоши. Теплый блеск золота делает этот аксессуар идеальным для повседневного ношения и особых случаев.",
      material: "Золото",
      type_jewelery: "Кольцо",
      weigth: 1.09,
      price: 12990,
    },
    {
      id: 2,
      image: [
        "https://pmdn.sokolov.io/pics/15/39/EE969E040DD2688848C0091BF847.jpg",
        "https://pmdn.sokolov.io/pics/CA/ED/D665D78623F4FA4177F61EEBEE7D.jpg",
        "https://pmdn.sokolov.io/pics/7B/ED/50537AA4AC7E2FEE63B111D37E09.jpg",
      ],
      title: "Кольцо из золота с фианитами",
      description:
        "Золотое кольцо с гладкой полировкой – стильный и универсальный аксессуар, который подчеркнет вашу индивидуальность и гармонично дополнит любой образ.",
      material: "Золото",
      type_jewelery: "Кольцо",
      weigth: 1.3,
      price: 16990,
    },
    {
      id: 3,
      image: [
        "https://pmdn.sokolov.io/pics/05/DA/54A6839B2AE2A90DAAAB4D2AF232.jpg",
        "https://pmdn.sokolov.io/pics/3F/74/066405B3B5B743D6BF1564633B64.jpg",
        "https://pmdn.sokolov.io/pics/30/74/CB162E8E3B6B687ED1447AA1C538.jpg",
      ],
      title: "Кольцо с александритом",
      description:
        "Изысканное украшение, подчёркивающее утончённый вкус и статус своего обладателя.",
      material: "Золото",
      type_jewelery: "Кольцо",
      weigth: 1.5,
      price: 13900,
    },
    {
      id: 4,
      image: [
        "https://pmdn.sokolov.io/pics/C8/6F/BB671DB79C009DA2354F8BFE2234.jpg",
        "https://pmdn.sokolov.io/pics/1F/50/A5F339572AA05CC15130F49E5B0B.jpg",
        "https://pmdn.sokolov.io/pics/77/1C/DDAA6A39659CA040369690EACEE5.jpg",
      ],
      title: "Кольцо  с фианитами",
      description:
        "Мощный и стильный аксессуар, объединяющий в себе минимализм и благородство серебра.",
      material: "Cеребро",
      type_jewelery: "Кольцо",
      weigth: 5.2,
      price: 13390,
    },
    {
      id: 5,
      image: [
        "https://pmdn.sokolov.io/pics/94/E0/DE863CF5A8B52AFAD9C261A4C8AD.jpg",
        "https://pmdn.sokolov.io/pics/C1/E3/46B3E51C780FF20C71C40EEB26E7.jpg",
        "https://pmdn.sokolov.io/pics/41/C8/57BB65D310609CD2709C760B183F.jpg",
      ],
      title: "Кольцо из серебра",
      description:
        "Лёгкое и загадочное кольцо, переливающееся холодным серебряным блеском.",
      material: "Cеребро",
      type_jewelery: "Кольцо",
      weigth: 3.4,
      price: 10150,
    },
    {
      id: 6,
      image: [
        "https://pmdn.sokolov.io/pics/6A/91/4ADD6E591250C271A9DCF38B5D47.jpg",
        "https://pmdn.sokolov.io/pics/4F/69/26966DA11F7BF3CD9331FD335E16.jpg",
        "https://pmdn.sokolov.io/pics/62/93/1F6BF541B19224B20970128C8A90.jpg",
      ],
      title: "Кольцо из серебра с топазом",
      description:
        "Стильное и утонченное серебряное кольцо, сияющее холодным светом. Идеально для тех, кто ценит элегантность в деталях.",
      material: "Cеребро",
      type_jewelery: "Кольцо",
      weigth: 1.61,
      price: 8150,
    },
    {
      id: 7,
      image: [
        "https://pmdn.sokolov.io/pics/C8/6F/BB671DB79C009DA2354F8BFE2234.jpg",
        "https://pmdn.sokolov.io/pics/97/BD/4EE3F61F31BFB21F5C174D3D09AF.jpg",
        "https://pmdn.sokolov.io/pics/77/1C/DDAA6A39659CA040369690EACEE5.jpg",
      ],
      title: "Кольцо из белого золота с фианитом ",
      description:
        "Элегантное кольцо из белого золота с безупречной полировкой. Его холодный блеск подчеркнет изысканный стиль и безупречный вкус.",
      material: "Белое золото",
      type_jewelery: "Кольцо",
      weigth: 1.73,
      price: 21590,
    },
    {
      id: 8,
      image: [
        "https://pmdn.sokolov.io/pics/F9/84/6E9536ACCE5B859D0478CBC3ABC3.jpg",
        "https://pmdn.sokolov.io/pics/9A/65/BA9AE0EF9BE3BBACD7E130D04232.jpg",
        "https://pmdn.sokolov.io/pics/12/43/15CFF211CD271F13E2BBBF32F317.jpg",
      ],
      title: "Обручальное кольцо из белого золота с бриллиантом ",
      description:
        "Минималистичное, но эффектное украшение из белого золота, отражающее чистоту и благородство. Идеальный аксессуар для повседневного ношения и торжественных случаев.",
      material: "Белое золото",
      type_jewelery: "Кольцо",
      weigth: 0.79,
      price: 19690,
    },
    {
      id: 9,
      image: [
        "https://pmdn.sokolov.io/pics/05/73/61506023D0354295EAB96BAFCC95.jpg",
        "https://pmdn.sokolov.io/pics/F9/0A/79BCF97A99F17A228AB0D1416C67.jpg",
        "https://pmdn.sokolov.io/pics/2C/7B/481780F657B8E67B10C96E0F3B75.jpg",
      ],
      title: "Кольцо из белого золота с александритом ",
      description:
        "Кольцо, сочетающее утонченность и современный стиль. Холодный блеск белого золота делает его идеальным выбором для людей с утонченным вкусом.",
      material: "Белое золото",
      type_jewelery: "Кольцо",
      weigth: 1.44,
      price: 33500,
    },
    {
      id: 10,
      image: [
        "https://pmdn.sokolov.io/pics/89/D1/D512E88E4FAC5E4B8FEDDCDB811A.jpg",
        "https://pmdn.sokolov.io/pics/8E/5C/487332D9902663419726AD50795E.jpg",
        "https://pmdn.sokolov.io/pics/A9/7D/62185407957643C816EE8DC1FFE5.jpg",
      ],
      title: "Цепочка из золота, плетение Бисмарк",
      description:
        "Элегантная золотая цепочка с изысканным витым плетением, создающим эффект легкого переливания света. Идеальный выбор для повседневного ношения и особых случаев.",
      material: "Золото",
      type_jewelery: "Цепочка",
      weigth: 2.88,
      price: 33500,
    },
    {
      id: 11,
      image: [
        "https://pmdn.sokolov.io/pics/51/B9/09896154A4CB213C4522E6E1CD01.jpg",
        "https://pmdn.sokolov.io/pics/0E/ED/A80DCD6AEBAB3EE15292FDCDEC9F.jpg",
        "https://pmdn.sokolov.io/pics/D3/3E/D64F8F9A2BF82DEB228B409F7DBF.jpg",
      ],
      title: "Цепочка из золота, плетение Якорное",
      description:
        "Прочная и стильная цепочка из золота с морской эстетикой. Универсальный аксессуар, который можно носить как самостоятельно, так и с подвеской.",
      material: "Золото",
      type_jewelery: "Цепочка",
      weigth: 1.2,
      price: 22350,
    },
    {
      id: 12,
      image: [
        "https://pmdn.sokolov.io/pics/9F/60/70C61CB14F7312B45AD71CF388BF.jpg",
        "https://pmdn.sokolov.io/pics/35/44/BA38FE36B75F5AEF49ED02F2A96F.jpg",
        "https://pmdn.sokolov.io/pics/7D/05/3A4925C2566B5FED2DE9F2398F58.jpg",
      ],
      title: "Цепочка из золота, плетение Нонна",
      description:
        "Ассивная и роскошная золотая Цепочка с гладкими, отполированными гранями. Придаст образу статусность и благородство.",
      material: "Золото",
      type_jewelery: "Цепочка",
      weigth: 3.86,
      price: 42000,
    },
    {
      id: 13,
      image: [
        "https://pmdn.sokolov.io/pics/5E/21/CBC54B766655F157B5887462F124.jpg",
        "https://pmdn.sokolov.io/pics/A9/C3/5E6D9139EA3AAC194B87603E9ABB.jpg",
      ],
      title: "Цепочка из серебра, плетение Сингапур",
      description:
        "Прочная и массивная серебряная Цепочка с узлом в виде сложного переплетения звеньев. Символ надежности и силы.",
      material: "Cеребро",
      type_jewelery: "Цепочка",
      weigth: 1.43,
      price: 12500,
    },
    {
      id: 14,
      image: [
        "https://pmdn.sokolov.io/pics/28/88/FDA4D3ED9F4453A8BD493BCB4873.jpg",
        "https://pmdn.sokolov.io/pics/F9/ED/0AABC66BB3884039C9C8C73F976D.jpg",
      ],
      title: "Цепочка из серебра, плетение Якорное",
      description:
        "Элегантное чередование коротких и длинных звеньев, создающее гармоничный узор. Подходит как мужчинам, так и женщинам.",
      material: "Cеребро",
      type_jewelery: "Цепочка",
      weigth: 2.91,
      price: 21350,
    },
    {
      id: 15,
      image: [
        "https://pmdn.sokolov.io/pics/28/88/FDA4D3ED9F4453A8BD493BCB4873.jpg",
        "https://pmdn.sokolov.io/pics/F9/ED/0AABC66BB3884039C9C8C73F976D.jpg",
      ],
      title: "Цепочка из серебра, Ромб двойной",
      description:
        "Гладкая и гибкая цепочка, напоминающая змеиную кожу. Плотно облегает шею, красиво отражая свет.",
      material: "Cеребро",
      type_jewelery: "Цепочка",
      weigth: 2.31,
      price: 18350,
    },
    {
      id: 16,
      image: [
        "https://pmdn.sokolov.io/pics/04/EB/C7BEB8C4DF6A2BCA35D1DC3E82A5.jpg",
        "https://pmdn.sokolov.io/pics/E7/1E/C584527B35D064E3A0075C82B6FF.jpg",
      ],
      title: "Цепочка из белого золота с фианитом ",
      description:
        "Тонкое и утонченное плетение в виде квадратных звеньев, создающее эффект благородного блеска. Идеально смотрится в сочетании с кулонами.",
      material: "Белое золото",
      type_jewelery: "Цепочка",
      weigth: 2.3,
      price: 16650,
    },
    {
      id: 17,
      image: [
        "https://pmdn.sokolov.io/pics/72/9D/DDCFBDE49E971C6E126423465E71.jpg",
        "https://pmdn.sokolov.io/pics/1A/DB/5C5B358D370B21279A1299702604.jpg",
        "https://pmdn.sokolov.io/pics/EF/18/4A5863F5F1A510B58C288B5CCA2C.jpg",
      ],
      title: "Цепочка из белого золота с жемчугом",
      description:
        "Роскошная цепочка из белого золота с необычным плетением, напоминающим веревку. Стильный выбор для уверенных в себе людей.",
      material: "Белое золото",
      type_jewelery: "Цепочка",
      weigth: 2.26,
      price: 25720,
    },
    {
      id: 18,
      image: [
        "https://pmdn.sokolov.io/pics/C3/68/6E879F4AAC50CAE2FFF3D613FA19.jpg",
        "https://pmdn.sokolov.io/pics/DA/71/BCF398A78736E95996CB940F758C.jpg",
      ],
      title: "Цепочка из белого золота",
      description:
        "Элегантная цепочка с плетением, напоминающим пшеничный колос. Объединяет в себе утонченность и прочность.",
      material: "Белое золото",
      type_jewelery: "Цепочка",
      weigth: 1.69,
      price: 18800,
    },
    {
      id: 19,
      image: [
        "https://pmdn.sokolov.io/pics/F0/4B/305C8312EAAB3A8F4492FF4CA3D7.jpg",
        "https://pmdn.sokolov.io/pics/E7/7D/1C2B63010416F86FDACFA4426CA0.jpg",
        "https://pmdn.sokolov.io/pics/C7/52/6E098715A8C7AD675A2B21910A10.jpg",
      ],
      title: "Серьги из золота с топазами",
      description:
        "Утонченные золотые кольца с идеальной полировкой. Легкие, удобные и универсальные – подойдут как для повседневного образа, так и для вечернего выхода.",
      material: "Золото",
      type_jewelery: "Сергьи",
      weigth: 1.91,
      price: 16990,
    },
    {
      id: 20,
      image: [
        "https://pmdn.sokolov.io/pics/C9/7E/003AE4C16C618032ED0243177BB9.jpg",
        "https://pmdn.sokolov.io/pics/82/74/9E4E425A3177E823B7F9CCE5CE58.jpg",
        "https://pmdn.sokolov.io/pics/9E/E0/CA335F066200D7793C7136183D70.jpg",
      ],
      title: "Серьги из золота с бриллиантами и топазами ",
      description:
        "Аккуратные гвоздики с бриллиантами или фианитами в золотой оправе. Минимализм, который никогда не выйдет из моды.",
      material: "Золото",
      type_jewelery: "Сергьи",
      weigth: 2.12,
      price: 21990,
    },
    {
      id: 21,
      image: [
        "https://pmdn.sokolov.io/pics/90/06/F98A7DC32F54F7C27B517407DBE8.jpg",
        "https://pmdn.sokolov.io/pics/9B/53/8ABAD49ACACC7F3FB9F92DEDA486.jpg",
        "https://pmdn.sokolov.io/pics/0A/93/6476B56BB640A2B41FA9B1571D45.jpg",
      ],
      title: "Серьги из золота с бриллиантами",
      description:
        "Изысканный узор в виде цветочного орнамента, выполненный из золота. Легкость и воздушность в каждой детали.",
      material: "Золото",
      type_jewelery: "Сергьи",
      weigth: 2.18,
      price: 31230,
    },
    {
      id: 22,
      image: [
        "https://pmdn.sokolov.io/pics/60/38/F3981AD5CD64C2BCF58772B10D2C.jpg",
        "https://pmdn.sokolov.io/pics/C9/33/E20B270B149BC770A114F1EE446B.jpg",
        "https://pmdn.sokolov.io/pics/3C/76/D48BFD801F9845B7463CF93E0086.jpg",
      ],
      title: "Серьги из серебра с бриллиантами ",
      description:
        "Длинные серебряные цепочки, плавно спускающиеся вниз, создающие загадочный и изящный образ. Подходят для романтичных и утонченных натур.",
      material: "Cеребро",
      type_jewelery: "Сергьи",
      weigth: 1.65,
      price: 12990,
    },
    {
      id: 23,
      image: [
        "https://pmdn.sokolov.io/pics/E6/9D/1677D94A9D1F1126D47EBBD99D1F.jpg",
        "https://pmdn.sokolov.io/pics/19/54/42CCE90BF5A42666982D2C6D8704.jpg",
        "https://pmdn.sokolov.io/pics/FF/4C/3D9E9D6DFA62086CC31EF6C8621E.jpg",
      ],
      title: "Серьги из серебра с гидротермальными александритами",
      description:
        "Стильные серебряные серьги в форме аккуратных колец, квадратов или треугольников. Идеальный вариант для тех, кто ценит лаконичность.",
      material: "Cеребро",
      type_jewelery: "Сергьи",
      weigth: 2.45,
      price: 25000,
    },
    {
      id: 24,
      image: [
        "https://pmdn.sokolov.io/pics/63/4C/33D9C191CEC4F11E4D5EC89779A6.jpg",
        "https://pmdn.sokolov.io/pics/D5/03/493D328CE6926DEA9701C8081B3E.jpg",
        "https://pmdn.sokolov.io/pics/B6/DB/583742CF945AD418135C186BCB38.jpg",
      ],
      title: "Серьги из серебра с бриллиантами",
      description:
        "Серебряные серьги, украшенные вставками из аметиста, граната или топаза. Не только красивый аксессуар, но и символ энергии и гармонии.",
      material: "Cеребро",
      type_jewelery: "Сергьи",
      weigth: 3.11,
      price: 28990,
    },
    {
      id: 25,
      image: [
        "https://pmdn.sokolov.io/pics/76/38/A3EFE67A95B521B50CF7C6AD5459.jpg",
        "https://pmdn.sokolov.io/pics/64/BE/BFDEF238B37AB0BA902BE69E582F.jpg",
        "https://pmdn.sokolov.io/pics/B1/1B/93797A6B2E95171D83BD995A2FD3.jpg",
      ],
      title: "Серьги из белого золота с бриллиантами",
      description:
        "Благородное сочетание белого золота и бриллиантов. Ледяной блеск, который подчеркнет элегантность и статус.",
      material: "Белое золото",
      type_jewelery: "Сергьи",
      weigth: 5.46,
      price: 69000,
    },
    {
      id: 26,
      image: [
        "https://pmdn.sokolov.io/pics/C1/DA/D1F609AD0B8B35E80586846A8A90.jpg",
        "https://pmdn.sokolov.io/pics/DD/B8/471BCFFC5C18759E61CEE418FE68.jpg",
        "https://pmdn.sokolov.io/pics/85/1F/7942762D1E8AAE96E8C11B003068.jpg",
      ],
      title: "Серьги из белого золота с бриллиантами",
      description:
        "Современные серьги, плавно обхватывающие ухо, создавая эффект многослойности. Идеальный выбор для смелых модниц.",
      material: "Белое золото",
      type_jewelery: "Сергьи",
      weigth: 4.55,
      price: 56000,
    },
    {
      id: 27,
      image: [
        "https://pmdn.sokolov.io/pics/4B/E6/E3A0BD2CC85D3F505F71C772963F.jpg",
        "https://pmdn.sokolov.io/pics/87/42/85E320C3ABB7042E7D917CDD61C4.jpg",
        "https://pmdn.sokolov.io/pics/F0/84/D11988D79974E5AC33D51AEC7C6B.jpg",
      ],
      title: "Серьги из белого золота с бриллиантами",
      description:
        "Утонченные серьги с подвесками в виде капель белого золота, переливающихся при движении. Легкость и изысканность в каждом изгибе.",
      material: "Белое золото",
      type_jewelery: "Сергьи",
      weigth: 3.5,
      price: 65990,
    },
  ];

  return (
    <div className={style.products}>
      {products.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
