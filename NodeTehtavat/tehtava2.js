
// Tarkoitus on esittää käyttäjälle kysymys ja antaa hänelle mahdollisuus vastata kyllä tai ei.

const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
