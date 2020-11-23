const natural = require("./index");
const tokenizer = new natural.AggressiveTokenizer();
console.log(
  tokenizer.tokenize(
    "Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла» 10.01.2007 шықәсазтәи N 1555-с-XIV (иаднакылт Аҧсны Жәлар Реизара – Апарламент 2006 ш, ԥхынҷкәынмза 28 рзы) (аредакциа 29.06.2016)"
  )
);
const NGrams = natural.NGram;
console.log(
  NGrams.bigrams(
    "Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла» 10.01.2007 шықәсазтәи N 1555-с-XIV (иаднакылт Аҧсны Жәлар Реизара – Апарламент 2006 ш, ԥхынҷкәынмза 28 рзы) (аредакциа 29.06.2016)",
    "",
    null,
    "[end]",
    true
  )
);
