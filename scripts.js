const bloodTypes = [
    {
        id: 'a1',
        type: 'A+'
    },
    {
        id: 'a0',
        type: 'A-'
    },
    {
        id: 'b1',
        type: 'B+'
    },
    {
        id: 'b0',
        type: 'B-'
    },
    {
        id: 'ab1',
        type: 'AB+'
    },
    {
        id: 'ab0',
        type: 'AB-'
    },
    {
        id: 'o1',
        type: 'O+'
    },
    {
        id: 'o0',
        type: 'O-'
    }
];

const users = [
    {
        name: 'Maurilio Lucena',
        email: 'maurilioz1@hotmail.com',
        bloodType: 'A+'
    },
    {
        name: 'Lucas Paulino',
        email: 'lucas@hotmail.com',
        bloodType: 'O-'
    },
    {
        name: 'Thalys Melicio',
        email: 'thalys@hotmail.com',
        bloodType: 'AB+'
    },
]

var select = document.querySelector('select');
var ul = document.querySelector('ul');

users.map(user => {
    var userName = document.createTextNode(user.name);
    var userEmail = document.createTextNode(user.email).nodeValue;
    var userBloodType = document.createTextNode(`( ${user.bloodType} )`);

    var a = document.createElement('a');
    var li = document.createElement('li');
    var spanUserBloodType = document.createElement('span');
    spanUserBloodType.appendChild(userBloodType);
    var spanUserName = document.createElement('span');
    spanUserName.appendChild(userName);

    ul.appendChild(a);
    a.appendChild(li);
    li.appendChild(spanUserBloodType);
    li.appendChild(spanUserName);

    console.log(li);
})

bloodTypes.map(bloodType => {
    var bloodTypeId = document.createTextNode(bloodType.id).nodeValue;
    var bloodTypeText = document.createTextNode(bloodType.type);

    var option = document.createElement('option');
    option.setAttribute('value', bloodTypeId);
    option.appendChild(bloodTypeText);

    select.appendChild(option);
});