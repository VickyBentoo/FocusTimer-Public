import state from './state.js'

export function toggleRunning() {
    document.documentElement.classList.toggle('running')
    /*state.isRunning = !state.isRunning*/
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function set() {}

export function toggleMusic() {
    state.isMusic = document.documentElement.classList.toggle('music-on')
}