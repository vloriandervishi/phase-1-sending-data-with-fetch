// Add your code here
function submitData(username, emails) {
  const divEl = document.createElement("div");
  const pEl = document.createElement("p");
  const pEr = document.createElement("p");
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: username, email: emails }),
  })
    .then((response) => response.json())
    .then((displayObject) => {
      pEl.innerHTML = displayObject.id;
      divEl.append(pEl);
      document.body.append(divEl);
    })
    .catch((error) => {
      pEr.innerHTML = error.message;
      divEl.append(pEr);
      document.body.append(divEl);
    });
}
