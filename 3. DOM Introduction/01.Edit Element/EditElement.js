function editElement(ref, match, replacer) {
 const text = ref.textContent;
 let pattern = new RegExp(match, 'g');
 let result = text.replace(pattern, replacer);
 return ref.textContent = result;
}