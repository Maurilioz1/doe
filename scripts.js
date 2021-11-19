const getBloodTypeName = (bloodId) => {
    if (bloodId === 'a1') {
        return 'A +';
    } else if (bloodId === 'a0') {
        return 'A -';
    } else if (bloodId === 'b1') {
        return 'B +';
    } else if (bloodId === 'b0') {
        return 'B -';
    } else if (bloodId === 'ab1') {
        return 'AB +';
    } else if (bloodId === 'ab0') {
        return 'AB -';
    } else if (bloodId === 'o1') {
        return 'O +';
    } else if (bloodId === 'o0') {
        return 'O -';
    }
}

const bloodTypes = [
    {
        id: 'a1',
        type: 'A +'
    },
    {
        id: 'a0',
        type: 'A -'
    },
    {
        id: 'b1',
        type: 'B +'
    },
    {
        id: 'b0',
        type: 'B -'
    },
    {
        id: 'ab1',
        type: 'AB +'
    },
    {
        id: 'ab0',
        type: 'AB -'
    },
    {
        id: 'o1',
        type: 'O +'
    },
    {
        id: 'o0',
        type: 'O -'
    }
];

var users = [];

var select = document.querySelector('select');
var ul = document.querySelector('ul');

var userName = document.querySelector('#name');
var email = document.querySelector('#email');
var bloodType = document.querySelector('#bloodType');

bloodTypes.map(bloodType => {
    var bloodTypeId = document.createTextNode(bloodType.id).nodeValue;
    var bloodTypeText = document.createTextNode(bloodType.type);

    var option = document.createElement('option');
    option.setAttribute('value', bloodTypeId);
    option.appendChild(bloodTypeText);

    select.appendChild(option);
});

const handleSubmit = () => {
    event.preventDefault();

    const newUser = {
        name: userName.value,
        email: email.value,
        bloodType: getBloodTypeName(bloodType.value),
    }

    users.push(newUser);

    var a = document.createElement('a');
    var li = document.createElement('li');
    var spanUserBloodType = document.createElement('span');
    var spanUserName = document.createElement('span');

    var bloodTypeText = document.createTextNode(newUser.bloodType);
    var userNameText = document.createTextNode(newUser.name);

    a.setAttribute('href', `mailto:${newUser.email}`)

    spanUserBloodType.appendChild(bloodTypeText);
    spanUserName.appendChild(userNameText);

    ul.appendChild(a);
    a.appendChild(li);
    li.appendChild(spanUserBloodType);
    li.appendChild(spanUserName);
}