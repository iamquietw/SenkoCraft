const pages = {
    "map": {
        "buttonId": "map-page-button",
        "html": `<iframe src="http://senkocraft.ru:8123/" width="1000" height="600"></iframe>`
    },
    "form": {
        "buttonId": "form-page-button",
        "html": `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSewKYzHB-i0vdCyciu5eoQa4qrDIu2AZT0n70iSLUm2g1uBig/viewform?embedded=true" width="1000" height="600">Загрузка анкеты..</iframe>`
    },
    "admins": {
        "buttonId": "admins-page-button",
        "html": `
        <p style="font-style: italic">_iammonke</p> - Основатель сервера. Discord: ~monke#8001 VK: <a href="https://vk.com/quietw">https://vk.com/quietw</a>
        <p style="font-style: italic">Servantres</p> - Основатель сервера. Discord: Servantr#7091 VK: <a href="https://vk.com/tewiinaba">https://vk.com/tewiinaba</a>
        <p style="font-style: italic">thevayu</p> - Основатель сервера. Discord: theva#7080 VK: <a href="https://vk.com/thevayu">https://vk.com/thevayu</a>
        <p style="font-style: italic">RoB_redwood</p> - Dungeon Master, главная обезьяна сервера. Discord: МикроИнсульт#3719 VK: <a href="https://vk.com/burned_wood">https://vk.com/burned_wood</a>
        `
    }
}

function changePage(page_id) {
    let selectedButtons = document.getElementsByClassName("selected-button");
    if(selectedButtons) {
        for(let button in selectedButtons) {
            if(selectedButtons.hasOwnProperty(button)) {
                selectedButtons[button].className = "unselected-button"
            }
        }
    }
    document.getElementById(pages[page_id].buttonId).className = "selected-button"
    document.getElementsByClassName("content")[0].innerHTML = pages[page_id].html;
}
