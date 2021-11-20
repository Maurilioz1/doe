const getBloodTypeName = (bloodId) => {
    switch (bloodId) {
        case 'a1':
            return 'A+';
        case 'a0':
            return 'A-';
        case 'b1':
            return 'B+';
        case 'b0':
            return 'B-';
        case 'ab1':
            return 'AB+';
        case 'ab0':
            return 'AB-';
        case 'o1':
            return 'O+';
        case 'o0':
            return 'O-';
        default:
            alert('Típo sanguíneo inexistente.')
    }
}

const validateEmail = (email) => {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}

function JSalert(){
	swal("Congrats!", ", Your account is created!", "success");
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

    option.classList.add('option');
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

    if (newUser.name === '' || newUser.email === '') {
        swal("Erro ao cadastrar!", "Verifique se todos os campos foram preenchidos!", "error");
    } else {
        if (!validateEmail(newUser.email)) {
            swal("E-mail inválido!", "Didite um e-mail válido para prosseguir com a doação!", "error");
        } else {
            users.push(newUser);

            var bloodTypeText = document.createTextNode(newUser.bloodType);
            var userNameText = document.createTextNode(newUser.name);

            var a = document.createElement('a');
            var li = document.createElement('li');
            var spanUserBloodType = document.createElement('span');
            var spanUserName = document.createElement('span');

            a.setAttribute('href', `mailto:${newUser.email}`);
            a.classList.add('a');

            li.classList.add('li');

            spanUserBloodType.classList.add('bloodType');
            spanUserBloodType.appendChild(bloodTypeText);

            spanUserName.classList.add('userName');
            spanUserName.appendChild(userNameText);

            ul.appendChild(a);
            a.appendChild(li);
            li.appendChild(spanUserBloodType);
            li.appendChild(spanUserName);

            userName.value = '';
            email.value = '';
            bloodType.value = 'a1';

            swal("Obrigado!", "Agora vidas podem ser salvas graças a você!", "success");
        }
    }
}