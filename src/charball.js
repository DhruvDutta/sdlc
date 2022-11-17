import './App.css';

function CharBall(props){
    return(
        <div className="ball">
            <div className="char">
                {props.char}
            </div>
          </div>
    )
}
export default CharBall;