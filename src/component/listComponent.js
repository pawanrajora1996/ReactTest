import ListLayout from "./listLayout"


const staticList = [

    {
        id: "1",
        imgURL:"https://cdn.pixabay.com/photo/2020/12/26/13/19/christmas-background-5861438_960_720.jpg",
        heading: "Heading one",
        description: "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your"
    },


    {
        id: "2",
        imgURL:"https://cdn.pixabay.com/photo/2012/04/13/01/23/moon-31665_960_720.png",
        heading: "Heading two",
        description: "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your"
    },


    {
        id: "3",
        imgURL:"https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg",
        heading: "Heading three",
        description: "Lorem Ipsum doesn exist because people think the content is meaningless window dressing, only there to be decorated by designers who can be bothered to read. Lorem Ipsum exists because words are powerful. If you fill up your"
    }

];


function ListDetails(){

    function RenderList(data){
        const {id, imgURL, heading, description}=data;

        return(

            <ListLayout
            key={id}
            imgURL={imgURL}
            heading={heading}
            description={description}
            />
        );
    };

    return(
        <ul>
            {
                staticList.map(RenderList)
            }
        </ul>
    );
};

export default ListDetails;