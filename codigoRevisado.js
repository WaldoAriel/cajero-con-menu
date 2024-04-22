let usuario;
let saldoCuenta = 0;
let mostrarMenu = true;

//Ingresa nombre
function nombreUsuario() {
    usuario = prompt(`👤 Por favor, ingresá tu nombre de usuario\n`);
    if (usuario === '' || usuario.trim() === '') {
        usuario = 'Usuario'
    }
}

//Menu
function menuSwitch() {
    let menu = parseInt(prompt(`Bienvenido ${usuario}!\n🔽 Seleccioná una opción, presionando:\n\n1️⃣  Para realizar un depósito en tu cuenta\n2️⃣  Para consultar saldo\n3️⃣  Para realizar una extracción\n4️⃣  Para salir\n`));
    switch (menu) {
        case 1:
            ingresarSaldo();
            break;
        case 2:
            alert(`${usuario}, el saldo actual de tu cuenta es de $${saldoCuenta.toFixed(2)}.`);
            break;
        case 3:
            retirarDinero();
            break;
        case 4:
            salir();
            return false;
        default:
            alert('⚠ La opción seleccionada es inválida.\n\nPor favor, seleccioná una de las opciones indicadas.');
    }
    return true;
}


//Ingresa dinero
function ingresarSaldo() {
    let ingreso = parseFloat(prompt(`${usuario}, tu saldo es de $${saldoCuenta.toFixed(2)}.\n\nCuánto dinero deseas ingresar a tu cuenta?\n`));
    while (isNaN(ingreso) || ingreso <= 0) {
        ingreso = parseFloat(prompt(`❌ Ingresaste un monto inválido\n\nPor favor, intentalo nuevamente.\n`));
    }
    saldoCuenta += ingreso;
    alert(`✔ Operación exitosa!.\n\n${usuario}, ingresaste $${ingreso.toFixed(2)} a tu cuenta.\n\nTu saldo actual es de $${saldoCuenta.toFixed(2)}.`);
}

//Retira dinero
function retirarDinero() {
    if (saldoCuenta === 0) {
        alert(`❌ No esposible realizar una extracción\n\n${usuario}, ya no tenés saldo disponible en tu cuenta.\n\nVolvé el próximo mes, luego de recibir tu sueldo 😎`);
        menuSwitch();
        return
    }
    let egreso = parseFloat(prompt(`${usuario}, tu saldo es de $${saldoCuenta.toFixed(2)}. Cuánto dinero deseas retirar de tu cuenta?\n`));
    while (isNaN(egreso) || egreso <= 0 || egreso > saldoCuenta) {
        if (isNaN(egreso) || egreso <= 0) {
            egreso = parseFloat(prompt(`❌ Ingresaste un monto inválido\n\nPor favor, intentalo nuevamente.\n`));
        } else {
            egreso = parseFloat(prompt(`❌ No se pudo realizar la operación.\n\nEl saldo de tu cuenta es insuficiente.\n\nTu saldo disponible es de $${saldoCuenta.toFixed(2)}. Ingresá un monto que no exceda los $${saldoCuenta.toFixed(2)}.\n`));
        }
    }
    saldoCuenta -= egreso;
    alert(`✔ Operación exitosa!.\n\n${usuario}, realizaste un retiro de $${egreso.toFixed(2)} de tu cuenta.\n\nEn tu cuenta quedan disponibles: $${saldoCuenta.toFixed(2)}.`);
}

//Salir
function salir() {
    alert(`${usuario}, gracias por usar nuestro servicio.\n\n📎 Recordá retirar tu tarjeta`);
}


nombreUsuario();
do {
    mostrarMenu = menuSwitch();
} while (mostrarMenu);


