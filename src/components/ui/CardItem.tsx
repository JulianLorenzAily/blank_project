import React, { ReactNode } from 'react';
import { Card, Box, Typography, Stack, useTheme } from '@mui/material';

interface CardItemProps {
  title: string;
  description?: string;
  subtitle?: string;
  icon?: ReactNode;
  iconStyle?: React.CSSProperties & {
    boxStyle?: 'outlined' | 'filled';
  };
  iconContainerStyle?: React.CSSProperties;
  actionText?: string;
  onAction?: () => void;
  gradientBackground?: boolean;
  rightText?: string;
  rightTextColor?: string;
}

const CardItem: React.FC<CardItemProps> = ({ 
  title, 
  description,
  subtitle,
  icon,
  iconStyle,
  iconContainerStyle,
  actionText,
  onAction,
  gradientBackground = false,
  rightText,
  rightTextColor
}) => {
  const theme = useTheme();

  return (
    <Card 
      sx={{ 
        borderRadius: 4, 
        backgroundColor: '#121212',
        p: 2,
        position: 'relative',
        overflow: 'hidden',
        ...(gradientBackground && {
          background: 'linear-gradient(135deg, #121212 70%, rgba(48,227,161,0.2) 100%)',
        })
      }}
    >
      {gradientBackground && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(48,227,161,0.15) 0%, rgba(0,0,0,0) 70%)',
            zIndex: 0,
          }}
        />
      )}
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
        <Box>
          <Typography 
            variant="h6" 
            component="h2" 
            sx={{ 
              fontWeight: 500, 
              fontSize: '18px',
              mb: subtitle ? 1 : 0,
              lineHeight: 1.2
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontSize: '14px',
                opacity: 0.7 
              }}
            >
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              {description}
            </Typography>
          )}
        </Box>
        
        <Stack direction="row" alignItems="center" spacing={1}>
          {rightText && (
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 'bold',
                color: rightTextColor || 'text.primary',
                mr: 1 
              }}
            >
              {rightText}
            </Typography>
          )}
          
          {icon && (
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...iconContainerStyle
              }}
            >
              <Box 
                sx={{ 
                  color: theme.palette.primary.main,
                  display: 'flex',
                  ...iconStyle
                }}
              >
                {icon}
              </Box>
            </Box>
          )}
        </Stack>
      </Stack>
    </Card>
  );
};

export default CardItem; 