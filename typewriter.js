//In this activity, we are going to take a sentence and display it as an animation.
// Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter.
const sentence = "hello there from lighthouse labs";

let delay = 0;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i === sentence.length - 1) {
      process.stdout.write("\n");
    }
  }, delay);
  delay += 100;
}


