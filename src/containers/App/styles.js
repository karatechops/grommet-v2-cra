import styled from 'styled-components';
import Grommet from 'grommet/components/Grommet';

export const StyledApp = styled(Grommet)`
  min-height: 100vh;
  min-width: 100vw;

  & > div {
    min-height: 100vh;
  }
`;
