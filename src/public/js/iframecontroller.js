
const myIframe = document.getElementById("myIframe");

function eventManagmentView () {
    console.log(myIframe.src);
    myIframe.src = 'eventadmin';
}

function eventListManagmentView () {
    console.log(myIframe.src);
    myIframe.src = 'eventAdminList';
}

function userManagmentView () {
    console.log(myIframe.src);
    myIframe.src = 'useradmin';
}