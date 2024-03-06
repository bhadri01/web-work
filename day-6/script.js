const product = document.getElementById("product");

const data = [
  {
    imageurl: "/day-6/images/1.webp",
    title: "product1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat quidem quod",
  },
  {
    imageurl: "/day-6/images/2.webp",
    title: "product2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageurl: "/day-6/images/3.webp",
    title: "product3",
    desc: "Quisquam quaerat quidem quod",
  },
  {
    imageurl: "/day-6/images/4.webp",
    title: "product4",
    desc: "Lorem ipsum dolor Quisquam quaerat quidem quod",
  },
  {
    imageurl: "/day-6/images/5.webp",
    title: "product5",
    desc: "adipisicing elit. Quisquam quaerat quidem quod",
  },
];

// console.log(data[0])

for (let i = 0; i < data.length; i++) {
  product.innerHTML += `
<div class="productbox">
<img
  src="${data[i].imageurl}"
  alt="${data[i].title}"
/>
<h2>${data[i].title}</h2>
<p>
${data[i].desc}
</p>
</div>
`;
}
