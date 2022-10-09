//Importando Musica
import SoundOptionButton from '../assets/sounds/click02.wav'
import SoundLost from '../assets/sounds/gameover02.wav'
import SoundWin from '../assets/sounds/win01.wav'
import SoundRestart from '../assets/sounds/restart.wav'

//Variables de sonido
export const btn = new Howl({
    src: [SoundOptionButton]
});

export const lost = new Howl({
    src: [SoundLost]
});

export const win = new Howl({
    src: [SoundWin]
});

export const restartBtn = new Howl({
    src: [SoundRestart]
});

Howler.volume(0.5);