function removeSelectedColor() {
  var select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
}
 
// Attach function to button's onclick directly
document.querySelector('input[type="button"]').onclick = removeSelectedColor;
