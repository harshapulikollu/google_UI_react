export default function AutoCompleteModal(props) {
    console.log("Auto complete modal ", props);
    if(!props.open){
        return null;
    }
    return <div style={{backgroundColor:'white'}}>{[1,2,3,4,5,6,7,8,9,0].map(itm =>{
        return <div>{props.input}</div>
    })}</div>
}

//style={{height: '300px', backgroundColor:'white',  position: 'absolute', zIndex: 1, top: '100%',
// left: 0,
// right: 0}}