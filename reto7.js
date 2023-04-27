const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

const contains = (store, product) => {
  for (let clave in store) {
    let object = store[clave];
    if (product === object) {
      return true;
    }
    if (typeof object === "object" && contains(object, product)) {
      return true;
    }
  }

  return false;
};

console.log(contains(almacen, "vacio"));

