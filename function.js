var slt = document.getElementById('slct');
function disableItem(e) {
  if (e.checked) {
    slt.disabled = true;
  } else {
    slt.disabled = false;
  }
}

function getLength() {
  alert(slt.getElementsByTagName('option').length);
}

function changeLength() {
  slt.size = 6;
}

function changeItem() {
  alert(slt.selectedIndex);
}

function changeOption() {
  var name = prompt('whats your name?');
  if (confirm('are you sure?')) {
    slt.options[slt.selectedIndex].text = name
  }
}

function removeOption() {
  if (confirm('are you sure?')) {
    slt.remove(slt.selectedIndex);
  }
}