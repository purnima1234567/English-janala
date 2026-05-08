const createElements = (srr) => {
    const htmlElements = Array.map((el) => `<span class="btn">${el}</span>`);
    console.log(htmlElements.join(" "));
};

const synonyms = ["hello", "hi", "konnichiwa"];
createElements(synonyms);