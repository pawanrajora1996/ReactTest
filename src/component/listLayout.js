import StyleButton from './styleButton';
import { FaChrome } from "react-icons/fa";


function ListLayout(props) {
    const { imgURL, heading, description } = props;
    return(


        

        <li className="list_design">
            <div className="list_design_img">
                <img src={imgURL} />
            </div>

            <div className="list_design_text">
                <h2>{heading}<FaChrome/></h2>
                <p>{description}</p>

                <div className='cover_button'>
                <div className="button_style">
                    <StyleButton type="normal" icon={<FaChrome/>} label="white" />
                    <StyleButton type="primary" label="blue" />
                    <StyleButton type="danger" label="red" />
                </div>
            </div>
            </div>
        </li>


    );
}

export default ListLayout;