// Pra gravar quem tá comendo e quem tá pensando
const dbFake = { comendo: [], pensando: [] };

const talheres = 5;
const total = 5;

const janta = filo => {
  // Quais filósofos estão comendo
  const comendo = dbFake.comendo || [];
  // Quais filósofos estão pensando
  const pensando = dbFake.pensando || [];

  // Se ainda tiver talher disponivel e se o filósofo não tá comendo
  if (comendo.length < Math.floor(talheres / 2) && !comendo.includes(filo)) {
    // Se o filósofo tá pensando
    if (pensando.includes(filo)) {
      const index = pensando.indexOf(filo);
      // Para de pensar
      pensando.splice(index, 1);
      dbFake.pensando = pensando;
    }
    // Começa a comer
    dbFake.comendo = comendo.concat(filo);
  }
  // Se ainda tiver talher disponivel e se o filósofo não tá pensando
  else if (pensando.length < Math.ceil(talheres / 2) && !pensando.includes(filo)) {
    // Se o filósofo tá comendo
    if (comendo.includes(filo)) {
      const index = comendo.indexOf(filo);
      // Para de comer
      comendo.splice(index, 1);
      dbFake.comendo = comendo;
    }
    // Começa a pensar
    dbFake.pensando = pensando.concat(filo);
  }
  // Se não tiver talher disponível
  else {
    // Se o filósofo tiver pensando
    if (pensando.includes(filo)) {
      const index = pensando.indexOf(filo);
      // Para de pensar
      pensando.splice(index, 1);
      dbFake.pensando = pensando;
    }
    // Se o filósofo tiver comendo
    if (comendo.includes(filo)) {
      const index = comendo.indexOf(filo);
      // Para de comer
      comendo.splice(index, 1);
      dbFake.comendo = comendo;
    }
  }
};

for (let index = 0; index < 50; index++) {
  for (let index = 0; index < total; index++) {
    janta(index);
  }
}
