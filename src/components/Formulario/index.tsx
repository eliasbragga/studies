import React from 'react'
import Botao from '../Botao'
import style from './Formulario.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    adicionarTarefa(e: React.FormEvent) {
        e.preventDefault()
        console.log('this.state', this.state)
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input 
                    value={this.state.tarefa}
                    onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                    name='tarefa' 
                    id="tarefa" 
                    required 
                    placeholder='O que você quer estudar ?' 
                    type="text" />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor=""></label>
                    <input 
                    value={this.state.tempo} 
                    onChange={event => this.setState({...this.state, tempo: event.target.value})} 
                    step="1" 
                    name="tem" 
                    id='tempo' 
                    min="00:00:00" 
                    max="01:30:00" 
                    required 
                    type="time" />
                </div>
                <Botao 
                    texto='Adicionar'
                />
            </form>
        )
    }
}

export default Formulario