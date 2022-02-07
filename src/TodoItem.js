import Toggle from "./Toggle";


const TodoItem = () => {
    return (
        <div>
            <div>
                <p>Buying vegetables</p>
                <Toggle />
            </div>
            <div>
                <p>Going to the GYM</p>
                <Toggle />
            </div>
            <div>
                <p>Clean</p>
                <Toggle />
            </div>
        </div>
    )
}

export default TodoItem; 