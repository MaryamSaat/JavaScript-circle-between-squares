let x: number = Number(prompt("x.....!"));
for (let i: number = 1; i <= x; i++) {
  document.write(`<div class="absolute" style="left:calc(50% + ${i * 10}px );top:calc(50% + ${i * 10}px );  transform:translate(-50%,-50%);">`);

  for (let j: number = 1; j <= x; j++) {
    for (let k: number = 1; k <= x; k++) {
      if (j === Math.ceil(x / 2) && k === Math.ceil(x / 2)) {
        document.write(`<span class="inline-block px-[15px] py-[10px] m-[1px] rounded-full" style="background-color:rgb(255,0,0);">${k}</span>`);
      } else {
        document.write(`<span class="inline-block px-[15px] py-[10px] m-[1px]" style="background-color:rgb(${Math.round(Math.random() * 100)},${Math.round(Math.random() * 150)},${Math.round(Math.random() * 200)}">${k}</span>`);
      }
    }
    document.write("<br/>");
  }
  document.write("</div>");
}
