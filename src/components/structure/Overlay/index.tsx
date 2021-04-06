import { User } from 'contexts';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import theme from 'styles/theme';
import { Avatar } from '../Avatar';
import * as S from './Overlay.styles';
import { optionsOverlay } from './Overlay.mock';

export type OverlayProps = {
  show: boolean;
  user?: User;
  handleCloseOverlay: () => void;
}

export const Overlay = ({ show, user, handleCloseOverlay }: OverlayProps) => (
  <S.Wrapper show={show}>
    <S.Header>
      <S.ProfileContent>
        <Avatar src={user?.avatar} size="small" hasBackground={!user?.avatar} />
        <span>{user?.name}</span>
      </S.ProfileContent>

      <FiX color={theme.colors.primary} size={22} onClick={handleCloseOverlay} />
    </S.Header>

    <S.Content>
      {optionsOverlay.map(opt => (
        <S.Option
          onClick={handleCloseOverlay}
          key={opt.name}
          as={opt.isOut ? 'button' : Link}
          to={opt.link!}
        >
          {opt.name}
        </S.Option>
      ))}
    </S.Content>
  </S.Wrapper>
);