import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import clsx from 'clsx';

const elevationMap = {
  elevated: 3,
  filled: 1,
  outlined: 0,
};

const MDCard = ({ variant = 'elevated', elevation, className, children, sx, ...props }) => (
  <Card
    variant={variant === 'outlined' ? 'outlined' : 'elevation'}
    elevation={elevation ?? elevationMap[variant] ?? 1}
    className={clsx('md-card', className)}
    sx={{
      borderRadius: (theme) => theme.shape.custom.large,
      backgroundColor:
        variant === 'filled'
          ? (theme) => theme.vars.palette.surface
          : (theme) => theme.vars.palette.surfaceContainer,
      border: variant === 'outlined' ? '1px solid rgba(255,255,255,0.08)' : 'none',
      ...sx,
    }}
    {...props}
  >
    {typeof children === 'string' ? <CardContent>{children}</CardContent> : children}
  </Card>
);

export default MDCard;
