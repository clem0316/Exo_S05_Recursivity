let numbers = [2, 3, 9, 4];
let vide = [];

// Version de calcul itérative
const sum1 = (array) => {
  let add = 0;
  for (let i = 0; i < array.length; i++) {
    add += array[i];
  }
  return add;
};

// Version de calcul récursive

const sum2 = (array) => {
  // On commence par vérifier si le talbeau n'est pas vide
  if (array.length === 0) {
    return "Le tableau est vide";
  }

  // On met ensuite une condition, qu'au cas où on arrive au dernier index du tableau (soit longueur du tableau -1), alors on renverra juste l'index, sans additionner l'index suivant (qui n'existe pas)
  const add = (array, i) => {
    if (i === array.length - 1) {
      return array[i];
    }

    // En dehors de ces 2 premières conditions, on additionne chaque fois le nouvel index avec son index suivant. Par ailleurs, cet index suivant deviendra l'index en paramètre de tour suivant.
    return array[i] + add(array, i + 1);
  };

  // On met ci-dessous en apramètre le premier index, sachant qu'à chaque tour, il sera remplacé par le suivant comme on a indiqué dans le 2nd paramètre (i+1) du retour ci-dessus
  return add(array, 0);
};
console.log(sum2(numbers));
