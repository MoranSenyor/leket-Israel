import { Box, CardContent, Typography, Grid, ToggleButton, ToggleButtonGroup } from "@mui/material"
import { KeyboardArrowDown } from '@mui/icons-material';
import ExpandableMenu from "./ExpandableMenu";
import { useState } from "react";
// assets
import carrotImg from "./assets/images/Vegetables/CarrotIcon.png";
import cucumberImg from "./assets/images/Vegetables/CucumberIcon.png";
import pepperImg from "./assets/images/Vegetables/PapperIcon.png";
import tomatoImg from "./assets/images/Vegetables/TomatoIcon.png";

const FilterCrop = ({ cardText, imageStyle, cropKind, moreCropKinds, setCropKind, setMoreCropKinds }) => {
    const [rotateArrow, setRotateArrow] = useState(false);
    
    const handleCropSelection = (e, crop) => { setCropKind(crop); }

    const cropToggleBtn = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 80,
        borderRadius: '100px',
        // backgroundColor: 'white',
        boxShadow:'1px 1px 10px 1px #d4d4d4'
    };

    const toggleBtnText = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
    };

    const displayTag = <CardContent>
        <Box display="flex" flexDirection='row'>
            <KeyboardArrowDown style={{ color: "green", rotate: rotateArrow ? '180deg' : '0deg' }} sx={imageStyle} />
            <div>
                <Typography component="div" variant="h6" fontSize='14px' sx={cardText}>עוד סוגי יבול</Typography>
                <Typography component="div" variant="h6" fontSize='14px' fontWeight="bold" sx={cardText}>{moreCropKinds}</Typography>
            </div>
        </Box>
    </CardContent>

    return (
        <Box display="flex" flexDirection='column'>
            <Typography variant="h5" fontSize='20px' fontWeight="bold" sx={cardText}>מסנן סוג יבול</Typography>
            <Grid container direction="row" justifyContent="flex-end" alignItems="center" columnGap={2} marginTop="1%">
                <Box display="flex" flexDirection='row'>
                    <ExpandableMenu items={['חציל', 'קיווי', 'אבטיח', 'תות', 'אפרסמון']} displayTag={displayTag} cropKind={cropKind}
                        setCropKind={setCropKind} setOption={setMoreCropKinds} rotateArrow={rotateArrow} setRotateArrow={setRotateArrow} />
                </Box>
                {/* TODO: Plan is when a crop hs selected from the toggle button group, it will be added to the items which is shown above */}
                <ToggleButtonGroup sx={{
                        display: "grid",
                        gridTemplateColumns: "auto auto auto auto",
                        gridGap: "15px",
                        padding: "10px",
                    }} value={cropKind} onChange={handleCropSelection} color="success">
                    <ToggleButton value="גזר" sx={cropToggleBtn}>
                        <CardContent>
                            <Box component="img" sx={imageStyle} alt="" src={carrotImg} />
                            <Typography component="div" variant="h6" fontSize='16px' sx={toggleBtnText}>גזר</Typography>
                        </CardContent>
                    </ToggleButton>
                    <ToggleButton value="גמבה" sx={cropToggleBtn}>
                        <CardContent>
                            <Box component="img" sx={imageStyle} alt="" src={pepperImg} />
                            <Typography component="div" variant="h6" fontSize='16px' sx={toggleBtnText}>גמבה</Typography>
                        </CardContent>
                    </ToggleButton>
                    <ToggleButton value="מלפפון" sx={cropToggleBtn}>
                        <CardContent>
                            <Box component="img" sx={imageStyle} alt="" src={cucumberImg} />
                            <Typography component="div" variant="h6" fontSize='16px' sx={toggleBtnText}>מלפפון</Typography>
                        </CardContent>
                    </ToggleButton>
                    <ToggleButton value="עגבניה" sx={cropToggleBtn}>
                        <CardContent>
                            <Box component="img" sx={imageStyle} alt="" src={tomatoImg} />
                            <Typography component="div" variant="h6" fontSize='16px' sx={toggleBtnText}>עגבניה</Typography>
                        </CardContent>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Box>
    )
}

export default FilterCrop;
