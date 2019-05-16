//活版印刷
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';

/**
 * textAlign：文本对齐
        <Box textAlign="left">…
        <Box textAlign="center">…
        <Box textAlign="right">…

 * fontWeight：字体粗细
        <Box fontWeight="fontWeightLight">…
        <Box fontWeight="fontWeightRegular">…
        <Box fontWeight="fontWeightMedium">…
        <Box fontWeight={600}>…
 
 * fontSize：字体大小
        <Box fontSize="fontSize">…
        <Box fontSize="h6.fontSize">…
        <Box fontSize={16}>…
 
 * fontFamily：字体系列
        <Box fontFamily="fontFamily">…
        <Box fontFamily="Monospace">…

 * boxShadow：阴影
        <Box boxShadow={0}>…
        <Box boxShadow={1}>…
        <Box boxShadow={2}>…
        <Box boxShadow={3}>…

 * Border: 边框
        <Box border={1}>…
        <Box borderTop={1}>…
        <Box borderRight={1}>…
        <Box borderBottom={1}>…
        <Box borderLeft={1}>…
 
 */
function TextAlignment() {
  return (
      <div>
          <p><b>排版：Typography</b> </p>
          <Typography component="div">
            <Box textAlign="justify" m={1}>
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                Donec sed odio operae, eu vulputate felis rhoncus.
            </Box>
            <Box textAlign="left" m={1}>
                Left aligned text.
            </Box>
            <Box textAlign="center" m={1}>
                Center aligned text.
            </Box>
            <Box textAlign="right" m={1}>
                Right aligned text.
            </Box>
            </Typography>

            <p><b>位置：Position[貌似未起效？]</b></p>
            <Typography
                component="div"
                variant="body1"
                style={{ height: 100, width: '100%', position: 'relative' }}
                >
                {/** 背景色，颜色未起效？*/}
                <Box
                    bgcolor="grey.700"
                    color="white"
                    p={2}
                    position="absolute"
                    top={40}
                    left="40%"
                    zIndex="tooltip"
                >
                z-index tooltip
                </Box>
                {/** 下面的Box为啥没出来？*/}
                <Box
                    bgcolor="background.paper"
                    color="text.primary"
                    p={2}
                    position="absolute"
                    top={0}
                    left="43%"
                    zIndex="modal"
                >
                z-index modal
                </Box>
            </Typography>
      </div>
    
  );
}

export default TextAlignment;

