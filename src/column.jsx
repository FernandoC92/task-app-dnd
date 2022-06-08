import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from './task';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px   
`;

export default class Column extends React.Component {
    render() {
       return (
       <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
            <TaskList 
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver} 
            >
                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
            {provided.placeholder}    
             </TaskList> 
            ) 
            }
           
          </Droppable>
       </Container>
       ) 
    }
}

// ! droppableId: Tem que ser único dentro do DragDropContext
// ! O Droppable espera uma função que retorna um componente React
// ! react-dnd não cria node para você, isso dar a liberdade de estilização, por isso passamos uma função dentro do Droppable
// ! provided é um objeto, propositos: 
// ! 1 - passar o droppableProps: você passará essa propriedade para o componente no qual você será possível move-lo
// ! 2- passar o innerRef={provided.innerRef}, pois é necessário para o react-dnd
// ! 3 - {provided.placeholder}  é um elemendo React que melhora o espaço disponivel no droppable durante o drag. Ele tem que ser passado como filho para o componente em que você designou como droppable