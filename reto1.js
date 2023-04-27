const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

function contarOvejas(ovejas) {
  return ovejas.filter(
    (x) =>
      x.color === "rojo" &&
      x.name.toLowerCase().trim().includes("n") &&
      x.name.toLowerCase().trim().includes("a")
  );
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// filter filtra los elementos de un array, a diferencia de map que los retorna todos.
