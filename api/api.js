export const fatchData = async () => {
  try {
    const responces = await fetch("https://api.myjson.com/bins/87lgk");
    const products = await responces.json();
    //console.log("fatchData", products);
    return products;
  } catch (e) {
    console.log(e);
  }
};
