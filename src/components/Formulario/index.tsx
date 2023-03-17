import { ITarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './Formulario.module.scss'
import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({ setTarefas }: Props) {

    const [tarefa, setTarefa] = useState("")
    const [tempo, setTempo] = useState('00:00')

    function adicionarTarefa(e: React.FormEvent) {
        e.preventDefault()
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }])
        setTarefa("")
        setTempo("00:00")
    }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor=""></label>
                <input
                    value={tarefa}
                    onChange={event => setTarefa(event.target.value)}
                    name='tarefa'
                    id="tarefa"
                    required
                    placeholder='O que você quer estudar ?'
                    type="text" />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor=""></label>
                <input
                    value={tempo}
                    onChange={event => setTempo(event.target.value)}
                    step="1"
                    name="tem"
                    id='tempo'
                    min="00:00:00"
                    max="01:30:00"
                    required
                    type="time" />
            </div>
            <Botao
                type="submit"
                texto='Adicionar'
            />
        </form>
    )
}


export default Formulario