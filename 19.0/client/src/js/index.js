import "./form";
import "./submit";
import { initdb, getDb, postDb, deleteDb } from "./database";
import { fetchCards } from "./cards";
import { toggleForm, clearForm } from "./form";

import "../css/index.css";

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.deleteCard = (e) => {
    let id = parseInt(e.id);

    deleteDb(id);
    fetchCards();
}

window.editCard = (e) => {
    profileId = parseInt(e.dataset.id);

    let editName = e.dataset.name;
    let editEmail = e.dataset.email;
    let editPhone = e.dataset.phone;

    document.getElementById('name').value = editName;
    document.getElementById('email').value = editEmail;
    document.getElementById('phone').value = editPhone;

    form.style.display = 'block';

    submitBtnToUpdate = true;
}

window.addEventListener('load', function () {
    initdb();
    fetchCards();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});