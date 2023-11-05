import css from './friend_list.module.css';
import { FriendListItem } from './friend_list_item';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          status={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};
