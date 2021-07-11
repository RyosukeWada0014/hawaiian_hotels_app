import { memo, VFC } from "react";
import { List } from "@chakra-ui/react";

import Chat from "./Chat";
import { ChatType } from "../types/chat";

type Props = {
    chats: Array<ChatType>;
};

const Chats: VFC<Props> = memo((props) => {
    const { chats } = props;

    return (
        <List id="scroll-area" overflow="auto" h="75%" spacing={1} p={5}>
            {chats.map((chat, index) => (
                <Chat
                    text={chat.text}
                    type={chat.type}
                    key={index.toString()}
                />
            ))}
        </List>
    );
});

export default Chats;
