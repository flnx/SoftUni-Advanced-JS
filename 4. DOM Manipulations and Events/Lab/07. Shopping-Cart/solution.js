function solve() {
  const btnElements = document.getElementsByClassName('add-product');
  const textarea = document.querySelector('.shopping-cart > textarea');
  let totalProducts = new Set();
  let totalPrice = 0;

  textarea.value = '';
  Array.from(btnElements).forEach((b) =>
    b.addEventListener('click', (e) => {
      const parentElement = e.target.parentElement.parentElement;
      const productTitleElement = parentElement.children[1].children;
      const productName = productTitleElement[0].textContent;
      totalProducts.add(productName);

      const productPriceElement = parentElement.children;
      const length = parentElement.children.length - 1;
      const price = Number(productPriceElement[length].textContent);
      totalPrice += price;

      textarea.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`;
    })
  );

  const checkoutBtn = document.getElementsByClassName('checkout');
  checkoutBtn[0].addEventListener('click', (e) => {
    const allButtons = document.querySelectorAll('button');
    const resultProducts = Array.from(totalProducts);

    textarea.value += `You bought ${resultProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;
    for (let button of allButtons) {
      button.disabled = true;
    }
  });
}
