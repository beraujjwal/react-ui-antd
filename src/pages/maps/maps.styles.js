import styled from 'styled-components';
import { AppCard } from '../../components/common/cards/AppCard';

export const MapsCard = styled(AppCard)`
  height: 70vh;
  overflow-y: auto;

  .leaflet-container {
    z-index: 0;
  }
`;
