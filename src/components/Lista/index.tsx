import { ITarefa } from '../../types/tarefa'
import Item from './item'
import style from './Lista.module.scss'

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionadaI: ITarefa) =>void
}

function Lista({tarefas, selecionaTarefa} :Props ) {
    
    return (
        <aside className={style.listaTarefas}>
            <h1 >Estudos do dia</h1>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista