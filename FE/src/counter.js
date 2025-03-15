export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

async function fetchData() {
  try {
    //Req trigger
    const resp = await fetch("http://localhost:3000/detail");

    //Parsing
    const jsonResp = await resp.json();
    console.log("My Respionse 2+++++", jsonResp);
  } catch (err) {
    console.log("Errr++++", err);
  }
}

fetchData();

export function fetchDataContainer() {}
