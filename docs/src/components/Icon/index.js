import Icon from './Icon';
import Paths from './Icon.paths';

Icon.Types = Object.keys(Paths).reduce((acc, cur) => {acc[cur] = cur; return acc;}, {});

export default Icon;