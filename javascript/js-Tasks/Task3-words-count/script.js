function count1(text) {
  const letters = text.match(/[a-z]/gi); //|| []
  ///[a-z]/gi - regular expression
  return letters.length >= 2;
}

function count2(text) {
  for (const character of text) {
    const occurrences = Array.from(text).filter(
      (value) => value == character
    ).length;

    if (occurrences >= 3) {
      return false;
    }
  }

  return true;
}

function btn() {
  const checks = [count1, count2];
  const textInput = document.querySelector(".text-input");
  const wordCountElement = document.querySelector(".word-count");
  const letterCountElement = document.querySelector(".letter-count");
  const spaceCountElement = document.querySelector(".space-count");

  textInput.addEventListener("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = textInput.value.match(/[a-z]/gi).length; //|| []
    const spaceCount = textInput.value.match(/\s+/g).length; //|| []
    let wordCount = 0;

    outer: for (const text of splitted) {
      for (const check of checks) {
        if (!check(text)) {
          continue outer;
        }
      }

      wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount;
  });
}
