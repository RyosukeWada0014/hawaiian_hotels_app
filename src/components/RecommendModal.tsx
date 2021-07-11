import { memo, VFC } from "react";
import {
    Button,
    Center,
    Flex,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const RecommendModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered >
            <ModalOverlay />
            <Center>
                <ModalContent p={3}>
                    <ModalBody>
                        <Flex align="center" justify="space-between">
                            <Text fontSize={{ base: "md", md: "md" }}>
                                あなたへのおすすめホテルはこちらです！
                            </Text>
                            <Button
                                colorScheme="blue"
                                fontSize="xl"
                                size="sm"
                                onClick={onClose}
                            >
                                ×
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Center>
        </Modal>
    );
});

export default RecommendModal;
