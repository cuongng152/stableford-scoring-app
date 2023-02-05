import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function SecondLayerLeft(props) {
    const {score} = props || {}
    return (
        <div style={{display: "flex", borderColor: "red", borderRadius: "5px", height: "100%"}}>
            <Avatar {...stringAvatar('Charlie Nguyen')} style={{marginLeft: "15px"}}/>
            <Typography style={{alignSelf: "center", marginLeft: "10px"}}>
                <b>Charlie Nguyen</b> [21] -
                Stroke: {score}<b> [E]</b>
            </Typography>
        </div>
    )
}


function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}