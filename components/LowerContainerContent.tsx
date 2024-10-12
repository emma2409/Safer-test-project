import DisplayListComp from "@/components/DisplayListComp";
import GalleryGrid from "@/components/GalleryGrid";


interface Props {
    selectedListName: string,
}

export default (props: Props) =>{

    return(
        <>
            <DisplayListComp
                selectedListName={props.selectedListName}
            />

        </>

    )
}
