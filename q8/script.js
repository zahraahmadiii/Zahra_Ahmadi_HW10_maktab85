let messages = document.querySelectorAll('.message');

for(let message of messages) {
    
  message.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
 
  message.firstChild.onclick = () => message.remove();
}