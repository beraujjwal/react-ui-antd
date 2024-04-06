import { ReactComponent as BonesIcon } from '../../assets/icons/bones.svg';
import { ReactComponent as FatIcon } from '../../assets/icons/fat.svg';
import { ReactComponent as ProteinIcon } from '../../assets/icons/protein.svg';
import { ReactComponent as WaterBalanceIcon } from '../../assets/icons/water.svg';


export const statistics = [
  {
    id: 1,
    name: 'protein',
    title: 'medical-dashboard.protein',
    color: 'success',
    Icon: ProteinIcon,
  },
  {
    id: 2,
    name: 'fat',
    title: 'medical-dashboard.fat',
    color: 'error',
    Icon: FatIcon,
  },
  {
    id: 3,
    name: 'bones',
    title: 'medical-dashboard.bones',
    color: 'primary',
    Icon: BonesIcon,
  },
  {
    id: 4,
    name: 'water',
    title: 'medical-dashboard.water',
    color: 'secondary',
    Icon: WaterBalanceIcon,
  },
];
