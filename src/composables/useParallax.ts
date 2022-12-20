let deltaX = 0;
let deltaY = 0;
let mouseXOld = 0;
let mouseYOld = 0;

function calculateDelta(event: any) {
  const speed = 100;
  const lines = document.querySelectorAll("[attr='parallaxed']") as NodeListOf<HTMLElement>;
  const hole = document.querySelector(".hole") as HTMLElement;

  let rect = document.body.getBoundingClientRect();
  let centerX = rect.width / 2;
  let centerY = rect.height / 2;

  mouseXOld = event.pageX;
  mouseYOld = event.pageY;

  deltaX = (centerX - event.pageX) / speed;
  deltaY = (centerY - event.pageY) / speed;

  for (let index = 0; index < lines.length; index++) {
    lines[index]?.setAttribute("style", `transform: translate(${deltaX}px, ${deltaY * (index + 1)}px)`);
  }

  hole?.setAttribute("style", `transform: translate(${deltaX * 5}px, ${deltaY * 5}px)`);
}

export { calculateDelta };
