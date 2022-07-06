import { createTheme } from '@rneui/themed';

const theme = createTheme({
    Button: {
        borderRadius: 20,
        buttonStyle: {
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 10,
            padding: 10
        },
        containerStyle: {},
    },
    Card: {
        borderRadius: 7,
        width: '100%',
    }
});

export default theme;