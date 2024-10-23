import "./style.css"
import { useState } from 'react'

// пропсы
// props = {value: '', }

export default function Square({ value, onSquareClick }) {

    return (<button className="square" onClick={onSquareClick}>{value}</button>);
}
