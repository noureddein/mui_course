import { Box } from "@mui/material";

/*
    Box:
        - The Box component serves as a wrapper component 
        for most css utility needs

        - The box component in its most basic form is used as 
        a replacement for the div tag 

        - The Box component accept a component prop that change the 
        tag element

        * - Why we not using a div tag ?
            - Because the Box component accept a prop called sx which 
            can be used to define a custom style that has access to the
            theme.

            - The box component supports what we called MUI system
            system properties, thats mean we can use a lot of css 
            properties as a prop directly on the component.

            - visit => https://mui.com/system/properties/

        - If we used regular inline style on a normal html tag, we will 
        not have the access to the theme nor specify the hover effect 
        as below.

*/

const MuiLayout = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    height: "100px",
                    width: "150px",
                    padding: "16px",
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "primary.light",
                    },
                }}
            >
                Code evolution
            </Box>

            <Box
                display="flex"
                height="100px"
                width="150px"
                bgcolor="success.light"
                p={2} // p: padding, 2 = 16px
                border={2}
                mt={2}
                borderColor='primary.main'
            ></Box>
        </>
    );
};

export default MuiLayout;
