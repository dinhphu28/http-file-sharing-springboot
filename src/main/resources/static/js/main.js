'use strict';

var listFilesRootElement = document.querySelector('#list-files-root-element');

var fetchData = [];

function loadListFilesFromBE() {
    fetch("/filenames", {
        method: "GET"
    })
    .then(res => {
        if(!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    })
    .then(data => {
        fetchData = data;

        console.log("Fetch list filenames successfully:", fetchData);

        // const listItems = fetchData.map((item) => (
        //     "<a href='" + item.fileDownloadUri + "' target='_blank'>" + item.filename + "</a><br/>"
        // ));
    
        // console.log("List item HTML: ", listItems);
    
        // listFilesRootElement.innerHTML = listItems;

        let itemRenString = "";
        for(let item of fetchData) {
            const tmpItem = "<a href='" + item.fileDownloadUri + "' target='_blank'>" + item.filename + "</a><br/>";
            itemRenString = itemRenString + tmpItem;
        }

        listFilesRootElement.innerHTML = itemRenString;
    })
    .catch(error => {
        console.log("Failed to fetch list filenames", error);
    });
}

loadListFilesFromBE();
