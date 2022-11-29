import shoes1 from "./../../img/1sh.jpg";
import shoes1h from "./../../img/1h.jpg";
import shoes2 from "./../../img/2sh.jpg";
import shoes2h from "./../../img/2h.jpg";
import shoes3 from "./../../img/3sh.jpg";
import shoes3h from "./../../img/3h.jpg";
import shoes4 from "./../../img/4sh.jpg";
import shoes4h from "./../../img/4h.jpg";
import shoes5 from "./../../img/5sh.jpg";
import shoes5h from "./../../img/5h.jpg";
import shoes6 from "./../../img/6sh.jpg";
import shoes6h from "./../../img/6h.jpg";

const data = {
  products: [
    {
      id: 1,
      title: "Cole Haan Mens Grand Crosscourt II Sneakers",
      price: "$54.91 - $69.98",
      img: shoes1,
      desc: "Imported Rubber sole Classic Sport Inspired Oxford In Leather, Suede Or Textile Uppers Textile Lined Injection Molded Outsole With Rubber Pods In Heel And Forefoot Country Of Origin: IN Water Resistance Level: Not Water Resistant",
    },
    {
      id: 2,
      title: "PUMA Men s Cell Surin 2 Sneaker",
      price: "$69.17 - $79.95",
      img: "https://m.media-amazon.com/images/I/617dv87mDQL._AC_UX500_.jpg",
      desc: `100% Synthetic
    Rubber sole
    Shaft measures approximately low-top from arch
    Run-Train Performance Sneaker`,
    },
    {
      id: 3,
      title: "Skechers Sport Mens Elite Flex Hartnell Fashion Sneaker",
      price: "$45.74 - $45.98",
      img: shoes3,
      desc: `Fabric
Imported
Rubber sole
Whether it's a workout in the gym or a brisk walk in the park, the SKECHERS® Elite Flex Hartnell sneaker keeps you feeling energized.
Knit mesh nearly one piece fabric upper.
Easy entry design with bungee lacing.
Padded collar.`,
    },
    {
      id: 4,
      title: "adidas Men s Grand Court Sneaker",
      price: "$42.95 - $49.95",
      img: shoes4,
      desc: `100% Leather
Imported
Rubber sole
Shaft measures approximately 0-6" from arch
Platform measures approximately 1 inches
Boot opening measures approximately 6-12" around
Court-inspired suede shoes with pillow-soft cushioning for casual comfort`,
    },
    {
      id: 5,
      title: "Cole Haan Men s 2.Zerogrand Laser Wing Oxford",
      price: "$138.80 - $159.95",
      img: shoes5,
      desc: `100% Synthetic
Imported
Rubber sole
Heel measures approximately 1 centimeters
Laser cut wingtip upper pattern in textured, smooth leather, nubuck or suede
Fully padded sock lining for ultimate comfort
Fully rubber outsole with Grand OS technology`,
    },
    {
      id: 6,
      title: "Men s Jordan 6 Retro Carmine White/Carmine-Black (CT8529 106)",
      price: "$277.88 - $384.87",
      img: shoes6,
      desc: `Rubber sole`,
    },
  ],
};

const Servise = {
  getProducts: () => {
    return data.products.slice();
  },
  getProductById: (id) => {
    return data.products.find((item) => item.id.toString() === id.toString());
  },
};

export default Servise;
