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

    if (servicio === "vuelos") {

        alert(
            "✈️ RESERVA DE VUELOS\n\n" +
            "Traveling Sky ofrece opciones de vuelos " +
            "nacionales e internacionales.\n\n" +
            "Puedes contactarnos para recibir información " +
            "sobre tu próximo viaje."
        );

    }

    else if (servicio === "hospedaje") {

        alert(
            "🏨 HOSPEDAJE\n\n" +
            "Te ayudamos a encontrar opciones de alojamiento " +
            "para disfrutar tu viaje con comodidad."
        );

    }

    else if (servicio === "paquetes") {

        alert(
            "🌎 PAQUETES TURÍSTICOS\n\n" +
            "Encuentra opciones de paquetes turísticos " +
            "nacionales e internacionales.\n\n" +
            "¡Cuéntanos qué destino quieres conocer!"
        );

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

