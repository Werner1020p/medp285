function dragElement(el) {
	let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	el.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onpointermove = elementDrag;
		document.onpointerup = stopDrag;
	}

	function elementDrag(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		el.style.top = (el.offsetTop - pos2) + "px";
		el.style.left = (el.offsetLeft - pos1) + "px";
	}

	function stopDrag() {
		document.onpointerup = null;
		document.onpointermove = null;
	}
}

// Draggable IDs
const draggableIds = [
	"clouds", "sun", "tree", "tree2", "flowers1", "flowers2",
	"bush", "tiger", "butterfly", "monkey", "deer", "pino"
];

draggableIds.forEach(id => {
	const el = document.getElementById(id);
	if (el) dragElement(el);
});
