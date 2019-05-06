import Time from "./time";

export default new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            new Time('palmeiras', require('./assets/palmeiras_60x60.png')),
            new Time('Internacional', require('./assets/internacional_60x60.png')),
            new Time('Flamengo', require('./assets/flamengo_60x60.png')),
            new Time('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
            new Time('Santos', require('./assets/santos_60x60.png')),
            new Time('Botafogo', require('./assets/botafogo_60x60.png')),
            new Time('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
            new Time('Corinthians', require('./assets/corinthians_60x60.png')),
            new Time('Grêmio', require('./assets/gremio_60x60.png')),
            new Time('Fluminense', require('./assets/fluminense_60x60.png')),
            new Time('Bahia', require('./assets/bahia_60x60.png')),
            new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
            new Time('São Paulo', require('./assets/sao_paulo_60x60.png')),
            new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
            new Time('Sport', require('./assets/sport_60x60.png')),
            new Time('Ceará', require('./assets/ceara_60x60.png')),
            new Time('Vitória', require('./assets/vitoria_60x60.png')),
            new Time('Vasco', require('./assets/vasco_60x60.png')),
            new Time('América-MG', require('./assets/america_mg_60x60.png')),
            new Time('Paraná', require('./assets/parana_60x60.png')),
        ])
    }, 1000);
});
