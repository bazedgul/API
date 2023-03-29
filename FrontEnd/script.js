const dictionary = (word) => {
  if (word && word.length) {
    fetch("http://localhost:8080/search/" + word)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        wordheading.innerHTML = response.word;
        definition.innerHTML = response.definition
          .replace("2.", "<br>2.")
          .replace("3.", "<br>3.")
          .replace("4.", "<br>4.");
      })
      .catch((err) => console.error(err));
  } else {
    alert("Pls Write a Word");
  }
};

sBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchInput.value);
});
