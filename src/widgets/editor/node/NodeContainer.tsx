import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Node } from '../../../shared/types/editor';
import './NodeContainer.scss';
import TextEditor from './text-editor/TextEditor';

const NodeContainer = ({ node }: { node?: Node }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } = useSortable({ id: node?.id || 'default-id' },);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`node-container${isHovered ? ' node-container_hover' : ''}`}
        >
            {isHovered && (node?.type === 'none' || node?.type === undefined) && (
                <img src='./icons/plus.svg' width="15px" className='node-container__icon' />
            )}
            {isHovered && (node?.type === 'none' || node?.type === undefined) && (
                <div className='node-container__line'></div>
            )}
            <div className={`node-container__editor${isHovered ? ' node-container__editor_hover' : ''}`}>
                <TextEditor content={node?.content} styles={node?.styles} />
            </div>
            {/* Элемент-ручка для перетаскивания */}
            <div
                ref={setActivatorNodeRef}
                {...listeners}
                className="node-container__handle"
            >
                <img src="./icons/draggable.svg" alt="Drag Handle" width="15px" />
            </div>
        </div>
    );
};

export default NodeContainer;
