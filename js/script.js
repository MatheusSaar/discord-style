const serverBar = document.getElementsByClassName('server-bar')[0];
const directMessage = [...document.getElementsByClassName('direct-msg')[0].children];
const userServers = [...document.getElementsByClassName('user-servers')[0].children];

for (let server of directMessage) {
  server.addEventListener('click', (e) => {
    addContent(server, 'My Server');
  })
}

for (let server of userServers) {
  server.addEventListener('click', (e) => {
    addContent(server, 'Other Servers');
  });
}

function addContent(content, text) {
  let chatbox = document.createElement('div');
  chatbox.classList.add('chatbox');
  chatbox.innerHTML = `<p>${text}</p>`;
  chatbox.style.transform = `scale(0)`;

  setTimeout(() => {
    chatbox.style.transition = `all ease-out 0.3s`;
    chatbox.style.transform = `scale(1)`;
  }, 200);

  content.append(chatbox);

  setTimeout(() => {
    chatbox.style.transition = `all ease-out 0.3s`;
    chatbox.style.transform = `scale(0)`;
  }, 2300);

  setTimeout(() => {
    removeContent(chatbox);
  }, 2500);
}

function removeContent(content) {
  content.remove();
}
