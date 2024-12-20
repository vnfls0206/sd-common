import React, {forwardRef} from 'react';
import {Checkbox} from "@mui/material";
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import {CheckboxProps} from "@mui/material/Checkbox/Checkbox";

const CustomCheckBox = forwardRef((props: CheckboxProps, ref) => {

    if(props.disabled) {
        return null;
    }



    return (
        <Checkbox icon={<CheckBoxOutlineBlankSharpIcon/>}
                  checkedIcon={<CheckBoxSharpIcon/>}
                  size={'small'}
                  sx={{
                      color: '#818187',
                      '&.Mui-checked': {
                          color: '#38383dff',
                      },
                      '&.MuiCheckbox-indeterminate': {
                          color: '#38383dff',
                      }
                  }}
                  ref={ref && null}
                  {...props}
        />
    );
});

export default CustomCheckBox;