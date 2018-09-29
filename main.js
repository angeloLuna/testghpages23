const btn = document.getElementById('btn-submit');
const input1 = document.getElementById('jugador1');
const input2 = document.getElementById('jugador2');
const resultado = document.getElementById('resultado')

const jugar = () =>{
	event.preventDefault()

	let jugador1 = input1.value
	let jugador2 = input2.value
	let res = ""

	if (jugador1 === "papel") {
		if (jugador2 === "piedra") {
			res = `Gana el jugador 1`
		}else if(jugador2 === "papel"){
			res = `Empate`
		}else if (jugador2 === "tijera") {
			res = `Gana el jugador 2`
		}
	}else if (jugador1 === "piedra") {
		if (jugador2 === "piedra") {
			res = `Empate`
		}else if(jugador2 === "papel"){
			res = `Gana el jugador 2`
		}else if (jugador2 === "tijera") {
			res = `Gana el jugador 1`
		}
	}else if(jugador1 === "tijera"){
		if (jugador2 === "piedra") {
			res = `Gana el jugador 2`
		}else if(jugador2 === "papel"){
			res = `Gana el jugador 1`
		}else if (jugador2 === "tijera") {
			res = `Empate`
		}else{
			
		}
	}

	resultado.innerHTML = res

}

const validar = () => {
	let x = input1.value 
	let y = input2.value
	let validate = false
	if (x === "piedra" || x === "papel" || x === "tijera" ) {
		if (y === "piedra" || y === "papel" || y === "tijera" ) {
			validate = true
			jugar()
		}
	}
	if (validate === false) {
		alert(`Los jugadores deben ingresar "Piedra o papel o tijera"`)
	}
}

btn.addEventListener('click', validar)





