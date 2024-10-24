import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import './index.scss';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    border: 0,
    borderRadius: 0,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

const handleLeftAlignClick = () => {};
const handleCenterAlignClick = () => {};
const handleRightAlignClick = () => {};
const handleJustifyAlignClick = () => {};
const handleBoldClick = () => {};
const handleStrikethroughClick = () => {};
const handleUnderlinedClick = () => {};
const handleItalicClick = () => {};
const handleSizeClick = () => {};
const handleListClick = () => {};

const TextFormattingToolbar = () => {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper className="toolbar-paper">
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          className="toggle-button-group"
        >
          <ToggleButton value="left" aria-label="left aligned" onClick={handleLeftAlignClick} className="toggle-button">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered" onClick={handleCenterAlignClick} className="toggle-button">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned" onClick={handleRightAlignClick} className="toggle-button">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" onClick={handleJustifyAlignClick} className="toggle-button">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
          className="toggle-button-group"
        >
          <ToggleButton value="bold" aria-label="bold" onClick={handleBoldClick} className="toggle-button">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="strikethrough" aria-label="strikethrough" onClick={handleStrikethroughClick} className="toggle-button">
            <FormatStrikethroughIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined" onClick={handleUnderlinedClick} className="toggle-button">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic" onClick={handleItalicClick} className="toggle-button">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="size" aria-label="size" onClick={handleSizeClick} className="toggle-button">
            <FormatSizeIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list" onClick={handleListClick} className="toggle-button">
            <FormatListBulletedIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
};

export default TextFormattingToolbar;