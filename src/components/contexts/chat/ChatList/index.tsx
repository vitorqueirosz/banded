import { TextField } from 'components/form';
import { UserChip, FallbackSearch } from 'components/structure';
import { useSocketChat } from 'contexts';
import { useDebounce } from 'hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useChats } from 'useCases';

export const ChatList = () => {
  const [name, setName] = useState('');
  const { data } = useChats({ name });
  const { handlePrivateJoinChannel } = useSocketChat();
  const { register, watch } = useForm();

  const uuid = watch('uuid');

  const chats = data?.chats;

  const handleSearchByName = useDebounce((value: string) => setName(value), 350);

  return (
    <>
      <TextField
        name="uuid"
        ref={register}
        color="secondary"
        label="Pesquise um usuario"
        placeholder="Pesquise um usuario"
        isSearch
        inputSize="small"
        onChange={({ target: { value } }) => handleSearchByName(value)}
        autoComplete="off"
      />

      {chats?.map(({ id, name, avatar, lastMessage }) => (
        <UserChip
          key={id}
          name={name}
          avatar={avatar}
          onClick={() => handlePrivateJoinChannel(id)}
          size="normal"
          hasBorder
          lastMessage={lastMessage}
        />
      ))}

      {!chats?.length && (
        <FallbackSearch type={uuid ? 'search' : 'chat'} />
      )}
    </>
  );
};
