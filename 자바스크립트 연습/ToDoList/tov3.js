const toDoList = {
    addSchedule(doText, dateText) {
        const li = document.createElement("li");
        li.className = "item";
        const doDiv = document.createElement("div");
        const dateDiv = document.createElement("div");
        doDiv.className = "do-text";
        dateDiv.className = "date";

        doDiv.append(document.createTextNode(doText));
        dateDiv.append(document.createTextNode(dateText));
        li.append(doDiv);
        li.append(dateDiv);

        const doListEl = document.getElementById("doList");
        doListEl.append(li);
    },
    delSchedule() {

    },
    updateSchedule() {

    }
};




/** 이벤트 처리 영역 S */
window.addEventListener("DOMContentLoaded", function() {
    const frmEl = document.getElementById("frm");
    frmEl.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        const doText = formData.get("do");
        const dateText = formData.get("date");

        toDoList.addSchedule(doText, dateText);
    });
});

/** 이벤트 처리 영역 E */