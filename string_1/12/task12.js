const t = +prompt("сколько минут?");
const h = Math.floor(t / 60);
const m = (t % 60);


console.log(t, "мин - это", h.toFixed(0), "час", m, "минут.");