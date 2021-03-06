import { LatestMessages } from 'interfaces';
import { getLocalHourFromDate, removeSecondsFromTime } from 'utils';
import { Avatar } from '../Avatar';
import * as S from './UserChip.styles';

export type UserChipProps = {
  name: string;
  description?: string;
  avatar?: string;
  lastMessage?: LatestMessages;
  onClick?: () => void;
  size?: 'small' | 'normal' | 'medium' | 'large';
  hasBorder?: boolean;
  instrument?: string;
}

export const UserChip = ({
  name,
  avatar,
  lastMessage,
  description,
  instrument,
  onClick,
  size,
  hasBorder = false,
}: UserChipProps) => (
  <S.Container size={size} onClick={onClick} hasBorder={hasBorder}>
    <Avatar
      instrument={instrument}
      size={size}
      src={avatar}
      hasBackground
    />
    <S.Divisor>
      <span>{name}</span>
      <p>{description ?? lastMessage?.text}</p>
    </S.Divisor>
    <S.Divisor isShort>
      <span>
        {lastMessage && removeSecondsFromTime(
          getLocalHourFromDate(
            new Date(lastMessage.createdAt).toISOString(),
          ),
        )}
      </span>
    </S.Divisor>
  </S.Container>
);
