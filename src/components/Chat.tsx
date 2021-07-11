import { memo, VFC } from "react";
import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

import avatar1 from "../images/avatar1.jpeg";
import avatar2 from "../images/avatar2.jpeg";
import { ChatType } from "../types/chat";

const Chat: VFC<ChatType> = memo((props) => {
    const { text, type } = props;

    //questionかanswerかによって、アバター画像と配置を変更する
    const isQuestion = type === "question";
    const direction = isQuestion ? "row" : "row-reverse";
    const avatarImage = isQuestion ? avatar1 : avatar2;

    return (
        <Flex py={1} align="center" direction={direction}>
            <Avatar
                border="1px"
                mx={2}
                h={{ base: "36px", md: "48px" }}
                w={{ base: "36px", md: "48px" }}
                src={avatarImage}
            />
            <Box>
                <Text
                    fontSize={{ base: "xs", md: "md" }}
                    borderRadius="lg"
                    border="1px"
                    borderColor="blue.500"
                    p={2}
                >
                    {text}
                </Text>
            </Box>
        </Flex>
    );
});

export default Chat;
