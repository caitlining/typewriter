const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  let delayTime = i * 50;
  setTimeout(() => {
    process.stdout.write(sentence[i]);

    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, delayTime);
}