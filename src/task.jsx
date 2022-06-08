import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen': 'white')};
    
    display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    isDragging={snapshot.isDragging}
                    >
                        <Handle {...provided.dragHandleProps}/>
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>

        )
    }
}
// ! {...provided.dragHandleProps} dar o controle do componente para a ação

// ! use ref ao invés de innerRef

// ! Snapshot: contém props que poderão ser usadas para a estilização durante o drag.
// ! Com isso vc poderá usar as props isDragging no componente definido como Draggable para passar a estilização personalizada 

/**
 * Draggable and dragHandle são o mesmo componente
 * dragHandle permiti controllar o elemento
 */