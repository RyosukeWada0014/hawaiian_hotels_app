import { memo, useCallback, useEffect, useState, VFC } from "react";
import { ChakraProvider, useDisclosure, Box } from "@chakra-ui/react";

import theme from "./theme/theme";
import dataset from "./dataset";
import AnswersList from "./components/AnswersList";
import ChatList from "./components/ChatList";
import RecommendModal from "./components/RecommendModal";
import { AnswerType } from "./types/answer";
import { ChatType } from "./types/chat";

type nextQuestionIdType = keyof typeof dataset;

const App: VFC = memo(() => {
    const [chatAnswers, setChatAnswers] = useState<Array<AnswerType>>([]);
    const [chatContents, setChatContents] = useState<Array<ChatType>>([]);
    const [currentId, setCurrentId] = useState("init");

    const { isOpen, onOpen, onClose } = useDisclosure();

    //既存のチャットの配列に、新規チャットを追加
    const addChats = (chat: ChatType) => {
        setChatContents((prevChats) => {
            return [...prevChats, chat];
        });
    };

    //選択されたIDから、次のチャットのテキストと回答を表示する
    const displayNextQuestion = (nextQuestionId: nextQuestionIdType) => {
        addChats({
            text: dataset[nextQuestionId].question,
            type: "question",
        });
        setChatAnswers(dataset[nextQuestionId].answers);
        setCurrentId(nextQuestionId);
    };

    //選択された回答とそのIDにより、次のアクションを行う
    const selectAnswer = useCallback(
        (selectedAnswer, nextQuestionId) => {
            switch (true) {
                case nextQuestionId === "init":
                    displayNextQuestion(nextQuestionId);
                    break;
                case /^https:*/.test(nextQuestionId):
                    const a = document.createElement("a");
                    a.setAttribute("href", nextQuestionId);
                    a.setAttribute("target", "_blank");
                    onOpen();
                    setTimeout(() => a.click(), 1500);
                    displayNextQuestion("init");
                    break;
                case selectedAnswer === "戻る":
                    setTimeout(() => displayNextQuestion(nextQuestionId), 700);
                    break;
                default:
                    addChats({ text: selectedAnswer, type: "answer" });
                    setTimeout(() => displayNextQuestion(nextQuestionId), 700);
                    break;
            }
        },
        [displayNextQuestion, chatContents]
    );

    //マウントが完了した際に、最初の質問と回答を設定する
    useEffect(() => {
        selectAnswer("", currentId);
    }, []);

    //最新のチャットが常時表示されるよう自動スクロール
    useEffect(() => {
        const scrollArea = document.getElementById("scroll-area");
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
        }
    });

    return (
        <ChakraProvider theme={theme}>
            <Box
                bg="#fff"
                border="1px"
                borderColor="gray.800"
                borderRadius="lg"
                h="clamp(568px, 90vh, 960px)"
                w="clamp(320px, 50vw, 560px)"
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%,-50%)"
            >
                <ChatList chats={chatContents} />
                <AnswersList select={selectAnswer} answers={chatAnswers} />
            </Box>
            <RecommendModal isOpen={isOpen} onClose={onClose} />
        </ChakraProvider>
    );
});

export default App;
