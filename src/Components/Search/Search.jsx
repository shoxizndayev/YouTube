import React from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import './Search.scss';


function Search(){
    return(
        <>
           <div className="search">
            <input className="searchInput" type="text" placeholder="Search" />
                <div className="search__icon">
                    <span>
                    <CameraAltIcon />
                    </span>
                    
                    <span>
                        <WidgetsRoundedIcon />
                    </span>

                    <span>
                    <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                    </span>
                    
                    <span>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </Stack>
                    </span>
                </div>
           </div>
            
        </>
    )
}

export default Search;