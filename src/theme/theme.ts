import { extendTheme } from "@chakra-ui/react";
import img1 from "../images/img1.jpg";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bgImage: `url(${img1})`,
                bgRepeat: "no-repeat",
                bgSize: "cover",
                color: "gray.800",
                height: "100vh",
                bgPosition: "center,top",
                fontSize: "5vw",
            },
        },
    },
});

export default theme;
