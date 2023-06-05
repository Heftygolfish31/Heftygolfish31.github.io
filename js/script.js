// Write JavaScript here 
var welsh_flag = false;

var language_change_link = document.getElementById('change-language');
language_change_link.onclick = change_language;

function change_language() {
  
    if (welsh_flag == true) {
      welsh_flag = false;
    } else {
      welsh_flag = true;
    }
  
    alert("languaged changed. welsh is now " + welsh_flag);
    return false;
}