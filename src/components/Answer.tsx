import { memo, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    content: string;
    nextId: string;
    select: (content: string, nextId: string) => void;
};

const Answer: VFC<Props> = memo((props) => {
    const { content, select, nextId } = props;
    
    return (
        <Button
            fontSize={{ base: "xs", md: "sm" }}
            colorScheme="blue"
            color="blue.500"
            border="1px"
            borderColor="blue.500"
            bg="#fff"
            p={1}
            onClick={() => select(content, nextId)}
            _hover={{ bg: "blue.500", color: "#fff" }}
            _focus={{ outline: 0, bg: "#fff" }}
        >
            {content}
        </Button>
    );
});

export default Answer;
