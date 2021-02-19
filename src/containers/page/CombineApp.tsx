import { Typography } from '@material-ui/core';
import React from 'react';

const CombineApp:React.FC = () => {
  const x = 'jpeg';

  return (
    <div>
      <Typography variant="h6">
        ドラサーチでこころを検索しよう
      </Typography>

      {x}
    </div>
  );
};

export default CombineApp;
