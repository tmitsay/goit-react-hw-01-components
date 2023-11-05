import css from './friend_list.module.css';

export const FriendListItem = ({ avatar, name, status }) => {
  // const online = { status };

  // console.log(online);

  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${
          status === true ? css.active : css.offline
        }`}
      >
        {status}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
