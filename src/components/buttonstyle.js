const MyButton = ({text,fontsize}) => {
    return ( 
    <div className="mybutton" style={{fontsize:{fontsize},backgroundColor:"#008334",color:"#ffff"}}>
        {text}
    </div> );
}
 
export default MyButton;