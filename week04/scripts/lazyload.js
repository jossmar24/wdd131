const year = document.querySelector("#year");
const lastModify = document.querySelector("#lastModify");

const today = new Date();
const theLastModify = document.lastModified;

year.innerHTML = `&copy${today.getFullYear()} | Josselyn Juleidy Martinez | Ecuador`;
lastModify.innerHTML = `<span>Last Modification: ${theLastModify}</span>`;