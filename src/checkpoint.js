import './App.css';

function Checkpoint(props){
    return(
    <div className="checkpoint">
        <div className="col-sm-3 col-8">
            <div className="subdate text-warning">
            {props.date}
            </div>
            <p className="py-3">
            {props.para}
            </p>
        </div>
    </div>
    )
}
export default Checkpoint;