import React, { useEffect, useRef } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { AppButton } from '../../../common/buttons/AppButton';
import { AppRequireFullscreen } from '../../../common/requireFullscreenes/AppRequireFullscreen';
import { HeaderActionWrapper } from '../../Header.styles';

export const HeaderFullscreen = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    rootRef.current = document.getElementById('root');
  }, []);

  return (
    <AppRequireFullscreen component={rootRef}>
      {(isFullscreen) => (
        <HeaderActionWrapper>
          <AppButton
            type={isFullscreen ? 'ghost' : 'text'}
            icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
          />
        </HeaderActionWrapper>
      )}
    </AppRequireFullscreen>
  );
};
