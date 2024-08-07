// add type for UserCard's Props
interface UserCardProps {
    name: string;
    email: string;
    imgUrl: string;
    address: string;
  }
  
  // add type for UserCardDetail's Props
  interface UserCardDetailProps {
    email: string;
    address: string;
  }
  
  export type { UserCardProps, UserCardDetailProps };