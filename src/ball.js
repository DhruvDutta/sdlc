import './App.css';

function Ball(props){
    return(
        <div className="ball">
        <div className="ballhead text-warning">
          {props.head}
        </div>
        <div className="para">
          {props.para}
        </div>
      </div>
    )
}
export default Ball;