import { StyledLinkCards } from "@/Components/StyledLinkCards";
import Image from "next/image";
import { Text } from "@/Components/Text";

function Cards({
    img,
    path,
    title,
    description
}){
    return (
        <StyledLinkCards href={path} variant="bolds">
            <Image src={img}  width="80" height="80" alt={title}/>
            <h5>{title}</h5>
            <Text>{description}</Text>
        </StyledLinkCards>
    )
}

export default Cards;