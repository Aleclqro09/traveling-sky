// ==========================================
// TRAVELING SKY - FUNCIONALIDADES
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // FORMULARIO DE CONTACTO
    // ==========================================

   const formulario = document.querySelector("#contacto form");

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {
            evento.preventDefault();
            alert("Por favor, completa todos los datos.");
            return;
        }

        if (!correo.includes("@")) {
            evento.preventDefault();
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
    });
    }


    // ==========================================
    // NAVEGACIÓN SUAVE
    // ==========================================

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            const destino = this.getAttribute("href");

            if (destino && destino.startsWith("#")) {

                evento.preventDefault();

                const seccion = document.querySelector(destino);

                if (seccion) {

                    seccion.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }

        });

    });

});


// ==========================================
// INFORMACIÓN DE SERVICIOS
// ==========================================

function mostrarServicio(servicio) {
    const selector = document.getElementById("servicio-reserva");
    const formulario = document.getElementById("reserva");

    const opciones = {
        vuelos: "Vuelo",
        hospedaje: "Hospedaje",
        paquetes: "Paquete turístico"
    };

    if (selector) {
        selector.value = opciones[servicio] || "";
    }

    if (formulario) {
        formulario.scrollIntoView({ behavior: "smooth" });
    }
}


// ==========================================
// SELECCIONAR DESTINO
// ==========================================

function seleccionarDestino(destino) {

    alert(
        "🌎 Has seleccionado: " + destino + "\n\n" +
        "¡Excelente elección!\n" +
        "Si deseas recibir información sobre este destino, " +
        "puedes escribirnos desde nuestro formulario de contacto."
    );

    // Llevar al usuario al formulario
    const contacto = document.getElementById("contacto");

    if (contacto) {

        contacto.scrollIntoView({
            behavior: "smooth"
        });

    }

}
// ==========================================
// FORMULARIO DE SOLICITUD DE VIAJE
// ==========================================

const formularioReserva = document.getElementById("formulario-reserva");

if (formularioReserva) {
    formularioReserva.addEventListener("submit", function (evento) {
        const destino = document.getElementById("destino-reserva").value;
        const servicio = document.getElementById("servicio-reserva").value;
        const fecha = document.getElementById("fecha-reserva").value;
        const viajeros = document.getElementById("viajeros").value;
        const correo = document.getElementById("correo-reserva").value.trim();

        if (!destino || !servicio || !fecha || !viajeros || !correo) {
            evento.preventDefault();
            alert("Por favor, completa todos los datos de la solicitud.");
        }
    });
}

