



function StyleButton(props){

    const{type, label, icon} = props

    return(

        <button className={type}> {icon}{label}  </button>
        
    );

};

export default StyleButton;