import { memo, VFC } from "react";
import { Stack } from "@chakra-ui/react";

import Answer from "./Answer";
import { AnswerType } from "../types/answer";

type Props = {
    answers: Array<AnswerType>;
    select: (content: string, nextId: string) => void;
};

const AnswersList: VFC<Props> = memo((props) => {
    const { answers, select } = props;

    return (
        <Stack h="25%" justify="center" spacing={{ base: 1, md: 2 }} p={5}>
            {answers.map((answer, index) => (
                <Answer
                    select={select}
                    content={answer.content}
                    nextId={answer.nextId}
                    key={index.toString()}
                />
            ))}
        </Stack>
    );
});

export default AnswersList;
